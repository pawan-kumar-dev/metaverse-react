import type { NextPage } from 'next'
import Head from 'next/head'
import { useMoralis } from 'react-moralis'
import { Login, Header, Messages } from '../components'

const Home: NextPage = () => {
  const { isAuthenticated } = useMoralis()
  if (!isAuthenticated) return <Login />
  return (
    <div className="h-screen overflow-hidden overflow-y-scroll bg-gradient-to-b from-black to-fuchsia-900">
      <Head>
        <title>Meta-verse-app</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" mx-auto max-w-screen-2xl ">
        <Header />
        <Messages />
      </div>
    </div>
  )
}

export default Home
