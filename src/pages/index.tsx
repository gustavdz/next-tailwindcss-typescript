import Head from 'next/head';
import { Header } from 'src/components/Header';
export default function Home() {
  return (
    <>
      <Head>
        <title> Gustavo Decker - FullStack Developer</title>
      </Head>
      <Header />
      <main>
        <section className="mt-32 px-2">
          {/* <h1 className="font-mono text-xl code"> */}
          <h1 className="max-w-5xl mx-auto font-extrabold text-center text-black text-8xl">
            Welcome to <span className="text-purple-700">Nextjs</span>,{' '}
            <span className="text-indigo-700">TailwindCSS</span> and <span className="text-gray-700">TypeScript</span>
          </h1>
        </section>
      </main>
    </>
  );
}
