import React from 'react'
import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'

const Journal = () => {
  const articles = [
    {
      id: 1,
      title: 'The Art of Layering Necklaces',
      excerpt: 'Master the art of necklace layering with our guide to creating the perfect stacked look for any occasion.',
      date: '2024-01-15',
      category: 'Style Guide',
      image: 'https://images.unsplash.com/photo-1602173574767-37ac01994b2a?w=600&h=400&fit=crop&q=80'
    },
    {
      id: 2,
      title: 'Why Demi-Fine Jewelry is the New Luxury',
      excerpt: 'Discover why more women are choosing demi-fine pieces that offer the look of fine jewelry at accessible prices.',
      date: '2024-01-08',
      category: 'Lifestyle',
      image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=400&fit=crop&q=80'
    },
    {
      id: 3,
      title: 'Caring for Your Gold-Plated Jewelry',
      excerpt: 'Keep your Velmora pieces looking beautiful for years with our expert care tips and maintenance guide.',
      date: '2024-01-02',
      category: 'Care Guide',
      image: 'https://images.unsplash.com/photo-1608042314453-ae338d80c427?w=600&h=400&fit=crop&q=80'
    }
  ]

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-stone-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-stone-900 mb-4">
            The Journal
          </h1>
          <p className="text-stone-600 max-w-2xl mx-auto">
            Style inspiration, jewelry care guides, and stories from the world of Velmora.
          </p>
        </div>
      </section>

      {/* Articles */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {articles.map(article => (
              <article key={article.id} className="group">
                <Link to={`/journal/${article.id}`} className="block">
                  <div className="aspect-[3/2] overflow-hidden bg-stone-100 mb-6">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 text-sm text-stone-500">
                      <span className="text-amber-700 font-medium">{article.category}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {formatDate(article.date)}
                      </span>
                    </div>
                    <h2 className="font-serif text-xl text-stone-900 group-hover:text-amber-700 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-stone-600 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <span className="inline-flex items-center gap-2 text-stone-900 text-sm tracking-widest uppercase font-medium group-hover:text-amber-700 transition-colors">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Journal
