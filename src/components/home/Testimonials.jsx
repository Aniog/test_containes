import React from 'react'
import { Quote } from 'lucide-react'
import { testimonials } from '@/data/products'
import Stars from '@/components/Stars'
import Reveal from '@/components/Reveal'

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 md:px-10 md:py-28">
      <Reveal className="text-center">
        <p className="text-[11px] font-semibold uppercase tracking-widest3 text-gold">
          Kind Words
        </p>
        <h2 className="mt-4 font-serif text-4xl font-light text-ivory md:text-5xl">
          Treasured by <span className="italic text-goldlight">Thousands</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-3 md:gap-8">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 100}>
            <figure className="flex h-full flex-col border border-line/50 bg-coal p-8">
              <Quote className="h-5 w-5 text-gold" fill="currentColor" strokeWidth={0} />
              <Stars rating={5} className="mt-4" />
              <blockquote className="mt-4 flex-1 font-serif text-lg font-light leading-relaxed text-ivory">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-line/50 pt-4">
                <span className="text-xs font-semibold uppercase tracking-widest2 text-sand">
                  {t.name}
                </span>
                <span className="ml-2 text-[11px] tracking-wide text-taupe">· {t.location}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
