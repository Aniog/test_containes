import React, { useState, useEffect } from 'react'
import { Star, Crown, Sparkles, Moon, Sun, Castle } from 'lucide-react'
import './App.css'

function App() {
  const [isNight, setIsNight] = useState(false)
  const [sparkles, setSparkles] = useState([])

  useEffect(() => {
    // Generate random sparkles
    const generateSparkles = () => {
      const newSparkles = []
      for (let i = 0; i < 20; i++) {
        newSparkles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          delay: Math.random() * 3,
          duration: 2 + Math.random() * 2
        })
      }
      setSparkles(newSparkles)
    }
    generateSparkles()
  }, [])

  const toggleDayNight = () => {
    setIsNight(!isNight)
  }

  return (
    <div className={`min-h-screen transition-all duration-1000 ${
      isNight 
        ? 'bg-gradient-to-b from-indigo-900 via-purple-900 to-black' 
        : 'bg-gradient-to-b from-blue-400 via-blue-300 to-green-200'
    }`}>
      {/* Animated Sparkles */}
      {sparkles.map(sparkle => (
        <div
          key={sparkle.id}
          className="fixed pointer-events-none z-10"
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
            animation: `twinkle ${sparkle.duration}s infinite ${sparkle.delay}s`
          }}
        >
          <Sparkles className={`w-4 h-4 ${isNight ? 'text-yellow-300' : 'text-yellow-500'}`} />
        </div>
      ))}

      {/* Day/Night Toggle */}
      <button
        onClick={toggleDayNight}
        className="fixed top-6 right-6 z-20 p-3 rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30 transition-all duration-300 border border-white/30"
      >
        {isNight ? (
          <Sun className="w-6 h-6 text-yellow-300" />
        ) : (
          <Moon className="w-6 h-6 text-indigo-600" />
        )}
      </button>

      {/* Main Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 text-center">
          {/* Castle Icon */}
          <div className="mb-8 relative">
            <div className="absolute inset-0 animate-pulse">
              <Castle className={`w-32 h-32 mx-auto ${isNight ? 'text-purple-300' : 'text-purple-600'} opacity-50`} />
            </div>
            <Castle className={`w-32 h-32 mx-auto ${isNight ? 'text-purple-100' : 'text-purple-800'} relative z-10`} />
          </div>

          {/* Title */}
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 ${
            isNight ? 'text-white' : 'text-gray-800'
          } animate-bounce`}>
            <span className="inline-block">🏰</span>
            <span className="ml-4">Magic Castle</span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl md:text-2xl mb-12 max-w-2xl ${
            isNight ? 'text-purple-200' : 'text-purple-700'
          }`}>
            Welcome to the enchanted realm where dreams come true and magic fills the air
          </p>

          {/* Magical Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              <Crown className="w-5 h-5 inline mr-2 group-hover:animate-spin" />
              Enter the Castle
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full font-semibold hover:bg-white/30 transform hover:scale-105 transition-all duration-300 border border-white/30">
              <Star className="w-5 h-5 inline mr-2" />
              Cast a Spell
            </button>
          </div>
        </section>

        {/* Castle Features */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className={`text-4xl md:text-5xl font-bold text-center mb-16 ${
              isNight ? 'text-white' : 'text-gray-800'
            }`}>
              Magical Features
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Tower of Wisdom */}
              <div className="group">
                <div className={`p-8 rounded-2xl ${
                  isNight ? 'bg-white/10' : 'bg-white/50'
                } backdrop-blur-sm border ${
                  isNight ? 'border-white/20' : 'border-white/30'
                } hover:scale-105 transition-all duration-300 text-center`}>
                  <div className="text-6xl mb-4">🗼</div>
                  <h3 className={`text-2xl font-bold mb-4 ${
                    isNight ? 'text-white' : 'text-gray-800'
                  }`}>
                    Tower of Wisdom
                  </h3>
                  <p className={`${
                    isNight ? 'text-purple-200' : 'text-purple-700'
                  }`}>
                    Ancient knowledge and mystical scrolls await those brave enough to climb the spiral stairs
                  </p>
                </div>
              </div>

              {/* Enchanted Garden */}
              <div className="group">
                <div className={`p-8 rounded-2xl ${
                  isNight ? 'bg-white/10' : 'bg-white/50'
                } backdrop-blur-sm border ${
                  isNight ? 'border-white/20' : 'border-white/30'
                } hover:scale-105 transition-all duration-300 text-center`}>
                  <div className="text-6xl mb-4">🌸</div>
                  <h3 className={`text-2xl font-bold mb-4 ${
                    isNight ? 'text-white' : 'text-gray-800'
                  }`}>
                    Enchanted Garden
                  </h3>
                  <p className={`${
                    isNight ? 'text-purple-200' : 'text-purple-700'
                  }`}>
                    Magical flowers that bloom under moonlight and sing melodies in the morning breeze
                  </p>
                </div>
              </div>

              {/* Dragon's Lair */}
              <div className="group">
                <div className={`p-8 rounded-2xl ${
                  isNight ? 'bg-white/10' : 'bg-white/50'
                } backdrop-blur-sm border ${
                  isNight ? 'border-white/20' : 'border-white/30'
                } hover:scale-105 transition-all duration-300 text-center`}>
                  <div className="text-6xl mb-4">🐉</div>
                  <h3 className={`text-2xl font-bold mb-4 ${
                    isNight ? 'text-white' : 'text-gray-800'
                  }`}>
                    Dragon's Lair
                  </h3>
                  <p className={`${
                    isNight ? 'text-purple-200' : 'text-purple-700'
                  }`}>
                    Home to the friendly guardian dragon who protects the castle's greatest treasures
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Magical Creatures */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className={`text-4xl md:text-5xl font-bold mb-16 ${
              isNight ? 'text-white' : 'text-gray-800'
            }`}>
              Meet the Magical Inhabitants
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { emoji: '🧙‍♂️', name: 'Wizard Merlin', role: 'Castle Guardian' },
                { emoji: '🦄', name: 'Stardust', role: 'Unicorn Guide' },
                { emoji: '🧚‍♀️', name: 'Luna', role: 'Fairy Princess' },
                { emoji: '🦉', name: 'Hoot', role: 'Wise Owl' }
              ].map((creature, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl ${
                    isNight ? 'bg-white/10' : 'bg-white/40'
                  } backdrop-blur-sm border ${
                    isNight ? 'border-white/20' : 'border-white/30'
                  } hover:scale-110 transition-all duration-300 cursor-pointer`}
                >
                  <div className="text-4xl mb-3">{creature.emoji}</div>
                  <h3 className={`font-bold text-lg ${
                    isNight ? 'text-white' : 'text-gray-800'
                  }`}>
                    {creature.name}
                  </h3>
                  <p className={`text-sm ${
                    isNight ? 'text-purple-200' : 'text-purple-600'
                  }`}>
                    {creature.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center">
          <p className={`text-lg ${
            isNight ? 'text-purple-200' : 'text-purple-700'
          }`}>
            ✨ Where magic lives forever ✨
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
