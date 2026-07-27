import { ShieldCheck, Users, MapPin, Clock, Award, TrendingUp } from 'lucide-react'

const stats = [
  { icon: Users, value: '500+', label: 'Buyers Served' },
  { icon: MapPin, value: '30+', label: 'Countries' },
  { icon: ShieldCheck, value: '2,000+', label: 'Factories Verified' },
  { icon: Clock, value: '10+', label: 'Years Experience' },
  { icon: Award, value: '98%', label: 'Client Satisfaction' },
  { icon: TrendingUp, value: '$50M+', label: 'Products Sourced' },
]

export default function TrustSection() {
  return (
    <section className="section-padding bg-primary">
      <div className="container-main">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-slate-300">
            Why Buyers Trust Us
          </span>
          <h2 className="mt-3 text-3xl font-bold text-white md:text-4xl">
            Numbers That Speak for Themselves
          </h2>
          <p className="mt-4 text-slate-300">
            A decade of on-the-ground experience building relationships with reliable manufacturers across China.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-lg bg-white/5 p-6 text-center backdrop-blur-sm transition hover:bg-white/10"
            >
              <div className="mx-auto mb-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="text-3xl font-extrabold text-white">{s.value}</div>
              <div className="mt-1 text-sm text-slate-300">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
