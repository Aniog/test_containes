import { useNavigate } from 'react-router-dom'
import { Users, Calendar, Award, ArrowRight, CheckCircle, Star } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
import { Button } from '@/components/ui/Button'

export default function HomePage() {
  const { user, isApprovedMember } = useAuth()
  const navigate = useNavigate()

  const steps = [
    { step: '01', title: '注册账号', desc: '填写真实姓名、学号、院系等校友信息，提交会员申请。' },
    { step: '02', title: '等待审核', desc: '管理员将核实您的校友身份，通常在3个工作日内完成审核。' },
    { step: '03', title: '缴纳会费', desc: '审核通过后缴纳年费（HK$200）或终身会员费（HK$1000）。' },
    { step: '04', title: '正式会员', desc: '成为正式会员，参与活动、发布活动、连接全球校友网络。' },
  ]

  const features = [
    { icon: <Users size={24} className="text-blue-700" />, title: '校友网络', desc: '连接来自全国各地的中大内地生校友，扩展人脉圈。' },
    { icon: <Calendar size={24} className="text-blue-700" />, title: '丰富活动', desc: '聚会联谊、学术讲座、职业发展等多类型活动，精彩纷呈。' },
    { icon: <Award size={24} className="text-blue-700" />, title: '会员权益', desc: '正式会员可发布活动、参与报名，享受专属校友福利。' },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white">
        <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 bg-amber-400 rounded-full flex items-center justify-center font-bold text-blue-900 text-lg flex-shrink-0">
                中大
              </div>
              <div>
                <p className="text-amber-300 text-sm font-medium">The Chinese University of Hong Kong</p>
                <p className="text-blue-200 text-sm">Mainland Students Alumni Association</p>
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
              香港中文大学<br />
              <span className="text-amber-400">内地生校友会</span>
            </h1>
            <p className="text-blue-200 text-lg md:text-xl mb-8 leading-relaxed">
              连接全球中大内地生校友，共叙情谊，共创未来。
              加入我们，成为这个充满活力的校友社群的一员。
            </p>
            <div className="flex flex-wrap gap-3">
              {!user ? (
                <>
                  <Button variant="gold" size="lg" onClick={() => navigate('/register')}>
                    立即注册成为会员
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                  <Button variant="secondary" size="lg" onClick={() => navigate('/login')}
                    className="bg-transparent border-white text-white hover:bg-white/10">
                    已有账号？登录
                  </Button>
                </>
              ) : (
                <>
                  <Button variant="gold" size="lg" onClick={() => navigate('/events')}>
                    浏览活动
                    <ArrowRight size={18} className="ml-2" />
                  </Button>
                  <Button variant="secondary" size="lg" onClick={() => navigate('/profile')}
                    className="bg-transparent border-white text-white hover:bg-white/10">
                    我的资料
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-blue-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            {[
              { num: '1000+', label: '注册校友' },
              { num: '50+', label: '年度活动' },
              { num: '20+', label: '覆盖城市' },
            ].map(stat => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold text-amber-400">{stat.num}</p>
                <p className="text-blue-200 text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">为什么加入我们？</h2>
            <p className="text-slate-600 max-w-xl mx-auto">校友会是连接过去与未来的桥梁，是中大精神的延续与传承。</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map(f => (
              <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  {f.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{f.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">如何成为会员？</h2>
            <p className="text-slate-600">简单四步，加入校友大家庭</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={s.step} className="relative">
                <div className="bg-slate-50 rounded-2xl p-6 h-full">
                  <div className="text-4xl font-black text-blue-100 mb-3">{s.step}</div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <ArrowRight size={20} className="text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
          {!user && (
            <div className="text-center mt-10">
              <Button size="lg" onClick={() => navigate('/register')}>
                立即开始注册
                <ArrowRight size={18} className="ml-2" />
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Membership Fees */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-950 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-3">会费标准</h2>
            <p className="text-blue-200">选择适合您的会员方案</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                type: '年费会员', price: 'HK$200', period: '每年', color: 'border-blue-600',
                perks: ['参与所有校友活动', '发布活动权限', '校友通讯录查阅', '年度校友聚会优先名额']
              },
              {
                type: '终身会员', price: 'HK$1,000', period: '一次性', color: 'border-amber-400',
                highlight: true,
                perks: ['年费会员所有权益', '终身免续费', '优先活动报名', '专属终身会员徽章', '校友会荣誉证书']
              },
            ].map(plan => (
              <div key={plan.type} className={`rounded-2xl p-6 border-2 ${plan.highlight ? 'border-amber-400 bg-blue-800' : 'border-blue-700 bg-blue-800/50'}`}>
                {plan.highlight && (
                  <div className="flex items-center gap-1 text-amber-400 text-xs font-bold mb-3">
                    <Star size={14} fill="currentColor" /> 推荐
                  </div>
                )}
                <h3 className="text-xl font-bold mb-1">{plan.type}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-3xl font-black text-amber-400">{plan.price}</span>
                  <span className="text-blue-300 text-sm">/{plan.period}</span>
                </div>
                <ul className="space-y-2">
                  {plan.perks.map(perk => (
                    <li key={perk} className="flex items-center gap-2 text-sm text-blue-100">
                      <CheckCircle size={15} className="text-green-400 flex-shrink-0" />
                      {perk}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-blue-300 text-sm mt-6">
            * 会费通过微信支付、支付宝、FPS等方式缴纳，管理员确认后生效
          </p>
        </div>
      </section>

      {/* CTA */}
      {!user && (
        <section className="py-16 px-4 bg-amber-50">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">准备好加入了吗？</h2>
            <p className="text-slate-600 mb-8">立即注册，与数千名中大内地生校友建立联系。</p>
            <Button size="lg" onClick={() => navigate('/register')}>
              免费注册会员
              <ArrowRight size={18} className="ml-2" />
            </Button>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center font-bold text-blue-900 text-xs">中大</div>
            <span className="text-white font-medium">香港中文大学内地生校友会</span>
          </div>
          <p className="text-sm">© 2024 CUHK Mainland Students Alumni Association. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
