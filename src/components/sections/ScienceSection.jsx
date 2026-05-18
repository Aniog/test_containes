import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const ARTICLES = [
  {
    id: 'art-1',
    imgId: 'art-img-c4d5e6',
    titleId: 'art-title-1',
    descId: 'art-desc-1',
    tag: 'Research',
    title: 'How Tardigrades Survive in Space',
    desc: 'New findings reveal the molecular mechanisms behind the water bear\'s extraordinary resilience.',
    date: 'May 2026',
  },
  {
    id: 'art-2',
    imgId: 'art-img-f7g8h9',
    titleId: 'art-title-2',
    descId: 'art-desc-2',
    tag: 'Discovery',
    title: 'The Hidden Colors of Diatoms',
    desc: 'Polarized light microscopy uncovers a rainbow hidden within the silica shells of marine microalgae.',
    date: 'Apr 2026',
  },
  {
    id: 'art-3',
    imgId: 'art-img-i1j2k3',
    titleId: 'art-title-3',
    descId: 'art-desc-3',
    tag: 'Technology',
    title: 'Cryo-EM Breaks Resolution Records',
    desc: 'A new generation of detectors allows scientists to image individual atoms within proteins.',
    date: 'Mar 2026',
  },
];

export default function ScienceSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-black py-24 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <p className="text-neutral-500 text-xs font-medium tracking-widest uppercase mb-3">Latest Discoveries</p>
            <h2 id="science-heading" className="text-white font-black text-4xl md:text-6xl tracking-tighter leading-none">
              Science<br />Dispatches
            </h2>
          </div>
          <button className="self-start md:self-auto border border-white/30 text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-white hover:text-black transition-all">
            All Articles →
          </button>
        </div>

        {/* Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((art) => (
            <article key={art.id} className="group bg-neutral-900 rounded-2xl overflow-hidden border border-white/5 hover:border-white/20 transition-all cursor-pointer">
              <div className="relative overflow-hidden aspect-video">
                <img
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={art.imgId}
                  data-strk-img={`[${art.descId}] [${art.titleId}] [science-heading]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/70 text-white text-xs font-medium tracking-widest uppercase px-3 py-1 rounded-full border border-white/20">
                    {art.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-neutral-500 text-xs tracking-widest uppercase mb-2">{art.date}</p>
                <h3 id={art.titleId} className="text-white font-bold text-lg leading-snug mb-2">{art.title}</h3>
                <p id={art.descId} className="text-neutral-400 text-sm leading-relaxed">{art.desc}</p>
                <div className="mt-4 flex items-center gap-2 text-white text-sm font-medium group-hover:gap-3 transition-all">
                  Read more <span>→</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
