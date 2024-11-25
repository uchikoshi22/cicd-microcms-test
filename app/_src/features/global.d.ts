// global.d.ts
declare global {
  interface Window {
    GSI: {
      MUNI_ARRAY: { [key: string]: string };
    };
  }
}

export { }; // モジュールとして解釈させるため
