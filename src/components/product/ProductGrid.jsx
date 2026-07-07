import { useMemo } from 'react'
import ProductCard from '@/components/product/ProductCard'
import { useStockImages } from '@/hooks/useStockImages'

export default function ProductGrid({ products, columns = 'default' }) {
  const containerRef = useStockImages([products])

  const gridClassName = useMemo(() => {
    if (columns === 'five') {
      return 'grid gap-8 sm:grid-cols-2 xl:grid-cols-5'
    }

    if (columns === 'three') {
      return 'grid gap-8 sm:grid-cols-2 xl:grid-cols-3'
    }

    return 'grid gap-8 sm:grid-cols-2 xl:grid-cols-3'
  }, [columns])

  return (
    <div ref={containerRef} className={gridClassName}>
      {products.map((product, index) => (
        <ProductCard key={product.slug} product={product} priority={index < 2} />
      ))}
    </div>
  )
}
