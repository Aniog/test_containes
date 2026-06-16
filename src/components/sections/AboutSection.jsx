import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { CheckCircle2, Sparkles, Factory, Gauge } from 'lucide-react'
import Eyebrow from '@/components/ui/Eyebrow'
import { useReveal } from '@/lib/useReveal'
import strkImgConfig from '@/strk-img-config.json'

const PILLARS = [
  {
    icon: Sparkles,
    title: 'Engineered precision',
    body: 'Every hinge, beam, and clamp is CNC-machined and inspected to keep fold angles consistent over millions of cycles.',
  },
  {
    icon: Factory,
    title: 'In-house production',
    body: 'From castings to electrical cabinets, every component is sourced, welded, and assembled in our Shanghai facility.',
  },
  {
    icon: Gauge,
    title: 'Operator-first design',
    body: 'Intuitive HMI controls, one-touch clamping, and tool-free adjustments make expert-quality bends achievable in minutes.',
  },
]

const AboutSection = () => {
  const containerRef = useRef(null)
  const revealRef = useReveal()
  const reveal2Ref = useReveal()

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="about" ref={containerRef} className="bg-bone py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div ref={revealRef} className="reveal lg:col-span-6">
            <Eyebrow>About ARTITECT</Eyebrow>
            <h2 id="about-title" className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
              A heritage of <span className="italic text-copper-deep">folding</span> excellence.
            </h2>
            <p id="about-subtitle" className="mt-6 text-base md:text-lg text-slate leading-relaxed max-w-prose">
              For nearly two decades, ARTITECT MACHINERY has equipped sheet metal workshops,
              automotive suppliers, and architectural fabricators with folding systems that
              quietly outperform their price point. We design every machine to be calibrated
              once, then trusted for years.
            </p>

            <ul className="mt-8 space-y-4">
              {[
                'Cast-iron frames stress-relieved to prevent long-term warping',
                'Servo-driven beam motion for silent, energy-efficient folding',
                'Universal tooling compatible with mild steel, stainless, and aluminium',
                'CE, ISO 9001, and UL certified production lines',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate">
                  <CheckCircle2 className="h-5 w-5 text-copper mt-0.5 shrink-0" />
                  <span className="text-base md:text-[17px]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div ref={reveal2Ref} className="reveal lg:col-span-6">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden bg-cream border border-line">
                <img
                  alt="ARTITECT machinery operator inspecting a folded sheet metal panel"
                  data-strk-img-id="about-portrait-2e7b41"
                  data-strk-img="[about-subtitle] [about-title]"
                  data-strk-img-ratio="4x5"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -left-6 bg-ink text-cream p-6 md:p-8 max-w-[260px] shadow-card-hover">
                <div className="text-copper-bright text-xs uppercase tracking-eyebrow mb-2">
                  In service since
                </div>
                <div className="font-display text-4xl">2008</div>
                <div className="text-cream/70 text-sm mt-1">
                  Two decades of refinement, one obsession: the perfect bend.
                </div>
              </div>

              <div className="absolute -top-4 -right-4 h-12 w-12 border border-copper/60 hidden md:block" />
            </div>
          </div>
        </div>

        <div className="mt-24 md:mt-32 grid md:grid-cols-3 gap-8">
          {PILLARS.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="bg-cream border border-line p-8 md:p-10 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              <Icon className="h-7 w-7 text-copper" strokeWidth={1.5} />
              <h3 className="mt-6 font-display text-xl md:text-2xl">{title}</h3>
              <p className="mt-3 text-slate text-[15px] leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection
