const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        data-strk-bg-id="hero-bg-mc001"
        data-strk-bg="[hero-desc-mc001] [hero-title-mc001]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
        className="absolute inset-0 bg-[#050a14]"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#050a14]/60 via-[#050a14]/40 to-[#050a14]" />

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <p id="hero-desc-mc001" className="text-cyan-400 font-sans font-semibold tracking-[0.3em] uppercase text-sm md:text-base mb-6">
          Explore the Invisible Universe
        </p>
        <h1 id="hero-title-mc001" className="font-display font-bold text-white leading-tight mb-6"
          style={{ fontSize: 'clamp(3rem, 10vw, 7rem)' }}>
          Micro<span className="text-cyan-400">Cosmos</span>
        </h1>
        <p className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Journey into the breathtaking world that exists beyond the naked eye — where bacteria dance, crystals bloom, and life pulses in forms we never imagined.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#gallery"
            className="bg-cyan-400 text-[#050a14] font-semibold px-8 py-3 rounded-full hover:bg-cyan-300 transition-colors duration-200 text-base">
            Explore Gallery
          </a>
          <a href="#about"
            className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-full hover:bg-cyan-400/10 transition-colors duration-200 text-base">
            Learn More
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
