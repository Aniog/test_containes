import { ShoppingBag } from 'lucide-react'
import ProductImage from '@/components/product/ProductImage'
import { imageFor } from '@/data/imageRegistry'
import { formatPrice } from '@/data/products'

export default function ProductCard({ product, onAdd, onOpenProduct }) {
  const query = `[${product.descId}] [${product.titleId}]`

  return (
    <article className="group product-card overflow-hidden border border-obsidian/10 bg-mist text-obsidian shadow-soft transition duration-500 hover:-translate-y-1 hover:shadow-editorial">
      <button
        type="button"
        onClick={() => onOpenProduct(product.id)}
        className="relative block aspect-[4/5] w-full overflow-hidden bg-sand text-left"
        aria-label={`View ${product.name}`}
      >
        <ProductImage
          imgId={product.imgId}
          query={query}
          ratio="4x3"
          width="700"
          alt={product.name}
          src={imageFor[product.id]?.primary}
          className="transition duration-700 group-hover:scale-105 group-hover:opacity-0"
        />
        <ProductImage
          imgId={product.hoverImgId}
          query={query}
          ratio="4x3"
          width="700"
          alt={`${product.name} worn view`}
          src={imageFor[product.id]?.hover}
          className="absolute inset-0 opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
        />
      </button>

      <div className="space-y-4 p-4 sm:p-5">
        <div className="min-h-[5.5rem] space-y-2">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-gold">
            {product.category}
          </p>
          <button
            type="button"
            onClick={() => onOpenProduct(product.id)}
            id={product.titleId}
            className="block text-left font-serif text-base uppercase tracking-[0.18em] text-obsidian transition hover:text-gold sm:text-lg"
          >
            {product.name}
          </button>
          <p id={product.descId} className="text-sm leading-6 text-taupe">
            {product.description}
          </p>
        </div>

        <div className="flex items-center justify-between border-t border-obsidian/10 pt-4">
          <span className="font-serif text-xl text-obsidian">
            {formatPrice(product.price)}
          </span>
          <button
            type="button"
            onClick={() => onAdd(product)}
            className="inline-flex items-center gap-2 rounded-full bg-obsidian px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-porcelain transition duration-300 hover:bg-gold hover:text-obsidian"
          >
            <ShoppingBag className="h-3.5 w-3.5" />
            Add
          </button>
        </div>
      </div>
    </article>
  )
}
