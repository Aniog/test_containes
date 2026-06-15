import { Shield, Zap, Settings, Award, Headphones, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Every ARTITECT machine is constructed with premium-grade steel and precision-machined components, engineered for decades of reliable operation.',
  },
  {
    icon: Zap,
    title: 'High-Speed Performance',
    description:
      'Advanced hydraulic and servo-electric drive systems deliver rapid cycle times without sacrificing accuracy or repeatability.',
  },
  {
    icon: Settings,
    title: 'Easy to Operate',
    description:
      'Intuitive touchscreen controls and smart programming interfaces make setup fast and operation accessible for all skill levels.',
  },
  {
    icon: Award,
    title: 'ISO Certified Quality',
    description:
      'All machines are manufactured under strict ISO 9001 quality management systems, ensuring every unit meets the highest standards.',
  },
  {
    icon: Headphones,
    title: 'Global After-Sales Support',
    description:
      'Our worldwide network of service engineers provides rapid response, spare parts, and technical support wherever you operate.',
  },
  {
    icon: Globe,
    title: 'Worldwide Delivery',
    description:
      'We ship and install machines in over 80 countries, with full commissioning, training, and documentation in your language.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-navy">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold tracking-widest uppercase text-gold mb-3">
            Why Choose ARTITECT
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-white mb-5">
            Engineering Excellence,
            <br />
            <span className="text-gold">Delivered Every Time</span>
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-lg">
            We combine decades of manufacturing expertise with cutting-edge technology to give you the competitive edge.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 hover:border-gold/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold/30 transition-colors">
                  <Icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display font-semibold text-xl text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
