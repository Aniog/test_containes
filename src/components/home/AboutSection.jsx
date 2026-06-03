import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { Eye, Atom, FlaskConical } from 'lucide-react';

const stats = [
  { value: '10,000×', label: 'Magnification Power' },
  { value: '500+', label: 'Specimen Types' },
  { value: '50nm', label: 'Smallest Detail' },
  { value: '200+', label: 'Scientists Worldwide' },
];

const features = [
  {
    icon: Eye,
    title: 'Electron Microscopy',
    desc: 'Ultra-high resolution imaging that reveals atomic-level structures invisible to conventional light microscopes.',
  },
  {
    icon: Atom,
    title: 'Nano-scale Discovery',
    desc: 'Explore structures measured in nanometers — viruses, DNA strands, and molecular machines of life.',
  },
  {
    icon: FlaskConical,
    title: 'Living Specimens',
    desc: 'Real-time imaging of living cells, bacteria, and microorganisms in their natural biological state.',
  },
];

export default function AboutSection() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="about" ref={containerRef} className="bg-[#050a14] py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <p className="text-[#00d4c8] text-xs font-bold tracking-[0.3em] uppercase mb-4">
              What is MicroCosmos
            </p>
            <h2 id="about-title" className="text-4xl md:text-5xl font-black text-[#f0f4ff] leading-tight mb-6">
              A Universe Hidden in Plain Sight
            </h2>
            <p id="about-desc" className="text-[#8ba3c7] text-lg leading-relaxed mb-6">
              MicroCosmos is a visual journey into the microscopic world — the teeming, intricate, and often breathtaking realm that exists just beyond the threshold of human vision. From the crystalline geometry of snowflakes to the alien landscapes of pollen grains, every specimen tells a story.
            </p>
            <p className="text-[#8ba3c7] text-lg leading-relaxed mb-8">
              Using cutting-edge electron microscopy, fluorescence imaging, and scanning tunneling microscopes, we capture the invisible and make it visible — in stunning, high-resolution detail.
            </p>
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="border border-[#1e3050] rounded-xl p-4 bg-[#0d1526]">
                  <div className="text-2xl font-black text-[#00d4c8] mb-1">{stat.value}</div>
                  <div className="text-sm text-[#8ba3c7]">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl overflow-hidden aspect-[3/4] col-span-1">
              <img
                alt="Microscopic cell structure"
                data-strk-img-id="about-img1-7b3c9d"
                data-strk-img="[about-desc] [about-title] microscopic cell biology"
                data-strk-img-ratio="3x4"
                data-strk-img-width="400"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-4">
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img
                  alt="Bacteria under microscope"
                  data-strk-img-id="about-img2-4e8f1a"
                  data-strk-img="[about-title] bacteria microscope magnification"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-square">
                <img
                  alt="Crystal structure microscopy"
                  data-strk-img-id="about-img3-2d5c7e"
                  data-strk-img="[about-title] crystal structure electron microscopy"
                  data-strk-img-ratio="1x1"
                  data-strk-img-width="300"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-[#0d1526] border border-[#1e3050] rounded-2xl p-6 hover:border-[#00d4c8]/40 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-[#00d4c8]/10 flex items-center justify-center mb-4 group-hover:bg-[#00d4c8]/20 transition-colors">
                <f.icon className="w-6 h-6 text-[#00d4c8]" />
              </div>
              <h3 className="text-[#f0f4ff] font-bold text-lg mb-2">{f.title}</h3>
              <p className="text-[#8ba3c7] text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
