import React from 'react'
import { MessageSquare, Ruler, Settings, Truck, LifeBuoy } from 'lucide-react'
import Eyebrow from '@/components/ui/Eyebrow'
import { useReveal } from '@/lib/useReveal'

const STEPS = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Consult',
    body: 'Tell us your typical material, thickness, and batch profile. We respond within one business day.',
  },
  {
    icon: Ruler,
    step: '02',
    title: 'Specify',
    body: 'We match you to the right ARTITECT model and confirm tooling, control options, and footprint.',
  },
  {
    icon: Settings,
    step: '03',
    title: 'Build',
    body: 'Your machine is machined, welded, wired, and tested in Shanghai with weekly progress photos.',
  },
  {
    icon: Truck,
    step: '04',
    title: 'Deliver',
    body: 'Crate, ship, and install anywhere in the world — including on-site commissioning.',
  },
  {
    icon: LifeBuoy,
    step: '05',
    title: 'Support',
    body: 'Two-year warranty, lifetime remote diagnostics, and a 48-hour spare-parts guarantee.',
  },
]

const ProcessSection = () => {
  const headlineRef = useReveal()
  const gridRef = useReveal()

  return (
    <section id="process" className="bg-cream py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={headlineRef} className="reveal max-w-3xl">
          <Eyebrow>How we work</Eyebrow>
          <h2 id="process-title" className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
            From first call to <span className="italic text-copper-deep">first bend</span>, in five steps.
          </h2>
          <p id="process-subtitle" className="mt-6 text-base md:text-lg text-slate max-w-prose">
            Buying a folder should feel as engineered as the machine itself. Our process is
            transparent, time-stamped, and built around the rhythms of your shop.
          </p>
        </div>

        <div ref={gridRef} className="reveal mt-16 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {STEPS.map(({ icon: Icon, step, title, body }, i) => (
            <div
              key={step}
              className="relative bg-paper border border-line p-6 md:p-8 flex flex-col"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-6 w-6 text-copper stroke-[1.5]" />
                <span className="font-mono text-xs tracking-widest text-slate-soft">{step}</span>
              </div>
              <h3 className="mt-6 font-display text-xl">{title}</h3>
              <p className="mt-2 text-slate text-[14px] leading-relaxed flex-1">{body}</p>
              {i < STEPS.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 text-copper/40 select-none">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProcessSection
