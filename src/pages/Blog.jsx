import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Blog = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    if (ImageHelper && ImageHelper.loadImages && strkImgConfig) {
      return ImageHelper.loadImages(strkImgConfig, containerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className="w-full pb-20">
      <div className="bg-gray-50 py-16 lg:py-24 border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <h1 id="page-title" className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Sourcing Insights</h1>
          <p id="page-desc" className="text-xl text-gray-600">
            Expert advice, industry news, and practical guides on how to source from China successfully.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div className="h-48 relative bg-gray-200">
                <img
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={post.title}
                  className="w-full h-full object-cover"
                  data-strk-img-id={`blog-img-${index}`}
                  data-strk-img={`[blog-title-${index}] business wholesale china`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="600"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">{post.category}</span>
                  <span className="text-xs text-gray-500">{post.date}</span>
                </div>
                <h2 id={`blog-title-${index}`} className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-6 line-clamp-3 text-sm flex-grow">
                  {post.excerpt}
                </p>
                <Link to="#" className="text-blue-600 font-medium hover:text-blue-700 text-sm mt-auto inline-block">
                  Read Full Article &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-16 text-center">
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 h-10 px-6 transition-colors">
          Load More Articles
        </button>
      </div>
    </div>
  )
}

const posts = [
  {
    title: "How to Spot a Trading Company vs. a Real Manufacturer on Alibaba",
    excerpt: "Many suppliers claiming to be factories on B2B platforms are actually middlemen. Learn the 5 tell-tale signs to spot the difference and save margin.",
    category: "Supplier Verification",
    date: "May 12, 2026"
  },
  {
    title: "Understanding AQL (Acceptable Quality Limit) in China Manufacturing",
    excerpt: "Before hiring an inspector, you need to understand how AQL works. We break down the mathematical tables into plain English for buyers.",
    category: "Quality Control",
    date: "April 28, 2026"
  },
  {
    title: "Incoterms 2020: EXW vs. FOB vs. DDP for Your Next Shipment",
    excerpt: "Choosing the wrong shipping terms can result in hidden fees and liabilities. Here is a definitive guide on what Incoterms you should negotiate.",
    category: "Logistics",
    date: "April 15, 2026"
  },
  {
    title: "Why 'Quality Fade' Happens in Chinese Factories and How to Prevent It",
    excerpt: "Your first order is perfect, but the third order has cheapened materials. This phenomenon is called 'Quality Fade'. Here's how to stop it.",
    category: "Production Management",
    date: "March 30, 2026"
  },
  {
    title: "Negotiating with Chinese Suppliers: Cultural Nuances You Must Know",
    excerpt: "Understanding 'Guanxi' and 'Mianzi' (Face) can drastically improve your negotiation outcomes. Learn how to be firm without causing offense.",
    category: "Business Culture",
    date: "March 10, 2026"
  },
  {
    title: "Sea Freight vs. Air Freight: Calculating the True Break-Even Point",
    excerpt: "With fluctuating logistics costs, calculating whether to ship by air or sea isn't always straightforward. We provide a framework for making the right call.",
    category: "Logistics",
    date: "February 22, 2026"
  }
]

export default Blog
