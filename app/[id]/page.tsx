import parse from "html-react-parser";
import { MyClient } from "../_src/libs/client";

const getBlogData = async (id: string) => {
  const data = await MyClient.get({ endpoint: "blog", contentId: id });
  return data;
};

export async function generateStaticParams() {
  const data = await MyClient.get({ endpoint: "blog" });

  return data.contents.map((blog: { id: string }) => ({
    id: blog.id,
  }));
}

const BlogDetail = async ({ params }: { params: { id: string } }) => {
  const response = await getBlogData(params.id);
  return (
    <section>
      <h2>{response.title}</h2>
      <div>{response.publishedAt}</div>
      <div>
        {parse(response.body)}
      </div>
    </section>
  );
}

export default BlogDetail;