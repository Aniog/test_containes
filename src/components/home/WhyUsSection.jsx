import { Shield, Zap, Settings, Headphones, Award, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Uncompromising Quality',
    desc: 'Every machine is built to ISO standards with precision-ground components and rigorous quality control at every stage of production.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    desc: 'Servo-driven systems and advanced CNC controls deliver fast cycle times, high repeatability, and consistent accuracy across all production volumes.',
  },
  {
    icon: Settings,
    title: 'Custom Engineering',
    desc: 'We work closely with clients to engineer bespoke folding solutions tailored to specific materials, profiles, and production requirements.',
  },
  {
    icon: Headphones,
    title: '24/7 Technical Support',
    desc: 'Our global support network provides round-the-clock technical assistance, remote diagnostics, and rapid spare parts delivery.',
  },
  {
    icon: Award,
    title: 'Industry Certified',
    desc: 'All ARTITECT machines carry CE certification and comply with international safety and performance standards for industrial machinery.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    desc: 'With distribution partners and service centres across 40+ countries, ARTITECT delivers and supports machines wherever you operate.',
  },
];

const WhyUsSection = () => (
  <section id="why-us" className="bg-brand-light py-24 px-6">
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="font-body text-brand-gold uppercase tracking-[0.3em] text-sm font-semibold mb-3">Why Choose Us</p>
        <h2 className="font-heading font-800 text-brand-navy text-4xl md:text-5xl mb-4">
          The ARTITECT Advantage
        </h2>
        <div className="w-16 h-1 bg-brand-gold mx-auto mb-6" />
        <p className="font-body text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
          We don't just manufacture machines — we build long-term partnerships with our clients, backed by world-class engineering and unrivalled after-sales support.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="bg-brand-white p-8 border border-gray-200 hover:border-brand-gold hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-brand-navy flex items-center justify-center mb-6 group-hover:bg-brand-gold transition-colors duration-300">
                <Icon size={24} className="text-brand-gold group-hover:text-brand-navy transition-colors duration-300" />
              </div>
              <h3 className="font-heading font-700 text-brand-navy text-xl mb-3">{feature.title}</h3>
              <p className="font-body text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          );
        })}
      </div>

      {/* CTA Banner */}
      <div className="mt-20 bg-brand-navy p-12 text-center">
        <p className="font-body text-brand-gold uppercase tracking-[0.3em] text-sm font-semibold mb-4">Ready to Get Started?</p>
        <h3 className="font-heading font-800 text-brand-white text-3xl md:text-4xl mb-6">
          Find the Right Machine for Your Operation
        </h3>
        <p className="font-body text-brand-silver text-lg mb-8 max-w-xl mx-auto">
          Our engineering team is ready to help you select or customise the perfect folding machine solution.
        </p>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
          className="inline-block bg-brand-gold text-brand-navy font-heading font-semibold px-12 py-4 uppercase tracking-widest text-sm hover:bg-brand-gold-light transition-colors duration-200"
        >
          Talk to an Engineer
        </a>
      </div>
    </div>
  </section>
);

export default WhyUsSection;
