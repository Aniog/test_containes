import HeroSection from '../components/contact/HeroSection.jsx'
import ContactForm from '../components/contact/ContactForm.jsx'
import FeaturesSection from '../components/contact/FeaturesSection.jsx'
import { MessageSquare } from 'lucide-react'

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero */}
      <HeroSection />

      {/* Form Section */}
      <section className="py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
            {/* Left info panel */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <MessageSquare className="w-5 h-5 text-indigo-600" />
                  <span className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">
                    在线留言
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                  填写表单，<br />我们马上联系您
                </h2>
                <p className="text-slate-500 leading-relaxed">
                  请填写以下信息，我们的专业团队将尽快与您取得联系，为您提供最优质的服务。
                </p>
              </div>

              {/* Info cards */}
              <div className="space-y-4">
                <div className="bg-indigo-50 rounded-xl p-4 border border-indigo-100">
                  <p className="text-sm font-semibold text-indigo-800 mb-1">工作时间</p>
                  <p className="text-sm text-indigo-600">周一至周五 09:00 – 18:00</p>
                </div>
                <div className="bg-cyan-50 rounded-xl p-4 border border-cyan-100">
                  <p className="text-sm font-semibold text-cyan-800 mb-1">紧急联系</p>
                  <p className="text-sm text-cyan-600">400-888-8888（7×24小时）</p>
                </div>
                <div className="bg-emerald-50 rounded-xl p-4 border border-emerald-100">
                  <p className="text-sm font-semibold text-emerald-800 mb-1">平均响应时间</p>
                  <p className="text-sm text-emerald-600">工作日内 &lt; 4 小时</p>
                </div>
              </div>
            </div>

            {/* Right form card */}
            <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <FeaturesSection />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-6 text-center text-sm">
        <p>© 2026 示例公司. 保留所有权利.</p>
        <p className="mt-1 text-slate-500">上海市浦东新区 · hello@example.com · 400-888-8888</p>
      </footer>
    </div>
  )
}

export default ContactPage
