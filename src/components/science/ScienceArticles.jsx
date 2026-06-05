import { useState, useEffect, useRef } from 'react';
import { Clock, Tag, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const articles = [
  {
    id: 'gut-microbiome',
    title: 'The Gut Microbiome: Your Second Brain',
    excerpt: 'Trillions of microbes in your digestive system influence mood, immunity, and even decision-making. New research reveals the gut-brain axis is more powerful than we imagined.',
    category: 'Microbiology',
    readTime: '8 min read',
    date: 'May 28, 2026',
    featured: true,
    tagColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/20',
    titleId: 'art-gut-title',
    descId: 'art-gut-desc',
    imgId: 'art-img-gut-a1b2c3',
  },
  {
    id: 'crispr-bacteria',
    title: 'CRISPR: How Bacteria Invented Gene Editing',
    excerpt: 'Long before scientists harnessed it, bacteria were using CRISPR as an immune system against viruses. The story of how a microbial defense became the most powerful tool in biology.',
    category: 'Genetics',
    readTime: '6 min read',
    date: 'May 15, 2026',
    featured: false,
    tagColor: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
    titleId: 'art-crispr-title',
    descId: 'art-crispr-desc',
    imgId: 'art-img-crispr-d4e5f6',
  },
  {
    id: 'ocean-microbes',
    title: 'Ocean Microbes and the Carbon Cycle',
    excerpt: 'Marine microorganisms are the unsung heroes of climate regulation, absorbing billions of tons of CO₂ annually. But rising ocean temperatures threaten this delicate balance.',
    category: 'Climate Science',
    readTime: '7 min read',
    date: 'May 3, 2026',
    featured: false,
    tagColor: 'text-teal-400 bg-teal-400/10 border-teal-400/20',
    titleId: 'art-ocean-title',
    descId: 'art-ocean-desc',
    imgId: 'art-img-ocean-g7h8i9',
  },
  {
    id: 'antibiotic-resistance',
    title: 'The Antibiotic Resistance Crisis',
    excerpt: 'Bacteria are evolving faster than we can develop new drugs. Understanding the mechanisms of resistance is our best hope for staying ahead in this evolutionary arms race.',
    category: 'Public Health',
    readTime: '10 min read',
    date: 'Apr 22, 2026',
    featured: false,
    tagColor: 'text-rose-400 bg-rose-400/10 border-rose-400/20',
    titleId: 'art-antibiotic-title',
    descId: 'art-antibiotic-desc',
    imgId: 'art-img-antibiotic-j1k2l3',
  },
  {
    id: 'extremophiles-space',
    title: 'Extremophiles and the Search for Alien Life',
    excerpt: 'If life can thrive in Earth\'s most hostile environments, what does that mean for the possibility of life on Mars, Europa, or Enceladus? Astrobiologists are taking notes from microbes.',
    category: 'Astrobiology',
    readTime: '9 min read',
    date: 'Apr 10, 2026',
    featured: false,
    tagColor: 'text-amber-400 bg-amber-400/10 border-amber-400/20',
    titleId: 'art-extremo-title',
    descId: 'art-extremo-desc',
    imgId: 'art-img-extremo-m4n5o6',
  },
  {
    id: 'phage-therapy',
    title: 'Phage Therapy: Viruses as Medicine',
    excerpt: 'As antibiotic resistance grows, scientists are turning to bacteriophages — viruses that hunt and kill bacteria — as a precision alternative to broad-spectrum antibiotics.',
    category: 'Medicine',
    readTime: '7 min read',
    date: 'Mar 28, 2026',
    featured: false,
    tagColor: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
    titleId: 'art-phage-title',
    descId: 'art-phage-desc',
    imgId: 'art-img-phage-p7q8r9',
  },
];

const scienceCategories = ['All', 'Microbiology', 'Genetics', 'Climate Science', 'Public Health', 'Astrobiology', 'Medicine'];

export default function ScienceArticles() {
  const [activeCategory, setActiveCategory] = useState('All');
  const containerRef = useRef(null);

  const filtered = articles.filter(
    (a) => activeCategory === 'All' || a.category === activeCategory
  );

  const featured = filtered.find((a) => a.featured) || filtered[0];
  const rest = filtered.filter((a) => a.id !== featured?.id);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [filtered]);

  return (
    <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {scienceCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`text-xs font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
              activeCategory === cat
                ? 'bg-cyan-400 text-slate-900 border-cyan-400'
                : 'bg-transparent text-slate-400 border-slate-700/50 hover:border-cyan-400/40 hover:text-cyan-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Article */}
      {featured && (
        <div className="bg-[#0a1628] border border-cyan-900/40 rounded-2xl overflow-hidden card-glow transition-all duration-300 hover:border-cyan-400/40 group mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="relative h-64 md:h-auto overflow-hidden">
              <img
                alt={featured.title}
                data-strk-img-id={featured.imgId}
                data-strk-img={`[${featured.descId}] [${featured.titleId}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a1628]/60 hidden md:block" />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${featured.tagColor}`}>
                  {featured.category}
                </span>
                <span className="text-cyan-400 text-xs font-medium px-3 py-1 rounded-full border border-cyan-400/20 bg-cyan-400/10">
                  Featured
                </span>
              </div>
              <h2 id={featured.titleId} className="text-slate-50 font-bold text-2xl md:text-3xl mb-3 leading-tight">
                {featured.title}
              </h2>
              <p id={featured.descId} className="text-slate-400 text-sm leading-relaxed mb-6">
                {featured.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-slate-500 text-xs font-mono-label">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{featured.readTime}</span>
                  <span>{featured.date}</span>
                </div>
                <button className="inline-flex items-center gap-1 text-cyan-400 text-sm font-medium hover:gap-2 transition-all duration-200">
                  Read more <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((article) => (
          <div
            key={article.id}
            className="bg-[#0a1628] border border-cyan-900/40 rounded-2xl overflow-hidden card-glow transition-all duration-300 hover:border-cyan-400/40 group flex flex-col"
          >
            <div className="relative h-44 overflow-hidden">
              <img
                alt={article.title}
                data-strk-img-id={article.imgId}
                data-strk-img={`[${article.descId}] [${article.titleId}]`}
                data-strk-img-ratio="3x2"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-transparent" />
              <span className={`absolute top-3 left-3 text-xs font-medium px-3 py-1 rounded-full border ${article.tagColor}`}>
                {article.category}
              </span>
            </div>

            <div className="p-5 flex flex-col flex-1">
              <h3 id={article.titleId} className="text-slate-50 font-bold text-lg leading-tight mb-2">
                {article.title}
              </h3>
              <p id={article.descId} className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between pt-3 border-t border-slate-700/50">
                <div className="flex items-center gap-3 text-slate-500 text-xs font-mono-label">
                  <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{article.readTime}</span>
                  <span>{article.date}</span>
                </div>
                <button className="inline-flex items-center gap-1 text-cyan-400 text-xs font-medium hover:gap-2 transition-all duration-200">
                  Read <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
