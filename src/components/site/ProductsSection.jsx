import { CheckCircle2 } from 'lucide-react'
import { applications, productKeywords, specs } from '@/data/siteContent'
import SectionHeader from '@/components/site/SectionHeader'

const ProductsSection = () => {
  return (
    <section id="products" className="bg-stone-950 px-6 py-16 md:px-10 md:py-24 xl:px-16">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.05fr] lg:items-start">
        <div className="space-y-10">
          <SectionHeader
            eyebrow="Product range"
            title="Built around the world of modern metal folding"
            description="Our core offering centers on elegant double folding machinery with terminology and configurations aligned to real industrial search intent and buyer needs."
            light
          />

          <div className="flex flex-wrap gap-3">
            {productKeywords.map((keyword) => (
              <span
                key={keyword}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200"
              >
                {keyword}
              </span>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {specs.map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-white/10 bg-white/6 p-5 text-white"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-400">
                  {item.label}
                </p>
                <p className="mt-3 text-lg font-medium leading-7 text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/6 p-3">
            <img
              alt="Sheet metal folding machinery in production"
              className="h-[360px] w-full rounded-[1.5rem] object-cover"
              data-strk-img-id="artitect-product-machine-8z1n5v"
              data-strk-img="[products-image-description] [products-image-title]"
              data-strk-img-ratio="4x3"
              data-strk-img-width="1000"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            />
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 text-white">
            <h3 id="products-image-title" className="text-2xl font-semibold tracking-tight text-white">
              Flexible performance for real-world fabrication
            </h3>
            <p id="products-image-description" className="mt-3 text-base leading-7 text-slate-300">
              Whether your team searches for a sheet metal folder, metal folder machine, or metal folding machine, the goal stays the same: accurate output, operator comfort, and reliable throughput.
            </p>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {applications.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm leading-6 text-slate-200">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection
