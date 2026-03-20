import React from 'react'
import { Heart, Flower, Sun, Sparkles } from 'lucide-react'

function App() {
  const currentYear = new Date().getFullYear()

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-pink-50 to-yellow-100">
      {/* Header */}
      <header className="relative overflow-hidden bg-gradient-to-r from-pink-400 via-yellow-300 to-pink-400 py-20">
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <Flower className="w-20 h-20 text-pink-600 animate-pulse" />
              <Sparkles className="w-8 h-8 text-yellow-400 absolute -top-2 -right-2 animate-bounce" />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-lg">
            Tulips
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            Discover the enchanting beauty of nature's most beloved spring flowers
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* About Section */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <Sun className="w-10 h-10 text-yellow-500" />
                The Magic of Tulips
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Tulips are among the most recognizable and beloved flowers in the world. 
                With their elegant cup-shaped blooms and vibrant colors, they herald the 
                arrival of spring and bring joy to gardens everywhere.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Originally from Central Asia, tulips have captured hearts across the globe 
                with their simple yet stunning beauty. Each bloom is a masterpiece of nature's 
                artistry, painted in hues that range from the softest pastels to the most 
                vibrant jewel tones.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-200 to-yellow-200 rounded-3xl p-8 shadow-2xl">
                <div className="text-center">
                  <Flower className="w-32 h-32 text-pink-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Spring's Herald</h3>
                  <p className="text-gray-600">
                    Tulips bloom in early spring, bringing color after winter's gray
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            Why We Love Tulips
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-pink-400">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Symbol of Love</h3>
              <p className="text-gray-600 leading-relaxed">
                Tulips represent perfect love and elegance, making them a favorite for 
                romantic gestures and special occasions.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-yellow-400">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6">
                <Sun className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Bright Colors</h3>
              <p className="text-gray-600 leading-relaxed">
                From sunny yellows to passionate pinks, tulips come in a rainbow 
                of colors to brighten any space.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-pink-400">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Easy to Grow</h3>
              <p className="text-gray-600 leading-relaxed">
                Tulips are surprisingly easy to cultivate, making them perfect 
                for both novice and experienced gardeners.
              </p>
            </div>
          </div>
        </section>

        {/* Color Showcase */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
            A Spectrum of Beauty
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-3xl p-12 text-center shadow-xl">
              <Flower className="w-24 h-24 text-yellow-700 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-yellow-800 mb-4">Golden Yellow</h3>
              <p className="text-yellow-700 text-lg">
                Bright and cheerful, yellow tulips symbolize sunshine, happiness, 
                and new beginnings. They're perfect for lifting spirits and 
                celebrating life's joyful moments.
              </p>
            </div>

            <div className="bg-gradient-to-br from-pink-200 to-pink-400 rounded-3xl p-12 text-center shadow-xl">
              <Flower className="w-24 h-24 text-pink-700 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-pink-800 mb-4">Soft Pink</h3>
              <p className="text-pink-700 text-lg">
                Gentle and romantic, pink tulips represent affection, caring, 
                and good wishes. They bring a touch of elegance and warmth 
                to any garden or bouquet.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-pink-400 via-yellow-300 to-pink-400 rounded-3xl p-16 shadow-2xl">
          <Flower className="w-16 h-16 text-white mx-auto mb-6 animate-bounce" />
          <h2 className="text-4xl font-bold text-white mb-6">
            Plant Your Own Tulip Garden
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the joy of watching these beautiful flowers bloom in your own space. 
            Start your tulip journey today and bring spring's magic to your doorstep.
          </p>
          <button className="bg-white text-pink-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-pink-50 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
            Get Started Today
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-6">
            <Flower className="w-12 h-12 text-pink-400" />
          </div>
          <p className="text-gray-300 mb-4">
            Celebrating the beauty of tulips and the joy they bring to our lives
          </p>
          <p className="text-gray-500">
            © {currentYear} Tulip Garden. Made with love for flower enthusiasts everywhere.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
