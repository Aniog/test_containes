import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 't1',
    name: '李女士',
    age: '32岁',
    avatar: '李',
    rating: 5,
    text: '通过这个网站学到了正确的刷牙方法，坚持了3个月后，牙医说我的牙龈状况改善了很多！',
    tag: '牙龈改善',
    color: 'bg-blue-600',
  },
  {
    id: 't2',
    name: '王先生',
    age: '45岁',
    avatar: '王',
    rating: 5,
    text: '以前总觉得刷牙就够了，看了这里的知识才知道牙线有多重要。现在每天坚持使用，口气清新多了。',
    tag: '口气改善',
    color: 'bg-teal-600',
  },
  {
    id: 't3',
    name: '张妈妈',
    age: '38岁',
    avatar: '张',
    rating: 5,
    text: '孩子从小就有蛀牙问题，按照这里的儿童护牙建议调整后，最近检查说没有新的龋齿了，太开心了！',
    tag: '儿童护牙',
    color: 'bg-orange-500',
  },
];

const stats = [
  { value: '50万+', label: '受益用户', desc: '全国用户信赖' },
  { value: '98%', label: '满意度', desc: '用户好评率' },
  { value: '10年+', label: '专业经验', desc: '口腔健康研究' },
  { value: '200+', label: '合作诊所', desc: '全国覆盖' },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-600 to-teal-500">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 md:mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-extrabold text-white mb-1">{stat.value}</div>
              <div className="text-blue-100 font-semibold text-lg">{stat.label}</div>
              <div className="text-blue-200 text-sm mt-1">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">用户真实反馈</h2>
          <p className="text-blue-100 text-lg">来自真实用户的口腔健康改善故事</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-colors">
              <div className="flex items-start gap-4 mb-4">
                <div className={`${t.color} text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-blue-200 text-sm">{t.age}</div>
                  <div className="flex gap-0.5 mt-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 text-yellow-300 fill-yellow-300" />
                    ))}
                  </div>
                </div>
                <Quote className="w-6 h-6 text-white/30 ml-auto flex-shrink-0" />
              </div>
              <p className="text-blue-50 text-sm leading-relaxed">{t.text}</p>
              <div className="mt-4">
                <span className="bg-white/20 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {t.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
