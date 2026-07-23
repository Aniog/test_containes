import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { ArrowRight } from 'lucide-react';
import { IMAGE_PLACEHOLDER } from '@/lib/images';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="story" ref={containerRef} className="bg-parchment">
      <div className="mx-auto max-w-7xl">
        <div className="grid md:grid-cols-2">
          <div className="relative aspect-[4/5] md:aspect-auto md:min-h-[600px]">
            <img
              data-strk-img-id="story-image-velmora"
              data-strk-img="[story-title] [story-body]"
              data-strk-img-ratio="3x4"
              data-strk-img-width="900"
              src={IMAGE_PLACEHOLDER}
              alt="Velmora jewelry craftsmanship"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center px-6 py-16 md:px-16 lg:px-20">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-gold">
              Our Story
            </p>
            <h2
              id="story-title"
              className="mt-4 font-serif text-3xl leading-tight md:text-4xl lg:text-5xl text-espresso"
            >
              Designed for the Women Who Wear It
            </h2>
            <p
              id="story-body"
              className="mt-6 text-base leading-relaxed text-warmstone"
            >
              Velmora was born from a simple belief: fine jewelry should feel attainable, wearable, and meaningful. Every piece is designed in-house and finished in 18k gold plating, created for the quiet rituals of everyday life and the moments you want to remember.
            </p>
            <p className="mt-4 text-base leading-relaxed text-warmstone">
              We prioritize nickel-free, hypoallergenic materials and thoughtful packaging, so the unboxing feels as special as the piece inside.
            </p>
            <Link
              to="/shop"
              className="mt-10 inline-flex items-center gap-3 text-sm font-medium uppercase tracking-widest text-espresso hover:text-gold transition-colors"
            >
              Discover Our World
              <ArrowRight size={16} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}