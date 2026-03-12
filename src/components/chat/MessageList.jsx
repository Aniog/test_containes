import React, { useEffect, useRef } from 'react'
import { Loader2, AlertCircle } from 'lucide-react'
import ChatMessage from './ChatMessage'

const MessageList = ({ messages, loading, error, currentUsername }) => {
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-2">
          <Loader2 className="animate-spin text-blue-500" size={32} />
          <p className="text-gray-600">Loading messages...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50">
        <div className="text-red-500 flex gap-2 p-4 items-center bg-red-50 rounded-md border border-red-100">
          <AlertCircle size={20} />
          <span>Error loading messages: {error}</span>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
      {messages.length === 0 ? (
        <div className="flex items-center justify-center h-full">
          <div className="text-center text-gray-500">
            <p className="text-lg mb-2">Welcome to the chat room!</p>
            <p className="text-sm">Start a conversation by sending a message below.</p>
          </div>
        </div>
      ) : (
        <div className="space-y-2">
          {messages.map((message, index) => (
            <ChatMessage
              key={message.id || index}
              message={message}
              isOwnMessage={message.username === currentUsername}
            />
          ))}
          <div ref={messagesEndRef} />
        </div>
      )}
    </div>
  )
}

export default MessageList