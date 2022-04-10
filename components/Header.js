import Image from 'next/image'
import React from 'react'
import Avatar from './Avatar'
import { useMoralis } from 'react-moralis'
import ChangeUserName from './ChangeUserName'

const Header = () => {
  const { user } = useMoralis()
  return (
    <div className=" sticky top-0 z-50 border-b-2 border-pink-700 bg-black p-5  text-pink-500 shadow-sm ">
      <div className="grid grid-cols-5 items-end lg:grid-cols-6 lg:items-center">
        <div className=" relative mx-auto hidden  h-24 w-24 lg:inline-grid ">
          <Image
            layout="fill"
            className="  rounded-full "
            src="https://static.vecteezy.com/system/resources/previews/004/263/114/large_2x/meta-logo-meta-by-facebook-icon-editorial-logo-for-social-media-free-vector.jpg"
          />
        </div>
        <div className=" col-span-4 text-left lg:text-center">
          <div className="relative mx-auto h-48 w-48 rounded-full border-8 border-pink-500 ">
            <Avatar logoutOnPress={true} />
          </div>
          <h1 className=" text-3xl ">Welcome to meta-verse</h1>
          <h2 className=" truncate text-5xl font-bold ">
            {user.getUsername()}
          </h2>
          <ChangeUserName />
        </div>
      </div>
    </div>
  )
}

export default Header
