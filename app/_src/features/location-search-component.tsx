'use client';

import { useEffect, useState } from 'react';

type Location = {
  latitude: number;
  longitude: number;
};

const LocationSearchComponent = () => {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    // 位置情報がサポートされているか確認
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });

          // 位置情報をGoogle Maps APIなどで住所に変換する場合はここに実装
          console.log(`緯度: ${latitude}, 経度: ${longitude}`);
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

  return (
    <div>
      <h3>現在地情報</h3>
      {error && <p>{error}</p>}
      {location ? (
        <p>緯度: {location.latitude}, 経度: {location.longitude}</p>
      ) : (
        <p>位置情報を取得中...</p>
      )}
    </div>
  );
};

export default LocationSearchComponent;