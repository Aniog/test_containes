import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import StrkImage from '@/components/StrkImage'
import SectionHeading from '@/components/SectionHeading'

const POSTS = [
  {
    id: 'p1',
    title: 'How to Style Gold Huggies for Every Day',
    excerpt: 'Three effortless ways to wear your huggies from morning to evening.',
    category: 'Styling',
    imgId: 'journal-post-1-a1',
    titleId: 'journal-title-1',
    descId: 'journal-desc-1',
  },
  {
    id: 'p2',
    title: 'Caring for 18K Gold Plated Jewelry',
    excerpt: 'Simple rituals to keep your gold warm and glowing for years.',
    category: 'Care',
    imgId: 'journal-post-2-b2',
    titleId: 'journal-title-2',
    descId: 'journal-desc-2',
  },
  {
    id: 'p3',
    title: 'The Quiet Luxury Edit: Gold That Whispers',
    excerpt: 'Why understated gold is the new statement — and how to wear it.',
    category: 'Edit',
    imgId: 'journal-post-3-c3',
    titleId: 'journal-title-3',
    descId: 'journal-desc-3',
  },
]

export default function Journal() {
  return (
    <div className="pt-28 md:pt-32 pb-20 md:pb-28">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <SectionHeading
          eyebrow="Stories & Styling"
          title="The Journal"
          subtitle="Notes on gold, care, and the art of wearing jewelry every day."
        />

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {POSTS.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              <div className="relative aspect-[4/5] overflow-hidden bg-cream">
                <StrkImage
                  imgId={post.imgId}
                  query={`[${post.descId}] [${post.titleId}] gold jewelry editorial`}
                  ratio="4x5"
                  width={700}
                  alt={post.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-xs uppercase tracking-widest2 text-gold">
                {post.category}
              </p>
              <h3
                id={post.titleId}
                className="mt-2 font-serif text-2xl text-ink group-hover:text-gold transition-colors"
              >
                {post.title}
              </h3>
              <p id={post.descId} className="mt-2 text-sm text-muted leading-relaxed">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-widest2 text-ink border-b border-ink pb-1 group-hover:text-gold group-hover:border-gold transition-colors">
                Read More <ArrowRight className="w-4 h-4" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
