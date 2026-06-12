import { MapPin, Languages, ShieldCheck, FileCheck2, Users, Clock } from 'lucide-react'

const points = [
  {
    icon: MapPin,
    title: 'Based in China',
    desc: 'Offices in Yiwu and Shenzhen with field visits across Guangdong, Zhejiang and Fujian manufacturing clusters.',
  },
  {
    icon: ShieldCheck,
    title: 'Independent agent',
    desc: 'We work for the buyer, not the factory. No kickbacks, no hidden commissions. Service fees are agreed upfront.',
  },
  {
    icon: Languages,
    title: 'English-speaking team',
    desc: 'Dedicated project manager handles supplier communication, paperwork and time-zone coordination on your behalf.',
  },
  {
    icon: FileCheck2,
    title: 'Documented process',
    desc: 'Quotes, audit reports, inspection reports and shipping documents — all delivered in writing, all archived.',
  },
  {
    icon: Users,
    title: 'B2B focused',
    desc: 'We work with importers, brands, distributors and Amazon FBA sellers. Order sizes typically from USD 5K to 500K+.',
  },
  {
    icon: Clock,
    title: 'Reply within 1 business day',
    desc: 'You always have a clear point of contact and a clear timeline. No silent weeks.',
  },
]

export default function TrustSection() {
  return (
    <section className="bg-brand-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <p className="text-xs uppercase tracking-[0.18em] font-semibold text-amber-300">
              Why buyers work with us
            </p>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-white">
              A practical, transparent sourcing partner
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              We don&apos;t make exaggerated claims. We focus on doing the basics well —
              verifying suppliers, controlling quality and shipping on time.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-4">
              <div>
                <p className="text-3xl font-bold text-white">10+</p>
                <p className="text-xs text-slate-300 mt-1">years sourcing in China</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">300+</p>
                <p className="text-xs text-slate-300 mt-1">verified factories in network</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">25+</p>
                <p className="text-xs text-slate-300 mt-1">countries shipped to</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((p) => {
                const Icon = p.icon
                return (
                  <div
                    key={p.title}
                    className="rounded-xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-amber-400/20 text-amber-300">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </span>
                    <h3 className="mt-4 text-base font-semibold text-white">{p.title}</h3>
                    <p className="mt-2 text-sm text-slate-300 leading-relaxed">{p.desc}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
