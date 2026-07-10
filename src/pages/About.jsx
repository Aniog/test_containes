import { Link } from "react-router-dom"
import { scenes } from "../data/scenery.js"
import { ArrowRightIcon } from "../components/ui/Icons.jsx"

export default function About() {
  return (
    <>
      <section className="bg-espresso text-ivory pt-36 md:pt-44 pb-20 md:pb-24">
        <div className="mx-auto max-w-editorial px-6 md:px-10 lg:px-16">
          <p className="eyebrow text-ivory/55">Our Story</p>
          <h1 className="display-serif text-[44px] md:text-[72px] mt-3 leading-[1.05] max-w-3xl">
            A small studio
            <br />
            <span className="italic font-light text-champagne-soft">with a long memory.</span>
          </h1>
        </div>
      </section>

      <section className="bg-ivory py-20 md:py-28">
        <div className="mx-auto max-w-editorial px-6 md:px-10 lg:px-16 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={scenes.story} alt="A piece from the Velmora atelier" className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="md:col-span-6 md:pl-8">
            <p className="eyebrow">Made slowly</p>
            <p className="mt-5 text-[17px] text-ink leading-relaxed font-light">
              Velmora began in 2019, in a single studio in the garment
              district, with a single sketchbook and a single belief: that
              the warmth of fine gold shouldn't be reserved for a handful
              of occasions a year.
            </p>
            <p className="mt-5 text-[17px] text-ink leading-relaxed font-light">
              Today we work with a team of seven craftspeople we know by
              name, in 18K gold plate over hypoallergenic brass — the
              weight and look of fine jewelry, at a price that lets you
              wear it daily.
            </p>
            <p className="mt-5 text-[17px] text-ink leading-relaxed font-light">
              Every piece is hand-finished in small batches. Every order
              is wrapped in our signature gift packaging. We believe
              jewelry should feel close — and stay close.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-ivory-soft py-20 md:py-28">
        <div className="mx-auto max-w-editorial px-6 md:px-10 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {[
              { k: "07", v: "Craftspeople in our atelier" },
              { k: "2019", v: "Year the studio was founded" },
              { k: "1,240+", v: "Pieces made by hand, monthly" },
            ].map((s) => (
              <div key={s.k} className="border-t border-hairline pt-8">
                <p className="font-serif text-[48px] md:text-[64px] text-ink leading-none">
                  {s.k}
                </p>
                <p className="mt-3 text-[12px] tracking-eyebrow uppercase text-muted">
                  {s.v}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Link to="/shop" className="btn-primary !w-auto">
              Shop the Collection
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
