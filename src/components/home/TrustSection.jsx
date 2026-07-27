import React from 'react';
import { ShieldCheck, Users, Globe, Clock, ThumbsUp, MapPin } from 'lucide-react';

const trustPoints = [
  {
    icon: ShieldCheck,
    title: 'Verified Suppliers Only',
    desc: 'Every supplier in our network has been visited and verified in person. We check licenses, facilities, and production records.',
  },
  {
    icon: Users,
    title: 'Dedicated Project Manager',
    desc: 'You work with one point of contact who understands your requirements and manages the entire sourcing process for you.',
  },
  {
    icon: Globe,
    title: 'Serving Global Buyers',
    desc: 'Clients from North America, Europe, Australia, and the Middle East trust us to manage their China sourcing operations.',
  },
  {
    icon: Clock,
    title: '24-Hour Response Time',
    desc: 'We respond to every inquiry within 24 hours. Urgent issues are addressed immediately during business hours in China.',
  },
  {
    icon: ThumbsUp,
    title: 'Transparent Reporting',
    desc: 'You receive detailed reports with photos from factory visits, inspections, and production updates. No hidden information.',
  },
  {
    icon: MapPin,
    title: 'Local Presence in China',
    desc: 'Our team is based in China with direct access to supplier clusters in Shanghai, Guangzhou, Yiwu, and Shenzhen.',
  },
];

const TrustSection = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="trust-title" className="text-2xl md:text-3xl font-bold text-neutral-900 mb-4">
            Why Buyers Trust SSourcing China
          </h2>
          <p id="trust-subtitle" className="text-neutral-600 text-lg max-w-2xl mx-auto">
            We operate with transparency, accountability, and a commitment to your sourcing success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {trustPoints.map((tp) => (
            <div key={tp.title} className="bg-primary-50/50 border border-primary-100 rounded-xl p-6 md:p-8">
              <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center mb-4">
                <tp.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">{tp.title}</h3>
              <p className="text-neutral-600 text-sm leading-relaxed">{tp.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
