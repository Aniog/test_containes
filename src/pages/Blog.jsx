import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const posts = [
  {
    id: 'avoid-sourcing-scams',
    title: 'How to Avoid Sourcing Scams on B2B Platforms',
    excerpt: 'Learn the red flags to watch for when sourcing suppliers through Alibaba, Global Sources, and other B2B platforms. Protect your business from common scams.',
    date: 'May 15, 2026',
    readTime: '6 min read',
    category: 'Sourcing Tips',
    imgId: 'blog-scams-bg-m6n7o8',
  },
  {
    id: 'understanding-aql',
    title: 'Understanding AQL (Acceptable Quality Limit) for Importers',
    excerpt: 'A practical guide to AQL sampling standards for quality inspection. What every importer should know about ISO 2859-1 and how to set the right quality levels.',
    date: 'April 28, 2026',
    readTime: '8 min read',
    category: 'Quality Control',
    imgId: 'blog-aql-bg-p9q0r1',
  },
  {
    id: 'incoterms-guide',
    title: 'Incoterms 2020: A Complete Guide for Importers from China',
    excerpt: 'FOB, CIF, DDP, EXW — understand which Incoterm is right for your shipment and how each affects your costs, risks, and responsibilities.',
    date: 'April 10, 2026',
    readTime: '10 min read',
    category: 'Logistics',
    imgId: 'blog-incoterms-bg-s2t3u4',
  },
  {
    id: 'factory-audit-checklist',
    title: 'Factory Audit Checklist: What to Check Before You Place an Order',
    excerpt: 'A comprehensive checklist for conducting a factory audit in China. From business licenses to production capacity — know what to verify before committing.',
    date: 'March 22, 2026',
    readTime: '7 min read',
    category: 'Supplier Verification',
    imgId: 'blog-audit-bg-v5w6x7',
  },
  {
    id: 'moq-negotiation',
    title: 'How to Negotiate Lower MOQs with Chinese Manufacturers',
    excerpt: 'Small business? Here are practical strategies to negotiate lower minimum order quantities with Chinese factories without sacrificing price competitiveness.',
    date: 'March 5, 2026',
    readTime: '5 min read',
    category: 'Sourcing Tips',
    imgId: 'blog-moq-bg-y8z9a0',
  },
  {
    id: 'shipping-from-china',
    title: 'Shipping from China: Sea vs. Air vs. Rail — What to Choose',
    excerpt: 'Compare shipping methods from China based on cost, speed, and cargo type. Make the right logistics decision for your import business.',
    date: 'February 18, 2026',
    readTime: '7 min read',
    category: 'Logistics',
    imgId: 'blog-shipping-bg-b1c2d3',
  },
  {
    id: 'canton-fair-guide',
    title: 'Canton Fair Guide: How to Source Products at China\'s Largest Trade Fair',
    excerpt: 'Everything you need to know about attending the Canton Fair — from preparation to follow-up. Tips for making the most of your visit.',
    date: 'February 1, 2026',
    readTime: '9 min read',
    category: 'Sourcing Tips',
    imgId: 'blog-canton-bg-e4f5g6',
  },
  {
    id: 'product-compliance',
    title: 'Product Compliance: CE, FDA, RoHS — What Importers Must Know',
    excerpt: 'An overview of key product compliance requirements for importing to Europe, the US, and other major markets. Avoid costly customs rejections.',
    date: 'January 15, 2026',
    readTime: '8 min read',
    category: 'Compliance',
    imgId: 'blog-compliance-bg-h7i8j9',
  },
  {
    id: 'payment-methods',
    title: 'Safe Payment Methods When Buying from Chinese Suppliers',
    excerpt: 'TT, L/C, OA, Alibaba Trade Assurance — understand the safest ways to pay Chinese suppliers and protect yourself from payment risks.',
    date: 'December 20, 2025',
    readTime: '6 min read',
    category: 'Sourcing Tips',
    imgId: 'blog-payment-bg-k0l1m2',
  },
]

export default function Blog() {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      <section className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">Blog</p>
          <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
            Sourcing Insights & Guides
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl">
            Practical advice on sourcing from China, supplier management, quality control,
            and international logistics — from our team on the ground.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-surface rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow group">
                <div
                  data-strk-bg-id={post.imgId}
                  data-strk-bg={`[blog-title-${post.id}] china sourcing import guide`}
                  data-strk-bg-ratio="16x9"
                  data-strk-bg-width="600"
                  style={{ paddingTop: '56.25%', backgroundSize: 'cover', backgroundPosition: 'center' }}
                />
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="text-xs font-semibold text-accent uppercase tracking-wider">{post.category}</span>
                    <div className="flex items-center gap-3 text-xs text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {post.readTime}
                      </span>
                    </div>
                  </div>
                  <h3 id={`blog-title-${post.id}`} className="font-bold text-navy mb-2 group-hover:text-accent transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-accent group-hover:text-accent-hover transition-colors cursor-pointer">
                    Read More
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Have a sourcing question?
          </h2>
          <p className="text-gray-600 mb-8">
            Our team is happy to answer your questions about sourcing from China. Contact us
            for a free consultation.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors shadow-md">
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  )
}