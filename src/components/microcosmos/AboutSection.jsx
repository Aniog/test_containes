import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10³⁰', label: 'Bacteria on Earth', desc: 'More than all stars in the observable universe' },
  { value: '37T', label: 'Cells in the human body', desc: 'Each one a universe of molecular activity' },
  { value: '0.1µm', label: 'Smallest visible bacteria', desc: 'At the edge of optical microscopy resolution' },
  { value: '4B', label: 'Years of microbial life', desc: 'Microbes have existed since Earth\'s early days' },
];

const AboutSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-[#0d1a26]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="text-center p-6 bg-[#0f2030] border border-[#1a3a4a] rounded-2xl"
            >
              <div className="text-3xl md:text-4xl font-black text-[#00d4ff] mb-2 drop-shadow-[0_0_12px_rgba(0,212,255,0.4)]">
                {stat.value}
              </div>
              <div className="text-[#e8f4f8] font-semibold text-sm mb-1">{stat.label}</div>
              <div className="text-[#3d6070] text-xs leading-snug">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* About Content */}
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image */}
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-[#1a3a4a] glow-border">
            <img
              alt="Microscope laboratory"
              data-strk-img-id="about-img-lab-kl3mn4"
              data-strk-img="[about-desc] [about-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-72 md:h-80 object-cover"
            />
          </div>

          {/* Text */}
          <div className="w-full md:w-1/2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#00d4ff] mb-3">
              Our Mission
            </p>
            <h2 id="about-title" className="text-3xl md:text-4xl font-bold text-[#e8f4f8] mb-6">
              Bringing the Invisible World to Everyone
            </h2>
            <p id="about-desc" className="text-[#7fb3c8] leading-relaxed mb-4">
              MicroCosmos is a science communication project dedicated to making the microscopic world accessible, beautiful, and awe-inspiring for everyone — from curious students to seasoned researchers.
            </p>
            <p className="text-[#7fb3c8] leading-relaxed mb-8">
              We collaborate with scientists, photographers, and educators worldwide to curate the most stunning and scientifically accurate microscopic imagery available, paired with clear, engaging explanations.
            </p>
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] text-xs font-semibold px-4 py-2 rounded-full">
                Science Education
              </span>
              <span className="bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] text-xs font-semibold px-4 py-2 rounded-full">
                Visual Science
              </span>
              <span className="bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] text-xs font-semibold px-4 py-2 rounded-full">
                Open Access
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
