import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { StockImg } from '@/lib/images';

export default function BrandStory() {
  return (
    <section id="about" className="py-20 md:py-28 bg-velmora-parchment">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="relative aspect-[4/5] md:aspect-[3/4] rounded overflow-hidden">
            <StockImg
              id="brand-story-img"
              query="[brand-story-title] [brand-story-subtitle]"
              ratio="3x4"
              width={800}
              alt="Velmora jewelry craftsmanship"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center">
            <p
              id="brand-story-subtitle"
              className="font-sans text-xs tracking-[0.3em] uppercase text-velmora-gold mb-4"
            >
              Our Philosophy
            </p>
            <h2
              id="brand-story-title"
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-light text-velmora-espresso leading-tight"
            >
              Designed to Last a Lifetime
            </h2>
            <div className="hairline-dark my-8 max-w-xs" />
            <p className="font-sans text-sm md:text-base text-velmora-stone leading-relaxed mb-6">
              Velmora was born from a belief that fine jewelry should not be reserved for special occasions. Each piece is crafted with 18K gold plating, hypoallergenic materials, and meticulous attention to detail — so you can wear beauty every single day.
            </p>
            <p className="font-sans text-sm md:text-base text-velmora-stone leading-relaxed mb-10">
              We work with skilled artisans to create demi-fine pieces that balance timeless design with modern wearability. From delicate huggies to statement necklaces, every item is made to be treasured.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 font-sans text-xs font-medium tracking-[0.25em] uppercase text-velmora-espresso hover:text-velmora-gold transition-colors duration-300 group"
            >
              Our Story
              <ArrowRight
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
