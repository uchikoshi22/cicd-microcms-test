"use client";

import { useEffect, useState } from 'react';

const PreviousPage = () => {
  const [previousUrl, setPreviousUrl] = useState('');

  useEffect(() => {
    // 前のページの URL を取得して state にセット
    setPreviousUrl(document.referrer);
  }, []);

  return (
    <div>
      <h1>前のページ</h1>
      {previousUrl ? (
        <p>前のページの URL: <a href={previousUrl}>{previousUrl}</a></p>
      ) : (
        <p>前のページの情報がありません</p>
      )}
    </div>
  );
};

export default PreviousPage;
