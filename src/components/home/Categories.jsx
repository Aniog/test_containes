import { Link } from "react-router-dom"
import { categories } from "@/data/products"
import { motion } from "framer-motion"

const catImages = {
  earrings: "gold earrings collection editorial warm light",
  necklaces: "gold necklace collection jewelry editorial",
  huggies: "gold huggie hoop earrings collection warm",
  sets: "gold jewelry gift set collection packaging velvet",
}

export default function Categories() {
  return (
    <section className="py-16 sm:py-24 bg-[#F8F5F2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-[#8A7E72] mb-3 font-medium">
            Explore
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C]">
            Shop by Category
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          {categories.slice(0, 3).map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <Link to={`/shop?category=${cat.id}`} className="group block relative aspect-[4/5] overflow-hidden rounded-sm bg-[#E8E0D8]">
                {/* Placeholder image */}
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-700 group-hover:scale-105">
                  <span className="text-xs text-[#8A7E72] uppercase tracking-widest text-center px-4">
                    {cat.name}
                  </span>
                </div>

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />

                {/* Label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-2xl sm:text-3xl text-[#1C1C1C] group-hover:text-white transition-colors duration-500 tracking-wide">
                    {cat.name}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
