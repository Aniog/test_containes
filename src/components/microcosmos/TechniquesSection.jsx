import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const techniques = [
  {
    id: 'tech-01',
    imgId: 'tech-img-t1u2v3',
    name: 'Scanning Electron Microscopy',
    abbr: 'SEM',
    desc: 'Uses a focused beam of electrons to scan the surface of a specimen, producing detailed 3D-like images of surface topology.',
    magnification: 'Up to 500,000×',
    color: '#00e5c8',
  },
  {
    id: 'tech-02',
    imgId: 'tech-img-w4x5y6',
    name: 'Fluorescence Microscopy',
    abbr: 'FM',
    desc: 'Illuminates specimens with specific wavelengths of light, causing fluorescent molecules to emit vivid colors that reveal cellular structures.',
    magnification: 'Up to 1,000×',
    color: '#7c3aed',
  },
  {
    id: 'tech-03',
    imgId: 'tech-img-z7a8b9',
    name: 'Transmission Electron Microscopy',
    abbr: 'TEM',
    desc: 'Passes electrons through ultra-thin specimens to reveal internal structures at near-atomic resolution.',
    magnification: 'Up to 1,000,000×',
    color: '#00e5c8',
  },
];

const TechniquesSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="techniques" ref={containerRef} className="py-20 md:py-28 bg-cosmos-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-cosmos-accent text-xs uppercase tracking-widest font-semibold mb-3 font-grotesk">
            How We See
          </p>
          <h2
            id="tech-section-title"
            className="font-grotesk font-bold text-3xl md:text-4xl text-cosmos-text mb-4"
          >
            Microscopy Techniques
          </h2>
          <p id="tech-section-desc" className="text-cosmos-muted max-w-xl mx-auto leading-relaxed">
            The tools that allow us to peer into the microscopic world, each revealing a different layer of hidden reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {techniques.map((tech) => (
            <div
              key={tech.id}
              className="group relative bg-cosmos-card border border-cosmos-border rounded-2xl overflow-hidden hover:border-cosmos-accent/30 transition-all duration-300"
            >
              {/* Image */}
              <div className="aspect-[4x3] overflow-hidden">
                <img
                  id={tech.id}
                  alt={tech.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  data-strk-img-id={tech.imgId}
                  data-strk-img={`[${tech.id}] [tech-section-desc] [tech-section-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width={500}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cosmos-card to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span
                    className="font-grotesk font-bold text-lg px-3 py-1 rounded-lg"
                    style={{ backgroundColor: `${tech.color}20`, color: tech.color, border: `1px solid ${tech.color}40` }}
                  >
                    {tech.abbr}
                  </span>
                  <h3 className="font-grotesk font-semibold text-cosmos-text text-sm leading-tight">{tech.name}</h3>
                </div>
                <p className="text-cosmos-muted text-sm leading-relaxed mb-4">{tech.desc}</p>
                <div className="flex items-center gap-2 pt-3 border-t border-cosmos-border">
                  <span className="text-cosmos-dim text-xs uppercase tracking-wider font-grotesk">Magnification:</span>
                  <span className="text-cosmos-accent text-sm font-semibold font-grotesk">{tech.magnification}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechniquesSection;
