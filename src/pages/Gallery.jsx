import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = ['All', 'Landscape', 'Portrait', 'Street', 'Macro', 'Night'];

const photos = [
  { imgId: 'gal-img-001a', labelId: 'gal-lbl-1',  label: 'Mountain Landscape at Sunrise',    category: 'Landscape', ratio: '3x2',  width: 900,  span: 'col-span-2' },
  { imgId: 'gal-img-002b', labelId: 'gal-lbl-2',  label: 'Street Portrait Urban',             category: 'Portrait',  ratio: '3x4',  width: 600,  span: '' },
  { imgId: 'gal-img-003c', labelId: 'gal-lbl-3',  label: 'Macro Flower Petal Detail',         category: 'Macro',     ratio: '1x1',  width: 600,  span: '' },
  { imgId: 'gal-img-004d', labelId: 'gal-lbl-4',  label: 'City Street Night Lights',          category: 'Night',     ratio: '16x9', width: 1200, span: 'col-span-2' },
  { imgId: 'gal-img-005e', labelId: 'gal-lbl-5',  label: 'Forest Path Misty Morning',         category: 'Landscape', ratio: '3x2',  width: 800,  span: '' },
  { imgId: 'gal-img-006f', labelId: 'gal-lbl-6',  label: 'Ocean Waves Sunset',                category: 'Landscape', ratio: '3x2',  width: 800,  span: '' },
  { imgId: 'gal-img-007g', labelId: 'gal-lbl-7',  label: 'Busy Street Market Crowd',          category: 'Street',    ratio: '3x2',  width: 800,  span: '' },
  { imgId: 'gal-img-008h', labelId: 'gal-lbl-8',  label: 'Close-up Insect Macro',             category: 'Macro',     ratio: '1x1',  width: 600,  span: '' },
  { imgId: 'gal-img-009i', labelId: 'gal-lbl-9',  label: 'Milky Way Night Sky Stars',         category: 'Night',     ratio: '3x2',  width: 900,  span: '' },
  { imgId: 'gal-img-010j', labelId: 'gal-lbl-10', label: 'Fashion Portrait Studio',           category: 'Portrait',  ratio: '3x4',  width: 600,  span: '' },
  { imgId: 'gal-img-011k', labelId: 'gal-lbl-11', label: 'Desert Dunes Aerial Landscape',     category: 'Landscape', ratio: '16x9', width: 1200, span: 'col-span-2' },
  { imgId: 'gal-img-012l', labelId: 'gal-lbl-12', label: 'Rain Reflections Street Photography', category: 'Street', ratio: '3x2',  width: 800,  span: '' },
];

const tips = [
  { title: 'Golden Hour', body: 'Shoot in the hour after sunrise or before sunset for warm, directional light that flatters any subject.' },
  { title: 'Rule of Thirds', body: 'Place your subject off-center using the grid overlay to create more dynamic, balanced compositions.' },
  { title: 'Expose for Shadows', body: "With the X1's wide dynamic range, expose for the shadows and recover highlights in post for best results." },
];

export default function Gallery() {
  const containerRef = useRef(null);
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? photos : photos.filter((p) => p.category === active);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, [active]);

  return (
    <div ref={containerRef}>
      {/* ── Page Hero ── */}
      <section className="bg-zinc-950 pt-16 pb-20 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">Shot on Lumora</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">The Gallery</h1>
        <p className="text-zinc-400 max-w-xl mx-auto">
          A curated collection of images captured by Lumora photographers around the world. Every photo is straight from the camera — no heavy editing.
        </p>
      </section>

      {/* ── Category Filter ── */}
      <section className="bg-zinc-950 pb-4 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors border ${
                  active === cat
                    ? 'bg-amber-400 text-zinc-950 border-amber-400'
                    : 'bg-transparent text-zinc-400 border-zinc-700 hover:border-zinc-500 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hidden labels ── */}
      <div className="hidden">
        {photos.map((p) => (
          <span key={p.imgId} id={p.labelId}>{p.label}</span>
        ))}
      </div>

      {/* ── Photo Grid ── */}
      <section className="bg-zinc-950 py-10 px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          {filtered.length === 0 ? (
            <p className="text-center text-zinc-500 py-20">No photos in this category yet.</p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {filtered.map((p) => (
                <div key={p.imgId} className={`overflow-hidden rounded-xl bg-zinc-800 group relative ${p.span || ''}`}>
                  <img
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.label}
                    className="w-full h-52 md:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[${p.labelId}]`}
                    data-strk-img-ratio={p.ratio}
                    data-strk-img-width={p.width}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <div>
                      <p className="text-white text-sm font-medium">{p.label}</p>
                      <p className="text-amber-400 text-xs mt-0.5">{p.category}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Photography Tips ── */}
      <section className="bg-zinc-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs uppercase tracking-widest text-amber-400 mb-3">From the Field</p>
            <h2 className="text-3xl font-bold text-white tracking-tight">Photography Tips</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tips.map(({ title, body }) => (
              <div key={title} className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6">
                <h3 className="text-white font-semibold text-lg mb-3">{title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Submit CTA ── */}
      <section className="bg-zinc-950 py-20 px-6 text-center">
        <p className="text-xs uppercase tracking-widest text-amber-400 mb-4">Community</p>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Share Your Shot</h2>
        <p className="text-zinc-400 mb-8 max-w-md mx-auto">
          Tag your photos with <span className="text-amber-400 font-medium">#ShotOnLumora</span> on social media to be featured in our community gallery.
        </p>
        <a
          href="#"
          className="inline-block bg-amber-400 text-zinc-950 font-semibold rounded-full px-8 py-3 hover:bg-amber-300 transition-colors"
        >
          Submit Your Photo
        </a>
      </section>
    </div>
  );
}
