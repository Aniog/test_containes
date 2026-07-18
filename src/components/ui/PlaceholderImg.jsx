import { useId, useRef, useEffect } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';

export default function PlaceholderImg({ query, ratio = '4x3', width = 600, className = '', alt = '' }) {
  const id = useId().replace(/:/g, '');
  const imgId = `img-${id}`;
  const textId = `txt-${id}`;
  const containerRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const ratioMap = {
    '3x2': 'aspect-[3/2]',
    '16x9': 'aspect-video',
    '4x3': 'aspect-[4/3]',
    '1x1': 'aspect-square',
    '3x4': 'aspect-[3/4]',
    '9x16': 'aspect-[9/16]',
    '2x3': 'aspect-[2/3]',
  };

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${ratioMap[ratio] || 'aspect-[4/3]'} ${className}`}>
      <img
        data-strk-img-id={imgId}
        data-strk-img={`[${textId}]`}
        data-strk-img-ratio={ratio}
        data-strk-img-width={String(width)}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        alt={alt}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <span id={textId} className="sr-only">{query}</span>
    </div>
  );
}
