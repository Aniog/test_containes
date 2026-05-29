import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function IntroSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="intro" ref={containerRef} className="bg-[#050a14] py-24 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text */}
        <div>
          <p id="intro-label" className="text-cyan-400 text-sm font-semibold tracking-[0.25em] uppercase mb-3">
            What is MicroCosmos?
          </p>
          <h2 id="intro-title" className="text-3xl md:text-4xl font-bold text-[#e2f4ff] mb-6 leading-tight">
            A Universe Too Small to See, Too Vast to Ignore
          </h2>
          <p id="intro-desc" className="text-[#94b8d0] text-base leading-relaxed mb-5">
            The microcosmos is a world teeming with life invisible to the naked eye. Billions of microorganisms inhabit every drop of water, every grain of soil, and every breath of air. They are the architects of life on Earth.
          </p>
          <p className="text-[#94b8d0] text-base leading-relaxed mb-8">
            From the elegant spirals of diatoms to the alien geometry of radiolarians, microscopic life is endlessly diverse, beautiful, and essential. Without microbes, complex life as we know it could not exist.
          </p>
          <div className="flex gap-8">
            <div>
              <p className="text-3xl font-extrabold text-cyan-400">10<sup>30</sup></p>
              <p className="text-[#4a7a9b] text-sm mt-1">Microbes on Earth</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-teal-400">1,000+</p>
              <p className="text-[#4a7a9b] text-sm mt-1">Species per gram of soil</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-purple-400">37T</p>
              <p className="text-[#4a7a9b] text-sm mt-1">Microbes in human body</p>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="rounded-2xl overflow-hidden border border-cyan-500/20 shadow-[0_0_40px_rgba(0,200,255,0.12)]">
            <img
              alt="Microscopic life under the microscope"
              className="w-full h-80 md:h-96 object-cover"
              data-strk-img-id="intro-img-mc002"
              data-strk-img="[intro-desc] [intro-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>
          {/* Decorative glow */}
          <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
