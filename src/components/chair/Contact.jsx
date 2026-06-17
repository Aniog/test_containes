import { useState } from 'react'
import { Mail, Phone, MapPin } from 'lucide-react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#e8b86d] text-sm font-semibold uppercase tracking-widest mb-3">
            联系我们
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
            有任何问题？随时联系
          </h2>
          <p className="text-[#5a5a72] text-lg max-w-2xl mx-auto">
            我们的专业顾问团队随时为您提供选购建议和售后支持。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#1a1a2e]/5 rounded-xl flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-[#e8b86d]" />
              </div>
              <div>
                <p className="text-[#1a1a2e] font-semibold mb-1">电话咨询</p>
                <p className="text-[#5a5a72] text-sm">400-888-8888</p>
                <p className="text-[#9a9aaa] text-xs mt-1">周一至周六 9:00 - 18:00</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#1a1a2e]/5 rounded-xl flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-[#e8b86d]" />
              </div>
              <div>
                <p className="text-[#1a1a2e] font-semibold mb-1">邮件联系</p>
                <p className="text-[#5a5a72] text-sm">support@ergoseat.cn</p>
                <p className="text-[#9a9aaa] text-xs mt-1">24小时内回复</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#1a1a2e]/5 rounded-xl flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#e8b86d]" />
              </div>
              <div>
                <p className="text-[#1a1a2e] font-semibold mb-1">体验中心</p>
                <p className="text-[#5a5a72] text-sm">上海市静安区南京西路 1000 号</p>
                <p className="text-[#9a9aaa] text-xs mt-1">欢迎预约到店体验</p>
              </div>
            </div>

            <div className="bg-[#f8f7f4] rounded-2xl p-6 border border-[#e2e2ec]">
              <p className="text-[#1a1a2e] font-semibold mb-3">服务承诺</p>
              <ul className="space-y-2">
                {['30天无理由退换', '全国免费送货上门', '专业安装服务', '10年质保承诺'].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-[#5a5a72]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#e8b86d]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#f8f7f4] rounded-2xl p-8 border border-[#e2e2ec]">
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#e8b86d]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">✓</span>
                </div>
                <h3 className="text-[#1a1a2e] font-bold text-xl mb-2">消息已发送！</h3>
                <p className="text-[#5a5a72] text-sm">我们将在24小时内与您联系，感谢您的关注。</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[#1a1a2e] text-sm font-medium mb-2">您的姓名</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="请输入您的姓名"
                    className="w-full bg-white border border-[#e2e2ec] rounded-xl px-4 py-3 text-[#1a1a2e] text-sm placeholder-[#9a9aaa] focus:outline-none focus:border-[#e8b86d] transition"
                  />
                </div>
                <div>
                  <label className="block text-[#1a1a2e] text-sm font-medium mb-2">电子邮箱</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="请输入您的邮箱"
                    className="w-full bg-white border border-[#e2e2ec] rounded-xl px-4 py-3 text-[#1a1a2e] text-sm placeholder-[#9a9aaa] focus:outline-none focus:border-[#e8b86d] transition"
                  />
                </div>
                <div>
                  <label className="block text-[#1a1a2e] text-sm font-medium mb-2">留言内容</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="请描述您的需求或问题..."
                    className="w-full bg-white border border-[#e2e2ec] rounded-xl px-4 py-3 text-[#1a1a2e] text-sm placeholder-[#9a9aaa] focus:outline-none focus:border-[#e8b86d] transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#1a1a2e] text-white font-semibold py-3.5 rounded-xl hover:bg-[#e8b86d] hover:text-[#1a1a2e] transition-all duration-300"
                >
                  发送消息
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
