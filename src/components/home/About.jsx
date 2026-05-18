import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const About = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div className="order-2 lg:order-1">
          <p
            id="about-eyebrow"
            className="text-cyan-600 text-sm uppercase tracking-widest font-semibold mb-3"
          >
            Our Story
          </p>
          <h2
            id="about-title"
            className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-5"
          >
            A Commitment to Purity Since 1998
          </h2>
          <p
            id="about-subtitle"
            className="text-slate-600 text-lg leading-relaxed mb-5"
          >
            AquaPure was founded by a family of mountain hikers who discovered the
            spring on a summer expedition. Struck by the water's exceptional clarity
            and taste, they dedicated their lives to sharing it with the world —
            responsibly.
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-8">
            Today we bottle directly at the source, using minimal processing and
            100% recyclable packaging. Every bottle carries our promise: nothing
            added, nothing removed — just pure water as nature made it.
          </p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center gap-2 bg-sky-50 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block" />
              <span className="text-slate-700 text-sm font-medium">Family owned</span>
            </div>
            <div className="flex items-center gap-2 bg-sky-50 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block" />
              <span className="text-slate-700 text-sm font-medium">Zero additives</span>
            </div>
            <div className="flex items-center gap-2 bg-sky-50 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block" />
              <span className="text-slate-700 text-sm font-medium">Carbon neutral</span>
            </div>
            <div className="flex items-center gap-2 bg-sky-50 rounded-full px-4 py-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block" />
              <span className="text-slate-700 text-sm font-medium">Recyclable packaging</span>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
          <img
            alt="About AquaPure spring water company"
            className="w-full h-full object-cover"
            data-strk-img-id="about-img-c9e1f5"
            data-strk-img="[about-subtitle] [about-title]"
            data-strk-img-ratio="4x3"
            data-strk-img-width="700"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
