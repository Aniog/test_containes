const IMG_ATTRS = [
  'data-strk-img',
  'data-strk-img-id',
  'data-strk-img-ratio',
  'data-strk-img-width',
];
const BG_ATTRS = [
  'data-strk-bg',
  'data-strk-bg-id',
  'data-strk-bg-ratio',
  'data-strk-bg-width',
];

function resolveQuery(query, root) {
  if (typeof query !== 'string') return query;
  return query.replace(/\[([^\]]+)]/g, (_, id) => {
    const el = root.querySelector(`#${CSS.escape(id)}`);
    if (!el) return '';
    const text = (el.textContent || '').trim();
    return text;
  });
}

function buildImageSrc(attrs) {
  const ratio = attrs['data-strk-img-ratio'] || '4x3';
  const width = attrs['data-strk-img-width'] || '800';
  const seed = encodeURIComponent(attrs['data-strk-img'] || 'jewelry');
  return `https://images.unsplash.com/photo-${width}x${ratio.replace('x', '-')}?w=${width}&q=80&fit=crop&auto=format`;
}

function buildBackgroundStyle(attrs) {
  const ratio = attrs['data-strk-bg-ratio'] || '16x9';
  const width = attrs['data-strk-bg-width'] || '1600';
  const query = encodeURIComponent(attrs['data-strk-bg'] || 'jewelry');
  return `url('https://images.unsplash.com/photo-${width}x${ratio.replace('x', '-')}?w=${width}&q=80&fit=crop&auto=format')`;
}

function applyImageElement(img, root) {
  const attrs = {};
  IMG_ATTRS.forEach((name) => {
    const value = img.getAttribute(name);
    if (value !== null) attrs[name] = value;
  });

  if (!attrs['data-strk-img-id']) return;

  const resolvedQuery = resolveQuery(attrs['data-strk-img'], root);
  attrs['data-strk-img'] = resolvedQuery;

  const src = buildImageSrc(attrs);
  if (!img.hasAttribute('src') || img.getAttribute('src').startsWith('data:')) {
    img.setAttribute('src', src);
  }
  img.setAttribute('alt', img.getAttribute('alt') || resolvedQuery || 'Product image');
}

function applyBackgroundElement(el, root) {
  const attrs = {};
  BG_ATTRS.forEach((name) => {
    const value = el.getAttribute(name);
    if (value !== null) attrs[name] = value;
  });

  if (!attrs['data-strk-bg-id']) return;

  const resolvedQuery = resolveQuery(attrs['data-strk-bg'], root);
  attrs['data-strk-bg'] = resolvedQuery;

  const style = buildBackgroundStyle(attrs);
  el.setAttribute('style', `${el.getAttribute('style') || ''} background-image: ${style}; background-size: cover; background-position: center;`.trim());
}

export const ImageHelper = {
  loadImages(config, container) {
    if (!container || typeof container.querySelector !== 'function') return () => {};

    const imgs = Array.from(container.querySelectorAll('img[data-strk-img-id]'));
    imgs.forEach((img) => applyImageElement(img, container));

    const bgs = Array.from(container.querySelectorAll('[data-strk-bg-id]'));
    bgs.forEach((el) => applyBackgroundElement(el, container));

    return () => {};
  },
};

export default ImageHelper;
