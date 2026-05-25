import GalleryGrid from '../components/gallery/GalleryGrid';

export default function Gallery() {
  return (
    <>
      {/* Page header */}
      <div className="bg-[#050505] border-b border-[#262626]">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-12 py-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] tracking-[0.4em] text-neutral-600 uppercase mb-4">
                Telemetry & Industrial Gallery
              </p>
              <h1 className="font-mono text-4xl md:text-5xl text-white uppercase font-light tracking-tight">
                High-Resolution<br />Asset Archive
              </h1>
            </div>
            <div className="max-w-sm">
              <p className="text-neutral-500 text-sm leading-relaxed">
                Diagnostic captures, computational simulations, and real-time sensor data from active fusion systems. Each asset is tagged with full engineering telemetry.
              </p>
            </div>
          </div>
        </div>
      </div>

      <GalleryGrid />
    </>
  );
}
