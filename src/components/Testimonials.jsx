import { useScrollAnimation } from '../lib/useScrollAnimation'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Klaus Richter',
    role: 'Production Manager',
    company: 'Stahlbau München GmbH',
    country: 'Germany',
    text: 'The AF-4000 double folder has transformed our production line. We\'ve increased output by 40% while maintaining the precision our clients demand. The machine has been running flawlessly for three years now.',
    rating: 5,
  },
  {
    name: 'James Whitfield',
    role: 'Owner',
    company: 'Whitfield Metalworks',
    country: 'United Kingdom',
    text: 'We switched to the SM-2000 sheet metal folder after years with another brand. The difference is night and day — setup time is halved, and the bends are consistently accurate. Outstanding build quality.',
    rating: 5,
  },
  {
    name: 'Chen Wei',
    role: 'Chief Engineer',
    company: 'Dongfang Fabrication Co.',
    country: 'China',
    text: 'The MF-6000 handles our 8mm stainless steel plates with ease. ARTITECT\'s after-sales support is equally impressive — their team resolved a configuration question within hours. Highly recommended.',
    rating: 5,
  },
]

function TestimonialCard({ testimonial, index }) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`bg-white rounded-xl p-6 lg:p-8 border border-brand-border/50 relative ${
        isVisible ? 'animate-slide-up opacity-100' : 'opacity-0'
      }`}
      style={{ animationDelay: `${index * 150}ms` }}
    >
      {/* Quote icon */}
      <div className="absolute top-6 right-6 opacity-10">
        <Quote size={48} className="text-brand-accent" />
      </div>

      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-brand-accent text-brand-accent" />
        ))}
      </div>

      {/* Quote text */}
      <p className="text-brand-dark/80 text-sm leading-relaxed mb-6">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-brand-border/50">
        <div className="w-10 h-10 rounded-full bg-brand-accent/10 flex items-center justify-center">
          <span className="font-heading text-brand-accent font-bold text-sm">
            {testimonial.name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <div>
          <p className="text-brand-dark text-sm font-semibold">{testimonial.name}</p>
          <p className="text-brand-muted text-xs">
            {testimonial.role}, {testimonial.company} — {testimonial.country}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation()

  return (
    <section className="py-20 lg:py-28 bg-brand-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 ${
            headerVisible ? 'animate-slide-up' : 'opacity-0'
          }`}
        >
          <p className="text-brand-accent text-xs font-medium tracking-[0.3em] uppercase mb-4">
            Client Testimonials
          </p>
          <h2 className="font-heading text-3xl lg:text-5xl font-bold text-brand-dark mb-6">
            Trusted by{' '}
            <span className="text-brand-accent">Professionals</span>
            {' '}Worldwide
          </h2>
          <p className="text-brand-muted text-lg leading-relaxed">
            Hear from fabricators and production managers who rely on ARTITECT machines every day.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
