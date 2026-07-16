import { Star } from 'lucide-react'
import { testimonials } from '@/data/products'
import useScrollReveal from '@/hooks/useScrollReveal'

export default function Testimonials() {
  const sectionRef = useScrollReveal([])

  return (
    <section ref={sectionRef} className="py-16 md:py-24">
      <div className="max-w-screen-2xl mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <p className="section-subtitle" data-reveal>Hear from Our Community</p>
          <h2 className="section-title mt-2" data-reveal>Loved by Thousands</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              data-reveal
              style={{ transitionDelay: `${i * 120}ms` }}
              className="p-6 md:p-8 bg-warm-50 rounded-sm border border-midnight-100/60"
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5 mb-4">
                {Array.from({ length: t.rating }, (_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-brand-500 text-brand-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="font-serif text-base md:text-lg text-midnight-800 leading-relaxed italic">
                &ldquo;{t.text}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="mt-5 pt-4 border-t border-midnight-200/60">
                <p className="font-sans text-sm font-medium text-midnight-950">
                  {t.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}