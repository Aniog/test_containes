import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Award, Users, Factory, TrendingUp } from 'lucide-react';

const MILESTONES = [
  { icon: Award, label: 'Founded', value: '1999', desc: 'Over 25 years of innovation' },
  { icon: Factory, label: 'Machines Built', value: '5,000+', desc: 'Across all product lines' },
  { icon: Users, label: 'Global Clients', value: '1,200+', desc: 'In 80+ countries' },
  { icon: TrendingUp, label: 'Patents Held', value: '47', desc: 'Proprietary technologies' },
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-brand-white py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Main About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3]">
              <img
                alt="ARTITECT Machinery factory"
                data-strk-img-id="about-factory-img-1v2w3x"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 bg-brand-accent rounded-2xl p-6 shadow-xl hidden md:block">
              <div className="font-serif font-bold text-brand-navy text-4xl leading-none mb-1">25+</div>
              <div className="font-sans text-brand-navy/80 text-sm font-medium">Years of<br />Excellence</div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 mb-4">
              <div className="w-8 h-px bg-brand-accent" />
              <span className="font-sans text-brand-accent text-xs uppercase tracking-[0.3em] font-medium">
                Our Story
              </span>
            </div>
            <h2
              id="about-title"
              className="font-serif font-bold text-brand-dark text-3xl md:text-4xl lg:text-5xl mb-6"
            >
              Built on Precision,<br className="hidden md:block" /> Driven by Innovation
            </h2>
            <p
              id="about-desc"
              className="font-sans text-brand-mid text-base leading-relaxed mb-5"
            >
              Since 1999, ARTITECT MACHINERY has been at the forefront of sheet metal folding technology. What began as a specialist engineering workshop has grown into a globally recognized manufacturer trusted by leading fabricators, aerospace suppliers, and construction companies worldwide.
            </p>
            <p className="font-sans text-brand-mid text-base leading-relaxed mb-8">
              Our engineering philosophy is simple: every machine we build must exceed the expectations of the most demanding production environments. We achieve this through relentless innovation, rigorous quality control, and a deep understanding of our customers' needs.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {['Precision Engineering', 'Proven Reliability', 'Global Expertise', 'Customer Focus'].map((val) => (
                <div key={val} className="flex items-center gap-2.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                  <span className="font-sans text-brand-dark text-sm font-medium">{val}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Milestones */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {MILESTONES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="bg-brand-light rounded-2xl p-6 text-center border border-brand-light hover:border-brand-accent/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Icon size={20} className="text-brand-accent" />
                </div>
                <div className="font-serif font-bold text-brand-dark text-3xl mb-1">{item.value}</div>
                <div className="font-sans font-semibold text-brand-dark text-sm mb-1">{item.label}</div>
                <div className="font-sans text-brand-mid text-xs">{item.desc}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
