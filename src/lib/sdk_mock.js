export const ImageHelper = {
  loadImages: (config, container) => {
    if (!container) return () => {};
    
    const elements = container.querySelectorAll('[data-strk-img], [data-strk-bg]');
    
    elements.forEach(el => {
      const imgId = el.getAttribute('data-strk-img-id') || el.getAttribute('data-strk-bg-id');
      if (!imgId || !config[imgId]) return;
      
      const item = config[imgId];
      const url = item.picked ? item.results.find(r => r.id === item.picked)?.url : item.results[0]?.url;
      
      if (url) {
        if (el.hasAttribute('data-strk-img')) {
          el.src = url;
        } else if (el.hasAttribute('data-strk-bg')) {
          el.style.backgroundImage = `url(${url})`;
        }
      }
    });

    return () => {};
  }
};
export const createClient = () => ({});
