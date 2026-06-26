import { Heart, BookOpen, Share2, Users } from 'lucide-react';

const actions = [
  {
    icon: Heart,
    title: '捐助支持',
    desc: '您的每一份捐助，都将直接用于非遗传承人的培训和技艺保护项目，让古老技艺得以延续。',
    cta: '立即捐助',
    color: '#8B1A1A',
  },
  {
    icon: BookOpen,
    title: '学习体验',
    desc: '参加我们举办的非遗体验课程，亲手感受传统技艺的魅力，让非遗文化走进您的生活。',
    cta: '报名课程',
    color: '#C9A84C',
  },
  {
    icon: Share2,
    title: '传播推广',
    desc: '分享非遗文化故事，让更多人了解和关注这些珍贵的文化遗产，共同守护文明的根脉。',
    cta: '分享故事',
    color: '#8B1A1A',
  },
  {
    icon: Users,
    title: '志愿服务',
    desc: '加入我们的志愿者团队，参与非遗文化的记录、整理和推广工作，成为传承的一份子。',
    cta: '加入我们',
    color: '#C9A84C',
  },
];

export default function JoinSection() {
  return (
    <section id="join" className="py-20 md:py-28 bg-[#1C1C1E] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-[#8B1A1A]/10 -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-[#C9A84C]/5 translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-calligraphy text-[#F8F3EA]/3 text-[300px] leading-none select-none pointer-events-none">
        传
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#C9A84C] text-sm tracking-[0.3em] mb-3 font-medium">JOIN US</p>
          <h2 className="font-serif-cn text-[#F8F3EA] text-3xl md:text-4xl font-bold">参与非遗保护</h2>
          <div className="section-divider" />
          <p className="text-[#F8F3EA]/60 mt-6 max-w-xl mx-auto text-base">
            保护非遗，人人有责。无论您以何种方式参与，都是对中华文明的贡献
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {actions.map((action) => {
            const Icon = action.icon;
            return (
              <div
                key={action.title}
                className="bg-[#F8F3EA]/5 border border-[#F8F3EA]/10 rounded-2xl p-6 hover:bg-[#F8F3EA]/10 transition-all duration-300 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${action.color}20` }}
                >
                  <Icon size={24} style={{ color: action.color }} />
                </div>
                <h3 className="font-serif-cn text-[#F8F3EA] text-lg font-semibold mb-3">
                  {action.title}
                </h3>
                <p className="text-[#F8F3EA]/60 text-sm leading-relaxed mb-5">
                  {action.desc}
                </p>
                <button
                  className="text-sm font-medium px-4 py-2 rounded-full border transition-all duration-200 cursor-pointer"
                  style={{
                    borderColor: action.color,
                    color: action.color,
                    backgroundColor: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = action.color;
                    e.currentTarget.style.color = '#F8F3EA';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = action.color;
                  }}
                >
                  {action.cta}
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#8B1A1A] to-[#A52020] rounded-2xl p-8 md:p-12 text-center">
          <h3 className="font-serif-cn text-[#F8F3EA] text-2xl md:text-3xl font-bold mb-4">
            让非遗文化在新时代焕发光彩
          </h3>
          <p className="text-[#F8F3EA]/80 text-base mb-8 max-w-2xl mx-auto">
            加入我们的非遗保护行动，共同守护这份属于全人类的珍贵文化遗产，
            让中华文明的智慧之光照耀未来。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#C9A84C] hover:bg-[#D4B55A] text-[#1C1C1E] px-8 py-3 rounded-full text-base font-semibold transition-colors duration-200 border-none cursor-pointer">
              立即行动
            </button>
            <button className="border border-[#F8F3EA]/40 text-[#F8F3EA] hover:bg-[#F8F3EA]/10 px-8 py-3 rounded-full text-base font-medium transition-colors duration-200 bg-transparent cursor-pointer">
              了解更多项目
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
