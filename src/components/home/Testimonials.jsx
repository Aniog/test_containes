import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: '张女士',
    location: '上海',
    rating: 5,
    text: '购买了一张黑胡桃餐桌，用了三年依然如新。木纹越来越漂亮，每次朋友来家里都会问是哪里买的。木语的品质真的无可挑剔。',
    avatar: '张',
  },
  {
    id: 2,
    name: '王先生',
    location: '北京',
    rating: 5,
    text: '定制了一套书房家具，从设计到交付全程专业。工匠师傅亲自上门安装，细节处理得非常到位。这是我买过最值得的家具。',
    avatar: '王',
  },
  {
    id: 3,
    name: '陈女士',
    location: '杭州',
    rating: 5,
    text: '白橡木床架用了五年，榫卯结构依然稳固，一点声音都没有。孩子在上面蹦跳也完全没问题。真正的传家之宝！',
    avatar: '陈',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#3d2314] py-24 lg:py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#c49a6c] text-sm font-medium tracking-[0.25em] uppercase mb-3">
            客户评价
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#fefcf8] mb-5">
            他们的故事
          </h2>
          <p className="text-[#e8d5b7] text-lg max-w-xl mx-auto">
            每一件家具背后，都是一个关于家的温暖故事
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-[#5c3d2e]/40 rounded-2xl p-8 border border-[#8b5e3c]/30 hover:border-[#c49a6c]/50 transition-all duration-300"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#c49a6c] text-[#c49a6c]" />
                ))}
              </div>
              <p className="text-[#e8d5b7] leading-relaxed mb-6 text-base">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#8b5e3c] flex items-center justify-center text-[#fefcf8] font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-[#fefcf8] font-semibold text-sm">{t.name}</p>
                  <p className="text-[#c49a6c] text-xs">{t.location}</p>
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
