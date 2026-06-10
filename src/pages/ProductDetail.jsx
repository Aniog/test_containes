import { useEffect, useRef } from "react"
import { Link, useParams } from "react-router-dom"
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronLeft,
  Gauge,
  Layers,
  Ruler,
  Wrench,
} from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { productById, products } from "@/data/products"
import { cn } from "@/lib/utils"

function SpecTile({ label, value, unit }) {
  return (
    <div className="border border-hairline bg-paper p-6">
      <p className="text-[0.65rem] uppercase tracking-eyebrow text-steel-soft">
        {label}
      </p>
      <p className="mt-3 font-serif text-3xl text-ink num-tabular">
        {value}
        {unit && (
          <span className="ml-1 text-base text-steel-soft">{unit}</span>
        )}
      </p>
    </div>
  )
}

function RelatedCard({ product }) {
  const ref = useRef(null)
  useEffect(() => {
    if (!ref.current) return
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <Link
      to={`/products/${product.id}`}
      className="group block border border-hairline bg-paper transition-all duration-300 hover:border-ink"
    >
      <div ref={ref} className="relative aspect-[4/3] overflow-hidden bg-ink-soft">
        <img
          alt={`${product.name} — ${product.tagline}`}
          data-strk-img-id={`related-img-${product.id}`}
          data-strk-img={`[related-product-${product.id}-name] [related-product-${product.id}-tagline] [related-title]`}
          data-strk-img-ratio="4x3"
          data-strk-img-width="600"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <span className="absolute left-3 top-3 inline-flex items-center bg-bone/95 px-2.5 py-0.5 text-[0.6rem] font-semibold uppercase tracking-eyebrow text-ink">
          {product.series}
        </span>
      </div>
      <div className="p-5">
        <h4
          id={`related-product-${product.id}-name`}
          className="font-serif text-lg text-ink"
        >
          {product.name}
        </h4>
        <p
          id={`related-product-${product.id}-tagline`}
          className="mt-1 text-sm text-steel-soft"
        >
          {product.tagline}
        </p>
        <div className="mt-4 flex items-center justify-between text-xs">
          <span className="font-medium text-ink num-tabular">
            {product.maxThicknessMm} mm · {product.maxLengthMm} mm
          </span>
          <ArrowUpRight
            className="h-4 w-4 text-steel-soft group-hover:text-brass-deep"
            strokeWidth={1.5}
          />
        </div>
      </div>
    </Link>
  )
}

export default function ProductDetail() {
  const { productId } = useParams()
  const product = productById[productId]
  const heroRef = useRef(null)

  useEffect(() => {
    if (!heroRef.current) return
    return ImageHelper.loadImages(strkImgConfig, heroRef.current)
  }, [productId])

  if (!product) {
    return (
      <section className="bg-bone section-pad-lg">
        <div className="container-content text-center">
          <p className="eyebrow">Not found</p>
          <h1 className="mt-4 font-serif text-4xl text-ink md:text-5xl">
            We could not find that machine.
          </h1>
          <p className="mt-4 text-steel-soft">
            The model you are looking for may have been renamed or replaced by
            a newer series.
          </p>
          <Link to="/products" className="btn-primary mt-8 inline-flex">
            Back to the catalogue
            <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
          </Link>
        </div>
      </section>
    )
  }

  const related = products
    .filter((p) => p.id !== product.id && p.series === product.series)
    .concat(
      products.filter(
        (p) => p.id !== product.id && p.series !== product.series,
      ),
    )
    .slice(0, 3)

  return (
    <>
      <section
        ref={heroRef}
        className="relative isolate overflow-hidden bg-ink text-bone"
      >
        <div
          aria-hidden="true"
          data-strk-bg-id={`detail-bg-${product.id}`}
          data-strk-bg={`[detail-eyebrow-${product.id}] [detail-title-${product.id}] [detail-sub-${product.id}]`}
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1920"
          className="absolute inset-0 opacity-50"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/40 to-ink"
        />

        <div className="container-content relative pt-32 pb-16 md:pt-40">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-eyebrow text-bone/70 hover:text-brass-light"
          >
            <ChevronLeft className="h-3.5 w-3.5" strokeWidth={1.5} />
            All machines
          </Link>

          <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <span
                id={`detail-eyebrow-${product.id}`}
                className="eyebrow-light"
              >
                {product.series}
              </span>
              <h1
                id={`detail-title-${product.id}`}
                className="mt-5 font-serif text-4xl font-medium leading-[1.05] text-bone md:text-5xl lg:text-6xl text-balance"
              >
                {product.name}
              </h1>
              <p
                id={`detail-sub-${product.id}`}
                className="mt-6 max-w-2xl text-base leading-relaxed text-bone/75 md:text-lg"
              >
                {product.description}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to={`/contact?topic=quote&model=${product.id}`}
                  className="btn-accent"
                >
                  Request a quote
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
                <Link
                  to={`/contact?topic=spec&model=${product.id}`}
                  className="btn-outline-light"
                >
                  Download spec sheet
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="border border-white/10 bg-ink-soft/40">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    alt={`${product.name} hero shot`}
                    data-strk-img-id={`detail-img-${product.id}`}
                    data-strk-img={`[detail-sub-${product.id}] [detail-title-${product.id}] [detail-eyebrow-${product.id}]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="900"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 3'/%3E"
                    className="h-full w-full object-cover"
                    loading="eager"
                  />
                </div>
                <div className="border-t border-white/10 p-6">
                  <p className="text-xs uppercase tracking-eyebrow text-brass">
                    At a glance
                  </p>
                  <dl className="mt-4 grid grid-cols-2 gap-y-4 text-sm">
                    <div>
                      <dt className="text-[0.65rem] uppercase tracking-eyebrow text-bone/60">
                        Max thickness
                      </dt>
                      <dd className="mt-1 font-serif text-xl text-bone num-tabular">
                        {product.maxThicknessMm} mm
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.65rem] uppercase tracking-eyebrow text-bone/60">
                        Bend length
                      </dt>
                      <dd className="mt-1 font-serif text-xl text-bone num-tabular">
                        {product.maxLengthMm} mm
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.65rem] uppercase tracking-eyebrow text-bone/60">
                        Bend angle
                      </dt>
                      <dd className="mt-1 font-serif text-xl text-bone num-tabular">
                        {product.bendAngleDeg}°
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[0.65rem] uppercase tracking-eyebrow text-bone/60">
                        Automation
                      </dt>
                      <dd className="mt-1 font-serif text-xl text-bone">
                        {product.automation}
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-bone section-pad-lg">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow">Highlights</p>
              <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">
                Engineered around the way you actually work.
              </h2>
              <p className="mt-4 text-steel-soft">
                {product.aliases.join(", ")} — built around the same principles
                of rigidity, repeatability, and long-term serviceability.
              </p>
            </div>

            <div className="lg:col-span-7">
              <ul className="space-y-5">
                {product.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-4 border-b border-hairline pb-5"
                  >
                    <span
                      className={cn(
                        "mt-1 grid h-6 w-6 flex-none place-items-center bg-brass text-ink",
                      )}
                    >
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <p className="text-base text-ink leading-relaxed">{h}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-paper section-pad-lg">
        <div className="container-content">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Technical specifications</p>
              <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">
                Honest numbers, stated in mild steel at full length.
              </h2>
            </div>
            <p className="max-w-md text-sm text-steel-soft">
              Capacity is rated for mild steel at the full bend length on a
              single cycle. Different materials and tooling will shift these
              numbers — speak to our engineers for a precise calculation.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <SpecTile
              label="Max thickness (mild steel)"
              value={product.maxThicknessMm}
              unit="mm"
            />
            <SpecTile
              label="Bend length"
              value={product.maxLengthMm}
              unit="mm"
            />
            <SpecTile
              label="Bend angle"
              value={product.bendAngleDeg}
              unit="°"
            />
            <SpecTile
              label="Automation"
              value={product.automation}
            />
            <SpecTile
              label="Motor power"
              value={product.specs.power}
            />
            <SpecTile
              label="Machine weight"
              value={product.specs.weight}
            />
            <SpecTile
              label="Air supply"
              value={product.specs.airSupply}
            />
            <SpecTile
              label="Footprint (L × W × H)"
              value={product.specs.footprint}
            />
          </div>
        </div>
      </section>

      <section className="bg-bone section-pad">
        <div className="container-content">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                icon: Gauge,
                title: "Calibrated to ±0.1°",
                body: "A Renishaw laser reference is used on every machine before it leaves the factory floor.",
              },
              {
                icon: Layers,
                title: "Stress-relieved frame",
                body: "Welded frames are heat-treated to remove internal stress, so geometry stays true.",
              },
              {
                icon: Wrench,
                title: "Tooling you can swap in 90s",
                body: "Segmented blades and a quick-clamp system mean changeovers happen at the speed of a shop floor.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-hairline bg-paper p-6 md:p-8"
              >
                <item.icon
                  className="h-7 w-7 text-brass-deep"
                  strokeWidth={1.5}
                />
                <h3 className="mt-5 font-serif text-xl text-ink">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-steel-soft leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper section-pad-lg">
        <div className="container-content">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Related machines</p>
              <h2 className="mt-4 font-serif text-3xl text-ink md:text-4xl">
                Models that pair well with the {product.series.split(" ")[0]}.
              </h2>
            </div>
            <Link
              to="/products"
              className="link-underline self-start text-sm font-medium md:self-end"
            >
              See the full range
              <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p) => (
              <RelatedCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink text-bone section-pad-lg">
        <div className="container-content">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            <div className="lg:col-span-7">
              <span className="eyebrow-light">Get a fixed price</span>
              <h2 className="mt-4 font-serif text-3xl font-medium leading-tight text-bone md:text-4xl lg:text-5xl text-balance">
                Ready to spec the {product.series.split(" ")[0]} for your
                shop?
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-bone/75">
                Send us a sample drawing and material spec. We will respond with
                a fixed-price quote, a delivery window, and a tooling list
                within two business days.
              </p>
            </div>
            <div className="lg:col-span-5">
              <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
                <Link
                  to={`/contact?topic=quote&model=${product.id}`}
                  className="btn-accent"
                >
                  Request a quote
                  <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </Link>
                <Link
                  to={`/contact?topic=demo&model=${product.id}`}
                  className="btn-outline-light"
                >
                  Book a demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
