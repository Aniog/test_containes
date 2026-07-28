import { Link } from "react-router-dom"

const categories = [
  { name: "Electronics & Components", desc: "PCBs, cables, chargers, IoT devices, consumer electronics" },
  { name: "Hardware & Tools", desc: "Hand tools, power tools, fasteners, building hardware" },
  { name: "Textiles & Apparel", desc: "Garments, bags, fabrics, home textiles, accessories" },
  { name: "Packaging & Printing", desc: "Boxes, bags, labels, promotional materials" },
  { name: "Home & Kitchen", desc: "Cookware, furniture, decor, appliances, lighting" },
  { name: "Machinery & Industrial", desc: "Industrial parts, automation equipment, molds" },
]

export default function ProductsSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              Products We Source
            </span>
            <h2 id="products-title" className="mt-3 text-3xl md:text-4xl font-bold text-text-primary">
              Broad Product Coverage Across Industries
            </h2>
            <p id="products-desc" className="mt-4 text-text-secondary leading-relaxed">
              We source a wide range of products from verified factories across China. If your category is not listed, reach out — we likely cover it.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {categories.map((cat, i) => (
                <div key={i} className="rounded-lg border border-[#e2e8f0] p-4 hover:shadow-sm transition-shadow">
                  <h4 className="font-semibold text-text-primary text-sm">{cat.name}</h4>
                  <p className="mt-1 text-xs text-text-muted">{cat.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <Link
                to="/products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark"
              >
                See full product list
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div
              className="aspect-[4/3] w-full rounded-xl overflow-hidden shadow-lg"
              data-strk-bg-id="products-bg-d4e5f6"
              data-strk-bg="[products-desc] [products-title]"
              data-strk-bg-ratio="4x3"
              data-strk-bg-width="700"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
