import { readFile } from "fs/promises";
import { join } from "path";

import { useState } from "react";

import SortOrder from "@/components/SortOrder";
import Table from "@/components/Table";

export default function Home({ lalapan }) {
  const [sortBy, setSortBy] = useState("nama");

  let sorted = [...lalapan];
  if (sortBy !== "nama") {
    sorted = sorted.sort((a, b) => a[sortBy] - b[sortBy]);
  }

  return (
    <article>
      <SortOrder sortBy={sortBy} setSortBy={setSortBy} />
      <Table sorted={sorted} />
    </article>
  );
}

export async function getStaticProps() {
  const path = join(process.cwd(), "json", "lalapan.json");
  const data = await readFile(path);
  const { lalapan } = JSON.parse(data);

  return { props: { lalapan } };
}
