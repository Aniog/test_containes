import React from 'react'
import { Link } from 'react-router-dom'

const CategoryTiles = () => {
  const categories = [
    {
      name: 'Earrings',
      path: '/shop?category=Earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=900&q=80'
    },
    {
      name: 'Necklaces',
      path: '/shop?category=Necklaces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=900&q=80'
    },
    {
      name: 'Huggies',
      path: '/shop?category=Huggies',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=900&q=80'
    }
  ]

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="mb-10">
        <span className="text-xs tracking-[0.15em] uppercase text-velmora-gold">Find Your Piece</span>
        <h2 className="serif text-4xl mt-2">Shop by Category</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {categories.map((cat) => (
          <Link 
            key={cat.name} 
            to={cat.path}
            className="category-tile aspect-[16/10] md:aspect-[4/3] rounded-sm block"
          >
            <img 
              src={cat.image} 
              alt={cat.name}
              className="w-full h-full object-cover"
            />
            <div className="overlay" />
            <span className="label">{cat.name}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategoryTiles
