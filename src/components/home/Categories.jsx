const categories = [
  {
    id: 1,
    name: '家居摆件',
    description: '为家增添自然气息',
    emoji: '🏡',
    count: 86,
    color: 'from-[#8b5e3c] to-[#6b4423]',
    bg: 'bg-[#f5ede0]',
  },
  {
    id: 2,
    name: '餐厨用品',
    description: '让用餐更有仪式感',
    emoji: '🥢',
    count: 64,
    color: 'from-[#5c7a3e] to-[#3d5c2a]',
    bg: 'bg-[#edf5e0]',
  },
  {
    id: 3,
    name: '文具收纳',
    description: '整洁有序的工作空间',
    emoji: '✏️',
    count: 52,
    color: 'from-[#6b5c8b] to-[#4a3d6b]',
    bg: 'bg-[#ede0f5]',
  },
  {
    id: 4,
    name: '儿童玩具',
    description: '安全天然的童年陪伴',
    emoji: '🧸',
    count: 43,
    color: 'from-[#c4783c] to-[#a05a28]',
    bg: 'bg-[#fdf0e0]',
  },
  {
    id: 5,
    name: '装饰挂件',
    description: '墙面艺术的自然表达',
    emoji: '🎨',
    count: 38,
    color: 'from-[#3c7a8b] to-[#285a6b]',
    bg: 'bg-[#e0f0f5]',
  },
  {
    id: 6,
    name: '定制礼品',
    description: '独一无二的心意之选',
    emoji: '🎁',
    count: 29,
    color: 'from-[#8b3c5e] to-[#6b2844]',
    bg: 'bg-[#f5e0ea]',
  },
];

export default function Categories() {
  const handleScroll = () => {
    const el = document.querySelector('#products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="categories" className="py-20 bg-[#fdf8f3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-sm font-medium text-[#8b5e3c] tracking-widest uppercase mb-3">
            产品分类
          </span>
          <h2
            className="text-3xl sm:text-4xl font-bold text-[#3d2b1f] mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            探索木艺世界
          </h2>
          <p className="text-[#7a5c45] max-w-xl mx-auto text-base">
            从家居装饰到实用器皿，每一个品类都凝聚着匠人的智慧与热情
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={handleScroll}
              className={`${cat.bg} rounded-2xl p-5 sm:p-7 text-left group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-transparent hover:border-[#d4a96a]/30`}
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${cat.color} rounded-xl flex items-center justify-center text-2xl sm:text-3xl mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                {cat.emoji}
              </div>
              <h3 className="text-base sm:text-lg font-bold text-[#3d2b1f] mb-1" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                {cat.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#7a5c45] mb-3 line-clamp-2">{cat.description}</p>
              <span className="text-xs text-[#8b5e3c] font-medium bg-white/60 px-2 py-1 rounded-full">
                {cat.count} 件商品
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
