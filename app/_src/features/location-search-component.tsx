'use client';

import { GSI } from '@/app/_src/features/muni';
import { PrefectureCodes } from '@/app/_src/features/prefectures';
import { useEffect, useState } from 'react';

type Location = {
  latitude: number;
  longitude: number;
};

const LocationSearchComponent = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string>("");
  const [prefectureCode, setPrefectureCode] = useState<string | undefined>("");

  useEffect(() => {
    // 位置情報がサポートされているか確認
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

          // 緯度・経度を使って都道府県コードを取得
          const fetchPrefectureCode = async (latitude: number, longitude: number) => {
            try {
              const url = `https://mreversegeocoder.gsi.go.jp/reverse-geocoder/LonLatToAddress?lat=${latitude}&lon=${longitude}`;
              console.log('Requesting URL:', url);  // リクエストURLを確認
              const response = await fetch(url);
              const data = await response.json();
              console.log(data);  // レスポンス内容を確認

              // レスポンスデータから必要な情報を取得
              if (data.results) {
                const { muniCd, lv01Nm } = data.results;
                console.log(`muniコード: ${muniCd}, 地名: ${lv01Nm}`);
                
                // muniCdを使って都道府県コードを取得
                const code = getPrefectureCodeFromMuniCd(muniCd);
                console.log(`都道府県コード: ${code}`)
                setPrefectureCode(code);
              } else {
                console.error("結果が返っていません");
              }
            } catch (error) {
              console.error("Error fetching prefecture code:", error);
            }
          };

          // muniCdから都道府県コードを取得
          const getPrefectureCodeFromMuniCd = (muniCdInput: string) => {
            // GSI.MUNI_ARRAYから該当するデータを取得
            const muniData = GSI.MUNI_ARRAY[muniCdInput as keyof typeof GSI.MUNI_ARRAY];
            if (!muniData) {
              return undefined;
            }

            // カンマで分割して、都道府県コードを取得（最初の値）
            const [prefectureCode] = muniData.split(",");
            return prefectureCode;
          };

          fetchPrefectureCode(latitude, longitude);  // 正しく引数を渡す
        },
        (err) => {
          setError('位置情報の取得に失敗しました。');
          console.error(err);
        }
      );
    } else {
      setError('位置情報はサポートされていません');
    }
  }, []);

  // 都道府県コードから都道府県名を取得
  const getPrefectureName = (code: string | undefined) => {
    if (code && PrefectureCodes.prefectures[code as keyof typeof PrefectureCodes.prefectures]) {
      return PrefectureCodes.prefectures[code as keyof typeof PrefectureCodes.prefectures];
    }
    return undefined;
  };

  return (
    <div>
      <h3>現在地情報</h3>
      {error && <p>{error}</p>}
      {location ? (
        <div>
          <p>緯度: {location.latitude}, 経度: {location.longitude}</p>
          {prefectureCode ? (
            <p>都道府県名: {getPrefectureName(prefectureCode) || '取得失敗'}</p>  // 都道府県名を表示
          ) : (
            <p>都道府県コードを取得中...</p>
          )}
        </div>
      ) : (
        <p>位置情報を取得中...</p>
      )}
    </div>
  );
};

export default LocationSearchComponent;
