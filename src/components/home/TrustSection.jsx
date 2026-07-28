import React from 'react';
import { Shield, Eye, FileText, Clock, Award, Lock } from 'lucide-react';

const trustPoints = [
  {
    icon: Shield,
    title: 'Verified Suppliers Only',
    description: 'Every supplier in our network has passed a comprehensive on-site audit before we recommend them.',
  },
  {
    icon: Eye,
    title: 'Full Transparency',
    description: 'You see everything we see. Factory photos, inspection reports, and production updates in real time.',
  },
  {
    icon: FileText,
    title: 'Detailed Reporting',
    description: 'Clear, written reports with photos after every factory visit, inspection, and milestone.',
  },
  {
    icon: Clock,
    title: 'On-Time Delivery Focus',
    description: 'We proactively track production schedules and flag delays before they become problems.',
  },
  {
    icon: Award,
    title: 'Experienced Team',
    description: 'Our sourcing managers have 8+ years of experience and deep industry knowledge across sectors.',
  },
  {
    icon: Lock,
    title: 'Data Confidentiality',
    description: 'Your product designs, supplier information, and pricing are kept strictly confidential.',
  },
];

const TrustSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-sm font-semibold text-teal-700 uppercase tracking-wider">Trust & Reliability</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-800 mt-2 mb-4">Why Buyers Trust Us</h2>
          <p className="text-lg text-slate-600">
            Building long-term partnerships requires more than finding a factory. It requires accountability.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div
                key={point.title}
                className="flex gap-4 p-5 bg-white rounded-lg border border-slate-100 hover:border-teal-200 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-center w-11 h-11 bg-teal-50 rounded-lg shrink-0">
                  <Icon className="w-5 h-5 text-teal-700" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-800 mb-1">{point.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{point.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
