import { Settings2, Cpu, Wrench, ShieldCheck } from 'lucide-react'
import { PILLARS, CAPABILITIES } from '@/data/site'

const ICONS = {
  precision: Settings2,
  controls: Cpu,
  support: Wrench,
  uptime: ShieldCheck,
}

export default function Engineering() {
  return (
    <section id="engineering" className="bg-ink-900 text-ink-50 py-20 md:py-28 lg:py-32">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-32 h-32 bg-gradient-to-b from-ink-50 to-ink-900"
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="eyebrow text-copper-500">Engineering principles</p>
            <h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-light text-ink-50 tracking-tight">
              The principles we
              <br />
              won't compromise on.
            </h2>
            <p className="mt-6 text-base lg:text-lg text-ink-50/70 leading-relaxed">
              Four commitments shape every machine that leaves the ARTITECT
              plant. They are not slogans — they are written into our
              engineering drawings and our service contracts.
            </p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-px bg-line-dark rounded-md overflow-hidden border border-line-dark">
            {PILLARS.map((pillar) => {
              const Icon = ICONS[pillar.id] || Settings2
              return (
                <div
                  key={pillar.id}
                  className="bg-ink-900 p-7 lg:p-8 flex flex-col"
                >
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center justify-center w-11 h-11 rounded-md bg-ink-800 text-copper-500 mb-5"
                  >
                    <Icon className="w-5 h-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="text-lg font-semibold text-ink-50">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm text-ink-50/70 leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Spec band */}
        <div className="mt-20 lg:mt-28 border-t border-line-dark pt-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="eyebrow text-copper-500">Technical envelope</p>
              <h3 className="mt-3 text-2xl md:text-3xl font-light text-ink-50">
                Specifications at a glance
              </h3>
            </div>
            <a
              href="#contact"
              className="text-sm font-semibold text-copper-500 hover:text-copper-200 transition-colors"
            >
              Request the full catalogue →
            </a>
          </div>

          <dl className="grid grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 lg:gap-y-10">
            {CAPABILITIES.map((cap) => (
              <div
                key={cap.label}
                className="border-t border-line-dark pt-5"
              >
                <dt className="text-xs uppercase tracking-widest-2 text-ink-50/50">
                  {cap.label}
                </dt>
                <dd className="mt-2 font-display text-2xl lg:text-3xl text-ink-50">
                  {cap.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
