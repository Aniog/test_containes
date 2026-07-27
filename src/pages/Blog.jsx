import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ArrowRight, Calendar } from 'lucide-react'
import { blogPosts } from '@/data/content'
import { format, parseISO } from 'date-fns'

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Blog</h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Practical insights on China sourcing, supplier verification, quality control, and logistics. Written for importers and procurement professionals.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-gray-50 border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <img
                  alt={post.title}
                  data-strk-img-id={post.imgId}
                  data-strk-img={`[${post.descId}] [${post.titleId}]`}
                  data-strk-img-ratio="3x2"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-navy/10 text-navy text-xs font-semibold px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-slate-light text-xs flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {format(parseISO(post.date), 'MMM d, yyyy')}
                    </span>
                  </div>
                  <h3 id={post.titleId} className="font-bold mb-2 leading-snug">{post.title}</h3>
                  <p id={post.descId} className="text-slate-muted text-sm leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center text-navy-light font-semibold text-sm hover:text-navy transition-colors cursor-pointer">
                    Read Article <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Practical Sourcing Advice?</h2>
          <p className="text-slate-muted mb-8">
            Our blog covers real-world sourcing challenges. If you have a specific question, reach out directly — we are happy to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-navy text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-navy-light transition-colors duration-200"
          >
            Contact Our Team
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </div>
  )
}
