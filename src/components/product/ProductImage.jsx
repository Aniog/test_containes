import { getDefaultStrkImageUrl, getStrkImageUrl } from '@/lib/strk-image'

const ProductImage = ({ image, title, description, className = '', overlay = null, fallbackImageId = null }) => {
  const fallbackSrc = getStrkImageUrl(image.id) || (fallbackImageId ? getStrkImageUrl(fallbackImageId) : null) || getDefaultStrkImageUrl()

  return (
    <div className={`relative overflow-hidden rounded-[1.75rem] bg-stone-200 ${className}`}>
      <img
        alt={image.alt}
        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        src={fallbackSrc}
      />
      <h3 id={image.titleId} className="sr-only">
        {title}
      </h3>
      <p id={image.descId} className="sr-only">
        {description}
      </p>
      {overlay}
    </div>
  )
}

export default ProductImage
