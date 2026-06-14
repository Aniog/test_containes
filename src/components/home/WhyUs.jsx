import { Shield, Zap, Settings, Headphones, Award, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    desc: 'Every machine is constructed with heavy-gauge steel frames and precision-ground components for decades of reliable service.',
  },
  {
    icon: Zap,
    title: 'High Productivity',
    desc: 'Fast cycle times, quick tooling changes, and intuitive controls keep your production line moving at peak efficiency.',
  },
  {
    icon: Settings,
    title: 'Precision Engineering',
    desc: 'CNC-controlled folding with angle accuracy to ±0.1° ensures every bend meets your exact specifications, every time.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    desc: 'Our dedicated technical team provides installation, training, and ongoing support to maximise your machine uptime.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    desc: 'All ARTITECT machines meet international safety and quality standards, backed by comprehensive warranty coverage.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    desc: 'With customers in over 40 countries, we have the experience and logistics network to deliver anywhere in the world.',
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-navy relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-steel/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-gold">Why Choose Us</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3 mb-4">
            The ARTITECT Advantage
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            We combine decades of engineering expertise with a commitment to customer success — delivering machines that perform and partnerships that last.
          </p>
          <div className="w-16 h-1 bg-gold mx-auto mt-6 rounded-full" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="bg-white/5 hover:bg-white/10 border border-white/10 hover:border-gold/30 rounded-xl p-7 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-steel/20 group-hover:bg-steel/30 rounded-lg flex items-center justify-center mb-5 transition-colors">
                  <Icon size={22} className="text-sky" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
