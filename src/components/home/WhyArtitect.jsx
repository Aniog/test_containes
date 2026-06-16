import { Shield, Zap, Settings, Headphones, Award, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Every machine is constructed with premium-grade steel and components, engineered to withstand decades of continuous industrial use.',
  },
  {
    icon: Zap,
    title: 'High Precision',
    description: 'CNC-controlled folding with tolerances as tight as ±0.1mm ensures consistent, repeatable results across every production run.',
  },
  {
    icon: Settings,
    title: 'Easy Operation',
    description: 'Intuitive touch-screen interfaces and programmable sequences reduce operator training time and minimize setup errors.',
  },
  {
    icon: Headphones,
    title: 'Global Support',
    description: 'Our worldwide service network provides rapid on-site support, remote diagnostics, and genuine spare parts delivery.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    description: 'ISO 9001 certified manufacturing processes and CE-marked machines meet the highest international safety and quality standards.',
  },
  {
    icon: Globe,
    title: 'Worldwide Delivery',
    description: 'We deliver and commission machines in over 40 countries, with full installation support and operator training included.',
  },
];

const WhyArtitect = () => {
  return (
    <section id="why" className="bg-brand-navy py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-brand-gold text-xs tracking-widest uppercase font-sans font-semibold mb-3">
            Why Choose Us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-white mb-4">
            The Artitect Advantage
          </h2>
          <div className="w-16 h-1 bg-brand-gold mx-auto mb-6" />
          <p className="text-brand-silver text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            More than machines — we deliver a complete manufacturing partnership backed by decades of expertise and a commitment to your success.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="border border-brand-steel/50 p-8 hover:border-brand-gold/50 hover:bg-brand-steel/20 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center mb-6 group-hover:bg-brand-gold/20 transition-colors">
                  <Icon size={22} className="text-brand-gold" />
                </div>
                <h3 className="font-serif text-xl font-bold text-brand-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-brand-silver text-sm leading-relaxed font-sans">
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

export default WhyArtitect;
