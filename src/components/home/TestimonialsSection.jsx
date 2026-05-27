import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: '李女士',
    role: '三口之家，广州',
    rating: 5,
    text: '用了威尔德的婴儿洗护系列两年多了，宝宝皮肤一直很好，没有出现过敏或刺激的情况。成分干净，用起来很放心，是我们家的必备品。',
  },
  {
    name: '张先生',
    role: '家庭主理人，上海',
    rating: 5,
    text: '威尔德的多效家居清洁剂真的很好用，厨房油污、卫生间水垢都能轻松搞定，而且没有刺鼻气味，家里老人小孩都不受影响，强烈推荐。',
  },
  {
    name: '王阿姨',
    role: '退休教师，北京',
    rating: 5,
    text: '银龄关怀系列是儿子给我买的，用了之后皮肤干燥的问题改善了很多。质地温和，不油腻，老年人用特别合适，感谢威尔德的用心研发。',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-brand-primary-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-brand-accent/20 text-brand-accent-light text-sm font-semibold px-4 py-1.5 rounded-full mb-4 border border-brand-accent/30">
            用户口碑
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            千万家庭的真实评价
          </h2>
          <p className="text-white/70 text-lg max-w-xl mx-auto">
            每一条评价都是我们前进的动力，每一个家庭的信任都是我们最大的荣誉。
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-colors"
            >
              <Quote className="w-8 h-8 text-brand-accent mb-4 opacity-80" />
              <p className="text-white/90 text-sm leading-relaxed mb-6">{t.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white font-semibold">{t.name}</div>
                  <div className="text-white/60 text-xs mt-0.5">{t.role}</div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '98.6%', label: '用户满意度' },
            { value: '4.9/5', label: '平均评分' },
            { value: '92%', label: '复购率' },
            { value: '500万+', label: '五星好评数' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-brand-accent-light mb-1">{stat.value}</div>
              <div className="text-white/70 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
