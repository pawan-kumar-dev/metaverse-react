import React from 'react'
import { useMoralis } from 'react-moralis'

const ChangeUserName = () => {
  const { setUserData, isUserUpdating, userError, user } = useMoralis()
  const setUserName = () => {
    const username = prompt(`Enter your new username (${user.getUsername()}) ?`)
    if (username) {
      setUserData({
        username,
      })
    }
  }
  return (
    <form className=" absolute top-5 right-8 text-sm ">
      <button
        disabled={isUserUpdating}
        onClick={setUserName}
        className=" hover:text-pink-700 "
      >
        Change your username
      </button>
    </form>
  )
}

export default ChangeUserName
