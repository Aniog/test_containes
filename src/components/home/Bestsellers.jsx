import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { fetchBestsellers } from '@/api/products'
import ProductCard from '@/components/shared/ProductCard'
import Spinner from '@/components/ui/Spinner'
import { useImageLoader } from '@/hooks/useImageLoader'

export default function Bestsellers() {
  const [products, setProducts] = useState([])
  const [status, setStatus] = useState('loading')

  const containerRef = useImageLoader([products])

  useEffect(() => {
    let mounted = true

    fetchBestsellers()
      .then((rows) => {
        if (!mounted) return
        setProducts(rows)
        setStatus('ready')
      })
      .catch(() => {
        if (!mounted) return
        setStatus('error')
      })

    return () => {
      mounted = false
    }
  }, [])

  return (
    <section ref={containerRef} className="bg-velmora-base py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 font-sans text-xs uppercase tracking-[0.25em] text-velmora-gold">
              Most Loved
            </p>
            <h2 className="font-serif text-3xl tracking-wide sm:text-4xl">
              Bestsellers
            </h2>
          </div>
          <Link
            to="/shop"
            className="font-sans text-xs uppercase tracking-[0.2em] text-velmora-taupe-light underline-offset-4 transition-colors hover:text-velmora-gold hover:underline"
          >
            View All
          </Link>
        </div>

        {status === 'loading' && (
          <div className="flex h-48 items-center justify-center">
            <Spinner className="text-velmora-gold" />
          </div>
        )}

        {status === 'error' && (
          <div className="text-center text-velmora-taupe-light">
            <p>Unable to load bestsellers. Please try again later.</p>
          </div>
        )}

        {status === 'ready' && (
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-5">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
