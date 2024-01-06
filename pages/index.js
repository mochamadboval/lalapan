import { readFile } from "fs/promises";
import { join } from "path";

import { useState } from "react";

import { Order, Sort } from "@/components/SortOrder";
import Table from "@/components/Table";

export default function Home({ lalapan }) {
  const [orderBy, setOrderBy] = useState("lowest");
  const [sortBy, setSortBy] = useState("nama");

  let sorted = [...lalapan];
  if (orderBy === "lowest") {
    if (sortBy !== "nama") {
      sorted = sorted.sort((a, b) => a[sortBy] - b[sortBy]);
    }
  } else {
    sorted = sorted.reverse();

    if (sortBy !== "nama") {
      sorted = sorted.sort((a, b) => b[sortBy] - a[sortBy]);
    }
  }

  return (
    <article>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
        <Sort sortBy={sortBy} setSortBy={setSortBy} />
        <Order orderBy={orderBy} sortBy={sortBy} setOrderBy={setOrderBy} />
      </div>
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
