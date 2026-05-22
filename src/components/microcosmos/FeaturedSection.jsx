import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const featured = [
  {
    id: 'feat1',
    title: 'Tardigrade',
    subtitle: 'Water Bear',
    desc: 'Nearly indestructible microscopic animals that can survive in the vacuum of space.',
    imgId: 'feat-img-mc007',
    ratio: '16x9',
    width: 900,
    tag: 'Extremophile',
  },
  {
    id: 'feat2',
    title: 'Radiolaria',
    subtitle: 'Ocean Jewels',
    desc: 'Intricate silica skeletons of single-celled ocean organisms, each a unique geometric marvel.',
    imgId: 'feat-img-mc008',
    ratio: '4x3',
    width: 600,
    tag: 'Marine Life',
  },
  {
    id: 'feat3',
    title: 'Paramecium',
    subtitle: 'Ciliate Swimmer',
    desc: 'Covered in thousands of hair-like cilia, these organisms are masters of microscopic locomotion.',
    imgId: 'feat-img-mc009',
    ratio: '4x3',
    width: 600,
    tag: 'Protozoa',
  },
];

const FeaturedSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 bg-[#050d1a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p id="feat-label" className="text-sm font-medium tracking-widest uppercase text-[#00d4aa] mb-4">
            Spotlight
          </p>
          <h2 id="feat-title" className="text-4xl md:text-5xl font-bold text-[#e8f4f8]">
            Featured Organisms
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Large featured card */}
          <div className="group relative rounded-2xl overflow-hidden border border-[#1a3a4a] hover:border-[#00d4aa]/50 transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,212,170,0.2)] md:row-span-2">
            <img
              alt={featured[0].title}
              className="w-full h-full object-cover min-h-[400px] transition-transform duration-700 group-hover:scale-105"
              data-strk-img-id={featured[0].imgId}
              data-strk-img={`[${featured[0].id}-desc] [${featured[0].id}-title] [feat-label]`}
              data-strk-img-ratio={featured[0].ratio}
              data-strk-img-width={featured[0].width}
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-[#050d1a]/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <span className="inline-block px-3 py-1 bg-[#00d4aa]/20 border border-[#00d4aa]/40 text-[#00d4aa] text-xs font-medium rounded-full mb-3 tracking-wider uppercase">
                {featured[0].tag}
              </span>
              <p className="text-[#94b8c8] text-sm mb-1">{featured[0].subtitle}</p>
              <h3 id={`${featured[0].id}-title`} className="text-3xl font-bold text-[#e8f4f8] mb-2">{featured[0].title}</h3>
              <p id={`${featured[0].id}-desc`} className="text-[#94b8c8] leading-relaxed">{featured[0].desc}</p>
            </div>
          </div>

          {/* Smaller cards */}
          {featured.slice(1).map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden border border-[#1a3a4a] hover:border-[#00d4aa]/50 transition-all duration-500 hover:shadow-[0_0_40px_rgba(0,212,170,0.2)]"
            >
              <img
                alt={item.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-strk-img-id={item.imgId}
                data-strk-img={`[${item.id}-desc] [${item.id}-title] [feat-label]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050d1a] via-[#050d1a]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-[#00d4aa]/20 border border-[#00d4aa]/40 text-[#00d4aa] text-xs font-medium rounded-full mb-2 tracking-wider uppercase">
                  {item.tag}
                </span>
                <p className="text-[#94b8c8] text-xs mb-1">{item.subtitle}</p>
                <h3 id={`${item.id}-title`} className="text-xl font-bold text-[#e8f4f8] mb-1">{item.title}</h3>
                <p id={`${item.id}-desc`} className="text-sm text-[#94b8c8] leading-snug">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
