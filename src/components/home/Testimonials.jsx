import { useState } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { testimonials } from "@/data/products"
import Rating from "@/components/Rating"
import { useReveal } from "@/hooks/useReveal"
import { cn } from "@/lib/utils"

export default function Testimonials() {
  const [idx, setIdx] = useState(0)
  const ref = useReveal()

  const prev = () => setIdx((i) => (i === 0 ? testimonials.length - 1 : i - 1))
  const next = () => setIdx((i) => (i === testimonials.length - 1 ? 0 : i + 1))

  return (
    <section className="bg-ivory-100 py-20 sm:py-28 lg:py-32">
      <div className="max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-12">
        <div ref={ref} className="reveal text-center max-w-2xl mx-auto mb-14">
          <p className="eyebrow mb-3">Kind words</p>
          <h2 className="display-lg font-serif">Loved, worn, returned</h2>
        </div>

        {/* Mobile: stacked cards; Desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden">
          <TestimonialCard testimonial={testimonials[idx]} />
          <div className="mt-8 flex items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={prev}
              className="w-10 h-10 grid place-items-center border border-line text-espresso-800 hover:bg-espresso-800 hover:text-ivory transition-all"
            >
              <ChevronLeft className="w-4 h-4" strokeWidth={1.5} />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <span
                  key={i}
                  className={cn(
                    "h-px transition-all duration-300",
                    i === idx ? "w-6 bg-espresso-800" : "w-3 bg-taupe-300"
                  )}
                />
              ))}
            </div>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={next}
              className="w-10 h-10 grid place-items-center border border-line text-espresso-800 hover:bg-espresso-800 hover:text-ivory transition-all"
            >
              <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }) {
  return (
    <article className="bg-ivory-50 border border-line p-8 sm:p-10 flex flex-col h-full">
      <Quote className="w-6 h-6 text-gold-400 mb-6" strokeWidth={1.25} />
      <Rating value={testimonial.rating} showCount={false} size="sm" />
      <p className="mt-5 font-serif text-[1.25rem] sm:text-[1.35rem] leading-snug text-espresso-800 italic flex-1">
        "{testimonial.text}"
      </p>
      <div className="mt-6 pt-6 border-t border-line">
        <p className="product-name text-[0.68rem]">{testimonial.name}</p>
        <p className="text-[10px] tracking-[0.2em] uppercase text-taupe-500 mt-1.5">
          on {testimonial.product}
        </p>
      </div>
    </article>
  )
}
