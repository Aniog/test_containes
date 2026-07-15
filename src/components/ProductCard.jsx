import { Link } from 'react-router-dom'
import Button from '@/components/ui/Button'
import ProductImage from '@/components/ui/ProductImage'
import { useStore } from '@/context/StoreContext'

export default function ProductCard({ product, priority = false }) {
  const { addToCart } = useStore()

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-velmora-sand/70 bg-velmora-ivory shadow-velmora-soft transition duration-300 hover:-translate-y-1 hover:shadow-velmora">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative overflow-hidden bg-velmora-mist">
          <ProductImage
            image={product.gallery[0]}
            className="aspect-[4/5] w-full object-cover transition duration-500 group-hover:scale-[1.02] group-hover:opacity-0"
            width={priority ? '1000' : '700'}
          />
          <ProductImage
            image={product.gallery[1]}
            className="absolute inset-0 aspect-[4/5] w-full object-cover opacity-0 transition duration-500 group-hover:opacity-100"
            width={priority ? '1000' : '700'}
          />
          <div className="absolute inset-x-4 bottom-4 translate-y-3 transition duration-300 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
            <Button
              className="w-full"
              onClick={(event) => {
                event.preventDefault()
                addToCart(product)
              }}
            >
              Add to Cart
            </Button>
          </div>
        </div>
      </Link>

      <div className="space-y-3 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-velmora-taupe">{product.category}</p>
            <Link to={`/product/${product.slug}`}>
              <h3 className="mt-3 font-display text-xl uppercase tracking-product text-velmora-ink sm:text-2xl">
                {product.name}
              </h3>
            </Link>
          </div>
          <p className="text-sm font-medium text-velmora-ink">${product.price}</p>
        </div>

        <p className="text-sm leading-7 text-velmora-taupe">{product.description}</p>

        <div className="flex flex-wrap gap-2 pt-1">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-velmora-sand bg-velmora-cream px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-velmora-taupe"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}
