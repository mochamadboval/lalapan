import { readFile } from "fs/promises";
import { join } from "path";

import Head from "next/head";

export default function Detail({ lalapan }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content={`Komposisi gizi pada lalapan ${lalapan.nama}.`}
        />
        <title>{`${lalapan.nama} - Gizi Lalapan`}</title>
      </Head>

      <article>
        <h2 className="text-center text-4xl font-semibold leading-tight">
          {lalapan.nama}
        </h2>
        <p className="mt-4 text-center">
          Komposisi gizi per <strong className="font-semibold">100 gram</strong>{" "}
          dengan <strong className="font-semibold">berat dapat dimakan</strong>{" "}
          sebesar <strong className="font-semibold">{lalapan.bdd}%</strong>.
        </p>
        <div className="mt-4 flex flex-col gap-1 sm:flex-row sm:flex-wrap">
          {lalapan.komposisi.map((info, index) => (
            <p
              key={info.nama}
              className={`
                ${index % 2 === 0 ? "bg-white" : "bg-neutral-100"}
                flex items-center justify-between border border-neutral-200 p-2.5 sm:w-[calc((100%/3)-3px)]
              `}
            >
              <strong className="font-semibold">{info.nama}</strong>
              <span className="text-right">
                {info.nilai !== null ? `${info.nilai} ${info.unit}` : "-"}
              </span>
            </p>
          ))}
        </div>
      </article>
    </>
  );
}

export async function getStaticProps({ params }) {
  const path = join(process.cwd(), "json", "full.json");
  const data = await readFile(path);
  const { lalapan } = JSON.parse(data);
  const selected = lalapan.find((item) => item.id === params.id);

  if (!selected) {
    return { notFound: true };
  }
  return { props: { lalapan: selected } };
}

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: "blocking",
  };
}
