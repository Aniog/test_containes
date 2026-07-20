import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const getResolvedImageUrl = (imageId) => {
  const imageEntry = strkImgConfig?.[imageId]
  const pickedId = imageEntry?.picked
  const pickedImage = imageEntry?.results?.find((result) => result.id === pickedId)
  return pickedImage?.url || imageEntry?.results?.[0]?.url || ''
}

export default function ProductImage({
  id,
  query,
  titleId,
  captionId,
  caption,
  alt,
  ratio = '4x3',
  width = '800',
  className = '',
}) {
  const imageRef = useRef(null)
  const imageUrl = getResolvedImageUrl(id)

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(strkImgConfig, imageRef.current)
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [id, query, titleId, captionId, caption])

  return (
    <span ref={imageRef} className="block h-full w-full">
      {caption ? (
        <span id={captionId} className="sr-only">
          {caption}
        </span>
      ) : null}
      <img
        alt={alt}
        className={`h-full w-full object-cover ${className}`}
        data-strk-img-id={id}
        data-strk-img={query || `[${captionId}] [${titleId}]`}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={imageUrl}
      />
    </span>
  )
}
