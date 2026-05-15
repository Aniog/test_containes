export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a0a00]">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-orange-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-700/15 rounded-full blur-3xl" />
      </div>

      {/* Decorative pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `radial-gradient(circle, #f97316 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 pt-24 pb-16">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <span className="inline-block bg-orange-500/20 text-orange-400 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6 border border-orange-500/30">
            Crispy. Juicy. Legendary.
          </span>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
            Fried Chicken
            <br />
            <span className="text-orange-400">Done Right.</span>
          </h1>
          <p className="text-orange-100/70 text-lg sm:text-xl max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed">
            Hand-battered, pressure-fried to golden perfection. Every piece packed with flavor that keeps you coming back for more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#menu"
              className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-full text-lg transition-all shadow-lg shadow-orange-500/30 hover:shadow-orange-400/40 hover:-translate-y-0.5"
            >
              See Our Menu
            </a>
            <a
              href="#story"
              className="border border-orange-500/50 hover:border-orange-400 text-orange-300 hover:text-orange-200 font-bold px-8 py-4 rounded-full text-lg transition-all"
            >
              Our Story
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 mt-12 justify-center lg:justify-start">
            {[
              { value: '20+', label: 'Years of Flavor' },
              { value: '50K+', label: 'Happy Customers' },
              { value: '12', label: 'Secret Spices' },
            ].map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-extrabold text-orange-400">{stat.value}</div>
                <div className="text-orange-100/50 text-xs sm:text-sm mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero visual */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full bg-orange-500/20 blur-2xl scale-110" />
            <div className="relative bg-gradient-to-br from-orange-500/30 to-red-700/20 rounded-full w-72 h-72 sm:w-96 sm:h-96 flex items-center justify-center border border-orange-500/20 shadow-2xl shadow-orange-500/20">
              <span className="text-[140px] sm:text-[180px] select-none drop-shadow-2xl" role="img" aria-label="Fried chicken">
                🍗
              </span>
            </div>
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 text-yellow-900 font-extrabold text-xs px-3 py-1.5 rounded-full shadow-lg rotate-12">
              #1 in Town!
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#1a0a00] border border-orange-500/40 text-orange-300 font-bold text-xs px-3 py-1.5 rounded-full shadow-lg">
              Fresh Daily
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-orange-400/50 text-xs">
        <span>Scroll down</span>
        <div className="w-px h-8 bg-gradient-to-b from-orange-400/50 to-transparent" />
      </div>
    </section>
  );
}
