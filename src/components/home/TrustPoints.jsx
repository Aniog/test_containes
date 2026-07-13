import React from 'react';
import { Shield, Award, Globe, Clock, Users, Headphones } from 'lucide-react';

const trustPoints = [
  {
    icon: Shield,
    title: 'Verified Suppliers',
    description: 'All suppliers undergo thorough background checks and factory audits before joining our network.',
  },
  {
    icon: Award,
    title: 'ISO Certified Processes',
    description: 'Our quality management processes follow ISO 9001 standards for consistency and reliability.',
  },
  {
    icon: Globe,
    title: 'Global Experience',
    description: 'We serve clients in 50+ countries across North America, Europe, Australia, and Asia.',
  },
  {
    icon: Clock,
    title: '10+ Years in Business',
    description: 'Over a decade of experience in China sourcing with deep industry knowledge and supplier relationships.',
  },
  {
    icon: Users,
    title: 'Local Team in China',
    description: 'Our bilingual team is based in Shenzhen, providing on-ground support and real-time communication.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Each client is assigned a dedicated account manager for personalized service and quick response.',
  },
];

const clientLogos = [
  'TechCorp Global',
  'RetailMax Inc.',
  'EuroTrade GmbH',
  'Pacific Imports',
  'Aussie Direct',
  'Nordic Supply',
];

const TrustPoints = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">Trust & Credibility</span>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-4 mb-6">
            Why Global Buyers Trust SSourcing China
          </h2>
          <p className="text-lg text-text-secondary">
            We build long-term partnerships based on transparency, reliability, and results.
          </p>
        </div>

        {/* Trust Points Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trustPoints.map((point) => (
            <div key={point.title} className="flex items-start gap-4 p-6 rounded-xl hover:bg-bg-light transition-colors">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <point.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{point.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="border-t border-border-light pt-12">
          <p className="text-center text-text-light text-sm font-medium uppercase tracking-wider mb-8">
            Trusted by Companies Worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo) => (
              <div
                key={logo}
                className="px-6 py-3 bg-gray-100 rounded-lg text-text-light font-semibold text-sm hover:text-primary transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustPoints;
