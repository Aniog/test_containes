import { Link } from 'react-router-dom';
import { ERAS, EMOTIONS } from '../../data/memories';

const HomeCategories = () => {
  return (
    <section className="py-24 px-4 md:px-8 bg-[#050810]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Eras */}
          <div>
            <p className="text-xs text-violet-400 uppercase tracking-widest mb-3">Browse by</p>
            <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-slate-100 mb-8">
              Eras of History
            </h2>
            <div className="space-y-3">
              {ERAS.map((era) => (
                <Link
                  key={era.id}
                  to={`/explore?era=${era.id}`}
                  className="flex items-center justify-between p-4 rounded-xl border border-slate-700/40 bg-[#080d1a] hover:border-slate-600 transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: era.color, boxShadow: `0 0 8px ${era.color}60` }}
                    />
                    <span className="text-slate-200 font-medium group-hover:text-white transition-colors">
                      {era.label}
                    </span>
                  </div>
                  <span className="text-xs text-slate-600 group-hover:text-slate-400 transition-colors">
                    {era.range}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Emotions */}
          <div>
            <p className="text-xs text-amber-400 uppercase tracking-widest mb-3">Browse by</p>
            <h2 className="font-cinzel text-2xl md:text-3xl font-bold text-slate-100 mb-8">
              Human Emotions
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {EMOTIONS.map((emotion) => (
                <Link
                  key={emotion.id}
                  to={`/explore?emotion=${emotion.id}`}
                  className="flex items-center gap-3 p-4 rounded-xl border border-slate-700/40 bg-[#080d1a] hover:border-slate-600 transition-all duration-200 group"
                >
                  <span
                    className="text-xl leading-none"
                    style={{ color: emotion.color }}
                  >
                    {emotion.icon}
                  </span>
                  <span className="text-slate-200 font-medium group-hover:text-white transition-colors">
                    {emotion.label}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeCategories;
