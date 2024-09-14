import { MyClient } from "./_src/libs/client";

export async function generateStaticParams() {
  const response = await MyClient.get({ endpoint: "blog" });

  return response.contents.map((item: any) => ({
    id: item.id
  }));
}

const Home = async() => {
  const response = await MyClient.get({ endpoint: "blog" });

  return (
    <>
      {response.contents ? (
        <ul>
          {response.contents.map((item: any) => (
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
