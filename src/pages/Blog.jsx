import React, { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { Link } from 'react-router-dom'
import { Calendar, User, ArrowRight } from 'lucide-react'

const Blog = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const posts = [
    {
      title: "5 Common Risks of Sourcing from China & How to Avoid Them",
      excerpt: "From quality fade to IP theft, learn the most common pitfalls when importing from China.",
      date: "Oct 12, 2025",
      author: "Chen Wei",
      img: "China factory quality control risks",
      id: "blog-1"
    },
    {
      title: "How to Verify a Chinese Factory: A Step-by-Step Guide",
      excerpt: "Don't take their word for it. Learn our professional checklist for verifying manufacturers on-site.",
      date: "Nov 05, 2025",
      author: "Samuel Li",
      img: "Business license verification factory tour",
      id: "blog-2"
    },
    {
      title: "Shipping from China in 2026: What Buyers Need to Know",
      excerpt: "Changes in freight rates, customs regulations, and logistics strategies for global buyers.",
      date: "Dec 01, 2025",
      author: "Jessica Wang",
      img: "China shipping container port terminal",
      id: "blog-3"
    }
  ]

  return (
    <div ref={containerRef}>
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">China Sourcing Blog</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Practical tips, industry news, and expert advice for global buyers sourcing from China.
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {posts.map((post, i) => (
            <div key={i} className="group border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all flex flex-col">
              <div className="h-56 overflow-hidden">
                <img 
                  alt={post.title} 
                  data-strk-img-id={`blog-img-${i}`}
                  data-strk-img={post.img}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 space-y-4 flex-grow flex flex-col">
                <div className="flex items-center space-x-4 text-slate-400 text-xs font-bold uppercase tracking-wider">
                  <span className="flex items-center flex-nowrap"><Calendar className="w-3 h-3 mr-1" /> {post.date}</span>
                  <span className="flex items-center flex-nowrap"><User className="w-3 h-3 mr-1" /> {post.author}</span>
                </div>
                <h3 className="text-xl font-bold text-primary group-hover:text-secondary transition-colors leading-tight">{post.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-grow">{post.excerpt}</p>
                <div className="pt-4 mt-auto">
                  <span className="text-primary font-bold text-sm inline-flex items-center group-hover:underline">
                    Read article <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Blog
