import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';

const articles = [
  {
    id: 'gut-microbiome',
    date: 'May 28, 2026',
    tag: 'Health',
    tagColor: 'text-teal-400 bg-teal-400/10 border-teal-400/30',
    title: 'Your Gut Microbiome: The Second Brain',
    excerpt: 'Trillions of bacteria in your digestive system influence mood, immunity, and even decision-making.',
  },
  {
    id: 'ocean-microbes',
    date: 'May 15, 2026',
    tag: 'Ecology',
    tagColor: 'text-cyan-400 bg-cyan-400/10 border-cyan-400/30',
    title: 'Ocean Microbes Produce Half Our Oxygen',
    excerpt: 'Phytoplankton and cyanobacteria are responsible for generating 50% of the oxygen we breathe.',
  },
  {
    id: 'antibiotic-resistance',
    date: 'May 3, 2026',
    tag: 'Medicine',
    tagColor: 'text-violet-400 bg-violet-400/10 border-violet-400/30',
    title: 'The Growing Crisis of Antibiotic Resistance',
    excerpt: 'How bacteria evolve to outsmart our best medicines — and what scientists are doing about it.',
  },
];

const LatestArticles = () => {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: '#0a0e1a' }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">Latest</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mt-3">
              Science Articles
            </h2>
          </div>
          <Link
            to="/science"
            className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium text-sm transition-colors"
          >
            View All Articles
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="space-y-4">
          {articles.map((article) => (
            <Link
              key={article.id}
              to="/science"
              className="group flex flex-col md:flex-row md:items-center gap-4 p-6 bg-slate-800/40 border border-slate-700/50 rounded-2xl hover:border-teal-500/40 hover:bg-slate-800/60 transition-all duration-300"
            >
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`text-xs font-medium px-3 py-1 rounded-full border ${article.tagColor}`}>
                    {article.tag}
                  </span>
                  <span className="text-slate-500 text-xs">{article.date}</span>
                </div>
                <h3 className="text-slate-100 font-semibold text-lg group-hover:text-teal-400 transition-colors mb-1">
                  {article.title}
                </h3>
                <p className="text-slate-400 text-sm">{article.excerpt}</p>
              </div>
              <div className="flex items-center gap-2 text-slate-500 group-hover:text-teal-400 transition-colors shrink-0">
                <BookOpen className="w-4 h-4" />
                <span className="text-sm">Read</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestArticles;
