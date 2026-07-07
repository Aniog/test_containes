import React from 'react'
import { Link } from 'react-router-dom'

const CategoryTiles = () => {
  const categories = [
    {
      name: "Earrings",
      slug: "Earrings",
      img: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80",
    },
    {
      name: "Necklaces",
      slug: "Necklaces",
      img: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80",
    },
    {
      name: "Huggies",
      slug: "Huggies",
      img: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=800&q=80",
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-12">
        <div className="text-xs tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-2">Discover</div>
        <h2 className="serif text-4xl tracking-[-0.01em]">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link 
            key={cat.slug} 
            to={`/shop?category=${cat.slug}`}
            className="category-tile group rounded-sm overflow-hidden"
          >
            <img src={cat.img} alt={cat.name} />
            <div className="category-label group-hover:opacity-100">
              {cat.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategoryTiles
