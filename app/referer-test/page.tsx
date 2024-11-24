'use client';

import LocationSearchComponent from "@/app/_src/features/location-search-component";
import { useEffect, useState } from "react";

const SearchQueryChecker = () => {
  const [referrer, setReferrer] = useState("");
  useEffect(() => {
    // クライアントサイドでのみ動作
    const referrer = document.referrer;

    if (referrer.includes("google.com") && referrer.includes("福岡 Next.js")) {
      console.log("Googleから『福岡 Next.js』で検索して来訪");
      setReferrer("Googleから『福岡 Next.js』で検索して来訪");
    } else {
      // <p>{referrer}</p>
      console.log(referrer);
      setReferrer(referrer);
    }
  }, []);

  return (
    <>
      <div style={{marginBottom: "50px"}}>
        <p>Referrer: <span style={{color: "red"}}>{referrer}</span></p>
      </div>

      <div>
        <LocationSearchComponent />
      </div>
    </>

  )
};

export default SearchQueryChecker;
