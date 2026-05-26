import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, TrendingUp, BookOpen, Tag } from 'lucide-react'
import { fetchGames, fetchArticles, fetchDeals } from '../api/gameApi'
import GameCard from '../components/store/GameCard'
import ArticleCard from '../components/articles/ArticleCard'
import DealCard from '../components/deals/DealCard'
import { LoadingScreen } from '../components/ui/Spinner'
import { Button } from '../components/ui/Button'

const PLATFORM_LOGOS = [
  { name: 'Steam', color: '#1b2838', text: '#c7d5e0' },
  { name: 'Epic', color: '#2d2d2d', text: '#ffffff' },
  { name: 'Nintendo', color: '#e4000f', text: '#ffffff' },
  { name: 'PlayStation', color: '#003087', text: '#ffffff' },
  { name: 'Xbox', color: '#107c10', text: '#ffffff' },
]

export default function HomePage() {
  const [featuredGames, setFeaturedGames] = useState([])
  const [latestArticles, setLatestArticles] = useState([])
  const [hotDeals, setHotDeals] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const [games, articles, deals] = await Promise.all([
          fetchGames({ featured: true, limit: 4 }),
          fetchArticles({ limit: 4 }),
          fetchDeals({ featured: true, limit: 3 }),
        ])
        setFeaturedGames(games)
        setLatestArticles(articles)
        setHotDeals(deals)
      } catch (err) {
        console.error('Failed to load homepage data:', err)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return <LoadingScreen />

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-violet-50 via-white to-slate-50 pt-24 pb-20">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-100/60 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-violet-100 border border-violet-200 rounded-full px-4 py-1.5 mb-6">
              <Zap className="w-4 h-4 text-violet-600" />
              <span className="text-violet-700 text-sm font-medium">Your Ultimate Gaming Hub</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-6">
              Level Up Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-purple-500">
                Gaming Experience
              </span>
            </h1>
            <p className="text-slate-500 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Discover the best game deals across Steam, Epic, PlayStation, Xbox, and Nintendo. 
              Stay updated with the latest gaming news, reviews, and buy games directly from our store.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/store">
                <Button size="lg">
                  Browse Store
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/deals">
                <Button size="lg" variant="outline">
                  <Tag className="w-5 h-5" />
                  Hot Deals
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Badges */}
      <section className="bg-white border-y border-slate-200 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <span className="text-slate-400 text-sm font-medium">Deals from:</span>
            {PLATFORM_LOGOS.map(p => (
              <Link
                key={p.name}
                to={`/deals?platform=${p.name}`}
                className="px-4 py-2 rounded-lg text-sm font-bold transition-all hover:scale-105"
                style={{ backgroundColor: p.color, color: p.text }}
              >
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Games Available', value: '500+', icon: '🎮' },
              { label: 'Active Deals', value: '200+', icon: '🔥' },
              { label: 'Platforms', value: '5', icon: '🕹️' },
              { label: 'Happy Gamers', value: '50K+', icon: '⭐' },
            ].map(stat => (
              <div key={stat.label} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                <div className="text-slate-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Games */}
      {featuredGames.length > 0 && (
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="w-5 h-5 text-violet-600" />
                <span className="text-violet-600 text-sm font-medium uppercase tracking-wider">Featured</span>
              </div>
              <h2 className="text-slate-900 text-3xl font-black">Top Games</h2>
            </div>
            <Link to="/store">
              <Button variant="outline" size="sm">
                View All <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredGames.map(game => <GameCard key={game.id} game={game} />)}
          </div>
        </section>
      )}

      {/* Hot Deals */}
      {hotDeals.length > 0 && (
        <section className="py-16 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Tag className="w-5 h-5 text-violet-600" />
                  <span className="text-violet-600 text-sm font-medium uppercase tracking-wider">Limited Time</span>
                </div>
                <h2 className="text-slate-900 text-3xl font-black">Hot Deals</h2>
              </div>
              <Link to="/deals">
                <Button variant="outline" size="sm">
                  All Deals <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {hotDeals.map(deal => <DealCard key={deal.id} deal={deal} />)}
            </div>
          </div>
        </section>
      )}

      {/* Latest News */}
      {latestArticles.length > 0 && (
        <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <BookOpen className="w-5 h-5 text-violet-600" />
                <span className="text-violet-600 text-sm font-medium uppercase tracking-wider">Latest</span>
              </div>
              <h2 className="text-slate-900 text-3xl font-black">News & Articles</h2>
            </div>
            <Link to="/articles">
              <Button variant="outline" size="sm">
                View All <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {latestArticles.slice(0, 1).map(a => (
              <div key={a.id} className="md:col-span-2">
                <ArticleCard article={a} featured />
              </div>
            ))}
            {latestArticles.slice(1, 4).map(a => <ArticleCard key={a.id} article={a} />)}
          </div>
        </section>
      )}
    </div>
  )
}
