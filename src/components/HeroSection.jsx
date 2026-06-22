export default function HeroSection() {
  return (
    <section id="home" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        data-strk-bg-id="hero-bg-micro"
        data-strk-bg="[hero-subtitle] [hero-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-neutral-950/60 backdrop-blur-[2px]"></div>
      </div>
      
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 
          id="hero-title"
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 drop-shadow-lg"
        >
          Microscopic <span className="text-emerald-400">Wonders</span>
        </h1>
        <p 
          id="hero-subtitle"
          className="text-xl md:text-2xl text-neutral-200 max-w-2xl mx-auto mb-10 drop-shadow-md"
        >
          Dive into the invisible world of cellular structures, microorganisms, and exquisite microscopic details.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#wonders" className="px-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full font-medium transition-colors">
            Explore Now
          </a>
          <a href="#gallery" className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm rounded-full font-medium transition-colors border border-white/20">
            View Gallery
          </a>
        </div>
      </div>
    </section>
  );
}