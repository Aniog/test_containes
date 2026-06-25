import { BadgeCheck, CircleGauge, ShieldCheck } from 'lucide-react'
import { benefits } from '@/data/siteContent'

const icons = [BadgeCheck, CircleGauge, ShieldCheck]

export default function AdvantagesSection() {
  return (
    <section id="advantages" className="bg-white py-16 text-machine-900 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-brass-700">Why ARTITECT</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-machine-950 md:text-5xl">Elegant machinery, practical daily use.</h2>
          <p className="mt-5 text-base leading-7 text-machine-600 md:text-lg">
            The site experience is designed the same way the machines are presented: simple to understand, premium in feel, and focused on real workshop decisions.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = icons[index]
            return (
              <div key={benefit.title} className="rounded-[1.5rem] border border-steel-200 bg-steel-50 p-6 text-machine-900 shadow-soft">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-machine-950 text-brass-300">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-machine-950">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-machine-600">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
