import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const facts = [
  {
    id: 'fact-01',
    titleId: 'fact-title-01',
    descId: 'fact-desc-01',
    imgId: 'fact-img-mc-01',
    number: '01',
    title: 'Bacteria Predate Animals by 3 Billion Years',
    desc: 'Microbial life appeared on Earth approximately 3.5 billion years ago, long before multicellular organisms evolved.',
  },
  {
    id: 'fact-02',
    titleId: 'fact-title-02',
    descId: 'fact-desc-02',
    imgId: 'fact-img-mc-02',
    number: '02',
    title: 'Your Body is 50% Microbial',
    desc: 'The human body contains roughly equal numbers of human cells and microbial cells — we are as much microbe as we are human.',
  },
  {
    id: 'fact-03',
    titleId: 'fact-title-03',
    descId: 'fact-desc-03',
    imgId: 'fact-img-mc-03',
    number: '03',
    title: 'Viruses Outnumber Stars in the Universe',
    desc: 'There are an estimated 10^31 viruses on Earth — more than all the stars in the observable universe combined.',
  },
];

const Facts = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="facts" ref={containerRef} className="py-24 md:py-32 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-medium uppercase tracking-widest text-[#00d4ff] mb-4 block">
            Mind-Bending
          </span>
          <h2 id="facts-title" className="text-4xl md:text-5xl font-black text-[#e2f0fb] mb-4">
            Incredible Facts
          </h2>
          <p id="facts-subtitle" className="text-[#7fb3cc] text-lg max-w-xl mx-auto">
            The microcosmos is full of truths stranger than fiction.
          </p>
        </div>

        {/* Facts */}
        <div className="space-y-8">
          {facts.map((fact, index) => (
            <div
              key={fact.id}
              className={`group flex flex-col md:flex-row gap-0 bg-[#0d1a24] border border-[rgba(0,212,255,0.1)] rounded-3xl overflow-hidden hover:border-[rgba(0,212,255,0.3)] hover:shadow-[0_0_30px_rgba(0,212,255,0.1)] transition-all duration-300 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="md:w-2/5 h-56 md:h-auto overflow-hidden">
                <img
                  data-strk-img-id={fact.imgId}
                  data-strk-img={`[${fact.descId}] [${fact.titleId}] [facts-subtitle] [facts-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={fact.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ background: '#0d1a24' }}
                />
              </div>
              <div className="md:w-3/5 p-8 md:p-12 flex flex-col justify-center">
                <span className="text-6xl font-black text-[rgba(0,212,255,0.1)] mb-4 leading-none">
                  {fact.number}
                </span>
                <h3 id={fact.titleId} className="text-2xl md:text-3xl font-black text-[#e2f0fb] mb-4 leading-tight">
                  {fact.title}
                </h3>
                <p id={fact.descId} className="text-[#7fb3cc] text-lg leading-relaxed">
                  {fact.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facts;
