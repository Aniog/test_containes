import { Link } from "react-router-dom"
import { useStrkImages } from "@/hooks/useStrkImages"

const tiles = [
  {
    id: "earrings",
    name: "Earrings",
    imgId: "cat-earrings-1a2b",
    titleId: "cat-earrings-title",
    descId: "cat-earrings-desc",
    desc: "Gold drop and statement earrings",
    to: "/shop?category=Earrings",
  },
  {
    id: "necklaces",
    name: "Necklaces",
    imgId: "cat-necklaces-3c4d",
    titleId: "cat-necklaces-title",
    descId: "cat-necklaces-desc",
    desc: "Fine gold chains and pendants",
    to: "/shop?category=Necklaces",
  },
  {
    id: "huggies",
    name: "Huggies",
    imgId: "cat-huggies-5e6f",
    titleId: "cat-huggies-title",
    descId: "cat-huggies-desc",
    desc: "Sculptural gold huggie earrings",
    to: "/shop?category=Huggies",
  },
]

export default function CategoryTiles() {
  const ref = useStrkImages([])

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-28">
      <div className="flex flex-col items-center text-center">
        <p className="text-[11px] font-medium uppercase tracking-[0.3em] text-gold">
          Explore
        </p>
        <h2 className="mt-3 font-serif text-4xl text-espresso md:text-5xl">
          Shop by Category
        </h2>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-3">
        {tiles.map((t) => (
          <Link
            key={t.id}
            to={t.to}
            className="group relative aspect-[4/5] overflow-hidden bg-cream"
          >
            <img
              alt={t.name}
              data-strk-img-id={t.imgId}
              data-strk-img={`[${t.descId}] [${t.titleId}]`}
              data-strk-img-ratio="4x5"
              data-strk-img-width="700"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-espresso/70 via-espresso/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7 text-center">
              <p id={t.titleId} className="sr-only">{t.name}</p>
              <p id={t.descId} className="sr-only">{t.desc}</p>
              <h3 className="font-serif text-3xl text-ivory transition-transform duration-500 group-hover:-translate-y-1">
                {t.name}
              </h3>
              <span className="mt-2 inline-block text-[11px] font-medium uppercase tracking-[0.2em] text-ivory/0 transition-colors duration-500 group-hover:text-gold">
                Shop Now
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
