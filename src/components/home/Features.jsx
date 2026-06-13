import { useEffect, useRef } from 'react';
import { Cpu, Shield, Zap, Settings, Globe, HeadphonesIcon } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    icon: Cpu,
    title: 'CNC Precision Control',
    description: 'Advanced CNC systems with intuitive touchscreen interfaces deliver repeatable accuracy down to ±0.1mm on every bend.',
  },
  {
    icon: Shield,
    title: 'Industrial-Grade Build',
    description: 'Welded steel frames, hardened tooling, and premium components ensure decades of reliable operation in demanding environments.',
  },
  {
    icon: Zap,
    title: 'High-Speed Production',
    description: 'Servo-electric drives and optimized cycle times maximize throughput without compromising on quality or precision.',
  },
  {
    icon: Settings,
    title: 'Modular Tooling System',
    description: 'Quick-change tooling and modular configurations allow rapid setup changes, minimizing downtime between production runs.',
  },
  {
    icon: Globe,
    title: 'Global Service Network',
    description: 'With service partners in 60+ countries, expert support and genuine spare parts are always within reach.',
  },
  {
    icon: HeadphonesIcon,
    title: '24/7 Technical Support',
    description: 'Our dedicated engineering team provides round-the-clock remote diagnostics and on-site support to keep your production running.',
  },
];

const industries = [
  { name: 'HVAC & Ventilation', icon: '🌬️' },
  { name: 'Architectural Cladding', icon: '🏗️' },
  { name: 'Automotive', icon: '🚗' },
  { name: 'Aerospace', icon: '✈️' },
  { name: 'Electronics Enclosures', icon: '⚡' },
  { name: 'Construction', icon: '🔩' },
];

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <div ref={containerRef}>
      {/* Features Section */}
      <section id="features" className="bg-brand-light py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: Text */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-blue mb-4 block">
                Why Choose ARTITECT
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight leading-tight">
                Engineering Excellence
                <span className="block text-brand-blue">in Every Machine</span>
              </h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                For over 25 years, ARTITECT MACHINERY has set the benchmark for sheet metal folding
                technology. Our machines combine cutting-edge engineering with practical design,
                giving fabricators the competitive edge they need.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="#contact"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="inline-flex items-center justify-center bg-brand-blue hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-full transition-all text-sm"
                >
                  Talk to an Expert
                </a>
                <a
                  href="#products"
                  onClick={(e) => { e.preventDefault(); document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' }); }}
                  className="inline-flex items-center justify-center border-2 border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white font-semibold px-8 py-3.5 rounded-full transition-all text-sm"
                >
                  View All Products
                </a>
              </div>
            </div>

            {/* Right: Feature Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img
                alt="ARTITECT precision metal folding machine in operation"
                data-strk-img-id="features-img-3k9m2p"
                data-strk-img="[features-section-title] sheet metal folding machine precision engineering"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/60 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4">
                  <p id="features-section-title" className="text-white font-semibold text-sm">
                    Precision Sheet Metal Folding Technology
                  </p>
                  <p className="text-white/70 text-xs mt-1">
                    ±0.1mm accuracy · Servo-electric drive · Industry 4.0 ready
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-white border border-slate-200 rounded-2xl p-7 hover:shadow-lg hover:border-brand-blue/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-brand-blue/20 transition-colors">
                    <Icon size={22} className="text-brand-blue" />
                  </div>
                  <h3 className="text-slate-900 font-bold text-lg mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section id="industries" className="bg-brand-steel py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-brand-sky mb-4 block">
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-white tracking-tight">
              Trusted Across Every Sector
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="bg-brand-navy/50 border border-white/10 rounded-xl p-5 text-center hover:border-brand-sky/40 hover:bg-brand-navy/80 transition-all duration-200"
              >
                <div className="text-3xl mb-3">{industry.icon}</div>
                <p className="text-brand-silver text-xs font-medium leading-tight">{industry.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About / Trust Section */}
      <section id="about" className="bg-brand-navy py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] order-2 lg:order-1">
              <img
                alt="ARTITECT Machinery manufacturing facility"
                data-strk-img-id="about-img-8n4q7r"
                data-strk-img="[about-title] [about-desc] industrial machinery manufacturing facility"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/50 to-transparent" />
            </div>

            {/* Text */}
            <div className="order-1 lg:order-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-brand-sky mb-4 block">
                About ARTITECT
              </span>
              <h2 id="about-title" className="text-3xl md:text-5xl font-bold text-brand-white mb-6 tracking-tight leading-tight">
                25 Years of Metal
                <span className="block text-brand-sky">Forming Mastery</span>
              </h2>
              <p id="about-desc" className="text-brand-silver text-lg leading-relaxed mb-6">
                Founded on a passion for precision engineering, ARTITECT MACHINERY has grown into
                a globally recognized manufacturer of sheet metal folding equipment. Our machines
                are designed, built, and tested to the highest standards — so you can focus on
                what matters: production.
              </p>
              <p className="text-brand-silver text-base leading-relaxed mb-8">
                From our state-of-the-art manufacturing facility, we deliver machines that combine
                German engineering principles with modern automation technology, backed by a
                worldwide service network.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
                {[
                  { value: 'ISO 9001', label: 'Certified Quality' },
                  { value: 'CE Marked', label: 'Safety Compliant' },
                  { value: '5-Year', label: 'Structural Warranty' },
                  { value: '48hr', label: 'Parts Dispatch' },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-xl font-bold text-brand-white">{item.value}</div>
                    <div className="text-xs text-brand-silver mt-1 uppercase tracking-wide">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
