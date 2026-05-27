import { useEffect, useRef } from 'react';
import { Clock, BookOpen, ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const articles = [
  {
    id: 'art-1',
    category: 'Evolution',
    title: 'The Great Oxidation Event',
    subtitle: 'How cyanobacteria changed Earth forever',
    excerpt: 'Around 2.4 billion years ago, photosynthetic cyanobacteria began flooding Earth\'s atmosphere with oxygen — a catastrophic event for anaerobic life, but the foundation for all complex life that followed.',
    readTime: '8 min read',
    date: 'May 2026',
    featured: true,
  },
  {
    id: 'art-2',
    category: 'Medicine',
    title: 'The Antibiotic Crisis',
    subtitle: 'Why superbugs are winning the arms race',
    excerpt: 'Antibiotic resistance is one of the greatest threats to global health. We explore how bacteria evolve resistance and what scientists are doing to stay ahead.',
    readTime: '6 min read',
    date: 'April 2026',
    featured: false,
  },
  {
    id: 'art-3',
    category: 'Ecology',
    title: 'The Soil Microbiome',
    subtitle: 'A universe beneath our feet',
    excerpt: 'A single gram of healthy soil contains up to a billion bacteria and thousands of fungal species. This invisible ecosystem drives agriculture, climate regulation, and nutrient cycling.',
    readTime: '7 min read',
    date: 'April 2026',
    featured: false,
  },
  {
    id: 'art-4',
    category: 'Astrobiology',
    title: 'Life Beyond Earth',
    subtitle: 'Could microbes survive on Mars or Europa?',
    excerpt: 'Extremophile microorganisms on Earth — surviving in acid, radiation, and vacuum — give scientists hope that microbial life could exist elsewhere in our solar system.',
    readTime: '9 min read',
    date: 'March 2026',
    featured: false,
  },
  {
    id: 'art-5',
    category: 'Biotechnology',
    title: 'Engineering Microbes',
    subtitle: 'Synthetic biology and the future of medicine',
    excerpt: 'Scientists are programming bacteria like computers — engineering them to produce insulin, detect cancer, clean up oil spills, and even store digital data in DNA.',
    readTime: '10 min read',
    date: 'March 2026',
    featured: false,
  },
  {
    id: 'art-6',
    category: 'Human Health',
    title: 'Your Gut Microbiome',
    subtitle: 'The 38 trillion microbes living inside you',
    excerpt: 'The human gut hosts more microbial cells than human cells. These microbes influence immunity, mental health, metabolism, and even personality — a second brain of sorts.',
    readTime: '8 min read',
    date: 'February 2026',
    featured: false,
  },
];

const categoryColors = {
  Evolution: 'text-violet-400 bg-violet-400/10 border-violet-400/20',
  Medicine: 'text-red-400 bg-red-400/10 border-red-400/20',
  Ecology: 'text-emerald-400 bg-emerald-400/10 border-emerald-400/20',
  Astrobiology: 'text-blue-400 bg-blue-400/10 border-blue-400/20',
  Biotechnology: 'text-yellow-400 bg-yellow-400/10 border-yellow-400/20',
  'Human Health': 'text-pink-400 bg-pink-400/10 border-pink-400/20',
};

const ArticleCard = ({ article, featured }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, cardRef.current);
  }, []);

  if (featured) {
    return (
      <div
        ref={cardRef}
        className="group bg-[#0d1f35] rounded-2xl border border-[rgba(0,212,255,0.15)] overflow-hidden hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-300 md:col-span-2"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative h-64 md:h-auto overflow-hidden">
            <img
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              data-strk-img-id={`science-img-${article.id}`}
              data-strk-img={`[sci-excerpt-${article.id}] [sci-subtitle-${article.id}] [sci-title-${article.id}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0d1f35]/50 hidden md:block" />
          </div>
          <div className="p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-4">
              <span className={`text-xs font-medium rounded-full px-3 py-1 border ${categoryColors[article.category]}`}>
                {article.category}
              </span>
              <span className="text-[#4a7a94] text-xs flex items-center gap-1">
                <Clock className="w-3 h-3" /> {article.readTime}
              </span>
            </div>
            <h2 id={`sci-title-${article.id}`} className="text-2xl md:text-3xl font-bold text-[#e8f4f8] mb-2">
              {article.title}
            </h2>
            <p id={`sci-subtitle-${article.id}`} className="text-[#00d4ff] text-sm mb-4">{article.subtitle}</p>
            <p id={`sci-excerpt-${article.id}`} className="text-[#8ab4c8] leading-relaxed mb-6">{article.excerpt}</p>
            <button className="inline-flex items-center gap-2 text-[#00d4ff] text-sm font-medium hover:gap-3 transition-all">
              Read Article <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      className="group bg-[#0d1f35] rounded-2xl border border-[rgba(0,212,255,0.15)] overflow-hidden hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] transition-all duration-300"
    >
      <div className="relative h-44 overflow-hidden">
        <img
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          data-strk-img-id={`science-img-${article.id}`}
          data-strk-img={`[sci-excerpt-${article.id}] [sci-subtitle-${article.id}] [sci-title-${article.id}]`}
          data-strk-img-ratio="16x9"
          data-strk-img-width="500"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f35] via-transparent to-transparent" />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className={`text-xs font-medium rounded-full px-3 py-1 border ${categoryColors[article.category]}`}>
            {article.category}
          </span>
          <span className="text-[#4a7a94] text-xs flex items-center gap-1">
            <Clock className="w-3 h-3" /> {article.readTime}
          </span>
        </div>
        <h3 id={`sci-title-${article.id}`} className="text-lg font-bold text-[#e8f4f8] mb-1">{article.title}</h3>
        <p id={`sci-subtitle-${article.id}`} className="text-[#00d4ff] text-xs mb-3">{article.subtitle}</p>
        <p id={`sci-excerpt-${article.id}`} className="text-[#8ab4c8] text-sm leading-relaxed line-clamp-3 mb-4">{article.excerpt}</p>
        <button className="inline-flex items-center gap-2 text-[#00d4ff] text-sm font-medium hover:gap-3 transition-all">
          Read More <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

const Science = () => {
  const featured = articles.find((a) => a.featured);
  const rest = articles.filter((a) => !a.featured);

  return (
    <div className="min-h-screen bg-[#050d1a] pt-20">
      {/* Header */}
      <div className="bg-[#0d1f35] border-b border-[rgba(0,212,255,0.1)] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="text-[#00d4ff] text-sm font-medium tracking-widest uppercase">Research & Discovery</span>
          <h1 className="text-4xl md:text-5xl font-black text-[#e8f4f8] mt-3 mb-4">
            The Science of the Small
          </h1>
          <p className="text-[#8ab4c8] max-w-xl mx-auto leading-relaxed">
            Deep dives into microbiology, evolution, medicine, and the cutting edge of life science research.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        {/* Topics filter */}
        <div className="flex items-center gap-2 flex-wrap mb-10">
          <BookOpen className="w-4 h-4 text-[#4a7a94]" />
          {['All Topics', ...Object.keys(categoryColors)].map((cat) => (
            <button
              key={cat}
              className="text-xs font-medium rounded-full px-4 py-2 border border-[rgba(0,212,255,0.2)] text-[#8ab4c8] hover:border-[#00d4ff] hover:text-[#00d4ff] transition-all"
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featured && <ArticleCard article={featured} featured />}
          {rest.map((article) => (
            <ArticleCard key={article.id} article={article} featured={false} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Science;
