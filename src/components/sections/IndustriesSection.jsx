import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Wind, Car, Plane, Building2, UtensilsCrossed, Plug } from 'lucide-react'
import Eyebrow from '@/components/ui/Eyebrow'
import { useReveal } from '@/lib/useReveal'
import strkImgConfig from '@/strk-img-config.json'

const INDUSTRIES = [
  {
    icon: Wind,
    title: 'HVAC & ductwork',
    body: 'Tight-radius folds for rectangular ducting, plenums, and architectural louvers.',
  },
  {
    icon: Car,
    title: 'Automotive',
    body: 'Body panels, brackets, and battery enclosures for EV and Tier-1 suppliers.',
  },
  {
    icon: Plane,
    title: 'Aerospace',
    body: 'Lightweight aluminium skins and avionics bay components with traceable bends.',
  },
  {
    icon: Building2,
    title: 'Architecture',
    body: 'Façade cladding, column covers, and bespoke interior metalwork.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Commercial kitchens',
    body: 'Stainless steel countertops, sinks, and ventilation hoods.',
  },
  {
    icon: Plug,
    title: 'Electrical enclosures',
    body: 'Cabinets, panels, and switchgear housings built to IP standards.',
  },
]

const IndustriesSection = () => {
  const containerRef = useRef(null)
  const headlineRef = useReveal()
  const gridRef = useReveal()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="industries" ref={containerRef} className="bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={headlineRef} className="reveal max-w-3xl">
          <Eyebrow>Industries Served</Eyebrow>
          <h2 id="industries-title" className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
            Trusted by fabricators across <span className="italic text-copper-deep">six continents.</span>
          </h2>
          <p id="industries-subtitle" className="mt-6 text-base md:text-lg text-slate max-w-prose">
            From family-owned workshops in Europe to Tier-1 suppliers in North America, our
            machines are engineered for the specific tolerances and rhythms of every
            industry we serve.
          </p>
        </div>

        <div ref={gridRef} className="reveal mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map(({ icon: Icon, title, body }, i) => (
            <div
              key={title}
              className="group bg-cream border border-line p-8 md:p-10 hover:bg-paper hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <Icon className="h-7 w-7 text-copper stroke-[1.5]" />
                <span className="font-mono text-[11px] text-slate-soft tracking-widest">
                  0{i + 1}
                </span>
              </div>
              <h3 className="mt-6 font-display text-xl md:text-2xl">{title}</h3>
              <p className="mt-3 text-slate text-[15px] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default IndustriesSection
