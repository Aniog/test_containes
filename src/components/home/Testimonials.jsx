import { Star } from 'lucide-react';

const testimonials = [
  {
    name: '张伟',
    role: '某科技公司 CEO',
    text: '与他们合作是我们公司最正确的决定之一。专业的团队、高效的执行，让我们的产品提前上线，超出预期。',
    rating: 5,
  },
  {
    name: '李梅',
    role: '电商平台创始人',
    text: '他们不仅提供了技术支持，更像是我们的战略伙伴。深刻理解业务需求，给出了非常有价值的建议。',
    rating: 5,
  },
  {
    name: '王强',
    role: '金融科技总监',
    text: '安全性和稳定性是我们最关注的，他们完全满足了我们的要求，系统上线后零故障运行超过一年。',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#1D3557] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#FF6B6B] text-sm font-semibold uppercase tracking-widest mb-3">
            客户评价
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F1FAEE] mb-4">
            他们这样说
          </h2>
          <p className="text-[#A8DADC] text-lg max-w-2xl mx-auto">
            来自真实客户的真实反馈，是我们最大的动力。
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#457B9D] bg-opacity-30 border border-[#457B9D] rounded-2xl p-6"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-[#FF6B6B] fill-[#FF6B6B]" />
                ))}
              </div>
              <p className="text-[#F1FAEE] text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E63946] flex items-center justify-center text-[#F1FAEE] font-bold text-sm">
                  {t.name[0]}
                </div>
                <div>
                  <div className="text-[#F1FAEE] font-semibold text-sm">{t.name}</div>
                  <div className="text-[#A8DADC] text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
