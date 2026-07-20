import React from 'react'
import { Link } from 'react-router-dom'

const CategoryTiles = () => {
  const categories = [
    { title: "Earrings", id: "earrings", img: "gold earrings elegant portrait" },
    { title: "Necklaces", id: "necklaces", img: "gold necklace close up model" },
    { title: "Huggies", id: "huggies", img: "gold huggie earrings on ear close up" }
  ]

  return (
    <section className="py-24 px-6 lg:px-12 bg-white">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <Link 
              key={idx} 
              to={`/shop?category=${cat.id}`}
              className="group relative aspect-[4/5] overflow-hidden bg-background"
            >
              <img
                data-strk-img-id={`cat-tile-${cat.id}`}
                data-strk-img={`${cat.img} editorial luxury`}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 4 5'/%3E"
                alt={cat.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-all duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="text-center relative">
                    <h3 className="text-white text-3xl font-serif tracking-widest uppercase transition-transform duration-700 transform group-hover:-translate-y-2">
                        {cat.title}
                    </h3>
                    <div className="h-px w-0 bg-white mx-auto transition-all duration-700 group-hover:w-full mt-2" />
                 </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryTiles
