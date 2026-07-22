import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef} className="pt-24 pb-20">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Hero */}
        <div className="relative aspect-[21/9] bg-velmora-sand overflow-hidden mb-16">
          <img
            alt="Velmora atelier"
            data-strk-img-id="about-hero-img-3fh8"
            data-strk-img="[about-hero-desc] [about-hero-title]"
            data-strk-img-ratio="21x9"
            data-strk-img-width="1400"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 21 9'/%3E"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-velmora-deep/30" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 id="about-hero-title" className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium">Our Story</h1>
              <p id="about-hero-desc" className="mt-4 text-white/70 font-light max-w-lg mx-auto text-sm md:text-base">
                The art of quiet luxury, crafted for everyday life
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-xs tracking-widest uppercase text-velmora-gold font-medium mb-4">Founded in 2023</p>
            <h2 className="font-serif text-3xl md:text-4xl font-medium leading-snug">
              Jewelry should be lived in, not locked away
            </h2>
            <p className="mt-6 text-velmora-muted leading-relaxed font-light">
              Velmora was founded on a simple belief: fine jewelry belongs in your everyday life, not just in a box for special occasions. We create demi-fine pieces that bridge the gap between costume jewelry and luxury — accessible enough to collect, crafted well enough to treasure.
            </p>
            <p className="mt-4 text-velmora-muted leading-relaxed font-light">
              Each piece is designed in our Barcelona atelier and crafted in small batches using 18K gold plating over responsibly sourced brass. Our gold tone is carefully calibrated for warmth and depth — the kind of glow that makes you feel put-together the moment you put it on.
            </p>
          </div>
          <div className="aspect-[4/5] bg-velmora-sand">
            <img
              alt="Velmora design process"
              data-strk-img-id="about-studio-img-9j2k"
              data-strk-img="[about-studio-desc] gold jewelry design atelier"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
              className="w-full h-full object-cover"
            />
            <span id="about-studio-desc" className="hidden">Velmora design atelier Barcelona</span>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center py-16 border-t border-velmora-line">
          <div className="space-y-3">
            <h3 className="text-xs tracking-widest uppercase text-velmora-gold font-medium">Quality</h3>
            <p className="text-velmora-muted text-sm leading-relaxed font-light">
              18K gold plating over brass, hypoallergenic posts, and hand-set crystals. Every piece passes a 12-point quality check before it reaches you.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xs tracking-widest uppercase text-velmora-gold font-medium">Sustainability</h3>
            <p className="text-velmora-muted text-sm leading-relaxed font-light">
              Recyclable packaging, responsibly sourced materials, and a supply chain we're proud to stand behind. Small batches mean less waste.
            </p>
          </div>
          <div className="space-y-3">
            <h3 className="text-xs tracking-widest uppercase text-velmora-gold font-medium">Community</h3>
            <p className="text-velmora-muted text-sm leading-relaxed font-light">
              Velmora is built around the women who wear us. Tag @velmorajewelry to be featured, and join a community that celebrates quiet confidence.
            </p>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link to="/shop" className="btn-primary">
            Explore the Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
