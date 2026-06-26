import { Target, ShieldCheck, Layers, Headset } from 'lucide-react'
import { features } from '@/data/catalog'

const iconMap = { Target, ShieldCheck, Layers, Headset }

export default function Features() {
  return (
    <section id="features" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-600">
            Why ARTITECT
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Engineered to Perform, Built to Endure
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Every machine is the product of decades of metalworking experience
            and a relentless focus on reliability.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] || Target
            return (
              <div
                key={feature.id}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-7 transition-shadow hover:shadow-md"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500 text-slate-950">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
