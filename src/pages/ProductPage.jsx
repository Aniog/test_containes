import { Navigate, useParams } from 'react-router-dom'
import AccordionList from '@/components/product/AccordionList.jsx'
import ProductCard from '@/components/product/ProductCard.jsx'
import ProductDetailsPanel from '@/components/product/ProductDetailsPanel.jsx'
import ProductGallery from '@/components/product/ProductGallery.jsx'
import { useCart } from '@/context/CartContext.jsx'
import { getProductBySlug, getRelatedProducts } from '@/data/store.js'

function ProductPage() {
  const { slug } = useParams()
  const { addItem } = useCart()
  const product = getProductBySlug(slug)

  if (!product) {
    return <Navigate to="/shop" replace />
  }

  const accordionItems = [
    {
      title: 'Description',
      content: product.details,
    },
    {
      title: 'Materials & Care',
      content: `${product.metal}. ${product.care}`,
    },
    {
      title: 'Shipping & Returns',
      content:
        'Complimentary worldwide shipping on all orders, dispatch within 48 hours, and 30-day returns for unworn pieces in their original packaging.',
    },
  ]

  const relatedProducts = getRelatedProducts(product.slug)

  return (
    <div className="bg-velmora-pearl pt-28">
      <section className="velmora-container py-10 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <ProductGallery product={product} />
          <ProductDetailsPanel product={product} onAddToCart={addItem} />
        </div>

        <div className="mt-12">
          <AccordionList items={accordionItems} />
        </div>
      </section>

      <section className="velmora-container pb-16 md:pb-24">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="velmora-eyebrow">You may also like</p>
            <h2 className="mt-4 font-display text-5xl text-velmora-ink sm:text-6xl">
              Complementary keepsakes
            </h2>
          </div>
        </div>

        <div className="mt-10 grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {relatedProducts.map((relatedProduct) => (
            <ProductCard
              key={relatedProduct.slug}
              product={relatedProduct}
              imagePrefix="related"
              onAddToCart={(selectedProduct) => addItem(selectedProduct, 'Gold', 1)}
            />
          ))}
        </div>
      </section>
    </div>
  )
}

export default ProductPage
