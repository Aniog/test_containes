import { useState, useEffect } from 'react'
import { Heart, Send, User, Clock } from 'lucide-react'
import { fetchMoments, createMoment, likeMoment, deleteMoment } from './api/moments'

function App() {
  const [moments, setMoments] = useState([])
  const [content, setContent] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    loadMoments()
  }, [])

  const loadMoments = async () => {
    try {
      const data = await fetchMoments()
      setMoments(data)
    } catch (error) {
      console.error(error)
    } finally {
      setLoading(false)
    }
  }

  const handlePost = async (e) => {
    e.preventDefault()
    if (!content.trim() || !authorName.trim()) return

    setSubmitting(true)
    try {
      const newMoment = await createMoment(content.trim(), authorName.trim())
      setMoments([newMoment, ...moments])
      setContent('')
    } catch (error) {
      console.error(error)
    } finally {
      setSubmitting(false)
    }
  }

  const handleLike = async (moment) => {
    const fields = moment.data || {}
    try {
      const updated = await likeMoment(moment.id, fields.likes || 0)
      setMoments(moments.map(m => m.id === moment.id ? updated : m))
    } catch (error) {
      console.error(error)
    }
  }

  const handleDelete = async (id) => {
    try {
      await deleteMoment(id)
      setMoments(moments.filter(m => m.id !== id))
    } catch (error) {
      console.error(error)
    }
  }

  const formatTime = (dateString) => {
    const date = new Date(dateString)
    const now = new Date()
    const diff = Math.floor((now - date) / 1000 / 60)
    
    if (diff < 1) return '刚刚'
    if (diff < 60) return `${diff}分钟前`
    if (diff < 1440) return `${Math.floor(diff / 60)}小时前`
    return `${Math.floor(diff / 1440)}天前`
  }

  return (
    <div className="min-h-screen bg-[#f5f9f7]">
      {/* Header */}
      <div className="bg-white border-b border-[#d4e8df]">
        <div className="max-w-2xl mx-auto px-4 py-5 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-[#7fb89a] flex items-center justify-center">
            <Heart className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-medium text-[#2d5a4a]">清新圈</h1>
            <p className="text-xs text-[#6b8f7e]">分享你的美好时刻</p>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Post Form */}
        <div className="bg-white rounded-2xl border border-[#d4e8df] p-6 mb-8">
          <div className="flex items-center gap-2 mb-4 text-[#6b8f7e]">
            <User className="w-4 h-4" />
            <span className="text-sm">分享此刻</span>
          </div>
          
          <form onSubmit={handlePost}>
            <input
              type="text"
              value={authorName}
              onChange={(e) => setAuthorName(e.target.value)}
              placeholder="你的名字"
              className="w-full mb-3 px-4 py-2.5 text-sm bg-[#f5f9f7] border border-[#d4e8df] rounded-xl focus:outline-none focus:border-[#7fb89a] placeholder:text-[#a8c5b5]"
              disabled={submitting}
            />
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="分享你的想法..."
              rows={3}
              className="w-full px-4 py-3 text-[15px] bg-[#f5f9f7] border border-[#d4e8df] rounded-xl focus:outline-none focus:border-[#7fb89a] placeholder:text-[#a8c5b5] resize-none"
              disabled={submitting}
            />
            <div className="flex justify-end mt-3">
              <button
                type="submit"
                disabled={submitting || !content.trim() || !authorName.trim()}
                className="flex items-center gap-2 px-6 py-2.5 bg-[#7fb89a] text-white rounded-xl hover:bg-[#6da88a] disabled:opacity-50 disabled:cursor-not-allowed transition-colors text-sm font-medium"
              >
                <Send className="w-4 h-4" />
                发布
              </button>
            </div>
          </form>
        </div>

        {/* Moments Feed */}
        {loading ? (
          <div className="text-center py-12 text-[#6b8f7e]">加载中...</div>
        ) : moments.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-[#6b8f7e] mb-2">还没有动态</div>
            <p className="text-sm text-[#a8c5b5]">成为第一个分享的人吧</p>
          </div>
        ) : (
          <div className="space-y-4">
            {moments.map((moment) => {
              const fields = moment.data || {}
              return (
                <div key={moment.id} className="bg-white rounded-2xl border border-[#d4e8df] p-6 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[#e8f0eb] flex items-center justify-center">
                        <User className="w-5 h-5 text-[#7fb89a]" />
                      </div>
                      <div>
                        <div className="font-medium text-[#2d5a4a]">{fields.author_name}</div>
                        <div className="flex items-center gap-1 text-xs text-[#a8c5b5]">
                          <Clock className="w-3 h-3" />
                          {formatTime(fields.created_at)}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDelete(moment.id)}
                      className="text-[#c5d9cf] hover:text-[#7fb89a] opacity-0 group-hover:opacity-100 transition-all"
                    >
                      ×
                    </button>
                  </div>

                  <p className="text-[#2d5a4a] text-[15px] leading-relaxed mb-5 pl-1">
                    {fields.content}
                  </p>

                  <button
                    onClick={() => handleLike(moment)}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-[#f5f9f7] transition-colors text-sm text-[#6b8f7e] hover:text-[#2d5a4a]"
                  >
                    <Heart className="w-4 h-4" />
                    <span>{fields.likes || 0}</span>
                  </button>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

export default App
