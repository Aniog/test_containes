import { useState } from 'react'
import { Leaf, Recycle, Sun, Droplets, Wind, TreePine, ArrowRight, CheckCircle2, Globe } from 'lucide-react'

const stats = [
  { value: '2.5亿', label: '棵树木种植', icon: TreePine },
  { value: '98%', label: '可再生能源', icon: Sun },
  { value: '零排放', label: '碳中和目标', icon: Wind },
  { value: '50+', label: '合作国家', icon: Globe },
]

const features = [
  {
    icon: Leaf,
    title: '绿色能源',
    desc: '100% 使用太阳能和风能等清洁可再生能源，减少碳排放，守护地球家园。',
  },
  {
    icon: Recycle,
    title: '循环利用',
    desc: '推动废物零填埋，实现材料的完整循环再利用，打造真正的绿色闭环经济。',
  },
  {
    icon: Droplets,
    title: '水资源保护',
    desc: '先进的水循环系统，节约用水 60%，保护珍贵的淡水资源不被浪费。',
  },
  {
    icon: TreePine,
    title: '生态修复',
    desc: '每年种植数百万棵树木，修复受损生态系统，重建生物多样性栖息地。',
  },
]

const steps = [
  '加入绿色行动计划',
  '获取专属环保方案',
  '实施可持续改造',
  '共享绿色成果',
]

export default function GreenPage() {
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
    <div className="min-h-screen bg-white font-sans">

      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-green-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Leaf className="w-6 h-6 text-green-600" />
            <span className="text-xl font-bold text-green-800">绿色地球</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-green-700">
            <a href="#features" className="hover:text-green-500 transition-colors">我们的行动</a>
            <a href="#stats" className="hover:text-green-500 transition-colors">成果数据</a>
            <a href="#steps" className="hover:text-green-500 transition-colors">加入我们</a>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">
            立即行动
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-32 pb-24 px-6 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-green-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-emerald-200/30 rounded-full blur-3xl" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative">
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <Leaf className="w-4 h-4" />
            <span>2026 绿色地球行动计划</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-green-900 leading-tight mb-6">
            守护绿色地球<br />
            <span className="text-emerald-500">从现在开始</span>
          </h1>
          <p className="text-lg text-green-700 max-w-2xl mx-auto mb-10 leading-relaxed">
            我们致力于通过可再生能源、生态修复和循环经济，共同构建一个更加绿色、可持续的未来。每一个行动，都是对地球的承诺。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3.5 rounded-full flex items-center justify-center gap-2 transition-colors shadow-lg shadow-green-200">
              加入绿色行动 <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border-2 border-green-300 text-green-700 hover:bg-green-50 font-semibold px-8 py-3.5 rounded-full transition-colors">
              了解更多
            </button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section id="stats" className="py-16 px-6 bg-green-700">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map(({ value, label, icon: Icon }) => (
            <div key={label} className="text-center">
              <Icon className="w-8 h-8 text-green-300 mx-auto mb-3" />
              <div className="text-3xl font-extrabold text-white mb-1">{value}</div>
              <div className="text-green-200 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">我们的绿色行动</h2>
            <p className="text-green-600 max-w-xl mx-auto">通过四大核心领域，全面推进可持续发展，为子孙后代留下一个美好的地球。</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="group p-8 rounded-2xl border border-green-100 hover:border-green-300 hover:shadow-lg hover:shadow-green-50 transition-all">
                <div className="w-12 h-12 bg-green-100 group-hover:bg-green-200 rounded-xl flex items-center justify-center mb-5 transition-colors">
                  <Icon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-xl font-bold text-green-900 mb-3">{title}</h3>
                <p className="text-green-600 leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="steps" className="py-24 px-6 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">如何参与</h2>
            <p className="text-green-600">四步开启你的绿色之旅，简单易行，影响深远。</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <div key={step} className="text-center">
                <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto mb-4 shadow-md shadow-green-200">
                  {i + 1}
                </div>
                <p className="text-green-800 font-semibold text-sm leading-snug">{step}</p>
                {i < steps.length - 1 && (
                  <div className="hidden md:block absolute mt-6 ml-full w-full h-0.5 bg-green-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Newsletter */}
      <section className="py-24 px-6 bg-green-800">
        <div className="max-w-2xl mx-auto text-center">
          <Leaf className="w-12 h-12 text-green-300 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">订阅绿色资讯</h2>
          <p className="text-green-200 mb-8">获取最新的环保动态、绿色技术和可持续生活指南，与全球绿色行动者同行。</p>
          {submitted ? (
            <div className="flex items-center justify-center gap-3 text-green-300 text-lg font-semibold">
              <CheckCircle2 className="w-6 h-6" />
              <span>感谢订阅！我们会及时与您联系。</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="输入您的邮箱地址"
                required
                className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-green-600 text-white placeholder-green-400 focus:outline-none focus:border-green-300 focus:bg-white/20 transition-all"
              />
              <button
                type="submit"
                className="bg-green-400 hover:bg-green-300 text-green-900 font-bold px-7 py-3 rounded-full transition-colors whitespace-nowrap"
              >
                立即订阅
              </button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-green-900 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Leaf className="w-5 h-5 text-green-400" />
          <span className="text-green-300 font-semibold">绿色地球</span>
        </div>
        <p className="text-green-500 text-sm">© 2026 绿色地球行动计划 · 共建可持续未来</p>
      </footer>

    </div>
  )
}
