import React from 'react';
import { Shield, Cog, HeadphonesIcon, Truck, Clock, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Industrial Durability',
    description: 'Built with heavy-duty steel frames and premium components, our machines are designed for decades of continuous operation in demanding environments.',
  },
  {
    icon: Cog,
    title: 'German Engineering',
    description: 'Every machine is designed with precision German engineering principles, ensuring micron-level accuracy and repeatable performance shift after shift.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Support',
    description: 'Our dedicated support team is available around the clock. Remote diagnostics, phone support, and onsite service to minimize your downtime.',
  },
  {
    icon: Truck,
    title: 'Global Logistics',
    description: 'With distribution centers in Europe, Asia, and North America, we deliver and install your machinery anywhere in the world with full customs support.',
  },
  {
    icon: Clock,
    title: 'Fast Lead Times',
    description: 'Standard models ship within 4-6 weeks. Our streamlined manufacturing process means you get your equipment faster without compromising quality.',
  },
  {
    icon: BarChart3,
    title: 'Industry 4.0 Ready',
    description: 'All machines feature IoT connectivity, real-time production monitoring, and OEE analytics to help you optimize your manufacturing operations.',
  },
];

const stats = [
  { value: '2,500+', label: 'Machines Installed' },
  { value: '60+', label: 'Countries Served' },
  { value: '99.7%', label: 'Uptime Rate' },
  { value: '12 Years', label: 'Avg. Machine Life' },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-brand-gold font-semibold text-sm tracking-widest uppercase">
            Why ARTITECT
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mt-3 mb-4">
            Engineered for Excellence
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            We don't just build machines — we build partnerships. Here's why leading manufacturers choose ARTITECT.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="text-center p-6 bg-surface-bg rounded-xl border border-border"
            >
              <div className="text-3xl md:text-4xl font-bold text-brand-navy mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-text-secondary font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 md:p-8 rounded-xl border border-border bg-surface-bg hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-navy rounded-lg flex items-center justify-center mb-5">
                <feature.icon className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-3">{feature.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}