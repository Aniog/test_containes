import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc-1', caption: 'Everyday elegance', label: 'Golden Sphere Huggies' },
  { id: 'ugc-2', caption: 'Date night perfection', label: 'Majestic Flora Nectar' },
  { id: 'ugc-3', caption: 'Stacked & styled', label: 'Amber Lace Earrings' },
  { id: 'ugc-4', caption: 'Golden hour glow', label: 'Vivid Aura Jewels' },
  { id: 'ugc-5', caption: 'Minimal moments', label: 'Pearl Kiss Huggies' },
  { id: 'ugc-6', caption: 'Curated ear story', label: 'Twist Hoop Earrings' },
];

export default function UgcReel() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-blush py-16 lg:py-24" ref={containerRef}>
      <div className="max-w-[1440px] mx-auto px-6 lg:px-16">
        <div className="text-center mb-12">
          <p className="text-xs tracking-widest uppercase text-taupe font-sans mb-4">Styled by You</p>
          <h2 className="serif-heading text-3xl md:text-4xl lg:text-5xl font-light">As Seen On</h2>
        </div>
      </div>

      {/* Horizontal scroll reel */}
      <div className="flex gap-5 overflow-x-auto scrollbar-hide px-6 lg:px-16 pb-4">
        {ugcItems.map((item) => (
          <div key={item.id} className="flex-shrink-0 w-[180px] md:w-[220px]">
            <div className="aspect-[9/16] bg-sand/30 overflow-hidden mb-3 relative group">
              <img
                data-strk-img-id={`ugc-${item.id}`}
                data-strk-img={`[ugc-label-${item.id}] woman wearing gold jewelry`}
                data-strk-img-ratio="9x16"
                data-strk-img-width="440"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.label}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-softblack/50 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-cream font-serif italic text-sm opacity-90">
                {item.caption}
              </p>
            </div>
            <p id={`ugc-label-${item.id}`} className="text-[10px] tracking-widest uppercase text-taupe font-sans text-center">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
