import { useEffect, useRef, useState } from 'react';
import { Clock, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const articles = [
  {
    id: 'gut-microbiome',
    titleId: 'sci-gut-title',
    descId: 'sci-gut-desc',
    imgId: 'sci-img-gut-a1b2',
    category: 'Health',
    catColor: 'text-teal-400 bg-teal-400/10 border-teal-400/30',
    date: 'May 28, 2026',
    readTime: '8 min read',
    title: 'Your Gut Microbiome: The Second Brain',
    excerpt: 'Trillions of bacteria in your digestive system influence mood, immunity, and even decision-making. Scientists are only beginning to understand the gut-brain axis.',
    featured: true,
  },
  {
    id: 'ocean-oxygen',
    titleId: 'sci-ocean-title',
    descId: 'sci-ocean-desc',
    imgId: 'sci-img-ocean-c3d4',
    category: 'Ecology',
    catColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
    date: 'May 15, 2026',
    readTime: '6 min read',
    title: 'Ocean Microbes Produce Half Our Oxygen',
    excerpt: 'Phytoplankton and cyanobacteria are responsible for generating 50% of the oxygen we breathe — yet they are invisible to the naked eye.',
    featured: false,
  },
  {
    id: 'antibiotic-resistance',
    titleId: 'sci-antibiotic-title',
    descId: 'sci-antibiotic-desc',
    imgId: 'sci-img-antibiotic-e5f6',
    category: 'Medicine',
    catColor: 'text-violet-400 bg-violet-400/10 border-violet-400/30',
    date: 'May 3, 2026',
    readTime: '10 min read',
    title: 'The Growing Crisis of Antibiotic Resistance',
    excerpt: 'How bacteria evolve to outsmart our best medicines — and what scientists are doing about it before we enter a post-antibiotic era.',
    featured: false,
  },
  {
    id: 'extremophiles',
    titleId: 'sci-extreme-title',
    descId: 'sci-extreme-desc',
    imgId: 'sci-img-extreme-g7h8',
    category: 'Astrobiology',
    catColor: 'text-amber-400 bg-amber-400/10 border-amber-400/30',
    date: 'April 22, 2026',
    readTime: '7 min read',
    title: 'Extremophiles and the Search for Alien Life',
    excerpt: 'Microbes that thrive in boiling acid, frozen tundra, and crushing deep-sea pressure are redefining where life can exist — even beyond Earth.',
    featured: false,
  },
  {
    id: 'phage-therapy',
    titleId: 'sci-phage-title',
    descId: 'sci-phage-desc',
    imgId: 'sci-img-phage-i9j10',
    category: 'Medicine',
    catColor: 'text-violet-400 bg-violet-400/10 border-violet-400/30',
    date: 'April 10, 2026',
    readTime: '9 min read',
    title: 'Phage Therapy: Viruses as Medicine',
    excerpt: 'Bacteriophages — viruses that kill bacteria — are being revived as a treatment for drug-resistant infections that antibiotics can no longer cure.',
    featured: false,
  },
  {
    id: 'soil-microbiome',
    titleId: 'sci-soil-title',
    descId: 'sci-soil-desc',
    imgId: 'sci-img-soil-k11l12',
    category: 'Ecology',
    catColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
    date: 'March 28, 2026',
    readTime: '5 min read',
    title: 'The Soil Microbiome: Earth\'s Living Skin',
    excerpt: 'A single teaspoon of healthy soil contains more microorganisms than there are people on Earth. These invisible communities drive all terrestrial life.',
    featured: false,
  },
];

const ArticleList = () => {
  const containerRef = useRef(null);
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', ...new Set(articles.map((a) => a.category))];
  const filtered = activeCategory === 'All' ? articles : articles.filter((a) => a.category === activeCategory);
  const featured = filtered.find((a) => a.featured) || filtered[0];
  const rest = filtered.filter((a) => a.id !== featured?.id);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filtered]);

  return (
    <div ref={containerRef}>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs font-medium px-4 py-2 rounded-xl border transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-teal-500 border-teal-500 text-slate-900'
                : 'bg-slate-800/60 border-slate-700/50 text-slate-400 hover:border-teal-500/40 hover:text-teal-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Article */}
      {featured && (
        <div className="group mb-10 bg-slate-800/60 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all duration-300 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                alt={featured.title}
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/30" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${featured.catColor}`}>
                  {featured.category}
                </span>
                <span className="text-xs text-amber-400 bg-amber-400/10 border border-amber-400/30 px-3 py-1 rounded-full font-medium">
                  Featured
                </span>
              </div>
              <h2 id={featured.titleId} className="text-slate-100 font-bold text-2xl mb-3 group-hover:text-teal-400 transition-colors">
                {featured.title}
              </h2>
              <p id={featured.descId} className="text-slate-400 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-slate-500 text-xs">
                  <span>{featured.date}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {featured.readTime}
                  </span>
                </div>
                <button className="flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors">
                  Read Article
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((article) => (
          <article
            key={article.id}
            className="group bg-slate-800/60 border border-slate-700/50 rounded-2xl overflow-hidden hover:border-teal-500/50 hover:bg-slate-800/80 transition-all duration-300 shadow-lg cursor-pointer"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                alt={article.title}
                data-strk-img-id={article.imgId}
                data-strk-img={`[${article.descId}] [${article.titleId}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${article.catColor}`}>
                  {article.category}
                </span>
              </div>
              <h3 id={article.titleId} className="text-slate-100 font-semibold text-base mb-2 group-hover:text-teal-400 transition-colors">
                {article.title}
              </h3>
              <p id={article.descId} className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-4">{article.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>{article.date}</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {article.readTime}
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
