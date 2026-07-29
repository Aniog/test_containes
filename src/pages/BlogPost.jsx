import { useEffect, useRef } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import CTASection from '@/components/home/CTASection'

const posts = {
  'sourcing-guide-2024': {
    title: 'The Complete Guide to Sourcing from China in 2024',
    category: 'Sourcing Guide',
    date: 'July 15, 2024',
    readTime: '12 min read',
    author: 'SSourcing China Team',
    content: `
      Sourcing from China remains one of the most effective ways to bring products to market at competitive prices. However, the process involves multiple steps that require careful planning and execution.

      This guide walks you through the entire sourcing journey, from initial research to final delivery.

      ## Step 1: Define Your Requirements

      Before contacting any supplier, you need a clear understanding of what you are looking for. This includes:

      - Product specifications and technical drawings
      - Quality standards and certifications required
      - Target price range and payment terms
      - Estimated order quantities and frequency
      - Delivery timeline and shipping preferences

      The more detailed your requirements, the more accurate your supplier matches will be.

      ## Step 2: Find Potential Suppliers

      There are several channels to find Chinese suppliers:

      - Online B2B platforms (Alibaba, Made-in-China, Global Sources)
      - Industry trade shows (Canton Fair, industry-specific exhibitions)
      - Sourcing agents with established supplier networks
      - Industry referrals and recommendations

      Working with a sourcing agent can significantly reduce the time and risk involved in supplier identification, as agents have pre-vetted networks and market knowledge.

      ## Step 3: Verify and Audit

      Never skip the verification step. A factory that looks good on paper may have issues that only an on-site visit can reveal. Key verification areas include:

      - Business license and legal registration
      - Actual production facilities and equipment
      - Workforce size and technical capabilities
      - Quality control processes and certifications
      - Previous export experience and client references

      ## Step 4: Sample Development

      Always request samples before placing a production order. Samples allow you to:

      - Evaluate product quality and workmanship
      - Test functionality and durability
      - Verify materials and specifications
      - Make adjustments before mass production

      ## Step 5: Quality Control

      Implement a multi-stage quality control process:

      1. Raw material inspection
      2. During-production inspection
      3. Pre-shipment inspection
      4. Container loading supervision

      Using AQL (Acceptable Quality Limit) standards provides an objective framework for quality assessment.

      ## Step 6: Shipping and Logistics

      Choose the right shipping method based on your timeline and budget:

      - Sea freight: Most economical for large volumes, 15-30 days transit
      - Air freight: Faster but more expensive, 3-7 days transit
      - Express courier: Best for small shipments, 3-5 days transit

      Ensure all documentation is in order, including commercial invoice, packing list, bill of lading, and certificates of origin.

      ## Conclusion

      Sourcing from China successfully requires thorough preparation, diligent verification, and ongoing quality management. Whether you are a first-time importer or an experienced buyer, partnering with a knowledgeable sourcing agent can help you navigate the complexities and achieve better outcomes.
    `,
  },
}

export default function BlogPost() {
  const { id } = useParams()
  const post = posts[id]
  const pageRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, pageRef.current)
  }, [id])

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-24 text-center">
        <h1 className="text-3xl font-bold text-neutral-900 mb-4">Post Not Found</h1>
        <p className="text-neutral-600 mb-8">The article you are looking for does not exist.</p>
        <Link to="/blog" className="text-brand-500 font-semibold hover:text-brand-600">
          &larr; Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div ref={pageRef}>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-brand-500 mb-8 transition-colors">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        <div className="mb-8">
          <span className="text-xs font-semibold text-brand-500 bg-brand-50 px-3 py-1 rounded-full">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-neutral-900 mt-4 mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-neutral-500">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>

        <div
          className="h-64 md:h-80 rounded-xl overflow-hidden mb-10"
          data-strk-bg-id={`blog-post-${id}-bg`}
          data-strk-bg={`[blog-post-title-${id}]`}
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1200"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#e5e7eb', backgroundImage: 'none' }}
        />

        <div className="prose prose-neutral max-w-none">
          {post.content.split('\n').map((line, i) => {
            if (line.startsWith('## ')) {
              return <h2 key={i} className="text-2xl font-bold text-neutral-900 mt-10 mb-4">{line.replace('## ', '')}</h2>
            }
            if (line.startsWith('- ')) {
              return <li key={i} className="text-neutral-700 ml-4">{line.replace('- ', '')}</li>
            }
            if (line.trim() === '') {
              return <div key={i} className="h-3" />
            }
            return <p key={i} className="text-neutral-700 leading-relaxed mb-4">{line}</p>
          })}
        </div>
      </article>

      <CTASection />
    </div>
  )
}