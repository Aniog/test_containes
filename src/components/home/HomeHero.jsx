import Button from '@/components/ui/Button';

const HomeHero = () => {
  return (
    <section className="relative h-screen w-full flex items-center px-6 md:px-12 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0 bg-velmora-stone"
        data-strk-bg-id="home-hero-bg"
        data-strk-bg="[hero-title] close-up gold jewelry luxury woman model warm lighting"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1920"
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 max-w-2xl text-white">
        <h1 
          id="hero-title"
          className="text-5xl md:text-8xl font-serif mb-6 leading-tight animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200"
        >
          Crafted to be Treasured
        </h1>
        <p className="text-lg md:text-xl font-light mb-10 tracking-wide text-white/90 max-w-lg animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-400">
          Demi-fine gold jewelry for the modern silhouette. Timeless pieces designed for every day, and everything in between.
        </p>
        <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-600">
            <Button variant="accent" className="px-12 py-5 text-sm">
                Shop the Collection
            </Button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-6 md:left-12 flex items-center gap-4 text-white/60 animate-in fade-in duration-1000 delay-1000">
        <div className="w-12 h-[1px] bg-white/40" />
        <span className="text-[10px] uppercase tracking-widest leading-none">Est. 2026</span>
      </div>
    </section>
  );
};

export default HomeHero;