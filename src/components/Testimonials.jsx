import { Star } from 'lucide-react'

const testimonials = [
  {
    name: '李明',
    role: '创业公司 CEO',
    avatar: '李',
    rating: 5,
    text: '自从使用了阳光品牌的服务，我们的业务效率提升了300%。界面简洁，功能强大，团队支持也非常及时。强烈推荐！',
    bg: 'bg-yellow-100',
  },
  {
    name: '王芳',
    role: '电商运营总监',
    avatar: '王',
    rating: 5,
    text: '作为一个对技术不太熟悉的人，我非常惊喜地发现这个平台如此易用。数据分析功能帮助我们做出了很多正确的决策。',
    bg: 'bg-amber-100',
  },
  {
    name: '张伟',
    role: '独立开发者',
    avatar: '张',
    rating: 5,
    text: '价格合理，功能齐全，客服响应速度超快。这是我用过的最好的平台之一，已经推荐给了我所有的朋友。',
    bg: 'bg-yellow-100',
  },
]

const Testimonials = () => {
  return (
    <section className="bg-amber-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-yellow-500 font-bold text-sm uppercase tracking-widest">用户评价</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-yellow-900 mt-3 mb-4">
            他们都爱上了我们
          </h2>
          <p className="text-yellow-700 text-lg max-w-xl mx-auto">
            来自真实用户的真实反馈，让数据说话。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-2xl p-8 shadow-sm border border-yellow-100 flex flex-col gap-4"
            >
              <div className="flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-yellow-800 text-sm leading-relaxed flex-1">"{t.text}"</p>
              <div className="flex items-center gap-3 pt-2 border-t border-yellow-100">
                <div className={`w-10 h-10 rounded-full ${t.bg} flex items-center justify-center text-yellow-900 font-bold text-sm`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-yellow-900 font-bold text-sm">{t.name}</div>
                  <div className="text-yellow-600 text-xs">{t.role}</div>
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
