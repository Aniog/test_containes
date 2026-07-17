import React from 'react'
import { Link } from 'react-router-dom'
import { categories } from '../../data/products'

const categoryImgs = {
  earrings: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="480" viewBox="0 0 600 480"%3E%3Crect fill="%2330241c"/%3E%3Ccircle cx="260" cy="200" r="60" fill="none" stroke="%23c2ab8d" stroke-width="2"/%3E%3Ccircle cx="340" cy="180" r="40" fill="none" stroke="%23deb874" stroke-width="1.5"/%3E%3Ctext x="300" y="330" text-anchor="middle" fill="%23c2ab8d" font-family="serif" font-size="28"%3EEarrings%3C/text%3E%3C/svg%3E',
  necklaces: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="480" viewBox="0 0 600 480"%3E%3Crect fill="%2330241c"/%3E%3Cpath d="M240 120 Q300 200 300 260 Q300 200 360 120" fill="none" stroke="%23c2ab8d" stroke-width="2.5"/%3E%3Ccircle cx="300" cy="280" r="10" fill="%23deb874"/%3E%3Ctext x="300" y="370" text-anchor="middle" fill="%23c2ab8d" font-family="serif" font-size="28"%3ENecklaces%3C/text%3E%3C/svg%3E',
  huggies: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="600" height="480" viewBox="0 0 600 480"%3E%3Crect fill="%2330241c"/%3E%3Ccircle cx="260" cy="220" r="55" fill="none" stroke="%23deb874" stroke-width="7"/%3E%3Ccircle cx="340" cy="220" r="55" fill="none" stroke="%23deb874" stroke-width="7"/%3E%3Ctext x="300" y="350" text-anchor="middle" fill="%23c2ab8d" font-family="serif" font-size="28"%3EHuggies%3C/text%3E%3C/svg%3E',
}

export default function CategoryTiles() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 lg:px-12 py-20 lg:py-28">
      <div className="text-center mb-14">
        <p className="text-[0.6875rem] tracking-[0.2em] uppercase text-velmora-muted font-medium mb-3">
          Shop By
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light tracking-wide">
          Category
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            to={`/shop?category=${cat.id}`}
            className="group relative aspect-[5/4] bg-velmora overflow-hidden"
          >
            <img
              src={categoryImgs[cat.id]}
              alt={cat.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-velmora/30 group-hover:bg-velmora/50 transition-colors duration-300 flex flex-col items-center justify-center">
              <h3 className="font-serif text-3xl lg:text-4xl text-white tracking-wide mb-1">{cat.name}</h3>
              <p className="text-white/50 text-xs tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                {cat.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
