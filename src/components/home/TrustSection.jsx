import { MapPin, Users, Award, Clock, Globe, FileCheck } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Buyers Served' },
  { icon: MapPin, value: '12', label: 'Cities Covered' },
  { icon: Award, value: '8+', label: 'Years Experience' },
  { icon: FileCheck, value: '2,000+', label: 'Factory Audits' },
];

const trustPoints = [
  {
    icon: Globe,
    title: 'On-the-Ground Team',
    description: 'Our bilingual sourcing team is based in Shenzhen, Guangzhou, and Yiwu — close to the main manufacturing hubs.',
  },
  {
    icon: Clock,
    title: 'Transparent Reporting',
    description: 'You get real-time updates, inspection photos, and detailed reports at every stage of the process.',
  },
  {
    icon: FileCheck,
    title: 'No Hidden Fees',
    description: 'Our commission structure is clearly communicated upfront. No surprise charges, ever.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-surface rounded-xl p-6 text-center border border-border"
              >
                <div className="w-10 h-10 bg-primary/5 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <div className="text-3xl font-extrabold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-text-secondary">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Trust Points */}
        <div className="text-center mb-12">
          <h2 id="trust-title" className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Why Buyers Trust Us
          </h2>
          <p id="trust-subtitle" className="text-lg text-text-secondary max-w-2xl mx-auto">
            We combine local knowledge with international standards to deliver reliable sourcing results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {trustPoints.map((point, index) => {
            const Icon = point.icon;
            return (
              <div
                key={index}
                className="bg-surface rounded-xl p-8 border border-border text-center"
              >
                <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <Icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-primary mb-3">
                  {point.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
