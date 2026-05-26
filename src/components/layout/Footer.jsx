import React from 'react'
import { Link } from 'react-router-dom'
import { Zap, Github, Twitter, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-rose-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-slate-900 font-bold text-lg">Level<span className="text-rose-600">Up</span></span>
            </Link>
            <p className="text-slate-500 text-sm leading-relaxed">
              Your ultimate destination for game deals, news, reviews, and the best gaming store.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="text-slate-400 hover:text-slate-700 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-slate-700 transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="text-slate-400 hover:text-slate-700 transition-colors"><Github className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Navigate</h4>
            <ul className="space-y-2">
              {[['/', 'Home'], ['/store', 'Store'], ['/deals', 'Deals'], ['/articles', 'News & Articles'], ['/favorites', 'My Favorites']].map(([to, label]) => (
                <li key={to}><Link to={to} className="text-slate-500 hover:text-slate-900 text-sm transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Platforms</h4>
            <ul className="space-y-2">
              {['Steam', 'Epic Games', 'Nintendo Switch', 'PlayStation', 'Xbox'].map(p => (
                <li key={p}><Link to={`/deals?platform=${p}`} className="text-slate-500 hover:text-slate-900 text-sm transition-colors">{p}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-slate-900 font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              {['Action', 'RPG', 'Strategy', 'Shooter', 'Adventure', 'Racing'].map(g => (
                <li key={g}><Link to={`/store?genre=${g}`} className="text-slate-500 hover:text-slate-900 text-sm transition-colors">{g}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© 2025 LevelUp. All rights reserved.</p>
          <p className="text-slate-400 text-sm">Game prices and availability may vary by region.</p>
        </div>
      </div>
    </footer>
  )
}
