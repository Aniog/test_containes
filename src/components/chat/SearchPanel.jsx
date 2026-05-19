import React, { useState } from 'react'
import { Search, X } from 'lucide-react'
import Avatar from './Avatar.jsx'
import { findUserById } from '../../api/chat.js'

const SearchPanel = ({ currentUser, onStartChat, onClose }) => {
  const [query, setQuery] = useState('')
  const [result, setResult] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSearch = async () => {
    const q = query.trim().toUpperCase()
    if (!q) return
    if (q === currentUser.userId) {
      setNotFound(false)
      setResult({ isSelf: true })
      return
    }
    setLoading(true)
    setNotFound(false)
    setResult(null)
    try {
      const user = await findUserById(q)
      if (user) {
        setResult(user)
      } else {
        setNotFound(true)
      }
    } catch (err) {
      console.error('Search error:', err)
      setNotFound(true)
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch()
  }

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Header */}
      <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100">
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
          <X size={20} />
        </button>
        <span className="font-medium text-gray-800">搜索用户</span>
      </div>

      {/* Search Input */}
      <div className="px-4 py-3">
        <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 py-2">
          <Search size={16} className="text-gray-400 flex-shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value.toUpperCase())}
            onKeyDown={handleKeyDown}
            placeholder="输入用户 ID（如 WX-ABCD12）"
            className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
            autoFocus
          />
          {query && (
            <button onClick={() => { setQuery(''); setResult(null); setNotFound(false) }}>
              <X size={14} className="text-gray-400" />
            </button>
          )}
        </div>
        <button
          onClick={handleSearch}
          disabled={loading || !query.trim()}
          className="mt-2 w-full bg-[#07C160] hover:bg-[#06AD56] disabled:opacity-50 text-white text-sm py-2 rounded-lg transition-colors"
        >
          {loading ? '搜索中...' : '搜索'}
        </button>
      </div>

      {/* Results */}
      <div className="flex-1 px-4">
        {notFound && (
          <div className="text-center py-8">
            <div className="text-4xl mb-2">🔍</div>
            <p className="text-gray-400 text-sm">未找到该用户</p>
            <p className="text-gray-300 text-xs mt-1">请确认 ID 是否正确</p>
          </div>
        )}

        {result?.isSelf && (
          <div className="text-center py-8">
            <p className="text-gray-400 text-sm">这是你自己的 ID</p>
          </div>
        )}

        {result && !result.isSelf && (
          <div className="border border-gray-100 rounded-xl p-4 flex items-center gap-3">
            <Avatar userId={result.data?.user_id} nickname={result.data?.nickname} size={50} />
            <div className="flex-1 min-w-0">
              <p className="font-medium text-gray-800">{result.data?.nickname}</p>
              <p className="text-xs text-gray-400 mt-0.5">{result.data?.user_id}</p>
              <div className="flex items-center gap-1 mt-1">
                <div className={`w-2 h-2 rounded-full ${result.data?.is_online ? 'bg-[#07C160]' : 'bg-gray-300'}`} />
                <span className="text-xs text-gray-400">{result.data?.is_online ? '在线' : '离线'}</span>
              </div>
            </div>
            <button
              onClick={() => onStartChat(result.data?.user_id, result.data)}
              className="bg-[#07C160] hover:bg-[#06AD56] text-white text-sm px-4 py-2 rounded-lg transition-colors flex-shrink-0"
            >
              发消息
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchPanel
