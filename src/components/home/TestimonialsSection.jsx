import { Star } from 'lucide-react';

const testimonials = [
  {
    name: '张伟',
    role: '全栈开发工程师',
    avatar: 'ZW',
    avatarColor: 'from-violet-500 to-purple-600',
    rating: 5,
    content:
      '这个扩展彻底改变了我整理技术文档的方式。以前需要手动转换的工作，现在一键搞定，节省了大量时间。代码块的处理尤其出色！',
  },
  {
    name: 'Sarah Chen',
    role: '技术写作者',
    avatar: 'SC',
    avatarColor: 'from-cyan-500 to-blue-600',
    rating: 5,
    content:
      "As a technical writer, I constantly need to convert web content to Markdown. HTML2MD is incredibly accurate and handles complex nested structures perfectly. Highly recommended!",
  },
  {
    name: '李明',
    role: '产品经理',
    avatar: 'LM',
    avatarColor: 'from-green-500 to-teal-600',
    rating: 5,
    content:
      '用来整理竞品分析资料非常方便。把网页内容转成 Markdown 后直接粘贴到 Notion，格式完全保留，再也不用手动排版了。',
  },
  {
    name: '王芳',
    role: '前端开发者',
    avatar: 'WF',
    avatarColor: 'from-orange-500 to-red-500',
    rating: 5,
    content:
      '表格转换功能太强了！以前 HTML 表格转 Markdown 是最头疼的，现在完全自动化。选区转换功能也很实用，可以只转换需要的部分。',
  },
  {
    name: 'Alex Kim',
    role: 'DevOps Engineer',
    avatar: 'AK',
    avatarColor: 'from-pink-500 to-rose-600',
    rating: 5,
    content:
      "Perfect for extracting documentation from various sources. The export to .md file feature is a game changer for our team's knowledge base workflow.",
  },
  {
    name: '陈晓',
    role: '独立博主',
    avatar: 'CX',
    avatarColor: 'from-yellow-500 to-amber-600',
    rating: 5,
    content:
      '写博客必备工具！经常需要引用其他网站的内容，用这个扩展转换后格式非常干净，链接和图片都能正确处理，强烈推荐给所有写作者。',
  },
];

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 bg-[#0d0f18]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            用户评价
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
            开发者们都在用
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            超过 50,000 名用户信赖 HTML2MD，在 Chrome 商店获得 4.9 星好评。
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#1a1d27] border border-[#2e3347] rounded-2xl p-6 hover:border-violet-500/30 transition-all duration-300"
            >
              {/* Rating */}
              <StarRating count={t.rating} />

              {/* Content */}
              <p className="text-slate-300 text-sm leading-relaxed mt-4 mb-5">
                "{t.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="text-slate-100 text-sm font-semibold">{t.name}</div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall rating */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 bg-[#1a1d27] border border-[#2e3347] rounded-2xl p-8">
          <div className="text-center">
            <div className="text-5xl font-extrabold text-slate-100">4.9</div>
            <StarRating count={5} />
            <div className="text-slate-500 text-sm mt-1">Chrome 商店评分</div>
          </div>
          <div className="hidden sm:block w-px h-16 bg-[#2e3347]" />
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-slate-100">50,000+</div>
              <div className="text-slate-500 text-sm">活跃用户</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-100">2,000+</div>
              <div className="text-slate-500 text-sm">五星好评</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-100">100+</div>
              <div className="text-slate-500 text-sm">国家和地区</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-slate-100">99.9%</div>
              <div className="text-slate-500 text-sm">用户满意度</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
