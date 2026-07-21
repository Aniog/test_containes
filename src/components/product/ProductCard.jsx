import { Link } from 'react-router-dom'
import { ShoppingBag } from 'lucide-react'
import { formatPrice } from '@/data/products'
import { useCart } from '@/components/cart/CartContext'
import ImagePlaceholder from '@/components/ui/ImagePlaceholder'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()

  return (
    <article className="group text-velmora-obsidian">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-velmora-parchment shadow-editorial">
        <Link to={`/product/${product.id}`} aria-label={`View ${product.name}`}>
          <ImagePlaceholder
            alt={product.name}
            className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-105 group-hover:opacity-0"
            imgId={product.imgId}
            query={`[${product.descId}] [${product.titleId}]`}
            ratio="4x3"
            width="700"
          />
          <ImagePlaceholder
            alt={`${product.name} worn detail`}
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition duration-700 group-hover:scale-105 group-hover:opacity-100"
            imgId={product.hoverImgId}
            query={`[${product.titleId}] worn on model warm gold jewelry editorial`}
            ratio="4x3"
            width="700"
          />
        </Link>
        <button
          type="button"
          className="absolute bottom-4 left-4 right-4 translate-y-3 rounded-full bg-velmora-obsidian px-5 py-3 font-sansBody text-xs font-extrabold uppercase tracking-nav text-velmora-cream opacity-0 shadow-softGold transition duration-300 hover:bg-velmora-gold hover:text-velmora-obsidian group-hover:translate-y-0 group-hover:opacity-100"
          onClick={() => addToCart(product)}
        >
          <span className="inline-flex items-center justify-center gap-2">
            <ShoppingBag className="h-4 w-4" strokeWidth={1.5} /> Add to Cart
          </span>
        </button>
      </div>
      <Link to={`/product/${product.id}`} className="mt-5 block">
        <h3 id={product.titleId} className="font-serifDisplay text-xl font-semibold uppercase tracking-product text-velmora-obsidian">
          {product.name}
        </h3>
      </Link>
      <p id={product.descId} className="mt-2 font-sansBody text-sm leading-6 text-velmora-muted">
        {product.description}
      </p>
      <div className="mt-3 flex items-center justify-between font-sansBody text-sm text-velmora-obsidian">
        <span>{formatPrice(product.price)}</span>
        <span className="text-xs uppercase tracking-nav text-velmora-muted">{product.category}</span>
      </div>
    </article>
  )
}
