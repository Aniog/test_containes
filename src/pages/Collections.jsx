import { Link } from "react-router-dom"
import { makeStrkImageLoaderRef } from "@/components/ui/StrkImage"
import { ArrowUpRight } from "lucide-react"
import Newsletter from "@/components/layout/Newsletter"

const COLLECTIONS = [
  {
    id: "everyday",
    title: "The Everyday Edit",
    subtitle: "Quiet staples, worn on repeat.",
    description:
      "Our most-loved huggies, studs, and layering necklaces — the pieces our community reaches for daily, year after year.",
    cta: "Shop Everyday",
    imgId: "collection-everyday",
    imageQuery: "woman gold jewelry everyday minimal huggies necklace editorial",
    href: "/shop?cat=huggies",
  },
  {
    id: "occasion",
    title: "For the Occasion",
    subtitle: "Statement pieces, made to be remembered.",
    description:
      "Crystal drops, floral pendants, and heirloom gift sets — for the weddings, the birthdays, and the Tuesday nights that matter.",
    cta: "Shop Occasion",
    imgId: "collection-occasion",
    imageQuery: "gold statement jewelry drop earrings crystal editorial occasion",
    href: "/shop?cat=earrings",
  },
  {
    id: "gifting",
    title: "Gifting, Made Beautiful",
    subtitle: "Heirloom sets, presented with care.",
    description:
      "Every Velmora order ships in our signature keepsake box with cream ribbon. The set that says: this was worth the moment.",
    cta: "Shop Gifts",
    imgId: "collection-gifting",
    imageQuery: "gold jewelry gift set keepsake box ribbon unboxing warm light",
    href: "/shop?cat=sets",
  },
]

export default function Collections() {
  return (
    <>
      {/* Hero */}
      <section className="bg-cream-50 pt-32 md:pt-40 pb-12 md:pb-20">
        <div className="mx-auto max-w-editorial px-5 md:px-10 text-center">
          <p className="eyebrow">Curated by Us</p>
          <h1
            id="collections-title"
            className="mt-4 font-serif text-5xl md:text-7xl text-espresso-800"
          >
            The Collections
          </h1>
          <p className="mt-5 text-ink-muted text-sm md:text-base max-w-md mx-auto leading-relaxed">
            Three edits for three lives — however you wear it.
          </p>
        </div>
      </section>

      <section ref={makeStrkImageLoaderRef()} className="bg-cream-50 pb-24 md:pb-32">
        <div className="mx-auto max-w-editorial px-5 md:px-10 space-y-16 md:space-y-24">
          {COLLECTIONS.map((c, i) => (
            <article
              key={c.id}
              className={`grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center ${
                i % 2 === 1 ? "md:[direction:rtl]" : ""
              }`}
            >
              <div
                id={`collection-${c.id}-title`}
                className={`md:col-span-7 ${
                  i % 2 === 1 ? "md:[direction:ltr]" : ""
                }`}
              >
                <Link
                  to={c.href}
                  className="group block relative aspect-[4/5] md:aspect-[5/6] overflow-hidden bg-cream-200"
                >
                  <img
                    data-strk-img-id={c.imgId}
                    data-strk-img={c.imageQuery}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="1200"
                    alt={c.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-espresso-800/10 group-hover:bg-espresso-800/20 transition-colors duration-500" />
                </Link>
              </div>
              <div
                className={`md:col-span-5 ${
                  i % 2 === 1 ? "md:[direction:ltr]" : ""
                }`}
              >
                <p className="eyebrow">{c.subtitle}</p>
                <h2
                  id={`collection-${c.id}-body`}
                  className="mt-4 font-serif text-4xl md:text-5xl text-espresso-800 leading-[1.05] text-balance"
                >
                  {c.title.split(",").map((part, idx, arr) => (
                    <span key={idx}>
                      {idx === arr.length - 1 ? <span className="italic">{part.trim()}</span> : part}
                      {idx < arr.length - 1 ? <>,<br /></> : null}
                    </span>
                  ))}
                </h2>
                <p className="mt-5 text-ink-muted text-sm md:text-base leading-relaxed max-w-md text-pretty">
                  {c.description}
                </p>
                <Link
                  to={c.href}
                  className="mt-8 link-underline inline-flex items-center gap-2"
                >
                  {c.cta}
                  <ArrowUpRight className="h-3 w-3" strokeWidth={1.6} />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <Newsletter />
    </>
  )
}
