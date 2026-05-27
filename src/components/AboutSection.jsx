import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const features = [
  {
    id: 'about-img-a1b2c3',
    title: 'Crystalline Structures',
    titleId: 'about-title-1',
    descId: 'about-desc-1',
    desc: 'Minerals and salts form breathtaking geometric patterns at the microscale, each crystal a testament to the mathematical precision of nature.',
    query: 'mineral crystal macro photography colorful geometric',
    ratio: '4x3',
    width: 700,
  },
  {
    id: 'about-img-d4e5f6',
    title: 'Living Cells',
    titleId: 'about-title-2',
    descId: 'about-desc-2',
    desc: 'Every living thing is built from cells — the fundamental unit of life. Inside each one, a universe of molecular machinery operates with astonishing precision.',
    query: 'living cell fluorescence microscopy colorful organelles',
    ratio: '4x3',
    width: 700,
  },
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-3">Our Mission</p>
          <h2 id="about-section-title" className="text-3xl md:text-5xl font-bold text-white mb-4">
            About MicroCosmos
          </h2>
          <p id="about-section-subtitle" className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            MicroCosmos is dedicated to making the invisible world visible — sharing the wonder of microscopic science with everyone through stunning imagery and accessible storytelling.
          </p>
        </div>

        {/* Alternating image-text rows */}
        <div className="flex flex-col gap-16">
          {features.map((f, i) => (
            <div
              key={f.id}
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}
            >
              <div className="rounded-3xl overflow-hidden aspect-[4/3] shadow-[0_0_60px_rgba(20,184,166,0.10)]">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={f.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  data-strk-img-id={f.id}
                  data-strk-img={`[${f.descId}] [${f.titleId}] [about-section-subtitle] [about-section-title]`}
                  data-strk-img-ratio={f.ratio}
                  data-strk-img-width={f.width}
                />
              </div>
              <div>
                <h3 id={f.titleId} className="text-2xl md:text-3xl font-bold text-white mb-4">
                  {f.title}
                </h3>
                <p id={f.descId} className="text-slate-400 leading-relaxed text-lg">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-[#0d1a24] border border-teal-900/40 rounded-3xl p-10 md:p-16 shadow-[0_0_60px_rgba(20,184,166,0.08)]">
          <h3 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Dive Deeper Into the{' '}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-300 bg-clip-text text-transparent">
              Microcosmos
            </span>
          </h3>
          <p className="text-slate-400 max-w-xl mx-auto mb-8 text-lg">
            The microscopic world is waiting to be explored. Every sample holds a new universe of discovery.
          </p>
          <a
            href="#explore"
            className="inline-flex items-center justify-center px-10 py-4 rounded-full bg-teal-400 text-[#050a0f] font-bold text-sm tracking-wide hover:bg-cyan-300 transition-colors"
          >
            Start Exploring
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
