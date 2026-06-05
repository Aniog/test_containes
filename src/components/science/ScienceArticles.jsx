import { useEffect, useRef } from 'react';
import { Clock, Tag } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const articles = [
  {
    id: 'tardigrade-survival',
    title: 'How Tardigrades Survive the Impossible',
    excerpt: 'These microscopic animals can withstand radiation, vacuum, and temperatures that would kill any other known organism. Scientists are finally uncovering the molecular secrets behind their extraordinary resilience.',
    category: 'Biology',
    readTime: '6 min read',
    date: 'May 28, 2026',
    featured: true,
    titleId: 'sci-art-tardigrade-title',
    descId: 'sci-art-tardigrade-desc',
    imgId: 'sci-art-tardigrade-img-a1b2c3',
  },
  {
    id: 'gut-microbiome',
    title: 'Your Gut Microbiome: The Second Brain',
    excerpt: 'The trillions of microbes living in your digestive system influence everything from mood to immunity. New research reveals just how deeply they shape who we are.',
    category: 'Health',
    readTime: '8 min read',
    date: 'May 15, 2026',
    featured: false,
    titleId: 'sci-art-gut-title',
    descId: 'sci-art-gut-desc',
    imgId: 'sci-art-gut-img-d4e5f6',
  },
  {
    id: 'diatom-glass',
    title: 'Diatoms: Nature\'s Glass Artists',
    excerpt: 'For 200 million years, diatoms have been crafting intricate silica shells of breathtaking complexity. Engineers are now copying their designs for nanotechnology.',
    category: 'Evolution',
    readTime: '5 min read',
    date: 'May 3, 2026',
    featured: false,
    titleId: 'sci-art-diatom-title',
    descId: 'sci-art-diatom-desc',
    imgId: 'sci-art-diatom-img-g7h8i9',
  },
  {
    id: 'antibiotic-resistance',
    title: 'The Antibiotic Resistance Crisis',
    excerpt: 'Bacteria are evolving faster than we can develop new drugs. Understanding how microbes share resistance genes is key to solving one of medicine\'s greatest challenges.',
    category: 'Medicine',
    readTime: '10 min read',
    date: 'Apr 22, 2026',
    featured: false,
    titleId: 'sci-art-antibiotic-title',
    descId: 'sci-art-antibiotic-desc',
    imgId: 'sci-art-antibiotic-img-j1k2l3',
  },
  {
    id: 'extremophiles',
    title: 'Life at the Extremes: Extremophile Microbes',
    excerpt: 'From boiling hydrothermal vents to frozen Antarctic lakes, extremophile microbes thrive where nothing should survive — and they\'re rewriting the rules of life.',
    category: 'Astrobiology',
    readTime: '7 min read',
    date: 'Apr 10, 2026',
    featured: false,
    titleId: 'sci-art-extremo-title',
    descId: 'sci-art-extremo-desc',
    imgId: 'sci-art-extremo-img-m4n5o6',
  },
  {
    id: 'mycorrhizal-network',
    title: 'The Wood Wide Web: Fungal Networks',
    excerpt: 'Beneath every forest floor lies a vast fungal internet connecting trees, sharing nutrients, and transmitting chemical signals across kilometers.',
    category: 'Ecology',
    readTime: '9 min read',
    date: 'Mar 28, 2026',
    featured: false,
    titleId: 'sci-art-fungi-title',
    descId: 'sci-art-fungi-desc',
    imgId: 'sci-art-fungi-img-p7q8r9',
  },
];

const categoryColors = {
  Biology: 'text-teal-400 bg-teal-500/10 border-teal-500/30',
  Health: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
  Evolution: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
  Medicine: 'text-amber-400 bg-amber-500/10 border-amber-500/30',
  Astrobiology: 'text-violet-400 bg-violet-500/10 border-violet-500/30',
  Ecology: 'text-green-400 bg-green-500/10 border-green-500/30',
};

const ScienceArticles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <div ref={containerRef}>
      {/* Featured Article */}
      {featured && (
        <article className="group mb-10 bg-slate-900 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-teal-500/40 transition-all duration-300 shadow-lg shadow-black/30 cursor-pointer">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative overflow-hidden aspect-[3/2] md:aspect-auto">
              <img
                alt={featured.name}
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 min-h-48"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/30" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${categoryColors[featured.category]}`}>
                  {featured.category}
                </span>
                <span className="text-xs text-slate-500 bg-teal-500/10 border border-teal-500/20 text-teal-400 px-2.5 py-1 rounded-full font-mono">
                  Featured
                </span>
              </div>
              <h2 id={featured.titleId} className="text-2xl md:text-3xl font-bold text-slate-100 mb-3 leading-tight">
                {featured.title}
              </h2>
              <p id={featured.descId} className="text-slate-400 leading-relaxed mb-5">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  {featured.readTime}
                </span>
                <span>{featured.date}</span>
              </div>
            </div>
          </div>
        </article>
      )}

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((article) => (
          <article
            key={article.id}
            className="group bg-slate-900 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-teal-500/40 hover:bg-slate-800/60 transition-all duration-300 shadow-lg shadow-black/20 cursor-pointer"
          >
            <div className="relative overflow-hidden aspect-[3/2]">
              <img
                alt={article.title}
                data-strk-img-id={article.imgId}
                data-strk-img={`[${article.descId}] [${article.titleId}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-mono uppercase tracking-wider px-2.5 py-1 rounded-full border ${categoryColors[article.category]}`}>
                  {article.category}
                </span>
              </div>
              <h3 id={article.titleId} className="text-slate-100 font-semibold text-base mb-2 leading-snug">
                {article.title}
              </h3>
              <p id={article.descId} className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
                {article.excerpt}
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-500 border-t border-slate-800 pt-3">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
                <span>{article.date}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ScienceArticles;
