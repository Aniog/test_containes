import { Star } from 'lucide-react';

const testimonials = [
  {
    name: '张伟',
    role: '高级全栈工程师',
    company: 'ByteDance',
    avatar: 'ZW',
    avatarColor: 'bg-violet-600',
    content:
      'CodeAgent 彻底改变了我的工作方式。以前需要半天的重构工作，现在 20 分钟就能完成。它真的理解代码的意图，不只是机械地修改语法。',
    stars: 5,
  },
  {
    name: 'Sarah Chen',
    role: 'Tech Lead',
    company: 'Stripe',
    avatar: 'SC',
    avatarColor: 'bg-emerald-600',
    content:
      "The codebase understanding is incredible. I asked it to 'add rate limiting to all public API endpoints' and it found every single one across 50+ files and implemented it consistently.",
    stars: 5,
  },
  {
    name: '李明',
    role: '独立开发者',
    company: '自由职业',
    avatar: 'LM',
    avatarColor: 'bg-blue-600',
    content:
      '作为独立开发者，CodeAgent 就像给我配了一个全职工程师。调试、测试、文档，它全包了。我现在能专注在产品设计上，效率提升了至少 3 倍。',
    stars: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Engineering Manager',
    company: 'Shopify',
    avatar: 'MJ',
    avatarColor: 'bg-orange-600',
    content:
      "We rolled out CodeAgent to our 40-person engineering team. The onboarding time for new engineers dropped from 2 weeks to 3 days. It's like having the entire codebase documented and explained in real-time.",
    stars: 5,
  },
  {
    name: '王芳',
    role: '前端架构师',
    company: 'Alibaba',
    avatar: 'WF',
    avatarColor: 'bg-pink-600',
    content:
      '最让我惊讶的是它对 TypeScript 类型系统的理解。复杂的泛型类型推导、条件类型，它都能准确处理，比很多人类工程师还要精准。',
    stars: 5,
  },
  {
    name: 'Priya Sharma',
    role: 'Backend Engineer',
    company: 'Airbnb',
    avatar: 'PS',
    avatarColor: 'bg-cyan-600',
    content:
      "CodeAgent caught a race condition in our payment processing code that had been there for 2 years. It not only found the bug but explained exactly why it was dangerous and provided a fix with proper locking.",
    stars: 5,
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 lg:py-32 relative bg-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-200 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-violet-50 blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-violet-100 border border-violet-200 rounded-full px-4 py-1.5 mb-6">
            <span className="text-violet-700 text-sm font-medium">用户评价</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            开发者们都在说什么
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            来自全球顶级科技公司的工程师，分享他们使用 CodeAgent 的真实体验。
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-5 space-y-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="break-inside-avoid bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300"
            >
              <StarRating count={t.stars} />

              <p className="text-gray-600 text-sm leading-relaxed mt-4 mb-6">
                "{t.content}"
              </p>

              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${t.avatarColor} flex items-center justify-center shrink-0`}>
                  <span className="text-white text-xs font-bold">{t.avatar}</span>
                </div>
                <div>
                  <div className="text-gray-900 text-sm font-semibold">{t.name}</div>
                  <div className="text-gray-400 text-xs">
                    {t.role} · {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '4.9/5', label: '平均评分', sub: '基于 12,000+ 评价' },
            { value: '10M+', label: '活跃用户', sub: '遍布 150+ 国家' },
            { value: '40%', label: '效率提升', sub: '平均节省时间' },
            { value: '99.9%', label: '服务可用性', sub: 'SLA 保障' },
          ].map((stat) => (
            <div key={stat.label} className="text-center bg-gray-50 border border-gray-200 rounded-2xl p-6">
              <div className="text-3xl font-bold gradient-text-accent mb-1">{stat.value}</div>
              <div className="text-gray-900 text-sm font-semibold mb-1">{stat.label}</div>
              <div className="text-gray-400 text-xs">{stat.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
