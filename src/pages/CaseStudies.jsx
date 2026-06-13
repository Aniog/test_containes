import { ArrowRight, TrendingUp, Clock, Shield, DollarSign } from 'lucide-react'
import { SectionHeader, CTAButton, TestimonialCard } from '@/components/common/SharedComponents'

const caseStudies = [
  {
    id: 'techmart-australia',
    industry: 'Consumer Electronics',
    title: 'Australian Retailer Reduces Supplier Base and Cuts Costs by 35%',
    client: 'TechMart Australia',
    clientDesc: 'A mid-size electronics retailer with 25 stores across Australia',
    challenge: 'TechMart was sourcing from 12 different suppliers with inconsistent quality, delayed shipments, and rising costs. Managing multiple relationships was consuming significant staff time and creating operational inefficiency.',
    solution: 'We conducted a comprehensive supplier audit, consolidated their supply chain to 3 primary factories, negotiated volume-based pricing, and implemented a standardized QC process across all production lines.',
    results: [
      { icon: DollarSign, value: '35%', label: 'Cost Reduction' },
      { icon: Shield, value: '97%', label: 'Quality Pass Rate' },
      { icon: Clock, value: '40%', label: 'Fewer Lead Time Delays' },
      { icon: TrendingUp, value: '12 to 3', label: 'Supplier Consolidation' },
    ],
    quote: 'SSourcing helped us consolidate suppliers from 12 to 3, reducing our unit costs by 35% while improving quality consistency. The dedicated project manager made the transition seamless.',
    quoteName: 'James Mitchell',
    quoteRole: 'Procurement Director',
    quoteCompany: 'TechMart Australia',
  },
  {
    id: 'heimdesign-germany',
    industry: 'Home & Garden',
    title: 'German Home Brand Launches Product Line in Record 8 Weeks',
    client: 'HeimDesign GmbH',
    clientDesc: 'A premium home furnishing brand based in Hamburg, Germany',
    challenge: 'HeimDesign wanted to launch a new line of modern furniture for the European market but had no experience sourcing from China. They needed a partner who could handle everything from supplier selection to shipping.',
    solution: 'We identified three furniture manufacturers in Guangdong province, coordinated sample production with multiple iterations, managed the full production run of 2,000 units, and arranged container shipping to Hamburg.',
    results: [
      { icon: Clock, value: '8 Weeks', label: 'Idea to Delivery' },
      { icon: DollarSign, value: '28%', label: 'Below Budget' },
      { icon: Shield, value: '98%', label: 'First-Pass QC Rate' },
      { icon: TrendingUp, value: '2,000', label: 'Units Delivered' },
    ],
    quote: 'From initial sourcing to the first container arriving in Hamburg, the entire process took just 8 weeks. Their coordination with factories and logistics was exceptional.',
    quoteName: 'Anna Schmidt',
    quoteRole: 'CEO',
    quoteCompany: 'HeimDesign GmbH',
  },
  {
    id: 'purelife-usa',
    industry: 'Health & Beauty',
    title: 'US Importer Eliminates Quality Issues and Builds Reliable Supply Chain',
    client: 'PureLife Imports',
    clientDesc: 'A health and beauty importer based in Los Angeles, USA',
    challenge: 'PureLife was experiencing an 8% defect rate with their existing supplier relationship, leading to costly returns, customer complaints, and brand reputation damage. They needed a quality-focused sourcing partner.',
    solution: 'We replaced their single unverified supplier with a GMP-certified manufacturer, implemented AQL 2.5 inspection standards, established in-line QC checkpoints, and created a detailed quality specification document.',
    results: [
      { icon: Shield, value: '<1%', label: 'Defect Rate (from 8%)' },
      { icon: DollarSign, value: '$180K', label: 'Annual Savings on Returns' },
      { icon: TrendingUp, value: '4.9★', label: 'Product Rating (from 3.8)' },
      { icon: Clock, value: 'Zero', label: 'Recalls in 2 Years' },
    ],
    quote: 'After switching to SSourcing, our defect rate dropped from 8% to under 1%. Their QC process is thorough, and the detailed inspection reports give us complete confidence.',
    quoteName: 'Sarah Chen',
    quoteRole: 'Operations Manager',
    quoteCompany: 'PureLife Imports',
  },
  {
    id: 'buildright-uk',
    industry: 'Industrial Equipment',
    title: 'UK Construction Firm Sources Custom Components 40% Cheaper',
    client: 'BuildRight Engineering',
    clientDesc: 'A construction engineering firm based in Manchester, UK',
    challenge: 'BuildRight needed custom-manufactured steel and aluminum components for their modular construction systems. Domestic pricing was prohibitive, and previous attempts at direct China sourcing resulted in quality inconsistencies.',
    solution: 'We identified precision CNC and fabrication workshops in Jiangsu province, worked with their engineering team to create detailed technical drawings, implemented dimensional inspection protocols, and arranged phased deliveries.',
    results: [
      { icon: DollarSign, value: '40%', label: 'Cost Savings' },
      { icon: Shield, value: '99.5%', label: 'Dimensional Accuracy' },
      { icon: Clock, value: 'On Time', label: 'All 6 Shipments' },
      { icon: TrendingUp, value: 'Ongoing', label: '2-Year Contract' },
    ],
    quote: 'The precision of the components we received exceeded our expectations. SSourcing managed every detail from technical drawings to customs clearance in Manchester.',
    quoteName: 'David Thompson',
    quoteRole: 'Engineering Manager',
    quoteCompany: 'BuildRight Engineering',
  },
]

export default function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-brand-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-brand-orange/20 text-brand-orange text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-6">
            Success Stories
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
            Case Studies
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Real results from real clients. See how we have helped businesses worldwide source products from China more effectively and profitably.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20 md:space-y-28">
            {caseStudies.map((cs, idx) => (
              <article key={cs.id} className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-brand-orange text-xs font-semibold tracking-wide uppercase bg-brand-orange/5 px-3 py-1 rounded-full">{cs.industry}</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-content-primary mb-3 leading-tight">{cs.title}</h2>
                <p className="text-content-muted text-sm mb-8">{cs.client} — {cs.clientDesc}</p>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div>
                    <h3 className="font-semibold text-content-primary mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-red-400 rounded-full" /> The Challenge
                    </h3>
                    <p className="text-content-secondary text-sm leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-content-primary mb-3 flex items-center gap-2">
                      <span className="w-2 h-2 bg-trust-green rounded-full" /> Our Solution
                    </h3>
                    <p className="text-content-secondary text-sm leading-relaxed">{cs.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  {cs.results.map((r) => (
                    <div key={r.label} className="bg-surface-light rounded-xl p-5 text-center border border-border-light">
                      <div className="text-2xl md:text-3xl font-bold text-brand-navy mb-1">{r.value}</div>
                      <div className="text-content-muted text-xs font-medium">{r.label}</div>
                    </div>
                  ))}
                </div>

                {/* Testimonial */}
                <TestimonialCard
                  quote={cs.quote}
                  name={cs.quoteName}
                  role={cs.quoteRole}
                  company={cs.quoteCompany}
                />

                {idx < caseStudies.length - 1 && (
                  <hr className="mt-16 md:mt-20 border-border-light" />
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-surface-light py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-content-primary mb-5">
            Want Similar Results for Your Business?
          </h2>
          <p className="text-content-secondary text-lg mb-8">
            Every project starts with a conversation. Tell us your sourcing challenge and we will show you how we can help.
          </p>
          <CTAButton className="text-base px-8 py-4">
            Get a Free Sourcing Quote <ArrowRight className="ml-2 w-5 h-5" />
          </CTAButton>
        </div>
      </section>
    </div>
  )
}
