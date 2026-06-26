import { ArrowUpRight } from "lucide-react";
import { products } from "@/data/content";

function ProductCard({ product, index }) {
  const isReversed = index % 2 === 1;

  return (
    <article
      id={product.id}
      className="group rounded-xl border border-[#E5E7EB] bg-white overflow-hidden hover:border-[#1B3A6B] hover:shadow-md transition-all"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div
          className={`relative lg:col-span-7 bg-[#0E1726] ${
            isReversed ? "lg:order-2" : ""
          }`}
        >
          <div
            className="aspect-[16/10] w-full bg-grid"
            data-strk-bg-id={`product-${product.id}-bg-9a3f8e`}
            data-strk-bg={`[${product.id}-tagline] [${product.id}-name] industrial metal folding machine`}
            data-strk-bg-ratio="16x10"
            data-strk-bg-width="1400"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-[#0E1726]/85 via-[#0E1726]/35 to-transparent"
            aria-hidden="true"
          />

          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-white">
            <p
              id={`${product.id}-name`}
              className="text-xl md:text-2xl font-bold tracking-tight"
            >
              {product.name}
            </p>
            <p
              id={`${product.id}-tagline`}
              className="mt-1 text-sm text-[#E8D5C0]"
            >
              {product.tagline}
            </p>
          </div>

          <div className="absolute top-5 right-5 inline-flex h-10 w-10 items-center justify-center rounded-md bg-white/10 backdrop-blur-sm border border-white/15 text-white">
            <ArrowUpRight size={18} strokeWidth={1.75} />
          </div>
        </div>

        <div
          className={`lg:col-span-5 p-6 md:p-10 ${
            isReversed ? "lg:order-1" : ""
          }`}
        >
          <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-[#C77B3F]">
            Model
          </p>
          <h3 className="mt-2 text-2xl md:text-3xl font-bold text-[#0E1726] leading-tight">
            {product.name}
          </h3>
          <p className="mt-4 text-base leading-relaxed text-[#3D4A5C]">
            {product.description}
          </p>

          <dl className="mt-6 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-[#E5E7EB] pt-6">
            {product.specs.map((spec) => (
              <div key={spec.label}>
                <dt className="text-[11px] font-semibold tracking-[0.16em] uppercase text-[#6B7280]">
                  {spec.label}
                </dt>
                <dd className="mt-1 text-sm font-semibold text-[#0E1726]">
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>

          <ul className="mt-6 space-y-2">
            {product.highlights.map((h) => (
              <li
                key={h}
                className="flex items-start gap-2 text-sm text-[#3D4A5C]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#C77B3F]" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-[#1B3A6B] hover:text-[#152d54]"
          >
            Request specifications <ArrowUpRight size={16} strokeWidth={2} />
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Products() {
  return (
    <section id="products" className="bg-canvas">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.22em] uppercase text-[#C77B3F]">
            Product Range
          </p>
          <h2
            id="products-title"
            className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0E1726] leading-[1.1]"
          >
            Seven machines. One standard of precision.
          </h2>
          <p
            id="products-subtitle"
            className="mt-5 text-lg leading-relaxed text-[#3D4A5C]"
          >
            From compact double folders to fully automated metal folding
            machines, our lineup is engineered for fabricators who treat every
            fold like a signature.
          </p>
        </div>

        <div className="mt-12 md:mt-16 space-y-8">
          {products.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}