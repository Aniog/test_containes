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
    <section
      id="about"
      ref={containerRef}
      className="py-20 md:py-0 bg-surface-alt overflow-hidden"
    >
      <div className="max-w-7xl mx-auto md:grid md:grid-cols-2">
        {/* Image side */}
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[600px] overflow-hidden">
          <img
            data-strk-img-id="brand-story-img-x9y8z7"
            data-strk-img="[brand-story-text] [brand-story-headline] gold jewelry atelier craftsmanship"
            data-strk-img-ratio="4x3"
            data-strk-img-width="900"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
            alt="Velmora atelier"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-obsidian/10" />
        </div>

        {/* Text side */}
        <div className="flex items-center px-6 md:px-16 py-16 md:py-20 bg-cream">
          <div className="max-w-md">
            <p className="text-xs uppercase tracking-widest font-sans text-gold mb-6">
              Our Story
            </p>
            <h2
              id="brand-story-headline"
              className="font-serif text-3xl md:text-4xl font-light text-ink leading-snug mb-6"
            >
              Born from a love of
              <br />
              <em className="italic">enduring beauty</em>
            </h2>
            <p
              id="brand-story-text"
              className="text-sm font-sans text-muted leading-relaxed mb-4"
            >
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We design demi-fine pieces that feel luxurious, wear beautifully, and last for years.
            </p>
            <p className="text-sm font-sans text-muted leading-relaxed mb-8">
              Every piece is crafted in 18K gold-plated brass, hypoallergenic and nickel-free, designed to be worn every day and treasured for a lifetime. Because you deserve jewelry that moves with you.
            </p>
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="text-xs uppercase tracking-widest font-sans text-gold border-b border-gold pb-0.5 hover:text-gold-dark hover:border-gold-dark transition-colors"
              >
                Read Our Story
              </Link>
              <div className="h-px flex-1 bg-parchment" />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-10 border-t border-parchment">
              {[
                { value: '50K+', label: 'Happy Customers' },
                { value: '4.9★', label: 'Average Rating' },
                { value: '100%', label: 'Hypoallergenic' },
              ].map(({ value, label }) => (
                <div key={label}>
                  <p className="font-serif text-2xl font-light text-ink">{value}</p>
                  <p className="text-[10px] uppercase tracking-widest font-sans text-muted mt-1">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
