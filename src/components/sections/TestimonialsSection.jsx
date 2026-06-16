import React from 'react'
import { Quote } from 'lucide-react'
import Eyebrow from '@/components/ui/Eyebrow'
import { useReveal } from '@/lib/useReveal'

const TESTIMONIALS = [
  {
    quote:
      'Our AM-DF 320 has run three shifts a day for five years. The only service we have needed is preventive maintenance.',
    name: 'Lukas Brandt',
    role: 'Production Manager',
    company: 'Brandt Metallbau GmbH',
    location: 'Stuttgart, Germany',
  },
  {
    quote:
      'The repeatability is the standout. We quote jobs against angle tolerances that other vendors said were impossible.',
    name: 'Sofia Marín',
    role: 'Founder',
    company: 'Marín Architectural Metals',
    location: 'Barcelona, Spain',
  },
  {
    quote:
      'From spec sheet to commissioning took eleven weeks. The remote diagnostics have already saved us a service trip.',
    name: 'Daniel Okafor',
    role: 'Operations Director',
    company: 'Okafor Sheet Metal Ltd',
    location: 'Lagos, Nigeria',
  },
]

const TestimonialsSection = () => {
  const headlineRef = useReveal()
  const gridRef = useReveal()

  return (
    <section className="bg-bone py-24 md:py-32 border-t border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div ref={headlineRef} className="reveal max-w-3xl">
          <Eyebrow>Field Stories</Eyebrow>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-6xl leading-tight">
            What our customers <span className="italic text-copper-deep">say.</span>
          </h2>
        </div>

        <div ref={gridRef} className="reveal mt-16 grid md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="bg-cream border border-line p-8 md:p-10 flex flex-col hover:shadow-card-hover transition-shadow duration-300"
            >
              <Quote className="h-8 w-8 text-copper stroke-[1.5]" />
              <blockquote className="mt-6 font-display text-lg md:text-xl text-ink leading-snug">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-8 pt-6 border-t border-line">
                <div className="font-display text-lg text-ink">{t.name}</div>
                <div className="text-sm text-slate">{t.role}, {t.company}</div>
                <div className="text-xs uppercase tracking-eyebrow text-copper mt-1">
                  {t.location}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
