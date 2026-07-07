import { Link } from 'react-router-dom'

const CATEGORIES = [
  { id: 'cat-earrings', title: 'Earrings', query: 'gold earrings drop earrings editorial close up' },
  { id: 'cat-necklaces', title: 'Necklaces', query: 'gold delicate necklace layering woman collarbone' },
  { id: 'cat-huggies', title: 'Huggies', query: 'small gold huggie hoop earrings close up ear' }
]

export const Categories = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
          {CATEGORIES.map((category) => (
            <Link 
              key={category.id} 
              to={`/shop?category=${category.title.toLowerCase()}`}
              className="relative aspect-square md:aspect-[4/5] overflow-hidden group block bg-secondary"
            >
              <img 
                data-strk-img-id={category.id}
                data-strk-img={category.query}
                data-strk-img-ratio="4x5"
                data-strk-img-width="800"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt={`Shop ${category.title}`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/40" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="font-serif text-3xl md:text-4xl text-white tracking-widest uppercase opacity-90 transform translate-y-4 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {category.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}