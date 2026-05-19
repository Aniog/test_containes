import React, { useState, useEffect } from 'react'
import { Search, MessageSquare, User, LogOut } from 'lucide-react'
import Avatar from './Avatar.jsx'
import ConversationList from './ConversationList.jsx'
import ChatWindow from './ChatWindow.jsx'
import SearchPanel from './SearchPanel.jsx'
import { updateUserOnline, setUserOffline, findUserById } from '../../api/chat.js'

const MainApp = ({ currentUser, onLogout }) => {
  const [view, setView] = useState('chats') // 'chats' | 'search' | 'profile'
  const [selectedUserId, setSelectedUserId] = useState(null)
  const [selectedUserData, setSelectedUserData] = useState(null)
  const [showChat, setShowChat] = useState(false)
  const [convRefresh, setConvRefresh] = useState(0)

  // Keep user online
  useEffect(() => {
    updateUserOnline(currentUser.userId).catch(console.error)
    const interval = setInterval(() => {
      updateUserOnline(currentUser.userId).catch(console.error)
    }, 30000)

    const handleUnload = () => {
      setUserOffline(currentUser.userId).catch(console.error)
    }
    window.addEventListener('beforeunload', handleUnload)

    return () => {
      clearInterval(interval)
      window.removeEventListener('beforeunload', handleUnload)
    }
  }, [currentUser.userId])

  const handleSelectConversation = async (otherId, otherData) => {
    let userData = otherData
    if (!userData) {
      const found = await findUserById(otherId)
      userData = found?.data || null
    }
    setSelectedUserId(otherId)
    setSelectedUserData(userData)
    setShowChat(true)
    setView('chats')
  }

  const handleStartChat = (otherId, otherData) => {
    setSelectedUserId(otherId)
    setSelectedUserData(otherData)
    setShowChat(true)
    setView('chats')
    setConvRefresh(n => n + 1)
  }

  const handleBack = () => {
    setShowChat(false)
  }

  const handleLogout = async () => {
    await setUserOffline(currentUser.userId).catch(console.error)
    localStorage.removeItem('wx_user_id')
    localStorage.removeItem('wx_nickname')
    localStorage.removeItem('wx_avatar_color')
    onLogout()
  }

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Sidebar */}
      <div className={`flex flex-col bg-[#2C2C2C] w-14 flex-shrink-0`}>
        {/* User Avatar */}
        <div className="flex justify-center py-4 border-b border-white/10">
          <Avatar userId={currentUser.userId} nickname={currentUser.nickname} size={36} />
        </div>

        {/* Nav Icons */}
        <div className="flex flex-col items-center py-3 gap-1 flex-1">
          <button
            onClick={() => setView('chats')}
            className={`p-3 rounded-lg transition-colors ${view === 'chats' ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white hover:bg-white/10'}`}
            title="消息"
          >
            <MessageSquare size={22} />
          </button>
          <button
            onClick={() => setView('search')}
            className={`p-3 rounded-lg transition-colors ${view === 'search' ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white hover:bg-white/10'}`}
            title="搜索"
          >
            <Search size={22} />
          </button>
          <button
            onClick={() => setView('profile')}
            className={`p-3 rounded-lg transition-colors ${view === 'profile' ? 'bg-white/20 text-white' : 'text-white/50 hover:text-white hover:bg-white/10'}`}
            title="我"
          >
            <User size={22} />
          </button>
        </div>

        {/* Logout */}
        <div className="flex justify-center py-4 border-t border-white/10">
          <button
            onClick={handleLogout}
            className="p-3 text-white/40 hover:text-white/80 transition-colors"
            title="退出登录"
          >
            <LogOut size={20} />
          </button>
        </div>
      </div>

      {/* Left Panel */}
      <div className={`w-72 flex-shrink-0 border-r border-gray-200 flex flex-col ${showChat ? 'hidden md:flex' : 'flex'}`}>
        {view === 'chats' && (
          <>
            <div className="px-4 py-3 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800 text-base">消息</h2>
            </div>
            <ConversationList
              currentUser={currentUser}
              onSelectConversation={handleSelectConversation}
              selectedUserId={selectedUserId}
              refreshTrigger={convRefresh}
            />
          </>
        )}

        {view === 'search' && (
          <SearchPanel
            currentUser={currentUser}
            onStartChat={handleStartChat}
            onClose={() => setView('chats')}
          />
        )}

        {view === 'profile' && (
          <div className="flex flex-col h-full">
            <div className="px-4 py-3 border-b border-gray-100">
              <h2 className="font-semibold text-gray-800 text-base">我</h2>
            </div>
            <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
              <Avatar userId={currentUser.userId} nickname={currentUser.nickname} size={72} />
              <p className="mt-3 font-semibold text-gray-800 text-lg">{currentUser.nickname}</p>
              <div className="mt-2 bg-gray-100 rounded-lg px-4 py-2">
                <p className="text-xs text-gray-500 mb-0.5">我的 ID</p>
                <p className="font-mono font-bold text-gray-800 text-base tracking-widest">{currentUser.userId}</p>
              </div>
              <p className="text-xs text-gray-400 mt-3">将此 ID 分享给朋友，让他们搜索你</p>
              <button
                onClick={() => {
                  navigator.clipboard?.writeText(currentUser.userId)
                }}
                className="mt-3 text-[#07C160] text-sm hover:underline"
              >
                复制 ID
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Right Panel - Chat */}
      <div className={`flex-1 flex flex-col ${!showChat ? 'hidden md:flex' : 'flex'}`}>
        {selectedUserId ? (
          <ChatWindow
            currentUser={currentUser}
            otherUserId={selectedUserId}
            otherUserData={selectedUserData}
            onBack={handleBack}
          />
        ) : (
          <div className="flex-1 flex flex-col items-center justify-center text-center bg-[#EDEDED]">
            <div className="text-6xl mb-4">💬</div>
            <p className="text-gray-500 text-base font-medium">微信 Web</p>
            <p className="text-gray-400 text-sm mt-1">选择一个对话开始聊天</p>
            <p className="text-gray-300 text-xs mt-4">
              你的 ID：<span className="font-mono font-bold text-gray-400">{currentUser.userId}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export default MainApp
