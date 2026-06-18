import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
        {/* Image */}
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?w=800&q=80"
            alt="Velmora craftsmanship"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text */}
        <div className="max-w-md">
          <h2 className="font-serif text-3xl md:text-4xl text-charcoal font-light leading-tight">
            Designed with Intention, Crafted with Care
          </h2>
          <p className="font-sans text-sm text-warm-gray mt-6 leading-relaxed">
            Every Velmora piece begins as a sketch inspired by architecture, nature, and the quiet confidence of the women who wear them. We use only 18K gold plating over hypoallergenic metals, ensuring each piece is as kind to your skin as it is beautiful.
          </p>
          <p className="font-sans text-sm text-warm-gray mt-4 leading-relaxed">
            Our commitment to accessible luxury means you never have to choose between quality and price. These are pieces meant to be worn every day, layered with love, and passed along with pride.
          </p>
          <Link
            to="/about"
            className="inline-block mt-8 font-sans text-xs tracking-widest uppercase border-b border-accent text-accent pb-1 hover:opacity-70 transition-opacity duration-300"
          >
            Our Story
          </Link>
        </div>
      </div>
    </section>
  )
}
