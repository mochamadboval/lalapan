import Head from "next/head";
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

      <main className={font.className}>
        <Component {...pageProps} />
      </main>
    </>
  );
}
