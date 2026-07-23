import { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const photos = [
  {
    id: 'gallery-dam-aerial',
    titleId: 'gallery-title-aerial',
    descId: 'gallery-desc-aerial',
    imgId: 'gallery-img-aerial-hd010',
    title: '大坝鸟瞰',
    desc: '从空中俯瞰胡佛大坝与米德湖的壮观全景',
  },
  {
    id: 'gallery-dam-face',
    titleId: 'gallery-title-face',
    descId: 'gallery-desc-face',
    imgId: 'gallery-img-face-hd011',
    title: '坝面近景',
    desc: '胡佛大坝混凝土坝面的宏伟细节',
  },
  {
    id: 'gallery-turbine',
    titleId: 'gallery-title-turbine',
    descId: 'gallery-desc-turbine',
    imgId: 'gallery-img-turbine-hd012',
    title: '发电机房',
    desc: '大坝内部巨型水力发电涡轮机组',
  },
  {
    id: 'gallery-lake-mead',
    titleId: 'gallery-title-lake',
    descId: 'gallery-desc-lake',
    imgId: 'gallery-img-lake-hd013',
    title: '米德湖',
    desc: '胡佛大坝蓄水形成的米德湖，是美国最大的人工水库',
  },
  {
    id: 'gallery-artdeco',
    titleId: 'gallery-title-artdeco',
    descId: 'gallery-desc-artdeco',
    imgId: 'gallery-img-artdeco-hd014',
    title: 'Art Deco 装饰',
    desc: '大坝顶部精美的Art Deco风格建筑装饰细节',
  },
  {
    id: 'gallery-construction',
    titleId: 'gallery-title-construction',
    descId: 'gallery-desc-construction',
    imgId: 'gallery-img-construction-hd015',
    title: '历史施工照片',
    desc: '1930年代大坝建设期间的历史影像记录',
  },
];

export default function Gallery() {
  const containerRef = useRef(null);
  const [lightbox, setLightbox] = useState(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [lightbox]);

  const openLightbox = (index) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);
  const prev = () => setLightbox((i) => (i - 1 + photos.length) % photos.length);
  const next = () => setLightbox((i) => (i + 1) % photos.length);

  return (
    <section id="gallery" ref={containerRef} className="bg-navyBlack py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="text-center mb-14">
          <p className="text-accentGold text-sm uppercase tracking-[0.3em] mb-3 font-sans">影像画廊</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-warmWhite mb-4">
            镜头下的胡佛大坝
          </h2>
          <p className="text-mutedBlue max-w-xl mx-auto">
            从历史档案到现代航拍，记录这座伟大工程的每一个角度
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              onClick={() => openLightbox(index)}
              className="relative aspect-[4/3] overflow-hidden rounded-xl group cursor-pointer"
            >
              <img
                alt={photo.title}
                data-strk-img-id={photo.imgId}
                data-strk-img={`[${photo.descId}] [${photo.titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="500"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-navyBlack/0 group-hover:bg-navyBlack/50 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p id={photo.titleId} className="text-warmWhite font-semibold text-sm">{photo.title}</p>
                <p id={photo.descId} className="text-mutedBlue text-xs mt-1 line-clamp-2">{photo.desc}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-navyBlack/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-mutedBlue hover:text-warmWhite transition-colors"
            onClick={closeLightbox}
          >
            <X size={28} />
          </button>
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 text-mutedBlue hover:text-accentGold transition-colors"
            onClick={(e) => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={36} />
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-mutedBlue hover:text-accentGold transition-colors"
            onClick={(e) => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={36} />
          </button>

          <div
            className="max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="rounded-xl overflow-hidden aspect-[4/3]">
              <img
                alt={photos[lightbox].title}
                data-strk-img-id={`lightbox-${photos[lightbox].imgId}`}
                data-strk-img={`[${photos[lightbox].descId}] [${photos[lightbox].titleId}]`}
                data-strk-img-ratio="4x3"
                data-strk-img-width="1000"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <p id={photos[lightbox].titleId} className="text-warmWhite font-serif text-xl font-semibold">
                {photos[lightbox].title}
              </p>
              <p id={photos[lightbox].descId} className="text-mutedBlue text-sm mt-2">
                {photos[lightbox].desc}
              </p>
              <p className="text-dimGrey text-xs mt-3">{lightbox + 1} / {photos.length}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
