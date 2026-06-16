import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Understand your material',
    text: 'We review sheet thickness, folding length, daily capacity, and final product requirements.',
  },
  {
    number: '02',
    title: 'Recommend the right folder',
    text: 'Our team matches your needs with a double folder, sheet metal folder, or metal folding machine.',
  },
  {
    number: '03',
    title: 'Support smooth delivery',
    text: 'You receive clear communication, practical setup guidance, and support for long-term operation.',
  },
]

const ServiceSection = () => {
  return (
    <section id="service" className="bg-artitect-panel px-5 py-24 text-artitect-ink sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="lg:sticky lg:top-8">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-artitect-brass-dark">Simple buying process</p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight text-artitect-ink sm:text-5xl">
              Clear guidance for every workshop and production line.
            </h2>
            <p className="mt-6 text-lg leading-8 text-artitect-steel">
              Whether you need a compact metal folder or a heavy-duty double folding machine, we make it easy to compare options and move forward confidently.
            </p>
            <a href="#contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-artitect-ink px-6 py-4 text-base font-semibold text-white shadow-soft transition hover:bg-artitect-brass-dark">
              Start a conversation
              <ArrowUpRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <div className="grid gap-5">
            {steps.map((step) => (
              <article key={step.number} className="grid gap-5 rounded-[2rem] border border-artitect-line bg-white p-7 text-artitect-ink shadow-soft sm:grid-cols-[96px_1fr]">
                <div className="font-display text-5xl font-semibold text-artitect-brass-dark">{step.number}</div>
                <div>
                  <h3 className="text-2xl font-bold text-artitect-ink">{step.title}</h3>
                  <p className="mt-3 leading-7 text-artitect-steel">{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
