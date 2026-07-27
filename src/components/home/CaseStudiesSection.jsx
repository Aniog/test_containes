import { Link } from 'react-router-dom';
import { ArrowRight, Building2, Package, TrendingUp } from 'lucide-react';

const cases = [
  {
    client: 'European Retail Chain',
    industry: 'Consumer Electronics',
    result: '15% cost reduction, 98% on-time delivery',
    description: 'Sourced 12 product lines from 4 verified factories. Implemented AQL-based QC process reducing defect rate from 8% to under 1%.',
    icon: Package,
  },
  {
    client: 'US Distributor',
    industry: 'Industrial Hardware',
    result: 'Saved $120K in first year',
    description: 'Consolidated supplier base from 8 to 3 audited factories. Negotiated better payment terms and volume pricing.',
    icon: Building2,
  },
  {
    client: 'Australian E-commerce Brand',
    industry: 'Home & Garden',
    result: '3x product range expansion',
    description: 'Identified 6 new suppliers in 3 months. Full production tracking and pre-shipment inspection on every order.',
    icon: TrendingUp,
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-4">
          <div>
            <h2 id="cases-title" className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Client Success Stories
            </h2>
            <p id="cases-subtitle" className="text-lg text-text-secondary max-w-xl">
              Real results from buyers who partnered with us to source from China.
            </p>
          </div>
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 text-secondary hover:text-primary font-medium transition-colors shrink-0"
          >
            View all case studies
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cases.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="bg-background rounded-xl p-8 border border-border hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-primary">{item.client}</p>
                    <p className="text-xs text-text-muted">{item.industry}</p>
                  </div>
                </div>
                <div className="bg-success/10 text-success px-3 py-1.5 rounded-md text-sm font-semibold inline-block mb-4">
                  {item.result}
                </div>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
