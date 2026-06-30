import { Link } from 'react-router-dom'

export default function BrandStory() {
  return (
    <section className="py-16 lg:py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Image */}
          <div className="aspect-[4/5] overflow-hidden rounded-sm bg-brand-200">
            <img
              src="https://images.unsplash.com/photo-1585238342024-78d387f4a707?w=800&auto=format&fit=crop&q=80"
              alt="Crafting fine jewelry"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text */}
          <div className="max-w-md">
            <p className="text-xs tracking-[0.15em] uppercase text-brand-400 font-sans mb-3">
              Our Story
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-brand-900 tracking-wide leading-tight">
              Jewelry That Tells Your Story
            </h2>
            <div className="w-12 h-px bg-gold-500/50 my-6" />
            <p className="text-sm text-brand-600 leading-relaxed font-sans">
              Velmora was founded on a belief: that fine jewelry should not be reserved for 
              special occasions. Every piece is crafted in 18K gold, designed to move with 
              you through life&apos;s everyday moments — from morning coffee to evening celebrations.
            </p>
            <p className="text-sm text-brand-600 leading-relaxed font-sans mt-4">
              We work directly with master artisans, eliminating markups to bring you 
              heirloom-quality gold jewelry at accessible prices. Each piece arrives in 
              a keepsake box, ready to become part of your story.
            </p>
            <Link
              to="/about"
              className="inline-block mt-8 text-xs tracking-[0.15em] uppercase font-sans text-brand-800 border-b border-brand-400 pb-0.5 hover:text-brand-900 hover:border-brand-900 transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}