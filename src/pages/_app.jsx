import '../styles/globals.css'
import Head from 'next/head'
import { useCounter } from '../components/hooks/useCounter'
import { useInputArray } from '../components/hooks/useInputArray'
import { useBgColor } from '../components/hooks/useBgColor'

function MyApp({ Component, pageProps }) {
  const counter=useCounter();
  const inputArray=useInputArray();
  useBgColor();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} {...counter} {...inputArray} />
    </>
  )

}

export default MyApp
