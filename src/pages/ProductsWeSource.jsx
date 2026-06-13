import ImagePageShell from '../components/common/ImagePageShell.jsx'
import PageHero from '../components/common/PageHero.jsx'
import SectionIntro from '../components/common/SectionIntro.jsx'
import { sourcedProducts } from '../siteContent.js'

const categoryDetails = [
  'Home and kitchen goods with repeat production needs and packaging coordination.',
  'Consumer accessories where supplier comparison and consistency are important.',
  'Hardware or industrial products that need clearer production communication.',
  'Retail and seasonal lines that need better shipment planning before peak periods.',
  'Packaging, promotional, or general merchandise requiring practical supplier sourcing support.',
  'Other suitable B2B categories reviewed case by case based on product complexity and sourcing stage.',
]

function ProductsWeSource() {
  return (
    <ImagePageShell>
      <main>
        <PageHero
          eyebrow="Products We Source"
          title="Product categories commonly handled for overseas buyers"
          description="We support a range of practical B2B product categories where supplier fit, communication, and execution matter during sourcing and production."
        />

        <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
            <div className="space-y-10">
              <SectionIntro
                eyebrow="Categories"
                title="Examples of products buyers ask us to help source"
                description="The right fit depends on product type, order stage, and the level of support you need, but these are common areas."
              />
              <div className="grid gap-4 sm:grid-cols-2">
                {sourcedProducts.map((product) => (
                  <article key={product} className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-sm">
                    <h2 className="text-lg font-semibold text-slate-900">{product}</h2>
                  </article>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <img
                alt="Products sourced from China"
                className="h-[360px] w-full rounded-[2rem] object-cover"
                data-strk-img-id="products-page-img-f73a29"
                data-strk-img="[products-page-desc] [products-page-title]"
                data-strk-img-ratio="4x3"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              />
              <h2 id="products-page-title" className="sr-only">Products sourced from China</h2>
              <p id="products-page-desc" className="sr-only">Consumer goods industrial products packaging and home products sourced from China.</p>
              <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-xl font-semibold text-slate-900">Typical sourcing considerations</h3>
                <div className="mt-5 grid gap-4">
                  {categoryDetails.map((detail) => (
                    <p key={detail} className="text-base leading-7 text-slate-600">{detail}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </ImagePageShell>
  )
}

export default ProductsWeSource
