import { useEffect, useRef, useState, useCallback } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 'slide-1',
    bgId: 'hero-bg-a1b2c3',
    labelId: 'slide-label-1',
    label: 'competitive swimmer racing in pool lane',
  },
  {
    id: 'slide-2',
    bgId: 'hero-bg-d4e5f6',
    labelId: 'slide-label-2',
    label: 'swimming goggles and cap poolside equipment',
  },
  {
    id: 'slide-3',
    bgId: 'hero-bg-g7h8i9',
    labelId: 'slide-label-3',
    label: 'underwater swimmer training fins kickboard',
  },
  {
    id: 'slide-4',
    bgId: 'hero-bg-j1k2l3',
    labelId: 'slide-label-4',
    label: 'open water swimming triathlon ocean',
  },
  {
    id: 'slide-5',
    bgId: 'hero-bg-m4n5o6',
    labelId: 'slide-label-5',
    label: 'swimming pool lanes professional competition',
  },
];

const AUTOPLAY_INTERVAL = 4000;

export default function Hero() {
  const containerRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const goTo = useCallback((index) => {
    setCurrent((index + slides.length) % slides.length);
  }, []);

  const resetTimer = useCallback(() => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_INTERVAL);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, [resetTimer]);

  const handlePrev = () => { goTo(current - 1); resetTimer(); };
  const handleNext = () => { goTo(current + 1); resetTimer(); };
  const handleDot  = (i) => { goTo(i); resetTimer(); };

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-sky-900"
    >
      {/* Hidden label elements for image queries */}
      {slides.map((s) => (
        <span key={s.id} id={s.labelId} className="hidden">{s.label}</span>
      ))}

      {/* Slider background images */}
      {slides.map((s, i) => (
        <div
          key={s.id}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{ opacity: i === current ? 1 : 0 }}
          data-strk-bg-id={s.bgId}
          data-strk-bg={`[${s.labelId}]`}
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-900/60 via-sky-900/40 to-sky-900/70" />

      {/* Wave decoration */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 40 C360 80 1080 0 1440 40 L1440 80 L0 80 Z" fill="#f0f9ff" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <span className="inline-block bg-cyan-400/20 text-cyan-200 text-sm font-semibold px-4 py-1.5 rounded-full mb-6 border border-cyan-400/30">
          Premium Swimming Equipment
        </span>
        <h1
          id="hero-title"
          className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight"
        >
          Gear Up for the <span className="text-cyan-300">Water</span>
        </h1>
        <p
          id="hero-subtitle"
          className="text-lg md:text-xl text-sky-100 mb-10 max-w-2xl mx-auto leading-relaxed"
        >
          Professional swimming equipment for every level — from beginners to elite athletes.
          Dive in with confidence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#products"
            className="bg-white text-sky-700 hover:bg-cyan-50 rounded-full px-8 py-3.5 font-semibold text-base transition shadow-lg"
          >
            Explore Products
          </a>
          <a
            href="#features"
            className="border-2 border-white text-white hover:bg-white hover:text-sky-700 rounded-full px-8 py-3.5 font-semibold text-base transition"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        onClick={handlePrev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition border border-white/30 backdrop-blur-sm"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={handleNext}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition border border-white/30 backdrop-blur-sm"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDot(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 border-0 cursor-pointer ${
              i === current
                ? 'w-6 h-2.5 bg-white'
                : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <a
        href="#products"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-white/60 hover:text-white transition animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
}
