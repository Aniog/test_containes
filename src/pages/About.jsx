import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-space-black pt-20">
      {/* Hero */}
      <div className="relative py-20 px-4 overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 0%, rgba(245,200,66,0.06) 0%, transparent 60%)',
          }}
        />
        <div className="max-w-4xl mx-auto relative text-center">
          <p className="text-stardust-gold text-xs font-medium tracking-widest uppercase mb-3">Our Mission</p>
          <h1 className="font-cinzel text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Why We Remember
          </h1>
          <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
            In 2031, as humanity prepared for the Great Migration to the stars,
            a question arose: what do we take with us?
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-4 pb-24">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Origin story */}
          <div className="bg-space-navy/60 border border-slate-700/40 rounded-3xl p-8 md:p-12">
            <h2 className="font-cinzel text-2xl font-bold text-white mb-6">The Origin</h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                When the Interstellar Migration Council announced that the first colony ships would depart
                Earth by 2047, humanity faced an unprecedented question: how do you carry a civilization
                across the void of space?
              </p>
              <p>
                Technology, science, and culture could be digitized. But what about the smell of rain
                on a summer afternoon? The feeling of a grandmother's hand? The sound of a city waking up?
              </p>
              <p>
                The Memory Archive Initiative was founded to answer that question. We believe that
                humanity's greatest treasure is not its knowledge, but its <em className="text-white">experience</em> —
                the accumulated weight of billions of lives, each one a universe of moments.
              </p>
            </div>
          </div>

          {/* How it works */}
          <div>
            <h2 className="font-cinzel text-2xl font-bold text-white mb-8 text-center">How the Archive Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: '◉',
                  color: '#4f8ef7',
                  title: 'Collect',
                  desc: 'Anyone on Earth can contribute a memory — written, spoken, or visual. Every language, every culture, every era.',
                },
                {
                  icon: '◈',
                  color: '#a78bfa',
                  title: 'Preserve',
                  desc: 'Each memory is catalogued, translated, and stored across redundant systems designed to survive millennia.',
                },
                {
                  icon: '✦',
                  color: '#f5c842',
                  title: 'Carry Forward',
                  desc: 'The complete Archive travels aboard every colony ship — so that wherever humanity goes, it remembers where it came from.',
                },
              ].map((item) => (
                <div key={item.title} className="bg-space-navy/60 border border-slate-700/40 rounded-2xl p-6 text-center">
                  <div className="text-3xl mb-4" style={{ color: item.color }}>{item.icon}</div>
                  <h3 className="font-cinzel font-semibold text-white text-lg mb-3">{item.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote */}
          <div className="bg-space-indigo/60 border border-nebula-blue/20 rounded-3xl p-8 md:p-12 text-center">
            <div className="text-4xl text-stardust-gold mb-4 font-cinzel">"</div>
            <blockquote className="font-cinzel text-xl md:text-2xl text-white font-medium leading-relaxed mb-4 max-w-2xl mx-auto">
              A civilization that forgets its past has no future worth reaching for.
              We carry our memories not as weight, but as wings.
            </blockquote>
            <p className="text-slate-400 text-sm">— Dr. Amara Osei, Founder, Memory Archive Initiative</p>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="font-cinzel text-2xl font-bold text-white mb-4">Add Your Voice</h2>
            <p className="text-slate-400 mb-8 max-w-md mx-auto">
              There are 16 years until the first ships depart. Every memory you share today
              becomes part of what humanity carries to the stars.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/submit"
                className="inline-flex items-center justify-center gap-2 bg-nebula-blue hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-nebula-blue/30"
              >
                Contribute a Memory
              </Link>
              <Link
                to="/explore"
                className="inline-flex items-center justify-center gap-2 bg-transparent border border-slate-600 hover:border-slate-400 text-slate-300 hover:text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300"
              >
                Explore the Archive
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
