import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle2, MessageSquareReply, Banknote, FileSearch } from 'lucide-react'
import SectionHeader from '@/components/SectionHeader'
import CTABand from '@/components/CTABand'
import { PROCESS_STEPS } from '@/data/content'

const ASSURANCES = [
  {
    icon: MessageSquareReply,
    title: 'Reply within one business day',
    desc: 'Every inquiry gets a considered answer from a sourcing specialist — not an auto-reply.',
  },
  {
    icon: Banknote,
    title: 'You pay factories directly',
    desc: 'We never hold your funds. The standard 30/70 structure keeps your leverage until inspection passes.',
  },
  {
    icon: FileSearch,
    title: 'Evidence at every step',
    desc: 'Quotations, audit reports, inspection photos and shipping documents — everything is documented.',
  },
]

function PageHero() {
  return (
    <section className="bg-ink py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-accent">How It Works</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white md:text-5xl">
          From first inquiry to final delivery, step by step
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-300">
          A first order typically takes 2–3 months end to end. Here is exactly what
          happens at each stage, what we do, and what you receive.
        </p>
      </div>
    </section>
  )
}

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      if (containerRef.current) {
        ImageHelper.loadImages(strkImgConfig, containerRef.current)
      }
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ol className="relative space-y-10 border-l-2 border-line pl-8 md:pl-12">
            {PROCESS_STEPS.map((step) => (
              <li key={step.id} className="relative">
                <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full bg-brand text-xs font-bold text-white md:-left-[57px] md:h-8 md:w-8 md:text-sm">
                  {step.step}
                </span>
                <div className="rounded-xl border border-line bg-paper p-6 md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h2 className="text-xl font-bold text-ink md:text-2xl">{step.title}</h2>
                    <span className="rounded-full bg-brand-light px-3 py-1 text-xs font-semibold text-brand">
                      {step.duration}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                    {step.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="bg-paper py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Working With Us"
            title="Three things that never change"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {ASSURANCES.map((item) => (
              <div key={item.title} className="rounded-xl border border-line bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-brand-light">
                  <item.icon className="h-5 w-5 text-brand" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-3xl rounded-xl border border-line bg-white p-6 md:p-8">
            <h3 className="text-lg font-semibold text-ink">What we need from you to start</h3>
            <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {[
                'Product description or spec sheet',
                'Reference links or photos if available',
                'Target price and estimated quantity',
                'Destination country and deadline',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CTABand />
    </div>
  )
}
