import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const getConfiguredImageUrl = (imgId) => {
  const entry = strkImgConfig[imgId]
  const selected = entry?.results?.find((result) => result.id === entry.picked) || entry?.results?.[0]
  return selected?.url || ''
}

const StockImage = ({ imgId, query, ratio = '4x3', width = '800', alt, className = '' }) => {
  const imageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, imageRef.current?.parentElement || imageRef.current)
  }, [imgId])

  return (
    <img
      ref={imageRef}
      alt={alt}
      className={className}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={getConfiguredImageUrl(imgId)}
    />
  )
}

export default StockImage
