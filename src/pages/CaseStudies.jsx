import { Building2, Package, TrendingUp, DollarSign, Clock, ShieldCheck } from 'lucide-react';

const cases = [
  {
    client: 'European Retail Chain',
    location: 'Germany & Netherlands',
    industry: 'Consumer Electronics',
    challenge: 'Needed reliable suppliers for 12 product lines with strict CE certification requirements. Previous suppliers had inconsistent quality and delivery delays.',
    solution: 'We identified 4 audited factories, implemented AQL-based QC at every stage, and established backup suppliers for critical products.',
    results: [
      { label: 'Cost Reduction', value: '15%', icon: DollarSign },
      { label: 'On-Time Delivery', value: '98%', icon: Clock },
      { label: 'Defect Rate', value: '<1%', icon: ShieldCheck },
    ],
    quote: 'SSourcing China transformed our supply chain. We now have visibility and confidence in every order.',
    contact: 'Procurement Director',
    icon: Package,
  },
  {
    client: 'US Industrial Distributor',
    location: 'Texas, USA',
    industry: 'Industrial Hardware',
    challenge: 'Buying from 8 different suppliers caused high overhead, inconsistent pricing, and quality variance across product lines.',
    solution: 'Consolidated sourcing to 3 verified factories with better volume pricing, aligned quality standards, and centralized production tracking.',
    results: [
      { label: 'First Year Savings', value: '$120K', icon: DollarSign },
      { label: 'Suppliers Reduced', value: '8 to 3', icon: Building2 },
      { label: 'Lead Time', value: '-20%', icon: Clock },
    ],
    quote: 'The consolidation strategy alone paid for their service fees several times over. Highly recommended.',
    contact: 'Operations Manager',
    icon: Building2,
  },
  {
    client: 'Australian E-commerce Brand',
    location: 'Sydney, Australia',
    industry: 'Home & Garden',
    challenge: 'Rapid growth required tripling product range within 6 months without sacrificing quality or increasing risk.',
    solution: 'Sourced 6 new suppliers across 4 product categories in 3 months, with full production tracking and pre-shipment inspection on every order.',
    results: [
      { label: 'Product Range', value: '3x', icon: TrendingUp },
      { label: 'New Suppliers', value: '6', icon: Building2 },
      { label: 'Setup Time', value: '3 mo', icon: Clock },
    ],
    quote: 'They moved at the speed our business needed. Every new product launch was supported end-to-end.',
    contact: 'Founder & CEO',
    icon: TrendingUp,
  },
  {
    client: 'UK Medical Supply Company',
    location: 'London, UK',
    industry: 'Medical & Health',
    challenge: 'Required ISO 13485 certified manufacturers for new PPE product line with MHRA compliance documentation.',
    solution: 'Audited 8 potential factories, selected 2 with full certifications, and managed documentation for UK regulatory compliance.',
    results: [
      { label: 'Factories Audited', value: '8', icon: Building2 },
      { label: 'Certification Pass', value: '100%', icon: ShieldCheck },
      { label: 'Time to Market', value: '4 mo', icon: Clock },
    ],
    quote: 'Their understanding of regulatory requirements saved us months of delays and potential compliance issues.',
    contact: 'Regulatory Affairs Lead',
    icon: ShieldCheck,
  },
  {
    client: 'Canadian Packaging Brand',
    location: 'Toronto, Canada',
    industry: 'Packaging Materials',
    challenge: 'Needed sustainable packaging at competitive prices with consistent color matching across large print runs.',
    solution: 'Matched with a specialized eco-packaging factory, implemented color approval process, and supervised first 3 production runs.',
    results: [
      { label: 'Cost per Unit', value: '-18%', icon: DollarSign },
      { label: 'Color Consistency', value: '99.5%', icon: ShieldCheck },
      { label: 'MOQ Flexibility', value: '+40%', icon: TrendingUp },
    ],
    quote: 'Finally found a partner who understands both sustainability and print quality. Our customers noticed the difference.',
    contact: 'Product Development Lead',
    icon: Package,
  },
  {
    client: 'Middle East Construction Group',
    location: 'Dubai, UAE',
    industry: 'Building Materials',
    challenge: 'Large-scale project requiring 40+ container loads of tiles and fixtures with tight delivery windows.',
    solution: 'Coordinated 5 suppliers, consolidated shipments, and managed logistics to align with construction milestones.',
    results: [
      { label: 'Containers Shipped', value: '42', icon: Package },
      { label: 'On-Time Rate', value: '97%', icon: Clock },
      { label: 'Damage Rate', value: '<0.5%', icon: ShieldCheck },
    ],
    quote: 'They handled the complexity of multi-supplier coordination flawlessly. Every container arrived on schedule.',
    contact: 'Project Procurement Head',
    icon: Building2,
  },
];

export default function CaseStudies() {
  return (
    <div className="pb-20">
      {/* Header */}
      <section className="bg-surface border-b border-border py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-5xl font-extrabold text-primary mb-4">
              Case Studies
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed">
              Real results from buyers across industries who partnered with SSourcing China to improve their China supply chain.
            </p>
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {cases.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-surface rounded-xl border border-border overflow-hidden"
              >
                <div className="p-8 lg:p-10">
                  {/* Header */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h2 className="text-xl lg:text-2xl font-bold text-primary">
                          {item.client}
                        </h2>
                        <p className="text-sm text-text-muted">
                          {item.location} &bull; {item.industry}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Challenge / Solution */}
                  <div className="grid lg:grid-cols-2 gap-6 mb-8">
                    <div className="bg-background rounded-lg p-5 border border-border">
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Challenge</p>
                      <p className="text-sm text-text-secondary leading-relaxed">{item.challenge}</p>
                    </div>
                    <div className="bg-background rounded-lg p-5 border border-border">
                      <p className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Solution</p>
                      <p className="text-sm text-text-secondary leading-relaxed">{item.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    {item.results.map((result, ri) => {
                      const RIcon = result.icon;
                      return (
                        <div
                          key={ri}
                          className="bg-primary/5 rounded-lg p-4 text-center"
                        >
                          <RIcon className="w-5 h-5 text-primary mx-auto mb-2" />
                          <div className="text-xl lg:text-2xl font-extrabold text-primary mb-1">
                            {result.value}
                          </div>
                          <div className="text-xs text-text-muted">{result.label}</div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Quote */}
                  <div className="border-l-4 border-accent pl-5 py-1">
                    <p className="text-text-secondary italic text-sm leading-relaxed mb-2">
                      "{item.quote}"
                    </p>
                    <p className="text-xs text-text-muted font-medium">
                      — {item.contact}, {item.client}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
