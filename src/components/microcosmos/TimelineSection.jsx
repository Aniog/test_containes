import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const timelineItems = [
  {
    id: 'tl-01',
    imgId: 'tl-img-mc001',
    titleId: 'tl-title-mc001',
    descId: 'tl-desc-mc001',
    year: '1674',
    title: 'First Microbes Observed',
    desc: 'Antonie van Leeuwenhoek becomes the first person to observe living microorganisms using a microscope he built himself, discovering a hidden world.',
  },
  {
    id: 'tl-02',
    imgId: 'tl-img-mc002',
    titleId: 'tl-title-mc002',
    descId: 'tl-desc-mc002',
    year: '1859',
    title: 'Germ Theory Established',
    desc: 'Louis Pasteur proves that microorganisms cause disease and fermentation, overturning the theory of spontaneous generation.',
  },
  {
    id: 'tl-03',
    imgId: 'tl-img-mc003',
    titleId: 'tl-title-mc003',
    descId: 'tl-desc-mc003',
    year: '1953',
    title: 'DNA Double Helix',
    desc: 'Watson and Crick describe the double helix structure of DNA, unlocking the molecular basis of life and heredity.',
  },
  {
    id: 'tl-04',
    imgId: 'tl-img-mc004',
    titleId: 'tl-title-mc004',
    descId: 'tl-desc-mc004',
    year: '2012',
    title: 'CRISPR Gene Editing',
    desc: 'Jennifer Doudna and Emmanuelle Charpentier develop CRISPR-Cas9 as a precise gene-editing tool, revolutionizing biotechnology.',
  },
];

const TimelineSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-8 bg-gray-950">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-violet-400 text-sm font-semibold uppercase tracking-widest mb-3">
            History of Discovery
          </p>
          <h2
            id="timeline-section-title"
            className="text-3xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            Milestones in Microbiology
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            From the first glimpse through a handmade lens to gene editing — humanity's journey into the microscopic world has transformed civilization.
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-500/50 via-violet-500/50 to-amber-500/50 -translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {timelineItems.map((item, i) => {
              const isEven = i % 2 === 0;
              return (
                <div
                  key={item.id}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-teal-400 border-2 border-gray-950 shadow-[0_0_12px_rgba(45,212,191,0.6)] z-10 mt-6" />

                  {/* Spacer for desktop */}
                  <div className="hidden md:block md:w-1/2" />

                  {/* Card */}
                  <div className={`ml-10 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-10' : 'md:pr-10'}`}>
                    <div className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-teal-500/40 transition-all duration-300 group">
                      <div className="relative overflow-hidden aspect-[16/7]">
                        <img
                          data-strk-img-id={item.imgId}
                          data-strk-img={`[${item.descId}] [${item.titleId}] [timeline-section-title]`}
                          data-strk-img-ratio="16x9"
                          data-strk-img-width="700"
                          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                        <span className="absolute top-3 left-3 bg-teal-500 text-gray-950 text-xs font-bold px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <div className="p-5">
                        <h3
                          id={item.titleId}
                          className="text-lg font-bold text-white mb-2"
                          style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                        >
                          {item.title}
                        </h3>
                        <p id={item.descId} className="text-gray-400 text-sm leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
