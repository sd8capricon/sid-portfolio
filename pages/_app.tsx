import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Router from 'next/router';
import { useState } from 'react';
import Loader from '../components/Loader';

export default function App({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(false);
  Router.events.on('routeChangeStart', () => setLoading(true));
  Router.events.on('routeChangeComplete', () => setLoading(false));
  return (
    <>
      {loading ? <Loader /> : <Component {...pageProps} />}
    </>
  )
}
