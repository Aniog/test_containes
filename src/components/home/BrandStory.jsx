import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Image from '../Image';

export default function BrandStory() {
  const ref = useRef(null);

  useEffect(() => {
    // Image components self-load their own images
  }, []);

  return (
    <section ref={ref} className="py-16 md:py-24 bg-parchment">
      <div className="mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] bg-warmgray overflow-hidden">
            <Image
              id="brand-story-img"
              query="[brand-story-title] [brand-story-body]"
              ratio="4x5"
              width={900}
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="lg:pl-8">
            <p className="text-xs uppercase tracking-[0.3em] text-gold-600 font-medium mb-4">
              Our World
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6"
            >
              Designed for the Modern Muse
            </h2>
            <p id="brand-story-body" className="text-clay leading-relaxed mb-6">
              Velmora was born from a simple belief: luxury should feel personal. Each piece is
              sculpted in small batches using responsibly sourced brass and finished in thick layers
              of 18k gold — designed to keep its warmth through everyday wear.
            </p>
            <p className="text-clay leading-relaxed mb-8">
              From delicate huggies to statement pendants, our collections are made for women who
              dress for themselves — and gift with intention.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium border-b border-ink pb-1 hover:text-gold-600 hover:border-gold-600 transition-colors"
            >
              Our Story
              <ArrowRight className="w-4 h-4" strokeWidth={1.6} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
