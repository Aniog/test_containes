import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: '李晓雯',
    location: '上海',
    avatar: '李',
    rating: 5,
    text: '买了由妮可的北欧餐桌，整个餐厅的氛围都不一样了！木纹质感超好，每天吃饭都感觉很幸福。客服也很贴心，全程跟进安装，强烈推荐！',
    product: '北欧原木餐桌',
    date: '2026年3月',
  },
  {
    id: 2,
    name: '张明远',
    location: '北京',
    avatar: '张',
    rating: 5,
    text: '香薰蜡烛作为礼物送给老婆，她超级喜欢！味道很自然，不刺鼻，点燃后整个卧室都弥漫着淡淡的花香，浪漫感满满。',
    product: '香薰蜡烛礼盒',
    date: '2026年2月',
  },
  {
    id: 3,
    name: '陈美琪',
    location: '广州',
    avatar: '陈',
    rating: 5,
    text: '陶瓷餐具真的太美了！每一件都有独特的釉色，用来招待朋友特别有面子。而且很耐用，用了半年了还是新的一样。',
    product: '陶瓷餐具套装',
    date: '2026年1月',
  },
  {
    id: 4,
    name: '王芳芳',
    location: '成都',
    avatar: '王',
    rating: 5,
    text: '羊毛地毯踩上去真的超级软！冬天光脚踩在上面特别暖和。图案也很好看，和我家的北欧风格完美搭配，整个客厅都提升了档次。',
    product: '羊毛地毯',
    date: '2026年4月',
  },
  {
    id: 5,
    name: '刘思远',
    location: '杭州',
    avatar: '刘',
    rating: 5,
    text: '亚麻抱枕套装颜色很正，和官网图片一模一样。材质很舒服，洗了几次也没有变形。沙发瞬间变得温馨了很多，非常满意！',
    product: '亚麻抱枕套装',
    date: '2026年3月',
  },
  {
    id: 6,
    name: '赵小燕',
    location: '深圳',
    avatar: '赵',
    rating: 5,
    text: '绿植花器组合太可爱了！摆在阳台上，每天早上看到都心情很好。多肉植物很健康，包装也很用心，送货很快，下次还会回购！',
    product: '绿植花器组合',
    date: '2026年4月',
  },
];

const ReviewCard = ({ review }) => (
  <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col">
    {/* Quote icon */}
    <Quote className="w-8 h-8 text-[#C4A882] mb-4 flex-shrink-0" />

    {/* Stars */}
    <div className="flex gap-1 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
      ))}
    </div>

    {/* Review text */}
    <p className="text-[#6B5B4E] text-sm leading-relaxed flex-1 mb-4">
      "{review.text}"
    </p>

    {/* Product tag */}
    <span className="inline-block bg-[#F5EFE6] text-[#8B6F47] text-xs px-3 py-1 rounded-full mb-4 self-start">
      购买了：{review.product}
    </span>

    {/* Reviewer */}
    <div className="flex items-center gap-3 pt-4 border-t border-[#F5EFE6]">
      <div className="w-10 h-10 rounded-full bg-[#8B6F47] flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
        {review.avatar}
      </div>
      <div>
        <div className="font-medium text-[#2C1810] text-sm">{review.name}</div>
        <div className="text-xs text-[#9E8E82]">{review.location} · {review.date}</div>
      </div>
    </div>
  </div>
);

const ReviewsSection = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#F5EFE6]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block text-[#8B6F47] text-sm font-medium tracking-widest uppercase mb-3">
            客户评价
          </span>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#2C1810] mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            他们的家，因我们而更美好
          </h2>
          <p className="text-[#6B5B4E] text-lg max-w-xl mx-auto">
            来自真实用户的温暖反馈，是我们前行最大的动力
          </p>
        </div>

        {/* Overall Rating */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12 bg-white rounded-2xl p-6 md:p-8 shadow-sm max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-5xl font-bold text-[#8B6F47]" style={{ fontFamily: "'Noto Serif SC', serif" }}>
              4.9
            </div>
            <div className="flex gap-1 justify-center mt-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <div className="text-sm text-[#9E8E82] mt-1">综合评分</div>
          </div>
          <div className="w-px h-16 bg-[#F5EFE6] hidden sm:block" />
          <div className="grid grid-cols-3 gap-6 text-center">
            {[
              { num: '10,000+', label: '累计订单' },
              { num: '98%', label: '好评率' },
              { num: '4,500+', label: '真实评价' },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-xl font-bold text-[#2C1810]" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                  {s.num}
                </div>
                <div className="text-xs text-[#9E8E82] mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
