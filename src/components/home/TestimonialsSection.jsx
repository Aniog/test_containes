import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: '李晓梅',
    location: '上海',
    avatar: '👩',
    rating: 5,
    text: '买了维纯的棉麻四件套，真的太舒服了！每天晚上躺下去就像被云朵包裹一样，睡眠质量提升了很多。包装也很精致，送礼自用都很合适。',
    product: '云感棉麻四件套',
  },
  {
    id: 2,
    name: '张建国',
    location: '北京',
    avatar: '👨',
    rating: 5,
    text: '原木餐具套装非常有质感，摆在餐桌上整个用餐氛围都不一样了。孩子们也很喜欢，说吃饭都变得更香了。客服服务也很贴心，有问必答。',
    product: '原木餐具套装',
  },
  {
    id: 3,
    name: '王芳',
    location: '成都',
    avatar: '👩',
    rating: 5,
    text: '藤编收纳篮真的太实用了！大中小三个尺寸刚好满足不同需求，放在客厅既整洁又好看。朋友来家里都问我在哪买的，已经推荐给好几个朋友了。',
    product: '藤编收纳篮组合',
  },
  {
    id: 4,
    name: '陈志远',
    location: '广州',
    avatar: '👨',
    rating: 5,
    text: '竹纤维浴巾吸水性超强，洗完澡用起来特别舒服。最重要的是材质天然，给孩子用也放心。已经回购第三次了，全家人都爱用。',
    product: '竹纤维浴巾套装',
  },
  {
    id: 5,
    name: '刘雅婷',
    location: '杭州',
    avatar: '👩',
    rating: 5,
    text: '香薰蜡烛的味道很自然，不刺鼻，点燃后整个房间都弥漫着淡淡的花香，下班回家点上一支，疲惫感瞬间消散。包装精美，很适合送礼。',
    product: '天然植物香薰蜡烛',
  },
  {
    id: 6,
    name: '赵明辉',
    location: '深圳',
    avatar: '👨',
    rating: 5,
    text: '手工编织抱枕做工精细，颜色也很温馨，放在沙发上整个客厅都活泼了很多。老婆非常喜欢，说家里终于有了温馨的感觉。强烈推荐！',
    product: '手工编织抱枕',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-[#C4714A] text-[#C4714A]" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#C4714A] text-sm font-medium tracking-widest uppercase mb-3">客户评价</p>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#2C1810] mb-4">
            他们的家，因维纯而不同
          </h2>
          <p className="text-[#6B5B4E] text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            每一条评价，都是一个家庭对美好生活的真实感受。
            感谢每一位信任维纯的家庭。
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow"
            >
              {/* Rating */}
              <StarRating count={t.rating} />

              {/* Text */}
              <p className="text-[#2C1810] text-sm md:text-base leading-relaxed mt-4 mb-6">
                "{t.text}"
              </p>

              {/* Divider */}
              <div className="border-t border-[#F5F0E8] pt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#F5F0E8] rounded-full flex items-center justify-center text-xl">
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-[#2C1810] text-sm">{t.name}</div>
                      <div className="text-[#6B5B4E] text-xs">{t.location}</div>
                    </div>
                  </div>
                  <span className="text-xs text-[#C4714A] bg-[#F5F0E8] px-3 py-1 rounded-full font-medium">
                    {t.product}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
