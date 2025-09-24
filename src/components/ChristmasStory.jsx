import React from 'react'

const ChristmasStory = () => {
  return (
    <div className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
            The Story of Christmas
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="text-6xl text-center md:text-left">🌟</div>
            <h3 className="text-2xl md:text-3xl font-semibold text-green-700 mb-4">
              A Night of Wonder
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Over two thousand years ago, in the small town of Bethlehem, a miraculous event 
              changed the world forever. On a silent, holy night, Jesus Christ was born, 
              bringing hope, love, and salvation to humanity.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The story tells of Mary and Joseph's journey, the humble stable where Jesus was born, 
              and the shepherds who were visited by angels announcing the good news. Wise men from 
              the East followed a bright star to find the newborn King, bringing gifts of gold, 
              frankincense, and myrrh.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg">
            <div className="text-center space-y-6">
              <div className="text-5xl">👼</div>
              <blockquote className="text-xl italic text-gray-800 leading-relaxed">
                "Glory to God in the highest, and on earth peace, good will toward men."
              </blockquote>
              <p className="text-gray-600 font-medium">- Luke 2:14</p>
              
              <div className="flex justify-center space-x-4 text-3xl mt-8">
                <span>🐑</span>
                <span>⭐</span>
                <span>👑</span>
                <span>🎁</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-red-50 p-8 rounded-2xl max-w-4xl mx-auto">
            <h4 className="text-2xl font-semibold text-red-700 mb-4">
              The Message of Christmas
            </h4>
            <p className="text-lg text-gray-700 leading-relaxed">
              Christmas reminds us of God's greatest gift to the world - His love made manifest 
              through Jesus Christ. It's a celebration of hope, peace, joy, and love that 
              transcends all boundaries and brings people together in the spirit of giving and compassion.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChristmasStory