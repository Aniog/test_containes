import { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function AboutPage() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="bg-cream pt-20 md:pt-24" ref={containerRef}>
      <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
        <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-stone-800 text-center">
          Our Story
        </h1>
        <div className="w-12 h-px bg-gold mx-auto mt-6 mb-12" />

        <div className="aspect-[16/9] overflow-hidden mb-12">
          <div
            data-strk-bg-id="about-hero-k11"
            data-strk-bg="[about-heading] gold jewelry artisan workshop craftsmanship"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1200"
            className="w-full h-full"
          />
        </div>

        <div className="space-y-6 text-sm text-stone-600 leading-relaxed">
          <p id="about-heading">
            Born from a belief that fine jewelry should be accessible, Velmora crafts
            demi-fine pieces that bridge the gap between everyday wear and luxury.
          </p>
          <p>
            Founded in 2023, our studio designs each piece with intention — drawing
            inspiration from architecture, nature, and the quiet confidence of
            women who wear jewelry for themselves, not for show.
          </p>
          <p>
            Every Velmora piece is crafted using 18K gold plating over sterling silver,
            ensuring durability and a luxurious finish that stands the test of time.
            We use only hypoallergenic materials, free from nickel and lead, so you
            can wear our jewelry with complete peace of mind.
          </p>
          <p>
            We believe in jewelry that tells your story — pieces you reach for
            every morning, that become part of who you are. No compromise on quality,
            no markup for tradition.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/shop"
            className="inline-block bg-gold text-white text-xs tracking-super-wide uppercase font-medium px-10 py-3.5 hover:bg-gold-dark transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </div>
    </div>
  );
}
