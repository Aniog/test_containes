import ImageLoader from '@/components/site/ImageLoader.jsx'
import PageHero from '@/components/site/PageHero.jsx'
import SectionHeader from '@/components/site/SectionHeader.jsx'
import InquirySection from '@/components/home/InquirySection.jsx'
import StockImage from '@/components/site/StockImage.jsx'
import { productCategories } from '@/content.js'

const Products = () => (
  <ImageLoader>
    <main>
      <PageHero eyebrow="Products we source" title="Product sourcing for practical B2B buying needs" description="We support common export categories including consumer goods, packaging, tools, parts, home goods, electronics accessories, outdoor items, and custom products." imageId="products-export-warehouse-shipping-h37c8" imageAlt="Export products in a warehouse before shipping" />
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Categories we commonly support" description="Each category requires different supplier checks, sample review, packaging control, and inspection criteria." />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {productCategories.map(({ title, desc, icon: Icon }, index) => (
              <article key={title} className="overflow-hidden rounded-2xl border border-brand-border bg-white shadow-sm">
                <StockImage imgId={`product-category-${index}-m8q2${index}`} query={`[product-page-desc-${index}] [product-page-title-${index}]`} ratio="4x3" width="700" alt={title} className="h-48 w-full object-cover" />
                <div className="p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-mist text-brand-blue"><Icon className="h-5 w-5" /></div>
                  <h2 id={`product-page-title-${index}`} className="text-lg font-semibold text-brand-navy">{title}</h2>
                  <p id={`product-page-desc-${index}`} className="mt-3 text-sm leading-7 text-brand-muted">{desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <InquirySection />
    </main>
  </ImageLoader>
)

export default Products
