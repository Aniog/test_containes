import React from 'react';
import { Shield, Award, Wrench, Clock, BarChart3, Truck } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    desc: 'Heavy-duty steel construction with corrosion-resistant finishes ensures decades of reliable service.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    desc: 'ISO 9001 certified manufacturing processes with rigorous quality control at every stage.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    desc: 'Modular component design makes routine servicing straightforward and minimizes downtime.',
  },
  {
    icon: Clock,
    title: 'Rapid Setup',
    desc: 'Quick-change tooling and intuitive controls get your machine running in minutes, not hours.',
  },
  {
    icon: BarChart3,
    title: 'Precision Output',
    desc: 'Tight tolerances and repeatability you can count on for consistent, high-quality folds.',
  },
  {
    icon: Truck,
    title: 'Global Shipping',
    desc: 'We deliver and install our machines worldwide with full technical support included.',
  },
];

export default function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative py-20 md:py-28 lg:py-32 bg-charcoal"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-bronze/20" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-20">
          <span className="inline-block text-bronze text-xs uppercase tracking-[0.3em] font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-off-white mb-6">
            Engineered for <span className="text-gold">Excellence</span>
          </h2>
          <p className="text-muted-gray text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            With over two decades of manufacturing expertise, we combine cutting-edge engineering with timeless craftsmanship to deliver machinery you can trust.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 lg:p-8 bg-slate rounded-xl border border-white/[0.06] hover:border-bronze/40 transition-all duration-300 hover:shadow-[0_0_30px_rgba(184,134,11,0.06)]"
            >
              <div className="w-12 h-12 rounded-lg bg-bronze/10 flex items-center justify-center mb-5 group-hover:bg-bronze/20 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-bronze" />
              </div>
              <h3 className="font-heading text-lg lg:text-xl font-semibold text-off-white mb-3 group-hover:text-gold transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-muted-gray text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="mt-16 md:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { value: '25+', label: 'Years in Industry' },
            { value: '3,000+', label: 'Machines Delivered' },
            { value: '40+', label: 'Countries Served' },
            { value: '98%', label: 'Client Satisfaction' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 lg:p-8 rounded-xl bg-slate/50 border border-white/[0.04]"
            >
              <div className="font-heading text-3xl md:text-4xl font-bold text-gold mb-2">
                {stat.value}
              </div>
              <div className="text-muted-gray text-sm uppercase tracking-wider font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
