import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: '王建国',
    role: '企业主',
    avatar: '王',
    avatarColor: 'from-blue-400 to-blue-600',
    rating: 5,
    product: '企业保险',
    content:
      '安盾保险的企业团险方案非常专业，顾问团队根据我们公司的实际情况量身定制了保障方案。去年一位员工突发疾病，理赔流程非常顺畅，24小时内就完成了审核，真的很感谢！',
  },
  {
    id: 2,
    name: '李晓梅',
    role: '全职妈妈',
    avatar: '李',
    avatarColor: 'from-rose-400 to-pink-600',
    rating: 5,
    product: '健康保险',
    content:
      '为全家购买了健康险，服务顾问非常耐心地解释了每个条款，没有任何隐藏费用。孩子生病住院时，报销流程简单快捷，让我们在最困难的时候感受到了温暖。',
  },
  {
    id: 3,
    name: '张伟',
    role: '软件工程师',
    avatar: '张',
    avatarColor: 'from-emerald-400 to-teal-600',
    rating: 5,
    product: '车辆保险',
    content:
      '车险续保选择了安盾，价格比之前便宜了不少，保障范围却更全面。上个月发生了一次小事故，打了一个电话，当天就有工作人员上门处理，效率非常高！',
  },
  {
    id: 4,
    name: '陈丽华',
    role: '退休教师',
    avatar: '陈',
    avatarColor: 'from-violet-400 to-purple-600',
    rating: 5,
    product: '人寿保险',
    content:
      '退休后为自己和老伴购买了人寿保险，顾问非常专业，考虑到我们的年龄和需求，推荐了最合适的方案。服务态度很好，每次有问题都能及时得到解答。',
  },
  {
    id: 5,
    name: '刘明',
    role: '房产投资者',
    avatar: '刘',
    avatarColor: 'from-amber-400 to-orange-600',
    rating: 5,
    product: '财产保险',
    content:
      '名下有几套房产，安盾的财产险方案覆盖全面，价格合理。去年一套房子遭遇水管爆裂，损失不小，但理赔非常顺利，完全弥补了我的损失，非常满意！',
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const getVisible = () => {
    const indices = [];
    for (let i = -1; i <= 1; i++) {
      indices.push((current + i + testimonials.length) % testimonials.length);
    }
    return indices;
  };

  return (
    <section id="testimonials" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block bg-blue-50 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            客户评价
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            听听客户怎么说
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            超过500万客户的真实反馈，是我们不断前进的动力
          </p>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-10">
          {getVisible().map((idx, pos) => {
            const t = testimonials[idx];
            const isCenter = pos === 1;
            return (
              <div
                key={t.id}
                className={`rounded-2xl p-6 transition-all duration-300 ${
                  isCenter
                    ? 'bg-gradient-to-br from-blue-600 to-sky-500 text-white shadow-2xl scale-105'
                    : 'bg-gray-50 border border-gray-100 text-gray-900'
                }`}
              >
                <Quote
                  className={`w-8 h-8 mb-4 ${isCenter ? 'text-white/40' : 'text-blue-200'}`}
                />
                <p
                  className={`text-sm leading-relaxed mb-6 ${
                    isCenter ? 'text-white/90' : 'text-gray-600'
                  }`}
                >
                  {t.content}
                </p>
                <div className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div
                      className={`font-semibold text-sm ${
                        isCenter ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {t.name}
                    </div>
                    <div
                      className={`text-xs ${isCenter ? 'text-white/70' : 'text-gray-400'}`}
                    >
                      {t.role} · {t.product}
                    </div>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-3.5 h-3.5 fill-current ${
                          isCenter ? 'text-yellow-300' : 'text-yellow-400'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: single card */}
        <div className="lg:hidden mb-8">
          <div className="bg-gradient-to-br from-blue-600 to-sky-500 rounded-2xl p-6 text-white">
            <Quote className="w-8 h-8 text-white/40 mb-4" />
            <p className="text-white/90 text-sm leading-relaxed mb-6">
              {testimonials[current].content}
            </p>
            <div className="flex items-center gap-3">
              <div
                className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonials[current].avatarColor} flex items-center justify-center text-white font-bold text-sm flex-shrink-0`}
              >
                {testimonials[current].avatar}
              </div>
              <div>
                <div className="font-semibold text-sm text-white">
                  {testimonials[current].name}
                </div>
                <div className="text-xs text-white/70">
                  {testimonials[current].role} · {testimonials[current].product}
                </div>
              </div>
              <div className="ml-auto flex gap-0.5">
                {[...Array(testimonials[current].rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current text-yellow-300" />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-600 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-200 border-none ${
                  i === current ? 'w-6 h-2.5 bg-blue-600' : 'w-2.5 h-2.5 bg-gray-300'
                }`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 flex items-center justify-center text-gray-600 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
