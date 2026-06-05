import Layout from '../components/layout/Layout';
import ScienceArticles from '../components/science/ScienceArticles';
import { BookOpen } from 'lucide-react';

const topics = ['All', 'Biology', 'Health', 'Evolution', 'Medicine', 'Astrobiology', 'Ecology'];

const Science = () => {
  return (
    <Layout>
      {/* Page Hero */}
      <section className="pt-32 pb-16 px-4 md:px-8 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono uppercase tracking-wider px-3 py-1.5 rounded-full mb-5">
            <BookOpen className="w-3.5 h-3.5" />
            Science Articles
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
            The Science of the Small
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl leading-relaxed">
            In-depth articles exploring the biology, ecology, and medical significance of the microscopic world. Written for curious minds at every level.
          </p>

          {/* Topic pills */}
          <div className="flex flex-wrap gap-2 mt-8">
            {topics.map((topic) => (
              <span
                key={topic}
                className="text-xs font-medium px-3.5 py-1.5 rounded-full border border-slate-700 text-slate-400 bg-slate-900/50 cursor-pointer hover:border-teal-500/50 hover:text-teal-400 transition-all duration-200"
              >
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section className="py-12 px-4 md:px-8 bg-slate-900 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <ScienceArticles />
        </div>
      </section>
    </Layout>
  );
};

export default Science;
