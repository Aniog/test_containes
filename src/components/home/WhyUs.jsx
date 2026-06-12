import { useEffect, useRef } from 'react';
import { Shield, Zap, Settings, Award, Headphones, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Every machine is constructed with premium-grade steel and precision-machined components, ensuring decades of reliable operation.',
  },
  {
    icon: Zap,
    title: 'High Throughput',
    description: 'Optimized cycle times and rapid tool-change systems keep your production line moving at maximum efficiency.',
  },
  {
    icon: Settings,
    title: 'CNC Precision',
    description: 'Advanced CNC control systems deliver repeatable accuracy to within ±0.1mm, every single time.',
  },
  {
    icon: Award,
    title: 'CE Certified',
    description: 'All ARTITECT machines meet international safety and quality standards, including CE, ISO 9001, and industry-specific certifications.',
  },
  {
    icon: Headphones,
    title: 'Expert Support',
    description: 'Our team of engineers provides installation, training, and ongoing technical support to keep your operations running smoothly.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'With customers in over 40 countries, ARTITECT MACHINERY is a trusted partner for manufacturers worldwide.',
  },
];

export default function WhyUs() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="why-us" className="bg-white py-24 md:py-32" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold tracking-widest uppercase text-steel">Why Choose ARTITECT</span>
          <div className="h-0.5 w-12 bg-gold mx-auto mt-3 mb-5" />
          <h2 className="text-3xl md:text-4xl font-bold text-navy tracking-tight">
            The ARTITECT Advantage
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            We combine decades of engineering expertise with cutting-edge technology to deliver machines that outperform the competition.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-8 rounded-xl border border-border hover:border-steel hover:shadow-lg transition-all duration-300 bg-surface"
              >
                <div className="w-12 h-12 bg-navy rounded-xl flex items-center justify-center mb-5 group-hover:bg-steel transition-colors duration-300">
                  <Icon size={22} className="text-gold" />
                </div>
                <h3 className="text-navy font-bold text-lg mb-3">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* About banner */}
        <div className="rounded-2xl overflow-hidden bg-navy relative">
          {/* Background image */}
          <div
            className="absolute inset-0"
            data-strk-bg-id="about-bg-9k3m7p"
            data-strk-bg="[about-desc] [about-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1200"
            style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
          />
          <div className="absolute inset-0 bg-navy/80" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left content */}
            <div className="p-10 md:p-14">
              <span className="text-gold text-xs font-semibold tracking-widest uppercase">About ARTITECT MACHINERY</span>
              <h2 id="about-title" className="text-white text-3xl md:text-4xl font-bold mt-4 mb-5 leading-tight">
                Two Decades of Metal Forming Excellence
              </h2>
              <p id="about-desc" className="text-white/70 leading-relaxed mb-6">
                Founded by a team of mechanical engineers with a passion for precision, ARTITECT MACHINERY has grown from a specialist workshop into a globally recognised manufacturer of sheet metal folding equipment.
              </p>
              <p className="text-white/70 leading-relaxed mb-8">
                Every machine that leaves our facility undergoes rigorous quality testing and is backed by our comprehensive warranty and support programme. We don't just sell machines — we build long-term partnerships with our customers.
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { value: '20+', label: 'Years in Business' },
                  { value: '500+', label: 'Machines Installed' },
                  { value: '40+', label: 'Countries' },
                  { value: '98%', label: 'Customer Satisfaction' },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-gold">{stat.value}</div>
                    <div className="text-white/50 text-xs mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: image panel */}
            <div className="hidden lg:block relative min-h-[400px]">
              <img
                alt="ARTITECT Machinery factory floor"
                data-strk-img-id="about-factory-img-2n8q4r"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 w-full h-full object-cover opacity-60"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
