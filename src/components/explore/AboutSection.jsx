import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Microscope } from 'lucide-react';

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-cosmos-dark relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="about-bg-7f2e4a"
        data-strk-bg="[about-subtitle] [about-title]"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-cosmos-dark via-cosmos-dark/90 to-cosmos-dark" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <Microscope className="w-12 h-12 text-cosmos-cyan mx-auto mb-6" />
        <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-cosmos-text mb-6">
          About MicroCosmos
        </h2>
        <p id="about-subtitle" className="text-cosmos-muted text-lg leading-relaxed mb-8 max-w-3xl mx-auto">
          MicroCosmos is a visual exploration of the microscopic world that surrounds us. Through cutting-edge imaging technology including scanning electron microscopy, fluorescence microscopy, and confocal imaging, we reveal the extraordinary beauty hidden in the smallest scales of existence.
        </p>
        <p className="text-cosmos-muted text-base leading-relaxed max-w-2xl mx-auto">
          Every image tells a story of adaptation, survival, and the fundamental processes that make life possible. From the elegant geometry of diatoms to the dynamic dance of cellular division, the microcosmos is a testament to nature's infinite creativity.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
