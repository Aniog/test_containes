import React from 'react'

const ChristmasSpirit = () => {
  return (
    <div className="py-20 px-4 bg-gradient-to-br from-red-600 via-red-700 to-green-800 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            The Spirit of Christmas
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="text-4xl">❤️</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Love</h3>
                  <p className="text-green-100 leading-relaxed">
                    Christmas teaches us about unconditional love - the love God has for us and the love we should share with others.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-4xl">🤝</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Giving</h3>
                  <p className="text-green-100 leading-relaxed">
                    The joy of giving reflects the ultimate gift of Jesus Christ and reminds us that it's better to give than to receive.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-4xl">👨‍👩‍👧‍👦</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Family</h3>
                  <p className="text-green-100 leading-relaxed">
                    Christmas brings families together, creating precious memories and strengthening bonds that last a lifetime.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="text-4xl">🕊️</div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Peace</h3>
                  <p className="text-green-100 leading-relaxed">
                    The message of "Peace on Earth" reminds us to seek harmony and understanding with all people.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center space-y-8">
            <div className="bg-white bg-opacity-10 p-8 rounded-3xl backdrop-blur-sm">
              <div className="text-6xl mb-6">🌟</div>
              <blockquote className="text-2xl italic mb-6 leading-relaxed">
                "Christmas is not a time nor a season, but a state of mind. To cherish peace and goodwill, to be plenteous in mercy, is to have the real spirit of Christmas."
              </blockquote>
              <p className="text-yellow-200 font-medium">- Calvin Coolidge</p>
            </div>

            <div className="space-y-4">
              <h4 className="text-2xl font-bold">Ways to Share the Christmas Spirit</h4>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="bg-white bg-opacity-10 p-4 rounded-xl">
                  <div className="text-2xl mb-2">🎁</div>
                  <p>Donate to charity</p>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-xl">
                  <div className="text-2xl mb-2">🍲</div>
                  <p>Feed the hungry</p>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-xl">
                  <div className="text-2xl mb-2">👥</div>
                  <p>Visit the lonely</p>
                </div>
                <div className="bg-white bg-opacity-10 p-4 rounded-xl">
                  <div className="text-2xl mb-2">💝</div>
                  <p>Volunteer your time</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <div className="bg-white bg-opacity-10 p-12 rounded-3xl backdrop-blur-sm">
            <div className="text-5xl mb-6">🎄✨</div>
            <h3 className="text-3xl font-bold mb-6">Merry Christmas to All!</h3>
            <p className="text-xl text-green-100 leading-relaxed max-w-3xl mx-auto">
              May your Christmas be filled with the warmth of family, the joy of friends, 
              and the love of Jesus Christ. May the spirit of Christmas bring you peace, 
              happiness, and countless blessings throughout the coming year.
            </p>
            <div className="flex justify-center space-x-4 text-4xl mt-8">
              <span className="animate-bounce">🎅</span>
              <span className="animate-pulse">🤶</span>
              <span className="animate-bounce">🦌</span>
              <span className="animate-pulse">⛄</span>
              <span className="animate-bounce">🎁</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChristmasSpirit