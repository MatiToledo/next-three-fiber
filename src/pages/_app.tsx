import {AppProps} from 'next/app'
import Head from 'next/head'

import GlobalStyle from 'styles/globals'

export default function MyApp({Component, pageProps}: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>React Three Fiber | JohnAnon Examples</title>
      </Head>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  )
}
