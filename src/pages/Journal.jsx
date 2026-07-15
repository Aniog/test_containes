import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"
import { ImageHelper } from "@strikingly/sdk"
import strkImgConfig from "@/strk-img-config.json"
import { useReveal } from "@/lib/useReveal"

const POSTS = [
  {
    id: "j-1",
    category: "Style Guide",
    date: "Spring · 2026",
    title: "How to Stack Huggies Without Overdoing It",
    excerpt: "The art of layered earrings, from one pair to five — and how to make it look intentional every time.",
    imgId: "journal-1-1a01",
    titleId: "journal-post-1-title",
    excerptId: "journal-post-1-excerpt",
  },
  {
    id: "j-2",
    category: "Materials",
    date: "Spring · 2026",
    title: "What Demi-Fine Actually Means",
    excerpt: "A plain-English guide to gold plating, vermeil, and how to know what you're actually buying.",
    imgId: "journal-2-2b02",
    titleId: "journal-post-2-title",
    excerptId: "journal-post-2-excerpt",
  },
  {
    id: "j-3",
    category: "Behind the Scenes",
    date: "Winter · 2025",
    title: "Inside the Jaipur Workshop",
    excerpt: "The hands behind our filigree. A morning with the artisans who finish every Amber Lace piece by hand.",
    imgId: "journal-3-3c03",
    titleId: "journal-post-3-title",
    excerptId: "journal-post-3-excerpt",
  },
  {
    id: "j-4",
    category: "Gifting",
    date: "Winter · 2025",
    title: "Gifts That Don't Feel Generic",
    excerpt: "How to give jewelry that feels personal — without knowing someone's exact ring size.",
    imgId: "journal-4-4d04",
    titleId: "journal-post-4-title",
    excerptId: "journal-post-4-excerpt",
  },
]

export default function Journal() {
  const containerRef = useRef(null)
  useReveal(containerRef, [])

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <>
      <section className="bg-taupe-100 pt-32 sm:pt-40 pb-12 sm:pb-16">
        <div className="container-editorial">
          <p className="eyebrow">The Journal</p>
          <h1 className="font-serif text-[48px] sm:text-[64px] lg:text-[80px] mt-3 text-espresso">
            Stories, slowly.
          </h1>
          <p className="mt-5 text-[15px] sm:text-[16px] text-mocha-500 max-w-xl font-light">
            Style notes, materials guides, and the occasional letter from the
            studio. No noise.
          </p>
        </div>
      </section>

      <section ref={containerRef} className="bg-cream py-16 sm:py-24">
        <div className="container-editorial">
          {/* Featured (first) */}
          <article className="reveal grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center mb-20 sm:mb-28 pb-20 sm:pb-28 border-b border-taupe-300/50">
            <div className="lg:col-span-7">
              <Link to="/journal" className="block relative aspect-[16/10] overflow-hidden bg-taupe-100 group">
                <img
                  data-strk-img-id={POSTS[0].imgId}
                  data-strk-img={`[${POSTS[0].excerptId}] [${POSTS[0].titleId}] [velmora journal]`}
                  data-strk-img-ratio="16x10"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={POSTS[0].title}
                  className="w-full h-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-105"
                />
              </Link>
            </div>
            <div className="lg:col-span-5">
              <p className="eyebrow">{POSTS[0].category} · {POSTS[0].date}</p>
              <h2 id={POSTS[0].titleId} className="font-serif text-[32px] sm:text-[40px] mt-3 text-espresso leading-[1.1]">
                {POSTS[0].title}
              </h2>
              <p id={POSTS[0].excerptId} className="mt-5 text-[15px] text-mocha-500 font-light leading-relaxed">
                {POSTS[0].excerpt}
              </p>
              <Link to="/journal" className="link-underline mt-7 text-[12px] uppercase tracking-wider-3 font-medium">
                Read More
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </Link>
            </div>
          </article>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-14">
            {POSTS.slice(1).map((p, i) => (
              <article key={p.id} className="reveal group" style={{ transitionDelay: `${i * 80}ms` }}>
                <Link to="/journal" className="block relative aspect-[4/3] overflow-hidden bg-taupe-100">
                  <img
                    data-strk-img-id={p.imgId}
                    data-strk-img={`[${p.excerptId}] [${p.titleId}] [velmora journal]`}
                    data-strk-img-ratio="4x3"
                    data-strk-img-width="700"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] ease-editorial group-hover:scale-105"
                  />
                </Link>
                <p className="mt-5 text-[10px] uppercase tracking-wider-3 text-mocha-400 font-medium">
                  {p.category} · {p.date}
                </p>
                <h3 id={p.titleId} className="font-serif text-[22px] sm:text-[24px] mt-2 text-espresso leading-[1.2] group-hover:text-gold-600 transition-colors">
                  {p.title}
                </h3>
                <p id={p.excerptId} className="mt-3 text-[14px] text-mocha-500 font-light leading-relaxed">
                  {p.excerpt}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
