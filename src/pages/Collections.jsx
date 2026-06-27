import { Link } from "react-router-dom"

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"

const COLLECTIONS = [
  {
    id: "earrings",
    name: "The Earring Edit",
    desc: "Studs, drops & cuffs for every lobe.",
    to: "/shop?category=earrings",
    imgId: "coll-earrings-velmora-1",
    titleId: "coll-title-earrings",
    descId: "coll-desc-earrings",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    desc: "Pendants & layered chains at the collarbone.",
    to: "/shop?category=necklaces",
    imgId: "coll-necklaces-velmora-2",
    titleId: "coll-title-necklaces",
    descId: "coll-desc-necklaces",
  },
  {
    id: "huggies",
    name: "Huggies",
    desc: "Dome, pearl & crescent huggies that stay put.",
    to: "/shop?category=huggies",
    imgId: "coll-huggies-velmora-3",
    titleId: "coll-title-huggies",
    descId: "coll-desc-huggies",
  },
]

export default function Collections() {
  return (
    <div className="pt-16 sm:pt-20">
      <div className="border-b border-sand bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-14 text-center sm:px-8 sm:py-20">
          <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-gold">
            Curated by Kind
          </p>
          <h1 className="font-serif text-5xl font-light text-ink sm:text-6xl">
            Collections
          </h1>
          <p className="mx-auto mt-4 max-w-md text-sm text-muted">
            Explore our jewelry by category — each piece crafted to be treasured.
          </p>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-col gap-10 md:gap-16">
          {COLLECTIONS.map((c, i) => (
            <div
              key={c.id}
              className={`grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <Link
                to={c.to}
                className="group relative aspect-[4/3] overflow-hidden bg-cream"
              >
                <img
                  data-strk-img-id={c.imgId}
                  data-strk-img={`[${c.descId}] [${c.titleId}]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="900"
                  src={PLACEHOLDER}
                  alt={c.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </Link>
              <div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.28em] text-gold">
                  Collection 0{i + 1}
                </p>
                <h2
                  id={c.titleId}
                  className="font-serif text-4xl font-light text-ink sm:text-5xl"
                >
                  {c.name}
                </h2>
                <p id={c.descId} className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft">
                  {c.desc}
                </p>
                <Link
                  to={c.to}
                  className="mt-6 inline-flex items-center gap-2 border-b border-ink pb-1 text-[11px] uppercase tracking-[0.22em] text-ink transition-colors hover:border-gold hover:text-gold-deep"
                >
                  Shop {c.name}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
