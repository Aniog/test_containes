import { products } from "@/data/products"
import ProductCard from "@/components/ProductCard"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function Bestsellers() {
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
            Most Loved
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C]">
            Bestsellers
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8 sm:gap-x-6 sm:gap-y-10">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/shop"
            className="inline-block text-xs uppercase tracking-[0.2em] text-[#1C1C1C] border-b border-[#1C1C1C] pb-1 hover:text-[#C9A96E] hover:border-[#C9A96E] transition-colors"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}
