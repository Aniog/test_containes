import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Shield, Zap, Settings, Award, Globe, Headphones } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Every machine is constructed with premium-grade steel and precision-machined components, ensuring decades of reliable operation.',
  },
  {
    icon: Zap,
    title: 'High Efficiency',
    description:
      'Servo-electric and hydraulic drive systems deliver fast cycle times and energy savings without compromising on accuracy.',
  },
  {
    icon: Settings,
    title: 'CNC Precision',
    description:
      'Advanced CNC controls with intuitive touchscreen interfaces allow operators to program complex bend sequences with ease.',
  },
  {
    icon: Award,
    title: 'ISO Certified Quality',
    description:
      'All ARTITECT machines are manufactured under strict ISO quality management systems, meeting international standards.',
  },
  {
    icon: Globe,
    title: 'Global Support Network',
    description:
      'With service partners in over 40 countries, we provide fast on-site support and spare parts delivery worldwide.',
  },
  {
    icon: Headphones,
    title: 'Expert Consultation',
    description:
      'Our engineering team works closely with you to recommend the right machine configuration for your specific application.',
  },
];

const industries = [
  { name: 'HVAC & Ventilation', imgId: 'ind-hvac-2a3b4c', titleId: 'ind-title-hvac', descId: 'ind-desc-hvac', desc: 'HVAC ductwork and ventilation sheet metal fabrication' },
  { name: 'Automotive', imgId: 'ind-auto-5d6e7f', titleId: 'ind-title-auto', descId: 'ind-desc-auto', desc: 'Automotive body panels and structural components metal folding' },
  { name: 'Construction', imgId: 'ind-const-8g9h0i', titleId: 'ind-title-const', descId: 'ind-desc-const', desc: 'Construction cladding and roofing sheet metal fabrication' },
  { name: 'Aerospace', imgId: 'ind-aero-1j2k3l', titleId: 'ind-title-aero', descId: 'ind-desc-aero', desc: 'Aerospace precision sheet metal components manufacturing' },
];

export default function WhyUs() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Why Us Section */}
      <section id="why-us" className="bg-navy py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
                Why Choose Artitect
              </span>
              <div className="h-px w-12 bg-gold" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              The Artitect Advantage
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We don't just manufacture machines — we engineer competitive advantages
              for your production floor.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-surface-dark border border-gray-700 p-8 hover:border-gold transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-steel/20 flex items-center justify-center mb-5 group-hover:bg-gold/20 transition-colors">
                    <Icon size={22} className="text-gold" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-3">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="bg-surface py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold" />
              <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
                Industries We Serve
              </span>
              <div className="h-px w-12 bg-gold" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-navy mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto leading-relaxed">
              ARTITECT folding machines power production lines across the world's most
              demanding manufacturing sectors.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((industry) => (
              <div key={industry.name} className="relative overflow-hidden group aspect-[3/4]">
                <img
                  alt={industry.name}
                  data-strk-img-id={industry.imgId}
                  data-strk-img={`[${industry.descId}] [${industry.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span
                    id={industry.titleId}
                    className="text-white font-bold text-lg block"
                  >
                    {industry.name}
                  </span>
                  <span id={industry.descId} className="sr-only">{industry.desc}</span>
                  <div className="h-0.5 w-8 bg-gold mt-2 group-hover:w-16 transition-all duration-300" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-navy py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-12 bg-gold" />
                <span className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
                  About Artitect
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                25 Years of Folding
                <br />
                <span className="text-gold">Excellence</span>
              </h2>
              <p className="text-gray-400 leading-relaxed mb-5">
                Founded with a singular vision — to redefine precision in sheet metal
                fabrication — ARTITECT MACHINERY has grown into a globally trusted
                manufacturer of folding machines. Our engineering team combines decades
                of hands-on experience with cutting-edge technology.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Every machine that leaves our factory undergoes rigorous quality
                testing to ensure it meets the exacting standards our customers
                depend on. From small workshops to large-scale industrial operations,
                ARTITECT delivers the right solution.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '25+', label: 'Years in Business' },
                  { value: '500+', label: 'Machines Installed' },
                  { value: '40+', label: 'Countries' },
                  { value: '98%', label: 'Customer Satisfaction' },
                ].map((stat) => (
                  <div key={stat.label} className="border-l-2 border-gold pl-4">
                    <div className="text-2xl font-bold text-gold">{stat.value}</div>
                    <div className="text-gray-400 text-xs tracking-wide uppercase mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-gold/30" />
              <img
                alt="Artitect Machinery factory"
                data-strk-img-id="about-factory-img-4m5n6o"
                data-strk-img="[about-img-desc] sheet metal folding machine factory manufacturing"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover relative z-10"
              />
              <span id="about-img-desc" className="sr-only">
                Industrial sheet metal folding machine manufacturing facility
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
