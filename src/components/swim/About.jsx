import { useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const stats = [
  { value: '50K+', label: 'Happy Swimmers' },
  { value: '200+', label: 'Products' },
  { value: '15+', label: 'Years Experience' },
  { value: '98%', label: 'Satisfaction Rate' },
];

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section className="bg-sky-50 py-16 md:py-24" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <span className="inline-block bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              Our Story
            </span>
            <h2 id="about-heading" className="text-3xl md:text-4xl font-bold text-sky-900 mb-6">
              Passionate About Swimming Since 2009
            </h2>
            <p id="about-desc" className="text-slate-600 leading-relaxed mb-6">
              SwimGear was founded by competitive swimmers who were frustrated with gear that
              didn't perform at the highest level. We set out to create and curate the best
              swimming equipment available — from beginner essentials to elite racing gear.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              Today, we partner with the world's leading swim brands and our own in-house
              engineers to bring you products that genuinely improve your performance and
              enjoyment in the water.
            </p>
            <a
              href="#products"
              className="inline-flex bg-sky-700 hover:bg-sky-800 text-white rounded-full px-8 py-3 font-semibold transition"
            >
              Shop the Collection
            </a>
          </div>

          {/* Image + Stats */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden h-64 bg-sky-200">
              <img
                alt="Swimmers in pool"
                className="w-full h-full object-cover"
                data-strk-img-id="about-img-7d3f1a"
                data-strk-img="[about-desc] [about-heading]"
                data-strk-img-ratio="16x9"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-white rounded-2xl p-5 border border-sky-100 text-center shadow-sm"
                >
                  <div className="text-3xl font-extrabold text-sky-700 mb-1">{s.value}</div>
                  <div className="text-sm text-slate-500 font-medium">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
