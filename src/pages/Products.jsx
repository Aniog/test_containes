import PageHero from '@/components/site/PageHero'
import ProductGrid from '@/components/site/ProductGrid'
import CtaBanner from '@/components/site/CtaBanner'
import { productCategories } from '@/content/siteContent'
import { usePageMeta } from '@/lib/usePageMeta'

export default function ProductsPage() {
  usePageMeta('Products We Source | SSourcing China')

  return (
    <main>
      <PageHero
        eyebrow="Products we source"
        title="Product categories and sourcing projects we commonly support"
        description="The focus is on practical categories and custom OEM or ODM sourcing projects where supplier selection, sample coordination, and execution matter."
      />
      <ProductGrid items={productCategories} />
      <CtaBanner />
    </main>
  )
}
