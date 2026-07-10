import { Link } from 'react-router-dom';
import { categories } from '../data/products';

const categoryImages = {
  earrings: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=1200&q=80',
  necklaces: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&q=80',
  huggies: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=1200&q=80'
};

export default function CollectionsPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: 'var(--cream)' }}>
      <section className="py-20 md:py-32" style={{ backgroundColor: 'var(--cream-dark)' }}>
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <p className="section-subheading">Explore</p>
            <h1 className="section-heading mb-6">Our Collections</h1>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--espresso-light)' }}>
              Discover our curated collections, each designed to help you express your unique style.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="space-y-16">
            {categories.map((category, index) => (
              <div 
                key={category.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div 
                    className="aspect-[4/3] rounded overflow-hidden"
                    style={{ backgroundColor: 'var(--cream-dark)' }}
                  >
                    <img
                      src={categoryImages[category.id]}
                      alt={category.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <p className="text-xs tracking-widest uppercase mb-4" style={{ color: 'var(--gold)' }}>
                    {category.description}
                  </p>
                  <h2 className="font-serif text-3xl md:text-4xl mb-4" style={{ color: 'var(--espresso-mid)' }}>
                    {category.name}
                  </h2>
                  <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--espresso-light)' }}>
                    Discover our stunning collection of {category.name.toLowerCase()}, featuring delicate designs and premium materials.
                  </p>
                  <Link 
                    to={`/shop?category=${category.id}`}
                    className="btn-secondary"
                  >
                    Shop {category.name}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
