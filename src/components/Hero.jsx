export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 30%, #ffcd3c 60%, #ff6b9d 100%)',
      }}
    >
      {/* Decorative background circles */}
      <div className="absolute top-10 left-10 w-64 h-64 bg-white opacity-5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-300 opacity-10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-300 opacity-5 rounded-full blur-3xl" />

      {/* Floating emoji decorations */}
      <div className="absolute top-24 left-[8%] text-5xl animate-float select-none">🧩</div>
      <div className="absolute top-32 right-[12%] text-5xl animate-float-delay select-none">🪀</div>
      <div className="absolute bottom-32 left-[15%] text-4xl animate-float-delay2 select-none">🎨</div>
      <div className="absolute bottom-24 right-[8%] text-5xl animate-float select-none">🚂</div>
      <div className="absolute top-1/2 right-[5%] text-4xl animate-float-delay select-none hidden lg:block">⭐</div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-24 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text Content */}
        <div className="text-white animate-fadeInUp">
          <div className="inline-flex items-center gap-2 bg-white bg-opacity-20 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full mb-6 border border-white border-opacity-30">
            🏆 中国儿童玩具品牌优选
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 drop-shadow-lg">
            让每个孩子<br />
            <span className="text-yellow-300">快乐成长</span>
            <br />每一天
          </h1>
          <p className="text-lg md:text-xl text-white text-opacity-90 mb-8 leading-relaxed max-w-lg">
            高高乐儿童玩具，专注打造<strong>安全、益智、有趣</strong>的童年体验。
            精选积木、毛绒玩具、拼图三大系列，陪伴孩子探索无限可能！
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mb-10">
            {[
              { num: '500万+', label: '家庭信赖' },
              { num: '10年+', label: '专业品质' },
              { num: '99%', label: '好评率' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-black text-yellow-300">{stat.num}</div>
                <div className="text-sm text-white text-opacity-80">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#products"
              className="animate-pulse-ring bg-white text-orange-500 font-black px-8 py-4 rounded-full text-lg shadow-2xl hover:bg-yellow-50 transition-all hover:-translate-y-1"
            >
              🛒 立即选购
            </a>
            <a
              href="#features"
              className="border-2 border-white text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white hover:text-orange-500 transition-all hover:-translate-y-1"
            >
              了解更多 ↓
            </a>
          </div>
        </div>

        {/* Right: Visual */}
        <div className="hidden md:flex justify-center items-center relative">
          <div className="relative w-80 h-80 lg:w-96 lg:h-96">
            {/* Main circle */}
            <div className="absolute inset-0 bg-white bg-opacity-15 rounded-full backdrop-blur-sm border border-white border-opacity-30 shadow-2xl" />
            {/* Center emoji */}
            <div className="absolute inset-0 flex items-center justify-center text-9xl animate-float">
              🧸
            </div>
            {/* Orbiting items */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-3 shadow-xl text-3xl animate-float-delay">
              🧱
            </div>
            <div className="absolute top-1/2 -right-4 -translate-y-1/2 bg-white rounded-2xl p-3 shadow-xl text-3xl animate-float">
              🧩
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white rounded-2xl p-3 shadow-xl text-3xl animate-float-delay2">
              🎠
            </div>
            <div className="absolute top-1/2 -left-4 -translate-y-1/2 bg-white rounded-2xl p-3 shadow-xl text-3xl animate-float-delay">
              🌈
            </div>
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
