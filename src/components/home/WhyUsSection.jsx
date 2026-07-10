import { Shield, Zap, Settings, Headphones, Award, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Every machine is constructed from premium-grade steel and components, engineered to withstand decades of continuous industrial use.',
  },
  {
    icon: Zap,
    title: 'High Precision',
    description: 'CNC-controlled folding with tolerances as tight as ±0.1mm ensures every bend is exactly where it needs to be, every time.',
  },
  {
    icon: Settings,
    title: 'Easy to Operate',
    description: 'Intuitive touch-screen interfaces and programmable memory make setup fast and operation accessible for all skill levels.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Our global team of engineers provides installation, training, and ongoing technical support to keep your production running.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    description: 'All ARTITECT machines meet international safety and quality standards including CE, ISO 9001, and industry-specific certifications.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'With distribution and service partners in over 40 countries, we deliver and support your machine wherever you operate.',
  },
];

const WhyUsSection = () => {
  return (
    <section id="why-us" className="bg-steel-800 py-24 md:py-32 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-gold-500 text-sm font-inter font-semibold uppercase tracking-widest mb-3 block">
            Why Choose ARTITECT
          </span>
          <h2 className="font-barlow font-bold text-4xl md:text-5xl text-steel-100 tracking-tight mb-4">
            The ARTITECT Advantage
          </h2>
          <p className="font-inter text-steel-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We don't just manufacture machines — we engineer competitive advantages for your fabrication business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group bg-steel-900/60 border border-steel-700 rounded-2xl p-7 hover:border-gold-500/50 hover:bg-steel-900/80 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gold-500/10 border border-gold-500/20 rounded-xl flex items-center justify-center mb-5 group-hover:bg-gold-500/20 transition-colors duration-300">
                  <Icon size={22} className="text-gold-500" />
                </div>
                <h3 className="font-barlow font-bold text-lg text-steel-100 mb-3">
                  {feature.title}
                </h3>
                <p className="font-inter text-steel-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-gold-500/10 via-gold-500/5 to-transparent border border-gold-500/20 rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-barlow font-bold text-2xl text-steel-100 mb-2">
              Ready to upgrade your fabrication line?
            </h3>
            <p className="font-inter text-steel-400 text-sm">
              Talk to our engineers and find the perfect machine for your needs.
            </p>
          </div>
          <button
            onClick={() => {
              const el = document.querySelector('#contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="shrink-0 bg-gold-500 hover:bg-gold-400 text-steel-900 font-inter font-semibold px-8 py-3.5 rounded-full transition-all duration-200 shadow-lg shadow-gold-500/20 whitespace-nowrap"
          >
            Talk to an Engineer
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
