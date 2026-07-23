// Mock @strikingly/sdk for development
// In production, this would be replaced by the actual SDK

export const ImageHelper = {
  loadImages: (config, container) => {
    if (!container) return () => {};
    
    // Find all elements with data-strk-img or data-strk-bg
    const imgElements = container.querySelectorAll('[data-strk-img]');
    const bgElements = container.querySelectorAll('[data-strk-bg]');
    
    // Process content images
    imgElements.forEach((img) => {
      const query = img.getAttribute('data-strk-img');
      const ratio = img.getAttribute('data-strk-img-ratio') || '4x3';
      const width = img.getAttribute('data-strk-img-width') || '600';
      
      // Parse ratio to get dimensions
      const [rw, rh] = ratio.split('x').map(Number);
      const imgWidth = parseInt(width);
      const imgHeight = Math.round((imgWidth * rh) / rw);
      
      // Generate a placeholder with the query text
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${imgWidth}" height="${imgHeight}" viewBox="0 0 ${imgWidth} ${imgHeight}">
        <rect width="100%" height="100%" fill="#2d2824"/>
        <text x="50%" y="45%" text-anchor="middle" fill="#b8860b" font-family="serif" font-size="16" font-style="italic">
          ${query.replace(/[\[\]]/g, '').substring(0, 30)}
        </text>
        <text x="50%" y="55%" text-anchor="middle" fill="#9a9490" font-family="sans-serif" font-size="12">
          ${imgWidth}x${imgHeight}
        </text>
      </svg>`;
      
      img.src = `data:image/svg+xml,${encodeURIComponent(svg)}`;
    });
    
    // Process background images
    bgElements.forEach((el) => {
      const query = el.getAttribute('data-strk-bg');
      const ratio = el.getAttribute('data-strk-bg-ratio') || '16x9';
      const width = el.getAttribute('data-strk-bg-width') || '1200';
      
      const [rw, rh] = ratio.split('x').map(Number);
      const bgWidth = parseInt(width);
      const bgHeight = Math.round((bgWidth * rh) / rw);
      
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${bgWidth}" height="${bgHeight}" viewBox="0 0 ${bgWidth} ${bgHeight}">
        <rect width="100%" height="100%" fill="#1a1714"/>
        <text x="50%" y="45%" text-anchor="middle" fill="#b8860b" font-family="serif" font-size="20" font-style="italic">
          ${query.replace(/[\[\]]/g, '').substring(0, 40)}
        </text>
        <text x="50%" y="55%" text-anchor="middle" fill="#9a9490" font-family="sans-serif" font-size="14">
          ${bgWidth}x${bgHeight}
        </text>
      </svg>`;
      
      el.style.backgroundImage = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
      el.style.backgroundSize = 'cover';
      el.style.backgroundPosition = 'center';
    });
    
    // Return cleanup function
    return () => {};
  }
};

export default { ImageHelper };
