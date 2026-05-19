import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { TreePine, Waves, Mountain } from 'lucide-react';

const features = [
  {
    icon: TreePine,
    id: 'feat-title-1',
    title: 'Ancient Forests',
    id_desc: 'feat-desc-1',
    description: 'Walk beneath towering canopies that have stood for centuries, home to countless species of flora and fauna.',
    imgId: 'feat-img-d4e5f6',
    ratio: '4x3',
  },
  {
    icon: Waves,
    id: 'feat-title-2',
    title: 'Ocean Shores',
    id_desc: 'feat-desc-2',
    description: 'Feel the rhythm of the tides and witness the endless dance between land and sea at the world\'s most stunning coastlines.',
    imgId: 'feat-img-g7h8i9',
    ratio: '4x3',
  },
  {
    icon: Mountain,
    id: 'feat-title-3',
    title: 'Mountain Peaks',
    id_desc: 'feat-desc-3',
    description: 'Ascend to heights where the air is crisp and the views stretch beyond the horizon, touching the sky itself.',
    imgId: 'feat-img-j1k2l3',
    ratio: '4x3',
  },
];

const Features = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="explore" ref={containerRef} className="bg-cream py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-green-forest font-sans font-semibold tracking-widest uppercase text-sm mb-3">
            What awaits you
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nature's Greatest Wonders
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            From dense rainforests to soaring peaks, our planet holds an extraordinary
            tapestry of natural environments waiting to be explored.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, id, title, id_desc, description, imgId, ratio }) => (
            <div key={id} className="bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative overflow-hidden h-52">
                <img
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  data-strk-img-id={imgId}
                  data-strk-img={`[${id_desc}] [${id}]`}
                  data-strk-img-ratio={ratio}
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-green-forest/10 p-2 rounded-lg">
                    <Icon className="w-5 h-5 text-green-forest" />
                  </div>
                  <h3 id={id} className="font-serif text-xl font-semibold text-gray-900">{title}</h3>
                </div>
                <p id={id_desc} className="text-gray-600 leading-relaxed text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
