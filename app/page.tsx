
import { MyClient } from "./_src/libs/client";

const Home = async() => {
  const response = await MyClient.get({ endpoint: "blog" });
  console.log(response)

  return (
    <>
    {response ? (
      <ul>
        {response.contents.map((item:any, key:number) => (
        <li key={key}>
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