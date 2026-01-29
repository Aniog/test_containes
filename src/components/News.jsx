import React from 'react'
import { Calendar, Clock, ArrowRight } from 'lucide-react'

const News = () => {
  const newsArticles = [
    {
      id: 1,
      title: "PlayStation 5 Pro Announced with Enhanced Graphics",
      excerpt: "Sony reveals the next generation of PlayStation gaming with improved performance and ray tracing capabilities.",
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=250&fit=crop",
      date: "2026-01-28",
      readTime: "3 min read",
      category: "Hardware"
    },
    {
      id: 2,
      title: "New Spider-Man Game Coming This Summer",
      excerpt: "Insomniac Games teases their next Spider-Man adventure with new villains and enhanced web-swinging mechanics.",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      date: "2026-01-27",
      readTime: "5 min read",
      category: "Games"
    },
    {
      id: 3,
      title: "PlayStation Plus February Games Revealed",
      excerpt: "This month's lineup includes three AAA titles and exclusive early access to upcoming releases.",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=250&fit=crop",
      date: "2026-01-26",
      readTime: "2 min read",
      category: "PlayStation Plus"
    },
    {
      id: 4,
      title: "God of War TV Series Gets Release Date",
      excerpt: "Amazon Prime Video announces the premiere date for the highly anticipated God of War adaptation.",
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=250&fit=crop",
      date: "2026-01-25",
      readTime: "4 min read",
      category: "Entertainment"
    }
  ]

  return (
    <section id="news" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Latest Gaming News</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stay updated with the latest PlayStation news, game releases, and industry updates
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newsArticles.map((article) => (
            <article key={article.id} className="bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="relative">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {article.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold mb-3 line-clamp-2 hover:text-blue-400 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(article.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{article.readTime}</span>
                  </div>
                </div>
                
                <button className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group">
                  <span>Read More</span>
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All News
          </button>
        </div>
      </div>
    </section>
  )
}

export default News