import { StrkImage } from "@/components/ui/StrkImage"
import { useImageLoader } from "@/hooks/useImageLoader"
import { Link } from "react-router-dom"

export default function About() {
  const ref = useImageLoader([])
  return (
    <div ref={ref} className="pt-16 md:pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] overflow-hidden">
        <StrkImage
          imgId="about-hero-velmora-9d1f2e"
          query="[about-hero-sub] [about-hero-title] gold jewelry atelier craftsmanship"
          ratio="16x9"
          width={1920}
          alt="Velmora atelier"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-espresso/45" />
        <div className="relative h-full max-w-8xl mx-auto px-5 md:px-8 flex flex-col justify-end pb-14">
          <p className="text-cream/80 text-xs uppercase tracking-widest2 mb-4">
            Our Story
          </p>
          <h1
            id="about-hero-title"
            className="font-serif text-cream text-5xl md:text-7xl leading-[1.05]"
          >
            Crafted to be Treasured
          </h1>
          <p
            id="about-hero-sub"
            className="mt-5 text-cream/85 max-w-xl leading-relaxed"
          >
            A studio built on the belief that beautiful, lasting jewelry belongs
            to every day.
          </p>
        </div>
      </section>

      {/* Body */}
      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <p className="text-xs uppercase tracking-widest2 text-gold mb-4">
            Est. with intention
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso leading-tight">
            Quiet luxury, made to last
          </h2>
          <div className="mt-8 space-y-5 text-ink/80 leading-relaxed">
            <p>
              Velmora began with a simple belief: that beautiful, lasting jewelry
              should be part of every day, not saved for special occasions. We
              design each piece in our studio and craft it in 18K gold plating
              over solid brass — hypoallergenic, weighty in the hand, and made to
              be worn from morning to night.
            </p>
            <p>
              We work directly with our makers, cutting out the middlemen and the
              markups that define traditional fine jewelry. The result is a
              collection that feels heirloom-precious at a price that lets you
              build a wardrobe of pieces you will actually wear.
            </p>
            <p>
              No fleeting trends. No noise. Just considered design, honest
              materials, and the quiet confidence of jewelry made to be treasured.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 border-t border-line pt-10">
            {[
              { n: "18K", l: "Gold Plating" },
              { n: "30-Day", l: "Easy Returns" },
              { n: "100%", l: "Hypoallergenic" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p className="font-serif text-3xl md:text-4xl text-gold">{s.n}</p>
                <p className="mt-2 text-xs uppercase tracking-wide2 text-muted">
                  {s.l}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/shop"
              className="inline-flex items-center uppercase tracking-wide2 text-xs font-medium bg-espresso text-cream px-9 py-4 hover:bg-ink transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
