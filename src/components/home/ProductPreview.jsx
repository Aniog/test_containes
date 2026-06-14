import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { ArrowRight } from "lucide-react"
import { products } from "@/data/products"

export default function ProductPreview() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  const featured = products.slice(0, 4)

  return (
    <section ref={ref} className="section bg-paper">
      <div className="container-page">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">Featured Machines</p>
            <h2 id="featured-machines-title" className="mt-4 font-display text-4xl md:text-5xl text-ink">
              Built for the work, not the brochure.
            </h2>
          </div>
          <Link to="/products" className="btn-ghost inline-flex items-center gap-2 self-start md:self-auto">
            View all products <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {featured.map((p) => (
            <Link
              key={p.id}
              to={`/products#${p.slug}`}
              className="group block card overflow-hidden hover:border-ink transition-colors"
            >
              <div className="aspect-[4/3] bg-ink-soft overflow-hidden">
                <img
                  alt={p.name}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-[1.02] transition-transform duration-700"
                  data-strk-img-id={`home-product-${p.id}-7c4e91`}
                  data-strk-img={`[home-product-${p.id}-name] [home-product-${p.id}-tagline] [featured-machines-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="p-8">
                <h3
                  id={`home-product-${p.id}-name`}
                  className="font-display text-2xl md:text-3xl text-ink"
                >
                  {p.name}
                </h3>
                <p
                  id={`home-product-${p.id}-tagline`}
                  className="mt-2 text-sm text-steel"
                >
                  {p.tagline}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-ink">
                  Learn more
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
