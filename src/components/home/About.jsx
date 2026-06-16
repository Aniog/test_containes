import React, { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Award, value: '25+', label: 'Years of Innovation' },
  { icon: Users, value: '2,000+', label: 'Satisfied Clients' },
  { icon: Globe, value: '50+', label: 'Countries Worldwide' },
  { icon: TrendingUp, value: '10,000+', label: 'Machines in Operation' },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div
              className="relative rounded-lg overflow-hidden h-80 lg:h-[480px]"
              data-strk-bg-id="about-bg-d4e6f8"
              data-strk-bg="[about-subtitle] [about-title]"
              data-strk-bg-ratio="3x4"
              data-strk-bg-width="800"
            />
            <div className="absolute -bottom-6 -right-6 bg-gold text-navy p-6 rounded-lg shadow-xl hidden lg:block">
              <div className="text-3xl font-extrabold">25+</div>
              <div className="text-sm font-semibold">Years of Excellence</div>
            </div>
          </div>

          <div>
            <span className="text-gold text-xs font-semibold tracking-wider uppercase">
              About ARTITECT
            </span>
            <h2
              id="about-title"
              className="text-3xl sm:text-4xl font-bold text-navy mt-3 mb-6"
            >
              Crafting the Future of Metal Fabrication
            </h2>
            <p
              id="about-subtitle"
              className="text-slate-500 text-lg leading-relaxed mb-6"
            >
              Since 1998, ARTITECT MACHINERY has been at the forefront of metal
              folding technology. Our commitment to precision engineering and
              continuous innovation has made us a trusted partner for
              manufacturers across the globe.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              From our state-of-the-art R&D center to our rigorous quality
              control processes, every machine that bears the ARTITECT name
              represents the pinnacle of reliability and performance. We don't
              just build machines — we build solutions that empower our clients
              to achieve more.
            </p>

            <div className="border-l-4 border-gold pl-6 mb-8">
              <p className="text-navy font-semibold italic text-lg">
                "Precision is not just a specification — it's our philosophy."
              </p>
              <p className="text-slate-400 text-sm mt-2">
                — ARTITECT Engineering Team
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-navy hover:bg-navy-light text-white px-8 py-3.5 rounded-full font-semibold transition-colors duration-200"
            >
              Partner With Us
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center p-6 bg-white rounded-lg border border-slate-200"
              >
                <Icon className="w-8 h-8 text-gold mx-auto mb-3" />
                <div className="text-2xl sm:text-3xl font-bold text-navy">
                  {stat.value}
                </div>
                <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
