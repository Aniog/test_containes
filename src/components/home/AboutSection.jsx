import { useEffect, useRef } from 'react';
import { Shield, Zap, Settings, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description:
      'Every machine is manufactured with premium-grade steel and precision-machined components, ensuring decades of reliable operation in demanding industrial environments.',
  },
  {
    icon: Zap,
    title: 'High Performance',
    description:
      'Advanced drive systems and optimized tooling geometry deliver fast cycle times and consistent bend accuracy — even on complex profiles and tight tolerances.',
  },
  {
    icon: Settings,
    title: 'Easy to Operate',
    description:
      'Intuitive controls, clear operator interfaces, and quick-change tooling systems mean your team can be productive from day one with minimal training.',
  },
  {
    icon: Globe,
    title: 'Global Support',
    description:
      'With service partners in over 40 countries, ARTITECT provides fast on-site support, spare parts availability, and remote diagnostics to keep your production running.',
  },
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <>
      {/* About Section */}
      <section id="about" ref={containerRef} className="bg-charcoal py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden aspect-[4/3] shadow-card">
                <img
                  alt="ARTITECT Machinery manufacturing facility"
                  className="w-full h-full object-cover"
                  data-strk-img-id="about-img-v4w5x6"
                  data-strk-img="[about-subtitle] [about-title] precision metal fabrication factory"
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-6 -right-6 bg-gold text-steel-black rounded-lg p-6 shadow-card hidden lg:block">
                <p className="font-playfair text-3xl font-bold">20+</p>
                <p className="font-inter text-xs font-semibold tracking-wide mt-1">Years of Excellence</p>
              </div>
            </div>

            {/* Text */}
            <div>
              <p className="font-inter text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-4">
                About ARTITECT
              </p>
              <h2 id="about-title" className="font-playfair text-4xl font-bold text-off-white gold-underline mb-8">
                Crafting Precision Since Day One
              </h2>
              <p id="about-subtitle" className="font-inter text-base text-platinum leading-relaxed mb-6">
                ARTITECT MACHINERY was founded on a single principle: that industrial equipment should be as precise as it is durable. For over two decades, we have designed and manufactured metal folding machines trusted by fabricators, manufacturers, and contractors worldwide.
              </p>
              <p className="font-inter text-base text-silver leading-relaxed mb-8">
                Our engineering team combines deep metallurgical knowledge with modern CNC technology to produce machines that set the benchmark for accuracy, repeatability, and ease of use. From compact workshop folders to large-format automated systems, every ARTITECT machine carries our commitment to quality.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '500+', label: 'Machines Delivered' },
                  { value: '40+', label: 'Countries Served' },
                  { value: '98%', label: 'Customer Satisfaction' },
                  { value: '24/7', label: 'Technical Support' },
                ].map((stat) => (
                  <div key={stat.label} className="border-l-2 border-gold pl-4">
                    <p className="font-playfair text-2xl font-bold text-gold">{stat.value}</p>
                    <p className="font-inter text-sm text-silver mt-0.5">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="bg-steel-black py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <p className="font-inter text-xs font-semibold tracking-[0.3em] text-gold uppercase mb-4">
              Why Choose Us
            </p>
            <h2 className="font-playfair text-4xl lg:text-5xl font-bold text-off-white gold-underline-center">
              The ARTITECT Advantage
            </h2>
            <p className="font-inter text-base text-silver mt-8 max-w-2xl mx-auto leading-relaxed">
              We don't just sell machines — we deliver complete solutions backed by engineering expertise, responsive support, and a commitment to your long-term success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="bg-charcoal border border-iron-gray rounded-lg p-8 hover:border-gold transition-all duration-300 hover:shadow-gold-glow group"
                >
                  <div className="w-12 h-12 rounded-lg bg-iron-gray flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                    <Icon size={24} className="text-gold" />
                  </div>
                  <h3 className="font-playfair text-xl font-semibold text-off-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-inter text-sm text-silver leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
