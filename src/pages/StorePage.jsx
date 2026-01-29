import React from 'react'
import Store from '../components/Store'

const StorePage = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            PlayStation Store
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Discover amazing PlayStation games with exclusive deals and discounts
          </p>
        </div>
      </div>
      
      <Store />
      
      {/* Additional store content */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Shop With Us?</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Get the best gaming experience with our exclusive features
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-4">Instant Download</h3>
              <p className="text-gray-400">
                Download and play your games immediately after purchase
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl text-center">
              <div className="text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font-bold mb-4">Secure Payment</h3>
              <p className="text-gray-400">
                Safe and secure payment processing with multiple options
              </p>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl text-center">
              <div className="text-4xl mb-4">🎁</div>
              <h3 className="text-xl font-bold mb-4">Exclusive Bonuses</h3>
              <p className="text-gray-400">
                Get exclusive in-game content and bonuses with select purchases
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default StorePage