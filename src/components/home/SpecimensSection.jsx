import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Star } from 'lucide-react';

const specimens = [
  {
    id: 'sp1', titleId: 'sp-t-sp1', descId: 'sp-d-sp1', imgId: 'sp-img-sp1-4c9a2f',
    title: 'Tardigrade (Water Bear)',
    subtitle: 'Ramazzottius oberhaeuseri',
    desc: 'The most resilient creature on Earth. Tardigrades can survive in the vacuum of space, extreme radiation, and temperatures from -272°C to 150°C. Magnified 500×.',
    magnification: '500×',
    technique: 'Scanning Electron Microscopy',
    featured: true,
  },
  {
    id: 'sp2', titleId: 'sp-t-sp2', descId: 'sp-d-sp2', imgId: 'sp-img-sp2-7e3b1d',
    title: 'Morpho Butterfly Wing',
    subtitle: 'Morpho menelaus',
    desc: 'The iridescent blue color of the Morpho butterfly comes not from pigment but from nanostructures on its wing scales that diffract light. Magnified 1,000×.',
    magnification: '1,000×',
    technique: 'Transmission Electron Microscopy',
    featured: true,
  },
  {
    id: 'sp3', titleId: 'sp-t-sp3', descId: 'sp-d-sp3', imgId: 'sp-img-sp3-2a6f8c',
    title: 'Radiolarian Skeleton',
    subtitle: 'Acantharia species',
    desc: 'These single-celled marine organisms build intricate silica skeletons of extraordinary geometric complexity. Each one is unique, like a microscopic snowflake.',
    magnification: '200×',
    technique: 'Light Microscopy',
    featured: false,
  },
  {
    id: 'sp4', titleId: 'sp-t-sp4', descId: 'sp-d-sp4', imgId: 'sp-img-sp4-9d5c3e',
    title: 'Purkinje Neuron',
    subtitle: 'Cerebellum tissue',
    desc: 'One of the largest neurons in the human brain, the Purkinje cell has an elaborate dendritic tree that receives up to 200,000 synaptic inputs. Fluorescence stained.',
    magnification: '100×',
    technique: 'Confocal Fluorescence Microscopy',
    featured: false,
  },
];

export default function SpecimensSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="specimens" ref={containerRef} className="bg-[#0d1526] py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[#00d4c8] text-xs font-bold tracking-[0.3em] uppercase mb-4">
            Featured Specimens
          </p>
          <h2 id="specimens-title" className="text-4xl md:text-5xl font-black text-[#f0f4ff] mb-4">
            Hall of Wonders
          </h2>
          <p id="specimens-desc" className="text-[#8ba3c7] text-lg max-w-xl mx-auto">
            Our most extraordinary specimens — each one a masterpiece of natural engineering at the microscopic scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {specimens.filter((s) => s.featured).map((sp) => (
            <div
              key={sp.id}
              className="group relative rounded-2xl overflow-hidden border border-[#1e3050] hover:border-[#00d4c8]/40 transition-all duration-300 bg-[#111c30]"
            >
              <div className="aspect-[16/9] overflow-hidden">
                <img
                  alt={sp.title}
                  data-strk-img-id={sp.imgId}
                  data-strk-img={`[${sp.descId}] [${sp.titleId}] [specimens-desc] [specimens-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute top-4 left-4">
                <span className="flex items-center gap-1 bg-[#00d4c8]/20 text-[#00d4c8] text-xs font-bold px-3 py-1 rounded-full border border-[#00d4c8]/30">
                  <Star className="w-3 h-3 fill-current" /> Featured
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 id={sp.titleId} className="text-[#f0f4ff] font-bold text-xl mb-1">{sp.title}</h3>
                    <p className="text-[#00d4c8] text-sm italic">{sp.subtitle}</p>
                  </div>
                  <div className="text-right shrink-0 ml-4">
                    <div className="text-[#f0f4ff] font-black text-lg">{sp.magnification}</div>
                    <div className="text-[#4a6080] text-xs">magnification</div>
                  </div>
                </div>
                <p id={sp.descId} className="text-[#8ba3c7] text-sm leading-relaxed mb-4">{sp.desc}</p>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-[#4a6080] uppercase tracking-wider">Technique:</span>
                  <span className="text-xs text-[#8ba3c7] font-medium">{sp.technique}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {specimens.filter((s) => !s.featured).map((sp) => (
            <div
              key={sp.id}
              className="group flex gap-4 rounded-2xl overflow-hidden border border-[#1e3050] hover:border-[#00d4c8]/40 transition-all duration-300 bg-[#111c30] p-4"
            >
              <div className="w-32 h-32 shrink-0 rounded-xl overflow-hidden">
                <img
                  alt={sp.title}
                  data-strk-img-id={sp.imgId}
                  data-strk-img={`[${sp.descId}] [${sp.titleId}] [specimens-title]`}
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 id={sp.titleId} className="text-[#f0f4ff] font-bold text-base mb-0.5">{sp.title}</h3>
                <p className="text-[#00d4c8] text-xs italic mb-2">{sp.subtitle}</p>
                <p id={sp.descId} className="text-[#8ba3c7] text-xs leading-relaxed mb-3 line-clamp-3">{sp.desc}</p>
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-[#f0f4ff] bg-[#1e3050] px-2 py-0.5 rounded">{sp.magnification}</span>
                  <span className="text-xs text-[#4a6080]">{sp.technique}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
