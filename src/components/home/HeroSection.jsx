import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '1858', label: 'Year Invented' },
  { value: '50km', label: 'Lines Per Pencil' },
  { value: '45,000', label: 'Words Written' },
];

export default function HeroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="min-h-screen bg-amber-50 flex flex-col">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 lg:px-16 py-6">
        <span className="text-xs font-semibold uppercase tracking-widest text-gray-500">
          Pencil Co.
        </span>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-gray-900 transition">Craft</a>
          <a href="#" className="hover:text-gray-900 transition">Collection</a>
          <a href="#" className="hover:text-gray-900 transition">Story</a>
        </div>
        <a
          href="#"
          className="bg-gray-900 text-white text-sm px-5 py-2 rounded-full font-semibold hover:bg-gray-700 transition"
        >
          Shop Now
        </a>
      </nav>

      {/* Hero Body */}
      <div className="flex-1 flex flex-col lg:flex-row items-center gap-12 px-6 lg:px-16 py-12 lg:py-0">
        {/* Left: Text */}
        <div className="flex-1 flex flex-col gap-6 max-w-2xl">
          <span className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full w-fit border border-yellow-200">
            <span className="w-2 h-2 rounded-full bg-yellow-400 inline-block"></span>
            Handcrafted Since 1858
          </span>

          <h1
            id="hero-heading"
            className="text-6xl lg:text-8xl font-black text-gray-900 tracking-tight leading-none"
          >
            The Art of<br />
            <span className="text-yellow-400">the Pencil.</span>
          </h1>

          <p
            id="hero-subheading"
            className="text-lg lg:text-xl text-gray-500 font-medium max-w-md leading-relaxed"
          >
            Every mark tells a story. Crafted from sustainably sourced cedar and
            pure graphite, our pencils are built for thinkers, dreamers, and makers.
          </p>

          <div className="flex flex-wrap gap-4 mt-2">
            <a
              href="#"
              className="bg-gray-900 text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-700 transition text-sm"
            >
              Explore Collection
            </a>
            <a
              href="#"
              className="border-2 border-gray-900 text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-900 hover:text-white transition text-sm"
            >
              Our Story
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-6 pt-6 border-t border-amber-200">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-black text-gray-900">{s.value}</p>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mt-0.5">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Image */}
        <div className="flex-1 flex items-center justify-center w-full max-w-lg lg:max-w-none">
          <div className="relative w-full max-w-md lg:max-w-lg">
            {/* Background blob */}
            <div className="absolute inset-0 bg-yellow-200 rounded-[40%_60%_55%_45%/45%_55%_60%_40%] scale-110 opacity-60"></div>

            {/* Main image */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[3x4]"
              style={{ aspectRatio: '3/4' }}
              data-strk-bg-id="pencil-hero-bg-8f2a9c"
              data-strk-bg="[hero-subheading] [hero-heading]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="600"
            >
              <img
                alt="Handcrafted pencils"
                className="w-full h-full object-cover"
                data-strk-img-id="pencil-hero-img-3d7b1e"
                data-strk-img="[hero-subheading] [hero-heading]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-lg px-5 py-4 border border-amber-100">
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Material</p>
              <p className="text-sm font-bold text-gray-900 mt-0.5">Cedar & Graphite</p>
            </div>

            {/* Floating rating */}
            <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-2xl shadow-lg px-5 py-4">
              <p className="text-2xl font-black text-gray-900">★ 4.9</p>
              <p className="text-xs font-semibold text-gray-700 mt-0.5">12k Reviews</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="border-t border-amber-200 py-4 overflow-hidden">
        <div className="flex gap-12 animate-marquee whitespace-nowrap text-xs font-semibold uppercase tracking-widest text-gray-400 px-6">
          {Array(6).fill(['✏ Sustainably Sourced', '✏ Precision Crafted', '✏ Artist Grade', '✏ Eco Friendly', '✏ Since 1858']).flat().map((item, i) => (
            <span key={i}>{item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
