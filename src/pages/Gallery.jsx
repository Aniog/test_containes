import GalleryGrid from '@/components/gallery/GalleryGrid';

const Gallery = () => {
  return (
    <div className="min-h-screen bg-[#F5FAF8] pt-16">
      {/* Page Header */}
      <div className="bg-white border-b border-[#D9EDE8] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3DBFA8] mb-3 block">
            Microscopy Photography
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-[#2C3E50] mb-3">
            The Microbial Gallery
          </h1>
          <p className="text-[#7F8C8D] max-w-xl mx-auto">
            Stunning images from electron microscopes, fluorescence cameras, and confocal systems — revealing the hidden beauty of the microscopic world.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 pb-24">
        <GalleryGrid />
      </div>
    </div>
  );
};

export default Gallery;

