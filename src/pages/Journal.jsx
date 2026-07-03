import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const POSTS = [
  {
    id: 'j-1',
    category: 'Style',
    title: 'How to layer necklaces without it looking like costume jewelry',
    excerpt:
      'A short guide to chain weights, pendant placement, and the three rules we always follow.',
    date: 'June 12, 2026',
    readTime: '4 min',
    art: 'reelNeck',
  },
  {
    id: 'j-2',
    category: 'Materials',
    title: '18K gold plating vs. gold-filled: what you’re actually buying',
    excerpt:
      'Both sound luxurious. Only one of them behaves like fine jewelry after a year of showers.',
    date: 'May 28, 2026',
    readTime: '6 min',
    art: 'brandStory',
  },
  {
    id: 'j-3',
    category: 'Studio',
    title: 'A morning at the workshop in Porto',
    excerpt:
      'Coffee, polish, the seven hands that finish every Velmora piece — and a tour of the casting room.',
    date: 'April 30, 2026',
    readTime: '5 min',
    art: 'reelCuff',
  },
]

export default function Journal() {
  return (
    <>
      <section className="pt-28 lg:pt-40 pb-16 bg-ivory-50">
        <div className="container-x text-center max-w-[720px] mx-auto">
          <span className="eyebrow">Journal</span>
          <h1 className="mt-4 font-serif text-ink-900 text-[44px] sm:text-[64px] lg:text-[80px] leading-[1.05] tracking-[-0.015em] text-balance">
            Notes from the studio.
          </h1>
          <p className="mt-5 text-[15px] text-ink-500 max-w-[520px] mx-auto">
            Styling, materials, the people behind the work. New every other Tuesday.
          </p>
        </div>
      </section>
      <section className="pb-24 lg:pb-32 bg-ivory-50">
        <div className="container-x">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {POSTS.map((post) => (
              <li key={post.id}>
                <Link to="/journal" className="block group">
                  <div className="aspect-[4/5] overflow-hidden bg-ink-900">
                    {/* eslint-disable-next-line */}
                    <img alt="" className="hidden" />
                  </div>
                  <div className="pt-5">
                    <span className="eyebrow">{post.category}</span>
                    <h2 className="mt-3 font-serif text-[22px] lg:text-[24px] leading-[1.2] text-ink-900 group-hover:underline underline-offset-4 decoration-1">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-[14px] text-ink-500 line-clamp-2">{post.excerpt}</p>
                    <p className="mt-3 text-[11px] uppercase tracking-[0.22em] text-ink-400">
                      {post.date} · {post.readTime}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-14 text-center">
            <Link to="/journal" className="btn-outline">
              Read more
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
