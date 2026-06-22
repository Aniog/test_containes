const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-mc7x9k"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cosmos-dark/70 via-cosmos-dark/50 to-cosmos-dark z-10" />

      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <p className="text-cosmos-accent uppercase tracking-widest text-sm font-medium mb-4">
          Explore the Invisible
        </p>
        <h1
          id="hero-title"
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          MicroCosmos
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          A journey into the breathtaking world hidden beneath our eyes — where cells dance, bacteria thrive, and life unfolds at the smallest scale.
        </p>
        <a
          href="#intro"
          className="inline-block px-8 py-3 bg-cosmos-accent/10 border border-cosmos-accent/40 text-cosmos-accent rounded-full hover:bg-cosmos-accent/20 transition-all duration-300 font-medium"
        >
          Begin the Journey
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
