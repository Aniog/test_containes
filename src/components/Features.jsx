import {
  Crosshair,
  Gauge,
  ShieldCheck,
  Headset,
  Wrench,
  Leaf,
} from 'lucide-react'
import { features } from '@/data/products'

const iconMap = {
  Crosshair,
  Gauge,
  ShieldCheck,
  Headset,
  Wrench,
  Leaf,
}

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-amber-600 font-semibold text-sm tracking-[0.2em] uppercase mb-3">
            Why ARTITECT
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Built for Performance and Reliability
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Every machine is designed around the realities of modern metal
            fabrication — accuracy, uptime, and ease of use.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = iconMap[feature.icon] ?? Crosshair
            return (
              <div
                key={feature.title}
                className="rounded-xl bg-slate-50 border border-slate-200 p-7 transition hover:shadow-md hover:bg-white"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-slate-900 text-amber-500">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
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
