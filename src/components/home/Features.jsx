import { Shield, Zap, Settings, Award, Headphones, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Every machine is constructed with premium-grade steel and precision-machined components, ensuring decades of reliable performance in demanding environments.',
  },
  {
    icon: Zap,
    title: 'High-Speed Production',
    description:
      'Advanced servo-drive technology delivers rapid cycle times without sacrificing accuracy — maximizing your throughput and profitability.',
  },
  {
    icon: Settings,
    title: 'CNC Precision Control',
    description:
      'Intuitive CNC interfaces with programmable memory allow operators to store and recall complex bend sequences with a single touch.',
  },
  {
    icon: Award,
    title: 'ISO Certified Quality',
    description:
      'All ARTITECT machines are manufactured under strict ISO 9001 quality management standards, backed by comprehensive testing before delivery.',
  },
  {
    icon: Headphones,
    title: 'Global After-Sales Support',
    description:
      'Our dedicated support network spans 80+ countries, providing rapid response, spare parts, and on-site technical assistance wherever you are.',
  },
  {
    icon: Globe,
    title: 'Worldwide Delivery',
    description:
      'From factory to your floor — ARTITECT handles logistics, installation, and commissioning to ensure your machine is operational from day one.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 lg:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="font-sans text-xs font-semibold text-gold tracking-[0.3em] uppercase mb-4">
            Why Choose ARTITECT
          </p>
          <h2 className="font-serif text-3xl lg:text-5xl font-bold text-white mb-4">
            The ARTITECT Advantage
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto mb-6" />
          <p className="font-sans text-white/65 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            We don't just manufacture machines — we engineer solutions that transform your production capabilities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-8 border border-white/10 hover:border-gold/40 transition-all duration-300 hover:bg-white/5"
              >
                <div className="w-12 h-12 bg-gold/15 flex items-center justify-center mb-6 group-hover:bg-gold/25 transition-colors duration-300">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="font-sans text-sm text-white/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
