import React from 'react'
import { ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'

export default function CTASection() {
  return (
    <section className="bg-slate-950 px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-amber-300">Ready to source from China?</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">Send your product brief and receive a practical sourcing quote.</h2>
          <p className="mt-4 text-base leading-7 text-slate-300">Share product specifications, order quantity, destination country, and your current sourcing stage. We will help define the next steps clearly.</p>
        </div>
        <Button href="/contact" variant="light" className="shrink-0 gap-2">Get a Free Sourcing Quote <ArrowRight className="h-4 w-4" /></Button>
      </div>
    </section>
  )
}
