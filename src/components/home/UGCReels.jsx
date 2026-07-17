import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ugcItems = [
  { id: 'ugc1', caption: 'Golden glow for golden hour', label: '@sarahj' },
  { id: 'ugc2', caption: 'Everyday stack in 18K', label: '@emmastyle' },
  { id: 'ugc3', caption: 'Date night elegance', label: '@mariamag' },
  { id: 'ugc4', caption: 'Sunday brunch vibes', label: '@leewardrobe' },
  { id: 'ugc5', caption: 'Gifted & treasured', label: '@chloexo' },
];

export default function UGCReels() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-brand-pearl">
      <div className="section-padding mb-10">
        <p className="font-sans text-xs tracking-[0.25em] uppercase text-brand-smoke mb-3">Styled by You</p>
        <h2 className="font-serif text-3xl md:text-4xl tracking-hero text-brand-ink">Worn & Loved</h2>
      </div>

      <div className="flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scrollbar-hide">
        {ugcItems.map((item) => (
          <div
            key={item.id}
            className="snap-start shrink-0 w-[180px] md:w-[220px] aspect-[9/16] relative group overflow-hidden cursor-pointer"
          >
            <div
              className="absolute inset-0"
              data-strk-bg-id={`ugc-bg-${item.id}`}
              data-strk-bg={`[ugc-caption-${item.id}]`}
              data-strk-bg-ratio="9x16"
              data-strk-bg-width="400"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-brand-ink/10 group-hover:bg-brand-ink/5 transition-colors duration-500" />
            <span id={`ugc-caption-${item.id}`} className="hidden">{item.label} wearing gold jewelry ear</span>
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <p className="font-serif text-sm text-white italic mb-1">{item.caption}</p>
              <p className="font-sans text-xs text-white/60">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}