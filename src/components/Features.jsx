import { Zap, Shield, BarChart2, Globe, Headphones, Gift } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: '极速响应',
    desc: '毫秒级响应速度，让您的用户享受流畅无阻的体验，告别等待。',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: Shield,
    title: '安全可靠',
    desc: '银行级别的数据加密保护，您的信息安全是我们最重要的承诺。',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: BarChart2,
    title: '数据洞察',
    desc: '实时数据分析仪表盘，帮助您做出更明智的业务决策。',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: Globe,
    title: '全球覆盖',
    desc: '遍布全球的服务节点，无论您在哪里，都能享受本地化的极速体验。',
    color: 'bg-amber-100 text-amber-600',
  },
  {
    icon: Headphones,
    title: '7×24 支持',
    desc: '专业客服团队全天候待命，随时解答您的疑问，让您无后顾之忧。',
    color: 'bg-yellow-100 text-yellow-600',
  },
  {
    icon: Gift,
    title: '丰厚奖励',
    desc: '完善的积分与奖励体系，每一次使用都能为您带来额外的惊喜。',
    color: 'bg-amber-100 text-amber-600',
  },
]

const Features = () => {
  return (
    <section className="bg-amber-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">核心功能</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-900 mt-3 mb-4">
            为什么选择我们？
          </h2>
          <p className="text-yellow-700 text-lg max-w-xl mx-auto">
            我们精心打造每一个功能，只为给您带来最卓越的使用体验。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-yellow-100 group"
            >
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl ${f.color} mb-5 group-hover:scale-110 transition-transform`}>
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="text-yellow-900 font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-yellow-700 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
