import { Shield, Zap, Settings, Headphones, Award, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-gauge steel frames and precision-ground components ensure decades of reliable operation in demanding industrial environments.',
  },
  {
    icon: Zap,
    title: 'High-Speed Performance',
    description: 'Advanced servo-electric and hydraulic drive systems deliver rapid cycle times without compromising fold accuracy or repeatability.',
  },
  {
    icon: Settings,
    title: 'Precision Engineering',
    description: 'CNC-controlled back gauges and digital angle readouts guarantee consistent results to within ±0.1° across every production run.',
  },
  {
    icon: Headphones,
    title: 'Global Support Network',
    description: 'Dedicated technical support teams and service engineers available worldwide to keep your production running at full capacity.',
  },
  {
    icon: Award,
    title: 'Industry Certified',
    description: 'All Artitect machines carry CE certification and comply with international safety and quality standards for industrial machinery.',
  },
  {
    icon: Globe,
    title: 'Worldwide Delivery',
    description: 'Machines delivered and commissioned in over 40 countries, with full installation support and operator training included.',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-steel/20 py-24 md:py-32 border-t border-border-steel">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold" />
            <span className="text-xs font-semibold tracking-widest uppercase text-gold">Why Artitect</span>
            <div className="h-px w-12 bg-gold" />
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-text-primary tracking-tight mb-4">
            The Artitect Advantage
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto leading-relaxed">
            From design to delivery, every Artitect machine reflects our commitment to precision, reliability, and customer success.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-surface border border-border-steel rounded-sm p-8 hover:border-gold/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-sm bg-gold/10 border border-gold/20 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                  <Icon className="w-6 h-6 text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold text-text-primary mb-3">{feature.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
