import React from 'react'

const ChristmasPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-green-900">
      {/* Snowflakes Animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-white opacity-70 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              fontSize: `${Math.random() * 10 + 10}px`
            }}
          >
            ❄
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 drop-shadow-2xl">
              🎄 Christmas 🎄
            </h1>
            <p className="text-2xl md:text-3xl text-green-100 mb-8 font-light">
              The Most Wonderful Time of the Year
            </p>
            <div className="text-6xl mb-8 animate-bounce">
              🎅
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
            <p className="text-xl text-white leading-relaxed">
              Christmas is a time of joy, love, and togetherness. It's when families gather, 
              hearts are filled with warmth, and the spirit of giving brings out the best in humanity.
            </p>
          </div>
        </div>
      </section>

      {/* Christmas Story Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">🌟 The Christmas Story 🌟</h2>
            <p className="text-xl text-green-100">Celebrating the birth of Jesus Christ</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <h3 className="text-3xl font-bold text-white mb-6">The Nativity</h3>
              <p className="text-lg text-white leading-relaxed mb-4">
                Over 2,000 years ago, in the small town of Bethlehem, Jesus Christ was born. 
                This miraculous birth, foretold by prophets, brought hope and salvation to the world.
              </p>
              <p className="text-lg text-white leading-relaxed">
                Mary and Joseph, guided by divine providence, welcomed the Christ child in a humble manger, 
                surrounded by shepherds and wise men who came to worship the newborn King.
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-8xl mb-4">⭐</div>
              <div className="text-6xl mb-4">👼</div>
              <div className="text-8xl">🕊️</div>
            </div>
          </div>
        </div>
      </section>

      {/* Christmas Traditions Section */}
      <section className="relative z-10 py-20 px-4 bg-green-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">🎁 Christmas Traditions 🎁</h2>
            <p className="text-xl text-green-100">Celebrating together around the world</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
              <div className="text-6xl mb-4">🎄</div>
              <h3 className="text-2xl font-bold text-white mb-4">Christmas Tree</h3>
              <p className="text-white leading-relaxed">
                The evergreen tree symbolizes eternal life and hope. Families decorate it with lights, 
                ornaments, and a star or angel on top, creating a beautiful centerpiece for the season.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
              <div className="text-6xl mb-4">🎁</div>
              <h3 className="text-2xl font-bold text-white mb-4">Gift Giving</h3>
              <p className="text-white leading-relaxed">
                Inspired by the gifts of the wise men and the ultimate gift of Jesus, 
                we exchange presents to show love and appreciation for one another.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 text-center">
              <div className="text-6xl mb-4">🍪</div>
              <h3 className="text-2xl font-bold text-white mb-4">Christmas Feast</h3>
              <p className="text-white leading-relaxed">
                Families gather around tables filled with traditional foods, sharing meals 
                that bring warmth, joy, and create lasting memories together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Christmas Around the World */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">🌍 Christmas Around the World 🌍</h2>
            <p className="text-xl text-green-100">Different cultures, same joy</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-4xl mb-3">🇺🇸</div>
              <h4 className="text-lg font-bold text-white mb-2">United States</h4>
              <p className="text-sm text-white">Santa Claus, Christmas trees, and family gatherings</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-4xl mb-3">🇬🇧</div>
              <h4 className="text-lg font-bold text-white mb-2">United Kingdom</h4>
              <p className="text-sm text-white">Christmas crackers, Boxing Day, and Christmas pudding</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-4xl mb-3">🇩🇪</div>
              <h4 className="text-lg font-bold text-white mb-2">Germany</h4>
              <p className="text-sm text-white">Christmas markets, advent calendars, and stollen</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
              <div className="text-4xl mb-3">🇲🇽</div>
              <h4 className="text-lg font-bold text-white mb-2">Mexico</h4>
              <p className="text-sm text-white">Las Posadas, piñatas, and Nochebuena celebrations</p>
            </div>
          </div>
        </div>
      </section>

      {/* Christmas Spirit Section */}
      <section className="relative z-10 py-20 px-4 bg-red-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-8">✨ The Christmas Spirit ✨</h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div className="text-6xl mb-6">❤️</div>
            <p className="text-2xl text-white leading-relaxed mb-6">
              Christmas is more than just a holiday—it's a celebration of love, hope, and peace. 
              It reminds us to be kind to one another, to give generously, and to cherish 
              the precious moments we share with family and friends.
            </p>
            <p className="text-xl text-green-100">
              May your Christmas be filled with wonder, joy, and the warmth of loved ones.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 text-center">
        <div className="text-6xl mb-4">🎄✨🎅✨🎄</div>
        <p className="text-2xl text-white font-bold">Merry Christmas & Happy Holidays!</p>
        <p className="text-lg text-green-100 mt-2">Wishing you peace, love, and joy this Christmas season</p>
      </footer>
    </div>
  )
}

export default ChristmasPage