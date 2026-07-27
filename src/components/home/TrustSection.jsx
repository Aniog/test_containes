import React from 'react';
import { ShieldCheck, Globe, Users, TrendingUp, MapPin, Headphones } from 'lucide-react';

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Verified Factory Network',
    desc: 'We maintain a vetted network of factories across China, with ongoing relationship management and performance tracking.',
  },
  {
    icon: Globe,
    title: 'Serving Global Buyers',
    desc: 'Clients from North America, Europe, Australia, and the Middle East rely on us for consistent sourcing results.',
  },
  {
    icon: Users,
    title: 'Experienced Team',
    desc: 'Our team combines sourcing expertise, engineering knowledge, and local market insight across key manufacturing regions.',
  },
  {
    icon: TrendingUp,
    title: 'Transparent Pricing',
    desc: 'No hidden fees. Our service fees are clearly defined upfront, and supplier pricing is verified against market benchmarks.',
  },
  {
    icon: MapPin,
    title: 'On-Ground Presence',
    desc: 'Based in Guangzhou with coverage across Guangdong, Zhejiang, Jiangsu, and other major manufacturing hubs.',
  },
  {
    icon: Headphones,
    title: 'Responsive Communication',
    desc: 'Direct communication in English and Chinese. Regular updates with photos, reports, and clear status tracking.',
  },
];

const TrustSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="trust-title" className="text-2xl md:text-3xl font-bold text-neutral-800 mb-4">
            Why Buyers Trust Us
          </h2>
          <p id="trust-subtitle" className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Practical advantages that make sourcing from China more predictable and manageable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {trustPoints.map((point) => (
            <div key={point.title} className="bg-neutral-50 border border-neutral-200 rounded-lg p-6 md:p-8">
              <div className="w-10 h-10 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                <point.icon className="w-5 h-5 text-primary-500" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-800 mb-2">{point.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{point.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
