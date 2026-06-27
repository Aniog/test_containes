import { useEffect, useRef } from "react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import Reveal from "@/components/ui/Reveal"

const POSTS = [
  {
    id: "post-styling",
    eyebrow: "Styling",
    title: "How to Layer Necklaces Without the Tangle",
    excerpt:
      "Three simple rules our founder swears by — and the chains she reaches for every morning.",
    query: "layered gold necklaces on woman editorial warm tones",
  },
  {
    id: "post-care",
    eyebrow: "Care",
    title: "Keeping Your Gold Plated Jewelry Bright",
    excerpt:
      "A 30-second nightly ritual that will keep your pieces looking freshly unboxed.",
    query: "polishing gold jewelry cloth close up warm light",
  },
  {
    id: "post-gifting",
    eyebrow: "Gifting",
    title: "A Quiet Guide to Gifting Jewelry",
    excerpt:
      "How to choose something she’ll wear every day — without asking for a hint.",
    query: "gift wrapped jewelry box velvet ribbon warm editorial",
  },
  {
    id: "post-ear-stack",
    eyebrow: "Inspiration",
    title: "Five Ear Stacks We Keep Coming Back To",
    excerpt:
      "From one statement piece to a constellation of huggies — five editor-tested stacks.",
    query: "ear stack gold earrings portrait editorial warm",
  },
  {
    id: "post-everyday",
    eyebrow: "Rituals",
    title: "The Velmora Morning",
    excerpt:
      "A glimpse into how our team gets ready — the three pieces that always make the cut.",
    query: "morning jewelry getting ready close up warm",
  },
  {
    id: "post-materials",
    eyebrow: "Behind the Seams",
    title: "What Demi-Fine Really Means",
    excerpt:
      "A transparent look at our metals, platings, and why we’ll never use mystery alloy.",
    query: "jewelry materials gold plating workshop close up",
  },
]

export default function Journal() {
  const containerRef = useRef(null)

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <div ref={containerRef} className="bg-ivory">
      <section className="bg-ivory-soft border-b border-hairline">
        <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-32 md:pt-40 pb-14 text-center">
          <span className="eyebrow">The Journal</span>
          <h1 className="mt-3 font-serif text-4xl md:text-6xl text-espresso tracking-tight">
            Notes from the Atelier
          </h1>
          <p className="mt-4 text-sm md:text-base text-muted max-w-md mx-auto">
            Quiet stories on styling, gifting, and the pieces we can’t stop wearing.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-6 md:px-10 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {POSTS.map((post, idx) => (
            <Reveal key={post.id} delay={idx * 60}>
              <article className="group cursor-pointer">
                <div className="aspect-[4/5] overflow-hidden bg-ivory-soft">
                  <img
                    data-strk-img-id={post.id}
                    data-strk-img={post.query}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="700"
                    alt={post.title}
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="h-full w-full object-cover transition-transform duration-[1000ms] group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="mt-5">
                  <span className="eyebrow">{post.eyebrow}</span>
                  <h2 className="mt-3 font-serif text-2xl text-espresso leading-snug group-hover:text-gold-deep transition-colors">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-[11px] uppercase tracking-[0.22em] text-espresso">
                    Read More <span>→</span>
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  )
}