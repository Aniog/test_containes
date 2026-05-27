import GalleryGrid from '@/components/gallery/GalleryGrid';

const Gallery = () => {
  return (
    <div className="pt-24 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="mb-12 text-center">
          <p className="text-microteal text-sm font-semibold uppercase tracking-widest mb-3">
            Visual collection
          </p>
          <h1 className="font-display font-bold text-4xl md:text-6xl text-microtext mb-4">
            The Image Gallery
          </h1>
          <p className="text-micromuted text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            A curated showcase of the most stunning microscopic imagery from our collection.
            Click any image to view it in full detail.
          </p>
        </div>
        <GalleryGrid />
      </div>
    </div>
  );
};

export default Gallery;
