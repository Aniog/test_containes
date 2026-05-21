import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const galleryItems = [
  {
    id: 'gal-title-01',
    imgId: 'gallery-img-aa1bb2',
    title: 'Radiolarian Skeleton',
    desc: 'Intricate silica lattice of a radiolarian protozoan',
    category: 'Protozoa',
    ratio: '1x1',
    width: 600,
    size: 'large',
  },
  {
    id: 'gal-title-02',
    imgId: 'gallery-img-cc3dd4',
    title: 'Pollen Grain Surface',
    desc: 'Scanning electron microscope view of pollen grain',
    category: 'Botany',
    ratio: '1x1',
    width: 400,
    size: 'small',
  },
  {
    id: 'gal-title-03',
    imgId: 'gallery-img-ee5ff6',
    title: 'Neuron Network',
    desc: 'Fluorescent imaging of neural connections in the brain',
    category: 'Neuroscience',
    ratio: '1x1',
    width: 400,
    size: 'small',
  },
  {
    id: 'gal-title-04',
    imgId: 'gallery-img-gg7hh8',
    title: 'Butterfly Wing Scale',
    desc: 'Nanostructures on butterfly wing creating iridescent color',
    category: 'Entomology',
    ratio: '3x2',
    width: 700,
    size: 'wide',
  },
  {
    id: 'gal-title-05',
    imgId: 'gallery-img-ii9jj0',
    title: 'Snowflake Crystal',
    desc: 'Perfect hexagonal symmetry of a snowflake under microscope',
    category: 'Crystallography',
    ratio: '1x1',
    width: 400,
    size: 'small',
  },
  {
    id: 'gal-title-06',
    imgId: 'gallery-img-kk1ll2',
    title: 'Red Blood Cells',
    desc: 'Biconcave disc-shaped erythrocytes in the bloodstream',
    category: 'Hematology',
    ratio: '1x1',
    width: 400,
    size: 'small',
  },
  {
    id: 'gal-title-07',
    imgId: 'gallery-img-mm3nn4',
    title: 'Diatom Colony',
    desc: 'Geometric glass-like shells of diatom algae colony',
    category: 'Algae',
    ratio: '1x1',
    width: 600,
    size: 'large',
  },
  {
    id: 'gal-title-08',
    imgId: 'gallery-img-oo5pp6',
    title: 'Virus Particle',
    desc: 'Transmission electron microscopy of viral capsid structure',
    category: 'Virology',
    ratio: '1x1',
    width: 400,
    size: 'small',
  },
  {
    id: 'gal-title-09',
    imgId: 'gallery-img-qq7rr8',
    title: 'Moss Spores',
    desc: 'Spherical spores of moss plant ready for dispersal',
    category: 'Botany',
    ratio: '1x1',
    width: 400,
    size: 'small',
  },
];

const GallerySection = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-28 bg-cosmos-bg">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-cosmos-accent text-xs uppercase tracking-widest font-semibold mb-3 font-grotesk">
            Visual Collection
          </p>
          <h2
            id="gallery-title"
            className="font-grotesk font-bold text-3xl md:text-4xl text-cosmos-text mb-4"
          >
            Gallery of the Invisible
          </h2>
          <p id="gallery-subtitle" className="text-cosmos-muted max-w-xl mx-auto leading-relaxed">
            Each image is a window into a world that exists all around us, captured through the lens of powerful microscopes.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`group relative rounded-2xl overflow-hidden border border-cosmos-border bg-cosmos-card cursor-pointer
                ${item.size === 'large' ? 'row-span-2 col-span-1' : ''}
                ${item.size === 'wide' ? 'col-span-2' : ''}
              `}
            >
              <div className={`w-full overflow-hidden ${item.size === 'large' ? 'aspect-[3/4]' : item.size === 'wide' ? 'aspect-[3x2]' : 'aspect-square'}`}>
                <img
                  id={item.id}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  data-strk-img-id={item.imgId}
                  data-strk-img={`[${item.id}] [gallery-subtitle] [gallery-title]`}
                  data-strk-img-ratio={item.ratio}
                  data-strk-img-width={item.width}
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-cosmos-bg/90 via-cosmos-bg/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-cosmos-accent text-xs uppercase tracking-widest font-grotesk font-semibold mb-1">
                  {item.category}
                </span>
                <h3 className="text-cosmos-text font-grotesk font-semibold text-sm md:text-base leading-tight">
                  {item.title}
                </h3>
                <p className="text-cosmos-muted text-xs mt-1 leading-snug hidden md:block">
                  {item.desc}
                </p>
              </div>
              {/* Category badge (always visible) */}
              <div className="absolute top-3 left-3">
                <span className="bg-cosmos-bg/70 backdrop-blur-sm text-cosmos-accent text-xs px-2 py-1 rounded-full font-grotesk font-medium border border-cosmos-border">
                  {item.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
