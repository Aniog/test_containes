import { Award, Users, MapPin, FileCheck, Globe, Clock } from 'lucide-react';
import SectionHeader from '@/components/shared/SectionHeader';

const trustPoints = [
  {
    icon: MapPin,
    title: 'China-Based Team',
    desc: 'Our team is physically located in China — in Shenzhen, Guangzhou, and Yiwu — giving us direct access to factories.',
  },
  {
    icon: FileCheck,
    title: 'Transparent Reporting',
    desc: 'You receive detailed audit reports, inspection photos, and production updates at every stage of the process.',
  },
  {
    icon: Users,
    title: 'Dedicated Account Manager',
    desc: 'Every client gets a single point of contact who manages your sourcing project from start to finish.',
  },
  {
    icon: Globe,
    title: 'Serving 40+ Countries',
    desc: 'We work with buyers from the US, EU, UK, Australia, Middle East, and Southeast Asia on a regular basis.',
  },
  {
    icon: Award,
    title: 'No Hidden Fees',
    desc: 'Our fee structure is clear and agreed upfront. We do not take supplier commissions that could compromise our advice.',
  },
  {
    icon: Clock,
    title: 'Fast Response Time',
    desc: 'We respond to all inquiries within 24 hours and provide initial supplier shortlists within 3–5 business days.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Why Choose Us"
          title="Why Buyers Trust SSourcing China"
          subtitle="We operate with full transparency, local expertise, and a genuine commitment to protecting your sourcing interests."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="flex gap-4 p-6 rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-50 text-brand-blue rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-brand-navy mb-1.5">{point.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{point.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
