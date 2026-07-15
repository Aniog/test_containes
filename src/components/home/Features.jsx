import { Cpu, Shield, Zap, Settings, BarChart3, Headphones } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'CNC Precision Control',
    description:
      'Advanced CNC systems with intuitive touch-screen interfaces allow operators to program complex bend sequences with ease, ensuring repeatable accuracy across every production run.',
  },
  {
    icon: Shield,
    title: 'Industrial-Grade Build',
    description:
      'Every machine is constructed from high-tensile steel with precision-machined components, designed to withstand the rigors of continuous industrial operation for decades.',
  },
  {
    icon: Zap,
    title: 'High-Speed Performance',
    description:
      'Servo-electric and servo-hydraulic drive systems deliver rapid cycle times and energy efficiency, maximizing throughput without sacrificing precision or quality.',
  },
  {
    icon: Settings,
    title: 'Quick Tooling Changeover',
    description:
      'Modular tooling systems and quick-release clamping mechanisms minimize downtime between jobs, keeping your production line running at peak efficiency.',
  },
  {
    icon: BarChart3,
    title: 'Industry 4.0 Ready',
    description:
      'Remote monitoring, predictive maintenance alerts, and data analytics integration make ARTITECT machines ready for the connected factory of tomorrow.',
  },
  {
    icon: Headphones,
    title: 'Global Service Network',
    description:
      'Our worldwide network of certified service engineers ensures rapid response times, comprehensive training, and ongoing technical support wherever you operate.',
  },
];

const Features = () => {
  return (
    <section id="features" className="bg-steel-800 py-24 md:py-32 border-t border-steel-600/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Section Header */}
        <div className="mb-16 max-w-2xl">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-gold-500" />
            <span className="text-gold-500 text-xs font-semibold tracking-[0.3em] uppercase">
              Why Choose ARTITECT
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-steel-100 mb-4">
            Built for Performance. Designed for People.
          </h2>
          <p className="text-steel-400 text-lg leading-relaxed">
            Every feature of an ARTITECT machine is engineered with one goal: to give your team
            the tools to produce exceptional work, efficiently and reliably.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-steel-900 border border-steel-600/60 hover:border-gold-500/50 p-8 transition-all duration-300 hover:shadow-lg hover:shadow-black/30"
              >
                <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mb-6 group-hover:bg-gold-500/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-gold-500" />
                </div>
                <h3 className="text-steel-100 font-bold text-lg mb-3 group-hover:text-gold-400 transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-steel-400 text-sm leading-relaxed">
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
