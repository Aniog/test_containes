export default function Explore() {
  return (
    <section id="explore" className="relative py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=1800&q=85&fit=crop"
          alt="Microscopic background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-transparent to-[#0a0a0f]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p
          className="text-violet-300 text-sm font-medium tracking-[0.3em] uppercase mb-6"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Begin Your Journey
        </p>
        <h2
          className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          The Universe Exists <br />
          <span className="italic text-violet-300">at Every Scale</span>
        </h2>
        <p
          className="text-white/65 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          From the vast cosmos to the tiniest atom, beauty and complexity are woven into every layer of reality.
          The microscopic world is not separate from ours — it <em>is</em> ours.
        </p>

        {/* Stats row */}
        <div className="flex flex-wrap justify-center gap-10 mb-14">
          {[
            { value: '10⁻⁹m', label: 'Nanometer scale' },
            { value: '1,000×', label: 'Light microscope magnification' },
            { value: '10M×', label: 'Electron microscope magnification' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl md:text-4xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.value}
              </div>
              <div
                className="text-white/50 text-sm mt-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        <a
          href="#gallery"
          className="inline-flex items-center gap-3 px-10 py-4 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-semibold text-base transition-all duration-300 hover:shadow-xl hover:shadow-violet-500/30 animate-pulse-glow"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Explore the Gallery
        </a>
      </div>
    </section>
  );
}
