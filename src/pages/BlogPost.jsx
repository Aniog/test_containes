import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

const posts = {
  'china-sourcing-2026-trends': {
    title: 'China Sourcing Trends to Watch in 2026',
    date: 'July 15, 2026',
    category: 'Industry Insights',
    readTime: '8 min',
    content: [
      { type: 'p', text: 'The landscape of sourcing from China continues to evolve. Buyers who stay informed about emerging trends are better positioned to make strategic decisions about suppliers, regions, and supply chain structures.' },
      { type: 'h2', text: 'Regional Shifts Within China' },
      { type: 'p', text: 'While coastal provinces remain dominant for many categories, we are seeing increased activity in inland manufacturing hubs. Lower labor costs, government incentives, and improving infrastructure are making regions like Sichuan, Anhui, and Henan more attractive for certain product types.' },
      { type: 'h2', text: 'Automation and Capacity Realignment' },
      { type: 'p', text: 'Many factories are investing in automation to address labor shortages and rising wages. This is changing the economics of low-volume orders and pushing some suppliers to focus on higher-value, more automated production.' },
      { type: 'h2', text: 'Quality Expectations Continue to Rise' },
      { type: 'p', text: 'Buyers are no longer accepting the quality levels that were standard even five years ago. Suppliers who cannot demonstrate consistent quality systems are losing business to competitors who have invested in process control and testing.' },
      { type: 'h2', text: 'Supply Chain Diversification' },
      { type: 'p', text: 'Many companies are maintaining China as a primary source while developing secondary options in Vietnam, India, and Mexico. This "China Plus" approach requires careful coordination but reduces single-point-of-failure risk.' },
      { type: 'h2', text: 'What This Means for Buyers' },
      { type: 'p', text: 'The key takeaway is that supplier selection matters more than ever. Factories that were acceptable in the past may no longer meet current expectations. Regular audits, clear quality agreements, and ongoing monitoring are essential.' }
    ]
  },
  'factory-audit-checklist': {
    title: 'Factory Audit Checklist: What to Verify Before You Order',
    date: 'July 8, 2026',
    category: 'Supplier Management',
    readTime: '6 min',
    content: [
      { type: 'p', text: 'A factory audit is one of the most important steps in the sourcing process. It helps you verify that a supplier can actually deliver what they promise before you place an order.' },
      { type: 'h2', text: 'Legal and Business Verification' },
      { type: 'p', text: 'Confirm that the company is properly registered and operating legally. Check business licenses, export licenses, and any required permits for your product category.' },
      { type: 'h2', text: 'Production Capacity' },
      { type: 'p', text: 'Assess whether the factory has the equipment, space, and workforce to handle your order volume within your timeline. Ask about current capacity utilization and peak season constraints.' },
      { type: 'h2', text: 'Quality Management' },
      { type: 'p', text: 'Look for documented quality procedures, incoming material inspection, in-process controls, and final inspection processes. Ask to see recent inspection records and corrective action reports.' },
      { type: 'h2', text: 'Workforce and Working Conditions' },
      { type: 'p', text: 'Observe worker conditions, safety practices, and general workplace environment. This is both an ethical consideration and an indicator of operational stability.' },
      { type: 'h2', text: 'Documentation and Traceability' },
      { type: 'p', text: 'Can the factory provide material certificates, production records, and batch traceability? This becomes critical if you need to investigate quality issues later.' }
    ]
  },
  'quality-inspection-standards': {
    title: 'Understanding Quality Inspection Standards for Importers',
    date: 'June 28, 2026',
    category: 'Quality Control',
    readTime: '7 min',
    content: [
      { type: 'p', text: 'Quality inspection is not about catching every defect. It is about managing risk at an acceptable cost. Understanding inspection standards helps you set appropriate expectations with suppliers and inspection teams.' },
      { type: 'h2', text: 'What is AQL?' },
      { type: 'p', text: 'Acceptable Quality Limit (AQL) defines the maximum number of defects considered acceptable in a sample. Different AQL levels are appropriate for different product types and risk tolerances.' },
      { type: 'h2', text: 'Inspection Levels' },
      { type: 'p', text: 'General Inspection Level II is the most commonly used. Level I is less stringent and used for lower-risk products. Level III is more stringent and used for high-risk or high-value items.' },
      { type: 'h2', text: 'Critical, Major, and Minor Defects' },
      { type: 'p', text: 'Define these categories clearly for your product. A critical defect might be a safety issue. A major defect affects function or appearance significantly. Minor defects are cosmetic or have minimal impact.' },
      { type: 'h2', text: 'When to Inspect' },
      { type: 'p', text: 'Pre-production inspection verifies materials and processes before mass production. During production inspection catches issues while there is still time to correct them. Pre-shipment inspection is your final check before goods leave the factory.' }
    ]
  },
  'reducing-lead-times-china': {
    title: 'How to Reduce Lead Times When Sourcing from China',
    date: 'June 20, 2026',
    category: 'Operations',
    readTime: '5 min',
    content: [
      { type: 'p', text: 'Long lead times are one of the most common frustrations for buyers sourcing from China. While some factors are outside your control, there are practical steps you can take to improve speed.' },
      { type: 'h2', text: 'Start with Clear Specifications' },
      { type: 'p', text: 'Ambiguous requirements lead to clarification loops and delays. Invest time upfront to provide complete, clear specifications including dimensions, materials, finishes, and packaging.' },
      { type: 'h2', text: 'Choose Suppliers with Capacity' },
      { type: 'p', text: 'A factory that is already at 90% capacity will struggle to prioritize your order. Ask about current utilization and recent order volumes during supplier evaluation.' },
      { type: 'h2', text: 'Use Samples to Lock Specifications' },
      { type: 'p', text: 'Approved samples reduce the chance of production misunderstandings. Build sample approval into your timeline and do not proceed to mass production until samples are signed off.' },
      { type: 'h2', text: 'Consider Production Scheduling' },
      { type: 'p', text: 'Peak seasons (before Chinese New Year, before major holidays) create bottlenecks. Plan orders to avoid these periods when possible, or place orders earlier to secure production slots.' }
    ]
  },
  'payment-terms-suppliers': {
    title: 'Payment Terms That Protect Buyers and Suppliers',
    date: 'June 12, 2026',
    category: 'Finance & Contracts',
    readTime: '6 min',
    content: [
      { type: 'p', text: 'Payment terms are about balancing risk, cash flow, and supplier relationships. Terms that are too favorable to one party often create problems for the other.' },
      { type: 'h2', text: 'Common Payment Structures' },
      { type: 'p', text: 'A typical structure for new suppliers is 30% deposit, 70% before shipment. For established relationships, some buyers negotiate 30/40/30 (deposit, mid-production, before shipment) or even net terms after delivery.' },
      { type: 'h2', text: 'Protecting Your Deposit' },
      { type: 'p', text: 'Consider using a letter of credit or escrow for larger orders. For smaller orders, the risk of a deposit may be acceptable if you have verified the supplier through an audit.' },
      { type: 'h2', text: 'Tying Payment to Milestones' },
      { type: 'p', text: 'Link payments to verifiable milestones: deposit on order, second payment after production start or sample approval, final payment after inspection and before shipment.' },
      { type: 'h2', text: 'Currency and Banking Considerations' },
      { type: 'p', text: 'Be clear about who bears currency fluctuation risk. Work with suppliers who can receive payment through established banking channels to avoid complications.' }
    ]
  },
  'sourcing-small-quantities': {
    title: 'Sourcing from China with Small Order Quantities',
    date: 'June 5, 2026',
    category: 'Buyer Guides',
    readTime: '5 min',
    content: [
      { type: 'p', text: 'Many buyers assume that sourcing from China requires large order quantities. While minimum order quantities (MOQs) are common, there are ways to work with lower volumes.' },
      { type: 'h2', text: 'Finding Flexible Suppliers' },
      { type: 'p', text: 'Not all factories have high MOQs. Trading companies and smaller manufacturers are often more flexible. Be prepared to pay a premium per unit for lower volumes.' },
      { type: 'h2', text: 'Stock Items vs Custom Products' },
      { type: 'p', text: 'Stock products or slight modifications of existing items typically have lower MOQs than fully custom products. Consider whether you can adapt your requirements to available options.' },
      { type: 'h2', text: 'Consolidation Strategies' },
      { type: 'p', text: 'If you have multiple products, consider consolidating orders with a single supplier to meet MOQ requirements. Or work with a sourcing agent who can combine orders from multiple buyers.' },
      { type: 'h2', text: 'Building Toward Scale' },
      { type: 'p', text: 'Many successful importers started with small test orders and gradually increased volumes as they validated demand and refined their products. Communicate your growth potential to suppliers.' }
    ]
  }
}

const BlogPost = () => {
  const { slug } = useParams()
  const post = posts[slug]

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-20 text-center">
        <h1 className="text-2xl font-semibold mb-4">Article Not Found</h1>
        <p className="text-slate-600 mb-6">The article you are looking for does not exist or has been moved.</p>
        <Link to="/blog">
          <Button variant="outline">Back to Blog</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link to="/blog" className="text-sm text-slate-500 hover:text-slate-700">← Back to all articles</Link>
      
      <div className="mt-6 mb-8">
        <div className="flex items-center gap-3 text-xs text-slate-500 mb-3">
          <span>{post.category}</span>
          <span>•</span>
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime} read</span>
        </div>
        <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{post.title}</h1>
      </div>

      <div className="prose prose-slate max-w-none">
        {post.content.map((block, index) => {
          if (block.type === 'h2') {
            return <h2 key={index} className="text-xl font-semibold mt-10 mb-3">{block.text}</h2>
          }
          return <p key={index} className="text-slate-700 leading-relaxed mb-5">{block.text}</p>
        })}
      </div>

      <div className="mt-12 pt-8 border-t">
        <p className="text-sm text-slate-600 mb-4">Have a specific sourcing question?</p>
        <Link to="/contact">
          <Button>Contact Our Team</Button>
        </Link>
      </div>
    </div>
  )
}

export default BlogPost
