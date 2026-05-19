import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const timeline = [
  { year: '1665', event: 'Robert Hooke coins the term "cell" after observing cork under a microscope.' },
  { year: '1676', event: 'Antonie van Leeuwenhoek discovers bacteria, calling them "animalcules".' },
  { year: '1838', event: 'Schleiden and Schwann propose the Cell Theory — all life is made of cells.' },
  { year: '1928', event: 'Alexander Fleming discovers penicillin from Penicillium mold.' },
  { year: '1953', event: 'Watson and Crick describe the double helix structure of DNA.' },
  { year: '1981', event: 'First scanning tunneling microscope achieves atomic resolution.' },
  { year: '2003', event: 'Human Genome Project completes sequencing of all human DNA.' },
  { year: '2017', event: 'Cryo-electron microscopy wins Nobel Prize, revolutionizing structural biology.' },
];

export default function ScienceTimeline() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20">
      <div className="text-center mb-14">
        <p className="text-cyan-400 text-sm uppercase tracking-widest mb-3">History</p>
        <h2 id="timeline-title" className="text-4xl md:text-5xl font-bold text-white mb-4">
          Milestones of Microbiology
        </h2>
        <p id="timeline-subtitle" className="text-slate-400 text-lg max-w-2xl mx-auto">
          From the first microscope to cryo-EM, humanity's journey into the invisible world.
        </p>
      </div>

      <div className="relative max-w-3xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-transparent" />

        <div className="space-y-8">
          {timeline.map((item, i) => (
            <div
              key={i}
              className={`relative flex items-start gap-6 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Dot */}
              <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 w-4 h-4 rounded-full bg-cyan-500 border-2 border-[#050d1a] shadow-lg shadow-cyan-500/50 flex-shrink-0 mt-1" />

              {/* Content */}
              <div className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] card-glass rounded-xl p-5 ${i % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'}`}>
                <span className="text-cyan-400 font-bold text-lg">{item.year}</span>
                <p className="text-slate-300 text-sm mt-1 leading-relaxed">{item.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
