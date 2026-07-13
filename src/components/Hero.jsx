const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        data-strk-bg-id="hero-bg-mc1a2b"
        data-strk-bg="[hero-subtitle-mc1a2b] [hero-title-mc1a2b]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        className="absolute inset-0 bg-cosmos-navy bg-cover bg-center"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050810]/60 via-[#050810]/40 to-[#050810]" />

      {/* Decorative orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cosmos-teal/5 blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-cosmos-cyan/5 blur-3xl animate-pulse-slow" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <p className="text-cosmos-teal text-sm md:text-base font-sans font-medium tracking-[0.3em] uppercase mb-6">
          Discover the Invisible
        </p>
        <h1
          id="hero-title-mc1a2b"
          className="font-display font-bold text-6xl md:text-8xl lg:text-9xl text-cosmos-text leading-none mb-6"
        >
          Micro
          <span className="text-cosmos-teal italic">Cosmos</span>
        </h1>
        <p
          id="hero-subtitle-mc1a2b"
          className="font-sans text-cosmos-secondary text-lg md:text-2xl max-w-2xl mx-auto leading-relaxed mb-10"
        >
          A breathtaking journey into the microscopic world — where life thrives
          in forms too small for the naked eye to see.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#gallery"
            className="px-8 py-4 bg-cosmos-teal text-cosmos-black font-semibold rounded-full hover:bg-cosmos-cyan transition-colors duration-300 text-sm tracking-wide"
          >
            Explore Gallery
          </a>
          <a
            href="#about"
            className="px-8 py-4 border border-cosmos-border text-cosmos-secondary font-semibold rounded-full hover:border-cosmos-teal hover:text-cosmos-teal transition-colors duration-300 text-sm tracking-wide"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-cosmos-muted text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cosmos-teal to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
