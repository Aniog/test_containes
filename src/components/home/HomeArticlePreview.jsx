import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Microscope } from 'lucide-react';

const articles = [
  {
    id: 'art-1',
    titleId: 'preview-art-1-title',
    descId: 'preview-art-1-desc',
    tag: 'Research',
    tagColor: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20',
    title: 'How Bacteria Communicate Through Chemical Signals',
    desc: 'Quorum sensing allows bacteria to coordinate behavior across entire colonies — a discovery that\'s reshaping our understanding of microbial intelligence.',
    readTime: '6 min read',
  },
  {
    id: 'art-2',
    titleId: 'preview-art-2-title',
    descId: 'preview-art-2-desc',
    tag: 'Discovery',
    tagColor: 'text-teal-300 bg-teal-500/10 border-teal-500/20',
    title: 'The Gut Microbiome: Your Body\'s Hidden Ecosystem',
    desc: 'Trillions of microorganisms live inside your digestive system, influencing everything from mood to immunity.',
    readTime: '8 min read',
  },
  {
    id: 'art-3',
    titleId: 'preview-art-3-title',
    descId: 'preview-art-3-desc',
    tag: 'Technology',
    tagColor: 'text-violet-300 bg-violet-500/10 border-violet-500/20',
    title: 'CRISPR and the Future of Microbial Engineering',
    desc: 'Scientists are now programming bacteria to produce medicines, clean up pollution, and even store digital data.',
    readTime: '5 min read',
  },
];

const HomeArticlePreview = () => {
  return (
    <section className="py-24 md:py-32 section-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-medium px-4 py-2 rounded-full mb-4">
              <BookOpen className="w-3 h-3" />
              Latest Science
            </div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-slate-100">
              From the Lab
            </h2>
          </div>
          <Link
            to="/science"
            className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200 text-sm font-medium transition-colors"
          >
            All Articles <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <article
              key={article.id}
              className="bg-[#0d1526] border border-cyan-500/15 rounded-2xl p-6 card-hover flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-medium px-3 py-1 rounded-full border ${article.tagColor}`}>
                  {article.tag}
                </span>
                <span className="text-slate-500 text-xs">{article.readTime}</span>
              </div>
              <h3 id={article.titleId} className="font-display font-semibold text-slate-100 text-lg mb-3 leading-snug flex-1">
                {article.title}
              </h3>
              <p id={article.descId} className="text-slate-400 text-sm leading-relaxed mb-5">
                {article.desc}
              </p>
              <Link
                to="/science"
                className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 text-sm font-medium transition-colors mt-auto"
              >
                Read More <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeArticlePreview;
