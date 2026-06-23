import { AlertTriangle } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import { problemsSolved } from '../../data/content';

const ProblemsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-wider text-blue-400 mb-3">
            Problems we solve
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
            Sourcing from China comes with real risks
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed">
            We help you avoid the most common and most expensive mistakes overseas buyers make.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problemsSolved.map((p) => (
            <div
              key={p.id}
              className="bg-slate-800/60 border border-slate-700 rounded-xl p-6"
            >
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-amber-500/15 text-amber-400 mb-4">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
