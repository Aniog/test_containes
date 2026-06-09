import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, DollarSign, Package, Clock } from 'lucide-react';

const caseStudies = [
  {
    title: 'UK Retail Chain Expands Houseware Line Through China Sourcing',
    client: 'Mid-sized UK home goods retailer',
    challenge: 'The client wanted to expand their houseware product line but was struggling with high costs from existing European suppliers. They needed to find Chinese manufacturers that could meet EU quality standards at competitive prices.',
    approach: 'We identified 8 potential suppliers across Guangdong and Zhejiang provinces, conducted factory audits, and shortlisted 4 that met EU compliance standards. After sample evaluation, we negotiated pricing and payment terms.',
    results: [
      '22% reduction in landed costs compared to European suppliers',
      'Successfully launched 15 new SKUs in 4 months',
      'All products passed EU safety compliance testing',
      'Ongoing monthly orders with consistent quality',
    ],
    metrics: [
      { label: 'Cost Reduction', value: '22%' },
      { label: 'New Products', value: '15 SKUs' },
      { label: 'Time to Market', value: '4 Months' },
    ],
    tags: ['Home & Kitchen', 'Supplier Sourcing'],
    icon: DollarSign,
  },
  {
    title: 'US Tech Startup Brings Smart Audio Product to Market',
    client: 'US-based consumer electronics startup',
    challenge: 'A hardware startup needed to manufacture their first production run of smart audio devices. They had a prototype but needed help finding a manufacturer capable of producing at scale while maintaining quality.',
    approach: 'We sourced suppliers experienced in audio electronics, coordinated PCB and enclosure manufacturing, managed tooling development, and supervised the first production run including full QC inspection.',
    results: [
      'First production run of 5,000 units delivered on schedule',
      'Defect rate below 1.5% on initial production',
      'BOM cost reduced by 18% through supplier negotiation',
      'Product launched successfully on target date',
    ],
    metrics: [
      { label: 'Units Produced', value: '5,000' },
      { label: 'Defect Rate', value: '<1.5%' },
      { label: 'Cost Savings', value: '18%' },
    ],
    tags: ['Electronics', 'Product Development'],
    icon: TrendingUp,
  },
  {
    title: 'Australian Distributor Optimizes Multi-Supplier Supply Chain',
    client: 'Australian industrial supplies distributor',
    challenge: 'The client was working with 8 different Chinese suppliers across multiple product categories, leading to inconsistent quality, communication challenges, and high logistics costs.',
    approach: 'We conducted a comprehensive audit of all existing suppliers, consolidated product categories, and identified 3 strategic partners capable of manufacturing multiple product lines. We renegotiated contracts and optimized shipping schedules.',
    results: [
      'Consolidated from 8 to 3 strategic suppliers',
      '35% reduction in total logistics costs',
      'Standardized quality across all product lines',
      'Single point of contact simplified communication',
    ],
    metrics: [
      { label: 'Supplier Reduction', value: '8 to 3' },
      { label: 'Logistics Savings', value: '35%' },
      { label: 'Timeline', value: '6 Months' },
    ],
    tags: ['Logistics', 'Supply Chain'],
    icon: Package,
  },
  {
    title: 'Canadian E-Commerce Brand Sources Sustainable Packaging',
    client: 'Canadian online retailer focused on sustainability',
    challenge: 'The client needed custom sustainable packaging solutions that met their environmental commitments while remaining cost-effective compared to conventional packaging.',
    approach: 'We researched Chinese manufacturers specializing in eco-friendly packaging, verified their certifications, coordinated sample development, and managed the production of custom-designed packaging.',
    results: [
      '40% cost reduction compared to local packaging suppliers',
      '100% recyclable and FSC-certified materials',
      'Custom design with brand elements perfectly executed',
      'Reliable monthly supply established',
    ],
    metrics: [
      { label: 'Cost Reduction', value: '40%' },
      { label: 'Materials', value: '100% Recyclable' },
      { label: 'Supply', value: 'Monthly' },
    ],
    tags: ['Packaging', 'Sustainability'],
    icon: Package,
  },
];

export default function CaseStudies() {
  return (
    <div>
      {/* Header */}
      <section className="bg-primary py-16 md:py-20">
        <div className="container-custom">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Real projects, real results. See how we have helped businesses around the world
            source products from China successfully.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24">
        <div className="container-custom space-y-16">
          {caseStudies.map((cs, idx) => (
            <div key={cs.title} className="bg-white rounded-xl border border-border shadow-sm overflow-hidden">
              <div className="grid md:grid-cols-3">
                <div className={`md:col-span-2 p-6 md:p-8 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                      <cs.icon className="w-5 h-5 text-accent" />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cs.tags.map((tag) => (
                        <span key={tag} className="text-xs bg-accent/10 text-accent px-2.5 py-1 rounded-full font-medium">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-primary mb-4">{cs.title}</h2>
                  <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Client</p>
                  <p className="text-secondary text-sm mb-4">{cs.client}</p>
                  <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Challenge</p>
                  <p className="text-secondary text-sm mb-4">{cs.challenge}</p>
                  <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Our Approach</p>
                  <p className="text-secondary text-sm mb-4">{cs.approach}</p>
                  <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-2">Results</p>
                  <ul className="space-y-2">
                    {cs.results.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-secondary">
                        <ArrowRight className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={`bg-surface p-6 md:p-8 border-t md:border-t-0 md:border-l border-border flex flex-col justify-center ${idx % 2 === 1 ? 'md:order-1 md:border-l-0 md:border-r' : ''}`}>
                  <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-4">Key Metrics</p>
                  <div className="space-y-6">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-2xl font-bold text-primary">{m.value}</div>
                        <div className="text-xs text-secondary">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Let Us Help You Achieve Similar Results</h2>
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
            Every client and product is unique. Contact us to discuss how we can apply our
            sourcing expertise to your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-accent text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            Start Your Project <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}