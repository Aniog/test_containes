import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useReveal } from "@/hooks/useReveal"

export default function About() {
  const [ref, visible] = useReveal()
  const imgRef = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, imgRef.current)
  }, [])

  return (
    <div className="bg-ink text-bone pt-24 md:pt-28">
      {/* Header */}
      <div className="mx-auto max-w-editorial px-6 md:px-10 py-12 md:py-20">
        <p
          id="about-eyebrow"
          className="text-[11px] tracking-widest3 uppercase text-bone/60"
        >
          Our Story
        </p>
        <h1
          id="about-title"
          className="mt-3 font-serif text-[44px] md:text-[80px] leading-[1.05] max-w-3xl"
        >
          Made slowly. Worn often.
        </h1>
      </div>

      {/* Split */}
      <div
        ref={ref}
        className={`reveal ${visible ? "is-visible" : ""} bg-bone-warm text-ink`}
      >
        <div className="mx-auto max-w-editorial px-6 md:px-10 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div
            ref={imgRef}
            className="md:col-span-6 relative aspect-[4/5] bg-umber overflow-hidden"
          >
            <div
              data-strk-bg-id="about-img-44d2ac"
              data-strk-bg="[about-subtitle] [about-title]"
              data-strk-bg-ratio="4x5"
              data-strk-bg-width="1200"
              className="absolute inset-0"
            />
          </div>

          <div className="md:col-span-6">
            <h2
              id="about-subtitle"
              className="font-serif text-[32px] md:text-[44px] leading-[1.1] text-ink"
            >
              A small studio with a long view.
            </h2>
            <div className="mt-6 space-y-5 text-[15px] md:text-[16px] leading-relaxed text-ink/75 max-w-lg">
              <p>
                Velmora began as a question: why does the jewelry we love most
                always feel out of reach? We set out to design pieces that
                feel quiet and considered — at a price that lets you wear
                them through the week, not just on special occasions.
              </p>
              <p>
                Every piece is hand-finished in our New York studio in small
                batches. We plate in 18K gold over a recycled base, polish by
                hand, and inspect each piece before it ships. We make less,
                and we make it well.
              </p>
              <p>
                We are a small team of three, a long list of trusted
                artisans, and one very particular eye for the warm glint of
                real gold.
              </p>
            </div>

            <Link
              to="/shop"
              className="mt-10 inline-flex items-center justify-center h-12 px-7 bg-ink text-bone text-[12px] tracking-widest2 uppercase hover:bg-gold hover:text-ink transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-ink text-bone">
        <div className="mx-auto max-w-editorial px-6 md:px-10 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                t: "Demi-fine, by design",
                p: "We work in 18K gold plating, gold vermeil, and sterling silver — the materials that let us make pieces that are real, wearable, and lasting.",
              },
              {
                t: "Small batches",
                p: "Each piece is finished in runs of fewer than 200. When it's gone, it's gone — until the next run.",
              },
              {
                t: "Made to be kept",
                p: "Hypoallergenic, tarnish-resistant, and designed to be worn every day. We hope ours become the pieces you never take off.",
              },
            ].map((v) => (
              <div key={v.t} className="border-t border-bone/15 pt-6">
                <h3 className="font-serif text-[24px] text-bone">{v.t}</h3>
                <p className="mt-3 text-[15px] text-bone/70 leading-relaxed">
                  {v.p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
