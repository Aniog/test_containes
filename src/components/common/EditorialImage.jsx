import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { placeholderSrc } from '@/data/products'
import strkImgConfig from '@/strk-img-config.json'

const EditorialImage = ({
  id,
  query,
  ratio = '4x3',
  width = '900',
  alt,
  className = '',
  imgClassName = '',
  asBackground = false,
}) => {
  const imageRef = useRef(null)

  useEffect(() => {
    let cleanup
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, imageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      if (typeof cleanup === 'function') cleanup()
    }
  }, [id, query, ratio, width, asBackground])

  if (asBackground) {
    return (
      <div
        ref={imageRef}
        className={className}
        data-strk-bg-id={id}
        data-strk-bg={query}
        data-strk-bg-ratio={ratio}
        data-strk-bg-width={width}
        role="img"
        aria-label={alt}
      />
    )
  }

  return (
    <div ref={imageRef} className={`overflow-hidden bg-velmora-champagne ${className}`}>
      <img
        className={`h-full w-full object-cover transition duration-700 ${imgClassName}`}
        alt={alt}
        data-strk-img-id={id}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={placeholderSrc}
      />
    </div>
  )
}

export default EditorialImage
