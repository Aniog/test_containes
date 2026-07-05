import { Link } from 'react-router-dom'
import { getRelatedProducts, formatPrice } from '@/data/products'
import ProductImage from '@/components/ui/ProductImage'
import StarRating from '@/components/ui/StarRating'
import { useStrkImages } from '@/hooks/useStrkImages'

export default function RelatedProducts({ product }) {
  const related = getRelatedProducts(product, 4)
  const containerRef = useStrkImages()

  if (related.length === 0) return null

  return (
    <section ref={containerRef} className="py-14 md:py-20 bg-cream border-t border-warm-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-serif font-medium text-espresso mb-8 md:mb-10">
          You May Also Like
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {related.map((item) => (
            <Link key={item.id} to={`/product/${item.id}`} className="group">
              <div className="relative aspect-[4/5] overflow-hidden bg-warm-gray">
                <ProductImage
                  product={item}
                  imgId={`velmora-related-${item.id}`}
                  ratio="4x5"
                  width={500}
                  className="transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="pt-3 text-center">
                <h3 className="text-xs font-sans font-medium uppercase tracking-widest-plus text-espresso">
                  {item.name}
                </h3>
                <div className="mt-1 flex items-center justify-center gap-2">
                  <StarRating rating={item.rating} size={11} />
                  <span className="text-[10px] text-taupe">
                    ({item.reviewCount})
                  </span>
                </div>
                <p className="mt-1.5 text-sm font-medium text-espresso">
                  {formatPrice(item.price)}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
