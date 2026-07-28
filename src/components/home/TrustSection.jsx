import React from 'react';
import { Users, Globe, Award, Clock, Building2, ShieldCheck } from 'lucide-react';

const stats = [
  { id: 'stat-1', icon: Users, value: '500+', label: 'Global Clients Served' },
  { id: 'stat-2', icon: Building2, value: '2,000+', label: 'Factories Verified' },
  { id: 'stat-3', icon: Award, value: '98%', label: 'Order Success Rate' },
  { id: 'stat-4', icon: Clock, value: '10+', label: 'Years of Experience' },
];

const trustPoints = [
  'On-the-ground team in major manufacturing hubs',
  'Bilingual staff (English & Mandarin)',
  'Transparent pricing — no hidden fees',
  'Detailed photo and video reports',
  'Flexible service packages for any order size',
  'References available from existing clients',
];

const TrustSection = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block text-brand-blue text-sm font-semibold uppercase tracking-wider mb-3">Trust & Credibility</span>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 tracking-tight mb-4">
            Why Buyers Trust SSourcing China
          </h2>
          <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
            We've built our reputation on transparency, reliability, and results.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="text-center p-6 rounded-xl bg-neutral-50 border border-neutral-200">
                <Icon className="w-8 h-8 text-brand-blue mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-neutral-900 mb-1">{stat.value}</div>
                <div className="text-neutral-600 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-brand-navy rounded-2xl p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheck className="w-8 h-8 text-brand-blue" />
            <h3 className="text-2xl font-bold text-white">Our Commitment to You</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {trustPoints.map((point, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-brand-blue rounded-full shrink-0" />
                <span className="text-neutral-300 text-sm">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
