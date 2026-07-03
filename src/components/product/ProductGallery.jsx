import React, { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ProductGallery({ product }) {
  const images = [
    { id: product.primaryImgId, query: product.primaryQuery, ratio: "4x5" },
    { id: product.secondaryImgId, query: product.secondaryQuery, ratio: "4x5" },
  ]
  // Make the gallery feel editorial with 4–5 frames
  const editorial = [
    {
      id: `${product.id}-detail-3`,
      query: `${product.name} closeup detail macro`,
      ratio: "1x1",
    },
    {
      id: `${product.id}-detail-4`,
      query: `${product.name} on model lifestyle editorial warm`,
      ratio: "3x4",
    },
  ]
  const all = [...images, ...editorial]
  const [active, setActive] = useState(0)

  const next = () => setActive((i) => (i + 1) % all.length)
  const prev = () => setActive((i) => (i - 1 + all.length) % all.length)

  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-12 md:gap-4">
      {/* Thumbnails — desktop left rail */}
      <div className="order-2 flex flex-row gap-3 overflow-x-auto md:order-1 md:col-span-2 md:flex-col md:gap-3 md:overflow-visible">
        {all.map((img, i) => (
          <button
            key={img.id}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`View image ${i + 1}`}
            aria-current={active === i}
            className={`relative aspect-square w-20 shrink-0 overflow-hidden bg-ivory transition-all duration-200 md:w-full ${
              active === i
                ? "ring-1 ring-espresso ring-offset-2 ring-offset-ivory"
                : "ring-1 ring-sand-200 hover:ring-stone-300"
            }`}
          >
            <img
              alt=""
              aria-hidden="true"
              data-strk-img-id={img.id}
              data-strk-img={`[${product.descId}] [${product.titleId}] ${img.query}`}
              data-strk-img-ratio={img.ratio}
              data-strk-img-width="240"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </button>
        ))}
      </div>

      {/* Active image */}
      <div className="relative order-1 md:order-2 md:col-span-10">
        <div
          className="relative aspect-[4/5] overflow-hidden bg-ivory"
          data-gallery-active
        >
          <img
            key={all[active].id}
            alt={`${product.name} — view ${active + 1}`}
            data-strk-img-id={all[active].id}
            data-strk-img={`[${product.descId}] [${product.titleId}] ${all[active].query}`}
            data-strk-img-ratio={all[active].ratio}
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
            className="absolute inset-0 h-full w-full animate-fade-in object-cover"
          />
          <button
            type="button"
            onClick={prev}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-ivory-300/40 bg-ivory-50/80 text-espresso backdrop-blur-sm transition-colors hover:bg-ivory md:left-5"
          >
            <ChevronLeft className="h-4 w-4" strokeWidth={1.5} />
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next image"
            className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-ivory-300/40 bg-ivory-50/80 text-espresso backdrop-blur-sm transition-colors hover:bg-ivory md:right-5"
          >
            <ChevronRight className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  )
}
