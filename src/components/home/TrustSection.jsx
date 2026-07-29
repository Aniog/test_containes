import { Shield, Users, Award, Clock, FileCheck, Globe } from 'lucide-react';

const stats = [
  { icon: Users, value: '500+', label: 'Suppliers Verified' },
  { icon: FileCheck, value: '2,000+', label: 'Inspections Completed' },
  { icon: Globe, value: '40+', label: 'Countries Served' },
  { icon: Clock, value: '10+', label: 'Years Experience' },
];

const trustPoints = [
  {
    icon: Shield,
    title: 'Independent & Unbiased',
    description: 'We do not own factories or take supplier commissions. Our only client is you.',
  },
  {
    icon: Award,
    title: 'On-Ground Team in China',
    description: 'Our inspectors and project managers are based in Shenzhen, Guangzhou, and Yiwu.',
  },
  {
    icon: FileCheck,
    title: 'Detailed Reports',
    description: 'Every inspection and visit includes photos, videos, and a written report in English.',
  },
  {
    icon: Clock,
    title: 'Responsive Communication',
    description: 'We reply within 24 hours and provide regular updates throughout your project.',
  },
];

export default function TrustSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 bg-surface rounded-xl border border-border">
              <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
              <p className="text-3xl font-bold text-text-primary mb-1">{stat.value}</p>
              <p className="text-text-secondary text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trust Points */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">Why Trust Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Built on Transparency
          </h2>
          <p className="text-text-secondary text-lg">
            We work exclusively for buyers. No hidden supplier relationships. No commission from factories.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {trustPoints.map((point) => (
            <div key={point.title} className="flex gap-4 items-start">
              <div className="w-11 h-11 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                <point.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-text-primary mb-1">{point.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{point.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
