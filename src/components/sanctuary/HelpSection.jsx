import { DollarSign, Users, Camera, Handshake } from 'lucide-react'

const ways = [
  {
    icon: DollarSign,
    title: '捐款支持',
    desc: '每月仅需100元，即可为一只老虎提供一天的食物。您的每一分捐款都将直接用于老虎的日常照料。',
    cta: '立即捐款',
    href: '#donate',
    highlight: true,
  },
  {
    icon: Users,
    title: '认养老虎',
    desc: '选择认养一只老虎，定期收到它的成长报告和照片，成为它最重要的守护者。',
    cta: '了解认养',
    href: '#adopt',
    highlight: false,
  },
  {
    icon: Camera,
    title: '参观访问',
    desc: '预约参观救护站，亲眼见证老虎的生活，带孩子接受一次难忘的自然教育。',
    cta: '预约参观',
    href: '#visit',
    highlight: false,
  },
  {
    icon: Handshake,
    title: '企业合作',
    desc: '与我们建立企业社会责任合作，共同为老虎保护事业贡献力量，提升品牌影响力。',
    cta: '联系合作',
    href: '#contact',
    highlight: false,
  },
]

export default function HelpSection() {
  return (
    <section id="help" className="py-20 md:py-28 bg-stone-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-sm font-semibold uppercase tracking-widest text-amber-600 mb-3 block">
            如何帮助
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900 mb-4">
            每一份力量都至关重要
          </h2>
          <p className="text-stone-600 text-lg max-w-2xl mx-auto leading-relaxed">
            无论您的方式是什么，您的参与都将为老虎的未来带来真实的改变。
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {ways.map((way) => (
            <div
              key={way.title}
              className={`rounded-3xl p-7 flex flex-col gap-4 border transition-all duration-300 hover:shadow-xl ${
                way.highlight
                  ? 'bg-amber-600 border-amber-600 text-white shadow-lg shadow-amber-200'
                  : 'bg-white border-stone-200 text-stone-900 shadow-md'
              }`}
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                  way.highlight ? 'bg-white/20' : 'bg-amber-100'
                }`}
              >
                <way.icon
                  className={`w-6 h-6 ${way.highlight ? 'text-white' : 'text-amber-600'}`}
                />
              </div>
              <h3 className={`text-xl font-bold ${way.highlight ? 'text-white' : 'text-stone-900'}`}>
                {way.title}
              </h3>
              <p className={`text-sm leading-relaxed flex-1 ${way.highlight ? 'text-amber-100' : 'text-stone-600'}`}>
                {way.desc}
              </p>
              <a
                href={way.href}
                className={`inline-block text-center font-semibold px-5 py-2.5 rounded-full transition-all text-sm ${
                  way.highlight
                    ? 'bg-white text-amber-700 hover:bg-amber-50'
                    : 'bg-amber-600 text-white hover:bg-amber-700'
                }`}
              >
                {way.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Donation tiers */}
        <div id="donate" className="mt-16 bg-white border border-stone-200 rounded-3xl p-8 md:p-10 shadow-md">
          <h3 className="text-2xl font-bold text-stone-900 mb-2 text-center">选择捐款金额</h3>
          <p className="text-stone-500 text-center mb-8">您的捐款将直接用于老虎的食物、医疗和栖息地维护</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            {[
              { amount: '¥50', desc: '一顿营养餐' },
              { amount: '¥200', desc: '一次体检' },
              { amount: '¥500', desc: '一周食物' },
              { amount: '¥1000', desc: '一月照料' },
            ].map((tier) => (
              <button
                key={tier.amount}
                className="border-2 border-stone-200 hover:border-amber-600 hover:bg-amber-50 rounded-2xl p-4 text-center transition-all group"
              >
                <div className="text-2xl font-black text-stone-900 group-hover:text-amber-700">
                  {tier.amount}
                </div>
                <div className="text-xs text-stone-500 mt-1">{tier.desc}</div>
              </button>
            ))}
          </div>
          <div className="text-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-bold px-12 py-4 rounded-full transition-all shadow-lg hover:shadow-xl text-lg">
              确认捐款
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
