const metrics = [
  { value: '3', label: 'Core machinery categories' },
  { value: '24/7', label: 'Production-minded reliability' },
  { value: '100%', label: 'Focused on metal folding' },
]

const advantages = [
  'Clear guidance for choosing a double folder or metal folding machine.',
  'Elegant product presentation that makes technical buying easier.',
  'Responsive support path for quotes, specifications, and consultation.',
  'Premium industrial identity built around precision and durability.',
]

export default function AdvantagesSection() {
  return (
    <section id="advantages" className="bg-white py-20 text-slate-950 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-2xl shadow-slate-900/20 lg:p-10">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-amber-300">Why ARTITECT</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight text-white sm:text-5xl">
              A premium brand experience for serious machinery buyers.
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The site is designed to feel refined and easy to navigate, while keeping the focus on practical value: folding accuracy, dependable construction, and direct quote requests.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 text-white">
                  <p className="text-3xl font-black text-amber-300">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4">
            {advantages.map((advantage) => (
              <div key={advantage} className="rounded-3xl border border-slate-200 bg-stone-50 p-6 text-slate-950 shadow-sm">
                <p className="text-lg font-bold leading-8 text-slate-900">{advantage}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
