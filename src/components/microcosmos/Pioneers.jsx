const pioneers = [
  {
    id: 'leeuwenhoek',
    name: 'Antonie van Leeuwenhoek',
    years: '1632 — 1723',
    role: 'Father of microbiology',
    quote:
      'I saw, with great wonder, more than a thousand of these living animals in a single drop of water.',
    q: 'antique microscope vintage scientific illustration',
  },
  {
    id: 'hooke',
    name: 'Robert Hooke',
    years: '1635 — 1703',
    role: 'Coined the word “cell”',
    quote:
      'I could exceedingly plainly perceive it to be all perforated and porous, much like a Honey-comb.',
    q: 'vintage microscope illustration cell drawing',
  },
  {
    id: 'pasteur',
    name: 'Louis Pasteur',
    years: '1822 — 1895',
    role: 'Germ theory of disease',
    quote:
      'In the field of observation, chance favors only the prepared mind.',
    q: 'antique laboratory glassware scientific',
  },
  {
    id: 'koch',
    name: 'Robert Koch',
    years: '1843 — 1910',
    role: 'Founder of modern bacteriology',
    quote:
      'One day, man will have to fight noise as relentlessly as cholera and the plague.',
    q: 'bacteria culture petri dish vintage',
  },
]

export default function Pioneers() {
  return (
    <section
      id="pioneers"
      className="relative py-24 md:py-32 border-t border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900/40"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-400 font-semibold">
            Pioneers of the unseen
          </span>
          <h2
            id="pioneers-title"
            className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-slate-50"
            style={{ fontFamily: "'Space Grotesk', Inter, sans-serif" }}
          >
            They were the first to look
          </h2>
          <p className="mt-5 text-slate-400 text-base md:text-lg">
            From hand-ground lenses to germ theory — a brief homage to the
            curious minds who opened the door.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {pioneers.map((p) => {
            const titleId = `pioneer-${p.id}-title`
            const descId = `pioneer-${p.id}-desc`
            return (
              <article
                key={p.id}
                className="group relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-cyan-500/30 transition-colors"
              >
                <div className="grid sm:grid-cols-5">
                  <div className="sm:col-span-2 relative aspect-[4/5] sm:aspect-auto overflow-hidden">
                    <img
                      alt={p.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      data-strk-img-id={`pioneer-${p.id}-img`}
                      data-strk-img={`[${descId}] [${titleId}] ${p.q}`}
                      data-strk-img-ratio="3x4"
                      data-strk-img-width="500"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-950/40" />
                  </div>
                  <div className="sm:col-span-3 p-6 md:p-7 flex flex-col justify-center">
                    <div className="text-[11px] uppercase tracking-[0.25em] text-cyan-400 font-semibold">
                      {p.role}
                    </div>
                    <h3
                      id={titleId}
                      className="mt-2 text-xl md:text-2xl font-bold text-slate-50"
                      style={{ fontFamily: "'Space Grotesk', Inter, sans-serif" }}
                    >
                      {p.name}
                    </h3>
                    <div className="text-sm text-slate-500 mt-1">{p.years}</div>
                    <blockquote
                      id={descId}
                      className="mt-4 text-slate-300 text-sm md:text-base italic leading-relaxed border-l-2 border-cyan-500/40 pl-4"
                    >
                      “{p.quote}”
                    </blockquote>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
