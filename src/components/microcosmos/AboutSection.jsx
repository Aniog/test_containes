import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '10³⁰', label: 'Microbes on Earth', desc: 'More than all stars in the observable universe' },
  { value: '99%', label: 'Unknown Species', desc: 'Of microbial life has never been studied' },
  { value: '3.8B', label: 'Years of Evolution', desc: 'Microbial life has existed on Earth' },
  { value: '0.001mm', label: 'Average Bacterium', desc: 'Typical size of a bacterial cell' },
];

const spotlightItems = [
  {
    id: 'spot-radiolaria',
    imgId: 'about-img-radiolaria-f4g5h6',
    titleId: 'about-title-radiolaria',
    descId: 'about-desc-radiolaria',
    title: 'Radiolaria',
    desc: 'Ancient single-celled organisms with intricate silica skeletons, radiolaria have existed for over 500 million years and their fossilized shells form deep-sea sediments.',
  },
  {
    id: 'spot-vorticella',
    imgId: 'about-img-vorticella-i7j8k9',
    titleId: 'about-title-vorticella',
    descId: 'about-desc-vorticella',
    title: 'Vorticella',
    desc: 'Bell-shaped ciliate protozoa that attach to surfaces via a contractile stalk, creating a mesmerizing spinning motion to draw food particles into their oral groove.',
  },
  {
    id: 'spot-nematode',
    imgId: 'about-img-nematode-l1m2n3',
    titleId: 'about-title-nematode',
    descId: 'about-desc-nematode',
    title: 'C. elegans Nematode',
    desc: 'A transparent roundworm just 1mm long, C. elegans was the first multicellular organism to have its entire genome sequenced and nervous system mapped.',
  },
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="py-20 md:py-28 bg-[#fdf2f8]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-[#fff0f7] border border-[#f9a8d4] p-6 text-center hover:border-[#f9a8d4] transition-colors"
            >
              <div className="text-3xl md:text-4xl font-bold text-[#be185d] mb-2">{s.value}</div>
              <div className="text-[#1e1b2e] font-semibold text-sm mb-1">{s.label}</div>
              <div className="text-[#b07a9a] text-xs">{s.desc}</div>
            </div>
          ))}
        </div>

        {/* About text + image */}
        <div className="flex flex-col md:flex-row gap-12 items-center mb-24">
          <div className="w-full md:w-1/2">
            <span className="text-[#be185d] text-sm font-semibold tracking-widest uppercase">Our Mission</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1e1b2e] mb-6">
              Making the Invisible Visible
            </h2>
            <p className="text-[#7c4d6a] leading-relaxed mb-4 text-base md:text-lg">
              MicroCosmos is dedicated to bringing the breathtaking beauty of the microscopic world to everyone. Through stunning imagery, accessible science, and immersive storytelling, we reveal the hidden universe that surrounds and inhabits us.
            </p>
            <p className="text-[#7c4d6a] leading-relaxed text-base md:text-lg">
              Our team of scientists, photographers, and educators collaborate to capture and explain the most extraordinary microscopic phenomena — from the dance of bacteria to the geometric perfection of mineral crystals.
            </p>
          </div>
          <div className="w-full md:w-1/2 rounded-2xl overflow-hidden border border-[#f9a8d4] shadow-[0_0_50px_rgba(219,39,119,0.1)] aspect-video">
            <img
              alt="Microscopy laboratory"
              data-strk-img-id="about-lab-img-o4p5q6"
              data-strk-img="[about-lab-desc] [about-lab-title]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="800"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="w-full h-full object-cover"
            />
            <span id="about-lab-title" className="sr-only">Microscopy laboratory scientist</span>
            <span id="about-lab-desc" className="sr-only">Scientist working with advanced electron microscope in a research laboratory</span>
          </div>
        </div>

        {/* Spotlight organisms */}
        <div className="text-center mb-12">
          <span className="text-[#be185d] text-sm font-semibold tracking-widest uppercase">Organism Spotlight</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-[#1e1b2e]">Featured Microorganisms</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {spotlightItems.map((item) => (
            <div
              key={item.id}
              className="group rounded-2xl overflow-hidden bg-[#fff0f7] border border-[#f9a8d4] hover:border-[#f472b6] transition-all duration-300 hover:shadow-[0_0_40px_rgba(219,39,119,0.12)]"
            >
              <div className="h-52 overflow-hidden">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="500"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 id={item.titleId} className="text-lg font-bold text-[#1e1b2e] mb-2">{item.title}</h3>
                <p id={item.descId} className="text-[#7c4d6a] text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
