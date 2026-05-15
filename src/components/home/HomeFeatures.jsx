import { CheckCircle, FlaskConical, Truck, HeadphonesIcon } from 'lucide-react'

const features = [
  {
    icon: CheckCircle,
    title: '严格质量管控',
    desc: '通过ISO 13485、CE认证，每件产品经过200余道质检工序，确保零缺陷出厂。',
    color: 'text-brand-blue',
    bg: 'bg-blue-50',
  },
  {
    icon: FlaskConical,
    title: '自主研发创新',
    desc: '拥有专利技术200余项，研发团队超过300人，持续推动医疗器械技术革新。',
    color: 'text-brand-teal',
    bg: 'bg-teal-50',
  },
  {
    icon: Truck,
    title: '快速交付保障',
    desc: '全国仓储网络覆盖，48小时内发货，紧急订单24小时特急处理。',
    color: 'text-orange-500',
    bg: 'bg-orange-50',
  },
  {
    icon: HeadphonesIcon,
    title: '全程售后服务',
    desc: '7×24小时技术支持热线，专业工程师上门安装调试，定期维护保养。',
    color: 'text-purple-500',
    bg: 'bg-purple-50',
  },
]

export default function HomeFeatures() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 text-brand-blue px-4 py-1 rounded-full text-sm font-medium mb-3">
            核心优势
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            为什么选择星闪医疗
          </h2>
          <p className="text-brand-text max-w-2xl mx-auto">
            二十年专注医疗器械领域，以技术创新和品质服务赢得客户信赖
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc, color, bg }) => (
            <div key={title} className="p-6 rounded-xl border border-brand-border hover:border-brand-sky hover:shadow-md transition-all group">
              <div className={`w-12 h-12 ${bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className="text-brand-navy font-semibold text-base mb-2">{title}</h3>
              <p className="text-brand-text text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Stats bar */}
        <div className="mt-16 bg-brand-navy rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '20+', label: '年行业经验' },
            { value: '500+', label: '产品型号' },
            { value: '3000+', label: '合作医院' },
            { value: '98%', label: '客户满意度' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-3xl md:text-4xl font-bold text-brand-sky mb-1">{value}</div>
              <div className="text-blue-200 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
