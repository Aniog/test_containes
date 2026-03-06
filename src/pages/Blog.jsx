import React, { useState } from 'react'
import { Clock, User, Eye, BookOpen, Filter, Search, Tag } from 'lucide-react'

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const articles = [
    {
      id: 1,
      title: "The Complete Guide to Building Your First Gaming PC in 2026",
      content: "Building your first gaming PC can seem daunting, but with the right guidance, it's an incredibly rewarding experience. In this comprehensive guide, we'll walk you through every step of the process, from selecting components to putting it all together. We'll cover the latest CPUs, GPUs, and other essential components that will give you the best gaming experience for your budget.",
      excerpt: "Everything you need to know about building your first gaming PC, from component selection to assembly.",
      author: "Alex Chen",
      category: "Guide",
      tags: ["PC Building", "Hardware", "Beginner"],
      featuredImage: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600&h=300&fit=crop",
      isPublished: true,
      isFeatured: true,
      readTime: 12,
      viewCount: 15420,
      publishedAt: "2026-03-05T10:00:00Z",
      timeAgo: "1 day ago"
    },
    {
      id: 2,
      title: "Cyberpunk 2077: Phantom Liberty - A Redemption Story",
      content: "After a rocky launch, Cyberpunk 2077 has undergone a remarkable transformation. The Phantom Liberty expansion represents not just new content, but a complete reimagining of what the game could be. In this in-depth review, we explore how CD Projekt RED has addressed the original game's issues and delivered an experience that finally lives up to the initial promises.",
      excerpt: "An in-depth review of how Cyberpunk 2077's latest expansion redeems the franchise.",
      author: "Sarah Johnson",
      category: "Review",
      tags: ["Cyberpunk 2077", "RPG", "Review"],
      featuredImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=300&fit=crop",
      isPublished: true,
      isFeatured: true,
      readTime: 8,
      viewCount: 23150,
      publishedAt: "2026-03-04T14:30:00Z",
      timeAgo: "2 days ago"
    },
    {
      id: 3,
      title: "The Rise of Indie Games: Why Small Studios Are Winning",
      content: "The gaming industry has seen a remarkable shift in recent years, with indie games capturing both critical acclaim and commercial success. From innovative gameplay mechanics to unique artistic visions, small development teams are proving that you don't need a massive budget to create memorable gaming experiences. This article explores the factors behind the indie game renaissance.",
      excerpt: "Exploring how independent game developers are reshaping the gaming landscape.",
      author: "Mike Rodriguez",
      category: "Opinion",
      tags: ["Indie Games", "Industry", "Development"],
      featuredImage: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=300&fit=crop",
      isPublished: true,
      isFeatured: false,
      readTime: 6,
      viewCount: 8750,
      publishedAt: "2026-03-03T16:45:00Z",
      timeAgo: "3 days ago"
    },
    {
      id: 4,
      title: "Interview: The Creators Behind Elden Ring's Success",
      content: "We sit down with key members of FromSoftware to discuss the development of Elden Ring, their collaboration with George R.R. Martin, and what makes their approach to game design so unique. This exclusive interview provides insights into the creative process behind one of the most acclaimed games of recent years.",
      excerpt: "Exclusive interview with FromSoftware about the making of Elden Ring.",
      author: "Emma Thompson",
      category: "Interview",
      tags: ["Elden Ring", "FromSoftware", "Interview"],
      featuredImage: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=600&h=300&fit=crop",
      isPublished: true,
      isFeatured: false,
      readTime: 10,
      viewCount: 12300,
      publishedAt: "2026-03-02T11:20:00Z",
      timeAgo: "4 days ago"
    },
    {
      id: 5,
      title: "Gaming Accessibility: Making Games for Everyone",
      content: "Accessibility in gaming has come a long way, but there's still much work to be done. This article examines the current state of gaming accessibility, highlights developers who are leading the charge, and discusses what the future holds for making games truly inclusive for players with disabilities.",
      excerpt: "A comprehensive look at accessibility in modern gaming and its importance.",
      author: "David Park",
      category: "Opinion",
      tags: ["Accessibility", "Inclusive Design", "Industry"],
      featuredImage: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=300&fit=crop",
      isPublished: true,
      isFeatured: false,
      readTime: 7,
      viewCount: 5420,
      publishedAt: "2026-03-01T09:15:00Z",
      timeAgo: "5 days ago"
    },
    {
      id: 6,
      title: "The Ultimate Gaming Setup: Peripherals That Make a Difference",
      content: "Your gaming setup is more than just your PC or console. The right peripherals can significantly enhance your gaming experience, from mechanical keyboards that provide tactile feedback to high-refresh monitors that give you a competitive edge. This guide covers the essential peripherals every serious gamer should consider.",
      excerpt: "A guide to choosing the best gaming peripherals for your setup.",
      author: "Lisa Wang",
      category: "Guide",
      tags: ["Gaming Setup", "Peripherals", "Hardware"],
      featuredImage: "https://images.unsplash.com/photo-1586182987320-4f376d39d787?w=600&h=300&fit=crop",
      isPublished: true,
      isFeatured: false,
      readTime: 9,
      viewCount: 9870,
      publishedAt: "2026-02-28T13:40:00Z",
      timeAgo: "6 days ago"
    }
  ]

  const categories = ['all', 'Review', 'Guide', 'Opinion', 'Interview', 'News']

  const getCategoryColor = (category) => {
    const colors = {
      Review: 'bg-blue-600',
      Guide: 'bg-green-600',
      Opinion: 'bg-purple-600',
      Interview: 'bg-orange-600',
      News: 'bg-red-600'
    }
    return colors[category] || 'bg-gray-600'
  }

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Review':
        return <Eye className="h-4 w-4" />
      case 'Guide':
        return <BookOpen className="h-4 w-4" />
      case 'Interview':
        return <User className="h-4 w-4" />
      default:
        return <Tag className="h-4 w-4" />
    }
  }

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const featuredArticles = filteredArticles.filter(article => article.isFeatured)
  const regularArticles = filteredArticles.filter(article => !article.isFeatured)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-white mb-4 flex items-center">
          <BookOpen className="h-10 w-10 text-purple-500 mr-3" />
          Gaming Blog & Articles
        </h1>
        <p className="text-gray-400">In-depth articles, reviews, and guides from gaming experts</p>
      </div>

      {/* Search and Filters */}
      <div className="bg-gray-800 rounded-lg p-6 mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-gray-700 text-white pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 w-full"
            />
          </div>

          {/* Category Filter */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <span className="text-white font-medium">Category:</span>
            </div>
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

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Featured Articles</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.map(article => (
              <div key={article.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-300 hover:scale-105">
                <div className="relative">
                  <img
                    src={article.featuredImage}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <div className={`${getCategoryColor(article.category)} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1`}>
                      {getCategoryIcon(article.category)}
                      <span>{article.category}</span>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold mb-3 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{article.excerpt}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-gray-400 text-sm">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime} min read</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-400 text-sm">
                      <Eye className="h-4 w-4" />
                      <span>{article.viewCount.toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {article.tags.map(tag => (
                      <span key={tag} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">{article.timeAgo}</span>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded font-medium transition-colors">
                      Read Article
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Regular Articles */}
      <section>
        <h2 className="text-2xl font-bold text-white mb-6">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regularArticles.map(article => (
            <div key={article.id} className="bg-gray-800 rounded-lg overflow-hidden hover:bg-gray-750 transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img
                  src={article.featuredImage}
                  alt={article.title}
                  className="w-full h-40 object-cover"
                />
                <div className="absolute top-2 left-2">
                  <div className={`${getCategoryColor(article.category)} text-white px-2 py-1 rounded text-xs font-medium flex items-center space-x-1`}>
                    {getCategoryIcon(article.category)}
                    <span>{article.category}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-white font-bold mb-2 line-clamp-2">{article.title}</h3>
                <p className="text-gray-400 text-sm mb-3 line-clamp-2">{article.excerpt}</p>
                
                <div className="flex items-center justify-between mb-3 text-gray-400 text-xs">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <User className="h-3 w-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}m</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Eye className="h-3 w-3" />
                    <span>{(article.viewCount / 1000).toFixed(1)}k</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-1 mb-3">
                  {article.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs">{article.timeAgo}</span>
                  <button className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm font-medium transition-colors">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {filteredArticles.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-400 text-lg">No articles found matching your criteria.</p>
          <button
            onClick={() => {
              setSearchQuery('')
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

export default BlogPage