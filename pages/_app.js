import '../styles/globals.css'
import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
  console.log('process============', process.env.NEXT_PUBLIC_APP_ID)
  return (
    <MoralisProvider
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
      appId={process.env.NEXT_PUBLIC_APP_ID}
    >
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
