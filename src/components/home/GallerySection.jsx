import { useEffect, useRef, useState } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { X, ZoomIn } from 'lucide-react';

const photos = [
  {
    id: 'photo-1',
    titleId: 'gallery-title-1',
    imgId: 'gallery-img-1-5c3a8f',
    previewImgId: 'gallery-preview-1-5c3a8f',
    title: '竞速时刻',
    desc: '帆船在海面上飞驰，溅起洁白的浪花',
    ratio: '3x2',
    span: 'md:col-span-2',
  },
  {
    id: 'photo-2',
    titleId: 'gallery-title-2',
    imgId: 'gallery-img-2-9e1b4d',
    previewImgId: 'gallery-preview-2-9e1b4d',
    title: '日落航行',
    desc: '夕阳下的帆船剪影，美不胜收',
    ratio: '3x4',
    span: '',
  },
  {
    id: 'photo-3',
    titleId: 'gallery-title-3',
    imgId: 'gallery-img-3-2f7c5a',
    previewImgId: 'gallery-preview-3-2f7c5a',
    title: '团队协作',
    desc: '水手们默契配合，共同驾驭风帆',
    ratio: '3x2',
    span: '',
  },
  {
    id: 'photo-4',
    titleId: 'gallery-title-4',
    imgId: 'gallery-img-4-8a4e1c',
    previewImgId: 'gallery-preview-4-8a4e1c',
    title: '赛事起航',
    desc: '数十艘帆船同时起航的壮观场面',
    ratio: '3x2',
    span: '',
  },
  {
    id: 'photo-5',
    titleId: 'gallery-title-5',
    imgId: 'gallery-img-5-3d9b6e',
    previewImgId: 'gallery-preview-5-3d9b6e',
    title: '海湾风光',
    desc: '碧蓝海湾中停泊的帆船群',
    ratio: '3x4',
    span: '',
  },
  {
    id: 'photo-6',
    titleId: 'gallery-title-6',
    imgId: 'gallery-img-6-7f2a4c',
    previewImgId: 'gallery-preview-6-7f2a4c',
    title: '乘风破浪',
    desc: '大风浪中勇敢前行的帆船',
    ratio: '3x2',
    span: 'md:col-span-2',
  },
];

const GallerySection = () => {
  const containerRef = useRef(null);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current);
    });
    return () => window.cancelAnimationFrame(frameId);
  }, [selected]);

  return (
    <section id="gallery" ref={containerRef} className="bg-gray-50 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-seafoam font-medium tracking-widest text-sm uppercase mb-3">
            精彩图集
          </p>
          <h2
            id="gallery-section-title"
            className="font-serif font-bold text-navy text-3xl md:text-4xl mb-4"
          >
            帆船运动的精彩瞬间
          </h2>
          <p
            id="gallery-section-subtitle"
            className="text-gray-500 text-base max-w-xl mx-auto"
          >
            记录每一个乘风破浪的精彩时刻，感受帆船运动的无限魅力
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className={`relative overflow-hidden rounded-xl cursor-pointer group ${photo.span}`}
              onClick={() => setSelected(photo)}
            >
              <img
                alt={photo.title}
                data-strk-img-id={photo.imgId}
                data-strk-img={`[${photo.titleId}] [gallery-section-subtitle] [gallery-section-title]`}
                data-strk-img-ratio={photo.ratio}
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full h-full object-cover aspect-[3/2] group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-navy/0 group-hover:bg-navy/50 transition-colors duration-300 flex items-center justify-center">
                <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* Title */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-navy/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p
                  id={photo.titleId}
                  className="text-white font-semibold text-sm"
                >
                  {photo.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selected && (
          <div
            className="fixed inset-0 z-50 bg-navy/95 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelected(null)}
          >
            <button
              className="absolute top-4 right-4 text-white/70 hover:text-white p-2"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              <X className="w-8 h-8" />
            </button>
            <div
              className="max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                alt={selected.title}
                data-strk-img-id={selected.previewImgId}
                data-strk-img={`[gallery-preview-title-${selected.id}] [gallery-section-title]`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="1200"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="w-full rounded-2xl object-cover"
              />
              <div className="mt-4 text-center">
                <h3
                  id={`gallery-preview-title-${selected.id}`}
                  className="font-serif font-bold text-white text-xl mb-1"
                >
                  {selected.title}
                </h3>
                <p className="text-white/60 text-sm">{selected.desc}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GallerySection;
