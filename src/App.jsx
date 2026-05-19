import { useState, useEffect } from 'react'
import LoginPage from './components/chat/LoginPage.jsx'
import MainApp from './components/chat/MainApp.jsx'
import { findUserById, updateUserOnline } from './api/chat.js'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [checking, setChecking] = useState(true)

  useEffect(() => {
    const savedId = localStorage.getItem('wx_user_id')
    const savedNickname = localStorage.getItem('wx_nickname')
    const savedColor = localStorage.getItem('wx_avatar_color')

    if (savedId && savedNickname) {
      findUserById(savedId)
        .then((user) => {
          if (user) {
            updateUserOnline(savedId).catch(console.error)
            setCurrentUser({
              userId: savedId,
              nickname: savedNickname,
              avatarColor: savedColor || '#07C160',
              dbRecord: user,
            })
          }
        })
        .catch(console.error)
        .finally(() => setChecking(false))
    } else {
      setChecking(false)
    }
  }, [])

  const handleLogin = (user) => {
    setCurrentUser(user)
  }

  const handleLogout = () => {
    setCurrentUser(null)
  }

  if (checking) {
    return (
      <div className="min-h-screen bg-[#EDEDED] flex items-center justify-center">
        <div className="text-gray-400 text-sm">加载中...</div>
      </div>
    )
  }

  if (!currentUser) {
    return <LoginPage onLogin={handleLogin} />
  }

  return <MainApp currentUser={currentUser} onLogout={handleLogout} />
}

export default App
