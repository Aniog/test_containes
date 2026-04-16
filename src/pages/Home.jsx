import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BookOpen } from 'lucide-react'
import { fetchFeaturedBooks } from '../api/books'
import BookCard from '../components/books/BookCard'

const CATEGORIES = [
  { name: '文学', desc: '人类情感的镜子', emoji: '📖' },
  { name: '历史', desc: '时间长河的记录', emoji: '🏛️' },
  { name: '科学', desc: '探索未知的边界', emoji: '🔭' },
  { name: '哲学', desc: '思想深处的追问', emoji: '💭' },
  { name: '心理', desc: '内心世界的地图', emoji: '🧠' },
  { name: '传记', desc: '真实人生的故事', emoji: '✍️' },
]

export default function Home() {
  const [featured, setFeatured] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchFeaturedBooks()
      .then(books => {
        console.log('[Home] featured books loaded:', books.length)
        setFeatured(books)
      })
      .catch(err => console.error('[Home] failed to load featured:', err))
      .finally(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary rounded-full mb-8">
            <BookOpen className="w-3.5 h-3.5 text-muted-foreground" />
            <span className="font-sans text-xs text-muted-foreground tracking-widest">独立书店 · 精选好书</span>
          </div>

          <h1 className="font-serif text-5xl sm:text-7xl font-light text-foreground leading-tight tracking-tight mb-6">
            在文字里<br />
            <span className="italic">找到自己</span>
          </h1>

          <p className="font-sans text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed mb-10">
            每一本书都是一次相遇。我们精心挑选每一本书，
            只为让你在某个安静的下午，遇见那个改变你的故事。
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/books"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-sans text-sm tracking-widest rounded-lg hover:bg-primary/90 transition-colors"
            >
              浏览书目
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/books?category=文学"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent text-foreground border border-border font-sans text-sm tracking-widest rounded-lg hover:bg-secondary transition-colors"
            >
              文学精选
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <div className="w-px h-8 bg-muted-foreground/30" />
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-secondary/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl font-light text-foreground mb-3">书目分类</h2>
            <p className="font-sans text-sm text-muted-foreground tracking-wide">按兴趣探索，总有一本适合你</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map(cat => (
              <Link
                key={cat.name}
                to={`/books?category=${cat.name}`}
                className="group flex flex-col items-center p-5 bg-white rounded-xl border border-border hover:border-primary hover:shadow-sm transition-all text-center"
              >
                <span className="text-2xl mb-2">{cat.emoji}</span>
                <span className="font-serif text-sm font-medium text-foreground group-hover:text-accent transition-colors">
                  {cat.name}
                </span>
                <span className="font-sans text-xs text-muted-foreground mt-1 leading-tight">{cat.desc}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="font-serif text-3xl font-light text-foreground mb-2">精选推荐</h2>
              <p className="font-sans text-sm text-muted-foreground">编辑精心挑选，值得一读</p>
            </div>
            <Link
              to="/books"
              className="hidden sm:inline-flex items-center gap-1.5 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              查看全部 <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {loading ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="animate-pulse">
                  <div className="aspect-[3/4] bg-muted rounded-lg mb-3" />
                  <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                  <div className="h-3 bg-muted rounded w-1/2" />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {featured.slice(0, 4).map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          )}

          <div className="text-center mt-10 sm:hidden">
            <Link
              to="/books"
              className="inline-flex items-center gap-1.5 font-sans text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              查看全部书目 <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="font-serif text-2xl sm:text-3xl font-light leading-relaxed italic text-primary-foreground/90">
            "读一本好书，就是和许多高尚的人谈话。"
          </p>
          <p className="font-sans text-sm text-primary-foreground/50 mt-6 tracking-widest">— 笛卡尔</p>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-secondary/20">
        <div className="max-w-xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-2xl font-light text-foreground mb-3">订阅书单推荐</h2>
          <p className="font-sans text-sm text-muted-foreground mb-8">每月精选书单，直达你的邮箱</p>
          <form className="flex gap-2" onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="你的邮箱地址"
              className="flex-1 px-4 py-3 bg-white border border-border rounded-lg font-sans text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground font-sans text-sm tracking-wide rounded-lg hover:bg-primary/90 transition-colors border-0 whitespace-nowrap"
            >
              订阅
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
