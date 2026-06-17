import { Shield, Sliders, Wind, RotateCcw, Armchair, Zap } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: '腰椎支撑系统',
    desc: '可调节腰托精准贴合脊椎曲线，有效预防腰背疼痛，长时间办公也能保持正确坐姿。',
  },
  {
    icon: Sliders,
    title: '多维度调节',
    desc: '座高、扶手、靠背倾斜角度均可独立调节，满足不同体型和使用习惯的个性化需求。',
  },
  {
    icon: Wind,
    title: '透气网布材质',
    desc: '高密度弹性网布，全天候透气散热，告别久坐闷热，保持清爽舒适的工作状态。',
  },
  {
    icon: RotateCcw,
    title: '360° 旋转底座',
    desc: '优质铝合金五爪底座，配备静音万向轮，灵活转动，轻松应对各种地面环境。',
  },
  {
    icon: Armchair,
    title: '头枕颈托设计',
    desc: '可升降头枕为颈部提供额外支撑，减轻长时间低头带来的颈椎压力。',
  },
  {
    icon: Zap,
    title: '快速组装',
    desc: '模块化设计，无需专业工具，15分钟即可完成组装，开箱即用，省时省力。',
  },
]

const Features = () => {
  return (
    <section id="features" className="py-24 bg-[#f8f7f4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#e8b86d] text-sm font-semibold uppercase tracking-widest mb-3">
            核心特点
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
            为什么选择 ErgoSeat？
          </h2>
          <p className="text-[#5a5a72] text-lg max-w-2xl mx-auto">
            每一个细节都经过精心设计，只为给您提供最佳的办公体验。
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="bg-white rounded-2xl p-8 border border-[#e2e2ec] shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-[#1a1a2e]/5 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#e8b86d]" />
                </div>
                <h3 className="text-[#1a1a2e] font-bold text-lg mb-3">{f.title}</h3>
                <p className="text-[#5a5a72] text-sm leading-relaxed">{f.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
