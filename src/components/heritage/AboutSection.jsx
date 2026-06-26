const stats = [
  { number: '1557', label: '国家级非遗项目', suffix: '+' },
  { number: '43', label: '联合国教科文组织认定', suffix: '项' },
  { number: '3000', label: '年历史传承', suffix: '+' },
  { number: '56', label: '民族共同守护', suffix: '个' },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F8F3EA] pattern-bg">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#8B1A1A] text-sm tracking-[0.3em] mb-3 font-medium">INTANGIBLE CULTURAL HERITAGE</p>
          <h2 className="font-serif-cn text-[#1C1C1E] text-3xl md:text-4xl font-bold">何为非物质文化遗产</h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text */}
          <div>
            <div className="flex items-start gap-4 mb-8">
              <div className="w-1 h-full min-h-[80px] bg-gradient-to-b from-[#8B1A1A] to-[#C9A84C] rounded-full flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif-cn text-[#1C1C1E] text-xl font-semibold mb-3">活态的文化记忆</h3>
                <p className="text-[#5C4A32] leading-relaxed text-base">
                  非物质文化遗产是指各族人民世代相传，并视为其文化遗产组成部分的各种传统文化表现形式，
                  以及与传统文化表现形式相关的实物和场所。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-8">
              <div className="w-1 h-full min-h-[80px] bg-gradient-to-b from-[#C9A84C] to-[#8B1A1A] rounded-full flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif-cn text-[#1C1C1E] text-xl font-semibold mb-3">五大类别</h3>
                <p className="text-[#5C4A32] leading-relaxed text-base">
                  包括传统口头文学、传统美术与技艺、传统表演艺术、传统礼仪节庆、
                  以及传统体育游艺与杂技等五大类别，涵盖中华文明的方方面面。
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-1 h-full min-h-[80px] bg-gradient-to-b from-[#8B1A1A] to-[#C9A84C] rounded-full flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-serif-cn text-[#1C1C1E] text-xl font-semibold mb-3">传承的使命</h3>
                <p className="text-[#5C4A32] leading-relaxed text-base">
                  保护非遗，就是保护中华民族的精神家园。每一项非遗都是先人智慧的结晶，
                  是民族文化认同的重要纽带，需要我们共同守护与传承。
                </p>
              </div>
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-[#FDF8F0] rounded-2xl p-6 text-center gold-border-card shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="font-serif-cn text-[#8B1A1A] text-4xl font-bold leading-none mb-1">
                  {stat.number}
                  <span className="text-[#C9A84C] text-2xl">{stat.suffix}</span>
                </div>
                <p className="text-[#5C4A32] text-sm mt-2 leading-snug">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-16 text-center">
          <blockquote className="font-calligraphy text-[#8B1A1A] text-2xl md:text-3xl leading-relaxed">
            "文化是民族的血脉，是人民的精神家园"
          </blockquote>
          <p className="text-[#8C7B6B] text-sm mt-3 tracking-widest">— 习近平</p>
        </div>
      </div>
    </section>
  );
}
