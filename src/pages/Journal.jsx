import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { StrkImage } from '@/components/product/StrkImage'

const POSTS = [
  {
    id: 'post-stack',
    title: 'How to build the everyday ear stack',
    excerpt: 'A five-step guide to mixing huggies, cuffs and drops without overdoing it.',
    date: 'June 2026',
    read: '4 min read',
    imageId: 'journal-stack',
    query: 'gold ear stack editorial portrait close up',
  },
  {
    id: 'post-care',
    title: 'How to care for 18K gold-plated jewelry',
    excerpt: 'The few small habits that keep demi-fine jewelry looking new for years.',
    date: 'May 2026',
    read: '3 min read',
    imageId: 'journal-care',
    query: 'gold plated jewelry care editorial flat lay',
  },
  {
    id: 'post-gift',
    title: 'A guide to gifting jewelry (and getting it right)',
    excerpt: 'The questions to ask, the pieces to reach for, and how to make it feel personal.',
    date: 'April 2026',
    read: '5 min read',
    imageId: 'journal-gift',
    query: 'gold jewelry gift box linen editorial still life',
  },
]

export default function Journal() {
  return (
    <div className="bg-cream">
      <section className="pt-32 md:pt-44 pb-16">
        <div className="container-page text-center max-w-3xl mx-auto">
          <p className="eyebrow text-mocha">The Journal</p>
          <h1 className="display-1 mt-5 text-deep">Notes from the studio</h1>
          <p className="body-base mt-7 max-w-xl mx-auto">
            Quiet writing on how to wear, gift, and care for demi-fine jewelry —
            plus a few dispatches from the workbench.
          </p>
        </div>
      </section>

      <section className="pb-24 md:pb-32">
        <div className="container-page">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {POSTS.map((post) => (
              <li key={post.id}>
                <Link to="/journal" className="group block">
                  <div className="relative aspect-[4/5] bg-sand overflow-hidden">
                    <StrkImage
                      id={post.imageId}
                      query={`[journal-context] ${post.query}`}
                      ratio="4x5"
                      width={800}
                      alt={post.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out-soft group-hover:scale-[1.04]"
                    />
                  </div>
                  <div className="pt-5">
                    <p className="text-[11px] tracking-eyebrow uppercase font-sans text-mocha">
                      {post.date} · {post.read}
                    </p>
                    <h2 className="font-serif text-2xl text-deep mt-2 group-hover:text-gold transition-colors">
                      {post.title}
                    </h2>
                    <p className="body-base mt-2">{post.excerpt}</p>
                    <span className="mt-4 inline-flex items-center gap-2 text-[11px] tracking-eyebrow uppercase font-sans text-deep/80 group-hover:text-gold transition-colors">
                      Read more
                      <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <span id="journal-context" className="sr-only">editorial photography</span>
        </div>
      </section>
    </div>
  )
}
