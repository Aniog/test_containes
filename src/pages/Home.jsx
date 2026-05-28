import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import { Aperture, Zap, Battery, Wind, Star, ArrowRight } from 'lucide-react';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  { icon: Aperture, title: '100MP Sensor', desc: 'Full-frame BSI-CMOS with extraordinary dynamic range in any light.' },
  { icon: Zap,      title: 'AI Autofocus', desc: 'Subject-tracking AI locks focus in under 0.03 seconds.' },
  { icon: Battery,  title: 'All-Day Battery', desc: 'Up to 1,200 frames per charge — shoot from dawn to dusk.' },
  { icon: Wind,     title: 'Weather Sealed', desc: 'IPX6-rated protection against dust, rain, and extreme conditions.' },
];

const teaserPhotos = [
  { imgId: 'home-teaser-a1b2', label: 'Mountain Landscape Photography', labelId: 'ht-label-1', ratio: '3x2', width: 800 },
  { imgId: 'home-teaser-c3d4', label: 'Street Portrait Photography', labelId: 'ht-label-2', ratio: '3x2', width: 800 },
  { imgId: 'home-teaser-e5f6', label: 'Ocean Sunset Photography', labelId: 'ht-label-3', ratio: '3x2', width: 800 },
];

const testimonials = [
  {
    quote: "The Lumora X1 completely changed how I approach landscape photography. The dynamic range is unlike anything I've used before.",
    name: 'Elena Vasquez',
    role: 'Landscape Photographer',
  },
  {
    quote: "Fast autofocus, incredible low-light performance, and a build that can take a beating. This is my go-to camera on every assignment.",
    name: 'James Okafor',
    role: 'Photojournalist',
  },
  {
    quote: "I switched from a competitor after 10 years. The color science alone was worth it — my portraits have never looked better.",
    name: 'Mia Tanaka',
    role: 'Portrait & Fashion Photographer',
  },
];

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          data-strk-bg-id="home-hero-bg-9z8y7x"
          data-strk-bg="[home-hero-sub] [home-hero-title]"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/60 via-transparent to-zinc-950" />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-amber-400 mb-4">Introducing Lumora X1</p>
          <h1 id="home-hero-title" className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
            See the World<br />in Full Detail
          </h1>
          <p id="home-hero-sub" className="text-lg md:text-xl text-zinc-400 max-w-xl mx-auto mb-10">
            Professional-grade photography in the palm of your hand. Capture every moment with stunning clarity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cameras" className="bg-amber-400 text-zinc-950 font-semibold rounded-full px-8 py-3 hover:bg-amber-300 transition-colors">
              Explore Cameras
            </Link>
            <Link to="/gallery" className="border border-zinc-600 text-white rounded-full px-8 py-3 hover:border-amber-400 transition-colors">
              View Gallery
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-500">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-zinc-500 to-transparent" />
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-zinc-950 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">Why Lumora</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Built for the Serious Photographer</h2>
            <p className="text-zinc-400 mt-4 max-w-xl mx-auto">Every component is engineered to give you an edge — whether you're shooting in a studio or on a mountain summit.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 hover:border-amber-400/40 transition-colors">
                <div className="w-10 h-10 rounded-xl bg-amber-400/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Teaser ── */}
      <section className="bg-zinc-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">Shot on Lumora</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Every Frame, a Masterpiece</h2>
            </div>
            <Link to="/gallery" className="flex items-center gap-2 text-amber-400 hover:text-amber-300 text-sm font-medium transition-colors shrink-0">
              View Full Gallery <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {teaserPhotos.map((p) => (
            <span key={p.imgId} id={p.labelId} className="hidden">{p.label}</span>
          ))}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {teaserPhotos.map((p) => (
              <div key={p.imgId} className="overflow-hidden rounded-2xl bg-zinc-800">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={p.label}
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={p.imgId}
                  data-strk-img={`[${p.labelId}]`}
                  data-strk-img-ratio={p.ratio}
                  data-strk-img-width={p.width}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-zinc-950 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">Trusted by Professionals</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">What Photographers Are Saying</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, role }) => (
              <div key={name} className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed flex-1">"{quote}"</p>
                <div>
                  <p className="text-white font-semibold text-sm">{name}</p>
                  <p className="text-zinc-500 text-xs mt-0.5">{role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="bg-zinc-900 py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-widest text-amber-400 mb-4">Ready to Shoot?</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-4">
            Your Next Great Shot Starts Here
          </h2>
          <p className="text-zinc-400 mb-8 max-w-lg mx-auto">
            Explore the full Lumora lineup — from the flagship X1 Pro to the compact M5. Find the camera that fits your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/cameras" className="bg-amber-400 text-zinc-950 font-semibold rounded-full px-8 py-3 hover:bg-amber-300 transition-colors">
              Shop Cameras
            </Link>
            <Link to="/specs" className="border border-zinc-600 text-white rounded-full px-8 py-3 hover:border-amber-400 transition-colors">
              Compare Specs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
