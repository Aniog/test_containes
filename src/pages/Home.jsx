import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Zap, TrendingUp, Tag, ShoppingBag, Flame } from 'lucide-react'
import { client, getRows, getSchemaData } from '../api/client.js'
import { PlatformBadge, CategoryBadge, DiscountBadge, StarRating, LoadingSpinner, SectionHeader } from '../components/ui/GameUI.jsx'
import { formatDistanceToNow } from 'date-fns'

function HeroSection({ featuredArticle }) {
  const d = getSchemaData(featuredArticle)
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0d0f14] via-[#13161e] to-[#0d0f14] py-16 md:py-24">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#4f8ef7]/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-6">
            <Flame className="w-5 h-5 text-orange-400" />
            <span className="text-orange-400 text-sm font-semibold uppercase tracking-wider">Featured Story</span>
          </div>
          {featuredArticle ? (
            <>
              <div className="flex items-center gap-3 mb-4">
                <CategoryBadge category={d.category} />
                {d.platform && d.platform !== 'general' && <PlatformBadge platform={d.platform} />}
              </div>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                {d.title}
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                {d.summary}
              </p>
              <div className="flex items-center gap-4">
                <Link
                  to={`/news/${featuredArticle.id}`}
                  className="flex items-center gap-2 bg-[#4f8ef7] hover:bg-[#3b7de8] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-[#4f8ef7]/25"
                >
                  Read Article <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/news" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
                  All Articles →
                </Link>
              </div>
            </>
          ) : (
            <>
              <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-6">
                Your Ultimate<br />
                <span className="text-[#4f8ef7]">Gaming Hub</span>
              </h1>
              <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
                News, reviews, deals, and games from Steam, Epic, Nintendo, PlayStation, and Xbox — all in one place.
              </p>
              <div className="flex items-center gap-4">
                <Link to="/store" className="flex items-center gap-2 bg-[#4f8ef7] hover:bg-[#3b7de8] text-white font-semibold px-6 py-3 rounded-xl transition-all duration-200">
                  Browse Store <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/discounts" className="text-slate-400 hover:text-white text-sm font-medium transition-colors">
                  View Deals →
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}

function StatsBanner() {
  const stats = [
    { icon: ShoppingBag, label: 'Games in Store', value: '500+' },
    { icon: Tag, label: 'Active Deals', value: '200+' },
    { icon: TrendingUp, label: 'Articles Published', value: '1,200+' },
    { icon: Zap, label: 'Platforms Covered', value: '5' },
  ]
  return (
    <div className="bg-[#13161e] border-y border-[#2a2d3e]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#4f8ef7]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-[#4f8ef7]" />
              </div>
              <div>
                <div className="text-white font-bold text-lg leading-none">{value}</div>
                <div className="text-slate-500 text-xs mt-0.5">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function ArticleCard({ article }) {
  const d = getSchemaData(article)
  return (
    <Link to={`/news/${article.id}`} className="group block bg-[#1a1d27] border border-[#2a2d3e] rounded-xl overflow-hidden hover:border-[#4f8ef7]/50 hover:shadow-lg hover:shadow-[#4f8ef7]/10 transition-all duration-200">
      <div className="aspect-video bg-[#13161e] relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6 flex flex-col items-center gap-2">
            <CategoryBadge category={d.category} />
            {d.platform && d.platform !== 'general' && <PlatformBadge platform={d.platform} size="xs" />}
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#1a1d27] via-transparent to-transparent" />
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
          <CategoryBadge category={d.category} />
          {d.platform && d.platform !== 'general' && <PlatformBadge platform={d.platform} size="xs" />}
        </div>
        <h3 className="text-white font-semibold text-sm leading-snug mb-2 group-hover:text-[#4f8ef7] transition-colors line-clamp-2">
          {d.title}
        </h3>
        <p className="text-slate-400 text-xs line-clamp-2 mb-3">{d.summary}</p>
        <div className="flex items-center justify-between text-xs text-slate-500">
          <span>{d.author}</span>
          <span>{d.published_at ? formatDistanceToNow(new Date(d.published_at), { addSuffix: true }) : ''}</span>
        </div>
      </div>
    </Link>
  )
}

function GameCard({ game, onAddToCart }) {
  const d = getSchemaData(game)
  return (
    <div className="group bg-[#1a1d27] border border-[#2a2d3e] rounded-xl overflow-hidden hover:border-[#4f8ef7]/50 hover:shadow-lg hover:shadow-[#4f8ef7]/10 transition-all duration-200">
      <div className="aspect-[3/4] bg-gradient-to-br from-[#1f2235] to-[#13161e] relative flex items-center justify-center">
        <div className="text-center px-4">
          <PlatformBadge platform={d.platform} />
          <p className="text-slate-600 text-xs mt-2">{d.genre}</p>
        </div>
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {d.is_new && <span className="bg-[#4f8ef7] text-white text-xs font-bold px-2 py-0.5 rounded">NEW</span>}
          {d.discount_percent > 0 && <DiscountBadge percent={d.discount_percent} />}
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-white font-semibold text-sm leading-snug mb-1 line-clamp-2">{d.title}</h3>
        {d.rating && <StarRating rating={d.rating} />}
        <div className="flex items-center justify-between mt-2">
          <div>
            <span className="text-white font-bold">${d.price?.toFixed(2)}</span>
            {d.original_price && d.original_price > d.price && (
              <span className="text-slate-500 text-xs line-through ml-1">${d.original_price?.toFixed(2)}</span>
            )}
          </div>
          <button
            onClick={() => onAddToCart(game)}
            className="bg-[#4f8ef7] hover:bg-[#3b7de8] text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

function DiscountRow({ discount }) {
  const d = getSchemaData(discount)
  const isFree = d.sale_price === 0
  return (
    <div className="flex items-center gap-4 p-4 bg-[#1a1d27] border border-[#2a2d3e] rounded-xl hover:border-[#4f8ef7]/40 transition-all">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <PlatformBadge platform={d.platform} size="xs" />
          {d.genre && <span className="text-slate-500 text-xs">{d.genre}</span>}
        </div>
        <p className="text-white font-semibold text-sm truncate">{d.game_title}</p>
        {d.sale_ends_at && (
          <p className="text-slate-500 text-xs mt-0.5">
            Ends {formatDistanceToNow(new Date(d.sale_ends_at), { addSuffix: true })}
          </p>
        )}
      </div>
      <div className="text-right flex-shrink-0">
        <DiscountBadge percent={d.discount_percent} />
        <div className="mt-1">
          {isFree ? (
            <span className="text-green-400 font-bold text-sm">FREE</span>
          ) : (
            <span className="text-white font-bold text-sm">${d.sale_price?.toFixed(2)}</span>
          )}
          <span className="text-slate-500 text-xs line-through ml-1">${d.original_price?.toFixed(2)}</span>
        </div>
      </div>
    </div>
  )
}

export default function Home({ onAddToCart }) {
  const [featuredArticle, setFeaturedArticle] = useState(null)
  const [articles, setArticles] = useState([])
  const [games, setGames] = useState([])
  const [discounts, setDiscounts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      setLoading(true)
      const [artRes, gameRes, discRes] = await Promise.all([
        client.from('Articles').select('*').order('published_at', { ascending: false }).limit(7),
        client.from('Games').select('*').order('rating', { ascending: false }).limit(8),
        client.from('Discounts').select('*').eq('is_active', true).order('discount_percent', { ascending: false }).limit(6),
      ])
      const artList = getRows(artRes.data)
      const featured = artList.find(a => getSchemaData(a).is_featured) || artList[0]
      setFeaturedArticle(featured || null)
      setArticles(artList.filter(a => a !== featured).slice(0, 6))
      setGames(getRows(gameRes.data))
      setDiscounts(getRows(discRes.data))
      setLoading(false)
    }
    load()
  }, [])

  return (
    <div className="min-h-screen bg-[#0d0f14]">
      <HeroSection featuredArticle={featuredArticle} />
      <StatsBanner />

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 space-y-16">
        {/* Latest Articles */}
        <section>
          <SectionHeader
            title="Latest News & Articles"
            subtitle="Stay up to date with the gaming world"
            action={
              <Link to="/news" className="flex items-center gap-1 text-[#4f8ef7] hover:text-white text-sm font-medium transition-colors">
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            }
          />
          {loading ? <LoadingSpinner /> : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map(a => <ArticleCard key={a.id} article={a} />)}
            </div>
          )}
        </section>

        {/* Featured Games */}
        <section>
          <SectionHeader
            title="Featured Games"
            subtitle="Top-rated titles across all platforms"
            action={
              <Link to="/store" className="flex items-center gap-1 text-[#4f8ef7] hover:text-white text-sm font-medium transition-colors">
                Browse store <ArrowRight className="w-4 h-4" />
              </Link>
            }
          />
          {loading ? <LoadingSpinner /> : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {games.map(g => <GameCard key={g.id} game={g} onAddToCart={onAddToCart} />)}
            </div>
          )}
        </section>

        {/* Hot Deals */}
        <section>
          <SectionHeader
            title="Hot Deals Right Now"
            subtitle="Best discounts across Steam, Epic, Nintendo, PlayStation & Xbox"
            action={
              <Link to="/discounts" className="flex items-center gap-1 text-[#4f8ef7] hover:text-white text-sm font-medium transition-colors">
                All deals <ArrowRight className="w-4 h-4" />
              </Link>
            }
          />
          {loading ? <LoadingSpinner /> : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {discounts.map(d => <DiscountRow key={d.id} discount={d} />)}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
