import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { laureates } from '../../data/laureates';

const featured = laureates.filter(l =>
  ['shing-tung-yau', 'maryam-mirzakhani', 'terence-tao', 'grigori-perelman'].includes(l.id)
);

export default function HomeFeatured() {
  const containerRef = useRef(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, []);

  return (
    <section className="bg-ivory-light py-20 px-4 md:px-8" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-gold text-sm font-medium tracking-[0.2em] uppercase mb-3">Featured Laureates</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy mb-4">
            传奇数学家
          </h2>
          <p className="text-navy/60 max-w-xl mx-auto">
            他们用智慧改变了数学的面貌，留下了永恒的印记
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {featured.map((laureate) => (
            <Link
              key={laureate.id}
              to={`/laureates?highlight=${laureate.id}`}
              className="group bg-white rounded-xl overflow-hidden border border-amber-200/40 shadow-md hover:shadow-xl hover:border-gold/40 transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[3/4]">
                <img
                  alt={laureate.name}
                  data-strk-img-id={laureate.imgId}
                  data-strk-img={`[${laureate.descId}] [${laureate.titleId}] Fields Medal mathematician`}
                  data-strk-img-ratio="3x4"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <span className="inline-block bg-gold text-navy text-xs font-bold px-2 py-1 rounded mb-2">
                    {laureate.year}
                  </span>
                  {laureate.note && (
                    <span className="inline-block ml-2 bg-navy/80 text-gold text-xs px-2 py-1 rounded border border-gold/30">
                      {laureate.note}
                    </span>
                  )}
                  <h3
                    id={laureate.titleId}
                    className="text-ivory font-serif font-bold text-lg leading-tight"
                  >
                    {laureate.name}
                  </h3>
                  <p className="text-ivory/70 text-sm">{laureate.country} · {laureate.field}</p>
                </div>
              </div>
              <div className="p-4">
                <p
                  id={laureate.descId}
                  className="text-navy/70 text-sm leading-relaxed line-clamp-3"
                >
                  {laureate.achievement}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/laureates"
            className="inline-flex items-center gap-2 text-gold font-semibold hover:text-gold-light transition-colors"
          >
            查看全部获奖者
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
