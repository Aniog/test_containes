import { Gauge, ShieldCheck, Settings2, Headphones, Zap, Globe } from 'lucide-react';

const features = [
  {
    icon: Gauge,
    title: 'Unmatched Precision',
    description:
      'Every machine is calibrated to ±0.1mm accuracy, ensuring consistent, repeatable bends across every production run.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to Last',
    description:
      'Heavy-gauge steel frames and precision-ground components deliver decades of reliable performance in demanding industrial environments.',
  },
  {
    icon: Settings2,
    title: 'CNC Intelligence',
    description:
      'Advanced CNC controls with intuitive touchscreen interfaces allow operators to program complex profiles quickly and accurately.',
  },
  {
    icon: Headphones,
    title: 'Global Support',
    description:
      'Our worldwide service network ensures rapid response, spare parts availability, and expert technical support wherever you operate.',
  },
  {
    icon: Zap,
    title: 'Fast Setup',
    description:
      'Quick-change tooling systems and programmable back gauges minimize changeover time, maximizing your production uptime.',
  },
  {
    icon: Globe,
    title: 'Worldwide Delivery',
    description:
      'We deliver and commission machines in over 40 countries, with full installation support and operator training included.',
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="bg-[#0D1B2A] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-[#C8922A]" />
            <span className="text-[#C8922A] text-xs tracking-[0.4em] uppercase font-inter font-medium">
              Why Choose Artitect
            </span>
            <div className="w-8 h-px bg-[#C8922A]" />
          </div>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Engineering Excellence
            <span className="block text-[#C8922A]">in Every Detail</span>
          </h2>
          <p className="text-white/60 font-inter text-lg max-w-2xl mx-auto leading-relaxed">
            From design to delivery, we engineer every machine to exceed the demands of modern metal fabrication.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="border border-white/10 hover:border-[#C8922A]/40 p-8 group transition-all duration-300 hover:bg-[#1B3A5C]/30"
              >
                <div className="w-12 h-12 bg-[#C8922A]/10 border border-[#C8922A]/30 flex items-center justify-center mb-6 group-hover:bg-[#C8922A]/20 transition-colors">
                  <Icon className="w-6 h-6 text-[#C8922A]" />
                </div>
                <h3
                  className="text-xl font-semibold text-white mb-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {feature.title}
                </h3>
                <p className="text-white/55 font-inter text-sm leading-relaxed">
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

export default FeaturesSection;
