import ScienceArticles from '@/components/science/ScienceArticles';
import { FlaskConical } from 'lucide-react';

const topics = ['All', 'Research', 'Health', 'Technology', 'Environment', 'Evolution'];

const Science = () => {
  return (
    <div className="min-h-screen bg-slate-950 pt-24 pb-20">
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center">
            <FlaskConical className="w-5 h-5 text-cyan-400" />
          </div>
          <span className="text-cyan-400 text-sm font-medium uppercase tracking-widest">Science</span>
        </div>
        <h1 className="font-grotesk font-bold text-4xl md:text-5xl text-slate-100 mb-4">
          Latest Research & Discoveries
        </h1>
        <p className="text-slate-400 text-lg max-w-2xl">
          In-depth articles on microbiology, virology, and the cutting-edge science
          that is reshaping our understanding of life itself.
        </p>

        {/* Topic filters */}
        <div className="flex flex-wrap gap-2 mt-8">
          {topics.map((topic, i) => (
            <button
              key={topic}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                i === 0
                  ? 'bg-teal-500 text-slate-950'
                  : 'bg-slate-800 border border-slate-700 text-slate-300 hover:border-teal-500/50 hover:text-teal-400'
              }`}
            >
              {topic}
            </button>
          ))}
        </div>
      </div>

      {/* Articles */}
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <ScienceArticles />
      </div>
    </div>
  );
};

export default Science;
