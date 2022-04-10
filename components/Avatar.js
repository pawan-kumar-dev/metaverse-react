import Image from 'next/image'
import React from 'react'
import { useMoralis } from 'react-moralis'

const Avatar = ({ username, logoutOnPress = false }) => {
  const { user, logout } = useMoralis()
  return (
    <Image
      src={`https://avatars.dicebear.com/api/pixel-art/${
        username || user.get('username')
      }.svg`}
      layout="fill"
      className="cursor-pointer rounded-full bg-black hover:opacity-75"
      onClick={() => logoutOnPress && logout()}
    />
  )
}

export default Avatar
