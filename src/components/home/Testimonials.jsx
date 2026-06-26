import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Robert Whitfield',
    role: 'Production Manager',
    company: 'SteelPro Manufacturing',
    quote: 'The Double Folding Machine has transformed our production line. We have increased output by 40% while maintaining the precision our clients demand. The machine is reliable, intuitive, and the support team is outstanding.',
    rating: 5,
  },
  {
    name: 'Maria Chen',
    role: 'Operations Director',
    company: 'Pacific Metalworks',
    quote: 'We evaluated every major manufacturer before choosing ARTITECT. The Sheet Metal Folder exceeded our expectations in every way. The CNC controls are incredibly responsive and the build quality is exceptional.',
    rating: 5,
  },
  {
    name: 'James Kowalski',
    role: 'Owner',
    company: 'Kowalski Fabrication',
    quote: 'As a small workshop, the Metal Folder was the perfect investment. It fits our space, handles every material we throw at it, and has paid for itself within the first year. ARTITECT really understands fabricators.',
    rating: 5,
  },
  {
    name: 'Sarah Thompson',
    role: 'Chief Engineer',
    company: 'Nordic Precision AB',
    quote: 'The smart bend correction technology on the Enterprise Series is a game changer. We have virtually eliminated scrap from our sheet metal folding operations. The real-time monitoring gives us complete visibility.',
    rating: 5,
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const next = () => setActive((prev) => (prev + 1) % testimonials.length)
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  const t = testimonials[active]

  return (
    <section className="bg-light-gray py-20 lg:py-28">
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-amber text-xs font-semibold tracking-[0.15em] uppercase">
            Testimonials
          </span>
          <h2 className="text-charcoal font-bold text-3xl sm:text-4xl mt-3 mb-5">
            Trusted by Professionals
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg p-8 sm:p-12 shadow-[0_2px_20px_rgba(27,31,46,0.06)] border border-border relative">
            {/* Quote icon */}
            <div className="absolute -top-5 left-8 sm:left-12 w-10 h-10 bg-amber rounded-full flex items-center justify-center">
              <Quote className="w-5 h-5 text-charcoal" />
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6 mt-2">
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber text-amber" />
              ))}
            </div>

            {/* Quote text */}
            <blockquote className="text-steel text-base sm:text-lg leading-relaxed mb-8 italic">
              "{t.quote}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <p className="text-charcoal font-semibold text-base">{t.name}</p>
                <p className="text-muted text-sm">{t.role}, {t.company}</p>
              </div>

              {/* Navigation */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-slate hover:bg-amber hover:text-charcoal hover:border-amber transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-muted text-sm font-medium">
                  {active + 1} / {testimonials.length}
                </span>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-slate hover:bg-amber hover:text-charcoal hover:border-amber transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'bg-amber w-6' : 'bg-muted/30 hover:bg-muted/50'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
