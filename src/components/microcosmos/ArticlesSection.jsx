import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const articles = [
  {
    id: 'art-1', titleId: 'art-1-title', descId: 'art-1-desc',
    imgId: 'art-img-1-mc060',
    title: 'The Secret Life of Soil Microbes',
    desc: 'A single teaspoon of healthy soil contains more microorganisms than there are people on Earth. Discover how these invisible communities drive nutrient cycles and sustain all plant life.',
    tag: 'Ecology',
    date: 'July 2026',
    ratio: '16x9',
    width: '700',
  },
  {
    id: 'art-2', titleId: 'art-2-title', descId: 'art-2-desc',
    imgId: 'art-img-2-mc061',
    title: 'Bioluminescence at the Microscale',
    desc: 'Some of the most spectacular light shows on Earth are produced by single-celled dinoflagellates. Explore the chemistry behind nature\'s living lanterns.',
    tag: 'Chemistry',
    date: 'June 2026',
    ratio: '16x9',
    width: '700',
  },
  {
    id: 'art-3', titleId: 'art-3-title', descId: 'art-3-desc',
    imgId: 'art-img-3-mc062',
    title: 'How Viruses Hijack Cells',
    desc: 'Viruses are not alive in the traditional sense, yet they are among the most successful entities on Earth. A visual guide to viral replication at the molecular level.',
    tag: 'Virology',
    date: 'May 2026',
    ratio: '16x9',
    width: '700',
  },
];

const ArticlesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-[#0a0f1e]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-rose-400 mb-3 font-medium">
              Latest Research
            </p>
            <h2
              id="art-section-title"
              className="text-3xl md:text-4xl font-bold text-white"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              From the Lab
            </h2>
          </div>
          <p id="art-section-desc" className="text-slate-400 max-w-sm">
            Recent discoveries and deep dives into the microscopic frontier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((art) => (
            <article
              key={art.id}
              className="group bg-[#0d1428] border border-slate-700/50 rounded-2xl overflow-hidden hover:border-rose-400/40 hover:shadow-[0_0_25px_rgba(251,113,133,0.08)] transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  alt={art.title}
                  data-strk-img-id={art.imgId}
                  data-strk-img={`[${art.descId}] [${art.titleId}] [art-section-desc] [art-section-title]`}
                  data-strk-img-ratio={art.ratio}
                  data-strk-img-width={art.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase tracking-widest text-rose-400 font-medium">
                    {art.tag}
                  </span>
                  <span className="text-xs text-slate-500">{art.date}</span>
                </div>
                <h3
                  id={art.titleId}
                  className="text-white font-semibold text-base mb-2 group-hover:text-cyan-400 transition-colors duration-200"
                  style={{ fontFamily: "'Space Grotesk', sans-serif" }}
                >
                  {art.title}
                </h3>
                <p id={art.descId} className="text-slate-400 text-sm leading-relaxed">
                  {art.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ArticlesSection;
