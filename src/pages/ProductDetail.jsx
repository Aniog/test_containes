import { useMemo } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductGallery from '@/components/product/ProductGallery.jsx'
import ProductInfo from '@/components/product/ProductInfo.jsx'
import ProductCard from '@/components/product/ProductCard.jsx'
import SectionHeader from '@/components/common/SectionHeader.jsx'
import { products } from '@/data/products.js'

export default function ProductDetail({ onAdd }) {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId) || products[0]
  const related = useMemo(() => products.filter((item) => item.id !== product.id).slice(0, 4), [product.id])

  return (
    <main className="bg-velmora-ivory pb-20 pt-28 text-velmora-espresso">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <div className="mb-8 text-xs font-bold uppercase tracking-[0.22em] text-velmora-cacao/70">
          <Link to="/shop" className="transition hover:text-velmora-burnished">Shop</Link>
          <span className="mx-3">/</span>
          <span>{product.category}</span>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <ProductGallery product={product} />
          <ProductInfo product={product} onAdd={onAdd} />
        </div>
      </div>
      <section className="mx-auto mt-20 max-w-[1500px] px-5 sm:px-8 lg:px-12">
        <SectionHeader eyebrow="Complete the ritual" title="You may also like" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {related.map((item) => <ProductCard key={item.id} product={item} onAdd={onAdd} imageContext="related" sectionLabelId="related-title" />)}
        </div>
        <span id="related-title" className="sr-only">Related Velmora jewelry pieces</span>
      </section>
    </main>
  )
}
