import GalleryGrid from '../components/gallery/GalleryGrid';

export default function Gallery() {
  return (
    <main className="pt-16">
      {/* Page header */}
      <div className="bg-hero-gradient py-20 md:py-28 border-b border-stardust/30">
        <div className="max-w-6xl mx-auto px-6 md:px-12 space-y-4">
          <p className="font-inter text-xs uppercase tracking-widest text-aurora">Sky Map & Gallery</p>
          <h1 className="font-cormorant text-4xl md:text-6xl font-light text-moonlight">
            Astronomical Phenomena
          </h1>
          <p className="font-inter text-base text-comet max-w-xl leading-relaxed">
            A curated collection of the universe's most spectacular events and structures —
            each one a window into the fundamental laws of physics.
          </p>
        </div>
      </div>

      <GalleryGrid />
    </main>
  );
}
