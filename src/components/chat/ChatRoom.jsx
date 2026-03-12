import React, { useState, useEffect } from 'react'
import { supabase } from '@/api/postgrest-client.js'
import { MessageCircle, Users, Wifi, WifiOff } from 'lucide-react'
import MessageList from './MessageList'
import MessageInput from './MessageInput'
import UsernameInput from './UsernameInput'

const ChatRoom = () => {
  const [messages, setMessages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [username, setUsername] = useState('')
  const [isConnected, setIsConnected] = useState(true)
  const [roomId] = useState('general') // Default room

  useEffect(() => {
    if (username) {
      fetchMessages()
      // Add user join message
      addSystemMessage(`${username} joined the chat`)
    }
  }, [username])

  const fetchMessages = async () => {
    try {
      setLoading(true)
      setError(null)

      const { data: responseData, error: apiError } = await supabase
        .from('ChatMessage')
        .select('*')
        .eq('room_id', roomId)
        .order('timestamp', { ascending: true })

      if (apiError) throw apiError

      const dataPayload = responseData?.data || {}
      setMessages(dataPayload.list || [])
      setIsConnected(true)

    } catch (err) {
      console.error('Fetch messages failed:', err)
      setError(err.message || 'Failed to load messages')
      setIsConnected(false)
    } finally {
      setLoading(false)
    }
  }

  const formatPayload = (rawData) => {
    return {
      username: String(rawData.username || ''),
      message: String(rawData.message || ''),
      timestamp: rawData.timestamp || new Date().toISOString(),
      room_id: String(rawData.room_id || roomId),
      message_type: rawData.message_type || 'text'
    }
  }

  const sendMessage = async (messageText) => {
    const rawMessageData = {
      username: username,
      message: messageText,
      timestamp: new Date().toISOString(),
      room_id: roomId,
      message_type: 'text'
    }

    const payload = formatPayload(rawMessageData)

    try {
      const { data: responseData, error } = await supabase
        .from('ChatMessage')
        .insert(payload)
        .select()

      if (error || !responseData?.success) {
        console.error("Send message failed:", error)
        throw new Error('Failed to send message')
      }

      // Add the new message to local state
      const createdMessage = responseData.data
      setMessages(prev => [...prev, createdMessage])
      setIsConnected(true)

    } catch (err) {
      console.error('Send message error:', err)
      setIsConnected(false)
      throw err
    }
  }

  const addSystemMessage = async (messageText) => {
    const rawSystemData = {
      username: 'System',
      message: messageText,
      timestamp: new Date().toISOString(),
      room_id: roomId,
      message_type: 'system'
    }

    const payload = formatPayload(rawSystemData)

    try {
      const { data: responseData, error } = await supabase
        .from('ChatMessage')
        .insert(payload)
        .select()

      if (error || !responseData?.success) {
        console.error("Add system message failed:", error)
        return
      }

      const createdMessage = responseData.data
      setMessages(prev => [...prev, createdMessage])

    } catch (err) {
      console.error('Add system message error:', err)
    }
  }

  const handleUsernameSet = async (newUsername) => {
    setUsername(newUsername)
  }

  // Show username input if no username is set
  if (!username) {
    return <UsernameInput onUsernameSet={handleUsernameSet} />
  }

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
              <MessageCircle className="text-blue-600" size={20} />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">Chat Room</h1>
              <p className="text-sm text-gray-500">Welcome, {username}!</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Users size={16} className="text-gray-400" />
              <span className="text-sm text-gray-600">General Room</span>
            </div>
            
            <div className="flex items-center gap-2">
              {isConnected ? (
                <>
                  <Wifi size={16} className="text-green-500" />
                  <span className="text-sm text-green-600">Connected</span>
                </>
              ) : (
                <>
                  <WifiOff size={16} className="text-red-500" />
                  <span className="text-sm text-red-600">Disconnected</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Messages */}
      <MessageList 
        messages={messages}
        loading={loading}
        error={error}
        currentUsername={username}
      />

      {/* Message Input */}
      <MessageInput 
        onSendMessage={sendMessage}
        disabled={!isConnected}
      />
    </div>
  )
}

export default ChatRoom