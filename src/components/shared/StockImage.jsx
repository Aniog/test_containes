import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { cn } from '@/lib/cn'

const RATIO_CLASS = {
  '16x9': 'aspect-[16/9]',
  '4x3': 'aspect-[4/3]',
  '3x2': 'aspect-[3/2]',
  '1x1': 'aspect-square',
  '3x4': 'aspect-[3/4]',
  '9x16': 'aspect-[9/16]',
  '2x3': 'aspect-[2/3]',
}

export default function StockImage({
  imgId,
  query,
  ratio = '4x3',
  width = 800,
  alt = '',
  className = '',
  rounded = 'rounded-xl',
}) {
  const ref = useRef(null)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, ref.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [query, imgId])

  return (
    <div
      ref={ref}
      className={cn(
        'relative overflow-hidden bg-brand-mist',
        RATIO_CLASS[ratio] || RATIO_CLASS['4x3'],
        rounded,
        className,
      )}
    >
      <img
        alt={alt}
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
        className="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  )
}