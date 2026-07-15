import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import StrkImage from "@/components/ui/StrkImage"

export default function BrandStory() {
  return (
    <section className="bg-canvas py-20 md:py-28 lg:py-32">
      <div className="container-content grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16">
        <div className="md:col-span-6">
          <div className="relative overflow-hidden">
            <StrkImage
              id="brand-story-9c4d"
              query="[brand-story-body] [brand-story-title] hands of a jeweler crafting a fine gold piece in a warm studio"
              ratio="4x5"
              width={1000}
              alt="A Velmora jeweler hand-finishing a piece"
              fallback="bg-hairline/60"
            />
            {/* Decorative offset frame */}
            <div className="pointer-events-none absolute -bottom-5 -right-5 -z-10 hidden h-full w-full border border-gold md:block" />
          </div>
        </div>

        <div className="md:col-span-6">
          <p className="eyebrow">Our Story</p>
          <h2
            id="brand-story-title"
            className="display-lg mt-4 max-w-lg text-ink text-balance"
            style={{ fontSize: "clamp(40px, 5vw, 64px)" }}
          >
            Quietly made.
            <br />
            Worn for years.
          </h2>
          <p
            id="brand-story-body"
            className="mt-7 max-w-md text-base font-light leading-relaxed text-inkSoft md:text-lg"
          >
            Velmora began with a simple question — why does fine jewelry always
            feel out of reach, and why does costume jewelry never last? We
            started the brand to live between those two worlds: demi-fine 18K
            gold plated pieces, hand-finished in small batches, priced for the
            everyday and crafted to be treasured.
          </p>

          <ul className="mt-10 space-y-4">
            {[
              "18K gold plated recycled brass & sterling silver",
              "Hypoallergenic, lead-free, nickel-free",
              "Hand-finished in small batches",
              "Recyclable packaging, no plastic film",
            ].map((line) => (
              <li
                key={line}
                className="flex items-start gap-3 text-sm font-light text-ink"
              >
                <span className="mt-2 block h-px w-4 flex-shrink-0 bg-gold" />
                {line}
              </li>
            ))}
          </ul>

          <Link
            to="/about"
            className="link-underline mt-10 inline-flex items-center gap-2"
          >
            Read our story
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.6} />
          </Link>
        </div>
      </div>
    </section>
  )
}
