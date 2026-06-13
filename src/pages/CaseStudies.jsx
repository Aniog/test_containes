import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Shield, Clock, DollarSign } from 'lucide-react';
import { SectionHeading, CTASection } from '@/components/ui/SectionHeading';

const caseStudies = [
  {
    title: 'US Retailer Reduces Sourcing Costs by 28%',
    industry: 'Home & Garden',
    client: 'Mid-size US Home Goods Retailer',
    challenge: 'The client was importing outdoor furniture through a trading company with high markups. They needed to find direct-from-factory suppliers to reduce costs while maintaining quality standards.',
    solution: 'We identified 5 qualified outdoor furniture factories in Guangdong, conducted on-site audits to verify production capabilities and quality systems, and facilitated direct factory relationships with competitive pricing.',
    results: [
      { icon: DollarSign, label: 'Cost Reduction', value: '28%' },
      { icon: Shield, label: 'Quality Rate', value: '99.2%' },
      { icon: Clock, label: 'Lead Time', value: '35 days' },
      { icon: TrendingUp, label: 'Annual Savings', value: '$180K' },
    ],
    quote: 'SSourcing helped us cut out the middleman and build direct factory relationships. The cost savings have been significant and the quality has actually improved.',
    quoteAuthor: 'VP of Procurement',
    imgQuery: 'outdoor furniture factory warehouse production',
  },
  {
    title: 'EU Brand Launches Private Label Electronics Line',
    industry: 'Consumer Electronics',
    client: 'European Consumer Electronics Brand',
    challenge: 'The client wanted to launch a private label line of wireless audio products but had no experience sourcing electronics from China and needed end-to-end support.',
    solution: 'We managed the entire process: supplier selection from our verified electronics network, tooling coordination for custom designs, prototype development, and first production run with full QC oversight.',
    results: [
      { icon: Clock, label: 'Time to Market', value: '4 months' },
      { icon: Shield, label: 'First-Run Yield', value: '97%' },
      { icon: DollarSign, label: 'Margin Improvement', value: '35%' },
      { icon: TrendingUp, label: 'Product SKUs', value: '6 launched' },
    ],
    quote: 'They guided us through every step of launching our product line in China. Their factory network and QC process gave us confidence to scale.',
    quoteAuthor: 'CEO & Founder',
    imgQuery: 'electronics assembly line wireless audio products',
  },
  {
    title: 'Australian Importer Achieves 98% Quality Rate',
    industry: 'Apparel & Textiles',
    client: 'Australian Clothing Importer',
    challenge: 'The client was experiencing consistent quality problems with their existing Chinese supplier, with defect rates averaging 12%. They needed a new approach to quality control.',
    solution: 'We audited the existing supplier to identify root causes, then implemented a structured QC process with pre-production, in-line, and pre-shipment inspections. We also identified a backup supplier.',
    results: [
      { icon: Shield, label: 'Defect Rate', value: '<2%' },
      { icon: DollarSign, label: 'Returns Cost Saved', value: '$95K/yr' },
      { icon: Clock, label: 'QC Process', value: '3-stage' },
      { icon: TrendingUp, label: 'Order Accuracy', value: '98%' },
    ],
    quote: 'The quality inspection process they implemented transformed our supply chain. Defects dropped from 12% to under 2% within the first two orders.',
    quoteAuthor: 'Operations Director',
    imgQuery: 'textile garment quality inspection factory',
  },
  {
    title: 'UK Distributor Sources 200+ SKUs for E-commerce',
    industry: 'Multi-Category',
    client: 'UK E-commerce Distributor',
    challenge: 'A fast-growing UK e-commerce company needed to source a wide range of products across multiple categories, but lacked the resources to manage dozens of supplier relationships in China.',
    solution: 'We acted as their dedicated China sourcing department, managing supplier selection, negotiation, quality control, and logistics across 12+ product categories with a single point of contact.',
    results: [
      { icon: TrendingUp, label: 'SKUs Sourced', value: '200+' },
      { icon: DollarSign, label: 'Avg. Cost Savings', value: '22%' },
      { icon: Shield, label: 'Supplier Network', value: '45 factories' },
      { icon: Clock, label: 'Avg. Lead Time', value: '28 days' },
    ],
    quote: 'Having SSourcing as our China team has been a game changer. They manage 45+ suppliers and 200+ SKUs for us with consistent quality and competitive pricing.',
    quoteAuthor: 'Head of Supply Chain',
    imgQuery: 'ecommerce warehouse product fulfillment logistics',
  },
];

export default function CaseStudies() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-navy-500 via-navy-600 to-navy-700 py-16 lg:py-20">
        <div className="container-max text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white/90 text-xs font-semibold uppercase tracking-widest rounded-full mb-4">
            Case Studies
          </span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-6">
            Real Results for Real Businesses
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            See how we have helped companies around the world reduce costs, improve quality, and build reliable supply chains in China.
          </p>
        </div>
      </section>

      {/* Case studies */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="flex flex-col gap-16">
            {caseStudies.map((cs, idx) => (
              <div
                key={idx}
                className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start"
              >
                {/* Image */}
                <div className={`${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-gray-100">
                    <img
                      data-strk-img-id={`case-detail-${idx}-${cs.industry.toLowerCase().replace(/[&\s]+/g, '-')}`}
                      data-strk-img={`[case-detail-${idx}-industry] ${cs.imgQuery} China sourcing agent`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="800"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={cs.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <span className="inline-block text-xs font-semibold text-accent-500 uppercase tracking-wider mb-2">
                    {cs.industry}
                  </span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-navy-500 mb-2">{cs.title}</h3>
                  <p id={`case-detail-${idx}-industry`} className="sr-only">{cs.industry}</p>
                  <p className="text-sm text-gray-400 mb-4">{cs.client}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-bold text-navy-500 mb-1">Challenge</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{cs.challenge}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-navy-500 mb-1">Solution</h4>
                      <p className="text-sm text-gray-500 leading-relaxed">{cs.solution}</p>
                    </div>
                  </div>

                  {/* Results grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {cs.results.map((r) => (
                      <div key={r.label} className="bg-gray-50 rounded-lg p-3.5">
                        <div className="flex items-center gap-2 mb-1">
                          <r.icon className="w-4 h-4 text-accent-500" />
                          <span className="text-xs font-medium text-gray-500">{r.label}</span>
                        </div>
                        <p className="text-xl font-bold text-navy-500">{r.value}</p>
                      </div>
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="border-l-3 border-accent-500 pl-4 py-1">
                    <p className="text-sm text-gray-600 italic leading-relaxed mb-2">"{cs.quote}"</p>
                    <cite className="text-xs font-semibold text-navy-500 not-italic">— {cs.quoteAuthor}</cite>
                  </blockquote>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
