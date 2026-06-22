import { Atom, Globe, Droplets, Dna } from 'lucide-react'

const stats = [
  {
    icon: Globe,
    value: '5×10³⁰',
    label: 'Bacteria estimated to live on Earth',
    color: 'text-cyan-400',
  },
  {
    icon: Droplets,
    value: '1,000+',
    label: 'Species in a single drop of pond water',
    color: 'text-emerald-400',
  },
  {
    icon: Atom,
    value: '0.0002 mm',
    label: 'Smallest known free-living bacterium',
    color: 'text-amber-400',
  },
  {
    icon: Dna,
    value: '40%',
    label: 'Of your body cells are microbial',
    color: 'text-rose-400',
  },
]

export default function Stats() {
  return (
    <section className="relative py-20 md:py-24 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.label}
                className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6 md:p-8 hover:border-slate-700 transition-colors"
              >
                <Icon className={`w-7 h-7 ${s.color}`} />
                <div className="mt-5 text-3xl md:text-4xl font-extrabold text-slate-50 tracking-tight">
                  {s.value}
                </div>
                <div className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {s.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
