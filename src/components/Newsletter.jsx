import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email.trim()) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="bg-yellow-400 py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-yellow-900 mb-4">
          订阅我们的最新资讯
        </h2>
        <p className="text-yellow-800 text-lg mb-8">
          第一时间获取产品更新、行业洞察和专属优惠，加入我们的阳光社区。
        </p>

        {submitted ? (
          <div className="flex items-center justify-center gap-3 bg-yellow-900/10 text-yellow-900 font-semibold px-6 py-4 rounded-2xl border border-yellow-900/20">
            <CheckCircle className="w-5 h-5 text-yellow-900" />
            订阅成功！感谢您的加入，我们会尽快与您联系。
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="请输入您的邮箱地址"
              required
              className="flex-1 px-5 py-3 rounded-full bg-white text-yellow-900 placeholder-yellow-400 border-2 border-transparent focus:border-yellow-900 outline-none text-sm font-medium"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 bg-yellow-900 text-yellow-50 font-bold text-sm px-7 py-3 rounded-full hover:bg-yellow-800 transition-colors shadow-md"
            >
              <Send className="w-4 h-4" />
              立即订阅
            </button>
          </form>
        )}

        <p className="text-yellow-700 text-xs mt-4">
          我们尊重您的隐私，绝不发送垃圾邮件。随时可以取消订阅。
        </p>
      </div>
    </section>
  )
}

export default Newsletter
