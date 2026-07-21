import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const fallbackImageUrl =
  'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1677578329676-7296dd3d1083'

const getInitialImageUrl = (imageId) =>
  strkImgConfig?.[imageId]?.results?.[0]?.url || fallbackImageUrl

export default function ImageSlot({
  alt,
  className = '',
  imgId,
  query,
  ratio = '4x3',
  width = '800',
}) {
  const imageRef = useRef(null)

  useEffect(() => {
    let cleanup = () => {}
    const frameId = window.requestAnimationFrame(() => {
      cleanup = ImageHelper.loadImages(
        strkImgConfig,
        imageRef.current?.parentElement ?? imageRef.current,
      ) ?? (() => {})
    })

    return () => {
      window.cancelAnimationFrame(frameId)
      cleanup()
    }
  }, [imgId, query, ratio, width])

  return (
    <img
      ref={imageRef}
      alt={alt}
      className={className}
      data-strk-img-id={imgId}
      data-strk-img={query}
      data-strk-img-ratio={ratio}
      data-strk-img-width={width}
      src={getInitialImageUrl(imgId)}
    />
  )
}
