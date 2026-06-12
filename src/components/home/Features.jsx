import { Cpu, Shield, Zap, Settings, BarChart2, Headphones } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'Advanced CNC Control',
    desc: 'State-of-the-art CNC systems with intuitive touch-screen interfaces for precise, programmable folding sequences.',
  },
  {
    icon: Shield,
    title: 'Industrial Durability',
    desc: 'Heavy-gauge steel frames and precision-ground components ensure decades of reliable, high-load operation.',
  },
  {
    icon: Zap,
    title: 'High-Speed Performance',
    desc: 'Servo-driven and hydraulic systems deliver rapid cycle times without compromising accuracy or finish quality.',
  },
  {
    icon: Settings,
    title: 'Easy Setup & Tooling',
    desc: 'Quick-change tooling systems and guided setup wizards minimize downtime and reduce operator training time.',
  },
  {
    icon: BarChart2,
    title: 'Production Analytics',
    desc: 'Built-in production counters and diagnostics give you real-time insight into machine performance and output.',
  },
  {
    icon: Headphones,
    title: 'Global After-Sales Support',
    desc: 'Dedicated technical support teams, spare parts availability, and on-site service in over 40 countries.',
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-[#0B1C2C] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-medium tracking-widest uppercase">
              Why Choose Us
            </span>
            <div className="h-px w-10 bg-[#C9A84C]" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Built for Professionals
          </h2>
          <p className="text-[#8A9BB0] text-lg max-w-2xl mx-auto leading-relaxed">
            Every ARTITECT machine is designed with the fabricator in mind — combining
            cutting-edge technology with practical, shop-floor usability.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-[#1A3A5C] rounded-2xl p-8 border border-[#C9A84C]/10 hover:border-[#C9A84C]/40 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#C9A84C]/10 flex items-center justify-center mb-5 group-hover:bg-[#C9A84C]/20 transition-colors">
                  <Icon className="text-[#C9A84C]" size={24} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-3">{feature.title}</h3>
                <p className="text-[#8A9BB0] text-sm leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
