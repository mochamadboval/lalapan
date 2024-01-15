import Head from "next/head";
import Link from "next/link";
import { Plus_Jakarta_Sans } from "next/font/google";

import { Provider } from "react-redux";
import store from "@/store";

import "@/styles/globals.css";

const font = Plus_Jakarta_Sans({
  style: ["normal", "italic"],
  subsets: ["latin"],
  weight: "variable",
});

function AsideSection({ children, title }) {
  return (
    <section className="sm:w-1/2">
      <h3 className="text-2xl font-semibold leading-tight">{title}</h3>
      <p className="mt-2">{children}</p>
    </section>
  );
}

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
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
      <main
        className={`${font.className} mx-4 pb-16 pt-8 sm:mx-8 lg:mx-12 xl:mx-4`}
      >
        <Component {...pageProps} />
      </main>
      <aside
        className={`${font.className} flex flex-col gap-8 rounded-t-2xl bg-neutral-950 px-4 py-8 text-neutral-50 sm:flex-row sm:gap-4 sm:px-8 lg:px-12 xl:px-4`}
      >
        <AsideSection title="Tentang">
          Aplikasi web tentang komposisi gizi pada lalapan. Sumber data Tabel
          Komposisi Pangan Indonesia tahun 2017 dapat diakses juga melalui situs{" "}
          <a
            href="http://panganku.org/id-ID/beranda"
            className="text-green-400"
          >
            panganku.org
          </a>
          .
        </AsideSection>
        <AsideSection title="Kode Sumber">
          <a
            href="https://github.com/mochamadboval/lalapan"
            className="text-green-400"
          >
            github.com/mochamadboval/lalapan
          </a>
        </AsideSection>
      </aside>
      <footer
        className={`${font.className} border-t border-t-neutral-900 bg-neutral-950 px-4 py-4 text-center text-neutral-50 sm:flex-row sm:px-8 lg:px-12 xl:px-4`}
      >
        <small className="text-base font-semibold">
          Gizi Lalapan &copy; 2024 - MIT License
        </small>
      </footer>
    </Provider>
  );
}
