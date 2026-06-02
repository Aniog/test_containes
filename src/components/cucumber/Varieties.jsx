import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const varieties = [
  {
    id: 'english',
    titleId: 'var-english-title',
    descId: 'var-english-desc',
    imgId: 'var-img-english-4a1c9e',
    title: 'English Cucumber',
    desc: 'Long, thin-skinned, and nearly seedless. Mild flavour, perfect for salads and snacking.',
    tag: 'Most Popular',
  },
  {
    id: 'persian',
    titleId: 'var-persian-title',
    descId: 'var-persian-desc',
    imgId: 'var-img-persian-7b2d0f',
    title: 'Persian Cucumber',
    desc: 'Small, crunchy, and sweet. Thin skin with minimal seeds — great for dipping.',
    tag: 'Snack Favourite',
  },
  {
    id: 'kirby',
    titleId: 'var-kirby-title',
    descId: 'var-kirby-desc',
    imgId: 'var-img-kirby-3c5e8a',
    title: 'Kirby Cucumber',
    desc: 'Bumpy skin, firm flesh, and excellent crunch. The go-to choice for pickling.',
    tag: 'Best for Pickling',
  },
  {
    id: 'lemon',
    titleId: 'var-lemon-title',
    descId: 'var-lemon-desc',
    imgId: 'var-img-lemon-6d4f2b',
    title: 'Lemon Cucumber',
    desc: 'Round, yellow, and mild. Looks like a lemon but tastes like a sweet cucumber.',
    tag: 'Unique & Rare',
  },
];

const Varieties = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="varieties" className="py-20 md:py-28 bg-cucumber-pale" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block bg-white text-cucumber font-semibold text-sm px-4 py-1.5 rounded-full mb-4">
            Types & Varieties
          </span>
          <h2 className="font-black text-3xl md:text-5xl text-cucumber-dark mb-4">
            Meet the Family
          </h2>
          <p className="text-cucumber-muted text-lg max-w-xl mx-auto">
            From slicing to pickling, there's a cucumber for every occasion.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {varieties.map((v) => (
            <div
              key={v.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  alt={v.title}
                  data-strk-img-id={v.imgId}
                  data-strk-img={`[${v.descId}] [${v.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-cucumber text-white text-xs font-bold px-3 py-1 rounded-full">
                  {v.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 id={v.titleId} className="font-bold text-lg text-cucumber-dark mb-2">
                  {v.title}
                </h3>
                <p id={v.descId} className="text-cucumber-muted text-sm leading-relaxed">
                  {v.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Varieties;
