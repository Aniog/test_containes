import PageHero from '@/components/site/PageHero'
import SectionHeader from '@/components/site/SectionHeader'
import StockImage from '@/components/site/StockImage'
import { products } from '@/siteData'

function ProductsWeSource() {
  return (
    <>
      <PageHero
        eyebrow="Products we source"
        title="Product categories we help global buyers source from China"
        description="We support sourcing across practical consumer, industrial, and custom product categories where supplier fit, quality follow-up, and shipping readiness matter."
        titleId="products-page-title"
        descriptionId="products-page-desc"
        imageId="products-page-export-goods-4ea921"
        imageContext="Export product assortment, packaging samples, manufactured goods, and procurement selection for China sourcing buyers."
        imageAlt="Export product assortment and packaging samples"
      />

      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 lg:grid-cols-[1fr_1fr] lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2">
            {products.map((product) => (
              <article key={product.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <p className="text-xl font-semibold text-slate-900">{product.title}</p>
                <p className="mt-4 text-base leading-7 text-slate-600">{product.description}</p>
              </article>
            ))}
          </div>
          <div>
            <SectionHeader
              eyebrow="Category support"
              title="Not limited to one vertical"
              description="We work with overseas buyers who need dependable supplier review and order follow-up across multiple categories, especially when execution details can affect quality, packing, or delivery timing."
            />
            <div className="mt-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-sm">
              <StockImage
                alt="Products we source"
                className="h-full min-h-[460px] w-full object-cover"
                imgId="products-grid-side-7a2cf1"
                query="[products-side-desc] [products-side-title] [products-page-title]"
                ratio="4x3"
                width="900"
              />
            </div>
            <h2 id="products-side-title" className="sr-only">
              Product category sourcing support
            </h2>
            <p id="products-side-desc" className="sr-only">
              A variety of export products sourced from China for international buyers across consumer goods, industrial items, and OEM projects.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default ProductsWeSource
