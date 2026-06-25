import { Award, Users, MapPin, Clock, FileCheck, Headphones } from 'lucide-react';
import SectionHeader from '../shared/SectionHeader';

const trustPoints = [
  {
    icon: Award,
    title: 'ISO-Aligned Audit Process',
    description: 'Our factory audits follow internationally recognized standards, giving you reliable, comparable assessments.',
  },
  {
    icon: Users,
    title: 'In-House Inspection Team',
    description: 'We employ full-time QC inspectors based in China — not outsourced freelancers — for consistent quality control.',
  },
  {
    icon: MapPin,
    title: 'On-the-Ground Presence',
    description: 'Our team is physically located in China\'s major manufacturing hubs: Guangzhou, Shenzhen, Yiwu, and Ningbo.',
  },
  {
    icon: Clock,
    title: '24-Hour Response Guarantee',
    description: 'Every inquiry receives a detailed response within one business day, with a clear action plan.',
  },
  {
    icon: FileCheck,
    title: 'Transparent Reporting',
    description: 'You receive detailed audit reports, inspection photos, and production updates — no black boxes.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Account Manager',
    description: 'Each client is assigned a dedicated manager who knows your business and handles all communication.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f4f6f9]" id="trust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Why Choose Us"
          title="Why Global Buyers Trust SSourcing China"
          subtitle="We operate with transparency, accountability, and a genuine commitment to protecting your sourcing interests."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-[#1a4f8a]/10 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-[#1a4f8a]" />
                </div>
                <h3 className="font-bold text-[#0d2340] mb-2">{point.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="mt-16 bg-[#1a4f8a] rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: '200+', label: 'Clients Served' },
            { value: '5,000+', label: 'Orders Managed' },
            { value: '98%', label: 'On-Time Delivery' },
            { value: '8+', label: 'Years in Business' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-blue-200 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
