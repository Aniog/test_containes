import { Link } from 'react-router-dom';

export default function BrandStory() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Left */}
        <div className="relative aspect-square bg-velmora-cream overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=800&q=80"
            alt="Velmora jewelry craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Right */}
        <div>
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-6">
            Crafted with<br />Intention
          </h2>
          <div className="w-16 h-px bg-velmora-gold mb-6" />
          <p className="text-gray-600 mb-4 leading-relaxed">
            Every Velmora piece begins with a vision — to create jewelry that feels personal, 
            meaningful, and made to last. We believe that the pieces you wear should tell your story.
          </p>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Using 18K gold plating and hypoallergenic materials, we craft each design with 
            meticulous attention to detail, ensuring that every curve, every finish, and every 
            stone placement meets our exacting standards.
          </p>
          <Link
            to="/about"
            className="btn-secondary inline-block"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  );
}
