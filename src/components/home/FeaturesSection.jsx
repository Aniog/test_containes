import {
  Cpu,
  Shield,
  Zap,
  Settings,
  BarChart3,
  Headphones,
  Layers,
  Gauge,
} from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'CNC Precision Control',
    description: 'Advanced CNC systems deliver micron-level accuracy on every fold, ensuring consistent results across high-volume production runs.',
  },
  {
    icon: Shield,
    title: 'Industrial-Grade Build',
    description: 'Heavy-duty steel frames and precision-machined components guarantee decades of reliable operation in demanding environments.',
  },
  {
    icon: Zap,
    title: 'High-Speed Operation',
    description: 'Optimized hydraulic and servo-electric drive systems maximize throughput without sacrificing precision or material quality.',
  },
  {
    icon: Settings,
    title: 'Easy Setup & Tooling',
    description: 'Quick-change tooling systems and intuitive setup procedures minimize downtime and allow rapid job changeovers.',
  },
  {
    icon: BarChart3,
    title: 'Production Analytics',
    description: 'Integrated production monitoring tracks cycle times, output counts, and machine health for data-driven optimization.',
  },
  {
    icon: Headphones,
    title: 'Global Support Network',
    description: 'Dedicated technical support teams and remote diagnostics ensure maximum uptime wherever your facility is located.',
  },
  {
    icon: Layers,
    title: 'Multi-Material Capability',
    description: 'Engineered to handle mild steel, stainless steel, aluminum, galvanized, and coated sheet metals with equal precision.',
  },
  {
    icon: Gauge,
    title: 'Customizable Configurations',
    description: 'Modular design allows custom folding lengths, tooling profiles, and automation integrations to match your exact needs.',
  },
];

const FeaturesSection = () => (
  <section id="features" className="bg-brand-light py-24 px-6">
    <div className="max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 bg-brand-navy/10 border border-brand-navy/20 rounded-full px-5 py-2 mb-6">
          <span className="text-brand-navy text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Why Choose ARTITECT
          </span>
        </div>
        <h2
          className="text-brand-navy font-bold mb-4"
          style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(2rem, 4vw, 3rem)' }}
        >
          Built for Performance
        </h2>
        <p className="text-brand-steel text-lg max-w-2xl mx-auto leading-relaxed">
          Every feature of our folding machines is designed with one goal: to give you the most reliable, precise, and productive metal forming experience possible.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-6 border border-brand-navy/10 hover:border-brand-gold/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-brand-navy rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-gold transition-colors duration-300">
                <Icon className="w-6 h-6 text-brand-gold group-hover:text-brand-navy transition-colors duration-300" />
              </div>
              <h3
                className="text-brand-navy font-bold text-base mb-3"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {feature.title}
              </h3>
              <p className="text-brand-steel text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
