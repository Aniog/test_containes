import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const CATEGORIES = ['All', 'Minerals', 'Biology', 'Insects', 'Plants', 'Water', 'Materials'];

const galleryItems = [
  { id: 'g-01', imgId: 'gal-img-aa1bb2', cat: 'Minerals', title: 'Amethyst Cluster', query: 'amethyst crystal cluster macro photography colorful purple' },
  { id: 'g-02', imgId: 'gal-img-cc3dd4', cat: 'Biology', title: 'Neuron Network', query: 'neuron network fluorescent microscopy colorful' },
  { id: 'g-03', imgId: 'gal-img-ee5ff6', cat: 'Insects', title: 'Compound Eye', query: 'insect compound eye macro photography colorful iridescent' },
  { id: 'g-04', imgId: 'gal-img-gg7hh8', cat: 'Plants', title: 'Pollen Sphere', query: 'pollen grain sphere macro photography colorful' },
  { id: 'g-05', imgId: 'gal-img-ii9jj0', cat: 'Water', title: 'Snowflake Crystal', query: 'snowflake ice crystal macro photography colorful' },
  { id: 'g-06', imgId: 'gal-img-kk1ll2', cat: 'Materials', title: 'Carbon Fiber', query: 'carbon fiber material electron microscopy colorful' },
  { id: 'g-07', imgId: 'gal-img-mm3nn4', cat: 'Minerals', title: 'Pyrite Cubes', query: 'pyrite fool gold crystal cube macro photography' },
  { id: 'g-08', imgId: 'gal-img-oo5pp6', cat: 'Biology', title: 'Red Blood Cells', query: 'red blood cells electron microscopy colorful' },
  { id: 'g-09', imgId: 'gal-img-qq7rr8', cat: 'Insects', title: 'Moth Wing Pattern', query: 'moth butterfly wing scale pattern macro photography colorful' },
  { id: 'g-10', imgId: 'gal-img-ss9tt0', cat: 'Plants', title: 'Leaf Venation', query: 'leaf vein structure macro photography colorful' },
  { id: 'g-11', imgId: 'gal-img-uu1vv2', cat: 'Water', title: 'Water Droplet', query: 'water droplet macro photography colorful refraction' },
  { id: 'g-12', imgId: 'gal-img-ww3xx4', cat: 'Materials', title: 'Silicon Wafer', query: 'silicon wafer semiconductor electron microscopy colorful' },
  { id: 'g-13', imgId: 'gal-img-yy5zz6', cat: 'Minerals', title: 'Quartz Formation', query: 'quartz crystal formation macro photography colorful' },
  { id: 'g-14', imgId: 'gal-img-ab1cd2', cat: 'Biology', title: 'Diatom Shells', query: 'diatom algae shell microscopy colorful symmetry' },
  { id: 'g-15', imgId: 'gal-img-ef3gh4', cat: 'Insects', title: 'Bee Stinger', query: 'bee stinger macro photography close-up colorful' },
  { id: 'g-16', imgId: 'gal-img-ij5kl6', cat: 'Plants', title: 'Spore Capsule', query: 'moss spore capsule macro photography colorful' },
  { id: 'g-17', imgId: 'gal-img-mn7op8', cat: 'Water', title: 'Ice Dendrites', query: 'ice dendrite crystal macro photography colorful' },
  { id: 'g-18', imgId: 'gal-img-qr9st0', cat: 'Materials', title: 'Rust Texture', query: 'rust oxidation metal texture macro photography colorful' },
  { id: 'g-19', imgId: 'gal-img-uv1wx2', cat: 'Minerals', title: 'Malachite Swirls', query: 'malachite mineral swirl pattern macro photography green' },
  { id: 'g-20', imgId: 'gal-img-yz3ab4', cat: 'Biology', title: 'Mitosis Stage', query: 'cell mitosis division fluorescent microscopy colorful' },
  { id: 'g-21', imgId: 'gal-img-cd5ef6', cat: 'Insects', title: 'Dragonfly Wing', query: 'dragonfly wing macro photography colorful iridescent' },
  { id: 'g-22', imgId: 'gal-img-gh7ij8', cat: 'Plants', title: 'Seed Surface', query: 'seed surface texture macro photography colorful' },
  { id: 'g-23', imgId: 'gal-img-kl9mn0', cat: 'Water', title: 'Bubble Lattice', query: 'soap bubble lattice macro photography colorful iridescent' },
  { id: 'g-24', imgId: 'gal-img-op1qr2', cat: 'Materials', title: 'Graphene Layer', query: 'graphene material surface electron microscopy colorful' },
];

const GalleryGrid = ({ items }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ImageHelper.loadImages(strkImgConfig, ref.current);
    }
  }, [items]);

  return (
    <div ref={ref} className="columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4 space-y-3 md:space-y-4">
      {items.map((item) => (
        <div key={item.id} className="group break-inside-avoid cursor-pointer">
          <div className="overflow-hidden relative">
            <img
              id={item.id}
              alt={item.title}
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
              data-strk-img-id={item.imgId}
              data-strk-img={`[${item.id}] ${item.query}`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="500"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end">
              <div className="p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-xs tracking-widest uppercase text-neutral-400 mb-1">{item.cat}</p>
                <h3 className="text-sm font-bold text-white">{item.title}</h3>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.cat === activeCategory);

  return (
    <div className="bg-black min-h-screen">
      {/* Page header */}
      <div className="pt-32 pb-12 md:pt-40 md:pb-16 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <p className="text-xs tracking-widest uppercase text-neutral-500 mb-4">Visual Archive</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">
              Gallery
            </h1>
            <p className="text-neutral-400 text-sm max-w-sm leading-relaxed">
              {filtered.length} photographs across {CATEGORIES.length - 1} categories — each one a window into an invisible world.
            </p>
          </div>
        </div>
      </div>

      {/* Category filter */}
      <div className="border-b border-neutral-800 sticky top-16 md:top-20 z-40 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex gap-0 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-5 py-4 text-xs tracking-widest uppercase border-0 border-b-2 transition-colors ${
                  activeCategory === cat
                    ? 'text-white border-white bg-transparent'
                    : 'text-neutral-500 border-transparent hover:text-neutral-300 bg-transparent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Gallery grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-16">
        <GalleryGrid items={filtered} />
      </div>

      {/* Bottom CTA */}
      <div className="border-t border-neutral-800 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs tracking-widest uppercase text-neutral-500 mb-4">The Collection Grows</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-white mb-4">
            New Images Added Weekly
          </h2>
          <p className="text-neutral-400 text-sm max-w-md mx-auto">
            Our team of scientists and photographers continuously expands the archive with new discoveries from the microscopic world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
