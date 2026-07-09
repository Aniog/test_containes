import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { resolveStrkImgUrl } from '@/lib/utils';

export default function BrandStory() {
  const [imgSrc, setImgSrc] = useState(null);

  useEffect(() => {
    const url = resolveStrkImgUrl('brand-story-img');
    if (url) setImgSrc(url);
  }, []);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden">
            {imgSrc ? (
              <img
                src={imgSrc}
                alt="Velmora artisan at work"
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-warm-100 animate-pulse" />
            )}
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-gold/30 rounded-lg" />
          </div>

          {/* Text */}
          <div>
            <p className="font-sans text-[10px] tracking-widest-2xl uppercase text-gold mb-4">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl tracking-wider text-warm-800 leading-tight">
              Where Craft Meets Intention
            </h2>
            <div className="w-12 h-[1px] bg-gold mt-6 mb-8" />
            <p id="brand-quote" className="font-sans text-sm md:text-base text-warm-500 leading-relaxed mb-6">
              Velmora was born from a simple belief: every woman deserves jewelry that feels
              luxurious without the luxury markup. We work directly with skilled artisans who
              share our commitment to quality, using only 18K gold plating over sterling silver
              to create pieces that last.
            </p>
            <p className="font-sans text-sm md:text-base text-warm-500 leading-relaxed mb-8">
              Each piece in our collection is designed to be mixed, stacked, and layered —
              becoming part of your personal story. Because the best jewelry isn't just worn;
              it's treasured.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 font-sans text-xs tracking-wider uppercase text-warm-700 hover:text-gold border-b border-warm-200 hover:border-gold pb-1 transition-all duration-300"
            >
              Read Our Story
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
