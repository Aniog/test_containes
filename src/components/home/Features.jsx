import { Shield, Zap, Settings, Award, Globe, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Uncompromising Precision',
    description:
      'Every machine is calibrated to ±0.01mm tolerances, ensuring consistent, repeatable bends across thousands of production cycles.',
  },
  {
    icon: Zap,
    title: 'High-Speed Performance',
    description:
      'Servo-electric drives deliver rapid cycle times without sacrificing accuracy — maximizing your throughput and profitability.',
  },
  {
    icon: Settings,
    title: 'Advanced CNC Control',
    description:
      'Intuitive touchscreen CNC systems with offline programming capability let operators set up complex jobs in minutes, not hours.',
  },
  {
    icon: Award,
    title: 'ISO-Certified Quality',
    description:
      'All ARTITECT machines are manufactured under ISO 9001 quality management standards, backed by rigorous factory acceptance testing.',
  },
  {
    icon: Globe,
    title: 'Global Service Network',
    description:
      'With service partners in over 40 countries, expert support and genuine spare parts are always within reach wherever you operate.',
  },
  {
    icon: Headphones,
    title: 'Lifetime Technical Support',
    description:
      'Our dedicated engineering team provides lifetime technical support, remote diagnostics, and on-site assistance to keep you running.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-brand-navy">
      {/* Top gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent mb-24" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase">
            Why Choose ARTITECT
          </span>
          <h2 className="font-heading font-bold text-brand-white text-4xl md:text-5xl mt-3 mb-5">
            The ARTITECT Advantage
          </h2>
          <p className="text-brand-silver text-lg max-w-2xl mx-auto leading-relaxed">
            Decades of engineering expertise distilled into machines that set the
            industry benchmark for precision, reliability, and value.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-8 rounded-2xl border border-brand-silver/10 hover:border-brand-gold/30 bg-brand-steel/20 hover:bg-brand-steel/40 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 border border-brand-gold/20 flex items-center justify-center mb-5 group-hover:bg-brand-gold/20 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-brand-gold" />
                </div>
                <h3 className="font-heading font-semibold text-brand-white text-lg mb-3">
                  {feature.title}
                </h3>
                <p className="text-brand-silver text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom gold line */}
      <div className="h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent mt-24" />
    </section>
  );
};

export default Features;
