import React from 'react'
import News from '../components/News'

const NewsPage = () => {
  return (
    <div className="min-h-screen pt-16">
      <div className="bg-gradient-to-r from-blue-900 via-purple-900 to-blue-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Gaming News
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest PlayStation news, game releases, and industry insights
          </p>
        </div>
      </div>
      
      <News />
      
      {/* Additional news content */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">More Gaming Content</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore more gaming content, reviews, and exclusive interviews
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Game Reviews</h3>
              <p className="text-gray-400 mb-6">
                In-depth reviews of the latest PlayStation games from our expert team
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                Read Reviews
              </button>
            </div>
            
            <div className="bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4">Developer Interviews</h3>
              <p className="text-gray-400 mb-6">
                Exclusive interviews with game developers and industry leaders
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors">
                Watch Interviews
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsPage