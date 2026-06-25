import { useEffect, useRef } from 'react';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const milestones = [
  { icon: Award, value: '20+', label: 'Years of Excellence' },
  { icon: Users, value: '1,200+', label: 'Satisfied Clients' },
  { icon: Globe, value: '30+', label: 'Countries Served' },
  { icon: TrendingUp, value: '500+', label: 'Machines Installed' },
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-brand-navy py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
              <img
                alt="ARTITECT Machinery manufacturing facility"
                data-strk-img-id="about-img-fac-8r2p5m"
                data-strk-img="[about-subtitle] [about-title] sheet metal machinery manufacturing factory"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/40 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 bg-brand-gold rounded-2xl p-6 shadow-2xl">
              <div
                className="text-brand-navy font-bold text-4xl"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                20+
              </div>
              <div className="text-brand-navy text-sm font-semibold mt-1">
                Years of Precision
              </div>
            </div>

            {/* Decorative border */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-brand-gold/30 rounded-2xl -z-10" />
          </div>

          {/* Right: Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-brand-gold/10 border border-brand-gold/30 rounded-full px-5 py-2 mb-6">
              <span className="text-brand-gold text-xs font-semibold tracking-widest uppercase" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                About ARTITECT
              </span>
            </div>

            <h2
              id="about-title"
              className="text-white font-bold mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              Crafting Precision Since Day One
            </h2>

            <p
              id="about-subtitle"
              className="text-brand-silver text-base leading-relaxed mb-6"
            >
              ARTITECT MACHINERY was founded on a single principle: that every sheet metal folding machine should be a masterpiece of engineering. Over two decades, we have grown from a specialist workshop into a globally recognized manufacturer trusted by fabricators, contractors, and industrial producers worldwide.
            </p>

            <p className="text-brand-silver text-base leading-relaxed mb-10">
              Our machines — from compact double folders to heavy-duty industrial folding systems — are designed, manufactured, and tested to the highest standards. We combine cutting-edge CNC technology with robust mechanical engineering to deliver machines that perform flawlessly, day after day.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: 'Precision First', desc: 'Every machine calibrated to micron accuracy' },
                { title: 'Built to Last', desc: 'Industrial-grade components for decades of use' },
                { title: 'Customer Focus', desc: 'Tailored solutions for every production need' },
                { title: 'Global Reach', desc: 'Support and service in 30+ countries' },
              ].map((val) => (
                <div key={val.title} className="bg-brand-steel/50 rounded-xl p-4 border border-brand-gold/10">
                  <div
                    className="text-brand-gold font-bold text-sm mb-1"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {val.title}
                  </div>
                  <div className="text-brand-silver text-xs leading-relaxed">{val.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Milestones Row */}
        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {milestones.map((m) => {
            const Icon = m.icon;
            return (
              <div
                key={m.label}
                className="bg-brand-steel/40 rounded-2xl p-6 text-center border border-brand-gold/10 hover:border-brand-gold/40 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-gold/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-brand-gold" />
                </div>
                <div
                  className="text-white font-bold text-3xl mb-1"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {m.value}
                </div>
                <div className="text-brand-silver text-sm">{m.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
