import { Shield, Zap, Settings, Award, Globe, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Every ARTITECT machine is constructed from premium-grade steel with precision-machined components, ensuring decades of reliable operation in demanding industrial environments.',
  },
  {
    icon: Zap,
    title: 'High-Speed Performance',
    description:
      'Our servo-electric and hydraulic drive systems deliver rapid cycle times without sacrificing accuracy — keeping your production line moving at full capacity.',
  },
  {
    icon: Settings,
    title: 'Easy to Operate',
    description:
      'Intuitive touchscreen HMI interfaces and programmable fold sequences mean your operators can get up to speed quickly, reducing training time and errors.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    description:
      'All ARTITECT machines are CE certified and manufactured to ISO 9001 standards. Every unit undergoes rigorous quality control before leaving our facility.',
  },
  {
    icon: Globe,
    title: 'Global Support Network',
    description:
      'With service partners in over 40 countries, ARTITECT provides fast, reliable technical support and spare parts delivery wherever you operate.',
  },
  {
    icon: Headphones,
    title: 'Lifetime Technical Support',
    description:
      'Our engineering team is available for remote diagnostics, on-site service, and ongoing technical consultation throughout the life of your machine.',
  },
];

const FeaturesSection = () => (
  <section id="features" className="py-24 lg:py-32 bg-navy">
    <div className="max-w-7xl mx-auto px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center mb-16">
        <p className="text-gold text-sm font-semibold uppercase tracking-widest mb-3">Why Choose ARTITECT</p>
        <h2 className="text-4xl lg:text-5xl font-bold text-surface tracking-tight mb-5">
          Engineering Excellence,<br className="hidden lg:block" /> Every Time
        </h2>
        <div className="w-16 h-1 bg-gold mx-auto mb-6" />
        <p className="text-surface/65 text-lg max-w-2xl mx-auto leading-relaxed">
          We don't just manufacture machines — we engineer solutions that transform
          your metal fabrication capabilities.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="bg-surface-dark rounded-lg p-8 border border-surface/10 hover:border-gold/30 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                <Icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="text-surface text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-surface/60 text-sm leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
