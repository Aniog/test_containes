import React from 'react';
import { Shield, Award, Users, Clock, Globe, Headphones } from 'lucide-react';

const trustPoints = [
  {
    icon: Shield,
    title: '10+ Years Experience',
    description: 'Over a decade of helping international buyers source from China.',
    stat: '10+',
    label: 'Years',
  },
  {
    icon: Users,
    title: '500+ Global Clients',
    description: 'Trusted by businesses across North America, Europe, and Australia.',
    stat: '500+',
    label: 'Clients',
  },
  {
    icon: Award,
    title: 'Verified Suppliers',
    description: 'All suppliers undergo thorough verification and factory audits.',
    stat: '100%',
    label: 'Verified',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description: 'Dedicated account managers with 24-hour response times.',
    stat: '24h',
    label: 'Response',
  },
  {
    icon: Globe,
    title: 'Global Shipping',
    description: 'Door-to-door delivery to 50+ countries worldwide.',
    stat: '50+',
    label: 'Countries',
  },
  {
    icon: Headphones,
    title: 'Bilingual Support',
    description: 'English and Chinese speaking team for seamless communication.',
    stat: '24/7',
    label: 'Support',
  },
];

const TrustPoints = () => {
  return (
    <section className="section-padding bg-brand-900 text-white">
      <div className="container-wide">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Why Global Buyers Trust Us
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Proven track record of helping businesses source quality products from China.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/15 transition-colors">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-accent-500 rounded-xl flex items-center justify-center">
                    <point.icon className="w-7 h-7 text-white" />
                  </div>
                </div>
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-3xl font-bold text-accent-400">{point.stat}</span>
                    <span className="text-sm text-white/60">{point.label}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1">{point.title}</h3>
                  <p className="text-sm text-white/70">{point.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustPoints;
