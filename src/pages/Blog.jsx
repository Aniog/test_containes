import React, { useState, useEffect, useRef } from 'react'
import SectionHeading from '@/components/shared/SectionHeading'
import CTA from '@/components/shared/CTA'
import { ArrowLeft, Calendar, Clock } from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null)
  const containerRef = useRef(null)

  useEffect(() => {
    document.title = selectedPost ? 'Blog | SSourcing China' : 'Blog | China Sourcing Insights | SSourcing China'
    const cleanup = ImageHelper.loadImages(strkImgConfig, containerRef.current)
    return cleanup
  }, [selectedPost])

  const posts = [
    {
      id: 'blog1',
      title: 'How to Verify a Chinese Supplier Before Placing an Order',
      date: '2026-05-12',
      readTime: '8 min',
      category: 'Supplier Verification',
      excerpt: 'A practical checklist for buyers who want to reduce the risk of working with unverified factories.',
      content: `
        <p>Many sourcing problems begin with insufficient supplier verification. Before sending a deposit or placing a production order, buyers should confirm that the supplier is a legitimate business with the capability to deliver what was promised.</p>
        
        <h3>Start with basic registration checks</h3>
        <p>Request the supplier's business license and verify it through official channels. In China, you can check company registration through the National Enterprise Credit Information Publicity System. Confirm that the company name, address, and legal representative match what the supplier provided.</p>
        
        <h3>Visit or arrange a third-party audit</h3>
        <p>Nothing replaces an on-site visit. If you cannot travel, hire a local inspection company to conduct a factory audit. The audit should cover production capacity, equipment, workforce, and quality management systems. Ask for photos of the actual production floor, not just the showroom.</p>
        
        <h3>Request references from other buyers</h3>
        <p>Ask for contact information of 2-3 recent overseas clients. Reach out to them directly. Ask about on-time delivery, quality consistency, and how the supplier handled problems. Be cautious if a supplier refuses to provide references.</p>
        
        <h3>Order samples before committing</h3>
        <p>Never place a bulk order based on catalog photos or website images. Order samples that represent the actual production quality. Test samples against your specifications. If samples do not match, the production run is unlikely to meet your standards.</p>
        
        <h3>Document everything in writing</h3>
        <p>Confirm all agreements in writing, including specifications, pricing, payment terms, and delivery schedule. Verbal promises are difficult to enforce. Keep records of all communications.</p>
      `,
    },
    {
      id: 'blog2',
      title: 'Understanding Pre-Shipment Inspection: What Buyers Need to Know',
      date: '2026-04-28',
      readTime: '6 min',
      category: 'Quality Control',
      excerpt: 'Pre-shipment inspection is a critical checkpoint. Here is what it covers and how to make it effective.',
      content: `
        <p>Pre-shipment inspection (PSI) is the last opportunity to identify quality issues before goods leave the factory. It is not a guarantee of perfect quality, but it significantly reduces the chance of receiving defective products.</p>
        
        <h3>What a standard PSI includes</h3>
        <p>A typical inspection checks product appearance, workmanship, dimensions, functionality, packaging, and labeling. The inspector samples according to AQL (Acceptable Quality Limit) standards. Results are documented with photos and measurements.</p>
        
        <h3>Define your acceptance criteria in advance</h3>
        <p>Provide the inspector with clear specifications and a checklist. Vague instructions lead to subjective results. Include photos of acceptable and unacceptable samples when possible.</p>
        
        <h3>Understand the limitations</h3>
        <p>PSI is a sampling process. It does not test every unit. It cannot detect issues that appear only after extended use. It is a risk-reduction tool, not a guarantee.</p>
        
        <h3>Act on inspection findings</h3>
        <p>If an inspection fails, decide whether to reject the shipment, request rework, or accept with concessions. Do not ignore failed inspections. Document your decision and communicate it to the supplier in writing.</p>
      `,
    },
    {
      id: 'blog3',
      title: 'Common Mistakes When Sourcing from China for the First Time',
      date: '2026-04-15',
      readTime: '7 min',
      category: 'Buyer Guidance',
      excerpt: 'New buyers often make the same errors. Here are the most frequent ones we see and how to avoid them.',
      content: `
        <p>First-time buyers often approach China sourcing with assumptions that do not match reality. These mistakes can lead to delays, quality issues, and financial loss.</p>
        
        <h3>Mistake 1: Choosing based on lowest price only</h3>
        <p>The lowest quote often comes from suppliers who cut corners. Compare total cost including quality risk, lead time, and communication effort. A slightly higher price from a more reliable supplier is often cheaper in the long run.</p>
        
        <h3>Mistake 2: Skipping factory verification</h3>
        <p>Many buyers place orders after exchanging emails and photos. Without verification, you cannot confirm the supplier has the equipment, workforce, or quality systems they claim.</p>
        
        <h3>Mistake 3: Vague specifications</h3>
        <p>"Good quality" is not a specification. Provide measurable requirements for dimensions, materials, finish, and performance. Include tolerances and acceptance criteria.</p>
        
        <h3>Mistake 4: Ignoring communication delays</h3>
        <p>Time zone differences and language barriers slow down responses. Build buffer time into your schedule. Do not expect instant replies.</p>
        
        <h3>Mistake 5: Rushing the timeline</h3>
        <p>Quality problems often result from compressed schedules. Allow time for sampling, revisions, and proper production. Rushing increases the chance of defects.</p>
      `,
    },
    {
      id: 'blog4',
      title: 'Sea Freight vs Air Freight: Choosing the Right Option',
      date: '2026-03-30',
      readTime: '5 min',
      category: 'Logistics',
      excerpt: 'Freight choice affects cost, speed, and risk. Here is how to decide between sea and air for your order.',
      content: `
        <p>Freight method is a major cost driver and timeline factor. The right choice depends on order value, urgency, and product characteristics.</p>
        
        <h3>Sea freight</h3>
        <p>Sea freight is significantly cheaper per unit for larger shipments. Transit time from China to major ports is typically 25-40 days depending on destination. It is suitable for non-urgent, high-volume, or heavy goods. Sea freight has lower carbon impact per unit than air.</p>
        
        <h3>Air freight</h3>
        <p>Air freight is faster (3-10 days) but much more expensive. It makes sense for high-value, low-volume, or time-sensitive products. Air freight also has stricter weight and size limits.</p>
        
        <h3>Hybrid options</h3>
        <p>Some buyers use sea freight for the bulk of an order and air freight for a small initial quantity to test the market. This balances cost and speed.</p>
        
        <h3>Plan for total transit time</h3>
        <p>Remember to add time for customs clearance, inland transport, and any inspection or consolidation. The ocean voyage is only part of the total lead time.</p>
      `,
    },
    {
      id: 'blog5',
      title: 'What to Include in Your Product Specification Document',
      date: '2026-03-18',
      readTime: '6 min',
      category: 'Buyer Guidance',
      excerpt: 'Clear specifications reduce misunderstandings. Here is a practical template for what to document.',
      content: `
        <p>A good specification document is the foundation of a successful sourcing project. It tells the supplier exactly what you expect and provides a reference for quality checks.</p>
        
        <h3>Product description and intended use</h3>
        <p>Describe the product and how it will be used. This helps the supplier understand priorities and suggest appropriate materials or processes.</p>
        
        <h3>Materials and components</h3>
        <p>Specify materials, grades, and sources if relevant. Include any required certifications or compliance standards (e.g., FDA, CE, RoHS).</p>
        
        <h3>Dimensions and tolerances</h3>
        <p>Provide exact measurements with acceptable tolerances. Include drawings or 3D files when available. Specify which dimensions are critical.</p>
        
        <h3>Finish and appearance</h3>
        <p>Describe surface finish, color, printing, and labeling requirements. Include reference samples or photos if possible.</p>
        
        <h3>Performance and testing</h3>
        <p>Define functional requirements and any tests the product must pass. Specify test methods and acceptance criteria.</p>
        
        <h3>Packaging and labeling</h3>
        <p>Detail packaging requirements, including materials, carton markings, and any retail packaging. Include barcodes or labels if needed.</p>
      `,
    },
    {
      id: 'blog6',
      title: 'How Factory Audits Reduce Sourcing Risk',
      date: '2026-02-25',
      readTime: '7 min',
      category: 'Supplier Verification',
      excerpt: 'An audit is more than a checkbox. Here is what a useful factory audit actually examines.',
      content: `
        <p>A factory audit is one of the most effective ways to assess whether a supplier can meet your requirements. It provides information that photos and emails cannot.</p>
        
        <h3>What a thorough audit covers</h3>
        <p>A proper audit examines business legitimacy, production capacity, equipment condition, workforce skills, quality management systems, and working conditions. It includes document review and physical inspection of the facility.</p>
        
        <h3>Look for evidence, not claims</h3>
        <p>Do not rely on what the supplier says. Ask to see production records, equipment maintenance logs, and quality control documentation. Observe actual production if possible.</p>
        
        <h3>Assess capacity honestly</h3>
        <p>A factory may have impressive equipment but limited available capacity. Ask about current order volume and how your order would fit into their schedule.</p>
        
        <h3>Document findings with photos</h3>
        <p>Photos of the actual production floor, equipment, and processes are more valuable than showroom images. Request photos from the audit and review them carefully.</p>
        
        <h3>Use audit results to negotiate</h3>
        <p>If an audit reveals gaps, use that information to negotiate terms, request improvements, or decide whether to proceed. An audit is a decision tool, not just a formality.</p>
      `,
    },
  ]

  const categories = ['All', ...Array.from(new Set(posts.map(p => p.category)))]

  const [activeCategory, setActiveCategory] = useState('All')

  const filteredPosts = activeCategory === 'All' 
    ? posts 
    : posts.filter(p => p.category === activeCategory)

  if (selectedPost) {
    const post = posts.find(p => p.id === selectedPost)
    if (!post) return null

    return (
      <div>
        <div className="max-w-3xl mx-auto px-6 pt-12 pb-8">
          <button 
            onClick={() => setSelectedPost(null)}
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to all articles
          </button>

          <div className="mb-4">
            <span className="text-xs font-medium px-3 py-1 bg-slate-100 rounded">{post.category}</span>
          </div>
          
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">{post.title}</h1>
          
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-8">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime} read</span>
          </div>

          <div 
            className="prose prose-slate max-w-none text-[15px] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-12 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-600 mb-4">Have a question about this topic?</p>
            <a href="/contact" className="text-sm font-medium underline">Contact us for sourcing advice →</a>
          </div>
        </div>

        <CTA />
      </div>
    )
  }

  return (
    <div ref={containerRef}>
      <section className="bg-slate-50 py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          data-strk-bg-id="blog-hero-bg"
          data-strk-bg="China business meeting professional sourcing"
          data-strk-bg-ratio="16x9"
          data-strk-bg-width="1600"
        />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl font-semibold mb-4">Blog</h1>
          <p className="text-lg text-slate-600">Practical guidance on sourcing from China. Written for buyers who want to understand the process and reduce risk.</p>
        </div>
      </section>

      <section className="section max-w-6xl mx-auto px-6">
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-sm rounded-full border transition-colors ${
                activeCategory === cat 
                  ? 'bg-slate-900 text-white border-slate-900' 
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedPost(post.id)}
              className="blog-card text-left bg-white border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-all"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium px-2.5 py-0.5 bg-slate-100 rounded">{post.category}</span>
              </div>
              <img
                data-strk-img-id={`blog-thumb-${post.id}`}
                data-strk-img={`blog-thumb-${post.id}-title China business professional`}
                data-strk-img-ratio="16x9"
                data-strk-img-width="600"
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                alt={post.title}
                className="w-full h-36 object-cover rounded mb-4"
              />
              <div id={`blog-thumb-${post.id}-title`} className="sr-only">{post.title}</div>
              <h3 className="font-semibold text-lg leading-snug mb-3">{post.title}</h3>
              <p className="text-sm text-slate-600 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.date}</span>
                <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
              </div>
            </button>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-slate-500 py-12">No articles in this category yet.</p>
        )}
      </section>

      <section className="section bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold mb-3">Looking for specific guidance?</h2>
          <p className="text-slate-600 mb-6">We can discuss your sourcing situation directly. Reach out for a conversation.</p>
          <a href="/contact" className="inline-block px-6 py-3 bg-slate-900 text-white rounded-md text-sm font-medium hover:bg-slate-800">Get in Touch</a>
        </div>
      </section>

      <CTA />
    </div>
  )
}

export default Blog
