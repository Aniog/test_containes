import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const scales = [
  { label: '1 mm', name: 'Dust Mite', imgId: 'scale-img-mc018', id: 'scale1', desc: 'Dust mite microscopic view' },
  { label: '100 µm', name: 'Human Hair', imgId: 'scale-img-mc019', id: 'scale2', desc: 'Human hair cross section microscopy' },
  { label: '10 µm', name: 'Red Blood Cell', imgId: 'scale-img-mc020', id: 'scale3', desc: 'Red blood cell electron microscopy' },
  { label: '1 µm', name: 'Bacterium', imgId: 'scale-img-mc021', id: 'scale4', desc: 'Bacteria microscopic image' },
  { label: '100 nm', name: 'Virus', imgId: 'scale-img-mc022', id: 'scale5', desc: 'Virus particle electron microscopy' },
  { label: '1 nm', name: 'DNA Strand', imgId: 'scale-img-mc023', id: 'scale6', desc: 'DNA double helix molecular model' },
];

export default function ScaleSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 md:py-28 px-4 md:px-8 bg-[#050a0f]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm font-medium tracking-widest uppercase text-[#00ffcc] mb-3">Scale of Life</p>
          <h2 id="scale-heading" className="text-3xl md:text-4xl font-bold text-[#f0f8ff] mb-4">
            From Millimeters to Nanometers
          </h2>
          <p className="text-[#8bafc7] max-w-xl mx-auto leading-relaxed">
            The microscopic world spans many orders of magnitude. Each step down reveals an entirely new universe.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {scales.map((s, i) => (
            <div
              key={s.id}
              className="group relative rounded-xl overflow-hidden border border-[#00ffcc]/15 hover:border-[#00ffcc]/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,204,0.2)]"
              style={{ opacity: 1 - i * 0.05 }}
            >
              <img
                alt={s.name}
                className="w-full h-36 object-cover group-hover:scale-110 transition-transform duration-700"
                data-strk-img-id={s.imgId}
                data-strk-img={`[${s.id}-desc] [scale-heading]`}
                data-strk-img-ratio="1x1"
                data-strk-img-width={400}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050a0f]/90 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <div className="text-[#00ffcc] text-xs font-bold tracking-widest">{s.label}</div>
                <div className="text-[#f0f8ff] text-xs font-medium mt-0.5">{s.name}</div>
                <p id={`${s.id}-desc`} className="sr-only">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Scale bar */}
        <div className="mt-10 flex items-center gap-0 max-w-2xl mx-auto">
          {scales.map((s, i) => (
            <div key={s.id} className="flex-1 flex flex-col items-center">
              <div
                className="w-full h-2 rounded-sm"
                style={{
                  background: `linear-gradient(90deg, #00d4ff, #7c3aed, #00ffcc)`,
                  opacity: 1 - i * 0.1,
                }}
              />
              <span className="text-[#8bafc7] text-xs mt-1 hidden md:block">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
