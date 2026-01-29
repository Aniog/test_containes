import React from 'react'
import { Clock, ArrowRight, Zap } from 'lucide-react'

const NewsSection = () => {
  const newsArticles = [
    {
      id: 1,
      headline: "PlayStation 5 Pro Officially Announced",
      summary: "Sony reveals the next-generation console with enhanced performance and ray tracing capabilities.",
      category: "Hardware",
      publishDate: "2024-01-20",
      author: "PlayStation Blog",
      isBreaking: true,
      image: "bg-gradient-to-br from-blue-600 to-purple-700",
      tags: ["PS5", "Hardware", "Announcement"]
    },
    {
      id: 2,
      headline: "Spider-Man 2 Gets New Game+ Mode",
      summary: "The highly anticipated New Game+ mode arrives with additional suits and enhanced difficulty options.",
      category: "Update",
      publishDate: "2024-01-18",
      author: "Insomniac Games",
      isBreaking: false,
      image: "bg-gradient-to-br from-red-600 to-blue-700",
      tags: ["Spider-Man", "Update", "DLC"]
    },
    {
      id: 3,
      headline: "PlayStation Plus February Games Revealed",
      summary: "This month's lineup includes three AAA titles and exclusive early access to upcoming releases.",
      category: "Game Release",
      publishDate: "2024-01-15",
      author: "PlayStation Plus",
      isBreaking: false,
      image: "bg-gradient-to-br from-green-600 to-teal-700",
      tags: ["PS Plus", "Free Games", "Monthly"]
    },
    {
      id: 4,
      headline: "State of Play February 2024 Announced",
      summary: "Join us for 30 minutes of new game reveals, updates, and exclusive PlayStation content.",
      category: "Event",
      publishDate: "2024-01-12",
      author: "PlayStation",
      isBreaking: false,
      image: "bg-gradient-to-br from-purple-600 to-pink-700",
      tags: ["State of Play", "Event", "Reveals"]
    }
  ]

  const getCategoryColor = (category) => {
    const colors = {
      "Hardware": "bg-blue-600",
      "Update": "bg-green-600",
      "Game Release": "bg-purple-600",
      "Event": "bg-orange-600",
      "General": "bg-gray-600"
    }
    return colors[category] || colors["General"]
  }

  return (
    <section id="news" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Latest <span className="text-blue-400">News</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest PlayStation news, updates, and announcements
          </p>
        </div>

        {/* Featured/Breaking News */}
        {newsArticles.filter(article => article.isBreaking).map((article) => (
          <div key={article.id} className="mb-12">
            <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-red-400" />
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  BREAKING NEWS
                </span>
                <span className={`${getCategoryColor(article.category)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                  {article.category}
                </span>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-8 items-center">
                <div className="lg:col-span-2">
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {article.headline}
                  </h3>
                  <p className="text-xl text-gray-300 mb-6">
                    {article.summary}
                  </p>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {new Date(article.publishDate).toLocaleDateString()}
                    </div>
                    <span>By {article.author}</span>
                  </div>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
                    Read Full Article
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="relative">
                  <div className={`${article.image} rounded-xl h-64 flex items-center justify-center border border-blue-500/30`}>
                    <div className="text-white text-4xl font-bold opacity-30">NEWS</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Regular News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsArticles.filter(article => !article.isBreaking).map((article) => (
            <div
              key={article.id}
              className="bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 group cursor-pointer"
            >
              <div className={`${article.image} h-48 flex items-center justify-center relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                <div className="text-white text-3xl font-bold opacity-20">NEWS</div>
                <div className="absolute top-4 left-4">
                  <span className={`${getCategoryColor(article.category)} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
                    {article.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {article.headline}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">
                  {article.summary}
                </p>

                <div className="flex items-center justify-between text-gray-400 text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {new Date(article.publishDate).toLocaleDateString()}
                  </div>
                  <span>{article.author}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag, index) => (
                    <span key={index} className="bg-blue-600/20 text-blue-400 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-2 transition-colors">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors">
            View All News
          </button>
        </div>
      </div>
    </section>
  )
}

export default NewsSection