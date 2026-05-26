import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: '李晓雯',
    location: '上海',
    avatar: '李',
    rating: 5,
    text: '买了罗克岚的棉麻四件套，真的太舒服了！面料柔软亲肤，颜色也很温柔，每天睡觉都像被云朵包裹着。强烈推荐！',
    product: '云朵棉麻四件套',
  },
  {
    id: 2,
    name: '张明远',
    location: '北京',
    avatar: '张',
    rating: 5,
    text: '原木茶几托盘的质感超出预期，木纹清晰自然，做工精细。放在客厅里整个氛围都提升了，朋友来了都问在哪买的。',
    product: '原木茶几托盘',
  },
  {
    id: 3,
    name: '陈思琪',
    location: '成都',
    avatar: '陈',
    rating: 5,
    text: '香薰蜡烛的香气真的很治愈，不刺鼻，淡淡的茉莉香，点上之后整个房间都变得温馨起来。已经回购三次了！',
    product: '香薰蜡烛礼盒',
  },
  {
    id: 4,
    name: '王芳芳',
    location: '杭州',
    avatar: '王',
    rating: 5,
    text: '竹制收纳套装非常实用，厨房终于整洁了！竹子的质感很好，而且环保，用着放心。包装也很精美，送礼也合适。',
    product: '竹制厨房收纳套装',
  },
  {
    id: 5,
    name: '刘建国',
    location: '广州',
    avatar: '刘',
    rating: 5,
    text: '家里换了罗克岚的一套产品，整个家的氛围都不一样了。设计很有品味，不花哨，就是那种让人看了很舒服的感觉。',
    product: '手工编织抱枕',
  },
  {
    id: 6,
    name: '赵雅婷',
    location: '南京',
    avatar: '赵',
    rating: 5,
    text: '浴巾套装超级柔软，吸水性很好，洗完澡用这个擦身体真的是一种享受。颜色也很好看，浴室瞬间高级了很多。',
    product: '珊瑚绒浴巾套装',
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#8B6F47] text-sm tracking-widest uppercase mb-3 font-medium">客户评价</p>
          <h2 className="font-serif-sc font-bold text-[#5C3D1E] text-3xl md:text-4xl mb-4">
            他们的家，因我们而更温馨
          </h2>
          <p className="text-[#7A6552] text-base max-w-xl mx-auto leading-relaxed">
            每一条评价，都是我们前行的动力。感谢每一位信任罗克岚的家庭。
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl p-6 shadow-md border border-[#E8DDD0] hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <Quote className="text-[#D4B896] mb-4" size={28} />

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="text-[#C4956A] fill-[#C4956A]" size={16} />
                ))}
              </div>

              {/* Review text */}
              <p className="text-[#5C3D1E] text-sm leading-relaxed flex-1 mb-4">
                {review.text}
              </p>

              {/* Product tag */}
              <p className="text-[#8B6F47] text-xs mb-4 font-medium">
                购买产品：{review.product}
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-4 border-t border-[#E8DDD0]">
                <div className="w-10 h-10 rounded-full bg-[#8B6F47] flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm font-serif-sc">{review.avatar}</span>
                </div>
                <div>
                  <p className="font-semibold text-[#5C3D1E] text-sm">{review.name}</p>
                  <p className="text-[#7A6552] text-xs">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
