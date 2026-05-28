import { Activity } from 'lucide-react';
import GalleryGrid from '../components/gallery/GalleryGrid';

export default function Gallery() {
  return (
    <div className="bg-[#050505] pt-24 md:pt-32">
      {/* Page header */}
      <div className="border-b border-[#262626] px-6 md:px-12 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="font-mono text-[10px] text-[#555555] tracking-widest uppercase mb-4">
            — Telemetry & Industrial Gallery
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-white leading-none">
                DIAGNOSTIC<br />ARCHIVE
              </h1>
            </div>
            <div className="max-w-md">
              <p className="text-[#555555] text-sm leading-relaxed">
                High-resolution diagnostic assets from active fusion experiments. Each slide represents a classified engineering capture from the Daedalus and Helios programs. Hover to inspect telemetry. Click to expand.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Status strip */}
      <div className="border-b border-[#262626] px-6 md:px-12 py-3 flex items-center gap-6">
        <div className="flex items-center gap-2">
          <Activity className="w-3 h-3 text-[#555555]" />
          <span className="font-mono text-[9px] text-[#555555] tracking-widest uppercase">Archive Status: Active</span>
        </div>
        <span className="text-[#262626]">|</span>
        <span className="font-mono text-[9px] text-[#555555] tracking-widest uppercase">Classification: RESTRICTED — ITER PARTNERS</span>
        <span className="text-[#262626]">|</span>
        <span className="font-mono text-[9px] text-[#555555] tracking-widest uppercase">4 Assets Loaded</span>
      </div>

      {/* Gallery */}
      <div className="max-w-7xl mx-auto">
        <GalleryGrid />
      </div>
    </div>
  );
}
