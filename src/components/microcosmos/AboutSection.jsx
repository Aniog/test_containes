import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '8.7M', label: 'Species on Earth' },
  { value: '1μm', label: 'Average bacteria size' },
  { value: '37T', label: 'Cells in human body' },
  { value: '10¹⁸', label: 'Microbes in the ocean' },
];

const photoStrip = [
  { id: 'strip-img-mc001', titleId: 'strip-title-mc001', subtitleId: 'strip-sub-mc001', title: 'Amoeba', subtitle: 'Shape-shifting single cell' },
  { id: 'strip-img-mc002', titleId: 'strip-title-mc002', subtitleId: 'strip-sub-mc002', title: 'Euglena', subtitle: 'Photosynthetic flagellate' },
  { id: 'strip-img-mc003', titleId: 'strip-title-mc003', subtitleId: 'strip-sub-mc003', title: 'Hydra', subtitle: 'Freshwater polyp' },
  { id: 'strip-img-mc004', titleId: 'strip-title-mc004', subtitleId: 'strip-sub-mc004', title: 'Stentor', subtitle: 'Trumpet-shaped ciliate' },
  { id: 'strip-img-mc005', titleId: 'strip-title-mc005', subtitleId: 'strip-sub-mc005', title: 'Cyclops', subtitle: 'Tiny crustacean copepod' },
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-neutral-950 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-800 mb-20">
          {stats.map((s) => (
            <div key={s.label} className="bg-neutral-950 p-8 text-center">
              <p className="text-white text-4xl md:text-5xl font-black tracking-tighter">{s.value}</p>
              <p className="text-neutral-500 text-xs uppercase tracking-widest mt-2">{s.label}</p>
            </div>
          ))}
        </div>

        {/* About text + image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-neutral-500 text-sm uppercase tracking-widest mb-4">About</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-white mb-8">
              Why the Microcosmos Matters
            </h2>
            <p className="text-neutral-300 text-base leading-relaxed mb-6">
              Microorganisms are the foundation of all life on Earth. They cycle nutrients,
              produce half of the world's oxygen, and form the base of every food chain.
              Without them, complex life as we know it would be impossible.
            </p>
            <p className="text-neutral-300 text-base leading-relaxed mb-6">
              Yet most of us go through life completely unaware of this teeming, invisible
              civilization. MicroCosmos exists to change that — to make the invisible visible,
              and to inspire wonder at the world beneath our feet.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Every image in this archive was captured using advanced microscopy techniques,
              revealing structures and organisms that have never been seen by the naked eye.
            </p>
          </div>
          <div className="relative overflow-hidden group">
            <img
              alt="Microscopy lab"
              data-strk-img-id="about-img-mc001"
              data-strk-img="[about-sub-mc001] [about-title-mc001] microscopy laboratory scientist"
              data-strk-img-ratio="3x4"
              data-strk-img-width="600"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-96 object-cover grayscale group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
              <h3 id="about-title-mc001" className="text-white font-bold">Research Laboratory</h3>
              <p id="about-sub-mc001" className="text-neutral-400 text-sm">Advanced microscopy imaging facility</p>
            </div>
          </div>
        </div>

        {/* Photo strip */}
        <div>
          <p className="text-neutral-500 text-sm uppercase tracking-widest mb-6">More Organisms</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-1">
            {photoStrip.map((item) => (
              <div key={item.id} className="relative overflow-hidden group">
                <img
                  alt={item.title}
                  data-strk-img-id={item.id}
                  data-strk-img={`[${item.subtitleId}] [${item.titleId}] microscopy organism`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-40 object-cover grayscale group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3">
                  <p id={item.titleId} className="text-white text-xs font-bold">{item.title}</p>
                  <p id={item.subtitleId} className="text-neutral-400 text-xs">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
