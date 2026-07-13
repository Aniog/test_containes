import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, DollarSign, Package, Clock } from 'lucide-react';

const caseStudies = [
  {
    client: 'TechCorp Global',
    industry: 'Consumer Electronics',
    challenge: 'Needed to reduce procurement costs while maintaining strict quality standards for electronic accessories.',
    result: '35% cost reduction',
    metric: 'Cost Savings',
    icon: DollarSign,
    description: 'We identified alternative suppliers in Shenzhen and negotiated better terms through volume commitments.',
  },
  {
    client: 'RetailMax Inc.',
    industry: 'Home & Garden',
    challenge: 'Struggled with inconsistent product quality and delayed shipments from existing suppliers.',
    result: '98% quality pass rate',
    metric: 'Quality Improvement',
    icon: TrendingUp,
    description: 'Implemented rigorous QC processes and switched to verified suppliers in our network.',
  },
  {
    client: 'EuroTrade GmbH',
    industry: 'Industrial Equipment',
    challenge: 'Complex supply chain with multiple vendors causing coordination headaches and delays.',
    result: '40% faster delivery',
    metric: 'Lead Time Reduction',
    icon: Clock,
    description: 'Consolidated suppliers and streamlined production monitoring for faster turnaround.',
  },
];

const CaseStudiesPreview = () => {
  return (
    <section className="py-20 bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Success Stories</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-4 mb-6">
            How We Help Businesses Succeed
          </h2>
          <p className="text-lg text-text-secondary">
            Real results from real clients. See how we solve sourcing challenges and deliver measurable outcomes.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study) => (
            <div key={study.client} className="bg-white rounded-xl p-6 shadow-sm border border-border-light hover:shadow-md transition-all duration-300">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {study.industry}
                </span>
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <study.icon className="w-5 h-5 text-primary" />
                </div>
              </div>

              {/* Client */}
              <h3 className="text-lg font-semibold text-text-primary mb-2">{study.client}</h3>

              {/* Challenge */}
              <p className="text-text-secondary text-sm mb-4">{study.challenge}</p>

              {/* Result */}
              <div className="bg-bg-light rounded-lg p-4 mb-4">
                <div className="text-2xl font-bold text-primary mb-1">{study.result}</div>
                <div className="text-text-light text-sm">{study.metric}</div>
              </div>

              {/* Description */}
              <p className="text-text-secondary text-sm">{study.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/case-studies"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-8 py-4 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            View All Case Studies
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesPreview;
