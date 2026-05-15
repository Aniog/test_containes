import { useState } from 'react';
import { ZoomIn } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=800&q=80&fit=crop',
    title: 'Diatom Colony',
    category: 'Algae',
    span: 'col-span-2 row-span-2',
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80&fit=crop',
    title: 'Neuron Network',
    category: 'Biology',
    span: '',
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1628595351029-c2bf17511435?w=600&q=80&fit=crop',
    title: 'Crystal Formation',
    category: 'Chemistry',
    span: '',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1614935151651-0bea6508db6b?w=600&q=80&fit=crop',
    title: 'Pollen Grain',
    category: 'Botany',
    span: '',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=600&q=80&fit=crop',
    title: 'Cell Division',
    category: 'Biology',
    span: '',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80&fit=crop',
    title: 'Butterfly Wing Scale',
    category: 'Entomology',
    span: 'col-span-2',
  },
];

export default function Gallery() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="gallery" className="py-24 px-6 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-violet-400 text-sm font-medium tracking-[0.3em] uppercase mb-4"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Visual Collection
          </p>
          <h2
            className="text-4xl md:text-5xl font-bold text-white mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Microscopic Gallery
          </h2>
          <p
            className="text-white/60 text-lg max-w-xl mx-auto"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Stunning imagery captured through electron microscopes and advanced imaging techniques.
          </p>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[220px]">
          {galleryImages.map((img) => (
            <div
              key={img.id}
              className={`relative overflow-hidden rounded-2xl cursor-pointer group ${img.span}`}
              onMouseEnter={() => setHovered(img.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover img-zoom"
              />
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-opacity duration-300 ${
                  hovered === img.id ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
                }`}
              />
              {/* Info */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-5 transition-transform duration-300 ${
                  hovered === img.id ? 'translate-y-0' : 'translate-y-4 group-hover:translate-y-0'
                }`}
              >
                <span
                  className="text-xs text-violet-300 font-medium tracking-widest uppercase"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                >
                  {img.category}
                </span>
                <h3
                  className="text-white font-semibold text-lg mt-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {img.title}
                </h3>
              </div>
              {/* Zoom icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <ZoomIn size={16} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
