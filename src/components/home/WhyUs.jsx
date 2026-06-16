import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Shield, Zap, Settings, Award, Headphones, Globe } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Every machine is constructed with premium-grade steel and precision-machined components, ensuring decades of reliable operation.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description: 'Advanced servo-electric and hydraulic drive systems deliver consistent, repeatable bending accuracy at high production speeds.',
  },
  {
    icon: Settings,
    title: 'Easy to Operate',
    description: 'Intuitive touch-screen controls and user-friendly software make setup and operation straightforward for operators of all skill levels.',
  },
  {
    icon: Award,
    title: 'Certified Quality',
    description: 'All ARTITECT machines meet international quality standards including CE, ISO 9001, and industry-specific certifications.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Our global network of engineers provides installation, training, and ongoing technical support to keep your production running.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'With distribution partners in over 40 countries, ARTITECT MACHINERY delivers world-class folding solutions wherever you are.',
  },
];

const WhyUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="why-us" ref={containerRef} className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-column layout: text + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Text */}
          <div>
            <span className="text-[#C9A84C] text-xs font-semibold uppercase tracking-widest">Why Choose Us</span>
            <h2 id="why-us-title" className="text-3xl md:text-4xl font-bold text-[#1B2A4A] mt-3 mb-4">
              Engineering Excellence in Every Machine
            </h2>
            <div className="w-16 h-1 bg-[#C9A84C] mb-6" />
            <p id="why-us-desc" className="text-slate-600 leading-relaxed mb-6">
              For over 25 years, ARTITECT MACHINERY has been at the forefront of sheet metal folding technology. We combine deep engineering expertise with a commitment to quality that sets our machines apart from the competition.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Our double folding machines and metal folder systems are trusted by leading manufacturers in HVAC, construction, automotive, and aerospace industries worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 bg-[#F7F8FA] px-5 py-4 border-l-4 border-[#C9A84C]">
                <span className="text-3xl font-bold text-[#1B2A4A]">ISO</span>
                <span className="text-sm text-slate-600 font-medium">9001:2015<br />Certified</span>
              </div>
              <div className="flex items-center gap-3 bg-[#F7F8FA] px-5 py-4 border-l-4 border-[#C9A84C]">
                <span className="text-3xl font-bold text-[#1B2A4A]">CE</span>
                <span className="text-sm text-slate-600 font-medium">European<br />Certified</span>
              </div>
              <div className="flex items-center gap-3 bg-[#F7F8FA] px-5 py-4 border-l-4 border-[#C9A84C]">
                <span className="text-3xl font-bold text-[#1B2A4A]">25+</span>
                <span className="text-sm text-slate-600 font-medium">Years of<br />Excellence</span>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#C9A84C]/30 z-0" />
            <img
              alt="ARTITECT Machinery manufacturing facility"
              data-strk-img-id="why-us-img-artitect-3a2b1c"
              data-strk-img="[why-us-desc] [why-us-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="relative z-10 w-full h-full object-cover shadow-xl"
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-6 border border-slate-100 hover:border-[#C9A84C]/40 hover:shadow-lg transition-all duration-300 bg-[#F7F8FA]"
              >
                <div className="w-12 h-12 bg-[#1B2A4A] group-hover:bg-[#C9A84C] flex items-center justify-center mb-4 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-[#1B2A4A] mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
