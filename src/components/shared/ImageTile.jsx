import { IMAGE_PLACEHOLDER } from '../../lib/utils'

export default function ImageTile({
  alt,
  imgId,
  query,
  ratio = '4x3',
  width = '800',
  className = '',
  overlay = null,
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-700 ease-velvet group-hover:scale-[1.03]"
        data-strk-img-id={imgId}
        data-strk-img={query}
        data-strk-img-ratio={ratio}
        data-strk-img-width={width}
        src={IMAGE_PLACEHOLDER}
      />
      {overlay}
    </div>
  )
}
