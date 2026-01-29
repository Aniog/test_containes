import React from 'react'
import Discounts from '../components/Discounts'

const DealsPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gradient-to-r from-red-900 via-purple-900 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text text-transparent">
            Hot Deals & Discounts
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Don't miss out on these incredible PlayStation game deals and limited-time offers
          </p>
        </div>
      </div>
      
      <Discounts />
      
      {/* Additional deals content */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Deal Categories</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Find the perfect deals in your favorite gaming categories
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🎮</div>
              <h3 className="text-lg font-bold mb-2">Action Games</h3>
              <p className="text-blue-100 text-sm mb-4">Up to 60% off</p>
              <button className="bg-white text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                View Deals
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🗡️</div>
              <h3 className="text-lg font-bold mb-2">RPG Games</h3>
              <p className="text-purple-100 text-sm mb-4">Up to 70% off</p>
              <button className="bg-white text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                View Deals
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-green-600 to-green-800 p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">🏎️</div>
              <h3 className="text-lg font-bold mb-2">Racing Games</h3>
              <p className="text-green-100 text-sm mb-4">Up to 50% off</p>
              <button className="bg-white text-green-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                View Deals
              </button>
            </div>
            
            <div className="bg-gradient-to-br from-red-600 to-red-800 p-6 rounded-xl text-center">
              <div className="text-3xl mb-3">⚽</div>
              <h3 className="text-lg font-bold mb-2">Sports Games</h3>
              <p className="text-red-100 text-sm mb-4">Up to 40% off</p>
              <button className="bg-white text-red-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors">
                View Deals
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DealsPage