// app/page.tsx または pages/index.tsx

import { MyClient } from "./_src/libs/client";

export async function generateStaticParams() {
  const response = await MyClient.get({ endpoint: "blog" });

  return {
    paths: response.contents.map((item: any) => ({
      params: { id: item.id }
    })),
    fallback: false
  };
}

export async function getStaticProps() {
  const response = await MyClient.get({ endpoint: "blog" });

  return {
    props: {
      contents: response.contents
    }
  };
}

const Home = ({ contents }: { contents: any[] }) => {
  return (
    <>
      {contents ? (
        <ul>
          {contents.map((item: any) => (
            <li key={item.id}>
              <a href={`/${item.id}.html`}>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

export default Home;
