import GalleryGrid from '@/components/gallery/GalleryGrid';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-gray-950 pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-teal-400 text-sm font-medium uppercase tracking-widest">
            Visual Collection
          </span>
          <h1 className="text-5xl font-bold text-white mt-2 mb-4">
            Microscopy Gallery
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto">
            A curated collection of stunning microscopic imagery — from bacteria to extremophiles,
            each image reveals a hidden universe.
          </p>
        </div>
        <GalleryGrid />
      </div>
    </div>
  );
};

export default Gallery;
