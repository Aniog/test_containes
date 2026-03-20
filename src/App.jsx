import React from 'react'
import { Heart, Flower2, Star, Sun } from 'lucide-react'

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 text-purple-300">
            <Flower2 size={40} />
          </div>
          <div className="absolute top-32 right-20 text-purple-300">
            <Flower2 size={30} />
          </div>
          <div className="absolute bottom-20 left-1/4 text-purple-300">
            <Flower2 size={35} />
          </div>
          <div className="absolute bottom-40 right-1/3 text-purple-300">
            <Flower2 size={25} />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            {/* Header */}
            <div className="mb-8">
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-purple-700/30 rounded-full backdrop-blur-sm border border-purple-400/20">
                  <Flower2 size={60} className="text-purple-200" />
                </div>
              </div>
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight">
                Tulips
              </h1>
              <p className="text-xl md:text-2xl text-purple-200 font-light">
                Nature's Perfect Symphony in Purple
              </p>
            </div>

            {/* Description */}
            <div className="mb-12 max-w-2xl mx-auto">
              <p className="text-lg text-purple-100 leading-relaxed mb-6">
                Discover the enchanting world of tulips, where elegance meets nature's artistry. 
                These magnificent flowers have captivated hearts for centuries with their graceful 
                petals and vibrant colors.
              </p>
              <div className="flex justify-center space-x-8 text-purple-300">
                <div className="flex items-center space-x-2">
                  <Sun size={20} />
                  <span>Spring Blooms</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart size={20} />
                  <span>Symbol of Love</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Star size={20} />
                  <span>Garden Beauty</span>
                </div>
              </div>
            </div>

            {/* Feature Cards */}
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-purple-200 mb-4">
                  <Flower2 size={40} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Elegant Beauty</h3>
                <p className="text-purple-200 text-sm leading-relaxed">
                  Tulips showcase nature's perfect design with their smooth, curved petals 
                  and graceful stems that dance in the spring breeze.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-purple-200 mb-4">
                  <Heart size={40} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Rich Heritage</h3>
                <p className="text-purple-200 text-sm leading-relaxed">
                  From the Ottoman Empire to Dutch gardens, tulips carry centuries 
                  of cultural significance and timeless appeal.
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-purple-200 mb-4">
                  <Star size={40} className="mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Garden Magic</h3>
                <p className="text-purple-200 text-sm leading-relaxed">
                  Transform any space into a magical garden with tulips' vibrant colors 
                  and their ability to herald the arrival of spring.
                </p>
              </div>
            </div>

            {/* Quote Section */}
            <div className="bg-gradient-to-r from-purple-800/40 to-indigo-800/40 backdrop-blur-sm rounded-3xl p-12 border border-purple-400/20 mb-16">
              <blockquote className="text-2xl md:text-3xl font-light text-white italic mb-4">
                "A tulip doesn't strive to impress anyone. It doesn't struggle to be different than a rose. 
                It just blooms, naturally and effortlessly."
              </blockquote>
              <cite className="text-purple-300 text-lg">— Nature's Wisdom</cite>
            </div>

            {/* Call to Action */}
            <div className="text-center">
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-semibold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Explore Tulip Gardens
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-purple-950/50 backdrop-blur-sm border-t border-purple-400/20 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-4">
            <Flower2 size={24} className="text-purple-400" />
          </div>
          <p className="text-purple-300 text-sm">
            © {currentYear} Tulips. Celebrating nature's beauty in every bloom.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
