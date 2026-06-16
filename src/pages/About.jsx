import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import { Award, Users, Globe, Factory } from 'lucide-react';
import strkImgConfig from '../strk-img-config.json';

const values = [
  {
    icon: Award,
    title: 'Uncompromising Quality',
    description:
      'Every machine is built from certified steel and tested beyond rated capacity before it leaves our factory.',
  },
  {
    icon: Users,
    title: 'Customer First',
    description:
      'From initial inquiry to decades of spare-parts support, our team treats every customer as a long-term partner.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description:
      'With distribution partners in 48 countries, ARTITECT machines are never far from the workshops that need them.',
  },
  {
    icon: Factory,
    title: 'Made in Germany',
    description:
      'Designed and assembled at our Frankfurt facility, where precision engineering is a cultural standard.',
  },
];

const timeline = [
  { year: '1987', event: 'ARTITECT founded in Frankfurt as a metal fabrication workshop.' },
  { year: '1994', event: 'Launched the first ARTITECT-branded manual sheet metal folder.' },
  { year: '2001', event: 'Introduced hydraulic folding machines with 4-meter capacity.' },
  { year: '2008', event: 'CNC touchscreen control becomes standard across the product line.' },
  { year: '2015', event: 'Expanded to 48 countries with dedicated regional service centers.' },
  { year: '2023', event: 'Launched servo-electric robot-ready folding systems for smart factories.' },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div>
      {/* Page Header */}
      <section className="bg-navy pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-[0.2em] uppercase mb-4">
            About Us
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            Three Decades of Precision
          </h1>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            From a small fabrication workshop to a global leader in sheet metal folding technology.
          </p>
        </div>
      </section>

      {/* Story */}
      <section ref={containerRef} className="py-20 md:py-28 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative">
              <img
                data-strk-img-id="about-factory-img-abc"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="ARTITECT factory"
                className="w-full rounded-sm shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-gold text-navy px-6 py-4 rounded-sm shadow-lg hidden md:block">
                <p className="text-3xl font-extrabold">35+</p>
                <p className="text-xs font-semibold uppercase tracking-wider">Years</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="gold-accent ml-0 mx-0" />
              <h2 id="about-title" className="section-heading text-left">
                Built by Fabricators, for Fabricators
              </h2>
              <p id="about-desc" className="text-text-secondary leading-relaxed">
                ARTITECT MACHINERY was born inside a busy metal fabrication shop. Our founders understood the daily frustrations of imprecise tools and unreliable machines — so they set out to build something better.
              </p>
              <p className="text-text-secondary leading-relaxed">
                What started as a line of hand folders for local workshops has grown into a comprehensive range of hydraulic and CNC folding machines trusted by manufacturers, shipyards, and construction companies around the world.
              </p>
              <p className="text-text-secondary leading-relaxed">
                Today, every ARTITECT machine still carries the DNA of that original workshop: rugged, precise, and designed by people who actually fold metal for a living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="gold-accent" />
            <h2 className="section-heading">Our Values</h2>
            <p className="section-subheading mt-4">
              The principles that guide every machine we design and every customer we serve.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="text-center p-6 border border-border-light rounded-sm hover:shadow-md transition-shadow bg-white"
              >
                <div className="w-14 h-14 bg-navy/5 flex items-center justify-center rounded-sm mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="text-lg font-bold text-navy mb-3">{value.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="gold-accent" />
            <h2 className="section-heading">Our Journey</h2>
          </div>
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border-light md:-translate-x-px" />
            {timeline.map((item, index) => (
              <div
                key={item.year}
                className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden md:block md:w-1/2" />
                <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-gold rounded-full border-2 border-cream -translate-x-1.5 mt-1.5" />
                <div className="pl-10 md:pl-0 md:w-1/2">
                  <div
                    className={`bg-white border border-border-light rounded-sm p-6 ${
                      index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                    }`}
                  >
                    <span className="text-gold font-extrabold text-lg">{item.year}</span>
                    <p className="text-text-secondary mt-2 leading-relaxed">{item.event}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
