import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10⁻⁹ m', label: 'Nanometer scale' },
  { value: '37T', label: 'Cells in human body' },
  { value: '200+', label: 'Cell types discovered' },
  { value: '8.7M', label: 'Species on Earth' },
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-[#050a0f]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#00d4c8] mb-3 block">
              Our Mission
            </span>
            <h2 id="about-title" className="text-3xl md:text-5xl font-bold text-[#e8f4f8] mb-6 leading-tight">
              Making the Invisible <span className="text-[#00d4c8]">Visible</span>
            </h2>
            <p id="about-desc" className="text-[#7fb3c8] text-lg leading-relaxed mb-6">
              MicroCosmos is a science communication platform dedicated to bringing the wonders of the microscopic world to everyone. We collaborate with researchers, microscopists, and science communicators worldwide to curate the most breathtaking imagery from the frontier of science.
            </p>
            <p className="text-[#7fb3c8] leading-relaxed mb-8">
              From electron microscopy to fluorescence imaging, our archive spans every domain of life — from the quantum interactions inside proteins to the ecosystems thriving in a single drop of pond water.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="p-4 rounded-xl bg-[#0d1a24] border border-[#00d4c8]/15">
                  <div className="text-2xl font-black text-[#00d4c8] mb-1">{s.value}</div>
                  <div className="text-xs text-[#7fb3c8] font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image collage */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden h-56">
              <img
                alt="Microscopy research"
                data-strk-img-id="about-img-1-qr9st0"
                data-strk-img="[about-desc] [about-title]"
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden h-56 mt-6">
              <img
                alt="Laboratory microscope"
                data-strk-img-id="about-img-2-uv1wx2"
                data-strk-img="[about-title] microscope laboratory science"
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="col-span-2 rounded-2xl overflow-hidden h-40">
              <img
                alt="Microscopic organisms"
                data-strk-img-id="about-img-3-yz3ab4"
                data-strk-img="[about-desc] microscopic organisms cells biology"
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
