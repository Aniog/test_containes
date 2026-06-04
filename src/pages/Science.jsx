import ArticleList from '../components/science/ArticleList';
import { BookOpen, Dna, FlaskConical } from 'lucide-react';

const highlights = [
  { icon: BookOpen, value: '50+', label: 'Science Articles', color: 'text-teal-400' },
  { icon: Dna, value: '6', label: 'Organism Categories', color: 'text-cyan-400' },
  { icon: FlaskConical, value: '100%', label: 'Peer-Reviewed Sources', color: 'text-violet-400' },
];

const Science = () => {
  return (
    <div style={{ backgroundColor: '#0a0e1a', minHeight: '100vh' }}>
      {/* Page Header */}
      <div className="pt-32 pb-16 px-6" style={{ backgroundColor: '#0f1629' }}>
        <div className="max-w-6xl mx-auto">
          <span className="text-teal-400 text-sm font-semibold uppercase tracking-widest">Knowledge Base</span>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mt-3 mb-4">
            The Science of Microbes
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-10">
            Deep dives into microbiology, ecology, medicine, and astrobiology — written for curious minds at every level.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-8">
            {highlights.map(({ icon: Icon, value, label, color }) => (
              <div key={label} className="flex items-center gap-3">
                <Icon className={`w-5 h-5 ${color}`} />
                <div>
                  <div className={`text-xl font-bold ${color}`}>{value}</div>
                  <div className="text-slate-500 text-xs">{label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Articles */}
      <div className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <ArticleList />
        </div>
      </div>
    </div>
  );
};

export default Science;
