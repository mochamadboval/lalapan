import Head from "next/head";

export default function NotFound() {
  return (
    <>
      <Head>
        <meta property="og:url" content="https://lalapan.vercel.app/" />
        <meta property="og:title" content="404 - Gizi Lalapan" />
        <meta
          property="og:description"
          content="Aplikasi web tentang komposisi gizi pada lalapan."
        />
        <title>404 - Gizi Lalapan</title>
      </Head>

      <article className="py-32 text-center">
        <h2 className="text-4xl font-semibold leading-tight">404</h2>
        <p className="mt-2">Laman tidak ditemukan.</p>
      </article>
    </>
  );
}
