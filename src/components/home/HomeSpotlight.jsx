import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const spotlightItems = [
  {
    id: 'pollen',
    titleId: 'home-spot-pollen-title',
    descId: 'home-spot-pollen-desc',
    imgId: 'home-spot-pollen-img-m4n5o6',
    title: 'Pollen Grains',
    desc: 'Under the electron microscope, pollen grains reveal extraordinary geometric patterns — spiky spheres, ribbed capsules, and sculptured surfaces that are unique to each plant species.',
    badge: 'Botany',
  },
  {
    id: 'neuron',
    titleId: 'home-spot-neuron-title',
    descId: 'home-spot-neuron-desc',
    imgId: 'home-spot-neuron-img-p7q8r9',
    title: 'Neurons',
    desc: 'The branching dendrites of a single neuron form a tree-like network that transmits electrical signals at lightning speed, forming the basis of thought and consciousness.',
    badge: 'Neuroscience',
  },
];

export default function HomeSpotlight() {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-gray-900/50 border-y border-gray-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <span className="text-violet-400 text-sm font-medium uppercase tracking-widest">Spotlight</span>
          <h2 id="home-spotlight-title" className="text-4xl md:text-5xl font-bold text-white mt-2">
            Close-Up Wonders
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Magnified thousands of times, ordinary things become extraordinary.
          </p>
        </div>

        <div className="space-y-16">
          {spotlightItems.map((item, idx) => (
            <div
              key={item.id}
              className={`flex flex-col ${idx % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-center`}
            >
              <div className="w-full md:w-1/2 rounded-2xl overflow-hidden aspect-[16/9]">
                <img
                  alt={item.title}
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.descId}] [${item.titleId}] [home-spotlight-title]`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-full md:w-1/2">
                <span className="inline-block text-xs font-medium px-3 py-1 rounded-full border text-violet-400 bg-violet-500/10 border-violet-500/20 mb-4">
                  {item.badge}
                </span>
                <h3 id={item.titleId} className="text-3xl font-bold text-white mb-4">
                  {item.title}
                </h3>
                <p id={item.descId} className="text-gray-400 leading-relaxed text-lg">
                  {item.desc}
                </p>
                <Link
                  to="/gallery"
                  className="inline-flex items-center gap-2 mt-6 text-teal-400 hover:text-teal-300 font-medium transition-colors"
                >
                  See more images <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
