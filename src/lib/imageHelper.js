import { useEffect, useRef } from 'react';
import strkImgConfig from '@/strk-img-config.json';

export const ImageHelper = {
  loadImages: (config, container) => {
    if (!container) return () => {};

    const applyImages = () => {
      const imgElements = container.querySelectorAll('[data-strk-img-id]');
      const bgElements = container.querySelectorAll('[data-strk-bg-id]');

      imgElements.forEach((el) => {
        const imgId = el.getAttribute('data-strk-img-id');
        const imgConfig = config[imgId];
        if (imgConfig && imgConfig.picked && !el.src.includes('user-images.strikinglycdn.com')) {
          el.src = imgConfig.url || imgConfig.results?.[0]?.url || el.src;
        }
      });

      bgElements.forEach((el) => {
        const bgId = el.getAttribute('data-strk-bg-id');
        const bgConfig = config[bgId];
        if (bgConfig && bgConfig.picked) {
          el.style.backgroundImage = `url(${bgConfig.url || bgConfig.results?.[0]?.url})`;
          el.style.backgroundSize = 'cover';
          el.style.backgroundPosition = 'center';
        }
      });
    };

    applyImages();

    const observer = new MutationObserver(applyImages);
    observer.observe(container, {
      childList: true,
      subtree: true,
      attributes: true,
      attributeFilter: ['data-strk-img-id', 'data-strk-bg-id'],
    });

    return () => observer.disconnect();
  },
};

export default ImageHelper;
