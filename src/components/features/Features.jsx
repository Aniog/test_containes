import { useEffect, useRef } from 'react';
import {
  Shield, Cog, Headphones, Award, Wrench, Gauge, Clock, Globe
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    icon: Shield,
    title: 'Unmatched Durability',
    description: 'Heavy-duty welded steel frames and hardened components ensure our machines withstand the demands of continuous industrial operation.',
  },
  {
    icon: Gauge,
    title: 'Precision Engineering',
    description: 'CNC-controlled bending systems deliver accuracy within 0.1° tolerance, ensuring every fold meets exact specifications every time.',
  },
  {
    icon: Cog,
    title: 'Advanced Technology',
    description: 'Integrated PLC controls, touchscreen interfaces, and programmable bending sequences streamline your production workflow.',
  },
  {
    icon: Clock,
    title: 'Fast Production',
    description: 'High-speed hydraulic systems and quick-change tooling reduce setup times and maximize your throughput and productivity.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    description: 'Designed with accessibility in mind, our machines feature centralized lubrication, modular components, and minimal maintenance intervals.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description: 'Our dedicated technical team provides round-the-clock support, remote diagnostics, and on-site service when you need it.',
  },
  {
    icon: Award,
    title: 'ISO Certified',
    description: 'All ARTITECT machinery meets ISO 9001:2015 quality standards, ensuring consistent manufacturing excellence and reliability.',
  },
  {
    icon: Globe,
    title: 'Global Delivery',
    description: 'We ship and install machines worldwide, with full commissioning, operator training, and after-sales support in your region.',
  },
];

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current);
    }
  }, []);

  return (
    <section id="features" ref={containerRef} className="section-padding bg-surface-100">
      <div className="container-width">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-bold text-brand-gold uppercase tracking-widest mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy mb-6">
            Built for the{' '}
            <span className="text-brand-gold">Toughest</span>{' '}
            Challenges
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Every ARTITECT machine is designed and manufactured to deliver
            exceptional performance, reliability, and value throughout its
            operational lifetime.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white p-6 rounded-xl border border-surface-200 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-brand-navy/5 group-hover:bg-brand-gold/10 flex items-center justify-center mb-4 transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-brand-navy group-hover:text-brand-gold transition-colors duration-300" />
              </div>
              <h3 className="text-lg font-bold text-brand-navy mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="mt-16 bg-navy-gradient rounded-2xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
            Ready to Upgrade Your Production Line?
          </h3>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
            Get a personalized consultation and discover which ARTITECT
            machine is the perfect fit for your manufacturing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-secondary text-base">
              Schedule Consultation
            </a>
            <a href="#products" className="inline-flex items-center justify-center gap-2 text-white font-semibold px-6 py-3 rounded-lg border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/5">
              View All Products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
