import { Link } from 'react-router-dom'

const BrandStory = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80"
              alt="Velmora jewelry craftsmanship"
              className="w-full h-[500px] object-cover"
            />
          </div>

          {/* Text */}
          <div className="space-y-6">
            <h2 className="text-3xl sm:text-4xl font-light tracking-wide font-serif text-gray-900">
              Our Story
            </h2>
            <div className="w-16 h-px bg-amber-700" />
            <p className="text-gray-600 font-light leading-relaxed text-lg">
              Velmora was born from a simple belief: luxury should be accessible, and jewelry should be worn, not stored. We create demi-fine pieces that bridge the gap between precious and playful.
            </p>
            <p className="text-gray-600 font-light leading-relaxed">
              Each piece is crafted with 18K gold plating over high-quality brass, designed to last through everyday moments and mark life's milestones. From morning coffee to evening celebrations, Velmora is there with you.
            </p>
            <Link
              to="/about"
              className="inline-block border-b border-gray-900 text-gray-900 pb-1 text-sm tracking-wide uppercase font-light hover:border-amber-700 hover:text-amber-700 transition-colors"
            >
              Discover Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BrandStory
