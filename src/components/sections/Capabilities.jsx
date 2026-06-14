import React from 'react'
import { Cog, Ruler, Settings2, ShieldCheck, Sparkles, Wrench } from 'lucide-react'

const CAPABILITIES = [
  {
    icon: Ruler,
    title: '0.05° repeatability',
    body: 'Closed-loop angle measurement verifies every bend. Off-target folds trigger an automatic re-pass — no scrap, no rework.',
  },
  {
    icon: Cog,
    title: 'Cast iron architecture',
    body: 'Every bed is hand-scraped in our Pennsylvania shop. The mass dampens vibration, so angles stay true at high cycle rates.',
  },
  {
    icon: Settings2,
    title: 'Adaptive CNC control',
    body: 'A single HMI runs manual jog, semi-automatic sequences, and lights-out production with 200+ saved recipes.',
  },
  {
    icon: ShieldCheck,
    title: 'CE & ISO certified',
    body: 'ISO 9001:2015 manufacturing, CE marked controls, and a 12-month full-machine warranty as standard.',
  },
  {
    icon: Wrench,
    title: 'On-site commissioning',
    body: 'A field engineer travels with every industrial install. We train your operators until the first part is in spec.',
  },
  {
    icon: Sparkles,
    title: 'Bend-shop software',
    body: 'Export DXF, import bend tables, push jobs over the network. Our software talks to the CAM tools you already use.',
  },
]

const Capabilities = () => {
  return (
    <section id="capabilities" className="bg-surface border-y border-line py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-3xl">
          <p className="eyebrow">Capabilities</p>
          <h2 className="mt-4 font-display text-3xl md:text-5xl text-ink leading-[1.1] tracking-tight text-balance">
            Engineered details, not marketing flourishes.
          </h2>
          <p className="mt-5 text-[15px] md:text-base text-muted leading-relaxed">
            The difference between a folder and a finishing tool is what
            you can't see: scraping marks on the bed, the way the beam
            seats, the controller's response curve. We obsess over those
            details so your operators don't have to.
          </p>
        </div>

        <div className="mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-line rounded-2xl overflow-hidden border border-line">
          {CAPABILITIES.map((c) => {
            const Icon = c.icon
            return (
              <div
                key={c.title}
                className="bg-surface p-7 md:p-9 hover:bg-bg/60 transition-colors"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent-strong">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl text-ink">
                  {c.title}
                </h3>
                <p className="mt-2.5 text-[15px] text-muted leading-relaxed">
                  {c.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Capabilities
