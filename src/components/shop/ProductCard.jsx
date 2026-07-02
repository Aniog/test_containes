import { ShoppingBag } from 'lucide-react'
import { Link } from 'react-router-dom'
import { formatPrice } from '@/data/catalog'
import { IMAGE_PLACEHOLDER } from '@/lib/placeholders'
import StarRating from '@/components/ui/StarRating'

const ProductCard = ({ product, sectionId, onAddToCart }) => {
  const nameId = `${sectionId}-${product.id}-name`
  const tagId = `${sectionId}-${product.id}-tag`
  const frontId = `${sectionId}-${product.id}-front`
  const backId = `${sectionId}-${product.id}-back`
  const hoverId = `${sectionId}-${product.id}-hover`
  const frontPromptId = `${sectionId}-${product.id}-front-prompt`
  const hoverPromptId = `${sectionId}-${product.id}-hover-prompt`

  return (
    <article className="group flex h-full flex-col rounded-[28px] border border-stone-200 bg-white p-4 text-stone-900 shadow-[0_18px_40px_rgba(28,25,23,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(28,25,23,0.12)]">
      <Link to={`/product/${product.slug}`} className="relative overflow-hidden rounded-[22px] bg-stone-100">
        <img
          alt={product.name}
          className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.02] group-hover:opacity-0"
          data-strk-img-id={frontId}
          data-strk-img={`[${frontPromptId}] [${tagId}] [${nameId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="800"
          src={IMAGE_PLACEHOLDER}
        />
        <img
          alt={`${product.name} styled on model`}
          className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition duration-500 group-hover:scale-[1.02] group-hover:opacity-100"
          data-strk-img-id={backId}
          data-strk-img={`[${hoverPromptId}] [${nameId}] [${hoverId}]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="800"
          src={IMAGE_PLACEHOLDER}
        />
        <span className="absolute bottom-4 left-4 hidden rounded-full border border-white/50 bg-white/90 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-stone-900 shadow-sm backdrop-blur md:inline-flex md:translate-y-3 md:opacity-0 md:transition md:duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          Quick view
        </span>
        <span id={frontPromptId} className="sr-only">
          Editorial studio product photography of {product.material.toLowerCase()} {product.tagline.toLowerCase()} on a warm ivory background for a premium jewelry storefront.
        </span>
        <span id={hoverPromptId} className="sr-only">
          Warm editorial portrait of a woman wearing {product.material.toLowerCase()} {product.tagline.toLowerCase()} in soft natural light.
        </span>
      </Link>

      <div className="flex flex-1 flex-col px-1 pb-1 pt-5">
        <p id={tagId} className="text-xs uppercase tracking-[0.28em] text-stone-500">
          {product.category}
        </p>
        <Link to={`/product/${product.slug}`} className="mt-3 block">
          <h3 id={nameId} className="font-serif text-2xl uppercase tracking-[0.18em] text-stone-900 transition duration-300 group-hover:text-amber-800">
            {product.name}
          </h3>
        </Link>
        <p className="mt-3 text-sm leading-6 text-stone-600">{product.tagline}</p>
        <div className="mt-4">
          <StarRating rating={product.rating} reviewCount={product.reviewCount} />
        </div>
        <div className="mt-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-lg font-medium text-stone-900">{formatPrice(product.price)}</p>
            <p id={hoverId} className="mt-1 text-xs uppercase tracking-[0.24em] text-stone-500">
              {product.gallery[1]}
            </p>
          </div>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="inline-flex items-center gap-2 rounded-full border border-amber-700 bg-amber-700 px-4 py-3 text-xs font-medium uppercase tracking-[0.24em] text-stone-50 transition duration-300 hover:bg-amber-800"
          >
            <ShoppingBag className="h-4 w-4" />
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}

export default ProductCard
