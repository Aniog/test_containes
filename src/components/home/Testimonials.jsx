import { Quote } from "lucide-react"
import StarRating from "@/components/ui/StarRating"
import { TESTIMONIALS } from "@/lib/products"

export default function Testimonials() {
  return (
    <section className="section bg-cream reveal" id="testimonials">
      <div className="max-w-8xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="text-center max-w-xl mx-auto mb-12 md:mb-16">
          <p className="eyebrow text-gold">What They Say</p>
          <h2 className="mt-3 font-serif text-ink text-[clamp(2rem,4.5vw,3.5rem)] leading-[1.05]">
            <span className="italic font-normal">Worn, gifted,</span> and loved.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="bg-paper border border-hairline p-7 md:p-9 flex flex-col"
            >
              <Quote size={22} strokeWidth={1.5} className="text-gold mb-5" />
              <blockquote className="font-serif text-ink text-[19px] md:text-[20px] leading-snug flex-1">
                "{t.text}"
              </blockquote>
              <figcaption className="mt-7 pt-6 border-t border-hairline flex items-center justify-between">
                <div>
                  <p className="eyebrow text-ink">{t.name}</p>
                  <p className="text-[11px] text-muted-soft mt-1">Verified Buyer</p>
                </div>
                <StarRating value={t.rating} size={12} />
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
