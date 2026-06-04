import { Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const articles = [
  {
    id: 'sci-1',
    tag: 'Research',
    tagColor: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20',
    title: 'How Bacteria Communicate Through Chemical Signals',
    excerpt: 'Quorum sensing allows bacteria to coordinate behavior across entire colonies — a discovery that\'s reshaping our understanding of microbial intelligence and opening new avenues for antibiotic development.',
    readTime: '6 min read',
    date: 'May 28, 2026',
    author: 'Dr. Elena Vasquez',
  },
  {
    id: 'sci-2',
    tag: 'Discovery',
    tagColor: 'text-teal-300 bg-teal-500/10 border-teal-500/20',
    title: 'The Gut Microbiome: Your Body\'s Hidden Ecosystem',
    excerpt: 'Trillions of microorganisms live inside your digestive system, influencing everything from mood to immunity. New research reveals just how deeply this microbial community shapes human health.',
    readTime: '8 min read',
    date: 'May 20, 2026',
    author: 'Dr. James Okafor',
  },
  {
    id: 'sci-3',
    tag: 'Technology',
    tagColor: 'text-violet-300 bg-violet-500/10 border-violet-500/20',
    title: 'CRISPR and the Future of Microbial Engineering',
    excerpt: 'Scientists are now programming bacteria to produce medicines, clean up pollution, and even store digital data. The age of synthetic biology is transforming what microbes can do for humanity.',
    readTime: '5 min read',
    date: 'May 14, 2026',
    author: 'Dr. Aiko Tanaka',
  },
  {
    id: 'sci-4',
    tag: 'Ecology',
    tagColor: 'text-amber-300 bg-amber-500/10 border-amber-500/20',
    title: 'Extremophiles: Life at the Edge of Possibility',
    excerpt: 'From boiling hydrothermal vents to frozen Antarctic ice, extremophile microorganisms have shattered our assumptions about where life can exist — and what it might look like on other planets.',
    readTime: '7 min read',
    date: 'May 7, 2026',
    author: 'Dr. Priya Sharma',
  },
  {
    id: 'sci-5',
    tag: 'History',
    tagColor: 'text-rose-300 bg-rose-500/10 border-rose-500/20',
    title: 'Antonie van Leeuwenhoek: The Father of Microbiology',
    excerpt: 'In 1676, a Dutch draper peered through a handcrafted lens and saw a world no human had ever witnessed. The story of how one man\'s curiosity launched an entire scientific discipline.',
    readTime: '9 min read',
    date: 'Apr 30, 2026',
    author: 'Dr. Marcus Webb',
  },
  {
    id: 'sci-6',
    tag: 'Research',
    tagColor: 'text-cyan-300 bg-cyan-500/10 border-cyan-500/20',
    title: 'Phages: The Viruses That Hunt Bacteria',
    excerpt: 'Bacteriophages are the most abundant biological entities on Earth. As antibiotic resistance grows, scientists are revisiting these ancient viral predators as a potential medical weapon.',
    readTime: '6 min read',
    date: 'Apr 22, 2026',
    author: 'Dr. Sofia Reyes',
  },
];

const ScienceArticleList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map((article) => (
        <article
          key={article.id}
          className="bg-[#0d1526] border border-cyan-500/15 rounded-2xl p-6 card-hover flex flex-col"
        >
          <div className="flex items-center justify-between mb-4">
            <span className={`text-xs font-medium px-3 py-1 rounded-full border ${article.tagColor}`}>
              {article.tag}
            </span>
            <div className="flex items-center gap-1.5 text-slate-500 text-xs">
              <Clock className="w-3 h-3" />
              {article.readTime}
            </div>
          </div>
          <h3 className="font-display font-semibold text-slate-100 text-lg mb-3 leading-snug">
            {article.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
            {article.excerpt}
          </p>
          <div className="flex items-center justify-between border-t border-cyan-500/10 pt-4">
            <div>
              <p className="text-slate-300 text-xs font-medium">{article.author}</p>
              <p className="text-slate-500 text-xs">{article.date}</p>
            </div>
            <button className="inline-flex items-center gap-1.5 text-cyan-300 hover:text-cyan-200 text-sm font-medium transition-colors">
              Read <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default ScienceArticleList;
