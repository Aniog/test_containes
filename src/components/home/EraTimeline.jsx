import { useNavigate } from 'react-router-dom';
import { ERAS } from '../../data/memories';

export default function EraTimeline() {
  const navigate = useNavigate();

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-space-black to-space-navy">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-nebula-blue text-sm tracking-[0.3em] uppercase font-inter mb-3">Browse by Era</p>
          <h2 className="font-cinzel text-3xl md:text-4xl text-white mb-4">Twelve Thousand Years of Memory</h2>
          <p className="text-slate-400 max-w-xl mx-auto font-inter">
            From the first harvest songs to the last coral reefs — every era holds its own constellation of human experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent hidden md:block" />

          <div className="space-y-6 md:space-y-0">
            {ERAS.map((era, i) => (
              <div
                key={era.id}
                className={`md:flex items-center gap-8 md:mb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Card */}
                <div className="md:w-5/12">
                  <button
                    onClick={() => navigate(`/explore?era=${era.id}`)}
                    className="w-full text-left group bg-space-navy border border-slate-800 hover:border-opacity-60 rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
                    style={{ '--hover-color': era.color, borderColor: 'rgb(30 41 59)' }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = era.color + '50'}
                    onMouseLeave={e => e.currentTarget.style.borderColor = 'rgb(30 41 59)'}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-cinzel text-lg text-white group-hover:text-white transition-colors">
                          {era.label}
                        </h3>
                        <p className="text-slate-500 text-sm font-inter mt-1">{era.range}</p>
                      </div>
                      <div
                        className="w-3 h-3 rounded-full mt-1 flex-shrink-0"
                        style={{ backgroundColor: era.color, boxShadow: `0 0 10px ${era.color}60` }}
                      />
                    </div>
                    <p className="text-slate-400 text-sm font-inter">
                      Explore memories from this period →
                    </p>
                  </button>
                </div>

                {/* Center dot */}
                <div className="hidden md:flex w-2/12 justify-center">
                  <div
                    className="w-4 h-4 rounded-full border-2 border-space-black z-10"
                    style={{ backgroundColor: era.color, boxShadow: `0 0 15px ${era.color}80` }}
                  />
                </div>

                {/* Spacer */}
                <div className="md:w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
