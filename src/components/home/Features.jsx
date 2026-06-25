import { Shield, Zap, Settings, Award, Headphones, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Every machine is constructed with premium-grade steel and precision-machined components, ensuring decades of reliable operation in demanding environments.',
  },
  {
    icon: Zap,
    title: 'High-Speed Performance',
    description:
      'Advanced servo-electric and hydraulic drive systems deliver rapid cycle times without compromising accuracy — maximising your production throughput.',
  },
  {
    icon: Settings,
    title: 'CNC Precision Control',
    description:
      'Intuitive touch-screen HMI with programmable back gauge, angle control, and multi-step bending sequences for complex profiles with zero rework.',
  },
  {
    icon: Award,
    title: 'ISO Certified Quality',
    description:
      'All ARTITECT machines are manufactured under strict ISO 9001 quality management systems, with full CE certification for global compliance.',
  },
  {
    icon: Headphones,
    title: 'Expert After-Sales Support',
    description:
      'Our global network of trained engineers provides installation, commissioning, operator training, and rapid spare parts supply wherever you are.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'With distribution partners in over 40 countries, ARTITECT MACHINERY delivers world-class folding solutions to fabricators on every continent.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-[#0D1B2A]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-widest uppercase text-[#C9A84C] font-semibold">
            Why Choose ARTITECT
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mt-3 mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Engineering Excellence,{' '}
            <span className="text-[#C9A84C]">Every Detail</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            We don't just build machines — we engineer competitive advantages for
            metal fabricators who demand the best.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl bg-[#1C3A5E]/40 border border-white/10 hover:border-[#C9A84C]/40 hover:bg-[#1C3A5E]/70 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/15 flex items-center justify-center mb-6 group-hover:bg-[#C9A84C]/25 transition-colors">
                  <Icon className="w-6 h-6 text-[#C9A84C]" />
                </div>
                <h3
                  className="text-xl font-bold text-white mb-3"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
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
