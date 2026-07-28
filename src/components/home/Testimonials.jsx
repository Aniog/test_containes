import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: '王总',
    company: '某科技集团 CEO',
    text: '明远律师事务所在我们公司的并购项目中表现出色，专业、高效，全程把控风险，让我们顺利完成了这次重大交易。强烈推荐！',
    rating: 5,
  },
  {
    id: 2,
    name: '李女士',
    company: '个人客户',
    text: '在最困难的时候，张律师团队给了我最专业的支持。他们不仅帮我赢得了官司，更让我感受到了法律的温度。',
    rating: 5,
  },
  {
    id: 3,
    name: '陈董事长',
    company: '某制造业集团',
    text: '合作多年，明远律师事务所始终是我们最信赖的法律顾问。他们对行业的深刻理解和专业能力，为我们规避了大量法律风险。',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">客户评价</p>
          <h2 className="font-serif font-bold text-white text-3xl md:text-4xl lg:text-5xl mb-5">
            客户的信任是我们最大的荣誉
          </h2>
          <div className="w-16 h-1 bg-gold mx-auto" />
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 transition-colors">
              <Quote className="w-8 h-8 text-gold mb-5 opacity-80" />
              <p className="text-gray-300 leading-relaxed mb-6 text-sm">{t.text}</p>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                ))}
              </div>
              <div className="border-t border-white/10 pt-4">
                <p className="text-white font-semibold">{t.name}</p>
                <p className="text-gray-400 text-sm">{t.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
