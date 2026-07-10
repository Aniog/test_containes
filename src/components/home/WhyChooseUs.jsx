import { Shield, Zap, Settings, Award, Wrench, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Industrial Grade Build',
    description: 'Heavy-duty steel construction engineered to withstand continuous production demands without compromise.',
  },
  {
    icon: Zap,
    title: 'High-Speed Performance',
    description: 'Advanced drive systems deliver rapid cycle times while maintaining precise fold accuracy across all materials.',
  },
  {
    icon: Settings,
    title: 'Precision Engineering',
    description: 'Tight tolerances and CNC-controlled folding ensure consistent, repeatable results on every single part.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    description: 'All machines meet international safety and quality standards, backed by comprehensive certification.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Designed for accessibility — routine maintenance is straightforward, minimizing downtime and service costs.',
  },
  {
    icon: Globe,
    title: 'Global Support',
    description: 'Worldwide network of trained technicians and spare parts availability ensures your machine stays running.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-brand-light py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-px bg-brand-gold" />
            <span className="text-brand-gold text-xs font-semibold uppercase tracking-[0.3em]">
              Why ARTITECT
            </span>
            <div className="w-8 h-px bg-brand-gold" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-brand-navy mb-4">
            Built for Those Who Demand More
          </h2>
          <p className="text-brand-steel/70 text-lg max-w-2xl mx-auto leading-relaxed">
            Every ARTITECT machine is the result of decades of engineering expertise, designed to exceed the expectations of modern metal fabrication.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 border border-brand-light shadow-sm hover:shadow-lg hover:border-brand-gold/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center mb-5 group-hover:bg-brand-gold transition-colors duration-300">
                  <Icon className="w-6 h-6 text-brand-gold group-hover:text-brand-navy transition-colors duration-300" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-brand-navy mb-3">{feature.title}</h3>
                <p className="text-brand-steel/70 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
