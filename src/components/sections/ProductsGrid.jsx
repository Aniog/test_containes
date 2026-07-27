import React, { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import SectionHeader from "@/components/ui/SectionHeader"
import StrkImage from "./StrkImage"
import { productCategories } from "@/data/site"

const ProductsGrid = () => {
  const containerRef = useRef(null)
  useEffect(() => {
    if (!containerRef.current) return
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="bg-warm-100">
      <div className="container-content py-20 md:py-24">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeader
            eyebrow="Products we source"
            title="Six categories, dozens of sub-categories, one team"
            description="If it is manufactured in China and shipped overseas, we have probably sourced it. Here are the categories we work in most often."
          />
          <Link
            to="/products"
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-teal hover:text-teal-hover"
          >
            See full category list
            <ArrowRight size={16} />
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {productCategories.map((cat, idx) => (
            <article
              key={cat.id}
              className="group bg-white border border-warm-300 rounded-[6px] overflow-hidden flex flex-col hover:shadow-cardHover transition-shadow"
            >
              <StrkImage
                imgId={`home-product-${idx}-c8e1a4`}
                query={cat.imgQuery}
                ratio="3x2"
                width={600}
                alt={cat.title}
                ratioClass="aspect-[3/2]"
                containerClassName="border-b border-warm-300"
              />
              <div className="p-6 flex flex-col gap-3 flex-1">
                <h3 className="h-card">{cat.title}</h3>
                <p className="body-text">{cat.description}</p>
                <ul className="mt-1 flex flex-wrap gap-1.5">
                  {cat.items.slice(0, 3).map((item) => (
                    <li
                      key={item}
                      className="text-[12px] text-ink-secondary bg-warm-100 border border-warm-300 rounded-[3px] px-2 py-1"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsGrid
