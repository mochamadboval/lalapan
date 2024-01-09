import Head from "next/head";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

import "@/styles/globals.css";

const font = Plus_Jakarta_Sans({
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: "variable",
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="Aplikasi web tentang komposisi gizi pada lalapan."
        />
        <title>Gizi Lalapan</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🥬</text></svg>"
        ></link>
      </Head>

      <header
        className={`${font.className} px-4 py-8 sm:px-8 lg:px-12 xl:px-4`}
      >
        <h1 className="text-5xl font-semibold leading-tight">
          <Link href="/" prefetch={false}>
            Gizi Lalapan
          </Link>
        </h1>
        <p className="mt-4 text-2xl font-light leading-normal">
          Berdasarkan data Tabel Komposisi Pangan Indonesia tahun 2017.
        </p>
      </header>
      <main className={`${font.className} mx-4 py-8 sm:mx-8 lg:mx-12 xl:mx-4`}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
