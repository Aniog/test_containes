import { Link } from "react-router-dom";
import { EDITORIAL } from "@/data/products";
import Newsletter from "@/components/home/Newsletter";

export default function AboutPage() {
  return (
    <>
      <section className="pt-32 md:pt-40 bg-ivory">
        <div className="max-w-container mx-auto px-5 md:px-10 text-center pb-16 md:pb-24">
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted mb-4">
            Our story
          </p>
          <h1 className="font-serif text-5xl md:text-7xl tracking-tight max-w-3xl mx-auto leading-[1.05]">
            A small studio with
            <br />
            <em className="italic text-champagne-deep">a long-term view.</em>
          </h1>
          <p className="mt-8 text-muted max-w-2xl mx-auto text-lg leading-relaxed">
            Velmora started at a kitchen table in Lisbon. We make demi-fine
            jewelry in 18K gold plate — the pieces we always wanted to wear
            ourselves, at a price that lets you wear them every day.
          </p>
        </div>
      </section>

      <section className="bg-ivory pb-24">
        <div className="max-w-container mx-auto px-5 md:px-10">
          <div className="aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-sand">
            <img
              src={EDITORIAL.story.image}
              alt={EDITORIAL.story.alt}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-5 md:px-10 space-y-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
              What we believe
            </h2>
            <p className="mt-5 text-ink/80 leading-relaxed">
              The most-worn jewelry shouldn't be a luxury. We plate every piece
              in 18K gold over a brass core for the weight and feel of fine
              jewelry, without the four-figure price tag. We don't do seasons
              for the sake of seasons. We make the pieces that earn their place
              on your dresser — and stay there.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
              How we make it
            </h2>
            <p className="mt-5 text-ink/80 leading-relaxed">
              Every Velmora piece is sketched, plated, and finished by hand in
              small batches. We work with a single workshop outside Porto who
              has been plating jewelry for three generations. Nothing ships
              that we wouldn't wear ourselves.
            </p>
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl tracking-tight">
              What comes next
            </h2>
            <p className="mt-5 text-ink/80 leading-relaxed">
              We're a small team building Velmora slowly and intentionally. The
              next chapter is a recycled-gold capsule, a permanent repair
              program, and our first atelier store in Lisbon. Thank you for
              being here.
            </p>
          </div>
          <div className="pt-6">
            <Link
              to="/shop"
              className="inline-flex items-center gap-3 bg-ink text-ivory text-[12px] uppercase tracking-editorial px-8 py-4 hover:bg-champagne transition-colors"
            >
              Shop the collection
            </Link>
          </div>
        </div>
      </section>

      <Newsletter />
    </>
  );
}
