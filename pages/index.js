import { readFile } from "fs/promises";
import { join } from "path";

import Head from "next/head";

import { useSelector } from "react-redux";

import { Order, Sort } from "@/components/SortOrder";
import Table from "@/components/Table";

function sortData(orderBy, sortBy, sorted) {
  if (orderBy === "lowest") {
    if (sortBy !== "nama") {
      return sorted.sort((a, b) => a[sortBy] - b[sortBy]);
    }
    return sorted;
  } else {
    let reverseSorted = sorted.reverse();
    if (sortBy !== "nama") {
      reverseSorted = reverseSorted.sort((a, b) => b[sortBy] - a[sortBy]);
    }
    return reverseSorted;
  }
}

function moveColumn(sortBy, sorted, table) {
  sorted = sorted.map((item) => Object.entries(item));
  if (sortBy !== "nama") {
    let indexColumn;
    const column = sorted.map((item) =>
      item.find((key, index) => {
        if (key[0] === sortBy) {
          indexColumn = index;
        }
        return key[0] === sortBy;
      }),
    );
    const deleteColumn = sorted.map((item) =>
      item.filter((key) => key[0] !== sortBy),
    );
    sorted = deleteColumn.filter((item, index) =>
      item.splice(2, 0, column[index]),
    );

    const saveColumnName = table[indexColumn];
    table.splice(indexColumn, 1);
    table.splice(2, 0, saveColumnName);
  }

  return { sorted, table };
}

export default function Home({ lalapan, tabel }) {
  const orderBy = useSelector((state) => state.sortOrder.orderBy);
  const sortBy = useSelector((state) => state.sortOrder.sortBy);

  let sorted = [...lalapan];
  let table = [...tabel];

  sorted = sortData(orderBy, sortBy, sorted);
  ({ sorted, table } = moveColumn(sortBy, sorted, table));

  return (
    <>
      <Head>
        <meta property="og:url" content="https://lalapan.vercel.app/" />
        <meta property="og:title" content="Gizi Lalapan" />
        <meta
          property="og:description"
          content="Aplikasi web tentang komposisi gizi pada lalapan."
        />
      </Head>

      <article>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <Sort />
          <Order />
        </div>
        <Table sorted={sorted} table={table} />
      </article>
    </>
  );
}

export async function getStaticProps() {
  const path = join(process.cwd(), "json", "overview.json");
  const data = await readFile(path);
  const { lalapan, tabel } = JSON.parse(data);

  return { props: { lalapan, tabel } };
}
