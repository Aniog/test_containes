import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "SSourcing China helped us find a reliable electronics supplier in Shenzhen. Their factory audit saved us from a potentially costly mistake, and the quality inspection process gave us full confidence in our first order.",
    name: 'James Mitchell',
    role: 'Operations Director',
    company: 'TechGear Inc., United States',
  },
  {
    quote: "We've worked with SSourcing for 3 years now. They manage our entire supply chain from sourcing to shipping. Consistent quality, transparent communication, and competitive pricing. Highly recommended.",
    name: 'Anna Becker',
    role: 'Procurement Manager',
    company: 'HomeStyle GmbH, Germany',
  },
  {
    quote: "Their production monitoring service is exceptional. Weekly photo updates, milestone reports, and proactive alerts about delays. We always know exactly where our orders stand.",
    name: 'David Thompson',
    role: 'Founder',
    company: 'Aussie Direct, Australia',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">Client Feedback</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-heading font-extrabold text-text">
            What Our Clients Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item) => (
            <div key={item.name} className="bg-surface-alt rounded-xl border border-border p-7">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                ))}
              </div>

              <blockquote className="text-text text-sm leading-relaxed mb-6">
                "{item.quote}"
              </blockquote>

              <div className="border-t border-border pt-4">
                <div className="font-heading font-bold text-sm text-text">{item.name}</div>
                <div className="text-text-muted text-xs">{item.role}</div>
                <div className="text-text-light text-xs">{item.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
