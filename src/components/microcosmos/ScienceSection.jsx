import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { FlaskConical, Layers, Atom } from 'lucide-react';

const scienceTopics = [
  {
    id: 'sci-electron',
    icon: Atom,
    title: 'Electron Microscopy',
    subtitle: 'Seeing at the nanoscale',
    desc: 'Scanning and transmission electron microscopes use beams of electrons instead of light, achieving resolutions thousands of times greater than optical microscopes.',
    imgId: 'sci-img-electron-ab1cd2',
    titleId: 'sci-electron-title',
    descId: 'sci-electron-desc',
  },
  {
    id: 'sci-fluorescence',
    icon: FlaskConical,
    title: 'Fluorescence Imaging',
    subtitle: 'Lighting up life',
    desc: 'Fluorescent dyes and proteins allow scientists to tag specific molecules inside living cells, revealing the dynamic processes of life in vivid color.',
    imgId: 'sci-img-fluorescence-ef3gh4',
    titleId: 'sci-fluorescence-title',
    descId: 'sci-fluorescence-desc',
  },
  {
    id: 'sci-cryo',
    icon: Layers,
    title: 'Cryo-Electron Tomography',
    subtitle: 'Frozen in time',
    desc: 'By flash-freezing biological samples and imaging them from multiple angles, scientists reconstruct 3D structures of proteins and viruses at atomic resolution.',
    imgId: 'sci-img-cryo-ij5kl6',
    titleId: 'sci-cryo-title',
    descId: 'sci-cryo-desc',
  },
];

const ScienceSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="science" ref={containerRef} className="py-20 md:py-28 bg-[#0d1a26]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#00d4ff] mb-3">
            The Science
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#e8f4f8] mb-4">
            How We See the Invisible
          </h2>
          <p className="text-[#7fb3c8] max-w-xl mx-auto leading-relaxed">
            Modern microscopy techniques have revolutionized our understanding of life, matter, and the universe at the smallest scales.
          </p>
        </div>

        {/* Topics */}
        <div className="space-y-12">
          {scienceTopics.map((topic, index) => {
            const Icon = topic.icon;
            const isEven = index % 2 === 0;
            return (
              <div
                key={topic.id}
                className={`flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center`}
              >
                {/* Image */}
                <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-[#1a3a4a] group">
                  <img
                    alt={topic.title}
                    data-strk-img-id={topic.imgId}
                    data-strk-img={`[${topic.descId}] [${topic.titleId}]`}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-64 md:h-72 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-[#00d4ff]/10 border border-[#00d4ff]/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#00d4ff]" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#00d4ff]">
                        {topic.subtitle}
                      </p>
                    </div>
                  </div>
                  <h3 id={topic.titleId} className="text-2xl md:text-3xl font-bold text-[#e8f4f8] mb-4">
                    {topic.title}
                  </h3>
                  <p id={topic.descId} className="text-[#7fb3c8] leading-relaxed text-base">
                    {topic.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
