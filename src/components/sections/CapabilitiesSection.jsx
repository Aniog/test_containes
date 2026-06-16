import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { Cpu, Ruler, ShieldCheck, Zap, Settings, Layers } from 'lucide-react'
import Eyebrow from '@/components/ui/Eyebrow'
import { useReveal } from '@/lib/useReveal'
import strkImgConfig from '@/strk-img-config.json'

const CAPABILITIES = [
  {
    icon: Cpu,
    title: 'Adaptive CNC control',
    body: 'A purpose-built HMI lets operators store recipes, mirror parts, and recall last-good settings in two taps.',
  },
  {
    icon: Ruler,
    title: 'Repeatable to ±0.05 mm',
    body: 'Linear encoders and laser-calibrated backgauges hold tolerance across thousands of cycles.',
  },
  {
    icon: ShieldCheck,
    title: 'Safety-first architecture',
    body: 'Light curtains, dual-channel E-stops, and CE-rated guarding are standard on every model.',
  },
  {
    icon: Zap,
    title: 'Servo efficiency',
    body: 'Servo-electric actuation slashes energy use by up to 60% compared with hydraulic folders.',
  },
  {
    icon: Settings,
    title: 'Universal tool holders',
    body: 'Quick-change segmented tooling accepts V-openings from 8 mm to 60 mm without re-rigging.',
  },
  {
    icon: Layers,
    title: 'Mixed-material fluency',
    body: 'Folds mild steel, stainless, galvanised, aluminium, and copper with the same repeatable angle.',
  },
]

const CapabilitiesSection = () => {
  const containerRef = useRef(null)
  const headlineRef = useReveal()
  const gridRef = useReveal()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section
      id="capabilities"
      ref={containerRef}
      className="relative bg-ink py-24 md:py-32 text-cream overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-25"
        data-strk-bg-id="capabilities-bg-6a91d2"
        data-strk-bg="[capabilities-subtitle] [capabilities-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/95 to-ink" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={headlineRef} className="reveal max-w-3xl">
          <Eyebrow tone="copper-bright">Capabilities</Eyebrow>
          <h2
            id="capabilities-title"
            className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl text-cream leading-tight"
          >
            Quiet engineering,<br />
            <span className="italic text-copper-bright">measurable results.</span>
          </h2>
          <p
            id="capabilities-subtitle"
            className="mt-6 text-cream/70 text-base md:text-lg max-w-prose leading-relaxed"
          >
            Every ARTITECT machine is a closed loop of sensors, software, and steel — built
            to give fabricators fewer surprises and more reliable bends, day after day.
          </p>
        </div>

        <div ref={gridRef} className="reveal mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-copper/20">
          {CAPABILITIES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-ink p-8 md:p-10 group hover:bg-ink-soft transition-colors"
            >
              <Icon className="h-7 w-7 text-copper-bright stroke-[1.5]" />
              <h3 className="mt-6 font-display text-xl md:text-2xl text-cream">{title}</h3>
              <p className="mt-3 text-cream/70 text-[15px] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-4 gap-px bg-copper/20">
          {[
            { value: '0.05', unit: 'mm', label: 'Folding tolerance' },
            { value: '60', unit: '%', label: 'Energy reduction vs hydraulic' },
            { value: '12', unit: 'kW', label: 'Peak servo output' },
            { value: '7', unit: 'models', label: 'Across the product family' },
          ].map((stat) => (
            <div key={stat.label} className="bg-ink p-8">
              <div className="flex items-baseline gap-1.5">
                <span className="font-display text-5xl text-copper-bright tabular-nums">
                  {stat.value}
                </span>
                <span className="font-mono text-sm text-cream/60">{stat.unit}</span>
              </div>
              <div className="mt-2 text-sm text-cream/60 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CapabilitiesSection
