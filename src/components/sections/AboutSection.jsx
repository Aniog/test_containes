import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="science" ref={containerRef} className="bg-black py-24 md:py-32 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left: images */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[3/4]">
              <img
                alt="Scientist using microscope"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-k1l2m3"
                data-strk-img="[about-desc] [about-title] scientist microscope laboratory"
                data-strk-img-ratio="3x4"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            {/* Floating inset image */}
            <div className="absolute -bottom-8 -right-4 md:-right-8 w-40 md:w-56 rounded-2xl overflow-hidden border-4 border-black shadow-2xl aspect-square">
              <img
                alt="Microscope slide preparation"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-n4o5p6"
                data-strk-img="[about-title] microscope slide preparation laboratory"
                data-strk-img-ratio="1x1"
                data-strk-img-width="300"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
          </div>

          {/* Right: text */}
          <div className="md:pl-8">
            <p className="text-neutral-500 text-xs font-medium tracking-widest uppercase mb-4">Our Mission</p>
            <h2 id="about-title" className="text-white font-black text-4xl md:text-5xl tracking-tighter leading-tight mb-6">
              Science Meets<br />Wonder
            </h2>
            <p id="about-desc" className="text-neutral-300 text-base leading-relaxed mb-6">
              MicroCosmos was founded on a simple belief: the most extraordinary things in the universe are the ones we cannot see. Our team of biologists, physicists, and photographers work together to capture and share the hidden beauty of the microscopic world.
            </p>
            <p className="text-neutral-400 text-base leading-relaxed mb-10">
              Using cutting-edge electron microscopes, confocal imaging systems, and polarized light techniques, we reveal structures and organisms that have existed for billions of years — yet remain largely unknown to the public.
            </p>

            {/* Feature list */}
            <div className="space-y-4">
              {[
                { title: 'Electron Microscopy', desc: 'Sub-nanometer resolution imaging of surfaces and cross-sections.' },
                { title: 'Fluorescence Imaging', desc: 'Tagging proteins and organelles with fluorescent markers.' },
                { title: 'Cryo-EM Techniques', desc: 'Preserving specimens in vitreous ice for native-state imaging.' },
              ].map((feat) => (
                <div key={feat.title} className="flex gap-4 items-start">
                  <div className="w-1 h-12 bg-white rounded-full flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">{feat.title}</h4>
                    <p className="text-neutral-500 text-sm mt-0.5">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
