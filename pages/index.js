import { readFile } from "fs/promises";
import { join } from "path";

import { useState } from "react";

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
  const [orderBy, setOrderBy] = useState("lowest");
  const [sortBy, setSortBy] = useState("nama");

  let sorted = [...lalapan];
  let table = [...tabel];

  sorted = sortData(orderBy, sortBy, sorted);
  ({ sorted, table } = moveColumn(sortBy, sorted, table));

  return (
    <article>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
        <Sort sortBy={sortBy} setSortBy={setSortBy} />
        <Order orderBy={orderBy} sortBy={sortBy} setOrderBy={setOrderBy} />
      </div>
      <Table sortBy={sortBy} sorted={sorted} table={table} />
    </article>
  );
}

export async function getStaticProps() {
  const path = join(process.cwd(), "json", "lalapan.json");
  const data = await readFile(path);
  const { lalapan, tabel } = JSON.parse(data);
  const overview = lalapan.map((info) => {
    return {
      id: info.id,
      nama: info.nama,
      air: info.air,
      energi: info.energi,
      protein: info.protein,
      lemak: info.lemak,
      karbohidrat: info.karbohidrat,
      serat: info.serat,
      kalsium: info.kalsium,
      fosfor: info.fosfor,
      besi: info.besi,
      natrium: info.natrium,
      kalium: info.kalium,
      vitamin_c: info.vitamin_c,
      bdd: info.bdd,
    };
  });

  return { props: { lalapan: overview, tabel } };
}
