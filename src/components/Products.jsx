const products = [
  {
    id: 1,
    emoji: '🧱',
    image: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&q=80',
    name: '创意积木系列',
    tag: '益智首选',
    tagColor: 'bg-blue-100 text-blue-700',
    description: '精选无毒ABS材质，色彩鲜艳不褪色。多种形状组合，激发孩子无限创造力，越玩越聪明！',
    features: ['无毒安全材质', '200+拼搭方案', '适合3-12岁'],
    price: '¥89',
    originalPrice: '¥129',
    badge: '热销爆款',
    badgeColor: 'bg-red-500',
    cta: '抢购积木',
    ctaColor: 'bg-blue-500 hover:bg-blue-600',
  },
  {
    id: 2,
    emoji: '🧸',
    image: 'https://images.unsplash.com/photo-1559454403-b8fb88521f11?w=600&q=80',
    name: '超软毛绒玩具',
    tag: '宝宝最爱',
    tagColor: 'bg-pink-100 text-pink-700',
    description: '采用高级PP棉填充，触感柔软如云。通过国际安全认证，是宝宝最贴心的睡眠伴侣！',
    features: ['超柔软触感', '国际安全认证', '适合0岁以上'],
    price: '¥69',
    originalPrice: '¥99',
    badge: '妈妈推荐',
    badgeColor: 'bg-pink-500',
    cta: '选购毛绒',
    ctaColor: 'bg-pink-500 hover:bg-pink-600',
  },
  {
    id: 3,
    emoji: '🧩',
    image: 'https://images.unsplash.com/photo-1611996575749-79a3a250f948?w=600&q=80',
    name: '趣味拼图系列',
    tag: '专注力培养',
    tagColor: 'bg-green-100 text-green-700',
    description: '从24片到1000片多种难度，精美图案印刷清晰。拼图过程培养专注力和逻辑思维，寓教于乐！',
    features: ['多难度可选', '精美图案设计', '适合4-15岁'],
    price: '¥49',
    originalPrice: '¥79',
    badge: '新品上市',
    badgeColor: 'bg-green-500',
    cta: '选购拼图',
    ctaColor: 'bg-green-500 hover:bg-green-600',
  },
];

export default function Products() {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-500 text-sm font-bold px-4 py-2 rounded-full mb-4">
            🎁 精选产品系列
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            三大明星产品，<span className="text-orange-500">孩子爱不释手</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            每款产品均经过严格质量检测，符合国家玩具安全标准，让家长放心，让孩子开心！
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-52">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Badge */}
                <div className={`absolute top-3 left-3 ${product.badgeColor} text-white text-xs font-bold px-3 py-1 rounded-full`}>
                  {product.badge}
                </div>
                {/* Emoji overlay */}
                <div className="absolute bottom-3 right-3 text-4xl bg-white rounded-2xl p-2 shadow-lg">
                  {product.emoji}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-black text-gray-900">{product.name}</h3>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full ${product.tagColor}`}>
                    {product.tag}
                  </span>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-4">{product.description}</p>

                {/* Features */}
                <ul className="flex flex-wrap gap-2 mb-5">
                  {product.features.map((f) => (
                    <li key={f} className="flex items-center gap-1 text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-full">
                      <span className="text-green-500">✓</span> {f}
                    </li>
                  ))}
                </ul>

                {/* Price & CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-black text-orange-500">{product.price}</span>
                    <span className="text-sm text-gray-400 line-through ml-2">{product.originalPrice}</span>
                  </div>
                  <a
                    href="#contact"
                    className={`${product.ctaColor} text-white font-bold px-5 py-2 rounded-full text-sm transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5`}
                  >
                    {product.cta} →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-2xl px-8 py-5">
            <span className="text-2xl">🎉</span>
            <div className="text-left">
              <div className="font-black text-gray-900">限时优惠：满199减50！</div>
              <div className="text-sm text-gray-500">活动截止至本月底，先到先得</div>
            </div>
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-2 rounded-full text-sm transition-all ml-4 whitespace-nowrap"
            >
              马上抢购
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
