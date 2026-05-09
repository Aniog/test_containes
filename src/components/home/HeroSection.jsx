import { ArrowRight, CheckCircle, Star } from 'lucide-react';

const stats = [
  { value: '20+', label: '年行业经验' },
  { value: '500万+', label: '受保客户' },
  { value: '98%', label: '理赔满意率' },
  { value: '24/7', label: '全天候服务' },
];

const highlights = [
  '专业团队，量身定制保障方案',
  '快速理赔，最快24小时到账',
  '全国服务网络，随时随地支持',
];

const HeroSection = () => {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-gradient min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/30 text-blue-200 text-sm font-medium px-4 py-2 rounded-full mb-6">
              <Star className="w-4 h-4 fill-current" />
              中国领先保险服务平台
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              守护您和家人的
              <br />
              <span className="text-sky-400">每一份安心</span>
            </h1>

            <p className="text-lg text-blue-100/80 mb-8 leading-relaxed max-w-lg">
              安盾保险为您提供全面的人寿、健康、财产及车险保障方案，
              专业团队24小时守护您的生活安全。
            </p>

            <div className="flex flex-col gap-3 mb-10">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-sky-400 flex-shrink-0" />
                  <span className="text-blue-100/90 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo('#contact')}
                className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-400 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border-none text-base shadow-lg shadow-blue-500/30"
              >
                立即获取报价
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollTo('#products')}
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-200 border border-white/20 text-base backdrop-blur-sm"
              >
                了解保险产品
              </button>
            </div>
          </div>

          {/* Right: Stats Card */}
          <div className="hidden lg:block">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8">
              <h3 className="text-white font-semibold text-lg mb-6">我们的成就</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-white/10 rounded-2xl p-5 text-center"
                  >
                    <div className="text-3xl font-bold text-sky-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-blue-200 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-gradient-to-r from-blue-500/30 to-sky-500/30 rounded-2xl p-5 border border-blue-400/20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex -space-x-2">
                    {['王', '李', '张', '陈'].map((name) => (
                      <div
                        key={name}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-400 to-sky-500 flex items-center justify-center text-white text-xs font-bold border-2 border-white/20"
                      >
                        {name}
                      </div>
                    ))}
                  </div>
                  <span className="text-blue-200 text-sm">本月新增 2,847 位客户</span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                  <span className="text-blue-200 text-sm ml-2">4.9 / 5.0 综合评分</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Stats */}
        <div className="lg:hidden mt-12 grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center"
            >
              <div className="text-2xl font-bold text-sky-400 mb-1">{stat.value}</div>
              <div className="text-blue-200 text-xs">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 80L60 72C120 64 240 48 360 44C480 40 600 48 720 52C840 56 960 56 1080 50C1200 44 1320 32 1380 26L1440 20V80H1380C1320 80 1200 80 1080 80C960 80 840 80 720 80C600 80 480 80 360 80C240 80 120 80 60 80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
