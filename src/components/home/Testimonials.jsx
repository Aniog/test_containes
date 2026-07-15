import { testimonials } from "@/data/products"
import { Star } from "lucide-react"
import { motion } from "framer-motion"

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#E8E0D8]/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A7E72] mb-3 font-medium">
            Reviews
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C]">
            What Our Customers Say
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-[#F8F5F2] p-8 sm:p-10 rounded-sm"
            >
              <div className="flex items-center gap-1 mb-5">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-[#C9A96E] text-[#C9A96E]" />
                ))}
              </div>
              <p className="text-[#5C534A] leading-relaxed mb-6 text-sm sm:text-base">
                "{review.text}"
              </p>
              <p className="text-xs uppercase tracking-[0.15em] text-[#1C1C1C] font-medium">
                {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
