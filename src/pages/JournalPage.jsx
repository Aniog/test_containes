import { Link } from 'react-router-dom'

const articles = [
  { title: 'How to Style Gold Jewelry for Every Occasion', date: 'June 2026', excerpt: 'From boardroom to date night, our guide to layering and stacking your favorite pieces.' },
  { title: 'The Art of Gifting: Our Curated Gift Guide', date: 'May 2026', excerpt: 'Thoughtfully chosen pieces for every woman on your list — from sisters to best friends.' },
  { title: 'Behind the Design: The Making of Royal Heirloom', date: 'April 2026', excerpt: 'Go behind the scenes at our atelier to see how our signature gift set comes to life.' },
]

export default function JournalPage() {
  return (
    <div className="pt-20 md:pt-24 bg-cream min-h-screen">
      <div className="container-narrow py-20 md:py-28">
        <div className="text-center mb-16">
          <p className="text-xs tracking-super-wide uppercase text-gold-dark font-sans mb-4">The Journal</p>
          <h1 className="font-serif text-3xl md:text-5xl text-warm-dark tracking-wider">
            Stories &amp; Inspiration
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {articles.map((a) => (
            <article key={a.title} className="group">
              <div className="aspect-[3/4] bg-[#E8E0D5]/30 mb-5 overflow-hidden">
                <div className="w-full h-full bg-sand/50" />
              </div>
              <p className="text-[10px] tracking-widest uppercase text-muted font-sans">{a.date}</p>
              <h3 className="mt-2 font-serif text-lg tracking-wider text-warm-dark group-hover:text-gold-dark transition-colors">
                {a.title}
              </h3>
              <p className="mt-2 text-sm text-warm-gray font-sans leading-relaxed">{a.excerpt}</p>
              <span className="inline-block mt-3 text-xs tracking-wider uppercase text-warm-dark font-sans border-b border-warm-dark/20 hover:border-warm-dark transition-colors pb-0.5 cursor-pointer">
                Read More
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}