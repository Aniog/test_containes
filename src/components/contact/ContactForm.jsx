import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'
import { submitContactMessage } from '@/api/contactMessage'

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      await submitContactMessage({
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      })
      setSubmitted(true)
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      console.error('Contact submit error:', err)
      setError('提交失败，请稍后重试。')
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-10 text-center">
        <CheckCircle className="w-10 h-10 text-green-500 mb-3" />
        <p className="font-medium text-gray-800">消息已发送！</p>
        <p className="text-sm text-gray-500 mt-1">感谢你的留言，我们会尽快回复。</p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-4 text-sm text-blue-600 hover:underline"
        >
          再次发送
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">姓名 *</label>
          <input
            required
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="你的姓名"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">邮箱 *</label>
          <input
            required
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">留言 *</label>
        <textarea
          required
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={4}
          placeholder="写下你的问题或建议…"
          className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        />
      </div>
      {error && <p className="text-sm text-red-500">{error}</p>}
      <button
        type="submit"
        disabled={submitting}
        className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
      >
        <Send className="w-4 h-4" />
        {submitting ? '发送中…' : '发送留言'}
      </button>
    </form>
  )
}

export default ContactForm
