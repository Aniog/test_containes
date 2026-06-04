import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const panoramas = [
  {
    id: 1,
    title: 'Endless Horizons',
    subtitle: 'Where the earth meets the sky in a golden embrace',
    imgQuery: 'vast african savanna panoramic landscape golden hour acacia trees',
  },
  {
    id: 2,
    title: 'The Great Herds',
    subtitle: 'Millions of wildebeest crossing the Serengeti plains',
    imgQuery: 'wildebeest migration serengeti plains dust panoramic',
  },
  {
    id: 3,
    title: 'Twilight Crossing',
    subtitle: 'Silhouettes against the dying light of a crimson sun',
    imgQuery: 'african savanna sunset silhouette acacia tree panoramic',
  },
  {
    id: 4,
    title: 'River of Life',
    subtitle: 'The Mara River teems with the pulse of the migration',
    imgQuery: 'mara river crossing wildebeest serengeti panoramic wildlife',
  },
  {
    id: 5,
    title: 'Dawn Patrol',
    subtitle: 'First light breaks over the acacia-dotted plains',
    imgQuery: 'african sunrise savanna morning mist acacia panoramic',
  },
];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const containerRef = useRef(null);

  const goTo = useCallback(
    (index) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent(index);
      setTimeout(() => setIsTransitioning(false), 1000);
    },
    [isTransitioning],
  );

  const next = useCallback(() => {
    goTo((current + 1) % panoramas.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + panoramas.length) % panoramas.length);
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        if (e.deltaX > 40) next();
        else if (e.deltaX < -40) prev();
      }
    };
    const el = containerRef.current;
    if (el) el.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      if (el) el.removeEventListener('wheel', handleWheel);
    };
  }, [next, prev]);

  return (
    <div ref={containerRef} className="relative w-full h-screen overflow-hidden bg-dark-earth">
      {/* Panoramic slides */}
      {panoramas.map((pano, idx) => (
        <div
          key={pano.id}
          className={`absolute inset-0 transition-all duration-[1500ms] ease-in-out ${
            idx === current
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105 pointer-events-none'
          }`}
          style={{
            transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
          }}
        >
          <div className="absolute inset-0 animate-parallax-slow">
            <img
              data-strk-img-id={`pano-${pano.id}-${idx}`}
              data-strk-img={pano.imgQuery}
              data-strk-img-ratio="16x9"
              data-strk-img-width="1600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
              alt={pano.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Warm gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark-earth/70 via-dark-earth/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark-earth/30 via-transparent to-transparent" />

          {/* Heat haze dissolve effect layer */}
          <div
            className="absolute inset-0 bg-sunset-gold/10 mix-blend-overlay"
            style={{
              animation: idx === current ? 'dissolve 8s ease-in-out infinite' : 'none',
            }}
          />
        </div>
      ))}

      {/* Content overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
        <div
          className={`transition-all duration-[1200ms] ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          <p className="text-savanna-cream/60 tracking-[0.3em] uppercase text-xs font-serif mb-4">
            Welcome to the Serengeti
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-savanna-cream mb-4 tracking-tight leading-none text-balance">
            {panoramas[current].title}
          </h1>
          <p className="text-lg md:text-xl text-savanna-cream/70 font-serif italic max-w-2xl mx-auto">
            {panoramas[current].subtitle}
          </p>
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-dark-earth/30 backdrop-blur-sm text-savanna-cream hover:bg-burnt-orange/60 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-dark-earth/30 backdrop-blur-sm text-savanna-cream hover:bg-burnt-orange/60 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {panoramas.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goTo(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-500 ${
              idx === current
                ? 'bg-burnt-orange scale-125'
                : 'bg-savanna-cream/40 hover:bg-savanna-cream/60'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 text-savanna-cream/40 text-xs tracking-[0.3em] uppercase font-serif flex items-center gap-2">
        <span>Scroll or swipe to explore</span>
        <ChevronRight className="w-3 h-3 animate-pulse" />
      </div>
    </div>
  );
}