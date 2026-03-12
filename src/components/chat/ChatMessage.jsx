import React from 'react'
import { User, Clock } from 'lucide-react'

const ChatMessage = ({ message, isOwnMessage = false }) => {
  const formatTime = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const isSystemMessage = message.message_type === 'system'

  if (isSystemMessage) {
    return (
      <div className="flex justify-center my-2">
        <div className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full">
          {message.message}
        </div>
      </div>
    )
  }

  return (
    <div className={`flex mb-4 ${isOwnMessage ? 'justify-end' : 'justify-start'}`}>
      <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
        isOwnMessage 
          ? 'bg-blue-500 text-white' 
          : 'bg-gray-200 text-gray-800'
      }`}>
        <div className="flex items-center gap-2 mb-1">
          <User size={14} className={isOwnMessage ? 'text-blue-100' : 'text-gray-500'} />
          <span className={`text-xs font-medium ${
            isOwnMessage ? 'text-blue-100' : 'text-gray-600'
          }`}>
            {message.username}
          </span>
          <Clock size={12} className={isOwnMessage ? 'text-blue-100' : 'text-gray-400'} />
          <span className={`text-xs ${
            isOwnMessage ? 'text-blue-100' : 'text-gray-500'
          }`}>
            {formatTime(message.timestamp)}
          </span>
        </div>
        <p className="text-sm break-words">{message.message}</p>
      </div>
    </div>
  )
}

export default ChatMessage