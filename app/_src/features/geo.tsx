// // スクリプトを読み込む関数
// const loadScript = (url: string): Promise<void> => {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement("script");
//     script.src = url;
//     script.async = true;
//     script.onload = () => resolve();
//     script.onerror = (error) => reject(new Error(`Failed to load script: ${url}`));
//     document.head.appendChild(script);
//   });
// };

// // 順番にスクリプトを読み込む関数
// const loadScriptSequentially = async (urls: string[]): Promise<void> => {
//   for (const url of urls) {
//     await loadScript(url); // 1つずつ順番にロード
//   }
// };

// // muni.js と gsi.js を読み込む関数
// const loadMuniJs = async (): Promise<void> => {
//   if (window.GSI?.MUNI_ARRAY) {
//     console.log("GSI.MUNI_ARRAY is already loaded.");
//     return; // 既にロード済みなら何もしない
//   }

//   try {
//     console.log("Loading gsi.js and muni.js in sequence...");
//     await loadScriptSequentially([
//       "https://maps.gsi.go.jp/js/gsi.js",
//       "https://maps.gsi.go.jp/js/muni.js",
//     ]);
//     console.log("gsi.js and muni.js loaded successfully.");
//   } catch (error) {
//     console.error("Failed to load required scripts:", error);
//     throw new Error("Failed to load required scripts for muni.js");
//   }
// };

// // GSI オブジェクトが正常に初期化されているかを確認
// const checkGSIInitialization = () => {
//   if (!window.GSI || !window.GSI.MUNI_ARRAY) {
//     console.error("GSI.MUNI_ARRAY is not defined. Please check gsi.js or muni.js.");
//     return false;
//   }
//   return true;
// };

// // 都道府県コードを取得する関数
// const getPrefectureCodeFromLatLon = async (lat: number, lon: number): Promise<string | undefined> => {
//   if (!checkGSIInitialization()) {
//     return undefined; // GSI.MUNI_ARRAY が正しくロードされていない場合は処理を中断
//   }

//   try {
//     const muniCode = getMuniCodeFromLatLon(lat, lon); // 例: 緯度・経度から市町村コードを取得
//     const prefectureCode = await getPrefectureCodeFromMuniCd(muniCode);
//     console.log("取得した都道府県コード:", prefectureCode);
//     return prefectureCode;
//   } catch (error) {
//     console.error("Error in getting prefecture code:", error);
//     return undefined;
//   }
// };

// // 市町村コードから都道府県コードを取得する関数
// const getPrefectureCodeFromMuniCd = async (muniCode: string): Promise<string> => {
//   try {
//     // MUNI_ARRAY から都道府県コードを取得（仮の実装）
//     const prefectureCode = window.GSI.MUNI_ARRAY[muniCode]?.prefectureCode;
//     if (!prefectureCode) {
//       throw new Error("都道府県コードが見つかりません");
//     }
//     return prefectureCode;
//   } catch (error) {
//     console.error("Error in getPrefectureCodeFromMuniCd:", error);
//     throw error;
//   }
// };

// // 仮の関数: 緯度・経度から市町村コードを取得する処理
// const getMuniCodeFromLatLon = (lat: number, lon: number): string => {
//   // 実際の市町村コード取得ロジックに置き換え
//   return "123456"; // 例: 市町村コード
// };

// // 使用例: 緯度・経度を渡して都道府県コードを取得
// const fetchPrefectureCode = async (lat: number, lon: number) => {
//   try {
//     const prefectureCode = await getPrefectureCodeFromLatLon(lat, lon);
//     console.log("取得した都道府県コード:", prefectureCode);
//   } catch (error) {
//     console.error("都道府県コード取得に失敗しました:", error);
//   }
// };

// // 実行例
// loadMuniJs().then(() => {
//   // 緯度・経度を適当な値に置き換えてテスト
//   fetchPrefectureCode(35.6895, 139.6917); // 東京の緯度・経度
// });
