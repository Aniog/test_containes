import React, { useState } from 'react'
import { generateUserId, getAvatarColor } from '../../lib/utils.js'
import { registerUser, findUserById } from '../../api/chat.js'

const NICKNAMES = ['小明', '小红', '小华', '小李', '小张', '小王', '小陈', '小刘', '小赵', '小孙']

const LoginPage = ({ onLogin }) => {
  const [userId, setUserId] = useState(() => generateUserId())
  const [nickname, setNickname] = useState(() => NICKNAMES[Math.floor(Math.random() * NICKNAMES.length)])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const avatarColor = getAvatarColor(userId)
  const initial = nickname[0]?.toUpperCase() || '?'

  const handleLogin = async () => {
    if (!nickname.trim()) {
      setError('请输入昵称')
      return
    }
    setLoading(true)
    setError('')
    try {
      const existing = await findUserById(userId)
      let user
      if (existing) {
        user = existing
      } else {
        user = await registerUser(userId, nickname.trim(), avatarColor)
      }
      localStorage.setItem('wx_user_id', userId)
      localStorage.setItem('wx_nickname', nickname.trim())
      localStorage.setItem('wx_avatar_color', avatarColor)
      onLogin({ userId, nickname: nickname.trim(), avatarColor, dbRecord: user })
    } catch (err) {
      console.error('Login error:', err)
      setError('登录失败，请重试')
    } finally {
      setLoading(false)
    }
  }

  const refreshId = () => {
    const newId = generateUserId()
    setUserId(newId)
  }

  return (
    <div className="min-h-screen bg-[#EDEDED] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg w-full max-w-sm overflow-hidden">
        {/* Header */}
        <div className="bg-[#07C160] px-6 py-8 flex flex-col items-center">
          <div
            className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-3xl font-bold shadow-md mb-3"
            style={{ backgroundColor: avatarColor }}
          >
            {initial}
          </div>
          <p className="text-white text-sm opacity-90">你的专属 ID</p>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-white text-xl font-bold tracking-widest">{userId}</span>
            <button
              onClick={refreshId}
              className="text-white opacity-70 hover:opacity-100 transition-opacity text-xs border border-white/40 rounded px-2 py-0.5"
            >
              换一个
            </button>
          </div>
        </div>

        {/* Form */}
        <div className="px-6 py-6 space-y-4">
          <div>
            <label className="block text-sm text-gray-500 mb-1">昵称</label>
            <input
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              maxLength={20}
              placeholder="输入你的昵称"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-gray-800 text-sm focus:outline-none focus:border-[#07C160] transition-colors"
              onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
            />
          </div>

          {error && (
            <p className="text-red-500 text-xs">{error}</p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-[#07C160] hover:bg-[#06AD56] disabled:opacity-60 text-white font-medium py-3 rounded-lg transition-colors text-sm"
          >
            {loading ? '登录中...' : '进入微信'}
          </button>

          <p className="text-center text-xs text-gray-400">
            将你的 ID 分享给朋友，即可开始聊天
          </p>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
