import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHero from "@/components/sections/PageHero"
import { Card } from "@/components/ui/Card"
import { Button } from "@/components/ui/Button"
import CtaBand from "@/components/sections/CtaBand"
import { PRODUCT_CATEGORIES } from "@/lib/content"

const CATEGORY_DETAILS = {
  "consumer-electronics": [
    "Bluetooth audio and wearables",
    "Smart home and IoT devices",
    "Phone and computer accessories",
    "Small home appliances",
  ],
  "home-living": [
    "Kitchenware and cookware",
    "Home textiles and bedding",
    "Furniture and storage",
    "Decor and lighting",
  ],
  "apparel-textiles": [
    "Fashion and activewear",
    "Technical and performance fabrics",
    "Bags and accessories",
    "Uniforms and workwear",
  ],
  "promotional-products": [
    "Branded corporate gifts",
    "Event and trade show merchandise",
    "Stationery and drinkware",
    "Custom packaging",
  ],
  "industrial-hardware": [
    "Hand and power tools",
    "Fittings and fasteners",
    "Metal and plastic components",
    "Safety and PPE",
  ],
  "beauty-personal-care": [
    "Skincare and cosmetics",
    "Hair and grooming tools",
    "Oral care products",
    "Beauty packaging",
  ],
}

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
        description="We work across consumer and industrial categories, applying category-specific QC standards so quality matches your market's expectations."
        ctaLabel="Source your product"
      />

      <section className="py-20 md:py-28">
        <div ref={ref} className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            {PRODUCT_CATEGORIES.map((cat) => (
              <Card
                key={cat.id}
                className="overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="grid sm:grid-cols-2">
                  <div className="relative aspect-[4/3] overflow-hidden bg-page sm:aspect-auto">
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
                  <div className="p-6 md:p-8">
                    <h2
                      id={cat.titleId}
                      className="text-xl font-bold text-ink"
                    >
                      {cat.title}
                    </h2>
                    <p
                      id={cat.descId}
                      className="mt-2 text-sm leading-relaxed text-slate-body"
                    >
                      {cat.description}
                    </p>
                    <ul className="mt-4 space-y-2">
                      {CATEGORY_DETAILS[cat.id]?.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm text-slate-body"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-border-soft bg-surface p-8 text-center md:p-10">
            <h2 className="text-2xl font-bold text-ink">
              Don't see your category?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-slate-body">
              We source across most manufactured goods. If your product is made
              in China, we can almost certainly find and verify the right
              factory for it.
            </p>
            <Button as={Link} to="/contact" size="lg" className="mt-6">
              Ask about your product
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
