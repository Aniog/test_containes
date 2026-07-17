import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function BrandStory() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section ref={containerRef} id="about" className="py-16 md:py-24 bg-ivory-100">
      <div className="max-w-[1440px] mx-auto section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <img
              data-strk-img-id="brand-story-img-a3b5c7"
              data-strk-img="artisan hands crafting gold jewelry warm studio lighting editorial"
              data-strk-img-ratio="3x4"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Velmora artisan crafting gold jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="lg:pl-8 xl:pl-16">
            <p className="text-[11px] font-medium tracking-[0.3em] uppercase text-gold-500 mb-4">
              Our Story
            </p>
            <h2 className="text-heading text-3xl sm:text-4xl md:text-5xl text-velvet-950 mb-6 leading-tight">
              Jewelry That Feels Like<br />
              <span className="text-gold-500">You</span>
            </h2>
            <div className="space-y-4 text-sm text-obsidian-muted leading-relaxed">
              <p>
                Velmora was born from a simple belief: every woman deserves jewelry that feels 
                special without the luxury markup. We create demi-fine pieces in 18K gold plating 
                over surgical-grade materials — designed to be worn every day, not locked in a box.
              </p>
              <p>
                Each piece is hand-finished by our artisans, tested for hypoallergenic safety, 
                and crafted to maintain its brilliance through daily wear. No shortcuts, 
                no compromises — just beautiful jewelry at an honest price.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link to="/about" className="btn-outline text-xs">
                Read Our Story
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
