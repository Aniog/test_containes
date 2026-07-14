import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowUpRight } from "lucide-react"

const tiles = [
  {
    id: "tile-earrings",
    to: "/shop?cat=earrings",
    eyebrow: "Earrings",
    title: "Earrings",
    desc: "Studs, cuffs, and drops — designed to be worn, not stored.",
    imgId: "home-tile-earrings-1a2b",
  },
  {
    id: "tile-necklaces",
    to: "/shop?cat=necklaces",
    eyebrow: "Necklaces",
    title: "Necklaces",
    desc: "Delicate chains, considered pendants — quiet additions.",
    imgId: "home-tile-necklaces-1a2b",
  },
  {
    id: "tile-huggies",
    to: "/shop?cat=huggies",
    eyebrow: "Huggies",
    title: "Huggies",
    desc: "The pair you forget you're wearing. The pair you can't forget.",
    imgId: "home-tile-huggies-1a2b",
  },
]

export default function CategoryTiles() {
  const ref = useRef(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const mod = await import("@strikingly/sdk")
        const cfgMod = await import("@/strk-img-config.json")
        if (cancelled) return
        if (mod?.ImageHelper?.loadImages) {
          mod.ImageHelper.loadImages(cfgMod.default || cfgMod, ref.current)
        }
      } catch (e) {}
    })()
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section ref={ref} className="bg-ivory py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-xl">
          <span className="eyebrow">Shop By Category</span>
          <h2
            id="home-categories-title"
            className="h-section mt-3 text-4xl text-espresso md:text-5xl"
          >
            Find your <em className="not-italic text-gold">everyday</em>.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {tiles.map((t) => (
            <Link
              key={t.id}
              to={t.to}
              className="group relative block aspect-[4/5] overflow-hidden bg-espresso"
            >
              <img
                alt={t.title}
                data-strk-img-id={t.imgId}
                data-strk-img={`[${t.id}-title] [${t.id}-desc] velmora ${t.title.toLowerCase()} gold jewelry`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="900"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-editorial group-hover:scale-[1.05]"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(31,26,20,0.05) 30%, rgba(31,26,20,0.65) 100%)",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                <span className="font-sans text-[10px] uppercase tracking-[0.22em] text-gold/90">
                  {t.eyebrow}
                </span>
                <h3
                  id={`${t.id}-title`}
                  className="font-serif text-3xl text-ivory md:text-4xl"
                >
                  {t.title}
                </h3>
                <p
                  id={`${t.id}-desc`}
                  className="mt-2 max-w-xs text-sm text-ivory/80"
                >
                  {t.desc}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 font-sans text-[11px] uppercase tracking-[0.22em] text-ivory transition-colors group-hover:text-gold">
                  Shop {t.title}
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.5} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
