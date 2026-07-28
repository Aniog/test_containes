import { useEffect, useMemo, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const transparentGif =
  'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='

function StockImage({ alt, imgId, query, ratio = '4x3', width = '800', className = '' }) {
  const containerRef = useRef(null)
  const fallbackSrc = useMemo(() => {
    const imageEntry = strkImgConfig[imgId]

    if (!imageEntry) {
      return transparentGif
    }

    const pickedResult = imageEntry.results?.find((result) => result.id === imageEntry.picked)
    return pickedResult?.url || imageEntry.results?.[0]?.url || transparentGif
  }, [imgId])

  useEffect(() => {
    if (!containerRef.current) {
      return undefined
    }

    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [imgId, query, ratio, width])

  return (
    <span className="contents" ref={containerRef}>
      <img
        alt={alt}
        className={className}
        data-strk-img={query}
        data-strk-img-id={imgId}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={fallbackSrc}
      />
    </span>
  )
}

export default StockImage
