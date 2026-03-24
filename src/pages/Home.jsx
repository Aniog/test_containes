import React from 'react'
import Layout from '@/components/layout/Layout'
import FeaturedGames from '@/components/games/FeaturedGames'
import LatestNews from '@/components/news/LatestNews'
import HotDeals from '@/components/games/HotDeals'
import { TrendingUp, Zap, Newspaper, Star, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Ultimate Gaming
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Destination
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Discover the latest games, read expert reviews, find the best deals, and stay updated with gaming news from all platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
              <Star className="h-5 w-5" />
              <span>Browse Featured Games</span>
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2">
              <Zap className="h-5 w-5" />
              <span>View Hot Deals</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const StatsSection = () => {
  const stats = [
    { label: 'Games Available', value: '10,000+', icon: Star },
    { label: 'Daily Deals', value: '50+', icon: Zap },
    { label: 'News Articles', value: '1,000+', icon: Newspaper },
    { label: 'Platforms Covered', value: '5', icon: TrendingUp }
  ]

  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const Home = ({ onNavigate }) => {
  return (
    <Layout onNavigate={onNavigate} currentPage="home">
      <Hero />
      <StatsSection />
      
      {/* Featured Games Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Games</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the most popular and highly-rated games across all platforms
            </p>
          </div>
          <FeaturedGames />
        </div>
      </section>

      {/* Hot Deals Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center space-x-2">
              <Zap className="h-8 w-8 text-red-500" />
              <span>Hot Deals</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't miss out on these amazing discounts and limited-time offers
            </p>
          </div>
          <HotDeals />
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center space-x-2">
              <Newspaper className="h-8 w-8 text-blue-600" />
              <span>Latest Gaming News</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest happenings in the gaming world
            </p>
          </div>
          <LatestNews />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-blue-200 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and never miss the latest game releases, deals, and gaming news.
          </p>
          <div className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-r-lg font-semibold transition-colors flex items-center space-x-2">
              <span>Subscribe</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default Home