import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { useCart } from '@/context/CartContext.jsx'
import { StockImage } from '@/components/store/ImageSlot.jsx'
import { formatCategory, formatPrice } from '@/lib/format.js'

const ProductCard = ({ product, idPrefix, showQuickAdd = true }) => {
  const { addItem } = useCart()
  const titleId = `${idPrefix}-${product.id}-title`
  const descId = `${idPrefix}-${product.id}-desc`

  const handleQuickAdd = (event) => {
    event.preventDefault()
    addItem(product, 'Gold Tone', 1)
  }

  return (
    <Link
      to={`/product/${product.id}`}
      className="group flex h-full flex-col rounded-soft border border-velmora-mist/25 bg-velmora-ivory text-velmora-noir shadow-soft transition-all duration-300 ease-luxe hover:-translate-y-1 hover:shadow-velvet"
    >
      <div className="relative overflow-hidden rounded-t-soft bg-velmora-porcelain">
        <StockImage
          alt={product.name}
          className="aspect-[4/5] w-full object-cover transition-opacity duration-500 ease-luxe group-hover:opacity-0"
          descId={descId}
          imageId={product.images[0].id}
          titleId={titleId}
          width="700"
        />
        <StockImage
          alt={`${product.name} alternate view`}
          className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition-opacity duration-500 ease-luxe group-hover:opacity-100"
          descId={descId}
          imageId={product.images[1]?.id || product.images[0].id}
          titleId={titleId}
          width="700"
        />
        <div className="pointer-events-none absolute inset-x-4 top-4 flex items-center justify-between gap-4">
          <span className="rounded-full border border-velmora-ivory/20 bg-velmora-noir/55 px-3 py-1 text-[10px] font-semibold uppercase tracking-brand text-velmora-ivory backdrop-blur-sm">
            {product.badge}
          </span>
          <span className="rounded-full bg-velmora-ivory/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-brand text-velmora-noir">
            {formatCategory(product.category)}
          </span>
        </div>
        {showQuickAdd ? (
          <div className="absolute inset-x-4 bottom-4 translate-y-4 opacity-0 transition-all duration-300 ease-luxe group-hover:translate-y-0 group-hover:opacity-100">
            <button
              type="button"
              className="w-full rounded-full border border-velmora-champagne bg-velmora-noir/88 px-4 py-3 text-xs font-semibold uppercase tracking-brand text-velmora-ivory backdrop-blur-sm transition-colors duration-300 hover:bg-velmora-noir"
              onClick={handleQuickAdd}
            >
              Quick add to cart
            </button>
          </div>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-5">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-brand text-velmora-rosewood">
            {product.material}
          </p>
          <h3 id={titleId} className="product-title leading-6">
            {product.name}
          </h3>
          <p id={descId} className="text-sm leading-6 text-velmora-noir/72">
            {product.shortDescription}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between gap-4 pt-3">
          <span className="text-lg font-medium text-velmora-noir">
            {formatPrice(product.price)}
          </span>
          <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-brand text-velmora-noir/70 transition-colors duration-300 group-hover:text-velmora-noir">
            Discover <ArrowRight className="h-4 w-4" />
          </span>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard
