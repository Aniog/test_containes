import { Link } from "react-router-dom"
import { scenes } from "../../data/scenery.js"
import { ArrowRightIcon } from "../ui/Icons.jsx"

export default function BrandStory() {
  return (
    <section className="bg-ivory-soft">
      <div className="mx-auto max-w-editorial px-6 md:px-10 lg:px-16 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
          <div className="md:col-span-6 order-2 md:order-1">
            <div className="relative aspect-[4/5] overflow-hidden">
              <img
                src={scenes.story}
                alt="A piece from the Velmora atelier"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-6 order-1 md:order-2 md:pl-8">
            <p className="eyebrow">Our Story</p>
            <h2 className="display-serif text-[36px] md:text-[52px] mt-3 leading-[1.05] text-ink">
              Made slowly,
              <br />
              <span className="italic font-light">worn for years.</span>
            </h2>
            <p className="mt-6 text-[16px] text-ink/80 leading-relaxed max-w-prose font-light">
              Velmora began as a single sketchbook in a New York studio, a
              way to make the warmth of fine gold accessible without ever
              feeling anything less than considered. Every piece in our
              collection is hand-finished in small batches by a team of
              seven craftspeople we know by name.
            </p>
            <p className="mt-4 text-[16px] text-ink/80 leading-relaxed max-w-prose font-light">
              We work in 18K gold plate over a hypoallergenic brass core —
              the look and weight of fine jewelry, priced for everyday
              devotion.
            </p>
            <Link to="/about" className="mt-8 inline-flex items-center gap-2 text-[11px] tracking-eyebrow uppercase text-ink/85 hover:text-ink group">
              Read Our Story
              <ArrowRightIcon className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
