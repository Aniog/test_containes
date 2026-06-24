const scales = [
  {
    range: '1 m',
    label: 'Human',
    note: 'Reference scale — your body.',
    accent: 'bg-slate-300',
    width: 'w-full',
  },
  {
    range: '1 mm',
    label: 'Tardigrade',
    note: 'Visible only as a speck of dust.',
    accent: 'bg-fuchsia-400',
    width: 'w-3/4',
  },
  {
    range: '100 μm',
    label: 'Paramecium',
    note: 'A grain of fine sand. Single cell.',
    accent: 'bg-cyan-400',
    width: 'w-1/2',
  },
  {
    range: '10 μm',
    label: 'Red blood cell',
    note: 'Crosses a capillary in single file.',
    accent: 'bg-rose-400',
    width: 'w-1/3',
  },
  {
    range: '1 μm',
    label: 'Bacterium',
    note: 'E. coli, the workhorse of biology.',
    accent: 'bg-lime-400',
    width: 'w-1/4',
  },
  {
    range: '100 nm',
    label: 'Virus',
    note: 'Influenza, HIV, SARS-CoV-2.',
    accent: 'bg-purple-400',
    width: 'w-[15%]',
  },
  {
    range: '1 nm',
    label: 'DNA helix',
    note: 'The width of a single molecule.',
    accent: 'bg-amber-400',
    width: 'w-[6%]',
  },
]

export default function Scale() {
  return (
    <section
      id="scale"
      className="relative border-b border-white/5 bg-[#05060d] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-cyan-300">
            03 — Scale
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-50 md:text-5xl">
            How small is small?
          </h2>
          <p className="mt-5 text-base leading-relaxed text-slate-300 md:text-lg">
            Each step down the ladder is a tenfold drop in size. By the time you reach a
            virus, you've descended seven orders of magnitude from your own body.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-4xl space-y-3">
          {scales.map((s) => (
            <div
              key={s.label}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition hover:border-cyan-400/30 hover:bg-white/[0.05] md:p-6"
            >
              <div className="flex flex-wrap items-center gap-4">
                <span className="w-20 font-mono text-sm font-semibold text-cyan-300">
                  {s.range}
                </span>
                <span className="min-w-[8rem] flex-shrink-0 text-base font-semibold text-slate-100">
                  {s.label}
                </span>
                <span className="flex-1 text-sm text-slate-400">{s.note}</span>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
                <div
                  className={`h-full ${s.accent} ${s.width} rounded-full transition-all duration-500 group-hover:opacity-80`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
