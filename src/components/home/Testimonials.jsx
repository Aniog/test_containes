import { Star } from "lucide-react"
import { TESTIMONIALS } from "@/data/products"
import { useReveal } from "@/lib/useReveal"
import { useRef } from "react"

export default function Testimonials() {
  const containerRef = useRef(null)
  useReveal(containerRef, [])

  return (
    <section ref={containerRef} className="bg-cream py-20 sm:py-28 lg:py-32">
      <div className="container-editorial">
        <div className="reveal text-center mb-12 sm:mb-16">
          <p className="eyebrow">From Our Customers</p>
          <h2 className="font-serif text-[36px] sm:text-[48px] lg:text-[56px] mt-3 text-espresso">
            Loved, Daily
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={t.id}
              className="reveal flex flex-col bg-sand p-7 sm:p-9 border border-taupe-300/50"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-1 text-gold-500">
                {Array.from({ length: t.rating }).map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" strokeWidth={0} />
                ))}
              </div>
              <blockquote className="mt-5 font-serif text-[20px] sm:text-[22px] leading-[1.4] text-espresso flex-1">
                <span className="text-gold-500 mr-1">"</span>
                {t.quote}
                <span className="text-gold-500 ml-1">"</span>
              </blockquote>
              <figcaption className="mt-6 pt-5 border-t border-taupe-300/60">
                <p className="text-[13px] font-medium text-espresso">
                  {t.name}
                </p>
                <p className="text-[11px] uppercase tracking-wider-2 text-mocha-400 mt-0.5">
                  Verified · {t.location}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
