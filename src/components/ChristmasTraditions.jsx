import React from 'react'

const ChristmasTraditions = () => {
  const traditions = [
    {
      icon: '🎄',
      title: 'Christmas Tree',
      description: 'The evergreen tree symbolizes eternal life and is decorated with lights, ornaments, and topped with a star or angel.'
    },
    {
      icon: '🎁',
      title: 'Gift Giving',
      description: 'Exchanging presents represents the gifts brought by the wise men and God\'s gift of Jesus to the world.'
    },
    {
      icon: '🎵',
      title: 'Christmas Carols',
      description: 'Singing traditional songs that celebrate the birth of Jesus and spread joy throughout the community.'
    },
    {
      icon: '🍪',
      title: 'Christmas Cookies',
      description: 'Baking and sharing special treats brings families together and spreads sweetness during the season.'
    },
    {
      icon: '🕯️',
      title: 'Advent Candles',
      description: 'Lighting candles during Advent represents hope, peace, joy, and love leading up to Christmas.'
    },
    {
      icon: '⭐',
      title: 'Christmas Star',
      description: 'The star represents the Star of Bethlehem that guided the wise men to Jesus.'
    }
  ]

  return (
    <div className="py-20 px-4 bg-gradient-to-br from-green-50 to-red-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-red-700 mb-6">
            Christmas Traditions
          </h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Discover the beautiful traditions that make Christmas special around the world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {traditions.map((tradition, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:-translate-y-2"
            >
              <div className="text-center">
                <div className="text-6xl mb-6">{tradition.icon}</div>
                <h3 className="text-2xl font-bold text-green-800 mb-4">
                  {tradition.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {tradition.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white p-12 rounded-3xl shadow-xl">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-red-700 mb-8">
              Christmas Around the World
            </h3>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-4">
                <div className="text-4xl">🇺🇸</div>
                <h4 className="text-xl font-semibold text-green-700">United States</h4>
                <p className="text-gray-600">Santa Claus, Christmas stockings, and elaborate light displays</p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl">🇩🇪</div>
                <h4 className="text-xl font-semibold text-green-700">Germany</h4>
                <p className="text-gray-600">Christmas markets, advent calendars, and the Christmas tree tradition</p>
              </div>
              <div className="space-y-4">
                <div className="text-4xl">🇮🇹</div>
                <h4 className="text-xl font-semibold text-green-700">Italy</h4>
                <p className="text-gray-600">La Befana, nativity scenes, and the Feast of Seven Fishes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChristmasTraditions