import { MyClient } from "@/app/_src/libs/client";

export async function generateStaticParams() {
  const response = await MyClient.get({ endpoint: "blog" });

  return response.contents.map((item: any) => ({
    id: item.id
  }));
}


const PageTest = async () => {
  const response = await MyClient.get({ endpoint: "blog" });

  return (
    <>
      <h1>TEST</h1>
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
  )
}

export default PageTest;