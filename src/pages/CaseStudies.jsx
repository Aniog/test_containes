import { ArrowRight, TrendingDown, TrendingUp, Clock, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

const cases = [
  {
    client: 'European Electronics Distributor',
    location: 'Germany',
    industry: 'Electronics',
    challenge: 'Needed reliable PCB suppliers with ISO certification for a new IoT product line. Previous attempts resulted in inconsistent quality and delayed deliveries.',
    actions: ['Researched 20+ PCB manufacturers', 'Conducted 5 on-site factory audits', 'Negotiated pricing and MOQ terms', 'Implemented QC checkpoints at 3 stages'],
    results: [
      { label: 'Cost Reduction', value: '22%', icon: TrendingDown },
      { label: 'On-Time Delivery', value: '96%', icon: Clock },
      { label: 'Defect Rate', value: '< 1%', icon: Shield },
    ],
    testimonial: 'SSourcing China found us suppliers we would never have discovered on our own. The factory audits alone saved us from a potentially costly mistake.',
    imgId: 'case-study-electronics-9a8b7c',
    titleId: 'case-study-electronics-title',
  },
  {
    client: 'US Retail Brand',
    location: 'United States',
    industry: 'Textiles & Apparel',
    challenge: 'Quality issues with previous supplier led to customer complaints and returns. Needed consistent production for seasonal orders with tight deadlines.',
    actions: ['Audited 8 textile factories', 'Established AQL-based inspection protocol', 'Created detailed production schedule', 'Set up weekly progress reporting'],
    results: [
      { label: 'Defect Rate', value: '< 1.5%', icon: Shield },
      { label: 'On-Time Delivery', value: '97%', icon: Clock },
      { label: 'Return Rate', value: '-85%', icon: TrendingDown },
    ],
    testimonial: 'The difference in quality control was night and day. Our return rate dropped dramatically and our customers noticed the improvement immediately.',
    imgId: 'case-study-textiles-1d2e3f',
    titleId: 'case-study-textiles-title',
  },
  {
    client: 'Australian Industrial Company',
    location: 'Australia',
    industry: 'Machinery',
    challenge: 'Complex custom hydraulic components with tight tolerances and strict material requirements. Needed specialized manufacturer with CNC capabilities.',
    actions: ['Identified 3 specialized CNC manufacturers', 'Coordinated 3 prototyping rounds', 'Conducted material certification verification', 'Managed full production run with QC oversight'],
    results: [
      { label: 'Parts Delivered', value: '10,000', icon: TrendingUp },
      { label: 'Tolerance Met', value: '100%', icon: Shield },
      { label: 'Timeline', value: 'On Schedule', icon: Clock },
    ],
    testimonial: 'These were not off-the-shelf parts. SSourcing China managed the entire development process and delivered exactly what we needed, on time.',
    imgId: 'case-study-machinery-4g5h6i',
    titleId: 'case-study-machinery-title',
  },
  {
    client: 'UK E-commerce Brand',
    location: 'United Kingdom',
    industry: 'Packaging',
    challenge: 'Needed eco-friendly custom packaging at competitive prices for a new product launch across Europe.',
    actions: ['Sourced 4 sustainable packaging suppliers', 'Coordinated sample development', 'Managed custom printing & design', 'Arranged consolidated shipping to EU warehouse'],
    results: [
      { label: 'Cost vs Budget', value: '-18%', icon: TrendingDown },
      { label: 'Sustainable Materials', value: '100%', icon: Shield },
      { label: 'Launch Timeline', value: 'Met', icon: Clock },
    ],
    testimonial: 'The packaging quality exceeded our expectations and the eco-friendly materials aligned perfectly with our brand values.',
    imgId: 'case-study-packaging-7j8k9l',
    titleId: 'case-study-packaging-title',
  },
]

export default function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-navy text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Case Studies
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Real projects, real results. See how we have helped businesses across industries source successfully from China.
          </p>
        </div>
      </section>

      {/* Cases */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 space-y-16">
          {cases.map((c, index) => (
            <div
              key={c.client}
              className="bg-[#f8f9fa] rounded-lg overflow-hidden border border-gray-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="h-64 lg:h-auto overflow-hidden">
                  <img
                    alt={c.client}
                    data-strk-img-id={c.imgId}
                    data-strk-img={`[${c.titleId}]`}
                    data-strk-img-ratio="3x2"
                    data-strk-img-width="600"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded">
                      {c.industry}
                    </span>
                    <span className="text-xs text-gray-500">{c.location}</span>
                  </div>
                  <h2 id={c.titleId} className="text-xl font-bold text-navy mb-3">
                    {c.client}
                  </h2>
                  <p className="text-sm text-gray-600 mb-4">
                    <span className="font-medium">Challenge:</span> {c.challenge}
                  </p>

                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-2">Actions Taken</h4>
                    <ul className="space-y-1">
                      {c.actions.map((action) => (
                        <li key={action} className="flex items-center gap-2 text-sm text-gray-600">
                          <span className="w-1 h-1 bg-accent rounded-full shrink-0" />
                          {action}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="grid grid-cols-3 gap-3 mb-5">
                    {c.results.map((result) => (
                      <div key={result.label} className="bg-white rounded-md p-3 text-center border border-gray-100">
                        <result.icon className="w-5 h-5 text-accent mx-auto mb-1" />
                        <div className="text-lg font-bold text-navy">{result.value}</div>
                        <div className="text-xs text-gray-500">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  <blockquote className="border-l-3 border-accent pl-4 italic text-sm text-gray-600">
                    &ldquo;{c.testimonial}&rdquo;
                  </blockquote>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#f8f9fa]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Ready for Results Like These?
          </h2>
          <p className="text-gray-600 mb-8 max-w-xl mx-auto">
            Let us discuss your sourcing project and create a plan tailored to your goals.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-600 text-white font-medium px-8 py-3.5 rounded-md transition-colors"
          >
            Start Your Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}
