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
    <section ref={containerRef} className="py-20 md:py-28 border-t border-cream-400/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] bg-espresso-700 overflow-hidden">
            <div
              className="w-full h-full"
              data-strk-bg-id="brand-story-bg"
              data-strk-bg="[brand-story-heading] artisan jewelry workshop"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="800"
            >
              <div className="w-full h-full bg-espresso-700" />
            </div>
          </div>

          {/* Text */}
          <div className="animate-slide-up">
            <p className="text-xs tracking-[0.2em] uppercase text-gold mb-5 font-medium">Our Story</p>
            <h2
              id="brand-story-heading"
              className="serif-heading text-3xl md:text-4xl text-cream-100 mb-6"
            >
              Designed in<br />New York, Worn<br />Everywhere
            </h2>
            <p className="text-cream-300/60 leading-relaxed mb-4 text-sm md:text-base">
              Velmora was born from a simple belief: that every woman deserves jewelry
              that feels luxurious without the luxury markup. We craft each piece using
              18K gold plating on responsibly sourced brass, with an obsessive focus on
              fit, finish, and feel.
            </p>
            <p className="text-cream-300/60 leading-relaxed mb-8 text-sm md:text-base">
              From our Manhattan design studio to your jewelry box — no middlemen, no
              markups, no compromise on quality. Just demi-fine pieces made to be part
              of your story.
            </p>
            <Link to="/about" className="btn-outline inline-block">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
