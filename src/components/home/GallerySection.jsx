import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  {
    id: 'gallery-bedroom',
    title: '温馨卧室',
    desc: '柔软床品，夜夜好眠',
    span: 'md:col-span-2 md:row-span-2',
    ratio: '1x1',
    width: 800,
  },
  {
    id: 'gallery-kitchen',
    title: '精致厨房',
    desc: '烹饪每一份爱',
    span: '',
    ratio: '4x3',
    width: 500,
  },
  {
    id: 'gallery-living',
    title: '温暖客厅',
    desc: '家人相聚的地方',
    span: '',
    ratio: '4x3',
    width: 500,
  },
  {
    id: 'gallery-bathroom',
    title: '舒适浴室',
    desc: '放松身心的私享空间',
    span: '',
    ratio: '4x3',
    width: 500,
  },
  {
    id: 'gallery-storage',
    title: '整洁收纳',
    desc: '井然有序，清爽生活',
    span: '',
    ratio: '4x3',
    width: 500,
  },
  {
    id: 'gallery-outdoor',
    title: '阳台花园',
    desc: '绿意盎然，诗意栖居',
    span: '',
    ratio: '4x3',
    width: 500,
  },
];

const GallerySection = () => {
  const containerRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox((i) => (i - 1 + galleryItems.length) % galleryItems.length);
  const nextImage = () => setLightbox((i) => (i + 1) % galleryItems.length);

  useEffect(() => {
    const handleKey = (e) => {
      if (lightbox === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox]);

  return (
    <section id="gallery" ref={containerRef} className="py-20 md:py-28 bg-[#FDF8F3]">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-amber-700 text-sm font-semibold tracking-widest uppercase">生活图集</span>
          <h2
            id="gallery-title"
            className="text-3xl md:text-4xl font-bold text-stone-800 mt-3 mb-4"
            style={{ fontFamily: "'Noto Serif SC', serif" }}
          >
            每一帧，都是家的模样
          </h2>
          <p id="gallery-subtitle" className="text-stone-500 max-w-xl mx-auto leading-relaxed">
            用镜头记录生活之美，每一个角落都值得被温柔以待。
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[200px]">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative group overflow-hidden rounded-2xl cursor-pointer ${item.span}`}
              onClick={() => openLightbox(index)}
            >
              <img
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                data-strk-img-id={`${item.id}-img-x9y8z7`}
                data-strk-img={`[${item.id}-desc] [${item.id}-title] [gallery-subtitle] [gallery-title]`}
                data-strk-img-ratio={item.ratio}
                data-strk-img-width={item.width}
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                <h3
                  id={`${item.id}-title`}
                  className="text-white font-bold text-sm md:text-base"
                  style={{ fontFamily: "'Noto Serif SC', serif" }}
                >
                  {item.title}
                </h3>
                <p id={`${item.id}-desc`} className="text-white/80 text-xs mt-0.5">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={closeLightbox}
            aria-label="关闭"
          >
            <X className="w-7 h-7" />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            aria-label="上一张"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            aria-label="下一张"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div
            className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center gap-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={containerRef.current?.querySelector(`[data-strk-img-id="${galleryItems[lightbox].id}-img-x9y8z7"]`)?.src || ''}
              alt={galleryItems[lightbox].title}
              className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl"
            />
            <div className="text-center">
              <h3 className="text-white font-bold text-lg" style={{ fontFamily: "'Noto Serif SC', serif" }}>
                {galleryItems[lightbox].title}
              </h3>
              <p className="text-white/60 text-sm mt-1">{galleryItems[lightbox].desc}</p>
              <p className="text-white/40 text-xs mt-2">{lightbox + 1} / {galleryItems.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
