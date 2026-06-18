import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import JewelryImage from '@/components/ui/JewelryImage';
import { useStrkImages } from '@/lib/useStrkImages';

export default function BrandStory() {
  const ref = useRef(null);
  useStrkImages(ref, []);

  return (
    <section ref={ref} className="bg-linen py-20 md:py-28 lg:py-32">
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-center">
          {/* Image */}
          <div className="md:col-span-6 lg:col-span-7 order-1">
            <div className="aspect-[4/5] md:aspect-[5/6] w-full overflow-hidden">
              <JewelryImage
                imgId="velmora-story-image-7d3a9b"
                query="[story-headline] [story-eyebrow]"
                fallbackQuery="jewelry artisan hands working with gold ring soft natural light atelier"
                ratio="4x3"
                width={1400}
                kind="set"
                theme="warm"
                alt="A Velmora artisan finishing a piece by hand."
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Text */}
          <div className="md:col-span-6 lg:col-span-5 order-2 md:pl-6 lg:pl-12">
            <p
              id="story-eyebrow"
              className="text-[11px] uppercase tracking-[0.3em] text-mute font-sans"
            >
              Our Story
            </p>
            <h2
              id="story-headline"
              className="mt-4 font-serif font-light text-espresso text-4xl md:text-5xl lg:text-6xl leading-[1.05]"
            >
              Quiet pieces,
              <br />
              made to be lived in.
            </h2>
            <div className="mt-6 w-12 h-px bg-hairline" />
            <p className="mt-6 text-base md:text-[17px] text-espresso/85 font-sans leading-relaxed">
              Velmora began with a small studio, a few hand tools, and a feeling
              we couldn’t name in any of the jewelry we owned. Every piece is
              cast in 18K gold-plated brass and finished by hand — so it warms
              with you, layers with you, and earns its place in your everyday.
            </p>
            <p className="mt-5 text-base text-espresso/75 font-sans leading-relaxed">
              We make in small batches, ship in recycled packaging, and stand
              behind every clasp.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-espresso hover:text-gold transition-colors font-sans border-b border-espresso hover:border-gold pb-1"
            >
              Read our story <ArrowRight size={14} strokeWidth={1.4} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
