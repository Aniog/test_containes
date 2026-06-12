import { Shield, Zap, Settings, Award, Headphones, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Every machine is constructed from premium-grade steel with precision-machined components, ensuring decades of reliable operation.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description:
      'Advanced drive systems and optimised tooling geometry deliver fast cycle times without compromising on bend accuracy.',
  },
  {
    icon: Settings,
    title: 'Easy to Operate',
    description:
      'Intuitive controls and clear digital readouts mean your operators can achieve perfect results from day one.',
  },
  {
    icon: Award,
    title: 'ISO Certified Quality',
    description:
      'All ARTITECT machines are manufactured under strict ISO 9001 quality management standards for consistent excellence.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description:
      'Our dedicated technical team provides installation, training, and ongoing support to keep your production running.',
  },
  {
    icon: Globe,
    title: 'Global Delivery',
    description:
      'We ship and commission machines worldwide, with local service partners in over 40 countries.',
  },
];

export default function WhyUs() {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-brand-gold text-sm font-semibold tracking-widest uppercase mb-3">
            Why Choose ARTITECT
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-brand-white tracking-tight">
            Engineering Excellence,
            <span className="block text-brand-gold">Every Time</span>
          </h2>
          <p className="mt-4 text-brand-silver text-lg max-w-2xl mx-auto leading-relaxed">
            We don't just manufacture machines — we engineer solutions that transform
            your sheet metal fabrication capabilities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-brand-steel/30 border border-brand-silver/10 rounded-2xl p-8 hover:border-brand-gold/40 hover:bg-brand-steel/50 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-gold/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="text-brand-white font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-brand-silver text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
