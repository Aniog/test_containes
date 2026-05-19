import React, { useState, useEffect, useRef } from 'react'
import Avatar from './Avatar.jsx'
import { formatTime } from '../../lib/utils.js'
import { fetchRecentConversations, findUserById } from '../../api/chat.js'

const ConversationList = ({ currentUser, onSelectConversation, selectedUserId, refreshTrigger }) => {
  const [conversations, setConversations] = useState([])
  const [userCache, setUserCache] = useState({})
  const [loading, setLoading] = useState(true)

  const loadConversations = async () => {
    try {
      const convs = await fetchRecentConversations(currentUser.userId)
      setConversations(convs)

      const uncached = convs.filter(c => !userCache[c.otherId]).map(c => c.otherId)
      if (uncached.length > 0) {
        const fetched = await Promise.all(uncached.map(id => findUserById(id)))
        const newCache = { ...userCache }
        uncached.forEach((id, i) => {
          if (fetched[i]) newCache[id] = fetched[i].data
        })
        setUserCache(newCache)
      }
    } catch (err) {
      console.error('Failed to load conversations:', err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadConversations()
  }, [currentUser.userId, refreshTrigger])

  useEffect(() => {
    const interval = setInterval(loadConversations, 5000)
    return () => clearInterval(interval)
  }, [currentUser.userId, userCache])

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <div className="text-gray-400 text-sm">加载中...</div>
      </div>
    )
  }

  if (conversations.length === 0) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <div className="text-5xl mb-3">💬</div>
        <p className="text-gray-400 text-sm">暂无对话</p>
        <p className="text-gray-300 text-xs mt-1">搜索好友 ID 开始聊天</p>
      </div>
    )
  }

  return (
    <div className="flex-1 overflow-y-auto">
      {conversations.map(({ otherId, lastMsg }) => {
        const otherUser = userCache[otherId]
        const nickname = otherUser?.nickname || otherId
        const msgData = lastMsg?.data || {}
        const isSelected = selectedUserId === otherId

        return (
          <button
            key={otherId}
            onClick={() => onSelectConversation(otherId, otherUser)}
            className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left ${
              isSelected ? 'bg-[#C7EDCA]' : ''
            }`}
          >
            <Avatar userId={otherId} nickname={nickname} size={48} />
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-800 truncate">{nickname}</span>
                <span className="text-xs text-gray-400 flex-shrink-0 ml-2">
                  {formatTime(msgData.sent_at)}
                </span>
              </div>
              <p className="text-xs text-gray-500 truncate mt-0.5">
                {msgData.sender_id === currentUser.userId ? '我: ' : ''}
                {msgData.content}
              </p>
            </div>
          </button>
        )
      })}
    </div>
  )
}

export default ConversationList
