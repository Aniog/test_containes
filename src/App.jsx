import React from 'react'
import { Heart, Flower, Sparkles } from 'lucide-react'

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-violet-50 to-purple-100">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500 text-white">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Flower className="w-16 h-16 text-purple-100 animate-pulse" />
              <Sparkles className="w-6 h-6 text-yellow-200 absolute -top-2 -right-2 animate-bounce" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
            Tulips
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
            Nature's most elegant spring messengers, bringing joy and color to the world
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-purple-50 to-transparent"></div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* About Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">The Beauty of Tulips</h2>
            <div className="w-24 h-1 bg-purple-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Tulips are among the most beloved flowers in the world, symbolizing perfect love, 
                elegance, and grace. These stunning spring blooms have captivated hearts for centuries 
                with their simple yet sophisticated beauty.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Originally from Central Asia, tulips found their way to the Netherlands where they 
                became a cultural icon. Today, they represent renewal, rebirth, and the promise 
                of warmer days ahead.
              </p>
              <div className="flex items-center gap-2 text-purple-600">
                <Heart className="w-5 h-5" />
                <span className="font-medium">Symbol of perfect love</span>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-200 to-violet-200 rounded-3xl p-8 shadow-lg">
                <div className="text-center">
                  <Flower className="w-24 h-24 text-purple-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Spring's Herald</h3>
                  <p className="text-gray-600">
                    First to bloom when winter fades, tulips announce the arrival of spring 
                    with their vibrant colors and graceful forms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Why We Love Tulips</h2>
            <div className="w-24 h-1 bg-purple-400 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Flower className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Elegant Simplicity</h3>
              <p className="text-gray-600 leading-relaxed">
                With their clean lines and perfect symmetry, tulips embody the beauty 
                of simplicity in nature's design.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100">
              <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-violet-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Vibrant Colors</h3>
              <p className="text-gray-600 leading-relaxed">
                From soft pastels to bold, saturated hues, tulips offer an incredible 
                spectrum of colors to brighten any space.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-purple-100">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Symbol of Love</h3>
              <p className="text-gray-600 leading-relaxed">
                Throughout history, tulips have been cherished as symbols of deep love, 
                making them perfect for expressing heartfelt emotions.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-purple-400 via-violet-400 to-purple-500 rounded-3xl p-12 text-white shadow-2xl">
            <Flower className="w-16 h-16 mx-auto mb-6 text-purple-100" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Embrace the Beauty of Spring
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Let tulips inspire you to find beauty in simplicity and joy in nature's 
              most elegant creations.
            </p>
            <div className="flex justify-center">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                <Heart className="w-5 h-5 text-purple-200" />
                <span className="font-medium">Spread the love</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-purple-100 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <div className="flex justify-center mb-4">
            <Flower className="w-8 h-8 text-purple-400" />
          </div>
          <p className="text-gray-600">
            © {currentYear} Tulips. Celebrating nature's beauty.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
