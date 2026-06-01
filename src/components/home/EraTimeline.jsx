import { ERAS, EMOTIONS, LIFE_EVENTS } from '@/data/memories';

const EMOTION_COLORS = {
  joy: '#f5c842',
  grief: '#8b5cf6',
  wonder: '#4f8ef7',
  love: '#e879a0',
  fear: '#ef4444',
  hope: '#2dd4bf',
  nostalgia: '#fb923c',
  peace: '#86efac',
};

const ERA_COLORS = {
  ancient: '#f5c842',
  medieval: '#e879a0',
  renaissance: '#8b5cf6',
  industrial: '#2dd4bf',
  modern: '#4f8ef7',
  digital: '#e879a0',
  migration: '#f5c842',
};

export default function EraTimeline() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-space-black to-space-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-void-purple" />
            <span className="font-sans text-xs text-void-purple uppercase tracking-widest">
              Browse by Era
            </span>
            <span className="w-8 h-px bg-void-purple" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            40,000 Years of Memory
          </h2>
          <p className="font-sans text-slate-400 max-w-xl mx-auto">
            From the first cave paintings to the last days before departure —
            every era of human civilization is preserved here.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-slate-700 to-transparent hidden md:block" />

          <div className="space-y-8 md:space-y-0">
            {ERAS.map((era, i) => {
              const isLeft = i % 2 === 0;
              const color = ERA_COLORS[era.id] || '#4f8ef7';
              const memCount = Math.floor(Math.random() * 800000 + 100000);

              return (
                <div
                  key={era.id}
                  className={`relative flex items-center gap-6 md:gap-0 ${
                    isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content card */}
                  <div className={`flex-1 ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <div
                      className="inline-block bg-space-midnight border border-slate-800 rounded-xl p-5 hover:border-opacity-60 transition-all duration-300 cursor-pointer group"
                      style={{ '--hover-color': color }}
                    >
                      <div className={`flex items-center gap-3 mb-2 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                        <span
                          className="font-sans text-xs font-semibold px-2.5 py-1 rounded-full"
                          style={{ backgroundColor: `${color}15`, color }}
                        >
                          {era.range}
                        </span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-white mb-1 group-hover:text-opacity-90">
                        {era.label}
                      </h3>
                      <p className="font-sans text-sm text-slate-500">
                        {memCount.toLocaleString()} memories preserved
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex flex-shrink-0 w-4 h-4 rounded-full border-2 items-center justify-center z-10"
                    style={{ borderColor: color, backgroundColor: `${color}30` }}>
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color }} />
                  </div>

                  {/* Spacer for opposite side */}
                  <div className="hidden md:block flex-1" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Emotion legend */}
        <div className="mt-20 border-t border-slate-800 pt-16">
          <h3 className="font-serif text-2xl font-bold text-white text-center mb-8">
            The Emotional Spectrum
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {EMOTIONS.map((emotion) => {
              const color = EMOTION_COLORS[emotion.id] || '#4f8ef7';
              const count = Math.floor(Math.random() * 600000 + 50000);
              return (
                <div
                  key={emotion.id}
                  className="bg-space-midnight border border-slate-800 rounded-xl p-4 text-center hover:border-opacity-50 transition-all duration-200"
                  style={{ '--c': color }}
                >
                  <div className="text-2xl mb-2" style={{ color }}>{emotion.icon}</div>
                  <div className="font-serif text-base font-semibold text-white mb-1">{emotion.label}</div>
                  <div className="font-sans text-xs text-slate-500">{count.toLocaleString()} memories</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
