const testimonials = [
  {
    id: 1,
    avatar: '👩',
    name: '李妈妈',
    location: '北京',
    product: '创意积木系列',
    rating: 5,
    comment: '给儿子买了积木套装，他每天放学第一件事就是拼积木！颜色鲜艳，做工精细，完全不用担心安全问题。强烈推荐！',
    tag: '已购买积木',
  },
  {
    id: 2,
    avatar: '👨',
    name: '张爸爸',
    location: '上海',
    product: '超软毛绒玩具',
    rating: 5,
    comment: '给女儿买的小熊，她抱着睡觉都不放手。质量真的很好，洗了好几次还是那么软，颜色也没有褪。值得信赖的品牌！',
    tag: '已购买毛绒',
  },
  {
    id: 3,
    avatar: '👩‍🦱',
    name: '王奶奶',
    location: '成都',
    product: '趣味拼图系列',
    rating: 5,
    comment: '给孙子买了拼图，他一个人能安静玩一两个小时，专注力提高了很多。图案漂亮，拼片厚实不易损坏，非常满意！',
    tag: '已购买拼图',
  },
  {
    id: 4,
    avatar: '👩‍💼',
    name: '陈老师',
    location: '广州',
    product: '创意积木系列',
    rating: 5,
    comment: '作为幼儿园老师，我给班级采购了一批积木。孩子们非常喜欢，创造力得到了很好的锻炼。售后服务也很好！',
    tag: '批量采购',
  },
  {
    id: 5,
    avatar: '👨‍👩‍👧',
    name: '刘一家',
    location: '杭州',
    product: '全系列',
    rating: 5,
    comment: '三个产品都买了，孩子每天都在玩不同的玩具。包装精美，送礼特别有面子。快递也很快，第二天就到了！',
    tag: '全系列购买',
  },
  {
    id: 6,
    avatar: '👩‍🦰',
    name: '赵妈妈',
    location: '深圳',
    product: '超软毛绒玩具',
    rating: 5,
    comment: '宝宝才8个月，买了最小号的毛绒玩具。材质非常安全，宝宝抓着玩很开心。客服也很耐心，解答了我很多问题。',
    tag: '已购买毛绒',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-yellow-50 text-yellow-600 text-sm font-bold px-4 py-2 rounded-full mb-4">
            💬 真实用户好评
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
            500万家庭的<span className="text-orange-500">真心推荐</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            每一条评价都来自真实购买用户，他们的满意是我们最大的动力
          </p>
        </div>

        {/* Rating Summary */}
        <div className="flex flex-wrap justify-center gap-8 mb-12">
          {[
            { num: '4.9', label: '综合评分', sub: '满分5分' },
            { num: '99%', label: '好评率', sub: '用户满意' },
            { num: '500万+', label: '购买用户', sub: '持续增长' },
            { num: '98%', label: '复购率', sub: '回头客' },
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-orange-50 rounded-2xl px-8 py-4 min-w-[120px]">
              <div className="text-3xl font-black text-orange-500">{stat.num}</div>
              <div className="font-bold text-gray-800 text-sm">{stat.label}</div>
              <div className="text-xs text-gray-400">{stat.sub}</div>
            </div>
          ))}
        </div>

        {/* Testimonial Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>

              {/* Comment */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4 italic">
                "{t.comment}"
              </p>

              {/* Tag */}
              <div className="inline-flex items-center gap-1 bg-orange-50 text-orange-600 text-xs font-bold px-3 py-1 rounded-full mb-4">
                🛒 {t.tag}
              </div>

              {/* User Info */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-200 to-yellow-200 rounded-full flex items-center justify-center text-xl">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{t.name}</div>
                  <div className="text-xs text-gray-400">📍 {t.location}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Banner */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-yellow-50 to-orange-50 border border-orange-100 rounded-2xl px-8 py-4">
            <span className="text-2xl">🔥</span>
            <span className="text-gray-700 font-semibold">
              今日已有 <strong className="text-orange-500">1,234</strong> 位家长下单，库存有限，赶快行动！
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
