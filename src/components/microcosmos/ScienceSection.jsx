import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { FlaskConical, Atom, Dna, Layers } from 'lucide-react';

const techniques = [
  {
    icon: FlaskConical,
    titleId: 'sci-tech-title-1',
    descId: 'sci-tech-desc-1',
    imgId: 'sci-img-mc030',
    title: 'Electron Microscopy',
    desc: 'Using beams of electrons instead of light, electron microscopes achieve magnifications up to 10 million times, revealing atomic-scale structures.',
    color: 'text-cyan-400',
    ratio: '3x2',
    width: 700,
  },
  {
    icon: Atom,
    titleId: 'sci-tech-title-2',
    descId: 'sci-tech-desc-2',
    imgId: 'sci-img-mc031',
    title: 'Fluorescence Imaging',
    desc: 'Fluorescent dyes and proteins light up specific cellular structures, turning the invisible machinery of life into a glowing, colorful spectacle.',
    color: 'text-violet-400',
    ratio: '3x2',
    width: 700,
  },
  {
    icon: Dna,
    titleId: 'sci-tech-title-3',
    descId: 'sci-tech-desc-3',
    imgId: 'sci-img-mc032',
    title: 'Cryo-Electron Tomography',
    desc: 'Flash-freezing samples preserves them in their natural state, allowing scientists to reconstruct 3D models of viruses and proteins at near-atomic resolution.',
    color: 'text-emerald-400',
    ratio: '3x2',
    width: 700,
  },
  {
    icon: Layers,
    titleId: 'sci-tech-title-4',
    descId: 'sci-tech-desc-4',
    imgId: 'sci-img-mc033',
    title: 'Confocal Microscopy',
    desc: 'Optical sectioning technology creates sharp, high-contrast images of thick specimens by eliminating out-of-focus light, enabling 3D reconstruction of living tissue.',
    color: 'text-amber-400',
    ratio: '3x2',
    width: 700,
  },
];

const ScienceSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="science" ref={containerRef} className="py-24 px-4 md:px-8 bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm text-amber-400 uppercase tracking-widest font-medium mb-3">The Science</p>
          <h2 id="sci-section-title" className="text-3xl md:text-5xl font-bold text-white mb-4">
            How We See the Invisible
          </h2>
          <p id="sci-section-desc" className="text-gray-400 text-lg max-w-xl mx-auto">
            Modern microscopy techniques have transformed our understanding of life, revealing structures and processes that were unimaginable just decades ago.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {techniques.map((tech) => (
            <div
              key={tech.title}
              className="group bg-gray-900 border border-gray-700 rounded-2xl overflow-hidden hover:border-gray-600 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={tech.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={tech.imgId}
                  data-strk-img={`[${tech.descId}] [${tech.titleId}] [sci-section-desc] [sci-section-title]`}
                  data-strk-img-ratio={tech.ratio}
                  data-strk-img-width={tech.width}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <tech.icon className={`w-5 h-5 ${tech.color}`} />
                  <h3 id={tech.titleId} className="text-white font-bold text-xl">{tech.title}</h3>
                </div>
                <p id={tech.descId} className="text-gray-400 leading-relaxed">{tech.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Timeline / fact strip */}
        <div className="mt-20 bg-gray-900 border border-gray-700 rounded-2xl p-8 md:p-12">
          <h3 id="timeline-title" className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            Milestones in Microscopy
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { year: '1674', event: 'Antonie van Leeuwenhoek first observes bacteria', color: 'text-cyan-400' },
              { year: '1931', event: 'Ernst Ruska invents the electron microscope', color: 'text-violet-400' },
              { year: '1981', event: 'Scanning tunneling microscope reveals atomic surfaces', color: 'text-emerald-400' },
              { year: '2014', event: 'Super-resolution microscopy wins the Nobel Prize', color: 'text-amber-400' },
            ].map((item) => (
              <div key={item.year} className="text-center">
                <div className={`text-3xl font-extrabold ${item.color} mb-2`}>{item.year}</div>
                <p className="text-gray-400 text-sm leading-relaxed">{item.event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
