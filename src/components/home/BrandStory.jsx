import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export default function BrandStory() {
  return (
    <section id="story" className="py-16 sm:py-24 bg-[#F8F5F2]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/5] bg-[#E8E0D8] overflow-hidden rounded-sm"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs text-[#8A7E72] uppercase tracking-widest text-center px-4">
                Jewelry Crafting / Workshop
              </span>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[#8A7E72] font-medium">
              Our Story
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#1C1C1C] leading-[1.1]">
              Designed with
              <br />
              <span className="italic">Intention</span>
            </h2>
            <div className="space-y-4 text-[#5C534A] leading-relaxed">
              <p>
                Velmora was born from a belief that fine jewelry should not be reserved for special occasions alone. 
                Every piece in our collection is designed to elevate the everyday — to make you feel adorned, 
                confident, and uniquely yourself.
              </p>
              <p>
                We work with master artisans who combine time-honored techniques with modern sensibility. 
                Each design undergoes rigorous quality testing to ensure it meets our standards for 
                longevity, comfort, and beauty.
              </p>
              <p>
                Our 18K gold plating is applied in generous micron layers over hypoallergenic base metals, 
                creating pieces that look and feel far more precious than their price suggests.
              </p>
            </div>
            <Link
              to="/shop"
              className="inline-block text-xs uppercase tracking-[0.2em] text-[#1C1C1C] border-b border-[#1C1C1C] pb-1 hover:text-[#C9A96E] hover:border-[#C9A96E] transition-colors mt-2"
            >
              Discover Our Collection
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
