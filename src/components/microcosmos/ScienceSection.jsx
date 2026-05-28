import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const articles = [
  {
    id: 'sci-1',
    titleId: 'stitle-1',
    subtitleId: 'ssub-1',
    title: 'How Electron Microscopes Work',
    subtitle: 'Electron microscope scanning transmission beam technology laboratory',
    excerpt: 'Electron microscopes use beams of electrons instead of light, achieving magnifications over 10 million times — revealing atomic-scale structures.',
    tag: 'Technology',
    tagColor: 'text-cyan-400',
    tagBg: 'bg-cyan-500/10',
    tagBorder: 'border-cyan-500/30',
  },
  {
    id: 'sci-2',
    titleId: 'stitle-2',
    subtitleId: 'ssub-2',
    title: 'The Microbiome Inside You',
    subtitle: 'Human gut microbiome bacteria diversity health immune system',
    excerpt: 'Your body hosts trillions of microorganisms — outnumbering your own cells. This microbiome shapes your immunity, mood, and metabolism.',
    tag: 'Biology',
    tagColor: 'text-emerald-400',
    tagBg: 'bg-emerald-500/10',
    tagBorder: 'border-emerald-500/30',
  },
  {
    id: 'sci-3',
    titleId: 'stitle-3',
    subtitleId: 'ssub-3',
    title: 'Bioluminescence at the Micro Scale',
    subtitle: 'Bioluminescent plankton glowing ocean dinoflagellates blue light',
    excerpt: 'Some microorganisms produce their own light through chemical reactions. Bioluminescent plankton can turn ocean waves into glowing blue fire.',
    tag: 'Phenomena',
    tagColor: 'text-violet-400',
    tagBg: 'bg-violet-500/10',
    tagBorder: 'border-violet-500/30',
  },
];

const ScienceSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="science" ref={containerRef} className="bg-gray-900 py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-medium">Deep Dives</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white mt-3 mb-4">
            Science Stories
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base md:text-lg">
            The science behind the invisible world, explained.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-gray-950 border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-600 transition-all duration-300 flex flex-col"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={`sci-img-${article.id}`}
                  data-strk-img={`[${article.subtitleId}] [${article.titleId}]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <span className={`inline-block ${article.tagBg} ${article.tagColor} border ${article.tagBorder} rounded-full px-3 py-1 text-xs uppercase tracking-widest font-medium mb-4 self-start`}>
                  {article.tag}
                </span>
                <h3 id={article.titleId} className="text-lg font-bold text-white mb-3 leading-snug">{article.title}</h3>
                <p id={article.subtitleId} className="text-gray-400 text-sm leading-relaxed flex-1">{article.excerpt}</p>
                <button className="mt-5 text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors self-start flex items-center gap-1 group/btn">
                  Read more
                  <svg className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
