import SearchQueryChecker from "@/app/referer-test/page";

const PageHome = async() => {

  return (
    <>
      <h1>Laboratory @zzlabs.net</h1>
      <section>
        <h2>Greeting</h2>
        <p>Welcome to zzlabs&apos; laboratory.</p>
        <p></p>
        <p>Thanx</p>
        <div>
          <SearchQueryChecker />
        </div>
      </section>
    </>
  );
}

export default PageHome;
