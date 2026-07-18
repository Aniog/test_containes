import React from 'react'
import { Link } from 'react-router-dom'

const CategoryTiles = () => {
  const categories = [
    {
      name: 'Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=80',
      filter: 'Earrings',
    },
    {
      name: 'Necklaces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80',
      filter: 'Necklaces',
    },
    {
      name: 'Huggies',
      image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=900&q=80',
      filter: 'Huggies',
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-16 md:py-20">
      <div className="mb-10">
        <div className="uppercase tracking-[0.15em] text-xs text-vel-gold mb-2">Find Your Piece</div>
        <h2 className="heading-serif text-4xl md:text-5xl tracking-[-0.01em]">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/shop?category=${cat.filter}`}
            className="category-tile group rounded-sm overflow-hidden"
          >
            <img src={cat.image} alt={cat.name} className="w-full h-full object-cover" />
            <div className="category-label">
              {cat.name}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategoryTiles
