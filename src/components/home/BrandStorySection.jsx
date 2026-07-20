import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Button } from '@/components/ui/Button';

export default function BrandStorySection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-20 md:py-28 bg-ivory-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image */}
          <div className="relative overflow-hidden aspect-[4/5]">
            <span id="brand-story-title" className="sr-only">Velmora Fine Jewelry brand story artisan craftsmanship</span>
            <span id="brand-story-desc" className="sr-only">gold jewelry being crafted by hand artisan workshop warm light</span>
            <img
              data-strk-img-id="brand-story-img-c3d4e5"
              data-strk-img="[brand-story-desc] [brand-story-title]"
              data-strk-img-ratio="4x5"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
            {/* Decorative border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-gold/30 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="md:pl-8">
            <p className="font-inter text-xs tracking-widest uppercase text-gold mb-5">Our Story</p>
            <h2 className="font-cormorant font-light text-4xl md:text-5xl text-charcoal leading-tight mb-6">
              Born from a love of<br />
              <em className="italic">quiet beauty</em>
            </h2>
            <div className="w-10 h-px bg-gold mb-8" />
            <p className="font-inter text-sm text-taupe leading-relaxed mb-5">
              Velmora was founded on a simple belief: that beautiful jewelry shouldn't require a special occasion — or a special budget. We design pieces that feel luxurious, wear effortlessly, and last for years.
            </p>
            <p className="font-inter text-sm text-taupe leading-relaxed mb-10">
              Every piece is crafted from 18K gold-plated brass, hypoallergenic and nickel-free. Designed in-house, made with care, and shipped to you in our signature gift packaging.
            </p>
            <Link to="/shop">
              <Button variant="outline">Discover Our Story</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
