import React from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"
import { StockImage } from "@/components/StockImage"
import { CATEGORIES } from "@/data/products"

const STORY = {
  earrings: {
    title: "The Earring Edit",
    text: "Cuffs, drops and filigree — frames for the face, from barely-there to candlelight-ready.",
  },
  necklaces: {
    title: "The Necklace Edit",
    text: "Fine chains and floral stations that sit at the collarbone and layer beautifully.",
  },
  huggies: {
    title: "The Huggie Edit",
    text: "Our signature sculptural domes — weightless, secure, and made to never take off.",
  },
}

export default function Collections() {
  return (
    <div className="pt-16 md:pt-20">
      <div className="border-b border-line bg-surface/60">
        <div className="mx-auto max-w-7xl px-5 py-12 md:px-8 md:py-16">
          <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent-deep">
            Collections
          </p>
          <h1 className="mt-3 font-serif text-4xl font-light text-foreground md:text-5xl">
            Three Edits, <span className="italic text-accent-deep">One Golden Thread</span>
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Every Velmora piece belongs to a small, deliberate edit — designed to be collected
            slowly and worn constantly.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl space-y-16 px-5 py-14 md:space-y-24 md:px-8 md:py-20">
        {CATEGORIES.map((cat, i) => (
          <div
            key={cat.id}
            className={`grid items-center gap-8 md:grid-cols-2 md:gap-14 ${
              i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
            }`}
          >
            <Link
              to={`/shop?category=${cat.id}`}
              className="group block aspect-[4/3] overflow-hidden bg-surface"
            >
              <StockImage
                imgId={`collections-${cat.id}-6b1d`}
                query={`${cat.label} ${STORY[cat.id].text} fine gold jewelry editorial still life warm neutral tones`}
                ratio="4x3"
                width={1000}
                alt={STORY[cat.id].title}
                className="transition-transform duration-700 ease-luxe group-hover:scale-[1.04]"
              />
            </Link>
            <div className={i % 2 === 1 ? "md:pr-8" : "md:pl-8"}>
              <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-accent-deep">
                {cat.label}
              </p>
              <h2 className="mt-3 font-serif text-3xl font-light text-foreground md:text-4xl">
                {STORY[cat.id].title}
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-muted-foreground">
                {STORY[cat.id].text}
              </p>
              <Link
                to={`/shop?category=${cat.id}`}
                className="mt-7 inline-flex items-center gap-2 border-b border-foreground/40 pb-1 text-[11px] font-medium uppercase tracking-[0.28em] text-foreground transition-colors hover:border-accent-deep hover:text-accent-deep"
              >
                Shop {cat.label}
                <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
