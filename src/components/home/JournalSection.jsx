import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const articles = [
  { id: 'art-1', imgId: 'article-img-e5f6g7', titleId: 'art-title-1', descId: 'art-desc-1', date: 'May 2026', title: 'The Hidden Colors of Diatoms', desc: 'How single-celled algae create some of the most intricate glass structures in nature', ratio: '16x9', width: 700 },
  { id: 'art-2', imgId: 'article-img-h8i9j1', titleId: 'art-title-2', descId: 'art-desc-2', date: 'April 2026', title: 'Snowflake Symmetry', desc: 'Capturing the perfect hexagonal geometry of ice crystals before they melt', ratio: '16x9', width: 700 },
  { id: 'art-3', imgId: 'article-img-k2l3m4', titleId: 'art-title-3', descId: 'art-desc-3', date: 'March 2026', title: 'Tardigrade: The Indestructible', desc: 'Portrait of the microscopic animal that can survive in outer space', ratio: '16x9', width: 700 },
  { id: 'art-4', imgId: 'article-img-n5o6p7', titleId: 'art-title-4', descId: 'art-desc-4', date: 'February 2026', title: 'Inside a Grain of Sand', desc: 'Scanning electron microscopy reveals the surprising diversity of beach sand particles', ratio: '16x9', width: 700 },
  { id: 'art-5', imgId: 'article-img-q8r9s1', titleId: 'art-title-5', descId: 'art-desc-5', date: 'January 2026', title: 'Bioluminescent Plankton', desc: 'The chemistry behind the ocean\'s natural light show at the microscopic scale', ratio: '16x9', width: 700 },
];

const JournalSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="bg-neutral-950 py-24 lg:py-32 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <p className="text-xs tracking-widest uppercase text-neutral-500 mb-4">Journal</p>
            <h2 id="journal-section-title" className="font-light tracking-[0.15em] uppercase text-white text-3xl lg:text-4xl">
              Latest<br />Discoveries
            </h2>
          </div>
        </div>

        {/* Top row — first article large, second medium */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 lg:gap-6 mb-4 lg:mb-6">
          {/* Large featured article */}
          <article className="group cursor-pointer md:col-span-3">
            <div className="relative overflow-hidden aspect-video mb-5">
              <img
                alt={articles[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                data-strk-img-id={articles[0].imgId}
                data-strk-img={`[${articles[0].descId}] [${articles[0].titleId}] [journal-section-title]`}
                data-strk-img-ratio={articles[0].ratio}
                data-strk-img-width={900}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
            </div>
            <p className="text-xs tracking-widest uppercase text-neutral-600 mb-2">{articles[0].date}</p>
            <h3 id={articles[0].titleId} className="font-light tracking-wide text-white text-xl lg:text-2xl mb-2 group-hover:text-neutral-300 transition-colors">{articles[0].title}</h3>
            <p id={articles[0].descId} className="text-xs text-neutral-600 leading-relaxed">{articles[0].desc}</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-xs tracking-widest uppercase text-neutral-500 group-hover:text-white transition-colors">Read more</span>
              <div className="w-6 h-px bg-neutral-700 group-hover:w-10 group-hover:bg-white transition-all duration-300" />
            </div>
          </article>

          {/* Second article */}
          <article className="group cursor-pointer md:col-span-2">
            <div className="relative overflow-hidden aspect-video mb-5">
              <img
                alt={articles[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                data-strk-img-id={articles[1].imgId}
                data-strk-img={`[${articles[1].descId}] [${articles[1].titleId}] [journal-section-title]`}
                data-strk-img-ratio={articles[1].ratio}
                data-strk-img-width={articles[1].width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
            </div>
            <p className="text-xs tracking-widest uppercase text-neutral-600 mb-2">{articles[1].date}</p>
            <h3 id={articles[1].titleId} className="font-light tracking-wide text-white text-base lg:text-lg mb-2 group-hover:text-neutral-300 transition-colors">{articles[1].title}</h3>
            <p id={articles[1].descId} className="text-xs text-neutral-600 leading-relaxed">{articles[1].desc}</p>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-xs tracking-widest uppercase text-neutral-500 group-hover:text-white transition-colors">Read more</span>
              <div className="w-6 h-px bg-neutral-700 group-hover:w-10 group-hover:bg-white transition-all duration-300" />
            </div>
          </article>
        </div>

        {/* Bottom row — three equal articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {articles.slice(2).map((article) => (
            <article key={article.id} className="group cursor-pointer">
              <div className="relative overflow-hidden aspect-video mb-4">
                <img
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={article.imgId}
                  data-strk-img={`[${article.descId}] [${article.titleId}] [journal-section-title]`}
                  data-strk-img-ratio={article.ratio}
                  data-strk-img-width={article.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
              </div>
              <p className="text-xs tracking-widest uppercase text-neutral-600 mb-2">{article.date}</p>
              <h3 id={article.titleId} className="font-light tracking-wide text-white text-base lg:text-lg mb-2 group-hover:text-neutral-300 transition-colors">{article.title}</h3>
              <p id={article.descId} className="text-xs text-neutral-600 leading-relaxed">{article.desc}</p>
              <div className="mt-4 flex items-center gap-2">
                <span className="text-xs tracking-widest uppercase text-neutral-500 group-hover:text-white transition-colors">Read more</span>
                <div className="w-6 h-px bg-neutral-700 group-hover:w-10 group-hover:bg-white transition-all duration-300" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
