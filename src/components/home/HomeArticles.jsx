import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, FlaskConical, Microscope } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const articles = [
  {
    id: 'quorum-sensing',
    titleId: 'art-quorum-title',
    descId: 'art-quorum-desc',
    imgId: 'art-img-quorum-g7h8',
    title: 'Quorum Sensing: How Bacteria Talk',
    desc: 'Bacteria use chemical signals to coordinate behavior across entire colonies — a form of collective intelligence.',
    category: 'Microbiology',
    icon: FlaskConical,
    readTime: '5 min read',
  },
  {
    id: 'gut-microbiome',
    titleId: 'art-gut-title',
    descId: 'art-gut-desc',
    imgId: 'art-img-gut-i9j0',
    title: 'Your Gut: A Microbial Metropolis',
    desc: 'The 38 trillion microbes in your gut influence everything from mood to immunity — and we\'re just beginning to understand them.',
    category: 'Human Health',
    icon: BookOpen,
    readTime: '7 min read',
  },
  {
    id: 'extremophiles',
    titleId: 'art-extreme-title',
    descId: 'art-extreme-desc',
    imgId: 'art-img-extreme-k1l2',
    title: 'Life at the Extremes',
    desc: 'From boiling hydrothermal vents to frozen Antarctic ice, extremophiles redefine the boundaries of where life can exist.',
    category: 'Astrobiology',
    icon: Microscope,
    readTime: '6 min read',
  },
];

const HomeArticles = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 bg-cosmos-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-cosmos-teal text-xs font-medium uppercase tracking-widest">Latest Science</span>
            <h2 className="text-3xl md:text-4xl font-bold text-cosmos-text mt-3">
              Discoveries from the Micro-World
            </h2>
          </div>
          <Link
            to="/science"
            className="inline-flex items-center gap-2 text-cosmos-teal text-sm font-medium hover:text-cosmos-cyan transition-colors shrink-0"
          >
            All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => {
            const Icon = article.icon;
            return (
              <article
                key={article.id}
                className="bg-cosmos-surface border border-cosmos-border rounded-2xl overflow-hidden hover:border-cosmos-teal/40 hover:shadow-[0_0_30px_rgba(0,212,200,0.1)] transition-all duration-300 group flex flex-col"
              >
                <div className="relative overflow-hidden aspect-[16/9]">
                  <img
                    alt={article.title}
                    data-strk-img-id={article.imgId}
                    data-strk-img={`[${article.descId}] [${article.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-cosmos-surface/80 to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-7 h-7 rounded-full bg-cosmos-teal/10 border border-cosmos-teal/20 flex items-center justify-center">
                      <Icon className="w-3.5 h-3.5 text-cosmos-teal" />
                    </div>
                    <span className="text-cosmos-teal text-xs font-medium">{article.category}</span>
                    <span className="text-cosmos-dim text-xs ml-auto">{article.readTime}</span>
                  </div>
                  <h3 id={article.titleId} className="text-cosmos-text text-lg font-semibold mb-2 leading-snug">
                    {article.title}
                  </h3>
                  <p id={article.descId} className="text-cosmos-muted text-sm leading-relaxed flex-1">
                    {article.desc}
                  </p>
                  <Link
                    to="/science"
                    className="inline-flex items-center gap-1 text-cosmos-teal text-sm font-medium mt-4 hover:text-cosmos-cyan transition-colors"
                  >
                    Read more <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomeArticles;
