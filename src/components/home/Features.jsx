import { useEffect, useRef } from 'react';
import {
  Cpu, Shield, Zap, Settings, HeadphonesIcon, Globe, Award, BarChart3
} from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    icon: Cpu,
    title: 'CNC Precision Control',
    description: 'Advanced CNC systems with intuitive HMI interfaces ensure repeatable accuracy down to ±0.1mm on every fold.',
    color: 'text-sky-accent',
    bg: 'bg-sky-accent/10',
  },
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Heavy-duty welded steel frames and premium components deliver decades of reliable, high-output performance.',
    color: 'text-copper-gold',
    bg: 'bg-copper-gold/10',
  },
  {
    icon: Zap,
    title: 'High-Speed Operation',
    description: 'Optimized servo-electric and hydraulic drive systems minimize cycle times without compromising precision.',
    color: 'text-precision-blue',
    bg: 'bg-precision-blue/10',
  },
  {
    icon: Settings,
    title: 'Quick-Change Tooling',
    description: 'Modular tooling systems allow rapid changeovers between jobs, maximizing uptime and production flexibility.',
    color: 'text-sky-accent',
    bg: 'bg-sky-accent/10',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Technical Support',
    description: 'Our global team of engineers provides round-the-clock support, remote diagnostics, and on-site service.',
    color: 'text-copper-gold',
    bg: 'bg-copper-gold/10',
  },
  {
    icon: Globe,
    title: 'Global Delivery',
    description: 'We ship and install machines worldwide, with local service partners in over 60 countries.',
    color: 'text-precision-blue',
    bg: 'bg-precision-blue/10',
  },
];

const industries = [
  { name: 'HVAC & Ventilation', icon: '🌬️' },
  { name: 'Automotive', icon: '🚗' },
  { name: 'Aerospace', icon: '✈️' },
  { name: 'Construction', icon: '🏗️' },
  { name: 'Electronics', icon: '⚡' },
  { name: 'Furniture & Fixtures', icon: '🪑' },
  { name: 'Medical Equipment', icon: '🏥' },
  { name: 'Energy & Solar', icon: '☀️' },
];

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Features Section */}
      <section id="features" className="py-20 md:py-28 bg-steel-navy">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-copper-gold/15 border border-copper-gold/30 text-copper-gold text-xs font-semibold px-4 py-2 rounded-full mb-4 tracking-widest uppercase">
              <Award size={12} />
              Why Choose Artitect
            </div>
            <h2 className="font-heading font-bold text-white text-4xl md:text-5xl mb-4">
              Engineering Excellence,<br />
              <span className="text-sky-accent">Delivered Every Time</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              Every Artitect machine is designed with one goal: to give your operation a competitive edge through superior precision, reliability, and support.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-iron-blue/40 border border-iron-blue/60 rounded-2xl p-6 hover:bg-iron-blue/60 hover:border-sky-accent/30 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 ${feature.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={22} className={feature.color} />
                  </div>
                  <h3 className="font-heading font-semibold text-white text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* Comparison highlight */}
          <div className="mt-16 bg-gradient-to-r from-precision-blue/20 to-iron-blue/40 border border-precision-blue/30 rounded-2xl p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="text-copper-gold text-xs font-semibold tracking-widest uppercase mb-3">The Artitect Advantage</div>
                <h3 className="font-heading font-bold text-white text-3xl mb-4">
                  Machines That Pay for Themselves
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Our customers report an average 35% increase in production throughput and a 40% reduction in material waste after switching to Artitect folding machines. The precision and speed of our systems translate directly to your bottom line.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '35%', label: 'More Throughput', icon: BarChart3 },
                  { value: '40%', label: 'Less Waste', icon: Shield },
                  { value: '±0.1mm', label: 'Fold Accuracy', icon: Cpu },
                  { value: '5yr', label: 'Warranty', icon: Award },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="bg-steel-navy/60 rounded-xl p-4 text-center border border-iron-blue/40">
                      <Icon size={18} className="text-copper-gold mx-auto mb-2" />
                      <div className="font-heading font-bold text-white text-2xl">{item.value}</div>
                      <div className="text-gray-400 text-xs mt-1">{item.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="py-20 bg-warm-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-precision-blue/10 text-precision-blue text-xs font-semibold px-4 py-2 rounded-full mb-4 tracking-widest uppercase">
              Industries We Serve
            </div>
            <h2 className="font-heading font-bold text-steel-navy text-4xl md:text-5xl mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-mid-gray text-lg max-w-xl mx-auto">
              Artitect folding machines are the preferred choice of manufacturers across a wide range of sectors.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="bg-white border border-light-gray rounded-xl p-5 text-center hover:border-precision-blue hover:shadow-md transition-all duration-200 group"
              >
                <div className="text-3xl mb-3">{industry.icon}</div>
                <div className="font-heading font-semibold text-dark-gray text-sm group-hover:text-precision-blue transition-colors">
                  {industry.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Testimonial Section */}
      <section id="about" className="py-20 md:py-28 bg-iron-blue">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-copper-gold/15 border border-copper-gold/30 text-copper-gold text-xs font-semibold px-4 py-2 rounded-full mb-6 tracking-widest uppercase">
                About Artitect Machinery
              </div>
              <h2 id="about-title" className="font-heading font-bold text-white text-4xl md:text-5xl mb-6">
                25 Years of Folding Machine Innovation
              </h2>
              <p id="about-desc" className="text-gray-300 text-lg leading-relaxed mb-6">
                Founded in 1999, Artitect Machinery has grown from a regional manufacturer to a globally recognized leader in sheet metal folding technology. Our engineering team continuously pushes the boundaries of what's possible in metal forming.
              </p>
              <p className="text-gray-400 leading-relaxed mb-8">
                Every machine that leaves our factory undergoes rigorous quality testing to ensure it meets our exacting standards. We don't just build machines — we build partnerships with our customers, supporting them throughout the entire lifecycle of their equipment.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-steel-navy/50 border border-iron-blue/60 rounded-xl px-5 py-3 text-center">
                  <div className="font-heading font-bold text-white text-2xl">1999</div>
                  <div className="text-gray-400 text-xs">Founded</div>
                </div>
                <div className="bg-steel-navy/50 border border-iron-blue/60 rounded-xl px-5 py-3 text-center">
                  <div className="font-heading font-bold text-white text-2xl">200+</div>
                  <div className="text-gray-400 text-xs">Engineers</div>
                </div>
                <div className="bg-steel-navy/50 border border-iron-blue/60 rounded-xl px-5 py-3 text-center">
                  <div className="font-heading font-bold text-white text-2xl">60+</div>
                  <div className="text-gray-400 text-xs">Countries</div>
                </div>
              </div>
            </div>

            {/* Testimonial */}
            <div className="space-y-4">
              {[
                {
                  quote: "The Artitect double folding machine transformed our production line. We went from 200 to 320 parts per shift with zero compromise on quality.",
                  name: "Michael Chen",
                  role: "Production Manager, SteelForm Industries",
                  img: 'testimonial-michael-chen-2a3b4c',
                  titleId: 'testimonial-1-name',
                  descId: 'testimonial-1-quote',
                },
                {
                  quote: "Exceptional build quality and the after-sales support is second to none. Our Artitect machine has been running 3 shifts a day for 4 years without a single major issue.",
                  name: "Sarah Müller",
                  role: "Operations Director, EuroMetal GmbH",
                  img: 'testimonial-sarah-muller-5d6e7f',
                  titleId: 'testimonial-2-name',
                  descId: 'testimonial-2-quote',
                },
              ].map((t) => (
                <div key={t.name} className="bg-steel-navy/60 border border-iron-blue/40 rounded-2xl p-6">
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-copper-gold text-sm">★</span>
                    ))}
                  </div>
                  <p id={t.descId} className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                    "{t.quote}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-iron-blue flex-shrink-0">
                      <img
                        alt={t.name}
                        data-strk-img-id={t.img}
                        data-strk-img={`[${t.titleId}] [${t.descId}]`}
                        data-strk-img-ratio="1x1"
                        data-strk-img-width="80"
                        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <div id={t.titleId} className="font-semibold text-white text-sm">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
