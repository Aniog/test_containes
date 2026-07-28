import { Users, Award, Clock, Globe, Shield, FileCheck } from 'lucide-react';

const trustPoints = [
  {
    icon: Users,
    stat: '500+',
    label: 'Global Buyers Served',
    description: 'Trusted by businesses across North America, Europe, and Asia-Pacific.',
  },
  {
    icon: Award,
    stat: '10+',
    label: 'Years of Experience',
    description: 'Deep knowledge of Chinese manufacturing and international trade.',
  },
  {
    icon: Clock,
    stat: '24h',
    label: 'Response Time',
    description: 'Quick responses and regular updates throughout the sourcing process.',
  },
  {
    icon: Globe,
    stat: '50+',
    label: 'Countries Served',
    description: 'We ship to destinations worldwide with full logistics support.',
  },
  {
    icon: Shield,
    stat: '100%',
    label: 'Verified Suppliers',
    description: 'Every supplier is vetted through our multi-step verification process.',
  },
  {
    icon: FileCheck,
    stat: '10,000+',
    label: 'Inspections Completed',
    description: 'Thorough quality checks with detailed photo and video reports.',
  },
];

export default function TrustSection() {
  return (
    <section id="trust" className="section-padding bg-slate-900 text-white">
      <div className="container-custom">
        <div className="section-header">
          <h2 id="trust-title" className="section-title text-white">Why Buyers Trust Us</h2>
          <p id="trust-subtitle" className="section-subtitle text-slate-400">
            Numbers that reflect our commitment to reliable, transparent sourcing services.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 text-center">
              <div className="w-14 h-14 bg-orange-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <point.icon className="w-7 h-7 text-orange-400" />
              </div>
              <div className="text-3xl font-bold text-white mb-1">{point.stat}</div>
              <div className="text-orange-400 font-semibold mb-2">{point.label}</div>
              <p className="text-slate-400 text-sm">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
