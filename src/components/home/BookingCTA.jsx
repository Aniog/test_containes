import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Sparkles } from 'lucide-react';

export default function BookingCTA() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="book" ref={containerRef} className="py-28 px-6 md:px-12 lg:px-24 bg-void-dark relative overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        data-strk-bg-id="cta-bg-portal-7x3m9q"
        data-strk-bg="[cta-title] [cta-subtitle]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-br from-green-900/40 via-void-dark/80 to-space-black/90" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-green-700/20 rounded-full blur-3xl pointer-events-none z-10" />

      <div className="max-w-4xl mx-auto relative z-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/40 bg-gold/10 mb-8">
          <Sparkles className="w-4 h-4 text-gold" />
          <span className="font-inter text-xs font-semibold text-gold tracking-[0.2em] uppercase">
            Limited Portals Available
          </span>
        </div>

        <h2
          id="cta-title"
          className="font-cinzel text-4xl md:text-6xl font-bold text-mist mb-6 leading-tight"
          style={{ textShadow: '0 0 40px rgba(22,163,74,0.4)' }}
        >
          Your Portal Awaits
        </h2>

        <p
          id="cta-subtitle"
          className="font-inter text-lg text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Only 12 portals open per month. Reserve your place in another reality today.
          Our reality architects will craft your bespoke interdimensional itinerary.
        </p>

        {/* Form */}
        <div className="bg-space-black/60 backdrop-blur-md border border-green-900/40 rounded-2xl p-8 md:p-10 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="font-inter text-xs text-gray-400 tracking-wider uppercase block mb-2">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-sm text-mist placeholder-gray-600 focus:outline-none focus:border-green-600 transition-colors"
              />
            </div>
            <div>
              <label className="font-inter text-xs text-gray-400 tracking-wider uppercase block mb-2">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-sm text-mist placeholder-gray-600 focus:outline-none focus:border-green-600 transition-colors"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="font-inter text-xs text-gray-400 tracking-wider uppercase block mb-2">
              Preferred Destination
            </label>
            <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-sm text-mist focus:outline-none focus:border-green-600 transition-colors appearance-none cursor-pointer">
              <option value="" className="bg-space-black">Select a reality...</option>
              <option value="steampunk" className="bg-space-black">Steampunk Albion — The Brass Empire</option>
              <option value="megacity" className="bg-space-black">Neon Megacity IX — The Infinite Horizon</option>
              <option value="terra" className="bg-space-black">Terra Prima — The First Civilization</option>
              <option value="aqua" className="bg-space-black">Aqua Infinitum — The Endless Ocean</option>
            </select>
          </div>

          <div className="mb-6">
            <label className="font-inter text-xs text-gray-400 tracking-wider uppercase block mb-2">
              Special Requests
            </label>
            <textarea
              rows={3}
              placeholder="Tell us about your dream experience..."
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 font-inter text-sm text-mist placeholder-gray-600 focus:outline-none focus:border-green-600 transition-colors resize-none"
            />
          </div>

          <button
            type="button"
            className="w-full font-cinzel text-sm font-semibold py-4 rounded-full bg-gradient-to-r from-green-700 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-500 transition-all duration-300 shadow-[0_0_30px_rgba(22,163,74,0.4)] hover:shadow-[0_0_50px_rgba(22,163,74,0.6)] tracking-widest"
          >
            Request My Portal
          </button>

          <p className="font-inter text-xs text-gray-600 mt-4 text-center">
            A reality architect will contact you within 24 hours to begin crafting your journey.
          </p>
        </div>
      </div>
    </section>
  );
}
