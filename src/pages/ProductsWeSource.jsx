import { PackageCheck } from 'lucide-react'
import PageHero from '../components/PageHero.jsx'
import SectionHeader from '../components/SectionHeader.jsx'
import { productCategories } from '../data/siteContent.js'
import { useStrkImages } from '../hooks/useStrkImages.js'

const ProductsWeSource = () => {
  const containerRef = useStrkImages()

  return (
    <main ref={containerRef} className="bg-slate-50 text-slate-950">
      <PageHero
        eyebrow="Products we source"
        title="Supplier sourcing for defined B2B product requirements"
        description="We help overseas buyers source industrial items, consumer goods, packaging, OEM products, and private-label categories from China."
        imageId="products-hero-export-warehouse-39ad24"
        imageAlt="Export warehouse with cartons ready for shipment"
        visualContext="organized export warehouse with cartons pallets and products ready for international shipping"
      />
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Categories"
            title="Common product categories"
            description="The strongest projects start with product drawings, photos, target materials, compliance requirements, order quantity, and packaging expectations."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {productCategories.map((category) => (
              <article key={category} className="rounded-3xl border border-slate-200 bg-white p-5 text-slate-950 shadow-sm">
                <PackageCheck className="h-7 w-7 text-blue-700" />
                <h2 className="mt-4 text-lg font-bold text-slate-950">{category}</h2>
              </article>
            ))}
          </div>
          <div className="mt-12 rounded-3xl border border-amber-200 bg-amber-50 p-6 text-amber-950">
            <h2 className="text-xl font-bold text-amber-950">Product fit note</h2>
            <p className="mt-2 text-sm leading-6 text-amber-900">For highly regulated products, we help clarify supplier documents and testing needs, but buyers should confirm final compliance requirements for their destination market.</p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ProductsWeSource
