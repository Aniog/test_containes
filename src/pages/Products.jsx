import { Boxes, CheckCircle2 } from 'lucide-react'
import Container from '../components/site/Container.jsx'
import SectionHeader from '../components/site/SectionHeader.jsx'

const categories = [
  ['Consumer goods', 'Homeware, kitchen goods, gifts, pet products, travel goods, and lifestyle accessories.'],
  ['Packaging and print', 'Retail packaging, e-commerce boxes, labels, stickers, inserts, manuals, and display materials.'],
  ['Electronics and accessories', 'Charging accessories, cables, smart device accessories, small electronics, and components.'],
  ['Industrial and hardware', 'Tools, fasteners, metal parts, plastic parts, fixtures, and general industrial supplies.'],
  ['Textiles and apparel', 'Bags, uniforms, fabrics, trims, promotional apparel, and basic garment projects.'],
  ['Machinery and parts', 'Light machinery, spare parts, production accessories, and custom equipment components.'],
]

const checks = ['Supplier type and production fit', 'Minimum order quantity and pricing logic', 'Material and component clarity', 'Certificates or market requirements', 'Sample and bulk consistency', 'Packaging and shipment readiness']

const Products = () => (
  <>
    <section className="bg-brand-navy py-20 text-white md:py-28">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-sky">Products we source</p>
            <h1 id="products-title" className="mt-3 text-4xl font-semibold tracking-tight text-white md:text-5xl">
              Product sourcing across practical B2B categories
            </h1>
            <p id="products-desc" className="mt-5 text-lg leading-8 text-slate-200">
              We help overseas buyers identify and assess China suppliers for products that need careful specification, sampling, quality checks, and export coordination.
            </p>
          </div>
          <img
            alt="Warehouse shelves and export cartons for China sourcing products"
            className="h-80 w-full rounded-3xl border border-white/15 object-cover shadow-2xl shadow-black/20"
            data-strk-img-id="products-warehouse-export-img-6c27ee"
            data-strk-img="[products-desc] [products-title]"
            data-strk-img-ratio="3x2"
            data-strk-img-width="1000"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
          />
        </div>
      </Container>
    </section>

    <section className="bg-white py-16 text-slate-900 md:py-24">
      <Container>
        <SectionHeader
          eyebrow="Categories"
          title="We source products where supplier fit and quality control matter"
          description="The exact category is less important than having clear requirements and a realistic sourcing process. We help define what needs to be checked before committing to production."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {categories.map(([title, text]) => (
            <article key={title} className="rounded-2xl border border-slate-200 bg-white p-6 text-slate-900 shadow-sm">
              <Boxes className="h-8 w-8 text-brand-blue" />
              <h2 className="mt-5 text-xl font-semibold text-brand-navy">{title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>

    <section className="bg-slate-50 py-16 text-slate-900 md:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeader
            eyebrow="Category checks"
            title="What we review before recommending supplier options"
            description="A supplier list is only useful when the supplier can actually produce your product at the required quality and order conditions."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {checks.map((check) => (
              <div key={check} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5 text-sm font-semibold text-brand-navy shadow-sm">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-brand-blue" />
                {check}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  </>
)

export default Products
