import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { CheckCircle2, Award, Users, Globe, Wrench } from 'lucide-react';

const stats = [
  { value: '25+', label: 'Years of Experience', icon: Award },
  { value: '3,200+', label: 'Machines Delivered', icon: Wrench },
  { value: '48', label: 'Countries Served', icon: Globe },
  { value: '150+', label: 'Team Members', icon: Users },
];

const values = [
  'Precision engineering in every machine we build',
  'Rigorous quality control and CE certification',
  'Custom configurations for specialized workflows',
  'Global support network with local service partners',
  'Continuous R&D for next-generation folding technology',
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="relative py-20 md:py-28 bg-am-bg-secondary">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-xs font-medium uppercase tracking-[0.12em] text-am-gold mb-4">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-semibold text-am-text tracking-[-0.01em] leading-tight mb-5">
            Built on Precision, Driven by Innovation
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image side */}
          <div className="relative">
            <div className="relative rounded-lg overflow-hidden border border-am-border">
              <img
                alt="ARTITECT MACHINERY factory floor"
                className="w-full h-[380px] md:h-[440px] object-cover"
                data-strk-img-id="about-factory-7e3a2c"
                data-strk-img="[about-title] [about-desc] sheet metal factory workshop machinery manufacturing"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-am-bg-secondary/50 to-transparent" />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-am-gold/30 rounded-lg -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-am-gold/20 rounded-lg -z-10" />
          </div>

          {/* Text side */}
          <div>
            <h3
              id="about-title"
              className="text-2xl md:text-3xl font-semibold text-am-text mb-5 leading-snug"
            >
              A Legacy of Craftsmanship in Metal Forming
            </h3>
            <p
              id="about-desc"
              className="text-am-text-secondary leading-relaxed mb-6"
            >
              Since 1998, ARTITECT MACHINERY has been at the forefront of sheet metal
              folding technology. Our double folding machines, metal folders, and sheet
              metal folding equipment are trusted by fabricators, architects, and
              industrial manufacturers across the globe.
            </p>
            <p className="text-am-text-secondary leading-relaxed mb-8">
              Every machine that leaves our facility is a testament to our commitment to
              precision. From compact manual folders for custom shops to fully automated
              hydraulic systems for high-volume production, we engineer solutions that
              stand the test of time.
            </p>

            <div className="space-y-4">
              {values.map((value, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-am-gold mt-0.5 shrink-0" />
                  <span className="text-sm text-am-text-secondary">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center p-6 md:p-8 bg-am-surface rounded-lg border border-am-border"
              >
                <Icon className="w-6 h-6 text-am-gold mx-auto mb-3" />
                <div className="text-3xl md:text-4xl font-bold text-am-text mb-2">
                  {stat.value}
                </div>
                <div className="text-xs font-medium uppercase tracking-[0.08em] text-am-text-muted">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
