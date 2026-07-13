import { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const milestones = [
  { year: '2000', event: 'ARTITECT MACHINERY founded in Germany' },
  { year: '2007', event: 'Launched first CNC double folding machine series' },
  { year: '2013', event: 'Expanded to 40+ countries with global distribution network' },
  { year: '2018', event: 'Introduced Industry 4.0 IoT-ready machine platform' },
  { year: '2023', event: 'Reached 5,000+ machines installed worldwide' },
];

const values = [
  'Precision engineering in every component',
  'Continuous innovation and R&D investment',
  'Transparent, long-term customer partnerships',
  'Sustainable manufacturing practices',
  'Comprehensive training and support programs',
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-24 bg-brand-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Top grid: text + image */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Text */}
          <div>
            <p className="text-brand-gold font-heading font-semibold text-xs tracking-[0.3em] uppercase mb-4">
              About Us
            </p>
            <h2
              id="about-title"
              className="font-heading font-extrabold text-brand-navy text-4xl lg:text-5xl leading-tight mb-6"
            >
              Crafting Precision
              <span className="block text-brand-steel">Since 2000</span>
            </h2>
            <p
              id="about-desc"
              className="font-body text-brand-steel/80 text-lg leading-relaxed mb-6"
            >
              ARTITECT MACHINERY was founded with a singular vision: to build the world's most
              precise and reliable sheet metal folding machines. Over two decades, we have grown
              from a specialist workshop into a globally recognised manufacturer trusted by
              fabricators, contractors, and OEMs across 80+ countries.
            </p>
            <p className="font-body text-brand-steel/70 text-base leading-relaxed mb-8">
              Our engineering team combines decades of hands-on fabrication experience with
              cutting-edge technology to deliver machines that perform flawlessly — day after day,
              year after year.
            </p>

            {/* Values */}
            <ul className="space-y-3">
              {values.map((val) => (
                <li key={val} className="flex items-start gap-3">
                  <CheckCircle size={18} className="text-brand-gold flex-shrink-0 mt-0.5" />
                  <span className="font-body text-brand-navy/80 text-sm">{val}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                alt="ARTITECT MACHINERY manufacturing facility"
                data-strk-img-id="about-facility-img-7c4d2e"
                data-strk-img="[about-desc] [about-title] precision manufacturing factory workshop"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-brand-navy rounded-2xl px-7 py-5 shadow-xl border border-brand-gold/20">
              <p className="font-heading font-extrabold text-brand-gold text-3xl">25+</p>
              <p className="font-body text-brand-silver text-sm mt-1">Years of Excellence</p>
            </div>
            {/* Decorative */}
            <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-brand-gold/20 rounded-2xl -z-10" />
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-brand-light rounded-2xl p-10">
          <h3 className="font-heading font-bold text-brand-navy text-2xl mb-8 text-center">
            Our Journey
          </h3>
          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute top-5 left-0 right-0 h-0.5 bg-brand-silver/30" />
            <div className="grid md:grid-cols-5 gap-8">
              {milestones.map((m) => (
                <div key={m.year} className="flex flex-col items-center text-center relative">
                  <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center mb-3 z-10 flex-shrink-0">
                    <span className="font-heading font-bold text-brand-navy text-xs">{m.year.slice(2)}</span>
                  </div>
                  <p className="font-heading font-bold text-brand-gold text-sm mb-1">{m.year}</p>
                  <p className="font-body text-brand-steel/80 text-xs leading-relaxed">{m.event}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
