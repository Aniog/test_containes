import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="section-padding bg-white">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="aspect-[4/5] rounded-sm overflow-hidden bg-stone-100">
            <img
              src="https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=800&q=80"
              alt="Velmora brand story"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-serif text-3xl md:text-4xl text-stone-900 mb-6">Our Story</h2>
            <p className="text-stone-600 leading-relaxed mb-6">
              Velmora was born from a belief that fine jewelry should feel accessible, personal, and timeless. 
              Each piece is designed in our London studio and crafted with care using 18K gold-plated materials 
              and ethically sourced crystals.
            </p>
            <p className="text-stone-600 leading-relaxed mb-8">
              We create jewelry for women who appreciate quiet luxury — pieces that feel special without trying too hard.
            </p>
            <Link to="/about" className="btn-outline">
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
