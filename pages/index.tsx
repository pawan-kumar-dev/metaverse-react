import type { NextPage } from 'next'
import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from 'react-moralis'

const Home: NextPage = () => {
  const { isAuthenticated, logout } = useMoralis()
  if (!isAuthenticated) return <Login />
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Welcome to the app</h1>
      <button onClick={logout}>Logout</button>
    </div>
  )
}

export default Home
