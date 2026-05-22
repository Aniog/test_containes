import GalleryGrid from '@/components/gallery/GalleryGrid';

const Gallery = () => (
  <main className="bg-black min-h-screen">
    {/* Page header */}
    <div className="pt-32 pb-16 lg:pt-40 lg:pb-20 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <p className="text-xs tracking-widest uppercase text-neutral-500 mb-4">Full Collection</p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h1 className="font-thin tracking-widest uppercase text-white text-5xl md:text-6xl lg:text-7xl leading-none">
            Gallery
          </h1>
          <p className="font-light text-neutral-500 text-sm max-w-sm leading-relaxed">
            A curated archive of microscopic and macro photography — exploring the hidden architecture of the natural world.
          </p>
        </div>
      </div>
    </div>

    {/* Gallery grid */}
    <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
      <GalleryGrid />
    </div>
  </main>
);

export default Gallery;
