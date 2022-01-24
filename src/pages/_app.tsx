import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-yellow-400 flex flex-col min-h-screen align-center">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
