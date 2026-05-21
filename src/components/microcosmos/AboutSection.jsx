import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '8.7M', label: 'Known Species' },
  { value: '1μm', label: 'Smallest Bacteria' },
  { value: '99%', label: 'Life is Microscopic' },
  { value: '3.8B', label: 'Years of Evolution' },
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-cosmos-surface">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="text-cosmos-accent text-xs uppercase tracking-widest font-semibold mb-3 font-grotesk">
              About MicroCosmos
            </p>
            <h2
              id="about-title"
              className="font-grotesk font-bold text-3xl md:text-4xl text-cosmos-text mb-6 leading-tight"
            >
              The Universe That Lives in a Single Drop of Water
            </h2>
            <p id="about-desc" className="text-cosmos-muted leading-relaxed mb-5">
              MicroCosmos is a visual exploration of the microscopic world — a realm invisible to the naked eye yet teeming with extraordinary life. From the intricate lattice of a diatom's silica shell to the alien beauty of a tardigrade, every image reveals a universe of staggering complexity.
            </p>
            <p className="text-cosmos-muted leading-relaxed mb-8">
              Using cutting-edge electron microscopy, fluorescence imaging, and confocal techniques, scientists have captured these hidden worlds in stunning detail. What you see here is not science fiction — it is the reality of life at its most fundamental level.
            </p>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="bg-cosmos-card border border-cosmos-border rounded-xl p-4">
                  <div className="font-grotesk font-bold text-2xl text-cosmos-accent mb-1">{stat.value}</div>
                  <div className="text-cosmos-muted text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Image collage */}
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] border border-cosmos-border">
              <img
                alt="Microscopic diatom organism"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-d1e2f3"
                data-strk-img="[about-desc] [about-title] microscopic diatom silica"
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="flex flex-col gap-3">
              <div className="rounded-2xl overflow-hidden aspect-square border border-cosmos-border">
                <img
                  alt="Tardigrade water bear microscopy"
                  className="w-full h-full object-cover"
                  data-strk-img-id="about-img-g4h5i6"
                  data-strk-img="[about-title] tardigrade water bear electron microscopy"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square border border-cosmos-border">
                <img
                  alt="Fluorescent cell microscopy"
                  className="w-full h-full object-cover"
                  data-strk-img-id="about-img-j7k8l9"
                  data-strk-img="[about-title] fluorescent cell biology microscopy"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
