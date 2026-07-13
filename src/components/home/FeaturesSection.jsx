import { Cpu, Shield, Zap, Settings, Globe, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: Cpu,
    title: 'CNC Precision Control',
    description:
      'Advanced CNC systems with multi-axis control deliver repeatable accuracy down to ±0.1mm, ensuring every fold meets exact specifications.',
  },
  {
    icon: Shield,
    title: 'Industrial-Grade Build',
    description:
      'Heavy-duty welded steel frames, hardened tooling, and premium components guarantee decades of reliable operation in demanding environments.',
  },
  {
    icon: Zap,
    title: 'High-Speed Performance',
    description:
      'Servo-driven mechanisms and optimized kinematics reduce cycle times by up to 40% compared to conventional folding machines.',
  },
  {
    icon: Settings,
    title: 'Quick Tool Change',
    description:
      'Patented quick-change tooling system allows operators to switch profiles in under 5 minutes, maximizing uptime and production flexibility.',
  },
  {
    icon: Globe,
    title: 'Global Compliance',
    description:
      'All machines are CE certified and comply with international safety standards, ready for deployment in over 40 countries worldwide.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Lifetime Support',
    description:
      'Dedicated technical support, remote diagnostics, and a global spare parts network ensure your machine is always running at peak performance.',
  },
];

const FeaturesSection = () => (
  <section id="features" className="bg-brand-navy py-24">
    <div className="max-w-7xl mx-auto px-6">
      {/* Header */}
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="h-px w-10 bg-brand-accent" />
          <span className="font-inter font-semibold text-brand-accent text-xs tracking-[0.25em] uppercase">
            Why Choose ARTITECT
          </span>
          <div className="h-px w-10 bg-brand-accent" />
        </div>
        <h2 className="font-playfair font-bold text-4xl md:text-5xl text-white mb-4">
          Built Different. Built Better.
        </h2>
        <p className="font-inter text-brand-mid text-lg max-w-2xl mx-auto leading-relaxed">
          Every ARTITECT machine is the result of decades of engineering expertise,
          continuous innovation, and an uncompromising commitment to quality.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="group bg-brand-steel/30 border border-white/8 rounded-2xl p-8 hover:bg-brand-steel/50 hover:border-brand-accent/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-accent/15 flex items-center justify-center mb-6 group-hover:bg-brand-accent/25 transition-colors">
                <Icon size={24} className="text-brand-accent" />
              </div>
              <h3 className="font-playfair font-bold text-xl text-white mb-3">
                {feature.title}
              </h3>
              <p className="font-inter text-sm text-brand-mid leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA Banner */}
      <div className="mt-16 bg-gradient-to-r from-brand-accent/20 to-brand-accent/10 border border-brand-accent/25 rounded-2xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-playfair font-bold text-2xl text-white mb-2">
            Ready to see it in action?
          </h3>
          <p className="font-inter text-brand-mid text-base">
            Schedule a live demonstration at our facility or request a virtual walkthrough.
          </p>
        </div>
        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="flex-shrink-0 font-inter font-semibold text-base bg-brand-accent text-white px-8 py-4 rounded-full hover:bg-brand-accent-light transition-all duration-200 whitespace-nowrap"
        >
          Book a Demo
        </button>
      </div>
    </div>
  </section>
);

export default FeaturesSection;
