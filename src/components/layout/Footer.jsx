import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5" />
              <span className="font-serif text-lg tracking-widest">字里行间</span>
            </div>
            <p className="font-sans text-sm text-primary-foreground/60 leading-relaxed">
              一家专注于精选好书的独立书店。<br />
              我们相信，每一本书都是一扇窗。
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-serif text-sm tracking-widest mb-4 text-primary-foreground/80">书目分类</h4>
            <ul className="space-y-2">
              {['文学', '历史', '科学', '哲学', '心理', '传记'].map(cat => (
                <li key={cat}>
                  <Link
                    to={`/books?category=${cat}`}
                    className="font-sans text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    {cat}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-serif text-sm tracking-widest mb-4 text-primary-foreground/80">关于我们</h4>
            <ul className="space-y-2 font-sans text-sm text-primary-foreground/60">
              <li>周一至周日 10:00 - 21:00</li>
              <li>北京市朝阳区书香路 88 号</li>
              <li>contact@zlxj.com</li>
            </ul>
            <div className="flex gap-3 mt-6">
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="font-sans text-xs text-primary-foreground/40">© 2026 字里行间独立书店. 保留所有权利.</p>
          <p className="font-sans text-xs text-primary-foreground/40">用心选书，以书会友</p>
        </div>
      </div>
    </footer>
  )
}
