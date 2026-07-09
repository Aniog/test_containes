import strkImgConfig from '@/strk-img-config.json'

const RATIO_TO_FACTOR = {
  '3x2': 1.5,
  '16x9': 16 / 9,
  '4x3': 4 / 3,
  '4x5': 5 / 4,
  '3x4': 4 / 3,
  '9x16': 16 / 9,
  '2x3': 1.5,
  '1x1': 1,
}

export function placeholderSrc(ratio, width) {
  const factor = RATIO_TO_FACTOR[ratio] || 1
  const h = Math.round(width / factor)
  return `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 ${width} ${h}'/%3E`
}

export function imgAttrs(imgId, ratio, width) {
  return {
    'data-strk-img-id': imgId,
    'data-strk-img': imgId,
    'data-strk-img-ratio': ratio,
    'data-strk-img-width': width,
    src: placeholderSrc(ratio, width),
  }
}

export function bgAttrs(imgId, ratio, width) {
  return {
    'data-strk-bg-id': imgId,
    'data-strk-bg': imgId,
    'data-strk-bg-ratio': ratio,
    'data-strk-bg-width': width,
  }
}

export default function ProductImage({ imgId, alt, ratio = '1x1', width = 600, className = 'w-full h-full object-cover' }) {
  return (
    <img
      {...imgAttrs(imgId, ratio, width)}
      alt={alt}
      className={className}
    />
  )
}

export function BgImage({ imgId, ratio = '16x9', width = 1600, className = '' }) {
  return (
    <div
      className={`absolute inset-0 bg-cover bg-center ${className}`}
      {...bgAttrs(imgId, ratio, width)}
      style={{
        backgroundImage: `url(${placeholderSrc(ratio, width)})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    />
  )
}
