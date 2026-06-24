const stops = [
  { label: 'Human eye limit', size: '~100 µm', detail: 'A human hair across' },
  { label: 'Paramecium', size: '~200 µm', detail: 'Swimming protist' },
  { label: 'Pollen grain', size: '~40 µm', detail: 'Plant code in a capsule' },
  { label: 'Red blood cell', size: '~7 µm', detail: 'Oxygen courier' },
  { label: 'E. coli', size: '~2 µm', detail: 'Common bacterium' },
  { label: 'Mycoplasma', size: '~0.3 µm', detail: 'Smallest free-living cell' },
  { label: 'Influenza virus', size: '~0.1 µm', detail: 'Not quite alive' },
]

export default function Scale() {
  return (
    <section id="scale" className="relative py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl">
          <p className="text-xs md:text-sm uppercase tracking-[0.25em] text-cyan-300/80">
            A sense of scale
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-bold tracking-tight text-slate-50">
            Smaller, smaller, still smaller.
          </h2>
          <p className="mt-4 text-base md:text-lg text-slate-300 leading-relaxed">
            Below the millimeter, everyday intuition stops working. Travel down the
            size scale, one factor of ten at a time.
          </p>
        </div>

        <div className="mt-14 relative rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900/70 to-slate-950/70 p-6 md:p-10 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl"
          />

          <ol className="relative grid gap-4 md:grid-cols-7 md:gap-2">
            {stops.map((s, i) => {
              const intensity = (stops.length - i) / stops.length
              return (
                <li
                  key={s.label}
                  className="relative rounded-2xl border border-white/10 bg-slate-900/60 p-5 hover:border-cyan-300/40 transition-colors"
                >
                  <div className="flex md:flex-col md:items-start items-center gap-4">
                    <span
                      aria-hidden="true"
                      className="rounded-full bg-cyan-300 shadow-[0_0_24px_-2px_rgba(34,211,238,0.8)]"
                      style={{
                        width: `${Math.max(8, intensity * 40)}px`,
                        height: `${Math.max(8, intensity * 40)}px`,
                        opacity: 0.4 + intensity * 0.6,
                      }}
                    />
                    <div className="flex-1">
                      <p className="text-xs uppercase tracking-widest text-cyan-300/80">
                        Stop {i + 1}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-slate-50">
                        {s.label}
                      </p>
                      <p className="text-xs text-slate-400 mt-0.5">{s.detail}</p>
                      <p className="mt-2 text-base font-bold text-slate-100 tabular-nums">
                        {s.size}
                      </p>
                    </div>
                  </div>
                </li>
              )
            })}
          </ol>

          <p className="mt-8 text-sm text-slate-400">
            One micrometer (µm) is a thousandth of a millimeter. Everything on this
            ruler lives, eats, and reproduces below the resolution of the unaided eye.
          </p>
        </div>
      </div>
    </section>
  )
}
