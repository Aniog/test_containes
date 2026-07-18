import React from 'react';

const categories = [
  {
    name: 'Earrings',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    href: '/shop?category=Earrings'
  },
  {
    name: 'Necklaces',
    image: 'https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80',
    href: '/shop?category=Necklaces'
  },
  {
    name: 'Huggies',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80',
    href: '/shop?category=Huggies'
  }
];

export default function CategoryTiles() {
  return (
    <section className="section-padding bg-white">
      <div className="container-velmora">
        <div className="text-center mb-16">
          <div className="w-16 h-px bg-gold mx-auto mb-6" />
          <h2 className="heading-serif text-4xl mb-4">Shop by Category</h2>
          <p className="body-text max-w-2xl mx-auto">
            Discover our curated collections, each piece designed to celebrate your unique style.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden aspect-[4/5] bg-cream-dark"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/30 group-hover:bg-charcoal/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-white text-3xl font-serif mb-4">{category.name}</h3>
                  <div className="w-12 h-px bg-white mx-auto mb-4 transition-all duration-500 group-hover:w-20" />
                  <span className="text-white text-sm tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    Shop Now
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
