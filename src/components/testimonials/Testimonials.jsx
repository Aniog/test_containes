import { Quote } from 'lucide-react'

const testimonials = [
  {
    quote: 'The DF-2000 Pro has completely transformed our production line. We went from 200 to 350 parts per shift with zero quality issues. The precision is outstanding.',
    author: 'Michael Chen',
    role: 'Production Manager',
    company: 'Pacific Steel Fabrication',
  },
  {
    quote: 'We evaluated five different brands before choosing ARTITECT. The build quality, ease of use, and after-sales support set them apart. Our MF-2500 has been running three years without a single breakdown.',
    author: 'Sarah Lindström',
    role: 'Operations Director',
    company: 'Nordic Metalworks',
  },
  {
    quote: 'The SF-1300 Compact is perfect for our workshop. Setup takes minutes, not hours, and the accuracy is on par with machines twice its size. Exceptional value.',
    author: 'James Okafor',
    role: 'Owner',
    company: 'Precision Sheet Works',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-surface py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-accent font-semibold text-sm tracking-widest uppercase mb-3 block">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal">
            What Our Customers Say
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-md p-6 md:p-8 flex flex-col"
            >
              <Quote className="w-8 h-8 text-accent/30 mb-4 flex-shrink-0" />
              <p className="text-muted leading-relaxed text-sm flex-1 mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <div className="font-bold text-charcoal text-sm">{t.author}</div>
                <div className="text-xs text-muted mt-0.5">{t.role}, {t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
