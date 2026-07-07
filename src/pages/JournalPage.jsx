import React from 'react'
import { Link } from 'react-router-dom'
import { BookOpen } from 'lucide-react'

export default function JournalPage() {
  return (
    <div className="bg-cream min-h-screen pt-20 md:pt-24">
      <div className="max-w-3xl mx-auto px-5 md:px-8 py-16 md:py-24 text-center">
        <BookOpen className="w-10 h-10 text-gold mx-auto mb-6" />
        <p className="font-sans text-xs uppercase tracking-nav text-gold mb-4">Coming Soon</p>
        <h1 className="font-serif text-4xl md:text-5xl font-medium text-charcoal mb-6">
          Journal
        </h1>
        <p className="font-sans text-sm md:text-base text-stone-500 leading-relaxed mb-8 max-w-md mx-auto">
          Style guides, care tips, and behind-the-scenes stories from the world of Velmora. Sign up for our newsletter to be the first to know.
        </p>
        <Link
          to="/shop"
          className="inline-block border border-charcoal text-charcoal font-sans text-xs uppercase tracking-btn font-medium px-8 py-3 hover:bg-charcoal hover:text-cream transition-colors duration-200"
        >
          Shop the Collection
        </Link>
      </div>
    </div>
  )
}
