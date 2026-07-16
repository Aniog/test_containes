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
    <section id="about" ref={containerRef} className="bg-parchment">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[560px]">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/3] md:aspect-auto">
            <img
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              data-strk-img-id="brand-story-img-c4d5e6"
              data-strk-img="[brand-story-desc] [brand-story-heading] gold jewelry artisan craftsmanship"
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              alt="Velmora brand story"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-espresso/10" />
          </div>

          {/* Text */}
          <div className="flex items-center px-8 md:px-16 py-16 md:py-20">
            <div className="max-w-md">
              <p className="font-sans text-xs uppercase tracking-[0.3em] text-gold mb-5">
                Our Story
              </p>
              <h2
                id="brand-story-heading"
                className="font-serif text-3xl md:text-4xl font-light text-espresso leading-snug mb-6"
              >
                Jewelry that tells<br />
                <em className="italic">your</em> story
              </h2>
              <p
                id="brand-story-desc"
                className="font-sans text-sm text-taupe leading-relaxed mb-4"
              >
                Velmora was born from a simple belief: that beautiful jewelry shouldn't be reserved for special occasions. We create demi-fine pieces designed to be worn every day — to work, to dinner, to wherever life takes you.
              </p>
              <p className="font-sans text-sm text-taupe leading-relaxed mb-8">
                Each piece is crafted with 18K gold plating over hypoallergenic bases, designed to last and to be loved. We believe in accessible luxury — jewelry that feels premium without the premium price tag.
              </p>

              <div className="flex items-center gap-8 mb-10 pt-6 border-t border-linen">
                {[
                  { value: '50K+', label: 'Happy Customers' },
                  { value: '4.9★', label: 'Average Rating' },
                  { value: '3 Yrs', label: 'Crafting Beauty' },
                ].map(stat => (
                  <div key={stat.label}>
                    <p className="font-serif text-2xl text-espresso">{stat.value}</p>
                    <p className="font-sans text-xs text-taupe uppercase tracking-wider mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>

              <Link
                to="/#about"
                className="inline-block font-sans text-xs uppercase tracking-widest text-espresso border-b border-espresso pb-0.5 hover:text-gold hover:border-gold transition-colors duration-200"
              >
                Read Our Story →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
