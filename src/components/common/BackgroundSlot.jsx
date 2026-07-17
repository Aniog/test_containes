import { imageMap } from '@/data/imageMap.js?probe=velmora17'

function optimizeBackgroundUrl(url, width = 1600) {
  if (!url) return ''
  try {
    const nextUrl = new URL(url)
    nextUrl.searchParams.set('w', String(Math.max(800, Number(width) || 1600)))
    nextUrl.searchParams.set('q', '90')
    nextUrl.searchParams.set('fit', 'max')
    nextUrl.searchParams.set('fm', 'jpg')
    return nextUrl.toString()
  } catch {
    return url
  }
}

export default function BackgroundSlot({ id, width = '1600', className = '', children }) {
  const image = imageMap[id]
  const imageUrl = optimizeBackgroundUrl(image?.url, image?.width || width)

  return (
    <div
      className={className}
      style={imageUrl ? { backgroundImage: `url(${imageUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
    >
      {children}
    </div>
  )
}
