import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: '李晓梅',
    location: '上海',
    avatar: '李',
    rating: 5,
    text: '买了庆巷的床品套件，真的太舒服了！面料柔软亲肤，颜色也很温馨。每天晚上躺下去都感觉特别幸福，家人都说睡眠质量提高了很多。',
    product: '四件套床品',
  },
  {
    name: '王建国',
    location: '北京',
    avatar: '王',
    rating: 5,
    text: '厨房用品系列非常实用，锅具做工精良，用起来顺手。最重要的是材质安全，给家人做饭更放心了。客服也很贴心，有问题随时解答。',
    product: '厨具套装',
  },
  {
    name: '张雅琴',
    location: '成都',
    avatar: '张',
    rating: 5,
    text: '客厅的装饰摆件收到后惊喜连连，包装精美，品质超出预期。摆在家里整个氛围都不一样了，朋友来了都问在哪里买的，强烈推荐！',
    product: '客厅装饰套组',
  },
  {
    name: '陈志远',
    location: '广州',
    avatar: '陈',
    rating: 5,
    text: '已经是庆巷的老顾客了，每次购物都很满意。这次买的收纳系列，设计简洁美观，家里瞬间整洁了很多。物流也很快，隔天就到了。',
    product: '收纳整理套装',
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-amber-50">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-amber-700 text-sm font-semibold tracking-widest uppercase">客户评价</span>
          <h2
            className="text-3xl md:text-4xl font-bold text-stone-800 mt-3 mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            他们的家，因庆巷更温馨
          </h2>
          <p className="text-stone-500 max-w-xl mx-auto leading-relaxed">
            每一条评价，都是一个家庭对美好生活的真实感受。感谢每一位信任庆巷的家庭。
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-7 border border-amber-100 shadow-sm hover:shadow-md transition-shadow relative"
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-amber-200" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-stone-600 leading-relaxed mb-6 text-sm md:text-base">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-stone-800 text-sm">{t.name}</div>
                  <div className="text-stone-400 text-xs">{t.location} · 购买了{t.product}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-14 bg-white rounded-2xl p-8 md:p-10 border border-amber-100 shadow-sm text-center">
          <div className="flex justify-center gap-1 mb-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
            ))}
          </div>
          <div className="text-4xl font-bold text-stone-800 mb-1" style={{ fontFamily: "'Noto Serif SC', serif" }}>
            4.9 / 5.0
          </div>
          <p className="text-stone-500 text-sm">基于 12,000+ 位真实用户评价</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
