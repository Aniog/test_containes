import { Shield, Zap, Settings, Headphones, Award, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Every machine is constructed with premium-grade steel and precision-machined components, ensuring decades of reliable service.',
  },
  {
    icon: Zap,
    title: 'High Throughput',
    description:
      'Advanced servo-electric and hydraulic drive systems deliver fast cycle times without compromising on bend accuracy.',
  },
  {
    icon: Settings,
    title: 'Easy to Operate',
    description:
      'Intuitive touch-screen HMI and programmable controls reduce setup time and allow operators of all skill levels to achieve perfect results.',
  },
  {
    icon: Headphones,
    title: 'Global Support',
    description:
      'Our dedicated service team provides remote diagnostics, on-site support, and spare parts delivery worldwide.',
  },
  {
    icon: Award,
    title: 'ISO Certified Quality',
    description:
      'All ARTITECT machines are manufactured under strict ISO 9001 quality management standards for consistent excellence.',
  },
  {
    icon: Globe,
    title: 'Worldwide Delivery',
    description:
      'We ship and commission machines in over 40 countries, with local service partners in all major industrial regions.',
  },
];

const WhyUsSection = () => (
  <section id="why-us" className="py-24 md:py-32 bg-brand-navy relative overflow-hidden">
    {/* Decorative background element */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-steel/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

    <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
      {/* Section header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 mb-4">
          <div className="w-8 h-px bg-brand-gold" />
          <span className="font-body text-brand-gold text-xs font-semibold tracking-[0.25em] uppercase">
            Why ARTITECT
          </span>
          <div className="w-8 h-px bg-brand-gold" />
        </div>
        <h2 className="font-heading text-white text-4xl md:text-5xl font-bold mb-5">
          The ARTITECT Advantage
        </h2>
        <p className="font-body text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
          We don't just manufacture machines — we engineer solutions that transform your
          production capabilities and deliver measurable results.
        </p>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="group bg-brand-steel/40 border border-white/10 rounded-2xl p-8 hover:bg-brand-steel/70 hover:border-brand-gold/30 transition-all duration-400"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-gold/15 flex items-center justify-center mb-5 group-hover:bg-brand-gold/25 transition-colors">
                <Icon className="w-6 h-6 text-brand-gold" />
              </div>
              <h3 className="font-heading text-white text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="font-body text-white/60 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
