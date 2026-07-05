import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-muted">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=85"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mb-3 font-sans">
              About Velmora
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-light text-foreground leading-tight mb-6">
              Where Quality Meets
              <span className="italic"> Everyday Grace</span>
            </h2>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
              At Velmora, we believe fine jewelry shouldn't be reserved for special occasions.
              Every piece is crafted with care — 18K gold-plated, hypoallergenic, and designed
              to move through life with you. From morning coffee to evening soirées,
              our pieces are made to be worn, not just admired.
            </p>
            <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
              We source our materials thoughtfully and partner with skilled artisans who share
              our commitment to quality and timeless design.
            </p>
            <Link
              to="/about"
              className="inline-block text-sm tracking-[0.12em] uppercase text-foreground border-b border-foreground pb-0.5 hover:text-primary hover:border-primary transition-colors"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}