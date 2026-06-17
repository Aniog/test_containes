import { useEffect, useRef } from 'react';
import { Award, Wrench, HeadphonesIcon, Truck, Factory, BadgeCheck } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    icon: Award,
    title: 'German Engineering',
    description: 'Precision-crafted components and rigorous quality control ensure every machine meets exacting European standards.',
  },
  {
    icon: Factory,
    title: 'In-House Manufacturing',
    description: 'Every machine is built, tested, and calibrated in our own facilities for complete quality assurance.',
  },
  {
    icon: Wrench,
    title: 'Full Support Package',
    description: 'Comprehensive installation, training, and ongoing technical support from our global service network.',
  },
  {
    icon: BadgeCheck,
    title: 'Certified Quality',
    description: 'ISO 9001:2015 certified manufacturing processes with CE compliance on all machine models.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Customer Care',
    description: 'Round-the-clock technical assistance and remote diagnostics to minimize production downtime.',
  },
  {
    icon: Truck,
    title: 'Global Logistics',
    description: 'Streamlined worldwide shipping with white-glove delivery and on-site setup coordination.',
  },
];

export default function FeaturesSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="features" className="py-20 md:py-28 bg-brand-cream" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 mb-16 md:mb-20">
          <div className="md:w-1/2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-brand-gold" />
              <span className="text-brand-navy tracking-[0.3em] text-sm uppercase font-medium">
                Why Choose Us
              </span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-brand-navy mb-6">
              Built for Precision.
              <br />
              Built to Last.
            </h2>
            <p className="text-[#5A6478] text-lg leading-relaxed">
              With over two decades of experience in metal forming technology,
              ARTITECT MACHINERY combines innovative design with robust
              construction to deliver folding solutions that outperform.
            </p>
          </div>

          {/* Stats */}
          <div className="md:w-1/2 grid grid-cols-2 gap-6 content-start">
            {[
              { value: '20+', label: 'Years Experience' },
              { value: '3,500+', label: 'Machines Delivered' },
              { value: '60+', label: 'Export Countries' },
              { value: '99.2%', label: 'Uptime Rate' },
            ].map((stat) => (
              <div key={stat.label} className="border border-[#E2E0DC] bg-white p-6 text-center">
                <div className="font-serif text-3xl md:text-4xl text-brand-gold font-bold mb-1">
                  {stat.value}
                </div>
                <div className="text-[#5A6478] text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 md:p-8 border border-[#E2E0DC] hover:border-brand-gold/30 hover:shadow-md transition-all duration-300"
            >
              <div className="w-12 h-12 bg-brand-navy flex items-center justify-center mb-5">
                <feature.icon size={22} className="text-brand-gold" />
              </div>
              <h3 className="font-serif text-xl text-brand-navy mb-3">
                {feature.title}
              </h3>
              <p className="text-[#5A6478] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}