import { Settings, Shield, Zap, Wrench, BarChart2, Globe } from 'lucide-react';

const features = [
  {
    icon: Settings,
    title: 'CNC Precision Control',
    description: 'Advanced CNC systems deliver repeatable accuracy to ±0.1mm, ensuring every fold meets exact specifications.',
  },
  {
    icon: Shield,
    title: 'Industrial-Grade Build',
    description: 'Heavy-duty welded steel frames and hardened tooling guarantee decades of reliable, maintenance-free operation.',
  },
  {
    icon: Zap,
    title: 'High-Speed Operation',
    description: 'Servo-electric and hydraulic drive options enable rapid cycle times without compromising fold quality.',
  },
  {
    icon: Wrench,
    title: 'Easy Tool Change',
    description: 'Quick-release tooling systems minimize downtime between jobs, maximizing your production throughput.',
  },
  {
    icon: BarChart2,
    title: 'Smart Diagnostics',
    description: 'Integrated monitoring and diagnostics provide real-time performance data and predictive maintenance alerts.',
  },
  {
    icon: Globe,
    title: 'Global Support Network',
    description: 'Dedicated service engineers and spare parts depots in over 80 countries ensure you are never left waiting.',
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-offwhite">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="font-inter text-xs text-gold tracking-[0.35em] uppercase mb-4">Why Choose ARTITECT</p>
          <h2 className="font-playfair font-bold text-4xl md:text-5xl text-steel mb-5">
            Built to Perform. Designed to Last.
          </h2>
          <p className="font-inter text-base text-charcoal/70 max-w-2xl mx-auto">
            Every ARTITECT machine is the result of decades of engineering expertise, rigorous quality control, and a relentless commitment to customer success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 border border-mist shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-steel flex items-center justify-center mb-5 group-hover:bg-iron transition-colors duration-200">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="font-playfair font-semibold text-xl text-steel mb-3">{feature.title}</h3>
                <p className="font-inter text-sm text-charcoal/70 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
