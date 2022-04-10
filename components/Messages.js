import React, { useRef } from 'react'
import { useMoralis, ByMoralis, useMoralisQuery } from 'react-moralis'
import SendMessage from './SendMessage'
import Message from './Message'

const MIN_DURATION = 15

const Messages = () => {
  const { user } = useMoralis()
  const messageRef = useRef(null)
  const { data, isLoading, error } = useMoralisQuery(
    'Messages',
    (query) =>
      query
        .ascending('createdAt')
        .greaterThan(
          'createdAt',
          new Date(Date.now() - 1000 * 60 * MIN_DURATION)
        ),
    [],
    {
      live: true,
    }
  )
  return (
    <div className="pb-50">
      <div className="my-5">
        <ByMoralis variant="dark" style={{ margin: '0 auto' }} />
      </div>
      <div className=" space-y-10 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage messageRef={messageRef} />
      </div>
      <div ref={messageRef} className="mt-5 pb-40 text-center text-gray-400">
        <p>You`re up to date {user.getUsername()}</p>
      </div>
    </div>
  )
}

export default Messages
