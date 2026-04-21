const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #1a0a00 0%, #3d1200 50%, #6b2000 100%)',
      }}
    >
      {/* Decorative circles */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-80 h-80 rounded-full bg-red-700/10 blur-3xl" />

      {/* Big pizza emoji backdrop */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <span className="text-[28rem] opacity-5 leading-none">🍕</span>
      </div>

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p
          className="text-orange-400 text-sm font-semibold tracking-[0.3em] uppercase mb-4"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Authentic Neapolitan Pizza
        </p>
        <h1
          className="text-white text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Pizza Made
          <br />
          <span className="text-orange-400 italic">With Love</span>
        </h1>
        <p
          className="text-stone-300 text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          Hand-stretched dough, San Marzano tomatoes, and fresh mozzarella —
          baked in our wood-fired oven at 900°F for the perfect char.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            className="bg-orange-500 hover:bg-orange-400 text-white font-bold px-8 py-4 rounded-full text-lg transition-all hover:scale-105 shadow-lg shadow-orange-900/40"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            See Our Menu
          </a>
          <a
            href="#about"
            className="border-2 border-white/30 hover:border-white text-white font-semibold px-8 py-4 rounded-full text-lg transition-all hover:bg-white/10"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Our Story
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
          {[
            { value: '1987', label: 'Est.' },
            { value: '40+', label: 'Pizzas' },
            { value: '900°F', label: 'Wood Fire' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-orange-400 text-3xl font-black"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                {stat.value}
              </div>
              <div
                className="text-stone-400 text-xs uppercase tracking-widest mt-1"
                style={{ fontFamily: "'Inter', sans-serif" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 80 960 0 720 20C480 40 240 80 0 40L0 80Z" fill="#fffbf5" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
