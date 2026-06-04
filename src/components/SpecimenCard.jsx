import { useState } from 'react';
import { Info } from 'lucide-react';

export default function SpecimenCard({ specimen }) {
  const [showTooltip, setShowTooltip] = useState(null);

  return (
    <article className="glass-card overflow-hidden group hover:bg-white/40 transition-all duration-500">
      <div className="aspect-[4/3] relative overflow-hidden bg-parchment-dark">
        <img
          alt={specimen.title}
          data-strk-img-id={specimen.imgId}
          data-strk-img={`[${specimen.descId}] [${specimen.titleId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="800"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-parchment-DEFAULT/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6">
        <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint mb-2">
          {specimen.category}
        </p>
        <h3
          id={specimen.titleId}
          className="font-serif text-lg font-semibold text-ink-DEFAULT mb-2"
        >
          {specimen.title}
        </h3>
        <p
          id={specimen.descId}
          className="font-sans text-sm text-ink-muted leading-relaxed mb-4"
        >
          {specimen.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {specimen.terms.map((term) => (
            <div key={term.word} className="relative">
              <button
                onClick={() =>
                  setShowTooltip(showTooltip === term.word ? null : term.word)
                }
                className="inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] font-mono text-ink-muted 
                           border border-ink-faint/20 hover:border-ink-DEFAULT/40 hover:text-ink-DEFAULT 
                           transition-colors cursor-help"
              >
                {term.word}
                <Info className="w-3 h-3" />
              </button>
              {showTooltip === term.word && (
                <div className="absolute bottom-full left-0 mb-2 z-30 tooltip-glass w-56">
                  <p className="text-xs text-ink-DEFAULT">{term.definition}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}