const scaleSteps = [
  { size: '1 m', label: 'Human', note: 'Where stories usually start.' },
  { size: '1 mm', label: 'Sand grain', note: 'The borderline of the unaided eye.' },
  { size: '100 μm', label: 'Tardigrade', note: 'Crawling, eating, dreaming.' },
  { size: '10 μm', label: 'Red blood cell', note: 'A disc that carries breath.' },
  { size: '1 μm', label: 'Bacterium', note: 'Older than nuclei.' },
  { size: '100 nm', label: 'Virus', note: 'Information wrapped in a coat.' },
  { size: '1 nm', label: 'DNA helix', note: 'The script everything reads from.' },
]

const Scale = () => {
  return (
    <section id="scale" className="relative py-24 md:py-32 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-950 via-slate-900/60 to-slate-950" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-cyan-500/10 blur-3xl -z-10 animate-pulse-glow" />

      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.3em] text-cyan-300/80">
            Scale — descending
          </span>
          <h2 className="mt-6 font-serif text-3xl md:text-5xl font-light tracking-tight text-slate-50 leading-[1.1]">
            Seven steps from your hand into a single atom of life.
          </h2>
          <p className="mt-6 text-slate-300 font-light text-base md:text-lg leading-relaxed">
            Every step downward is roughly a tenfold zoom. Each level hides an
            entire civilisation invisible to the one above it.
          </p>
        </div>

        <ol className="mt-16 relative">
          <div className="absolute left-[7.5rem] md:left-40 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-400/0 via-emerald-400/40 to-violet-400/0" />
          {scaleSteps.map((step, idx) => (
            <li
              key={step.label}
              className="relative grid grid-cols-[7rem_1fr] md:grid-cols-[10rem_1fr] gap-6 md:gap-10 py-6 group"
            >
              <div className="text-right">
                <div className="font-serif text-2xl md:text-3xl font-light text-slate-50 tabular-nums">
                  {step.size}
                </div>
              </div>
              <div className="relative pl-8 md:pl-12">
                <span
                  className="absolute left-0 top-3 w-3 h-3 rounded-full bg-slate-900 border border-emerald-400/60 group-hover:bg-emerald-400 transition"
                  style={{
                    boxShadow: '0 0 0 4px rgba(2, 6, 23, 1)',
                  }}
                />
                <div className="text-xs uppercase tracking-[0.25em] text-emerald-300/70">
                  Step {String(idx + 1).padStart(2, '0')}
                </div>
                <div className="mt-1 font-serif text-2xl md:text-3xl text-slate-50 font-light">
                  {step.label}
                </div>
                <div className="mt-1 text-slate-400 font-light italic">{step.note}</div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}

export default Scale
