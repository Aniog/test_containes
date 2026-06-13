import { useEffect, useRef } from 'react';
import { Award, Truck, Shield, Wrench, Factory, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const highlights = [
  {
    icon: Factory,
    title: 'In-House Manufacturing',
    description:
      'Every machine is designed, engineered, and assembled in our state-of-the-art facility with strict quality controls.',
  },
  {
    icon: Shield,
    title: 'Rigorous Quality Assurance',
    description:
      'ISO 9001 certified processes with multi-stage testing before any machine leaves our factory floor.',
  },
  {
    icon: Wrench,
    title: 'Comprehensive Support',
    description:
      '24/7 technical assistance, spare parts availability, and on-site training for all our customers worldwide.',
  },
  {
    icon: Truck,
    title: 'Global Logistics Network',
    description:
      'We ship to over 60 countries with tailored packaging and customs documentation handled end-to-end.',
  },
  {
    icon: Award,
    title: 'Industry Recognition',
    description:
      'Awarded the European Machine Tool Innovation Prize three years running for our folding technology.',
  },
  {
    icon: Globe,
    title: 'Sustainable Engineering',
    description:
      'Our latest servo-electric models reduce energy consumption by up to 40% compared to hydraulic alternatives.',
  },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-20 md:py-28 bg-brand-dark"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          <div>
            <span className="inline-block text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
              Three Decades of
              <br />
              <span className="text-brand-gold">Precision Excellence</span>
            </h2>
            <p className="text-white/70 mb-4 leading-relaxed">
              Founded in 1987, ARTITECT MACHINERY has grown from a small workshop 
              into a globally recognized manufacturer of sheet metal folding equipment. 
              Our commitment to engineering excellence and customer satisfaction has 
              earned us the trust of workshops, fabricators, and industrial plants 
              across six continents.
            </p>
            <p className="text-white/70 mb-8 leading-relaxed">
              We believe that the best machinery combines rugged reliability with 
              intelligent design. Every ARTITECT machine is built to last decades, 
              with modular components that make upgrades and repairs straightforward.
            </p>

            <div className="flex flex-wrap gap-6">
              <div>
                <span className="block text-3xl sm:text-4xl font-extrabold text-brand-gold">
                  30+
                </span>
                <span className="text-sm text-white/60 uppercase tracking-wider">
                  Years Experience
                </span>
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl font-extrabold text-brand-gold">
                  60+
                </span>
                <span className="text-sm text-white/60 uppercase tracking-wider">
                  Countries Served
                </span>
              </div>
              <div>
                <span className="block text-3xl sm:text-4xl font-extrabold text-brand-gold">
                  12K+
                </span>
                <span className="text-sm text-white/60 uppercase tracking-wider">
                  Machines Delivered
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                data-strk-img-id="about-facility-7b3c2a"
                data-strk-img="[about-title] [about-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT MACHINERY manufacturing facility"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-brand-gold/10" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-brand-gold px-6 py-3 rounded">
              <span className="text-brand-dark font-bold text-sm uppercase tracking-wider">
                ISO 9001:2015 Certified
              </span>
            </div>
          </div>
        </div>

        {/* Why choose us */}
        <div className="text-center mb-12">
          <span className="inline-block text-brand-gold text-xs font-semibold uppercase tracking-[0.2em] mb-3">
            Why Choose Us
          </span>
          <h3
            id="about-title"
            className="text-2xl sm:text-3xl font-extrabold text-white mb-4"
          >
            Built on Trust, Backed by Service
          </h3>
          <p
            id="about-subtitle"
            className="text-white/60 max-w-2xl mx-auto"
          >
            Our reputation rests on every machine we deliver and every relationship we build.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group bg-white/5 border border-white/10 rounded-lg p-6 hover:bg-white/10 hover:border-brand-gold/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-gold/20 rounded flex items-center justify-center mb-4 group-hover:bg-brand-gold/30 transition-colors">
                  <Icon size={22} className="text-brand-gold" />
                </div>
                <h4 className="text-white font-bold text-base mb-2">
                  {item.title}
                </h4>
                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
