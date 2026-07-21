import strkImgConfig from '@/strk-img-config.json'

const fallbackImageUrl =
  'https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/f_auto,q_auto,w_4096/unsplashcom/photo-1677578329676-7296dd3d1083'

const getConfiguredImageUrl = (imageId) =>
  strkImgConfig?.[imageId]?.results?.[0]?.url || fallbackImageUrl

export default function CartThumbnail({ product }) {
  return (
    <img
      alt={product.name}
      className="h-28 w-full object-cover"
      src={getConfiguredImageUrl(product.imageId)}
    />
  )
}
