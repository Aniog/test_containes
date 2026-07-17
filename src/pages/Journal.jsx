import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import strkImgConfig from '@/strk-img-config.json'

const POSTS = [
  {
    id: 'how-to-layer',
    category: 'Style Notes',
    title: 'How to layer necklaces without overthinking it',
    excerpt:
      'A simple formula: two lengths, one texture, one stone. We unpack the entire stack in three pieces.',
    read: '4 min read',
    image: 'layered gold necklaces on woman editorial portrait soft light',
  },
  {
    id: 'gold-plating-101',
    category: 'Materials',
    title: 'What 18K gold-plated actually means (and why it matters)',
    excerpt:
      'Why micron thickness, base metal, and the lack of nickel are the three things to look for.',
    read: '6 min read',
    image: 'gold plated jewelry closeup macro detail warm light',
  },
  {
    id: 'gifting-without-trying',
    category: 'Gifting',
    title: 'A short guide to gifting without trying too hard',
    excerpt:
      'The pieces that read as personal without asking anyone what they want. Plus, how to size an ear.',
    read: '5 min read',
    image: 'gold jewelry gift wrapped in linen editorial warm light',
  },
]

export default function Journal() {
  const ref = useRef(null)
  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, ref.current)
  }, [])

  return (
    <div ref={ref} className="pt-24 md:pt-28 pb-20">
      <div className="max-w-[1100px] mx-auto px-6 md:px-10 lg:px-16 py-12 md:py-20 text-center">
        <p className="eyebrow">The Journal</p>
        <h1 className="mt-5 font-serif text-4xl md:text-6xl text-espresso font-light tracking-tight leading-[1.05]">
          Stories, <em className="italic">style notes</em>, and the occasional
          studio dispatch.
        </h1>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-16">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-12">
          {POSTS.map((post, idx) => (
            <li key={post.id} className="group">
              <Link to="#" className="block">
                <div className="relative aspect-[4/5] overflow-hidden bg-beige mb-5">
                  <img
                    alt={post.title}
                    data-strk-img-id={`journal-${post.id}`}
                    data-strk-img={`${post.image} [journal-${post.id}-title] [journal-title]`}
                    data-strk-img-ratio="4x5"
                    data-strk-img-width="800"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="eyebrow">{post.category} · {post.read}</p>
                <h2
                  id={`journal-${post.id}-title`}
                  className="mt-3 font-serif text-2xl md:text-[26px] text-espresso font-light leading-snug tracking-tight group-hover:text-gold-dark transition-colors"
                >
                  {post.title}
                </h2>
                <p className="mt-3 text-sm text-espresso/70 font-light leading-relaxed">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-[10px] tracking-widest2 uppercase text-espresso/75 font-medium group-hover:text-gold-dark transition-colors">
                  Read more <ArrowRight size={12} strokeWidth={1.5} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
