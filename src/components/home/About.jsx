import { useEffect, useRef } from 'react';
import { Shield, Cpu, Wrench, Globe } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const pillars = [
  {
    icon: Shield,
    title: 'Built to Last',
    description: 'Every machine is constructed with premium-grade steel and precision-machined components, ensuring decades of reliable operation.',
  },
  {
    icon: Cpu,
    title: 'Smart Technology',
    description: 'Advanced CNC controls and digital readouts give operators complete precision and repeatability on every fold.',
  },
  {
    icon: Wrench,
    title: 'Expert Support',
    description: 'Our global network of certified technicians provides installation, training, and ongoing maintenance support.',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Trusted by fabricators in over 60 countries, ARTITECT machines are the benchmark for quality in sheet metal forming.',
  },
];

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-navy py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-gold z-10" />
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-gold z-10" />
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                alt="ARTITECT Machinery manufacturing facility"
                data-strk-img-id="about-img-3f9c2a"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-px bg-gold" />
              <span className="text-gold text-xs tracking-widest uppercase font-sans font-semibold">About ARTITECT</span>
            </div>
            <h2
              id="about-title"
              className="font-serif text-surface text-4xl lg:text-5xl font-bold tracking-tight mb-6 leading-tight"
            >
              Decades of Precision
              <span className="block text-gold">Engineering</span>
            </h2>
            <p
              id="about-desc"
              className="text-surface/70 font-sans text-base lg:text-lg leading-relaxed mb-6"
            >
              ARTITECT MACHINERY was founded on a single principle: that every sheet metal fabricator deserves access to world-class folding technology. For over 25 years, we have designed and manufactured machines that set the standard for precision, reliability, and ease of use.
            </p>
            <p className="text-surface/60 font-sans text-base leading-relaxed mb-10">
              From our state-of-the-art manufacturing facility, we produce a complete range of double folding machines, sheet metal folders, and metal folding systems — each one rigorously tested before delivery.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="flex flex-col gap-2">
                    <div className="w-10 h-10 border border-gold/40 flex items-center justify-center mb-1">
                      <Icon className="w-5 h-5 text-gold" />
                    </div>
                    <h4 className="font-serif text-surface font-semibold text-base">{pillar.title}</h4>
                    <p className="text-surface/55 font-sans text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
