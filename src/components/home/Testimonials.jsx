import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: '李晓雯',
    role: '时尚博主',
    rating: 5,
    text: '用了Blossom的玫瑰精华液一个月，皮肤明显变得更加水润有光泽！质地轻薄，吸收很快，完全不油腻。强烈推荐给所有爱美的姐妹！',
    avatar: '李',
  },
  {
    id: 2,
    name: '张美琳',
    role: '护肤达人',
    rating: 5,
    text: '作为敏感肌，我一直很难找到适合自己的护肤品。Blossom的敏感肌系列真的太温和了，用了之后皮肤不再泛红，屏障也修复了很多。',
    avatar: '张',
  },
  {
    id: 3,
    name: '王思颖',
    role: '白领丽人',
    rating: 5,
    text: '包装精美，成分天然，效果显著。用了两周后同事都问我最近皮肤怎么变好了！这就是最好的证明。会一直回购的品牌！',
    avatar: '王',
  },
  {
    id: 4,
    name: '陈雅婷',
    role: '美妆爱好者',
    rating: 5,
    text: '深层补水系列真的太好用了！早晚各用一次，皮肤一整天都保持水润状态。而且气味很清新，每次护肤都是一种享受。',
    avatar: '陈',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-pink-100 text-pink-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            客户评价
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
            她们都爱上了<span className="text-pink-500"> Blossom</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto">
            来自真实用户的真实反馈，见证每一位女性的美丽蜕变。
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-pink-50 border border-pink-100 rounded-2xl p-8 relative hover:shadow-lg hover:shadow-pink-100 transition-all"
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-pink-200 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                "{t.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-base flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-gray-800 text-sm">{t.name}</p>
                  <p className="text-gray-400 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-pink-500 to-rose-400 rounded-3xl p-10 text-center text-white">
          <h3 className="text-3xl font-extrabold mb-3">准备好开始你的美丽之旅了吗？</h3>
          <p className="text-pink-100 text-base mb-6 max-w-md mx-auto">
            立即体验 Blossom 专业护肤系列，让你的肌肤焕发最美光彩。
          </p>
          <a
            href="#contact"
            className="inline-flex items-center bg-white text-pink-600 hover:bg-pink-50 font-bold px-8 py-3 rounded-full transition-all shadow-lg"
          >
            立即开始
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
