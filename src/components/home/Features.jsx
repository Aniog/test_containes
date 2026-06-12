import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Gauge, ShieldCheck, Wrench, Zap, Globe, HeadphonesIcon } from 'lucide-react';

const features = [
  {
    icon: Gauge,
    title: 'Unmatched Precision',
    desc: 'Angle accuracy to ±0.1° with servo-electric drives and real-time feedback control systems.',
  },
  {
    icon: ShieldCheck,
    title: 'Built to Last',
    desc: 'Heavy-duty welded steel frames, hardened tooling, and components rated for millions of cycles.',
  },
  {
    icon: Zap,
    title: 'High Productivity',
    desc: 'Fast cycle times, programmable sequences, and quick tool-change systems keep your line moving.',
  },
  {
    icon: Wrench,
    title: 'Easy Maintenance',
    desc: 'Modular design with accessible service points and remote diagnostics minimise downtime.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    desc: 'Machines operating in over 40 countries, backed by a worldwide network of certified service partners.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Expert Support',
    desc: 'Dedicated application engineers and 24/7 technical support from installation through production.',
  },
];

const industries = [
  { label: 'HVAC & Ventilation', imgId: 'ind-hvac-2a3b4c', titleId: 'ind-hvac-title', descId: 'ind-hvac-desc', desc: 'Precision ductwork and ventilation components' },
  { label: 'Architectural Metalwork', imgId: 'ind-arch-5d6e7f', titleId: 'ind-arch-title', descId: 'ind-arch-desc', desc: 'Facades, cladding, and decorative panels' },
  { label: 'Automotive', imgId: 'ind-auto-8g9h0i', titleId: 'ind-auto-title', descId: 'ind-auto-desc', desc: 'Body panels and structural components' },
  { label: 'Electronics Enclosures', imgId: 'ind-elec-1j2k3l', titleId: 'ind-elec-title', descId: 'ind-elec-desc', desc: 'Server racks, cabinets, and chassis' },
];

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Why Choose Us */}
      <section id="features" className="bg-navy py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Header */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gold" />
                <span className="text-gold text-xs font-body font-semibold tracking-widest uppercase">
                  Why ARTITECT
                </span>
              </div>
              <h2 className="font-heading font-bold text-white text-4xl lg:text-5xl tracking-tight mb-6 leading-tight">
                The Standard for Sheet Metal Folding
              </h2>
              <p className="font-body text-silver text-lg leading-relaxed mb-8">
                For over 25 years, ARTITECT MACHINERY has set the benchmark for precision, reliability, and innovation in sheet metal folding technology. Every machine is designed with one goal: your competitive advantage.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center bg-gold text-navy font-heading font-semibold text-sm px-8 py-4 rounded-full hover:bg-gold-light transition-colors duration-200 tracking-wide"
              >
                Talk to an Expert
              </a>
            </div>

            {/* Right: Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map(({ icon: Icon, title, desc }) => (
                <div
                  key={title}
                  className="bg-steel/60 border border-white/10 rounded-2xl p-6 hover:border-gold/40 transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-gold" />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-base mb-2">{title}</h3>
                  <p className="font-body text-silver text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section id="industries" className="bg-offwhite py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs font-body font-semibold tracking-widest uppercase">
                Industries We Serve
              </span>
              <div className="w-8 h-px bg-gold" />
            </div>
            <h2 className="font-heading font-bold text-navy text-4xl lg:text-5xl tracking-tight mb-4">
              Trusted Across Sectors
            </h2>
            <p className="font-body text-gray-500 text-lg max-w-xl mx-auto">
              ARTITECT folding machines power fabrication in the world's most demanding industries.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {industries.map((ind) => (
              <div key={ind.label} className="group relative rounded-2xl overflow-hidden shadow-md h-56">
                <img
                  alt={ind.label}
                  data-strk-img-id={ind.imgId}
                  data-strk-img={`[${ind.descId}] [${ind.titleId}]`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 id={ind.titleId} className="font-heading font-semibold text-white text-sm leading-tight">
                    {ind.label}
                  </h3>
                  <p id={ind.descId} className="font-body text-silver text-xs mt-1 leading-snug">
                    {ind.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
