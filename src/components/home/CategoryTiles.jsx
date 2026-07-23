import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const categories = [
  {
    name: "Earrings",
    image: "https://placehold.co/600x800/2C2416/C9A96E?text=Earrings",
  },
  {
    name: "Necklaces",
    image: "https://placehold.co/600x800/3A3020/C9A96E?text=Necklaces",
  },
  {
    name: "Huggies",
    image: "https://placehold.co/600x800/4A3E2E/C9A96E?text=Huggies",
  },
];

export default function CategoryTiles() {
  return (
    <section className="py-20 lg:py-28 bg-ivory">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs uppercase tracking-[0.3em] text-gold font-medium mb-3">
            Explore
          </p>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-espresso">
            Shop by Category
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to="/shop"
                className="group relative block overflow-hidden aspect-[3/4] bg-cream"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/30 transition-colors duration-500" />
                {/* Label */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-2xl md:text-3xl text-white uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {cat.name}
                  </span>
                </div>
                {/* Bottom label always visible */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-espresso/60 to-transparent group-hover:opacity-0 transition-opacity duration-500">
                  <span className="font-serif text-lg text-white uppercase tracking-widest">
                    {cat.name}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
