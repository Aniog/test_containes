import { Link } from 'react-router-dom'
import { ArrowRight, Tag, Newspaper, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-indigo-900/50 border border-indigo-700 rounded-full px-4 py-1.5 text-indigo-300 text-sm font-medium mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Live deals from Steam, Epic, Nintendo, PS & Xbox
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
          Your Gaming
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400"> Universe</span>
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          Discover the latest gaming news, exclusive deals across all major platforms, and shop our curated game store — all in one place.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/store">
            <Button size="lg" className="gap-2 text-base px-8">
              <ShoppingBag className="w-5 h-5" />
              Browse Store
            </Button>
          </Link>
          <Link to="/discounts">
            <Button size="lg" variant="outline" className="gap-2 text-base px-8">
              <Tag className="w-5 h-5" />
              View Deals
            </Button>
          </Link>
          <Link to="/news">
            <Button size="lg" variant="ghost" className="gap-2 text-base px-8">
              <Newspaper className="w-5 h-5" />
              Latest News
            </Button>
          </Link>
        </div>

        {/* Platform logos row */}
        <div className="mt-14 flex flex-wrap justify-center gap-4 md:gap-8">
          {[
            { name: 'Steam', bg: 'bg-[#1b2838]', text: 'text-[#c7d5e0]' },
            { name: 'Epic Games', bg: 'bg-gray-800', text: 'text-white' },
            { name: 'Nintendo', bg: 'bg-red-700', text: 'text-white' },
            { name: 'PlayStation', bg: 'bg-blue-800', text: 'text-white' },
            { name: 'Xbox', bg: 'bg-green-800', text: 'text-white' },
          ].map(p => (
            <div key={p.name} className={`${p.bg} ${p.text} px-4 py-2 rounded-lg text-sm font-semibold opacity-80 hover:opacity-100 transition-opacity`}>
              {p.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
