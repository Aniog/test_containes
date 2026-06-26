import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, TrendingUp, ShieldCheck, Clock, DollarSign } from 'lucide-react';
import CTASection from '@/components/shared/CTASection';

const studies = [
  {
    id: 'us-retailer-kitchen',
    category: 'Home & Garden',
    title: 'How We Saved 30% on Kitchen Appliance Sourcing for a US Retailer',
    client: 'Mid-size US retail chain with 45+ stores',
    challenge: 'The client was buying kitchen appliances through domestic distributors at high margins. They wanted to source directly from Chinese manufacturers but lacked experience and were concerned about quality risks.',
    solution: 'We identified 5 qualified kitchen appliance manufacturers in Guangdong, conducted on-site factory audits, collected and tested samples, and negotiated pricing 30% below their previous costs. We implemented a 3-stage QC process: pre-production sample approval, mid-production inspection, and pre-shipment AQL inspection.',
    result: '30% cost reduction on per-unit price',
    details: [
      'Reduced per-unit cost from $42 to $29.40',
      'Maintained quality standards that passed US safety certifications',
      'Established ongoing supply relationship with 2 primary suppliers',
      'Implemented quarterly inspection schedule for ongoing orders',
    ],
    stats: [
      { icon: DollarSign, label: '30%', desc: 'Cost Savings' },
      { icon: ShieldCheck, label: '100%', desc: 'Quality Pass Rate' },
      { icon: Clock, label: '6 Weeks', desc: 'Time to First Order' },
    ],
  },
  {
    id: 'uk-electronics',
    category: 'Electronics',
    title: 'Electronics Import Success: From Prototype to 10,000 Units for a UK Brand',
    client: 'UK consumer electronics startup',
    challenge: 'A UK electronics brand had designed a Bluetooth speaker but needed a reliable Chinese manufacturer to produce 10,000 units. Previous attempts with other sourcing companies resulted in quality issues and missed deadlines.',
    solution: 'We worked closely with 3 electronics factories in Shenzhen, evaluated their technical capabilities and past production records, and selected the best match. We managed prototype refinement, tooling, and mass production while providing weekly progress reports.',
    result: 'On-time delivery with zero major defects',
    details: [
      'Successfully delivered 10,000 units within the agreed 10-week timeline',
      'Pre-shipment inspection found only minor cosmetic issues (within AQL limits)',
      'Client saved approximately 45% compared to UK-based manufacturing estimates',
      'Ongoing relationship for product line expansion',
    ],
    stats: [
      { icon: TrendingUp, label: '10,000', desc: 'Units Delivered' },
      { icon: ShieldCheck, label: 'Zero', desc: 'Major Defects' },
      { icon: Clock, label: '10 Weeks', desc: 'Full Production Cycle' },
    ],
  },
  {
    id: 'german-industrial',
    category: 'Industrial',
    title: 'Streamlining Industrial Parts Procurement for a German Manufacturer',
    client: 'German industrial equipment manufacturer',
    challenge: 'The client was experiencing inconsistent quality with CNC-machined parts from Chinese suppliers found through trade platforms. Defect rates were around 12%, causing production delays and increased waste.',
    solution: 'We conducted a full supplier audit of their existing suppliers and 4 new alternatives. We implemented strict incoming QC protocols, introduced measurement verification using coordinate measuring machines, and established clear tolerance specifications in supplier contracts.',
    result: '40% reduction in defect rate',
    details: [
      'Defect rate dropped from 12% to under 3% within two production cycles',
      'Identified and replaced 2 underperforming suppliers with better alternatives',
      'Established standardized QC checklist and measurement protocols',
      'Reduced incoming inspection time by 50% through improved supplier reliability',
    ],
    stats: [
      { icon: ShieldCheck, label: '40%', desc: 'Fewer Defects' },
      { icon: TrendingUp, label: '12% to 3%', desc: 'Defect Rate' },
      { icon: DollarSign, label: '50%', desc: 'Less Inspection Time' },
    ],
  },
  {
    id: 'australian-furniture',
    category: 'Home & Garden',
    title: 'Building a Reliable Furniture Supply Chain for an Australian Importer',
    client: 'Australian online furniture retailer',
    challenge: 'An Australian furniture e-commerce company needed to source modern home furniture from China but was struggling to find suppliers who could meet Australian safety standards and offer reasonable MOQs.',
    solution: 'We researched furniture manufacturers in Foshan, visited 8 factories, and shortlisted 3 that met Australian compliance requirements. We negotiated favorable MOQs for initial orders and established a sample approval process with detailed specification documents.',
    result: 'Product catalog expanded from 15 to 45 SKUs',
    details: [
      'Successfully launched 30 new furniture products within the first year',
      'All products passed Australian safety and labeling requirements',
      'Average lead time reduced from 90 days to 55 days',
      'Built a supplier base of 3 primary and 2 backup manufacturers',
    ],
    stats: [
      { icon: TrendingUp, label: '45 SKUs', desc: 'Product Range' },
      { icon: Clock, label: '55 Days', desc: 'Average Lead Time' },
      { icon: DollarSign, label: '25%', desc: 'Margin Improvement' },
    ],
  },
];

export default function CaseStudies() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent font-semibold text-sm tracking-wider uppercase">Case Studies</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-3 mb-5">
            Real Results for Global Buyers
          </h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            See how we have helped businesses around the world source products from China
            more effectively, with measurable results.
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-16 md:gap-24">
            {studies.map((study, i) => (
              <article key={study.id} className="relative">
                {/* Category badge */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="bg-accent/10 text-accent text-xs font-semibold px-3 py-1.5 rounded-full">
                    {study.category}
                  </span>
                  <span className="text-text-muted text-sm">Case Study {String(i + 1).padStart(2, '0')}</span>
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-4 leading-snug">
                  {study.title}
                </h2>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {study.stats.map((stat) => (
                    <div key={stat.label} className="bg-surface-alt rounded-lg p-4 text-center border border-border">
                      <stat.icon className="w-5 h-5 text-accent mx-auto mb-1" />
                      <div className="text-xl font-bold text-text-primary">{stat.label}</div>
                      <div className="text-text-muted text-xs">{stat.desc}</div>
                    </div>
                  ))}
                </div>

                <div className="text-text-muted text-sm mb-4">
                  <strong className="text-text-secondary">Client:</strong> {study.client}
                </div>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-base font-bold text-text-primary mb-2">Challenge</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{study.challenge}</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-text-primary mb-2">Our Solution</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{study.solution}</p>
                  </div>

                  <div>
                    <h3 className="text-base font-bold text-text-primary mb-2">Results</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-3">{study.result}</p>
                    <ul className="flex flex-col gap-2">
                      {study.details.map((d) => (
                        <li key={d} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-success shrink-0 mt-0.5" />
                          <span className="text-text-secondary text-sm">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {i < studies.length - 1 && <hr className="mt-16 md:mt-24 border-border" />}
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want Similar Results for Your Business?"
        subtitle="Share your sourcing requirements and let us show you what we can do."
      />
    </div>
  );
}
