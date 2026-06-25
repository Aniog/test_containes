const scales = [
  { label: 'Human hair', size: '80,000 nm', percent: 100, color: 'from-slate-300 to-slate-100' },
  { label: 'Red blood cell', size: '7,000 nm', percent: 70, color: 'from-rose-300 to-pink-400' },
  { label: 'Bacterium', size: '2,000 nm', percent: 45, color: 'from-cyan-300 to-sky-400' },
  { label: 'Mitochondrion', size: '1,000 nm', percent: 30, color: 'from-emerald-300 to-lime-300' },
  { label: 'Virus', size: '100 nm', percent: 15, color: 'from-violet-300 to-fuchsia-400' },
  { label: 'Protein', size: '10 nm', percent: 6, color: 'from-amber-300 to-orange-400' },
  { label: 'Atom', size: '0.3 nm', percent: 2, color: 'from-indigo-300 to-blue-400' },
]

export default function Scale() {
  return (
    <section id="scale" className="relative py-24 md:py-32 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-300/80 mb-4">
            03 — Scale
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-slate-50 leading-tight">
            How small is small?
          </h2>
          <p className="mt-6 text-slate-300 text-lg leading-relaxed">
            The microcosmos isn’t one size — it stretches across five orders of
            magnitude. Here is what fits inside the width of a single strand of
            human hair.
          </p>
        </div>

        <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
          <ul className="space-y-6">
            {scales.map((item) => (
              <li key={item.label} className="grid grid-cols-12 items-center gap-4">
                <span className="col-span-4 md:col-span-3 font-serif text-slate-100 text-lg">
                  {item.label}
                </span>
                <div className="col-span-5 md:col-span-7 h-3 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${item.color}`}
                    style={{ width: `${item.percent}%` }}
                  />
                </div>
                <span className="col-span-3 md:col-span-2 text-right font-mono text-sm text-slate-300">
                  {item.size}
                </span>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm text-slate-400 font-mono">
            * Scale shown on a logarithmic curve for legibility. 1 nm = one billionth of a metre.
          </p>
        </div>
      </div>
    </section>
  )
}
