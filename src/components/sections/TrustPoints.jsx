import { Shield, Languages, FileSearch, MapPin, HandCoins, Users } from 'lucide-react'

const POINTS = [
  {
    icon: MapPin,
    title: 'Boots on the ground',
    desc: 'Team based in Shenzhen with regular travel to factory hubs in Guangdong, Zhejiang, Fujian and Shandong.',
  },
  {
    icon: FileSearch,
    title: 'Documented process',
    desc: 'Every order has a written brief, supplier scorecard, inspection report and shipping file you can audit.',
  },
  {
    icon: Languages,
    title: 'Bilingual project lead',
    desc: 'A single bilingual contact handles factories, forwarders and you — no broken telephone.',
  },
  {
    icon: HandCoins,
    title: 'Transparent fees',
    desc: 'Flat or percentage-based fee disclosed upfront. We do not take hidden commissions from suppliers.',
  },
  {
    icon: Shield,
    title: 'Independent QC',
    desc: 'Our inspectors report to you, not the factory. AQL standards and photo evidence on every check.',
  },
  {
    icon: Users,
    title: 'Buyer-side advocacy',
    desc: 'When something goes wrong, we negotiate corrections, rework or refunds on your behalf — in Mandarin.',
  },
]

const STATS = [
  { value: '500+', label: 'Verified suppliers in our network' },
  { value: '30+', label: 'Buyer countries served' },
  { value: '120+', label: 'Factory audits per year' },
  { value: '< 24h', label: 'Average response time' },
]

export default function TrustPoints() {
  return (
    <section className="bg-slate-900 py-16 text-white md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue-300">Why buyers trust us</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">
            Built around buyer-side accountability
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 md:text-lg">
            We do not run a factory and we do not earn commissions from suppliers. Our incentive
            is the same as yours: get the right product, at the right quality, on time.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {POINTS.map((p) => {
            const Icon = p.icon
            return (
              <article key={p.title} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-blue-500/20 text-blue-300">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{p.desc}</p>
              </article>
            )
          })}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-xl border border-white/10 bg-white/5 p-6 text-center"
            >
              <div className="text-3xl font-bold text-white md:text-4xl">{s.value}</div>
              <div className="mt-2 text-xs font-medium text-slate-300 md:text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
