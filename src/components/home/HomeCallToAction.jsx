import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function HomeCallToAction() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-8 bg-cosmos-black relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        data-strk-bg-id="cta-bg-m4n5o6"
        data-strk-bg="[cta-title] microscopic life abstract"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1200"
        style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-cosmos-black via-cosmos-black/80 to-cosmos-black" />

      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <span className="text-xs font-mono uppercase tracking-widest text-cyan-400">Ready to Explore?</span>
        <h2 id="cta-title" className="font-heading font-bold text-4xl md:text-6xl text-slate-50 mt-4 mb-6">
          The Invisible World{' '}
          <span className="gradient-text">Awaits You</span>
        </h2>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto mb-10">
          Journey through billions of years of evolution. Discover the organisms that shaped our planet,
          our bodies, and our future.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/explore"
            className="flex items-center gap-2 bg-cyan-400 text-cosmos-black font-semibold px-8 py-4 rounded-full hover:bg-cyan-300 transition-all duration-200 shadow-xl shadow-cyan-500/30 group"
          >
            Explore Now
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            to="/about"
            className="text-slate-300 hover:text-cyan-400 font-medium transition-colors"
          >
            Learn about our mission →
          </Link>
        </div>
      </div>
    </section>
  );
}
