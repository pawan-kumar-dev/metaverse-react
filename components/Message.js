import React from 'react'
import { useMoralis } from 'react-moralis'
import Avatar from './Avatar'
import TimeAgo from 'timeago-react'

const Message = ({ message }) => {
  const { user } = useMoralis()
  const isUserMessage = message.get('ethAddress') === user.get('ethAddress')
  return (
    <div
      className={` relative flex items-end space-x-2 ${
        isUserMessage && 'justify-end'
      } `}
    >
      <div
        className={` relative h-4 w-4 ${isUserMessage && ' order-last ml-2 '} `}
      >
        <Avatar username={message.get('username')} />
      </div>
      <div
        className={` flex space-x-4 rounded-lg p-3  ${
          isUserMessage
            ? `rounded-br-none bg-pink-300`
            : `rounded-bl-none bg-blue-400`
        } `}
      >
        <p>{message.get('message')}</p>
      </div>
      <TimeAgo
        className={` text-[10px] italic text-gray-400 ${
          isUserMessage && `order-first pr-1`
        } `}
        datetime={message.createdAt}
      />
      <span
        className={`absolute -bottom-5 w-20 truncate text-xs ${
          isUserMessage
            ? ` text-right text-pink-300 `
            : `text-left text-blue-400 `
        } `}
      >
        {message.get('username')}
      </span>
    </div>
  )
}

export default Message
