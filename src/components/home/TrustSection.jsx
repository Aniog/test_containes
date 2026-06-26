import React from 'react';
import { Users, Award, MapPin, Clock, Shield, Handshake } from 'lucide-react';

const trustPoints = [
  {
    icon: Users,
    stat: '500+',
    label: 'Global Buyers Served',
    description: 'Trusted by businesses across North America, Europe, Australia, and beyond.',
  },
  {
    icon: Award,
    stat: '12+',
    label: 'Years of Experience',
    description: 'Over a decade of sourcing expertise in China\'s manufacturing landscape.',
  },
  {
    icon: MapPin,
    stat: '2,000+',
    label: 'Verified Suppliers',
    description: 'A curated network of factories and manufacturers across all major industrial regions.',
  },
  {
    icon: Clock,
    stat: '24h',
    label: 'Response Time',
    description: 'We review and respond to every inquiry within one business day.',
  },
  {
    icon: Shield,
    stat: '100%',
    label: 'Transparent Pricing',
    description: 'No hidden fees. Clear service agreements and upfront cost estimates.',
  },
  {
    icon: Handshake,
    stat: '98%',
    label: 'Client Satisfaction',
    description: 'The majority of our clients return for repeat sourcing projects.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 md:py-24 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="inline-block text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">Why Choose Us</span>
          <h2 id="trust-title" className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Trusted by Buyers Worldwide
          </h2>
          <p id="trust-subtitle" className="text-lg text-slate-600">
            We combine local expertise with international standards to deliver reliable sourcing results.
          </p>
        </div>

        {/* Trust grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="bg-white rounded-xl p-6 lg:p-8 border border-blue-100 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-6 h-6 text-blue-700" />
              </div>
              <div className="text-3xl font-bold text-blue-700 mb-1">{point.stat}</div>
              <h3 className="font-semibold text-slate-900 mb-2">{point.label}</h3>
              <p className="text-sm text-slate-600">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
