import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BarChart3, TrendingUp, Clock, CheckCircle2, Package, Globe, ShieldCheck } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    industry: 'Consumer Electronics',
    title: 'Reducing Defect Rate by 90% for a US Electronics Importer',
    client: 'US-based e-commerce brand',
    challenge: 'The client was receiving inconsistent product quality from their existing Chinese supplier, with a defect rate of approximately 12%. This led to high return rates, customer complaints, and increased costs.',
    solution: 'We conducted a thorough factory audit and identified the root cause: inadequate incoming material inspection and inconsistent production processes. We helped the client transition to a verified supplier with ISO 9001 certification and implemented a comprehensive 3-stage QC process covering raw materials, in-line production, and pre-shipment inspection.',
    results: [
      'Defect rate dropped from 12% to under 1.2%',
      'Customer return rate decreased by 85%',
      'Annual savings of $120,000 in returned goods and replacements',
      'Production lead time reduced by 15%',
    ],
    imgId: 'case-electronics-qc-a2b4c6',
    icon: ShieldCheck,
  },
  {
    id: 2,
    industry: 'Home & Garden',
    title: 'Cutting Sourcing Costs by 25% for a European Home Goods Retailer',
    client: 'European retail chain with 80+ stores',
    challenge: 'The client wanted to diversify their supplier base and reduce sourcing costs for over 200 SKUs of home and garden products. Their existing suppliers in one region had become uncompetitive on pricing.',
    solution: 'We conducted a comprehensive supplier search across Guangdong, Zhejiang, and Jiangsu provinces. We identified 8 new verified factories, negotiated improved pricing through volume consolidation, and implemented a multi-supplier strategy to reduce dependency risk.',
    results: [
      '25% average cost reduction across 200+ SKUs',
      'Supplier base expanded from 3 to 11 verified factories',
      'Lead time improved by 20% through regional diversification',
      'Zero quality issues reported in the first 12 months',
    ],
    imgId: 'case-homegoods-sourcing-d5e7f9',
    icon: TrendingUp,
  },
  {
    id: 3,
    industry: 'Industrial Equipment',
    title: 'Ensuring 100% On-Time Delivery for an Australian Construction Firm',
    client: 'Australian construction and engineering company',
    challenge: 'The client needed a reliable supply of custom CNC-machined metal parts and fabricated steel components for construction projects. Previous suppliers had missed delivery deadlines, causing costly project delays.',
    solution: 'We established relationships with 3 specialized metal fabrication factories, each selected for different capabilities. We implemented a production monitoring system with weekly progress reports, milestone verification, and pre-shipment inspections. We also coordinated monthly container shipments with optimized logistics planning.',
    results: [
      '100% on-time delivery rate maintained over 12 months',
      'Zero quality rejections on delivered parts',
      'Procurement cycle time reduced from 12 weeks to 8 weeks',
      'Annual logistics costs reduced by 18% through shipment consolidation',
    ],
    imgId: 'case-industrial-parts-g1h3i5',
    icon: Clock,
  },
  {
    id: 4,
    industry: 'Health & Beauty',
    title: 'Launching a Private Label Cosmetics Line for a Middle East Distributor',
    client: 'Middle East beauty products distributor',
    challenge: 'The client wanted to launch their own private label cosmetics line but had no experience sourcing from China. They needed help finding manufacturers, developing packaging, ensuring regulatory compliance, and managing the entire production process.',
    solution: 'We sourced 4 certified cosmetics manufacturers with GMP and ISO 22716 certifications. We coordinated product formulation, custom packaging design, regulatory documentation, and sample development. We managed the entire production cycle from initial concept to first shipment.',
    results: [
      'Successfully launched 15 SKUs within 4 months',
      'All products met EU cosmetics regulation standards',
      'First order of 50,000 units delivered on time and within budget',
      'Client expanded to 40 SKUs within the first year',
    ],
    imgId: 'case-cosmetics-launch-j7k9l2',
    icon: Package,
  },
  {
    id: 5,
    industry: 'Automotive Parts',
    title: 'Building a Reliable Supply Chain for a Brazilian Auto Parts Distributor',
    client: 'Brazilian aftermarket auto parts company',
    challenge: 'The client needed to establish a stable supply of aftermarket automotive parts from China but faced challenges with supplier reliability, inconsistent quality, and complex import regulations specific to the Brazilian market.',
    solution: 'We identified and verified 5 specialized automotive parts manufacturers with the necessary certifications (ISO/TS 16949). We implemented strict quality protocols, managed INMETRO certification documentation, and established a regular shipping schedule with customs pre-clearance to minimize delays at Brazilian ports.',
    results: [
      'Supply chain established with 5 verified suppliers',
      'All required certifications (INMETRO) successfully obtained',
      'Average delivery time to Brazil reduced from 60 to 42 days',
      'Zero regulatory compliance issues in 18 months of operation',
    ],
    imgId: 'case-auto-parts-m4n6o8',
    icon: Globe,
  },
];

const CaseStudies = () => {
  const [expandedId, setExpandedId] = React.useState(null);
  React.useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-dark to-primary py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1 bg-white/10 text-white/90 text-sm font-semibold rounded-full mb-4">Real Results</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Case Studies</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">Real projects with measurable outcomes. See how we've helped businesses across industries succeed with China sourcing.</p>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {caseStudies.map((cs) => (
            <div key={cs.id} className="bg-surface-alt border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all">
              <div className="p-7 md:p-9">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                      <cs.icon className="w-5 h-5 text-primary" />
                    </div>
                    <span className="px-3 py-1 bg-primary/5 text-primary text-xs font-semibold rounded-full">{cs.industry}</span>
                  </div>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-text mb-2">{cs.title}</h2>
                <p className="text-sm text-text-muted mb-5">Client: {cs.client}</p>

                <div className="space-y-5">
                  <div>
                    <h3 className="text-sm font-bold text-text mb-2 uppercase tracking-wider">Challenge</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text mb-2 uppercase tracking-wider">Solution</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">{cs.solution}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-text mb-3 uppercase tracking-wider">Results</h3>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {cs.results.map((r, i) => (
                        <div key={i} className="flex items-start gap-3 bg-white border border-border rounded-xl p-4">
                          <CheckCircle2 className="w-5 h-5 text-success shrink-0 mt-0.5" />
                          <span className="text-sm font-medium text-text">{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Want Similar Results for Your Business?</h2>
          <p className="text-blue-100 mb-8 max-w-xl mx-auto">Every case study starts with a conversation. Tell us about your sourcing challenges and let's discuss how we can help.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent-light text-white font-bold rounded-xl transition-colors no-underline shadow-lg">
            Start Your Success Story <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
