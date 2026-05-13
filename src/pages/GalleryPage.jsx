import { Link } from 'react-router-dom';
import { ArrowRight, Camera } from 'lucide-react';
import GalleryGrid from '../components/gallery/GalleryGrid';

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      {/* Page Hero */}
      <div className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1600&q=80"
            alt="Aurora borealis"
            className="w-full h-full object-cover opacity-25"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0B0F19]/50 to-[#0B0F19]" />
        </div>
        <div className="relative max-w-7xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-amber-400/30 bg-amber-400/5 text-amber-400 text-xs tracking-widest uppercase mb-6">
            <Camera className="w-3 h-3" />
            Gallery & Physical Sky Map
          </div>
          <h1 className="text-4xl md:text-6xl font-light text-gray-50 tracking-tight mb-6 max-w-3xl">
            The Universe
            <br />
            <span className="text-amber-400">Through the Lens</span>
          </h1>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl">
            A curated collection of astronomical phenomena — each image paired with
            the physics that explains it. Click any image to explore the science within.
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          {/* Filter hint */}
          <div className="flex items-center justify-between mb-8">
            <p className="text-gray-500 text-sm">
              6 phenomena — hover to reveal physics, click to expand
            </p>
            <div className="flex items-center gap-2 text-gray-600 text-xs">
              <span className="w-2 h-2 rounded-full bg-amber-400/60" />
              <span>Click for full explanation</span>
            </div>
          </div>

          <GalleryGrid />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 border-t border-gray-800/60">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-2xl font-light text-gray-50 mb-2">
              Have questions about what you've seen?
            </h3>
            <p className="text-gray-500">
              Send your questions and feedback directly to your physics teacher.
            </p>
          </div>
          <Link
            to="/contact"
            className="group flex items-center gap-3 px-8 py-3.5 bg-amber-400 text-[#0B0F19] rounded-full font-medium text-sm tracking-wide hover:bg-amber-300 transition-all duration-200 flex-shrink-0"
          >
            Send Feedback
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}
