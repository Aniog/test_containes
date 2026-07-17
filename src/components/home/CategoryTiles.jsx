import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function CategoryTiles() {
  const categories = [
    { name: "Earrings", slug: "Earrings", img: "gold earring close up editorial" },
    { name: "Necklaces", slug: "Necklaces", img: "gold necklace layer model" },
    { name: "Huggies", slug: "Huggies", img: "gold chunky huggie jewelry warm light" }
  ]

  return (
    <section className="py-24 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      {categories.map((cat, i) => (
        <Link key={i} to={`/shop?category=${cat.slug}`} className="group relative block aspect-[4/5] overflow-hidden bg-muted">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
            data-strk-bg-id={`cat-bg-${i}`}
            data-strk-bg={cat.img}
            data-strk-bg-ratio="4x5"
            data-strk-bg-width="800"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.h3 
              className="text-white text-[14px] uppercase tracking-[0.4em] font-semibold"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              {cat.name}
            </motion.h3>
          </div>
        </Link>
      ))}
    </section>
  )
}
