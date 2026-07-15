import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function Hero() {
  return (
    <section className="relative h-[100dvh] min-h-[600px] flex items-center justify-center overflow-hidden bg-[#1C1C1C]">
      {/* Background image placeholder */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60 z-10" />
        <div className="w-full h-full bg-[#2a2520] flex items-center justify-center">
          <span className="text-[#8A7E72] text-xs uppercase tracking-widest">Hero Image — Gold Jewelry on Model</span>
        </div>
      </div>

      <div className="relative z-20 text-center px-4 max-w-3xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/70 text-xs uppercase tracking-[0.25em] mb-5 font-medium"
        >
          Demi-Fine Jewelry
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[0.95] mb-6"
        >
          Crafted to be
          <br />
          <span className="italic">Treasured</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-white/60 text-sm sm:text-base max-w-md mx-auto mb-10 leading-relaxed"
        >
          Timeless 18K gold-plated pieces designed for everyday luxury and moments that matter.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <Link to="/shop">
            <Button className="bg-[#C9A96E] hover:bg-[#b8975e] text-white px-10 py-6 text-xs uppercase tracking-[0.2em] font-medium rounded-none h-auto">
              Shop the Collection
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-12 bg-white/30 relative overflow-hidden">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white/80"
          />
        </div>
      </motion.div>
    </section>
  )
}
