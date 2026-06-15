import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-[#F4F6F9] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              alt="ARTITECT Machinery factory floor"
              data-strk-img-id="about-img-4f8a2b"
              data-strk-img="[about-desc] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full object-cover"
            />
            {/* Gold accent border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#C9A84C] -z-10" />
            {/* Badge */}
            <div className="absolute -top-6 -left-6 bg-[#0D1B2A] p-6 shadow-xl">
              <div
                className="text-4xl font-extrabold text-[#C9A84C]"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                20+
              </div>
              <div
                className="text-xs text-[#8A9BB0] tracking-widest uppercase mt-1"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Years of Excellence
              </div>
            </div>
          </div>

          {/* Text */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-px bg-[#C9A84C]" />
              <span
                className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Who We Are
              </span>
            </div>

            <h2
              id="about-title"
              className="text-3xl md:text-4xl font-extrabold text-[#0D1B2A] mb-6 leading-tight"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              Engineering Precision
              <br />
              <span className="text-[#1A3A5C]">Since Day One</span>
            </h2>

            <p
              id="about-desc"
              className="text-[#2C3E50] text-base leading-relaxed mb-6"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              ARTITECT MACHINERY is a leading manufacturer of sheet metal folding machines,
              double folding machines, and metal folder systems. With over two decades of
              engineering expertise, we design and build machines that set the standard for
              precision, reliability, and operator safety.
            </p>

            <p
              className="text-[#2C3E50] text-base leading-relaxed mb-10"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              Our machines are trusted by fabricators, HVAC contractors, roofing specialists,
              and industrial manufacturers across 40+ countries. Every ARTITECT machine is
              engineered to perform — day after day, year after year.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { value: '500+', label: 'Machines Delivered' },
                { value: '40+', label: 'Countries Served' },
                { value: '99%', label: 'Customer Satisfaction' },
                { value: '24/7', label: 'Technical Support' },
              ].map((stat) => (
                <div key={stat.label} className="border-l-2 border-[#C9A84C] pl-4">
                  <div
                    className="text-2xl font-extrabold text-[#0D1B2A]"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {stat.value}
                  </div>
                  <div
                    className="text-xs text-[#8A9BB0] tracking-widest uppercase mt-1"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {stat.label}
                  </div>
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
