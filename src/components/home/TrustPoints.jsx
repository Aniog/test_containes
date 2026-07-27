import React from 'react';
import { ShieldCheck, MapPin, Users, FileCheck, Clock, Globe } from 'lucide-react';

const trustPoints = [
  {
    icon: MapPin,
    title: 'Based in Shenzhen, China',
    description: 'We are on the ground in China\'s manufacturing hub, with direct access to factories and suppliers.',
  },
  {
    icon: ShieldCheck,
    title: 'Verified Supplier Network',
    description: 'Over 500 suppliers pre-verified through on-site audits, business license checks, and quality assessments.',
  },
  {
    icon: Users,
    title: 'Dedicated Project Manager',
    description: 'Each client gets a dedicated sourcing specialist who manages your project from start to finish.',
  },
  {
    icon: FileCheck,
    title: 'Transparent Reporting',
    description: 'Detailed inspection reports, factory audit findings, and production updates with photos and data.',
  },
  {
    icon: Clock,
    title: '10+ Years of Experience',
    description: 'We have been helping global buyers source from China since 2014, across dozens of product categories.',
  },
  {
    icon: Globe,
    title: 'Global Client Base',
    description: 'Clients from North America, Europe, Australia, and the Middle East trust us with their sourcing needs.',
  },
];

const TrustPoints = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
            Why Buyers Trust SSourcing China
          </h2>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            We are not a directory or a trading company. We are your local team in China — working on your behalf, with your interests first.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {trustPoints.map((point) => (
            <div key={point.title} className="flex gap-4 p-6 md:p-8 bg-slate-50 rounded-lg">
              <div className="w-12 h-12 bg-navy-700 rounded-lg flex items-center justify-center shrink-0">
                <point.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{point.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustPoints;
