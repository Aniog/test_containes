import { Clock, Shield, Headphones, Star } from 'lucide-react'

const features = [
  {
    icon: Clock,
    title: '24小时响应',
    desc: '工作日内我们承诺在 24 小时内回复您的每一条留言',
    color: 'bg-indigo-100 text-indigo-600',
  },
  {
    icon: Shield,
    title: '信息安全保障',
    desc: '您的个人信息将被严格保密，绝不向第三方泄露',
    color: 'bg-cyan-100 text-cyan-600',
  },
  {
    icon: Headphones,
    title: '专业团队服务',
    desc: '经验丰富的专业团队为您提供一对一的贴心服务',
    color: 'bg-emerald-100 text-emerald-600',
  },
  {
    icon: Star,
    title: '满意度保证',
    desc: '我们致力于提供最优质的服务，确保您的满意',
    color: 'bg-amber-100 text-amber-600',
  },
]

const FeaturesSection = () => {
  return (
    <section className="bg-slate-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
            为什么选择我们
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto">
            我们始终以客户为中心，提供专业、高效、贴心的服务体验
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-200"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${f.color}`}>
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeaturesSection
