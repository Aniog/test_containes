import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Zap, Eye, Layers, Atom } from 'lucide-react';

const techniques = [
  {
    icon: Eye,
    title: 'Light Microscopy',
    desc: 'The classic technique using visible light and lenses to magnify specimens up to 2,000×. Ideal for living cells and fluorescent staining.',
    color: 'text-teal-glow',
    bg: 'bg-teal-glow/10',
  },
  {
    icon: Zap,
    title: 'Electron Microscopy',
    desc: 'Uses electron beams instead of light to achieve magnifications up to 10,000,000×, revealing atomic-level structures.',
    color: 'text-violet-500',
    bg: 'bg-violet-pulse/10',
  },
  {
    icon: Layers,
    title: 'Confocal Imaging',
    desc: 'Laser-based technique that creates sharp 3D images by eliminating out-of-focus light, perfect for thick biological specimens.',
    color: 'text-amber-glow',
    bg: 'bg-amber-glow/10',
  },
  {
    icon: Atom,
    title: 'Atomic Force Microscopy',
    desc: 'A probe scans surfaces at the nanometer scale, mapping topography and measuring forces at the molecular level.',
    color: 'text-biolume',
    bg: 'bg-biolume/10',
  },
];

const scienceImages = [
  {
    id: 'sci-1',
    imgId: 'science-img-mc001',
    titleId: 'science-title-mc001',
    descId: 'science-desc-mc001',
    title: 'Fluorescent Cell Imaging',
    desc: 'Confocal microscopy of fluorescently labeled cell organelles and cytoskeleton',
    ratio: '4x3',
    width: '600',
  },
  {
    id: 'sci-2',
    imgId: 'science-img-mc002',
    titleId: 'science-title-mc002',
    descId: 'science-desc-mc002',
    title: 'Electron Microscope Lab',
    desc: 'Scanning electron microscope revealing nanoscale surface structures',
    ratio: '4x3',
    width: '600',
  },
  {
    id: 'sci-3',
    imgId: 'science-img-mc003',
    titleId: 'science-title-mc003',
    descId: 'science-desc-mc003',
    title: 'DNA Strand Visualization',
    desc: 'Atomic force microscopy image of DNA double helix structure',
    ratio: '4x3',
    width: '600',
  },
];

const Science = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="science" ref={containerRef} className="py-20 md:py-28 bg-deep-space">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-medium tracking-widest uppercase text-teal-glow mb-3 block">How We See the Invisible</span>
          <h2 className="text-3xl md:text-4xl font-bold text-soft-white mb-4">The Science of Microscopy</h2>
          <p className="text-muted-blue max-w-xl mx-auto leading-relaxed">
            Modern microscopy techniques have transformed our understanding of life, matter, and the universe at the smallest scales.
          </p>
        </div>

        {/* Techniques grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techniques.map((tech) => (
            <div key={tech.title} className="bg-midnight border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all">
              <div className={`w-12 h-12 rounded-xl ${tech.bg} flex items-center justify-center mb-4`}>
                <tech.icon className={`w-6 h-6 ${tech.color}`} />
              </div>
              <h3 className="text-soft-white font-semibold text-base mb-2">{tech.title}</h3>
              <p className="text-muted-blue text-sm leading-relaxed">{tech.desc}</p>
            </div>
          ))}
        </div>

        {/* Science image row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {scienceImages.map((img) => (
            <div key={img.id} className="group relative overflow-hidden rounded-2xl bg-midnight border border-white/10">
              <img
                alt={img.title}
                data-strk-img-id={img.imgId}
                data-strk-img={`[${img.descId}] [${img.titleId}]`}
                data-strk-img-ratio={img.ratio}
                data-strk-img-width={img.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-52 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="p-4">
                <h4 id={img.titleId} className="text-soft-white font-semibold text-sm mb-1">{img.title}</h4>
                <p id={img.descId} className="text-muted-blue text-xs leading-relaxed">{img.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Science;
