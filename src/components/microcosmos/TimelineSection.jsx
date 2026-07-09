import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const timelineItems = [
  {
    id: 't1',
    year: '1674',
    title: 'First Microbes Observed',
    desc: 'Antonie van Leeuwenhoek peers through his handcrafted microscope and discovers "animalcules" in pond water — the first human to see living microorganisms.',
    titleId: 'tl-t1-title',
    descId: 'tl-t1-desc',
    imgId: 'tl-img-t1-mc028',
  },
  {
    id: 't2',
    year: '1857',
    title: 'Germ Theory of Disease',
    desc: 'Louis Pasteur demonstrates that microorganisms cause fermentation and disease, overturning the theory of spontaneous generation.',
    titleId: 'tl-t2-title',
    descId: 'tl-t2-desc',
    imgId: 'tl-img-t2-mc029',
  },
  {
    id: 't3',
    year: '1928',
    title: 'Discovery of Penicillin',
    desc: 'Alexander Fleming notices that Penicillium mold kills bacteria, launching the antibiotic era and saving hundreds of millions of lives.',
    titleId: 'tl-t3-title',
    descId: 'tl-t3-desc',
    imgId: 'tl-img-t3-mc030',
  },
  {
    id: 't4',
    year: '1977',
    title: 'Third Domain of Life',
    desc: 'Carl Woese discovers Archaea — a third domain of life distinct from bacteria and eukaryotes — rewriting the tree of life.',
    titleId: 'tl-t4-title',
    descId: 'tl-t4-desc',
    imgId: 'tl-img-t4-mc031',
  },
  {
    id: 't5',
    year: '2003',
    title: 'Human Microbiome Project',
    desc: 'Scientists begin mapping the trillions of microbes living in and on the human body, revealing their profound influence on health.',
    titleId: 'tl-t5-title',
    descId: 'tl-t5-desc',
    imgId: 'tl-img-t5-mc032',
  },
];

const TimelineSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-cosmos-bg py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p id="tl-section-label" className="text-cosmos-emerald text-sm uppercase tracking-[0.3em] font-inter font-medium mb-4">
            History of Discovery
          </p>
          <h2 id="tl-section-title" className="font-grotesk text-4xl md:text-5xl font-bold text-cosmos-text">
            Milestones in Microbiology
          </h2>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-cosmos-border -translate-x-1/2" />

          <div className="space-y-12">
            {timelineItems.map((item, idx) => (
              <div
                key={item.id}
                className={`grid md:grid-cols-2 gap-8 items-center ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
              >
                {/* Image */}
                <div className={`${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="rounded-2xl overflow-hidden aspect-[16/9]">
                    <img
                      alt={item.title}
                      data-strk-img-id={item.imgId}
                      data-strk-img={`[${item.descId}] [${item.titleId}] [tl-section-title]`}
                      data-strk-img-ratio="16x9"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`relative ${idx % 2 === 0 ? 'md:order-2 md:pl-12' : 'md:order-1 md:pr-12 md:text-right'}`}>
                  {/* Dot on timeline */}
                  <div className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-cosmos-emerald border-2 border-cosmos-bg shadow-[0_0_12px_rgba(16,185,129,0.6)] ${idx % 2 === 0 ? '-left-10' : '-right-10'}`} />

                  <span className="font-grotesk text-cosmos-emerald text-4xl font-bold opacity-60">{item.year}</span>
                  <h3 id={item.titleId} className="font-grotesk text-cosmos-text text-2xl font-bold mt-1 mb-3">
                    {item.title}
                  </h3>
                  <p id={item.descId} className="font-inter text-cosmos-muted text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
