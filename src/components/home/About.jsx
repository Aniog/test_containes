import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-steel-900 py-24 md:py-32 border-t border-steel-600/40">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                alt="ARTITECT Machinery manufacturing facility"
                data-strk-img-id="about-facility-4k9m2p"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-steel-900/40 to-transparent" />
            </div>
            {/* Decorative gold border accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold-500/40 -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-gold-500/20 -z-10" />

            {/* Floating stat card */}
            <div className="absolute bottom-6 left-6 bg-steel-900/95 backdrop-blur-sm border border-steel-600 p-5 shadow-xl">
              <div className="text-3xl font-extrabold text-gold-500">ISO 9001</div>
              <div className="text-steel-400 text-xs tracking-widest uppercase mt-1">Certified Quality</div>
            </div>
          </div>

          {/* Text Side */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-px bg-gold-500" />
              <span className="text-gold-500 text-xs font-semibold tracking-[0.3em] uppercase">
                About ARTITECT
              </span>
            </div>

            <h2
              id="about-title"
              className="text-3xl md:text-4xl font-extrabold text-steel-100 mb-6"
            >
              A Legacy of Precision Engineering
            </h2>

            <p
              id="about-desc"
              className="text-steel-200 text-base leading-relaxed mb-6"
            >
              For over 25 years, ARTITECT MACHINERY has been at the forefront of sheet metal
              folding technology. Founded by engineers with a passion for precision, we have
              grown into a globally trusted manufacturer supplying industries from construction
              and HVAC to aerospace and automotive.
            </p>

            <p className="text-steel-400 text-base leading-relaxed mb-8">
              Our machines are designed and built in-house, from concept to commissioning.
              Every component is selected for longevity, every tolerance is held to the highest
              standard, and every machine is tested rigorously before it leaves our facility.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Precision', desc: 'Micron-level accuracy in every fold' },
                { label: 'Durability', desc: 'Built to last decades, not years' },
                { label: 'Innovation', desc: 'Continuously advancing our technology' },
                { label: 'Support', desc: 'Lifetime service partnership' },
              ].map((v) => (
                <div key={v.label} className="border-l-2 border-gold-500/40 pl-4">
                  <div className="text-steel-100 font-semibold text-sm mb-1">{v.label}</div>
                  <div className="text-steel-400 text-xs leading-relaxed">{v.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
