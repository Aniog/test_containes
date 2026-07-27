import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { PRODUCT_CATEGORIES } from "@/data/content"
import { SectionHeading } from "@/components/ui/section-heading"
import { StrkImage } from "@/components/shared/StrkImage"
import { useImageLoader } from "@/hooks/useImageLoader"

export function HomeProducts() {
  const ref = useImageLoader([])
  const featured = PRODUCT_CATEGORIES.slice(0, 6)
  return (
    <section ref={ref} className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Products we source"
          title="Categories we know well"
          description="We source across a wide range of product categories, with experience in the factories and quality standards each one requires."
        />
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((cat) => (
            <div
              key={cat.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-md hover:-translate-y-0.5"
            >
              <div className="aspect-[4/3] overflow-hidden bg-slate-100">
                <StrkImage
                  imgId={cat.imgId}
                  query={`[${cat.descId}] [${cat.titleId}]`}
                  ratio="4x3"
                  width={600}
                  alt={cat.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3
                  id={cat.titleId}
                  className="text-lg font-semibold text-brand-900"
                >
                  {cat.name}
                </h3>
                <p id={cat.descId} className="mt-2 text-sm text-slate-600">
                  {cat.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-700"
          >
            View all categories
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeProducts
