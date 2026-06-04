import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const rootsImages = [
  {
    id: 'roots-1',
    titleId: 'roots-title-1',
    descId: 'roots-desc-1',
    imgId: 'roots-img-a1b2c3',
    title: 'Ancient Oak Trunk',
    desc: 'Gnarled bark of a thousand-year-old oak, covered in lichen and moss',
    ratio: '3x4',
    width: '600',
  },
  {
    id: 'roots-2',
    titleId: 'roots-title-2',
    descId: 'roots-desc-2',
    imgId: 'roots-img-d4e5f6',
    title: 'Mossy Forest Floor',
    desc: 'Thick emerald moss carpeting the floor of an old-growth forest',
    ratio: '4x3',
    width: '800',
  },
  {
    id: 'roots-3',
    titleId: 'roots-title-3',
    descId: 'roots-desc-3',
    imgId: 'roots-img-g7h8i9',
    title: 'Redwood Colossus',
    desc: 'Base of a towering redwood disappearing into the mist above',
    ratio: '3x4',
    width: '600',
  },
  {
    id: 'roots-4',
    titleId: 'roots-title-4',
    descId: 'roots-desc-4',
    imgId: 'roots-img-j1k2l3',
    title: 'Root Network',
    desc: 'Exposed root system of ancient beech trees weaving across the earth',
    ratio: '1x1',
    width: '600',
  },
  {
    id: 'roots-5',
    titleId: 'roots-title-5',
    descId: 'roots-desc-5',
    imgId: 'roots-img-m4n5o6',
    title: 'Bark Texture',
    desc: 'Close-up of deeply furrowed bark on a centuries-old pine tree',
    ratio: '3x4',
    width: '600',
  },
  {
    id: 'roots-6',
    titleId: 'roots-title-6',
    descId: 'roots-desc-6',
    imgId: 'roots-img-p7q8r9',
    title: 'Forest Understory',
    desc: 'Ferns and fallen logs in the dim light beneath a dense forest canopy',
    ratio: '4x3',
    width: '800',
  },
  {
    id: 'roots-7',
    titleId: 'roots-title-7',
    descId: 'roots-desc-7',
    imgId: 'roots-img-s1t2u3',
    title: 'Twisted Trunk',
    desc: 'Spiraling trunk of an ancient yew tree, twisted by centuries of growth',
    ratio: '3x4',
    width: '600',
  },
  {
    id: 'roots-8',
    titleId: 'roots-title-8',
    descId: 'roots-desc-8',
    imgId: 'roots-img-v4w5x6',
    title: 'Fallen Giant',
    desc: 'Massive fallen tree trunk reclaimed by moss and forest undergrowth',
    ratio: '4x3',
    width: '800',
  },
  {
    id: 'roots-9',
    titleId: 'roots-title-9',
    descId: 'roots-desc-9',
    imgId: 'roots-img-y7z8a9',
    title: 'Hollow Cathedral',
    desc: 'Interior of a hollow ancient tree, light filtering through the opening above',
    ratio: '3x4',
    width: '600',
  },
  {
    id: 'roots-10',
    titleId: 'roots-title-10',
    descId: 'roots-desc-10',
    imgId: 'roots-img-b1c2d3',
    title: 'Lichen Tapestry',
    desc: 'Intricate patterns of grey and green lichen on old forest stone',
    ratio: '1x1',
    width: '600',
  },
  {
    id: 'roots-11',
    titleId: 'roots-title-11',
    descId: 'roots-desc-11',
    imgId: 'roots-img-e4f5g6',
    title: 'Misty Grove',
    desc: 'Morning mist drifting between the trunks of a primeval forest',
    ratio: '4x3',
    width: '800',
  },
  {
    id: 'roots-12',
    titleId: 'roots-title-12',
    descId: 'roots-desc-12',
    imgId: 'roots-img-h7i8j9',
    title: 'Buttress Roots',
    desc: 'Dramatic buttress roots of a tropical rainforest giant spreading across the ground',
    ratio: '3x4',
    width: '600',
  },
];

export default function TheRoots() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div className="bg-forest-deep min-h-screen" ref={containerRef}>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 md:px-12 max-w-7xl mx-auto">
        <p className="text-mist-grey text-xs uppercase tracking-[0.35em] font-semibold mb-6">
          Old-Growth Photography
        </p>
        <h1
          className="heading-display text-5xl md:text-7xl xl:text-8xl leading-[0.95] mb-8 max-w-3xl"
          style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
        >
          The<br />
          <em className="not-italic text-mist-grey">Roots</em>
        </h1>
        <p className="text-mist-light text-base md:text-lg max-w-xl leading-relaxed">
          Ancient trunks. Mossy floors. The slow, heavy world beneath the canopy — where time moves in centuries, not moments.
        </p>
        <div className="mt-10 w-16 border-t border-mist-grey/40" />
      </section>

      {/* Masonry Grid */}
      <section className="px-4 md:px-8 pb-24 max-w-[1600px] mx-auto">
        <div className="masonry-grid">
          {rootsImages.map((item) => (
            <div key={item.id} className="masonry-item fog-card group relative overflow-hidden border-rugged cursor-pointer">
              {/* Hidden text for image query */}
              <span id={item.titleId} className="sr-only">{item.title}</span>
              <span id={item.descId} className="sr-only">{item.desc}</span>

              {/* Image */}
              <img
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.descId}] [${item.titleId}]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={item.title}
                className="w-full block object-cover transition-transform duration-1000 ease-out group-hover:scale-[1.04]"
                style={{ backgroundColor: '#243028' }}
              />

              {/* Fog overlay */}
              <div className="fog-overlay absolute inset-0 bg-gradient-to-t from-forest-deep/85 via-forest-deep/35 to-transparent pointer-events-none" />

              {/* Caption — revealed on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700 ease-out">
                <p
                  className="text-fog-white text-sm font-bold leading-tight"
                  style={{ fontFamily: '"Playfair Display", Georgia, serif' }}
                >
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
