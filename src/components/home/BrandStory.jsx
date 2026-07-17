import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-velvet-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden bg-velvet-100">
            <img
              src="https://images.unsplash.com/photo-1611652022419-a9419f74325d?w=900&q=80"
              alt="Artisan jewelry craftsmanship"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-lg">
            <p className="font-sans text-xs tracking-widest uppercase text-gold-500 mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-ink-800 font-light leading-tight">
              Jewelry That Feels
              <span className="italic block mt-1">Like Yours</span>
            </h2>
            <div className="w-12 h-px bg-gold-400 my-6" />
            <p className="font-sans text-base text-ink-500 leading-relaxed mb-6">
              At Velmora, we believe fine jewelry shouldn&apos;t be reserved for special occasions. 
              Every piece is crafted in 18K gold plating with meticulous attention to detail, 
              designed to be worn daily and treasured forever.
            </p>
            <p className="font-sans text-base text-ink-500 leading-relaxed mb-8">
              From our hands to yours — responsibly sourced, thoughtfully made, and always 
              within reach.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center font-sans text-sm tracking-widest uppercase text-ink-800 border-b-2 border-ink-800 pb-0.5 hover:text-gold-600 hover:border-gold-600 transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}