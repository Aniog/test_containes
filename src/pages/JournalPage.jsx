import React from 'react'
import { Link } from 'react-router-dom'

const JournalPage = () => {
  const posts = [
    {
      id: 1,
      title: 'How to Layer Gold Necklaces Like a Stylist',
      excerpt: 'Master the art of necklace layering with our simple guide to mixing lengths, textures, and tones.',
      date: 'June 28, 2026',
      category: 'Style Guide',
    },
    {
      id: 2,
      title: 'The Truth About Gold Plated Jewelry',
      excerpt: 'We break down what 18K gold plating really means — and how to make your pieces last for years.',
      date: 'June 15, 2026',
      category: 'Education',
    },
    {
      id: 3,
      title: '5 Jewelry Trends That Are Defining 2026',
      excerpt: 'From chunky huggies to sculptural ear cuffs, these are the pieces everyone is wearing this season.',
      date: 'May 30, 2026',
      category: 'Trends',
    },
  ]

  return (
    <div className="bg-brand-cream pt-20 md:pt-24 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="text-center mb-16">
          <h1 className="font-serif text-3xl md:text-4xl tracking-wide text-brand-charcoal">Journal</h1>
          <div className="w-12 h-px bg-brand-gold mx-auto mt-4" />
          <p className="mt-4 text-sm text-brand-warm-gray font-sans">Stories, guides, and inspiration from the world of Velmora</p>
        </div>

        <div className="space-y-12">
          {posts.map(post => (
            <article key={post.id} className="group cursor-pointer">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] tracking-ultra-wide uppercase font-sans text-brand-gold">{post.category}</span>
                <span className="w-1 h-1 rounded-full bg-brand-pale-gray" />
                <span className="text-[10px] tracking-widest font-sans text-brand-light-gray">{post.date}</span>
              </div>
              <h2 className="font-serif text-xl md:text-2xl tracking-wide text-brand-charcoal group-hover:text-brand-gold transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-sm text-brand-warm-gray font-sans leading-relaxed">{post.excerpt}</p>
              <span className="inline-block mt-3 text-xs tracking-widest uppercase font-sans text-brand-charcoal border-b border-brand-charcoal group-hover:text-brand-gold group-hover:border-brand-gold transition-colors pb-0.5">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default JournalPage
