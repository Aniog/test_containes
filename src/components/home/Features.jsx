import { Shield, Zap, Settings, Headphones, Award, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Every machine is constructed with precision-ground components and high-grade steel, ensuring decades of reliable operation in demanding industrial environments.',
  },
  {
    icon: Zap,
    title: 'High Productivity',
    description:
      'Optimized cycle times and fast tool-change systems keep your production line moving. Our machines are engineered to maximize output without sacrificing quality.',
  },
  {
    icon: Settings,
    title: 'Precision Engineering',
    description:
      'Tolerances of ±0.1mm are standard across our range. CNC-controlled back gauges and digital angle readouts ensure every fold is exactly where it needs to be.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description:
      'Our global service network provides installation, training, and ongoing technical support. We are with you from commissioning through the full lifecycle of your machine.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    description:
      'All ARTITECT machines meet CE, ISO 9001, and relevant international safety standards. Quality is not an option — it is built into every component we manufacture.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'With customers in over 40 countries, ARTITECT MACHINERY has the experience and logistics capability to deliver and support machines anywhere in the world.',
  },
];

const Features = () => (
  <section id="features" className="bg-mist py-24">
    <div className="max-w-7xl mx-auto px-6">
      {/* Section header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-3 mb-4">
          <div className="h-px w-10 bg-gold" />
          <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">Why ARTITECT</span>
          <div className="h-px w-10 bg-gold" />
        </div>
        <h2 className="font-serif font-bold text-4xl md:text-5xl text-navy-deep mb-4">
          Engineering Excellence,{' '}
          <span className="text-steel-blue">Every Time</span>
        </h2>
        <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed">
          We do not just manufacture machines — we engineer solutions that transform your sheet metal fabrication capabilities.
        </p>
      </div>

      {/* Features grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/80 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group border border-gray-100"
            >
              <div className="w-14 h-14 rounded-xl bg-navy-deep flex items-center justify-center mb-6 group-hover:bg-steel-blue transition-colors">
                <Icon size={24} className="text-gold" />
              </div>
              <h3 className="font-serif font-bold text-xl text-navy-deep mb-3">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA banner */}
      <div className="mt-16 bg-navy-deep rounded-2xl p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <h3 className="font-serif font-bold text-2xl md:text-3xl text-off-white mb-2">
            Ready to upgrade your production?
          </h3>
          <p className="text-light-gray text-base">
            Talk to our engineering team and find the right machine for your application.
          </p>
        </div>
        <button
          onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="shrink-0 bg-gold text-navy-deep font-semibold px-8 py-4 rounded-full hover:bg-gold-light transition-all duration-200 text-base tracking-wide shadow-lg shadow-gold/20 whitespace-nowrap"
        >
          Contact Our Team
        </button>
      </div>
    </div>
  </section>
);

export default Features;
