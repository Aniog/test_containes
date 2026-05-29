import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const spotlightItems = [
  {
    id: 'spot-1',
    imgId: 'spot-img-mc040',
    titleId: 'spot-title-1',
    descId: 'spot-desc-1',
    title: 'Bioluminescent Bacteria',
    desc: 'Colonies of Vibrio fischeri glow blue-green in the dark ocean, communicating through chemical signals in a process called quorum sensing.',
    accent: 'from-cyan-500 to-blue-600',
    tag: 'Bacteria',
  },
  {
    id: 'spot-2',
    imgId: 'spot-img-mc041',
    titleId: 'spot-title-2',
    descId: 'spot-desc-2',
    title: 'Mitosis in Action',
    desc: 'A single cell divides into two identical daughters — chromosomes align, separate, and the dance of life repeats billions of times in your body every day.',
    accent: 'from-violet-500 to-purple-600',
    tag: 'Cell Biology',
  },
  {
    id: 'spot-3',
    imgId: 'spot-img-mc042',
    titleId: 'spot-title-3',
    descId: 'spot-desc-3',
    title: 'Fungal Mycelium',
    desc: 'The underground network of fungal threads connects trees across entire forests, transferring nutrients and chemical signals in what scientists call the "Wood Wide Web".',
    accent: 'from-emerald-500 to-teal-600',
    tag: 'Fungi',
  },
];

const SpotlightSection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-24 px-4 md:px-8 bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-sm text-cyan-400 uppercase tracking-widest font-medium mb-3">Featured Stories</p>
          <h2 id="spot-section-title" className="text-3xl md:text-5xl font-bold text-white mb-4">
            Microscopic Wonders
          </h2>
          <p id="spot-section-desc" className="text-gray-400 text-lg max-w-xl mx-auto">
            Extraordinary phenomena from the microscopic world that challenge everything we thought we knew about life.
          </p>
        </div>

        <div className="flex flex-col gap-12">
          {spotlightItems.map((item, i) => (
            <div
              key={item.id}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              <div className={`relative rounded-2xl overflow-hidden aspect-[16/9] ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={item.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [spot-section-desc] [spot-section-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width={900}
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${item.accent} opacity-20`} />
              </div>

              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <span className="text-xs font-semibold text-gray-400 uppercase tracking-widest border border-gray-700 px-3 py-1 rounded-full">
                  {item.tag}
                </span>
                <h3 id={item.titleId} className="text-white font-bold text-2xl md:text-3xl mt-4 mb-4">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-gray-400 text-lg leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpotlightSection;
