import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 't1',
    name: '张明远',
    title: '星辰科技 CEO',
    rating: 5,
    content:
      '秋易广告团队对我们品牌的理解超出预期。他们不仅完成了品牌重塑，更帮助我们在市场上建立了全新的品牌形象，销售额提升了40%。',
    avatar: '张',
  },
  {
    id: 't2',
    name: '李晓雯',
    title: '悦享生活 品牌总监',
    rating: 5,
    content:
      '与秋易合作的包装设计项目让我们印象深刻。他们的创意既符合品牌调性，又极具市场竞争力，产品上市后获得了消费者的广泛好评。',
    avatar: '李',
  },
  {
    id: 't3',
    name: '王建国',
    title: '云端金融 市场总监',
    rating: 5,
    content:
      '秋易的数字营销方案精准有效，帮助我们在短时间内大幅提升了品牌知名度和用户获取效率，ROI表现远超行业平均水平。',
    avatar: '王',
  },
  {
    id: 't4',
    name: '陈思琪',
    title: '绿野有机 创始人',
    rating: 5,
    content:
      '他们制作的品牌广告片完美诠释了我们的品牌理念，视觉效果震撼，情感共鸣强烈，在各大平台获得了数百万次播放。',
    avatar: '陈',
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">客户评价</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            客户的<span className="gold-gradient-text">信任与认可</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            我们的成功源于每一位客户的信任，他们的认可是我们前进的最大动力。
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-card border border-white/10 rounded-2xl p-7 hover:border-gold/30 transition-all duration-300 relative"
            >
              {/* Quote icon */}
              <Quote size={32} className="text-gold/20 absolute top-6 right-6" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={14} className="text-gold fill-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base">
                "{t.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-amber flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-gray-500 text-xs">{t.title}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Client logos strip */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <p className="text-center text-gray-500 text-sm mb-8 uppercase tracking-widest">合作品牌</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['星辰科技', '悦享生活', '云端金融', '绿野有机', '远航汽车', '美颜护肤'].map((brand) => (
              <span
                key={brand}
                className="text-gray-600 font-semibold text-sm md:text-base hover:text-gray-400 transition-colors"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
