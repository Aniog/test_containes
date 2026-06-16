import { useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const highlights = [
  'Over 25 years of manufacturing expertise',
  'ISO 9001:2015 certified production facility',
  'Machines installed in 40+ countries worldwide',
  'Comprehensive after-sales service network',
  'Custom configurations available on request',
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" className="py-20 lg:py-28 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                data-strk-img-id="about-factory-img-2c8d5f"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="700"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                alt="ARTITECT MACHINERY manufacturing facility"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brass-500 rounded-2xl p-6 text-white shadow-lg hidden lg:block">
              <p className="text-3xl font-bold">25+</p>
              <p className="text-sm opacity-90">Years of Excellence</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold text-brass-500 uppercase tracking-wider mb-3">
              About Us
            </p>
            <h2
              id="about-title"
              className="text-3xl lg:text-4xl font-bold tracking-tight text-navy-900"
            >
              Trusted by Professionals Worldwide
            </h2>
            <p
              id="about-desc"
              className="mt-4 text-lg text-slate-600 leading-relaxed"
            >
              ARTITECT MACHINERY has been at the forefront of sheet metal folding
              technology for over two decades. We design and manufacture
              high-performance double folding machines that set the standard for
              precision, reliability, and operator efficiency.
            </p>

            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-brass-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
