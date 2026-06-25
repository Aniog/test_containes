import { useEffect, useRef } from 'react';
import { Cpu, Shield, Zap, Settings, Award, Headphones } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    icon: Cpu,
    title: 'CNC Precision Control',
    description: 'Advanced CNC systems ensure repeatable accuracy to ±0.1mm across every bend, every time.',
  },
  {
    icon: Shield,
    title: 'Industrial-Grade Build',
    description: 'Heavy-duty steel frames and hardened tooling designed for decades of continuous operation.',
  },
  {
    icon: Zap,
    title: 'High-Speed Performance',
    description: 'Optimized hydraulic and servo systems deliver fast cycle times without sacrificing precision.',
  },
  {
    icon: Settings,
    title: 'Easy Setup & Operation',
    description: 'Intuitive touchscreen interfaces and quick-change tooling minimize downtime and training.',
  },
  {
    icon: Award,
    title: 'ISO Certified Quality',
    description: 'Every machine is manufactured and tested to ISO 9001 standards before leaving our facility.',
  },
  {
    icon: Headphones,
    title: 'Global Support Network',
    description: '24/7 technical support and a worldwide network of certified service engineers.',
  },
];

const FeaturesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      {/* Features Section */}
      <section id="features" style={{ background: '#161B22', borderTop: '1px solid #21262D', borderBottom: '1px solid #21262D' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          {/* Header */}
          <div className="mb-16 text-center">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-12" style={{ background: '#C9A84C' }} />
              <span className="text-xs tracking-widest uppercase font-medium" style={{ color: '#C9A84C' }}>
                Why Choose Us
              </span>
              <div className="h-px w-12" style={{ background: '#C9A84C' }} />
            </div>
            <h2
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: '"Playfair Display", serif', color: '#E6EDF3' }}
            >
              Built for Professionals
            </h2>
            <p className="text-base max-w-2xl mx-auto" style={{ color: '#8B949E' }}>
              Every ARTITECT machine is engineered with the features that matter most to serious metal fabricators.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-8 transition-all duration-300 group"
                  style={{ background: '#0D1117', border: '1px solid #30363D' }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.4)')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = '#30363D')}
                >
                  <div
                    className="w-12 h-12 flex items-center justify-center mb-5"
                    style={{ background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)' }}
                  >
                    <Icon size={22} style={{ color: '#C9A84C' }} strokeWidth={1.5} />
                  </div>
                  <h3
                    className="text-lg font-semibold mb-3"
                    style={{ color: '#E6EDF3' }}
                  >
                    {feature.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: '#8B949E' }}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" ref={containerRef} style={{ background: '#0D1117' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div
                className="absolute -top-4 -left-4 w-full h-full"
                style={{ border: '1px solid rgba(201,168,76,0.2)' }}
              />
              <img
                alt="ARTITECT Machinery manufacturing facility"
                data-strk-img-id="about-img-4f9c2a"
                data-strk-img="[about-title] [about-subtitle]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="relative w-full object-cover"
                style={{ background: '#21262D', aspectRatio: '4/3' }}
              />
            </div>

            {/* Content */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-12" style={{ background: '#C9A84C' }} />
                <span className="text-xs tracking-widest uppercase font-medium" style={{ color: '#C9A84C' }}>
                  About ARTITECT
                </span>
              </div>
              <h2
                id="about-title"
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ fontFamily: '"Playfair Display", serif', color: '#E6EDF3' }}
              >
                Engineering Excellence Since 2001
              </h2>
              <p
                id="about-subtitle"
                className="text-base leading-relaxed mb-6"
                style={{ color: '#8B949E' }}
              >
                ARTITECT MACHINERY was founded with a singular mission: to build the world's most precise and reliable sheet metal folding machines. Over 25 years, we've grown from a small engineering workshop into a globally recognized manufacturer trusted by fabricators across 40 countries.
              </p>
              <p className="text-base leading-relaxed mb-10" style={{ color: '#8B949E' }}>
                Our machines are found in HVAC factories, roofing manufacturers, automotive suppliers, and architectural metalwork studios. We combine traditional craftsmanship with cutting-edge CNC technology to deliver machines that perform flawlessly for decades.
              </p>

              {/* Milestones */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { year: '2001', event: 'Company Founded' },
                  { year: '2008', event: 'First CNC Machine' },
                  { year: '2015', event: 'ISO 9001 Certified' },
                  { year: '2024', event: '500th Machine Delivered' },
                ].map((item) => (
                  <div key={item.year} className="flex items-start gap-3">
                    <span
                      className="text-sm font-bold"
                      style={{ color: '#C9A84C', fontFamily: '"Playfair Display", serif' }}
                    >
                      {item.year}
                    </span>
                    <span className="text-sm" style={{ color: '#C9D1D9' }}>{item.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FeaturesSection;
