import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    title: '服务热线',
    lines: ['400-888-9999', '021-5888-6666'],
    color: 'text-brand-blue',
    bg: 'bg-blue-50',
  },
  {
    icon: Mail,
    title: '电子邮件',
    lines: ['info@xingshan-medical.com', 'sales@xingshan-medical.com'],
    color: 'text-brand-teal',
    bg: 'bg-teal-50',
  },
  {
    icon: MapPin,
    title: '公司地址',
    lines: ['上海市浦东新区张江高科技园区', '医疗器械产业基地A栋'],
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
  {
    icon: Clock,
    title: '工作时间',
    lines: ['周一至周五 8:30 – 17:30', '周六 9:00 – 12:00'],
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
]

const subjects = ['产品咨询', '报价申请', '技术支持', '售后服务', '合作洽谈', '其他']

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', phone: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      console.log('Contact form submitted:', form)
    }, 1200)
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-brand-navy to-brand-blue py-16 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-blue-300 text-sm mb-2">
            <Link to="/" className="hover:text-white">首页</Link> / 联系我们
          </div>
          <h1 className="text-4xl font-bold mb-3">联系我们</h1>
          <p className="text-blue-200 max-w-2xl">
            专业团队随时为您提供产品咨询、方案定制和技术支持服务
          </p>
        </div>
      </section>

      {/* Contact cards */}
      <section className="py-12 bg-brand-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {contactInfo.map(({ icon: Icon, title, lines, color, bg }) => (
              <div key={title} className="bg-white rounded-xl p-6 shadow-sm border border-brand-border hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${color}`} />
                </div>
                <h3 className="text-brand-navy font-semibold mb-2">{title}</h3>
                {lines.map((line) => (
                  <p key={line} className="text-brand-text text-sm">{line}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + Map */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <div className="inline-block bg-blue-100 text-brand-blue px-4 py-1 rounded-full text-sm font-medium mb-4">在线咨询</div>
            <h2 className="text-3xl font-bold text-brand-navy mb-2">发送咨询信息</h2>
            <p className="text-brand-text mb-8">填写以下表单，我们将在1个工作日内与您联系</p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-brand-navy font-bold text-xl mb-2">提交成功！</h3>
                <p className="text-brand-text mb-6">感谢您的咨询，我们将在1个工作日内与您联系。</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', company: '', phone: '', email: '', subject: '', message: '' }) }}
                  className="text-brand-blue font-medium hover:underline"
                >
                  再次提交
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-brand-dark text-sm font-medium mb-1.5">姓名 <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="请输入您的姓名"
                      className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-sm focus:outline-none focus:border-brand-blue text-brand-dark placeholder-brand-text"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-dark text-sm font-medium mb-1.5">单位名称</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="请输入单位名称"
                      className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-sm focus:outline-none focus:border-brand-blue text-brand-dark placeholder-brand-text"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-brand-dark text-sm font-medium mb-1.5">联系电话 <span className="text-red-500">*</span></label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="请输入联系电话"
                      className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-sm focus:outline-none focus:border-brand-blue text-brand-dark placeholder-brand-text"
                    />
                  </div>
                  <div>
                    <label className="block text-brand-dark text-sm font-medium mb-1.5">电子邮件</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="请输入电子邮件"
                      className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-sm focus:outline-none focus:border-brand-blue text-brand-dark placeholder-brand-text"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-brand-dark text-sm font-medium mb-1.5">咨询主题</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-sm focus:outline-none focus:border-brand-blue text-brand-dark bg-white"
                  >
                    <option value="">请选择咨询主题</option>
                    {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-brand-dark text-sm font-medium mb-1.5">咨询内容 <span className="text-red-500">*</span></label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="请详细描述您的需求，我们将为您提供专业解答..."
                    className="w-full px-4 py-2.5 border border-brand-border rounded-lg text-sm focus:outline-none focus:border-brand-blue text-brand-dark placeholder-brand-text resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-brand-blue text-white py-3.5 rounded-lg font-semibold hover:bg-brand-navy transition-colors disabled:opacity-60"
                >
                  {loading ? '提交中...' : (<><Send className="w-4 h-4" />提交咨询</>)}
                </button>
              </form>
            )}
          </div>

          {/* Map placeholder + office info */}
          <div className="flex flex-col gap-6">
            <div className="bg-brand-light rounded-2xl overflow-hidden h-72 flex items-center justify-center border border-brand-border">
              <div className="text-center text-brand-text">
                <MapPin className="w-12 h-12 mx-auto mb-3 text-brand-blue opacity-40" />
                <p className="font-medium text-brand-navy">上海市浦东新区张江高科技园区</p>
                <p className="text-sm">医疗器械产业基地A栋</p>
              </div>
            </div>

            <div className="bg-brand-navy rounded-2xl p-7 text-white">
              <h3 className="font-bold text-lg mb-4">全国办事处</h3>
              <div className="space-y-3">
                {[
                  { city: '北京办事处', addr: '北京市朝阳区建国路88号' },
                  { city: '广州办事处', addr: '广州市天河区珠江新城' },
                  { city: '成都办事处', addr: '成都市高新区天府大道' },
                  { city: '武汉办事处', addr: '武汉市洪山区光谷大道' },
                ].map(({ city, addr }) => (
                  <div key={city} className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-brand-sky mt-0.5 shrink-0" />
                    <div>
                      <div className="text-sm font-medium">{city}</div>
                      <div className="text-blue-300 text-xs">{addr}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
