import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'The ARTITECT DF-3200 completely transformed our production line. We\'ve increased output by 40% while maintaining tighter tolerances than ever before.',
    author: 'Michael Torres',
    role: 'Production Manager',
    company: 'SteelCore Fabrication',
    location: 'Houston, TX',
  },
  {
    quote: 'We evaluated six different manufacturers before choosing ARTITECT. The build quality, precision, and after-sales support are simply unmatched in the industry.',
    author: 'Sarah Lindström',
    role: 'Operations Director',
    company: 'Nordic Metalworks',
    location: 'Gothenburg, Sweden',
  },
  {
    quote: 'After 18 months of heavy daily use, our SF-4000 sheet metal folder still performs like new. The ROI paid for itself within the first quarter.',
    author: 'David Chen',
    role: 'Workshop Owner',
    company: 'Pacific Edge Manufacturing',
    location: 'Melbourne, Australia',
  },
]

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-white">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-brand-500 text-sm font-semibold tracking-[0.25em] uppercase block mb-4">
            Client Testimonials
          </span>
          <h2 className="text-headline md:text-5xl text-charcoal-950 mb-5 text-balance">
            Trusted by Professionals
          </h2>
          <div className="divider-gold mx-auto" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="relative p-8 bg-steel-50 border border-steel-100 group hover:border-brand-200 transition-all duration-500"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-brand-200" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-brand-400 fill-brand-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-charcoal-700 text-sm leading-relaxed mb-8">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-steel-200">
                <div className="w-12 h-12 bg-brand-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-brand-600 font-bold text-lg">
                    {t.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-charcoal-950 text-sm font-semibold">{t.author}</p>
                  <p className="text-charcoal-500 text-xs">{t.role}, {t.company}</p>
                  <p className="text-charcoal-400 text-xs">{t.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
