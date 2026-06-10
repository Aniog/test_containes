import { Shield, Award, Users, Clock, CheckCircle, Star } from 'lucide-react'

const trustPoints = [
  {
    icon: Shield,
    title: 'Verified Suppliers',
    description: 'Every supplier undergoes rigorous on-site verification before we recommend them.',
    stat: '500+',
    statLabel: 'Verified Suppliers',
  },
  {
    icon: Award,
    title: 'Quality Standards',
    description: 'AQL-based inspections following international quality standards.',
    stat: 'AQL 2.5',
    statLabel: 'Inspection Standard',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Bilingual professionals with deep knowledge of Chinese manufacturing.',
    stat: '50+',
    statLabel: 'Industry Experts',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'Quick turnaround on quotes and queries within 24 hours.',
    stat: '24h',
    statLabel: 'Quote Response',
  },
]

const clientLogos = [
  { name: 'Company A', industry: 'Retail' },
  { name: 'Company B', industry: 'E-commerce' },
  { name: 'Company C', industry: 'Manufacturing' },
  { name: 'Company D', industry: 'Wholesale' },
  { name: 'Company E', industry: 'Import/Export' },
]

const testimonials = [
  {
    name: 'Michael Thompson',
    company: 'Thompson Trading Co.',
    quote: 'SSourcing China transformed our supply chain. We went from constant quality issues to 99% satisfaction rate in just 6 months.',
    rating: 5,
  },
  {
    name: 'Sarah Chen',
    company: 'Global Merchandise Ltd.',
    quote: 'The factory verification service saved us from a potential $50K loss. We highly recommend their QC services.',
    rating: 5,
  },
  {
    name: 'James Wilson',
    company: 'Pacific Imports',
    quote: 'Professional, responsive, and thorough. Their team handles everything so we can focus on sales.',
    rating: 5,
  },
]

export function Trust() {
  return (
    <section className="py-20 bg-white" id="trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {trustPoints.map((point, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                {point.title}
              </h3>
              <p className="text-sm text-neutral-600 mb-4">
                {point.description}
              </p>
              <div className="text-3xl font-bold text-primary-600">{point.stat}</div>
              <div className="text-sm text-neutral-500">{point.statLabel}</div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="bg-neutral-50 rounded-3xl p-8 md:p-12 mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Trusted by Global Buyers
            </h2>
            <p className="text-lg text-neutral-600">
              See what our clients say about working with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-sm">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-neutral-700 mb-6 italic">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                    <span className="text-primary-600 font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-neutral-900">{testimonial.name}</div>
                    <div className="text-sm text-neutral-500">{testimonial.company}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Badges */}
        <div className="text-center">
          <p className="text-sm text-neutral-500 mb-6">Trusted & Verified By</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {['SGS', 'BV', 'TÜV', 'Intertek'].map((badge, index) => (
              <div key={index} className="px-6 py-3 bg-neutral-100 rounded-lg">
                <span className="font-semibold text-neutral-600">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}