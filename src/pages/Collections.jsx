import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"

const COLLECTIONS = [
  {
    id: "the-essentials",
    title: "The Essentials",
    desc: "The five pieces every wardrobe starts with. Quiet, weightless, worn daily.",
    imgQuery: "minimal gold jewelry flat lay warm dark editorial",
    imgId: "col-essentials-img-77a3c1",
  },
  {
    id: "golden-hour",
    title: "Golden Hour",
    desc: "Crystal-set pieces made for the way the light catches at 6pm.",
    imgQuery: "crystal gold jewelry warm golden hour editorial flat lay",
    imgId: "col-goldenhour-img-44a82f",
  },
  {
    id: "the-gift-edit",
    title: "The Gift Edit",
    desc: "Gift-ready sets in keepsake boxes. Beautifully wrapped, ready to give.",
    imgQuery: "gold jewelry gift set in cream box with ribbon editorial",
    imgId: "col-gift-img-22b4d0",
  },
]

export default function Collections() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef} className="bg-ink text-bone pt-24 md:pt-28">
      <div className="mx-auto max-w-editorial px-6 md:px-10 py-12 md:py-20">
        <p
          id="collections-eyebrow"
          className="text-[11px] tracking-widest3 uppercase text-bone/60"
        >
          The Edit
        </p>
        <h1
          id="collections-title"
          className="mt-3 font-serif text-[44px] md:text-[80px] leading-[1.05] max-w-3xl"
        >
          Collections
        </h1>
        <p
          id="collections-sub"
          className="mt-4 text-[15px] md:text-[16px] text-bone/70 max-w-lg leading-relaxed"
        >
          Three small edits, each with its own mood. Begin with one — or wear
          them together.
        </p>
      </div>

      <div className="mx-auto max-w-editorial px-6 md:px-10 pb-24 space-y-6">
        {COLLECTIONS.map((c) => (
          <Link
            key={c.id}
            to="/shop"
            className="group block relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-umber"
          >
            <div
              data-strk-bg-id={c.imgId}
              data-strk-bg={c.imgQuery}
              data-strk-bg-ratio="21x9"
              data-strk-bg-width="1600"
              className="absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/30 to-transparent" />
            <div className="relative h-full p-8 md:p-14 flex flex-col justify-end max-w-xl">
              <p className="text-[11px] tracking-widest3 uppercase text-bone/80">
                Collection
              </p>
              <h2 className="mt-3 font-serif text-[40px] md:text-[60px] leading-[1.05] text-bone">
                {c.title}
              </h2>
              <p className="mt-3 text-[15px] text-bone/85 leading-relaxed">
                {c.desc}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-[12px] tracking-widest2 uppercase text-bone group-hover:text-gold transition-colors">
                Shop the collection
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
