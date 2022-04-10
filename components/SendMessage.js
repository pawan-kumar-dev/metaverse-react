import React, { useState } from 'react'
import { useMoralis } from 'react-moralis'

const SendMessage = ({ messageRef }) => {
  const { user, Moralis } = useMoralis()
  const [text, setText] = useState()
  const sendMessage = (e) => {
    e.preventDefault()
    if (text) {
      const Messages = Moralis.Object.extend('Messages')
      const messages = new Messages()
      messages.save({
        message: text,
        username: user.getUsername(),
        ethAddress: user.get('ethAddress'),
      })
      if (messageRef) {
        messageRef.current.scrollIntoView({
          behavior: 'smooth',
        })
      }
      setText('')
    }
  }
  return (
    <form className="fixed bottom-10 flex w-11/12 max-w-2xl rounded-full border-4 border-blue-400 bg-black  px-6 py-4 shadow-xl ">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={`Enter a message ${user.getUsername()}`}
        className=" mr-1 flex-grow bg-transparent text-white placeholder-gray-500 outline-none"
      />
      <button onClick={sendMessage} className="font-bold text-pink-500">
        Send
      </button>
    </form>
  )
}

export default SendMessage
