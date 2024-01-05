import { readFile } from "fs/promises";
import { join } from "path";

import Table from "@/components/Table";

export default function Home({ lalapan }) {
  return (
    <article>
      <Table lalapan={lalapan} />
    </article>
  );
}

export async function getStaticProps() {
  const path = join(process.cwd(), "json", "lalapan.json");
  const data = await readFile(path);
  const { lalapan } = JSON.parse(data);

  return { props: { lalapan } };
}
