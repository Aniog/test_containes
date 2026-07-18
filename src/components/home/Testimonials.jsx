import { Quote } from "lucide-react"
import Stars from "@/components/ui/Stars"

const REVIEWS = [
  {
    name: "Elena R.",
    text: "The Golden Sphere Huggies are my everyday pair now — they look far more expensive than they were. Comfortable and beautifully made.",
  },
  {
    name: "Maya T.",
    text: "Bought the Royal Heirloom Set as a gift and it arrived in the most gorgeous box. My mother was thrilled. The gold tone is so warm.",
  },
  {
    name: "Sofia L.",
    text: "I've worn the Vivid Aura cuff every day for three months and it hasn't tarnished at all. Quiet, elegant, exactly what I wanted.",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-10">
        <div className="mb-12 flex flex-col items-center text-center">
          <p className="text-[11px] uppercase tracking-widest2 text-champagne-deep">
            Loved By Thousands
          </p>
          <h2 className="mt-3 font-serif text-4xl md:text-5xl text-ink">
            What Our Customers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {REVIEWS.map((review) => (
            <figure
              key={review.name}
              className="flex flex-col items-center border border-line bg-sand/40 px-8 py-10 text-center"
            >
              <Quote size={26} strokeWidth={1} className="text-champagne" />
              <Stars rating={5} className="mt-4" size={14} />
              <blockquote className="mt-5 font-serif text-lg italic leading-relaxed text-ink">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-6 text-[11px] uppercase tracking-widest2 text-stone">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
