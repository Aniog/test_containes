import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { formatPrice } from '../../data/products'
import RatingStars from './RatingStars'
import { placeholderImage } from '../../data/storefrontContent'

function ProductCard({ product }) {
  const { addItem } = useCart()
  const titleId = `product-${product.slug}-title`
  const descId = `product-${product.slug}-desc`
  const badgeId = `product-${product.slug}-badge`
  const primaryImgId = `product-${product.slug}-primary-vm6k2`
  const secondaryImgId = `product-${product.slug}-secondary-r8p4m`

  return (
    <article className="group rounded-[2rem] border border-hairline bg-pearl p-4 shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-luxe">
      <div className="relative overflow-hidden rounded-[1.6rem] bg-champagne">
        <Link to={`/product/${product.slug}`} className="block">
          <div className="relative aspect-[4/5]">
            <img
              alt={product.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03] group-hover:opacity-0"
              data-strk-img-id={primaryImgId}
              data-strk-img={`[${descId}] [${titleId}] [${badgeId}]`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src={placeholderImage}
            />
            <img
              alt={`${product.name} alternate view`}
              className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-500 group-hover:scale-[1.03] group-hover:opacity-100"
              data-strk-img-id={secondaryImgId}
              data-strk-img={`[${titleId}] [${descId}] editorial alternate jewelry product view`}
              data-strk-img-ratio="4x3"
              data-strk-img-width="900"
              src={placeholderImage}
            />
          </div>
        </Link>
        <button
          type="button"
          onClick={() => addItem(product, { tone: product.tones[0], quantity: 1 })}
          className="absolute bottom-4 left-4 right-4 rounded-full bg-espresso px-4 py-3 text-xs font-medium uppercase tracking-[0.24em] text-pearl transition duration-300 hover:bg-walnut md:translate-y-4 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
        >
          Add to Cart
        </button>
      </div>

      <div className="px-1 pb-1 pt-5">
        <p id={badgeId} className="text-xs uppercase tracking-[0.24em] text-gold">
          {product.badge}
        </p>
        <Link to={`/product/${product.slug}`}>
          <h3 id={titleId} className="mt-3 font-serif text-2xl uppercase tracking-[0.2em] text-umber transition group-hover:text-gold-deep">
            {product.name}
          </h3>
        </Link>
        <p id={descId} className="mt-3 text-sm leading-7 text-taupe">
          {product.shortDescription}
        </p>
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm uppercase tracking-[0.24em] text-umber">
            {formatPrice(product.price)}
          </p>
          <RatingStars rating={product.rating} reviews={product.reviews} />
        </div>
      </div>
    </article>
  )
}

export default ProductCard
