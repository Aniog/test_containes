import React, { useState } from 'react'
import { Clock, ExternalLink, Filter, TrendingUp, AlertCircle, Calendar } from 'lucide-react'

const NewsPage = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('all')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const news = [
    {
      id: 1,
      headline: "Steam Summer Sale 2026 Breaks Records",
      content: "Valve's annual Steam Summer Sale has officially begun, featuring unprecedented discounts on thousands of games. This year's sale includes discounts of up to 90% on popular titles, with special daily deals rotating every 24 hours. The sale runs until March 20th and is expected to be the biggest gaming event of the year.",
      summary: "Steam's biggest sale of the year features massive discounts on thousands of games",
      source: "Steam News",
      platform: "Steam",
      category: "Events",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=300&fit=crop",
      externalUrl: "#",
      isBreaking: true,
      priority: 5,
      publishedAt: "2026-03-06T10:00:00Z",
      timeAgo: "2 hours ago"
    },
    {
      id: 2,
      headline: "PlayStation 6 Development Confirmed by Sony",
      content: "Sony Interactive Entertainment has officially confirmed that development of the PlayStation 6 is underway. The next-generation console is expected to feature revolutionary graphics capabilities and backward compatibility with all previous PlayStation generations. An official announcement event is planned for later this year.",
      summary: "Sony confirms PlayStation 6 development with revolutionary features planned",
      source: "PlayStation Blog",
      platform: "PlayStation",
      category: "Breaking",
      imageUrl: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=300&fit=crop",
      externalUrl: "#",
      isBreaking: true,
      priority: 5,
      publishedAt: "2026-03-06T08:30:00Z",
      timeAgo: "4 hours ago"
    },
    {
      id: 3,
      headline: "Epic Games Store Adds 50 New Free Games",
      content: "Epic Games has announced a massive expansion to their free games program, adding 50 new titles that will be available at no cost throughout 2026. The collection includes indie darlings, AAA blockbusters, and exclusive content from emerging developers.",
      summary: "Epic Games Store expands free games program with 50 new titles for 2026",
      source: "Epic Games",
      platform: "Epic",
      category: "Updates",
      imageUrl: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=300&fit=crop",
      externalUrl: "#",
      isBreaking: false,
      priority: 4,
      publishedAt: "2026-03-06T06:15:00Z",
      timeAgo: "6 hours ago"
    },
    {
      id: 4,
      headline: "Nintendo Direct Announces 15 New Switch Games",
      content: "Nintendo's latest Direct presentation revealed 15 new games coming to the Nintendo Switch, including sequels to beloved franchises and brand new IPs. The presentation also hinted at potential hardware updates coming later this year.",
      summary: "Nintendo Direct reveals 15 new Switch games and hints at hardware updates",
      source: "Nintendo",
      platform: "Nintendo",
      category: "Releases",
      imageUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=300&fit=crop",
      externalUrl: "#",
      isBreaking: false,
      priority: 4,
      publishedAt: "2026-03-05T20:00:00Z",
      timeAgo: "1 day ago"
    },
    {
      id: 5,
      headline: "Xbox Game Pass Reaches 50 Million Subscribers",
      content: "Microsoft's Xbox Game Pass service has reached a milestone of 50 million subscribers worldwide. The service continues to add new games monthly and has become a major force in the gaming industry, changing how players access and play games.",
      summary: "Xbox Game Pass hits 50 million subscribers milestone",
      source: "Xbox Wire",
      platform: "Xbox",
      category: "Industry",
      imageUrl: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=300&fit=crop",
      externalUrl: "#",
      isBreaking: false,
      priority: 3,
      publishedAt: "2026-03-05T14:30:00Z",
      timeAgo: "1 day ago"
    },
    {
      id: 6,
      headline: "Cyberpunk 2077 Expansion Wins Game of the Year",
      content: "The Phantom Liberty expansion for Cyberpunk 2077 has been awarded Game of the Year at the Global Gaming Awards. The expansion has been praised for its storytelling, improved gameplay mechanics, and technical achievements.",
      summary: "Cyberpunk 2077: Phantom Liberty wins Game of the Year award",
      source: "Gaming Industry News",
      platform: "General",
      category: "Industry",
      imageUrl: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=300&fit=crop",
      externalUrl: "#",
      isBreaking: false,
      priority: 3,
      publishedAt: "2026-03-04T18:45:00Z",
      timeAgo: "2 days ago"
    }
  ]

  const platforms = ['all', 'Steam', 'Epic', 'Nintendo', 'PlayStation', 'Xbox', 'General']
  const categories = ['all', 'Breaking', 'Updates', 'Releases', 'Events', 'Industry']

  const getPlatformColor = (platform) => {
    const colors = {
      Steam: 'bg-blue-600',
      Epic: 'bg-gray-800',
      Nintendo: 'bg-red-500',
      PlayStation: 'bg-blue-700',
      Xbox: 'bg-green-600',
      General: 'bg-purple-600'
    }
    return colors[platform] || 'bg-gray-600'
  }

  const getCategoryColor = (category) => {
    const colors = {
      Breaking: 'bg-red-600',
      Updates: 'bg-blue-600',
      Releases: 'bg-green-600',
      Events: 'bg-purple-600',
      Industry: 'bg-orange-600'
    }
    return colors[category] || 'bg-gray-600'
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Breaking':
        return <AlertCircle className="h-4 w-4" />
      case 'Updates':
        return <TrendingUp className="h-4 w-4" />
      case 'Events':
        return <Calendar className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
    }
  }

  const filteredNews = news.filter(item => {
    const matchesPlatform = selectedPlatform === 'all' || item.platform === selectedPlatform
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    return matchesPlatform && matchesCategory
  })

  const breakingNews = filteredNews.filter(item => item.isBreaking)
  const regularNews = filteredNews.filter(item => !item.isBreaking)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center">
          <TrendingUp className="h-10 w-10 text-purple-500 mr-3" />
          Gaming News & Updates
        </h1>
        <p className="text-gray-400">Stay up to date with the latest gaming news from all platforms</p>
      </div>

      {/* Filters */}
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2">
            <Filter className="h-5 w-5 text-gray-400" />
            <span className="text-white font-medium">Filter News:</span>
          </div>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <div>
              <label className="block text-white text-sm font-medium mb-2">Platform</label>
              <select
                value={selectedPlatform}
                onChange={(e) => setSelectedPlatform(e.target.value)}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {platforms.map(platform => (
                  <option key={platform} value={platform}>
                    {platform === 'all' ? 'All Platforms' : platform}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-white text-sm font-medium mb-2">Category</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'All Categories' : category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Breaking News */}
      {breakingNews.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <AlertCircle className="h-6 w-6 text-red-500 mr-2" />
            Breaking News
          </h2>
          <div className="space-y-6">
            {breakingNews.map(item => (
              <div key={item.id} className="bg-gradient-to-r from-red-900 to-orange-900 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col lg:flex-row">
                  <div className="lg:w-1/3">
                    <img
                      src={item.imageUrl}
                      alt={item.headline}
                      className="w-full h-48 lg:h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 p-6">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold flex items-center space-x-1">
                        <AlertCircle className="h-3 w-3" />
                        <span>BREAKING</span>
                      </span>
                      <span className={`${getPlatformColor(item.platform)} text-white px-2 py-1 rounded text-xs font-medium`}>
                        {item.platform}
                      </span>
                      <div className={`${getCategoryColor(item.category)} text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1`}>
                        {getCategoryIcon(item.category)}
                        <span>{item.category}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-white text-xl lg:text-2xl font-bold mb-3">{item.headline}</h3>
                    <p className="text-gray-200 mb-4 line-clamp-3">{item.content}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-gray-300 text-sm">
                        <span>{item.source}</span>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{item.timeAgo}</span>
                        </div>
                      </div>
                      
                      <a
                        href={item.externalUrl}
                        className="bg-white text-gray-900 hover:bg-gray-100 px-4 py-2 rounded font-medium transition-colors flex items-center space-x-2"
                      >
                        <span>Read More</span>
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Regular News */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Latest News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularNews.map(item => (
            <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img
                  src={item.imageUrl}
                  alt={item.headline}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-2 left-2 flex flex-wrap gap-1">
                  <span className={`${getPlatformColor(item.platform)} text-white px-2 py-1 rounded text-xs font-medium`}>
                    {item.platform}
                  </span>
                  <div className={`${getCategoryColor(item.category)} text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1`}>
                    {getCategoryIcon(item.category)}
                    <span>{item.category}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-white font-bold mb-3 line-clamp-2 text-lg">{item.headline}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{item.summary}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div className="text-gray-400 text-xs">
                    <div>{item.source}</div>
                    <div className="flex items-center space-x-1 mt-1">
                      <Clock className="h-3 w-3" />
                      <span>{item.timeAgo}</span>
                    </div>
                  </div>
                </div>
                
                <a
                  href={item.externalUrl}
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded font-medium transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Read Full Article</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {filteredNews.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No news found matching your criteria.</p>
          <button
            onClick={() => {
              setSelectedPlatform('all')
              setSelectedCategory('all')
            }}
            className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  )
}

export default NewsPage