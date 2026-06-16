import {
  Crosshair,
  Shield,
  Monitor,
  LifeBuoy,
  Layers,
  ShieldCheck,
} from 'lucide-react'
import { capabilities } from '@/data/catalog'

const iconMap = {
  Crosshair,
  Shield,
  Monitor,
  LifeBuoy,
  Layers,
  ShieldCheck,
}

export default function Capabilities() {
  return (
    <section
      className="relative isolate overflow-hidden bg-ink py-24 text-white md:py-32"
      aria-labelledby="capabilities-title"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid opacity-15" />

      <div className="container-page">
        <div className="max-w-2xl">
          <p
            id="capabilities-eyebrow"
            className="eyebrow eyebrow-line text-brass"
          >
            <span>Built into every machine</span>
          </p>
          <h2
            id="capabilities-title"
            className="mt-4 text-balance text-4xl font-semibold leading-tight tracking-tight md:text-5xl"
          >
            Six things that set an ARTITECT folder apart.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-steel">
            We engineer every detail of the machine — from the steel we cast
            in our own foundry to the firmware that runs the HMI. The result is
            a folder that holds its tolerance for decades, not months.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap) => {
            const Icon = iconMap[cap.icon] || Crosshair
            return (
              <div
                key={cap.id}
                className="flex flex-col gap-4 bg-ink-2 p-8 transition-colors hover:bg-ink-3 md:p-10"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-brass/30 bg-ink-3 text-brass">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-semibold tracking-tight text-white">
                  {cap.title}
                </h3>
                <p className="text-sm leading-relaxed text-steel">
                  {cap.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
