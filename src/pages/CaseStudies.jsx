import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Quote } from 'lucide-react'

const caseStudies = [
  {
    id: 'electronics-brand-usa',
    title: 'US Electronics Brand',
    subtitle: 'Reduced sourcing costs by 22% while improving quality',
    category: 'Electronics',
    challenge: 'A mid-size US electronics brand was working with multiple suppliers for LED lighting products, leading to inconsistent quality, communication issues, and high costs. They needed to consolidate their supply chain without disrupting production.',
    solution: 'We audited their existing suppliers, identified three qualified LED factories in Guangdong, and implemented a standardized QC process. Our team negotiated volume pricing and established clear quality benchmarks.',
    results: [
      '22% reduction in unit costs',
      'Defect rate reduced from 8% to 1.5%',
      'Consolidated from 5 suppliers to 3',
      'Lead time reduced by 2 weeks',
    ],
    quote: 'SSourcing China helped us streamline our supply chain in ways we couldn\'t have done on our own. The cost savings and quality improvements have been significant.',
    quoteAuthor: 'Operations Director, US Electronics Company',
  },
  {
    id: 'home-goods-europe',
    title: 'European Home Goods Retailer',
    subtitle: 'Launched a private-label product line in 12 weeks',
    category: 'Home & Garden',
    challenge: 'A European retailer wanted to launch a private-label kitchenware line for the holiday season. They had no existing supplier relationships in China and a tight 12-week timeline from concept to delivery.',
    solution: 'We sourced 15 SKUs from two verified factories, managed the sampling process, negotiated pricing, and oversaw the entire production run. Our QC team conducted inspections at three stages: during production, pre-shipment, and loading.',
    results: [
      '15 SKUs launched within 12 weeks',
      'All products passed EU compliance testing',
      'Zero defective units in customer shipments',
      'Successfully launched for holiday season',
    ],
    quote: 'The timeline was incredibly tight, but SSourcing China delivered on every milestone. They made first-time China sourcing feel manageable and low-risk.',
    quoteAuthor: 'Product Manager, European Retailer',
  },
  {
    id: 'packaging-startup-australia',
    title: 'Australian Startup',
    subtitle: 'First-time China sourcing without the common pitfalls',
    category: 'Promotional Products',
    challenge: 'An Australian startup needed custom packaging and branded merchandise for their product launch. They had never sourced from China before and were concerned about quality, communication, and intellectual property risks.',
    solution: 'We guided them through the entire process: supplier selection with IP protections, sample approval, production monitoring, and shipping coordination. We also helped them understand customs requirements and import regulations.',
    results: [
      'Product launched on time and on budget',
      'IP protection agreements in place',
      'Quality exceeded expectations',
      'Ongoing sourcing partnership established',
    ],
    quote: 'As a first-time buyer from China, we had a lot of concerns. SSourcing China addressed every one and made the process straightforward. We now consider them an extension of our team.',
    quoteAuthor: 'Founder, Australian Startup',
  },
  {
    id: 'industrial-parts-germany',
    title: 'German Industrial Manufacturer',
    subtitle: 'Found a reliable supplier for precision CNC parts',
    category: 'Machinery',
    challenge: 'A German manufacturer needed a reliable Chinese supplier for precision CNC machined parts. Previous attempts to source directly resulted in inconsistent tolerances and missed deadlines.',
    solution: 'We identified and audited three CNC factories with ISO 9001 certification and experience with European clients. We conducted detailed capability assessments, including tolerance testing and material verification.',
    results: [
      'Parts consistently within 0.02mm tolerance',
      'On-time delivery rate above 95%',
      'Supplier relationship ongoing for 3+ years',
      '30% cost savings vs. European suppliers',
    ],
    quote: 'Precision and reliability are non-negotiable for us. SSourcing China found us a supplier that meets our exacting standards and delivers consistently.',
    quoteAuthor: 'Procurement Manager, German Manufacturer',
  },
]

export default function CaseStudies() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary-dark py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent mb-4 block">Results</span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">Case Studies</h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Real projects, real results. See how we have helped businesses across the globe source products from China successfully.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {caseStudies.map((cs, i) => (
              <div key={cs.id} className="bg-surface border border-border rounded-2xl overflow-hidden">
                {/* Header Image */}
                <div className="h-56 lg:h-72 relative">
                  <img
                    data-strk-img-id={`case-study-detail-${cs.id}`}
                    data-strk-img={`[${cs.id}-title] ${cs.category} manufacturing`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="1200"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={cs.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white text-xs font-semibold px-3 py-1.5 rounded-full">{cs.category}</span>
                  </div>
                </div>

                <div className="p-6 lg:p-10">
                  <h2 id={`${cs.id}-title`} className="text-2xl font-bold text-text-primary mb-1">{cs.title}</h2>
                  <p className="text-accent font-medium mb-6">{cs.subtitle}</p>

                  <div className="grid lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-2">Challenge</h3>
                      <p className="text-text-secondary text-sm leading-relaxed mb-6">{cs.challenge}</p>

                      <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-2">Solution</h3>
                      <p className="text-text-secondary text-sm leading-relaxed">{cs.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider mb-3">Results</h3>
                      <ul className="space-y-2.5 mb-6">
                        {cs.results.map((r) => (
                          <li key={r} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                            <span className="text-text-primary text-sm font-medium">{r}</span>
                          </li>
                        ))}
                      </ul>

                      <blockquote className="border-l-3 border-accent pl-4 py-2">
                        <Quote className="w-5 h-5 text-text-muted mb-2" />
                        <p className="text-text-secondary text-sm italic leading-relaxed mb-2">"{cs.quote}"</p>
                        <cite className="text-xs text-text-muted not-italic">— {cs.quoteAuthor}</cite>
                      </blockquote>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-alt py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Want Similar Results?</h2>
          <p className="text-text-secondary mb-8">Tell us about your sourcing needs and we will show you how we can help.</p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-semibold px-8 py-4 rounded-lg transition-colors"
          >
            Start Your Sourcing Project
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
