import { useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
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
    <div ref={ref} className="page-fade bg-ivory pt-28 md:pt-32">
      <div className="container-x pb-20">
        <div className="max-w-2xl">
          <span className="eyebrow">Our Story</span>
          <h1
            id="about-title"
            className="h-section mt-3 text-5xl text-espresso md:text-6xl"
          >
            Jewelry, made <em className="not-italic text-gold">slowly</em>.
          </h1>
          <p className="mt-6 text-base leading-relaxed text-taupe md:text-lg">
            Velmora began with a single pair of huggies and a question: could
            we make jewelry that felt personal, lasting, and quietly beautiful
            — at a price that let you wear it every day?
          </p>
          <p className="mt-4 text-base leading-relaxed text-taupe md:text-lg">
            We work in small batches, with studios we know by name, finishing
            each piece in 18K gold over brass. Nothing mass-produced. Nothing
            disposable. Pieces we'd gift, and want to keep.
          </p>
          <Link to="/shop" className="btn-primary mt-10">
            Browse the Shop
            <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.5} />
          </Link>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand">
            <img
              alt="Studio workbench"
              data-strk-img-id="about-img-1-77b1"
              data-strk-img="[about-title] velmora studio bench tools gold"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="relative aspect-[4/5] overflow-hidden bg-sand">
            <img
              alt="Finished pieces"
              data-strk-img-id="about-img-2-77b1"
              data-strk-img="[about-title] velmora finished gold pieces"
              data-strk-img-ratio="4x5"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
