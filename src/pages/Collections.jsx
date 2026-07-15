import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useReveal } from "@/lib/useReveal"
import { PRODUCTS } from "@/data/products"

const COLLECTIONS = [
  {
    id: "aura",
    name: "Aura",
    blurb: "Crystals set in gold, made for stacking.",
    imgId: "coll-aura-001",
    long: "A study in light. Hand-set crystals, sculpted in 18K gold plate — pieces that move with you through the day.",
  },
  {
    id: "flora",
    name: "Flora",
    blurb: "The garden, set in metal.",
    imgId: "coll-flora-002",
    long: "Petals, leaves, and stems — botanical forms reimagined as demi-fine jewelry in warm gold.",
  },
  {
    id: "sphere",
    name: "Sphere",
    blurb: "Geometry, in gold.",
    imgId: "coll-sphere-003",
    long: "Soft, sculptural, weightless. Our most-loved everyday huggies, refined to a perfect sphere.",
  },
  {
    id: "lace",
    name: "Lace",
    blurb: "Filigree that moves like fabric.",
    imgId: "coll-lace-004",
    long: "Inspired by vintage lace and the way light moves through it — every piece hand-finished.",
  },
  {
    id: "heirloom",
    name: "Heirloom",
    blurb: "Gifts worth keeping.",
    imgId: "coll-heirloom-005",
    long: "Curated sets, gift-boxed, ready to give. The pieces you pass down — or keep for yourself.",
  },
]

export default function Collections() {
  const containerRef = useRef(null)
  useReveal(containerRef, [])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <section className="bg-taupe-100 pt-32 sm:pt-40 pb-12 sm:pb-16">
        <div className="container-editorial">
          <p className="eyebrow">Collections</p>
          <h1 className="font-serif text-[48px] sm:text-[64px] lg:text-[80px] mt-3 text-espresso">
            The Stories We Tell
          </h1>
          <p className="mt-5 text-[15px] sm:text-[16px] text-mocha-500 max-w-xl font-light">
            Each Velmora collection is a small idea, slowly refined — until
            every piece feels inevitable.
          </p>
        </div>
      </section>

      <section ref={containerRef} className="bg-cream py-16 sm:py-24">
        <div className="container-editorial space-y-20 sm:space-y-28">
          {COLLECTIONS.map((c, i) => {
            const sample = PRODUCTS.find((p) => (p.collection || "").toLowerCase() === c.id) || PRODUCTS[i % PRODUCTS.length]
            const reverse = i % 2 === 1
            return (
              <article
                key={c.id}
                className={`reveal grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center`}
              >
                <div className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>
                  <Link
                    to={`/shop?collection=${c.id}`}
                    className="group block relative aspect-[4/3] overflow-hidden bg-espresso-100"
                  >
                    <img
                      data-strk-img-id={c.imgId}
                      data-strk-img={`[${c.id}-desc] [${c.id}-name] [velmora collection]`}
                      data-strk-img-ratio="4x3"
                      data-strk-img-width="1100"
                      src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                      alt={c.name}
                      className="w-full h-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(180deg, rgba(26,18,8,0) 60%, rgba(26,18,8,0.45) 100%)",
                      }}
                    />
                  </Link>
                </div>
                <div className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""}`}>
                  <p className="eyebrow">Collection</p>
                  <h2 id={`${c.id}-name`} className="font-serif text-[36px] sm:text-[44px] mt-3 text-espresso">
                    {c.name}
                  </h2>
                  <p id={`${c.id}-desc`} className="mt-3 italic text-gold-600 font-serif text-[20px]">
                    {c.blurb}
                  </p>
                  <p className="mt-5 text-[15px] text-mocha-500 font-light leading-relaxed max-w-md">
                    {c.long}
                  </p>
                  <Link
                    to={`/shop?collection=${c.id}`}
                    className="link-underline mt-7 text-[12px] uppercase tracking-wider-3 font-medium"
                  >
                    Shop {c.name}
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </section>
    </>
  )
}
