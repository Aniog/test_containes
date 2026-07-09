import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-velmora-cream">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image side */}
          <div className="relative overflow-hidden" style={{ minHeight: '500px' }}>
            <img
              data-strk-img-id="brand-story-img-main"
              data-strk-img="[brand-story-text] [brand-story-headline]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story — artisan crafting gold jewelry"
              className="w-full h-full object-cover absolute inset-0"
            />
          </div>

          {/* Text side */}
          <div className="flex flex-col justify-center px-8 md:px-16 py-16 md:py-24">
            <p className="font-manrope text-xs uppercase tracking-widest text-velmora-gold mb-4">Our Story</p>
            <h2
              id="brand-story-headline"
              className="font-cormorant text-4xl md:text-5xl font-light text-velmora-obsidian leading-tight mb-6"
            >
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <p
              id="brand-story-text"
              className="font-manrope text-sm text-velmora-charcoal leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't cost a fortune, but it should feel like it does. We design each piece with intention — the weight, the finish, the way it catches light.
            </p>
            <p className="font-manrope text-sm text-velmora-charcoal leading-relaxed mb-8">
              Every Velmora piece is crafted from 18K gold-plated brass, hypoallergenic and designed to be worn every day. From the studio to your jewelry box, we believe in jewelry that becomes part of your story.
            </p>

            <div className="flex flex-col sm:flex-row gap-8 mb-10">
              {[
                { number: '50K+', label: 'Happy Customers' },
                { number: '4.9★', label: 'Average Rating' },
                { number: '100%', label: 'Hypoallergenic' },
              ].map(({ number, label }) => (
                <div key={label}>
                  <p className="font-cormorant text-3xl font-light text-velmora-gold">{number}</p>
                  <p className="font-manrope text-xs uppercase tracking-widest text-velmora-mink mt-1">{label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/shop"
              className="self-start font-manrope text-xs uppercase tracking-widest text-velmora-charcoal hover:text-velmora-gold transition-colors duration-200 border-b border-velmora-stone hover:border-velmora-gold pb-0.5"
            >
              Discover Our Collection
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
