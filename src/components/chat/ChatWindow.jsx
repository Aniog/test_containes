import React, { useState, useEffect, useRef, useCallback } from 'react'
import { Send, ChevronLeft } from 'lucide-react'
import Avatar from './Avatar.jsx'
import { fetchMessages, sendMessage, markMessagesRead } from '../../api/chat.js'
import { formatMessageTime } from '../../lib/utils.js'

const ChatWindow = ({ currentUser, otherUserId, otherUserData, onBack }) => {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [sending, setSending] = useState(false)
  const [loading, setLoading] = useState(true)
  const bottomRef = useRef(null)
  const lastTimestampRef = useRef(null)
  const inputRef = useRef(null)

  const otherNickname = otherUserData?.nickname || otherUserId

  const loadMessages = useCallback(async () => {
    try {
      const msgs = await fetchMessages(currentUser.userId, otherUserId)
      setMessages(msgs)
      if (msgs.length > 0) {
        lastTimestampRef.current = msgs[msgs.length - 1].data.sent_at
      }
      await markMessagesRead(currentUser.userId, otherUserId, currentUser.userId)
    } catch (err) {
      console.error('Failed to load messages:', err)
    } finally {
      setLoading(false)
    }
  }, [currentUser.userId, otherUserId])

  useEffect(() => {
    setLoading(true)
    setMessages([])
    loadMessages()
  }, [otherUserId, loadMessages])

  useEffect(() => {
    const interval = setInterval(async () => {
      try {
        const msgs = await fetchMessages(currentUser.userId, otherUserId)
        setMessages(msgs)
        if (msgs.length > 0) {
          lastTimestampRef.current = msgs[msgs.length - 1].data.sent_at
        }
        await markMessagesRead(currentUser.userId, otherUserId, currentUser.userId)
      } catch (err) {
        console.error('Polling error:', err)
      }
    }, 3000)
    return () => clearInterval(interval)
  }, [currentUser.userId, otherUserId])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleSend = async () => {
    const text = input.trim()
    if (!text || sending) return

    setInput('')
    setSending(true)

    const optimistic = {
      id: `temp-${Date.now()}`,
      data: {
        sender_id: currentUser.userId,
        receiver_id: otherUserId,
        content: text,
        sent_at: new Date().toISOString(),
        is_read: false,
      },
      _optimistic: true,
    }
    setMessages(prev => [...prev, optimistic])

    try {
      const saved = await sendMessage(currentUser.userId, otherUserId, text)
      setMessages(prev => prev.map(m => m.id === optimistic.id ? saved : m))
      lastTimestampRef.current = saved.data.sent_at
    } catch (err) {
      console.error('Send error:', err)
      setMessages(prev => prev.filter(m => m.id !== optimistic.id))
      setInput(text)
    } finally {
      setSending(false)
      inputRef.current?.focus()
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className="flex flex-col h-full bg-[#EDEDED]">
      {/* Header */}
      <div className="bg-[#EDEDED] border-b border-gray-200 px-4 py-3 flex items-center gap-3 flex-shrink-0">
        <button
          onClick={onBack}
          className="md:hidden text-gray-600 hover:text-gray-800 p-1"
        >
          <ChevronLeft size={22} />
        </button>
        <Avatar userId={otherUserId} nickname={otherNickname} size={36} />
        <div>
          <p className="font-medium text-gray-800 text-sm">{otherNickname}</p>
          <p className="text-xs text-gray-400">{otherUserId}</p>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
        {loading && (
          <div className="text-center text-gray-400 text-sm py-4">加载消息中...</div>
        )}
        {!loading && messages.length === 0 && (
          <div className="text-center py-8">
            <p className="text-gray-400 text-sm">开始和 {otherNickname} 聊天吧！</p>
          </div>
        )}
        {messages.map((msg) => {
          const d = msg.data
          const isMine = d.sender_id === currentUser.userId
          return (
            <div
              key={msg.id}
              className={`flex items-end gap-2 ${isMine ? 'flex-row-reverse' : 'flex-row'}`}
            >
              {!isMine && (
                <Avatar userId={otherUserId} nickname={otherNickname} size={36} className="flex-shrink-0" />
              )}
              <div className={`flex flex-col ${isMine ? 'items-end' : 'items-start'} max-w-[70%]`}>
                <div
                  className={`px-3 py-2 rounded-2xl text-sm leading-relaxed break-words ${
                    isMine
                      ? 'bg-[#95EC69] text-gray-800 rounded-br-sm'
                      : 'bg-white text-gray-800 rounded-bl-sm shadow-sm'
                  } ${msg._optimistic ? 'opacity-70' : ''}`}
                >
                  {d.content}
                </div>
                <span className="text-xs text-gray-400 mt-1 px-1">
                  {formatMessageTime(d.sent_at)}
                </span>
              </div>
              {isMine && (
                <Avatar userId={currentUser.userId} nickname={currentUser.nickname} size={36} className="flex-shrink-0" />
              )}
            </div>
          )
        })}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="bg-[#F7F7F7] border-t border-gray-200 px-3 py-3 flex items-end gap-2 flex-shrink-0">
        <textarea
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="发送消息..."
          rows={1}
          className="flex-1 bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-gray-300 resize-none max-h-24 overflow-y-auto"
          style={{ minHeight: '38px' }}
        />
        <button
          onClick={handleSend}
          disabled={!input.trim() || sending}
          className="bg-[#07C160] hover:bg-[#06AD56] disabled:opacity-40 text-white p-2.5 rounded-lg transition-colors flex-shrink-0"
        >
          <Send size={18} />
        </button>
      </div>
    </div>
  )
}

export default ChatWindow
