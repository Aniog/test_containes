import React from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero'

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      
      {/* Additional home content */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to PlayStation Hub</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Your ultimate destination for everything PlayStation. Discover the latest games, 
              stay updated with gaming news, find the best deals, and join the PlayStation community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🎮</div>
              <h3 className="text-xl font-bold mb-4">Latest Games</h3>
              <p className="text-gray-400 mb-6">
                Discover the newest PlayStation exclusives and third-party titles
              </p>
              <Link to="/store" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors inline-block">
                Browse Store
              </Link>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">📰</div>
              <h3 className="text-xl font-bold mb-4">Gaming News</h3>
              <p className="text-gray-400 mb-6">
                Stay updated with the latest PlayStation news and industry updates
              </p>
              <Link to="/news" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors inline-block">
                Read News
              </Link>
            </div>
            
            <div className="bg-gray-900 p-8 rounded-xl text-center hover:transform hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4">🏷️</div>
              <h3 className="text-xl font-bold mb-4">Hot Deals</h3>
              <p className="text-gray-400 mb-6">
                Find amazing discounts and limited-time offers on your favorite games
              </p>
              <Link to="/deals" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors inline-block">
                View Deals
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home