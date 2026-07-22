import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { StrkImage } from '@/components/product/ProductImage';
import Reveal from '@/components/Reveal';

export default function BrandStory() {
  return (
    <section className="border-y border-espresso/10 bg-cream">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 py-16 md:grid-cols-2 md:gap-16 md:px-8 md:py-28">
        <Reveal>
          <div className="relative">
            <span id="story-img-caption" className="sr-only">
              artisan hands crafting 18k gold jewelry at a workbench, warm atelier
              light, fine jewelry workshop editorial photography
            </span>
            <div className="aspect-[4/5] w-full overflow-hidden bg-ivory">
              <StrkImage
                imgId="story-atelier-img"
                query="[story-img-caption]"
                ratio="4x5"
                width={900}
                alt="Velmora atelier — crafting gold jewelry"
                className="h-full w-full"
              />
            </div>
            <div className="absolute -bottom-5 -right-3 hidden bg-gold px-6 py-5 md:-right-6 md:block">
              <p className="font-serif text-3xl italic text-cream">est. 2019</p>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-[0.25em] text-cream/85">
                Handmade in small batches
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="max-w-xl">
            <p className="text-[11px] font-medium uppercase tracking-[0.35em] text-gold">
              Our Story
            </p>
            <h2 className="mt-4 font-serif text-3xl font-light leading-tight text-espresso md:text-5xl">
              Jewelry that feels like an <span className="italic">heirloom</span>,
              priced like an everyday joy
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-taupe md:text-base">
              Velmora began at a tiny workbench with one belief: beautiful,
              lasting jewelry shouldn't require a special occasion — or a special
              budget. Each piece is plated in a generous layer of 18k gold over
              recycled brass, finished by hand, and designed to be lived in.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-taupe md:text-base">
              Hypoallergenic, nickel-free, and made in small batches. Treasured
              today, and for many tomorrows.
            </p>
            <Link
              to="/about"
              className="group mt-8 inline-flex items-center gap-2 border-b border-espresso/30 pb-1 text-[11px] font-medium uppercase tracking-[0.25em] text-espresso transition-colors hover:border-gold hover:text-gold-deep"
            >
              Our Story
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={1.5} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
