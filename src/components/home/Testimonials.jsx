import { Star } from "lucide-react"
import testimonials from "@/data/testimonials"

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-velvet-50/50">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-10 lg:mb-14">
          <h2 className="font-serif text-3xl lg:text-4xl text-midnight-900 mb-2">
            Loved by Thousands
          </h2>
          <div className="w-12 h-[1px] bg-gold-400 mx-auto" />
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-6 lg:p-8 rounded-sm border border-velvet-100"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className="fill-gold-400 text-gold-400"
                  />
                ))}
              </div>
              <p className="text-sm text-velvet-600 leading-relaxed mb-4 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <p className="text-xs tracking-widest uppercase text-midnight-900">
                {t.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}