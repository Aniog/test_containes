import { useEffect, useRef } from 'react';
import { Clock, User, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const articles = [
  {
    id: 'antibiotic-resistance',
    titleId: 'art-antibiotic-title',
    descId: 'art-antibiotic-desc',
    imgId: 'art-img-antibiotic-a1b2',
    category: 'Research',
    title: 'The Antibiotic Resistance Crisis',
    excerpt: 'Bacteria are evolving faster than we can develop new drugs. By 2050, antibiotic-resistant infections could kill more people annually than cancer. Here\'s what scientists are doing about it.',
    author: 'Dr. Sarah Chen',
    readTime: '8 min read',
    date: 'May 2026',
    featured: true,
    color: 'red',
  },
  {
    id: 'gut-microbiome',
    titleId: 'art-gut-title',
    descId: 'art-gut-desc',
    imgId: 'art-img-gut-c3d4',
    category: 'Health',
    title: 'Your Gut Microbiome: The Second Brain',
    excerpt: 'The trillions of microbes in your digestive system influence your mood, immune system, and even your risk of depression. New research is revealing just how deep this connection goes.',
    author: 'Prof. James Okafor',
    readTime: '6 min read',
    date: 'Apr 2026',
    featured: false,
    color: 'teal',
  },
  {
    id: 'crispr-microbes',
    titleId: 'art-crispr-title',
    descId: 'art-crispr-desc',
    imgId: 'art-img-crispr-e5f6',
    category: 'Technology',
    title: 'CRISPR: Editing Life at the Microbial Scale',
    excerpt: 'The gene-editing revolution started with a bacterial immune system. Now scientists are using CRISPR to engineer microbes that eat plastic, produce medicine, and fight cancer.',
    author: 'Dr. Yuki Tanaka',
    readTime: '10 min read',
    date: 'Mar 2026',
    featured: false,
    color: 'cyan',
  },
  {
    id: 'ocean-microbes',
    titleId: 'art-ocean-title',
    descId: 'art-ocean-desc',
    imgId: 'art-img-ocean-g7h8',
    category: 'Environment',
    title: 'Ocean Microbes and the Climate Crisis',
    excerpt: 'Phytoplankton produce half of Earth\'s oxygen and absorb a third of our CO₂ emissions. As oceans warm, these microscopic heroes are under threat — and so are we.',
    author: 'Dr. Maria Santos',
    readTime: '7 min read',
    date: 'Feb 2026',
    featured: false,
    color: 'emerald',
  },
  {
    id: 'ancient-viruses',
    titleId: 'art-ancient-title',
    descId: 'art-ancient-desc',
    imgId: 'art-img-ancient-i9j0',
    category: 'Evolution',
    title: 'Ancient Viruses Locked in Permafrost',
    excerpt: 'As permafrost thaws, scientists are discovering viruses that have been frozen for 50,000 years. Some are still infectious. What does this mean for human health?',
    author: 'Prof. Alexei Volkov',
    readTime: '9 min read',
    date: 'Jan 2026',
    featured: false,
    color: 'purple',
  },
];

const colorMap = {
  teal: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
  cyan: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  emerald: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  purple: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  red: 'bg-red-500/20 text-red-300 border-red-500/30',
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
        <div className="mb-12">
          <span className="text-teal-400 text-xs font-medium uppercase tracking-widest mb-4 block">Featured Article</span>
          <article className="bg-slate-800/60 border border-slate-700 rounded-2xl overflow-hidden hover:border-teal-500/40 transition-all duration-300 group">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative overflow-hidden h-64 md:h-auto">
                <img
                  data-strk-img-id={featured.imgId}
                  data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="700"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/30" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <span className={`inline-block text-xs font-medium px-3 py-1 rounded-full border mb-4 w-fit ${colorMap[featured.color]}`}>
                  {featured.category}
                </span>
                <h2 id={featured.titleId} className="font-grotesk font-bold text-2xl text-slate-100 mb-3 leading-snug">
                  {featured.title}
                </h2>
                <p id={featured.descId} className="text-slate-400 text-sm leading-relaxed mb-6">
                  {featured.excerpt}
                </p>
                <div className="flex items-center gap-4 text-slate-500 text-xs mb-6">
                  <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{featured.author}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                  <span>{featured.date}</span>
                </div>
                <button className="flex items-center gap-2 text-teal-400 hover:text-teal-300 text-sm font-medium transition-colors group/btn w-fit">
                  Read Article
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </article>
        </div>
      )}

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rest.map((article) => (
          <article
            key={article.id}
            className="bg-slate-800/60 border border-slate-700 rounded-2xl overflow-hidden hover:border-slate-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/30 group"
          >
            <div className="relative overflow-hidden h-44">
              <img
                data-strk-img-id={article.imgId}
                data-strk-img={`[${article.descId}] [${article.titleId}]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
            </div>
            <div className="p-6">
              <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded-full border mb-3 ${colorMap[article.color]}`}>
                {article.category}
              </span>
              <h3 id={article.titleId} className="font-grotesk font-semibold text-slate-100 text-lg mb-2 leading-snug">
                {article.title}
              </h3>
              <p id={article.descId} className="text-slate-400 text-sm leading-relaxed line-clamp-3 mb-4">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-slate-500 text-xs">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                  <span>{article.date}</span>
                </div>
                <button className="flex items-center gap-1.5 text-teal-400 hover:text-teal-300 text-xs font-medium transition-colors group/btn">
                  Read
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default ScienceArticles;
