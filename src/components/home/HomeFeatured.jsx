import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

const categories = [
  {
    id: 'bacteria',
    title: 'Bacteria',
    desc: 'Single-celled prokaryotes found in every habitat on Earth, from deep ocean vents to the human gut.',
    color: '#3DBFA8',
    bg: '#E8F7F4',
    titleId: 'feat-bacteria-title',
    descId: 'feat-bacteria-desc',
    imgId: 'feat-bacteria-img-d4e5f6',
  },
  {
    id: 'viruses',
    title: 'Viruses',
    desc: 'Nanoscale entities that blur the line between living and non-living, reshaping ecosystems and evolution.',
    color: '#5BA4CF',
    bg: '#EAF4FB',
    titleId: 'feat-viruses-title',
    descId: 'feat-viruses-desc',
    imgId: 'feat-viruses-img-g7h8i9',
  },
  {
    id: 'fungi',
    title: 'Fungi',
    desc: 'The great decomposers and connectors — fungi form vast underground networks that link entire forests.',
    color: '#FF8B64',
    bg: '#FFF0EB',
    titleId: 'feat-fungi-title',
    descId: 'feat-fungi-desc',
    imgId: 'feat-fungi-img-j1k2l3',
  },
];

const HomeFeatured = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#3DBFA8] mb-2 block">
              Featured Kingdoms
            </span>
            <h2 id="featured-section-title" className="text-3xl md:text-4xl font-bold text-[#2C3E50]">
              Meet the Microbes
            </h2>
          </div>
          <Link
            to="/explore"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3DBFA8] hover:text-[#2CA898] transition-colors"
          >
            View all organisms <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to="/explore"
              className="group bg-white border border-[#D9EDE8] rounded-xl overflow-hidden hover:border-[#3DBFA8] transition-colors"
            >
              <div className="relative overflow-hidden">
                <img
                  alt={cat.title}
                  data-strk-img-id={cat.imgId}
                  data-strk-img={`[${cat.descId}] [${cat.titleId}] [featured-section-title]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-44 object-cover"
                />
                <span
                  className="absolute top-3 left-3 text-xs font-bold uppercase tracking-widest px-2.5 py-1 rounded-md"
                  style={{ background: cat.bg, color: cat.color }}
                >
                  {cat.title}
                </span>
              </div>
              <div className="p-5">
                <h3 id={cat.titleId} className="text-base font-bold text-[#2C3E50] mb-2">
                  {cat.title}
                </h3>
                <p id={cat.descId} className="text-sm text-[#7F8C8D] leading-relaxed">
                  {cat.desc}
                </p>
                <div
                  className="mt-4 inline-flex items-center gap-1 text-xs font-semibold"
                  style={{ color: cat.color }}
                >
                  Explore <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFeatured;

