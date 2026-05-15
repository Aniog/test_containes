const features = [
  {
    icon: '🛡️',
    title: '国家安全认证',
    desc: '所有产品通过GB6675国家玩具安全标准检测，无毒无害，家长放心购买。',
    color: 'from-blue-50 to-blue-100',
    iconBg: 'bg-blue-500',
  },
  {
    icon: '🧠',
    title: '科学益智设计',
    desc: '由儿童教育专家参与研发，每款玩具都融入益智元素，玩中学，学中玩。',
    color: 'from-purple-50 to-purple-100',
    iconBg: 'bg-purple-500',
  },
  {
    icon: '🌈',
    title: '色彩鲜艳持久',
    desc: '采用食品级环保颜料，色彩饱满不褪色，即使宝宝啃咬也完全安全。',
    color: 'from-pink-50 to-pink-100',
    iconBg: 'bg-pink-500',
  },
  {
    icon: '🚀',
    title: '快速发货保障',
    desc: '下单后24小时内发货，全国顺丰包邮，让孩子早一天收到心爱的玩具。',
    color: 'from-orange-50 to-orange-100',
    iconBg: 'bg-orange-500',
  },
  {
    icon: '💝',
    title: '30天无忧退换',
    desc: '购买后30天内如有质量问题，免费退换，售后无忧，让您购物零风险。',
    color: 'from-red-50 to-red-100',
    iconBg: 'bg-red-500',
  },
  {
    icon: '🎁',
    title: '精美礼品包装',
    desc: '提供专属礼品包装服务，生日、节日送礼首选，让每份礼物都充满惊喜。',
    color: 'from-green-50 to-green-100',
    iconBg: 'bg-green-500',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-purple-50 text-purple-600 text-sm font-bold px-4 py-2 rounded-full mb-4">
            ⭐ 为什么选择高高乐
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            六大核心优势，<span className="text-orange-500">品质有保障</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            十年专注儿童玩具领域，我们深知每位家长对孩子安全的重视，品质是我们永恒的承诺。
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`bg-gradient-to-br ${feature.color} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-white`}
            >
              <div className={`${feature.iconBg} w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 shadow-md`}>
                {feature.icon}
              </div>
              <h3 className="text-lg font-black text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        {/* Trust Banner */}
        <div className="mt-14 bg-gradient-to-r from-orange-500 to-yellow-400 rounded-3xl p-8 text-white text-center shadow-xl">
          <div className="text-4xl mb-3">🏅</div>
          <h3 className="text-2xl font-black mb-2">连续10年荣获"中国儿童玩具优质品牌"称号</h3>
          <p className="text-white text-opacity-90 text-lg mb-6">
            超过500万个家庭的共同选择，口碑源于品质，信任来自坚守
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {['国家3C认证', 'ISO9001质量体系', 'CE欧盟认证', 'ASTM美国标准'].map((cert) => (
              <div key={cert} className="flex items-center gap-2 bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm font-bold">
                <span>✓</span> {cert}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
