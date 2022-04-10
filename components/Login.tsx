import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'

const Login = () => {
  const { authenticate } = useMoralis()
  return (
    <div className="relative bg-black">
      <div className="absolute z-50 flex h-4/6 w-full flex-col items-center justify-center space-y-4">
        <Image
          src={
            'https://www.xrtoday.com/wp-content/uploads/2021/12/When_Will_Metaverse_Be_Here.jpg'
          }
          className="rounded-full"
          width={200}
          height={200}
          objectFit="cover"
        />
        <button
          onClick={() => authenticate()}
          className="hover: animate-pulse rounded-lg bg-yellow-500 p-5 font-bold"
        >
          Login to MetaVerse
        </button>
      </div>
      <div className="h-screen w-screen ">
        <Image
          src="https://imageio.forbes.com/specials-images/imageserve/62380c71af36178f0f91f59d/0x0.jpg?format=jpg&width=1200"
          layout="fill"
          //   objectFit="contain"
        />
      </div>
    </div>
  )
}

export default Login
