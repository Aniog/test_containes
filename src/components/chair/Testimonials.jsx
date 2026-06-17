const testimonials = [
  {
    id: 1,
    name: '张伟',
    role: '软件工程师',
    company: '某科技公司',
    avatar: '张',
    rating: 5,
    text: '用了 ErgoSeat Pro X1 三个月，腰痛问题明显改善。每天工作10小时以上，坐到下班都不觉得累，真的值得投资！',
  },
  {
    id: 2,
    name: '李晓梅',
    role: '设计总监',
    company: '创意设计工作室',
    avatar: '李',
    rating: 5,
    text: '外观简洁大气，和我的工作室风格完美契合。透气网背在夏天特别舒适，再也不用担心久坐出汗的问题了。',
  },
  {
    id: 3,
    name: '王建国',
    role: '创业者',
    company: '自由职业',
    avatar: '王',
    rating: 5,
    text: '在家办公必备！组装超简单，15分钟搞定。坐垫厚实有弹性，腰托调节非常精准，强烈推荐给所有居家办公的朋友。',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-[#f8f7f4]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-[#e8b86d] text-sm font-semibold uppercase tracking-widest mb-3">
            用户评价
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a2e] mb-4">
            他们都爱上了 ErgoSeat
          </h2>
          <p className="text-[#5a5a72] text-lg max-w-2xl mx-auto">
            超过 50,000 位用户的真实反馈，见证每一把椅子带来的改变。
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white rounded-2xl p-8 border border-[#e2e2ec] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-[#e8b86d] text-lg">★</span>
                ))}
              </div>
              <p className="text-[#1a1a2e] text-sm leading-relaxed mb-6 italic">
                "{t.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1a1a2e] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <p className="text-[#1a1a2e] font-semibold text-sm">{t.name}</p>
                  <p className="text-[#9a9aaa] text-xs">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
