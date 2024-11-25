
import LocationSearchComponent from "@/app/_src/features/location-search-component";

const PageHome = async() => {

  return (
    <>
      {/* <section>
        <h2>リファラのクエリパラメータ取得の試み</h2>
        <SearchQueryChecker />
      </section>
      <section>
        <h2>history apiの試み</h2>
        <PreviousPage />
      </section> */}
      <section>
        <h2>緯度経度を取得して都道府県を返す</h2>
        <LocationSearchComponent />
      </section>
    </>
  );
}

export default PageHome;
