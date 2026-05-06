import { ArrowRight, Star, Award, Leaf } from 'lucide-react';

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#3d2b1f] via-[#5c3d2e] to-[#2c1a0e]" />

      {/* Wood texture overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 3px,
            rgba(212, 169, 106, 0.4) 3px,
            rgba(212, 169, 106, 0.4) 4px
          ), repeating-linear-gradient(
            90deg,
            transparent,
            transparent 20px,
            rgba(212, 169, 106, 0.1) 20px,
            rgba(212, 169, 106, 0.1) 21px
          )`,
        }}
      />

      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-[#d4a96a]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#8b5e3c]/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-[#d4a96a]/20 border border-[#d4a96a]/30 rounded-full px-4 py-2 mb-6">
              <Leaf className="w-4 h-4 text-[#d4a96a]" />
              <span className="text-sm text-[#d4a96a] font-medium">天然木材 · 手工制作</span>
            </div>

            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              style={{ fontFamily: "'Noto Serif SC', serif" }}
            >
              <span className="text-[#f5e6c8]">匠心</span>
              <span className="text-[#d4a96a]">木作</span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-normal text-[#c4a882] mt-2 block">
                让自然温度融入生活
              </span>
            </h1>

            <p className="text-[#b89a7a] text-base sm:text-lg leading-relaxed mb-8 max-w-lg">
              每一件作品都由经验丰富的木艺匠人精心打造，选用优质天然木材，
              融合传统工艺与现代美学，为您带来独一无二的木制艺术品。
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={() => handleScroll('#products')}
                className="flex items-center justify-center gap-2 bg-[#d4a96a] hover:bg-[#c49558] text-[#2c1a0e] font-semibold px-8 py-4 rounded-full transition-all hover:shadow-lg hover:shadow-[#d4a96a]/30 hover:-translate-y-0.5"
              >
                探索产品
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll('#about')}
                className="flex items-center justify-center gap-2 border border-[#d4a96a]/50 hover:border-[#d4a96a] text-[#d4a96a] font-semibold px-8 py-4 rounded-full transition-all hover:bg-[#d4a96a]/10"
              >
                了解我们
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: '10+', label: '年匠艺经验' },
                { value: '500+', label: '精品款式' },
                { value: '50K+', label: '满意客户' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-[#d4a96a]" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#8b7355] mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Visual Display */}
          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main product showcase */}
              <div className="absolute inset-8 bg-gradient-to-br from-[#8b5e3c] to-[#5c3d2e] rounded-3xl shadow-2xl overflow-hidden">
                {/* Wood grain pattern */}
                <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `repeating-linear-gradient(
                      15deg,
                      transparent,
                      transparent 8px,
                      rgba(212, 169, 106, 0.3) 8px,
                      rgba(212, 169, 106, 0.3) 9px
                    )`,
                  }}
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="text-8xl mb-4">🪵</div>
                  <div className="text-center">
                    <p className="text-[#f5e6c8] text-xl font-bold mb-2" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                      精选木材
                    </p>
                    <p className="text-[#d4a96a] text-sm">胡桃木 · 橡木 · 樱桃木</p>
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute top-0 right-0 bg-[#fdf8f3] rounded-2xl p-4 shadow-xl w-36">
                <div className="flex items-center gap-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-[#d4a96a] text-[#d4a96a]" />
                  ))}
                </div>
                <p className="text-xs text-[#5c3d2e] font-medium">4.9 / 5.0</p>
                <p className="text-xs text-[#8b7355]">2000+ 好评</p>
              </div>

              <div className="absolute bottom-0 left-0 bg-[#fdf8f3] rounded-2xl p-4 shadow-xl w-40">
                <Award className="w-6 h-6 text-[#d4a96a] mb-2" />
                <p className="text-xs text-[#5c3d2e] font-semibold">国家级工艺美术</p>
                <p className="text-xs text-[#8b7355]">认证品牌</p>
              </div>

              {/* Decorative ring */}
              <div className="absolute inset-0 border-2 border-[#d4a96a]/20 rounded-full" />
              <div className="absolute inset-4 border border-[#d4a96a]/10 rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-xs text-[#8b7355]">向下滚动</span>
        <div className="w-5 h-8 border-2 border-[#8b7355] rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-[#d4a96a] rounded-full" />
        </div>
      </div>
    </section>
  );
}
