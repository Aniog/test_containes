import { Link } from 'react-router-dom'

const CategoryTiles = () => {
  const categories = [
    {
      name: 'Earrings',
      path: '/shop?category=earrings',
      image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    },
    {
      name: 'Necklaces',
      path: '/shop?category=necklaces',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80',
    },
    {
      name: 'Huggies',
      path: '/shop?category=huggies',
      image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    },
  ]

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-light tracking-wide font-serif text-gray-900 mb-2">
          Shop by Category
        </h2>
        <div className="w-16 h-px bg-amber-700 mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={category.path}
            className="group relative overflow-hidden aspect-square bg-gray-100"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300" />
            <div className="absolute inset-0 flex items-center justify-center">
              <h3 className="text-white text-2xl sm:text-3xl font-light tracking-[0.2em] uppercase font-serif">
                {category.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategoryTiles
