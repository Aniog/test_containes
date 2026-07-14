import { Shield, Users, Award, Globe, Clock, FileCheck } from 'lucide-react';

const trustPoints = [
  {
    icon: Shield,
    title: 'On-the-Ground Presence',
    description: 'Our team is based in China, with offices in Guangzhou and Yiwu — close to the factories we work with.',
  },
  {
    icon: Users,
    title: 'Dedicated Account Manager',
    description: 'Every client gets a single point of contact who manages your project from inquiry to delivery.',
  },
  {
    icon: Award,
    title: 'Transparent Reporting',
    description: 'You receive detailed inspection reports, factory audit summaries, and production updates at every stage.',
  },
  {
    icon: Globe,
    title: 'Multilingual Team',
    description: 'We communicate fluently in English, Chinese, and other languages — no miscommunication with factories.',
  },
  {
    icon: Clock,
    title: '24-Hour Response Time',
    description: 'We respond to all inquiries within one business day and keep you updated throughout the process.',
  },
  {
    icon: FileCheck,
    title: 'No Upfront Fees',
    description: 'We provide a free initial consultation and sourcing quote before any commitment is required.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-2">Why Choose Us</p>
          <h2 className="text-neutral-900 text-3xl md:text-4xl font-bold">
            Why Buyers Trust SSourcing China
          </h2>
          <p className="text-neutral-500 text-lg mt-4 max-w-2xl mx-auto">
            We've built our reputation on transparency, reliability, and results — not promises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.title} className="bg-white rounded-xl p-6 border border-neutral-200 hover:shadow-md transition-shadow">
                <div className="w-11 h-11 bg-blue-50 rounded-xl flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-brand-blue" />
                </div>
                <h3 className="text-neutral-900 font-semibold text-base mb-2">{point.title}</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">{point.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
