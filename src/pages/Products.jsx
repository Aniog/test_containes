import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { CheckCircle2 } from 'lucide-react'
import PageHero from '@/components/sections/PageHero'
import CTABand from '@/components/sections/CTABand'
import { PRODUCT_CATEGORIES } from '@/data/content'

export default function Products() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])
  return (
    <>
      <PageHero
        eyebrow="Products we source"
        title="Categories we source for global buyers"
        description="We work across consumer and industrial products, with quality control tailored to the requirements of each category."
        bgId="products-hero-bg-4c3d"
        queryIds="[products-hero-desc] [products-hero-title]"
      />
      <span id="products-hero-title" className="hidden">Products we source from China</span>
      <span id="products-hero-desc" className="hidden">
        Consumer electronics, apparel, home goods, industrial hardware, packaging, sports, kitchen, baby, and eco products.
      </span>

      <section ref={ref} className="bg-background">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCT_CATEGORIES.map((cat) => {
              const Icon = cat.icon
              return (
                <div
                  key={cat.id}
                  className="overflow-hidden rounded-xl border border-border bg-card shadow-sm transition hover:shadow-md"
                >
                  <div className="aspect-[4/3] w-full bg-muted">
                    <img
                      alt={cat.title}
                      data-strk-img-id={cat.imgId}
                      data-strk-img={`[${cat.descId}] [${cat.titleId}]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="600"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2">
                      <Icon className="h-5 w-5 text-accent" />
                      <h2 id={cat.titleId} className="text-base font-semibold text-foreground">
                        {cat.title}
                      </h2>
                    </div>
                    <p id={cat.descId} className="mt-2 text-sm text-muted-foreground">
                      {cat.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 rounded-xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-xl font-bold text-foreground">Don’t see your product?</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              We source across many more categories. If your product is not listed,
              send us the details and we will confirm whether we can help.
            </p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {[
                'Material and specification verification',
                'Compliance and certification checks',
                'Packaging and labeling support',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <CTABand />
    </>
  )
}
