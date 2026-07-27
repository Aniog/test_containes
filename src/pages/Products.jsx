import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import PageHero from "@/components/layout/PageHero"
import Badge from "@/components/ui/Badge"
import Button from "@/components/ui/Button"
import StrkImage from "@/components/sections/StrkImage"
import InquiryCTA from "@/components/sections/InquiryCTA"
import { productCategories } from "@/data/site"

const Products = () => {
  const containerRef = useRef(null)
  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <PageHero
        eyebrow="Products we source"
        title="The product categories we work in most often"
        description="If your product is manufactured in China and shipped overseas, we can probably source it. These six categories cover the majority of what our buyers ask for."
      />

      <section className="bg-warm-100">
        <div className="container-content py-16 md:py-20 flex flex-col gap-12 md:gap-16">
          {productCategories.map((cat, idx) => {
            const reverse = idx % 2 === 1
            return (
              <article
                key={cat.id}
                id={cat.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                <div className={reverse ? "lg:col-span-7 lg:order-2" : "lg:col-span-7"}>
                  <StrkImage
                    imgId={`products-${idx}-d7f2b8`}
                    query={cat.imgQuery}
                    ratio="3x2"
                    width={900}
                    alt={cat.title}
                    ratioClass="aspect-[3/2]"
                    containerClassName="rounded-[6px] border border-warm-300 shadow-card"
                  />
                </div>
                <div className={reverse ? "lg:col-span-5 lg:order-1" : "lg:col-span-5"}>
                  <Badge variant="teal">Category {String(idx + 1).padStart(2, "0")}</Badge>
                  <h2 className="mt-3 text-2xl md:text-3xl font-semibold leading-tight text-ink">
                    {cat.title}
                  </h2>
                  <p className="mt-4 text-[16px] leading-relaxed text-ink-secondary">
                    {cat.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <li
                        key={item}
                        className="text-[13px] text-ink-secondary bg-warm-200 border border-warm-300 rounded-[3px] px-2.5 py-1.5"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      <section className="bg-warm-200 border-y border-warm-300">
        <div className="container-content py-16 md:py-20">
          <div className="max-w-3xl">
            <span className="eyebrow">Don't see your category?</span>
            <h2 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight tracking-[-0.015em] text-ink">
              We source more than the six categories above
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-ink-secondary">
              From automotive parts to beauty tools, from sporting goods to
              promotional items — if it is made in China, we can source it. Tell
              us your product and we will confirm within one business day
              whether we are the right partner.
            </p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button as={Link} to="/contact#inquiry" variant="primary" size="lg">
              Ask about your product
              <ArrowRight size={18} />
            </Button>
            <Button as={Link} to="/case-studies" variant="secondary" size="lg">
              See how we have done it before
            </Button>
          </div>
        </div>
      </section>

      <InquiryCTA />
    </div>
  )
}

export default Products
