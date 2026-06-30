import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Calendar, User } from 'lucide-react'

const posts = {
  'verify-chinese-factory': {
    title: 'How to Verify a Chinese Factory Before Placing an Order',
    date: 'June 15, 2026',
    author: 'SSourcing Team',
    content: `
      <p>When sourcing products from China, one of the biggest risks is working with an unreliable supplier. Factory verification is a critical step that helps you avoid scams, quality issues, and production delays.</p>
      
      <h2>1. Check Business Licenses</h2>
      <p>Every legitimate factory in China must have a valid business license. Ask your potential supplier for a copy and verify the details, including the registered address, business scope, and registration date.</p>
      
      <h2>2. Conduct a Video Call Tour</h2>
      <p>Before committing to an on-site visit, ask for a live video tour of the factory. Walk through the production floor, warehouse, and office areas. A legitimate factory will be happy to show you around.</p>
      
      <h2>3. Visit in Person or Hire a Local Agent</h2>
      <p>Nothing replaces an on-site visit. If you cannot travel to China, hire a local sourcing agent to visit the factory on your behalf. They can inspect production lines, verify equipment, and assess working conditions.</p>
      
      <h2>4. Check Trade Records</h2>
      <p>Look up the company on Chinese business databases like Qichacha or Tianyancha. These platforms show the company's credit rating, legal status, and any historical disputes.</p>
      
      <h2>5. Request Customer References</h2>
      <p>Ask for references from other international buyers, ideally in your industry. Contact them to learn about their experience working with the factory.</p>
      
      <h2>6. Verify Certifications</h2>
      <p>If a factory claims to have ISO 9001, BSCI, or other certifications, ask for copies and verify with the issuing body. Fake certifications are unfortunately common.</p>
      
      <h2>7. Start with a Trial Order</h2>
      <p>Before committing to a large production run, place a small trial order. This allows you to evaluate product quality, communication, and delivery reliability without significant risk.</p>
      
      <p>Factory verification is not optional if you want to import from China successfully. A small investment in verification upfront can save you from costly mistakes later.</p>
    `,
  },
  'quality-inspection-guide': {
    title: 'A Complete Guide to Quality Inspection in China',
    date: 'May 28, 2026',
    author: 'SSourcing Team',
    content: `
      <p>Quality control is the most important factor in successful importing from China. Without proper inspections, you risk receiving products that do not meet your specifications.</p>
      
      <h2>What is AQL?</h2>
      <p>AQL (Acceptable Quality Limit) is the industry standard for product inspection. It defines the maximum number of defective units allowed in a sample batch. Common AQL levels are:</p>
      <ul>
        <li><strong>AQL 1.0</strong> - Strict (for high-end or safety-critical products)</li>
        <li><strong>AQL 2.5</strong> - Standard (for most consumer goods)</li>
        <li><strong>AQL 4.0</strong> - Relaxed (for low-cost, non-critical items)</li>
      </ul>
      
      <h2>Types of Inspections</h2>
      <p><strong>During Production Inspection (DPI):</strong> Conducted while 20-30% of production is complete. This catches issues early and allows for corrections before the entire batch is made.</p>
      <p><strong>Pre-Shipment Inspection (PSI):</strong> Conducted when 80-100% of production is complete and at least 80% of goods are packed. This is your final quality check before shipment.</p>
      <p><strong>Container Loading Supervision (CLS):</strong> Monitoring the loading process to ensure the correct products and quantities are loaded.</p>
      
      <h2>What Inspectors Check</h2>
      <p>A professional QC inspection covers: product dimensions, materials and workmanship, function testing, packaging quality, labeling accuracy, and quantity verification.</p>
      
      <h2>Creating a QC Plan</h2>
      <p>Work with your sourcing agent to define a QC plan before production starts. Specify which inspections are needed, at what stages, and which AQL level applies. Document everything in writing.</p>
    `,
  },
  'shipping-china-comparison': {
    title: 'Shipping from China: Sea Freight vs Air Freight vs Express',
    date: 'May 10, 2026',
    author: 'SSourcing Team',
    content: `
      <p>Choosing the right shipping method is crucial when importing from China. Here is a practical comparison of the three main options.</p>
      
      <h2>Sea Freight</h2>
      <p><strong>Best for:</strong> Large shipments, heavy goods, non-urgent orders.</p>
      <p><strong>Cost:</strong> Lowest cost per unit. FCL (Full Container Load) is most economical for large volumes. LCL (Less than Container Load) works for smaller shipments.</p>
      <p><strong>Transit time:</strong> 25-35 days to North America, 20-30 days to Europe.</p>
      
      <h2>Air Freight</h2>
      <p><strong>Best for:</strong> Time-sensitive orders, high-value goods, light products.</p>
      <p><strong>Cost:</strong> 4-6 times more expensive than sea freight per kg.</p>
      <p><strong>Transit time:</strong> 5-10 days door-to-door.</p>
      
      <h2>Express Shipping (DHL, FedEx, UPS)</h2>
      <p><strong>Best for:</strong> Samples, small packages, urgent documents.</p>
      <p><strong>Cost:</strong> Most expensive per kg, but includes door-to-door service and customs clearance.</p>
      <p><strong>Transit time:</strong> 3-7 days worldwide.</p>
      
      <h2>Making the Right Choice</h2>
      <p>Consider your budget, timeline, product value, and volume when choosing. Many importers use a combination: express for samples, air freight for urgent restocks, and sea freight for bulk orders.</p>
    `,
  },
  'sourcing-mistakes-to-avoid': {
    title: 'Top 10 Mistakes to Avoid When Sourcing from China',
    date: 'April 22, 2026',
    author: 'SSourcing Team',
    content: `
      <p>After a decade of helping clients source from China, we have seen the same mistakes repeated. Here are the most common ones and how to avoid them.</p>
      
      <h2>1. Not Verifying Suppliers</h2>
      <p>Relying on online profiles without verification is risky. Always verify before paying deposits.</p>
      
      <h2>2. Choosing Based Only on Price</h2>
      <p>The cheapest quote often leads to quality issues or hidden costs. Evaluate suppliers holistically.</p>
      
      <h2>3. Poor Product Specifications</h2>
      <p>Vague specifications lead to products that do not meet your expectations. Be specific and document everything.</p>
      
      <h2>4. Skipping Quality Inspections</h2>
      <p>A pre-shipment inspection is a small investment that prevents costly surprises.</p>
      
      <h2>5. Not Understanding Incoterms</h2>
      <p>Know whether you are buying FOB, CIF, or EXW and understand your responsibilities at each stage.</p>
      
      <h2>6. Ignoring IP Protection</h2>
      <p>Protect your designs and trademarks before sharing them with potential suppliers.</p>
      
      <h2>7. Poor Communication</h2>
      <p>Language barriers and time zone differences require clear, written communication and confirmation of agreements.</p>
      
      <h2>8. Not Planning for Lead Times</h2>
      <p>Production delays happen. Build buffer time into your schedule.</p>
      
      <h2>9. Overlooking Customs Requirements</h2>
      <p>Ensure your products comply with import regulations in your country before shipping.</p>
      
      <h2>10. Going It Alone</h2>
      <p>A local sourcing agent can help you navigate all of these challenges. The investment pays for itself.</p>
    `,
  },
  'negotiating-moq': {
    title: 'Understanding MOQs and How to Negotiate Better Terms',
    date: 'April 5, 2026',
    author: 'SSourcing Team',
    content: `
      <p>Minimum Order Quantities (MOQs) are one of the biggest barriers for smaller importers. Here is how to understand and negotiate them.</p>
      
      <h2>Why Factories Set MOQs</h2>
      <p>Factories set MOQs to cover setup costs, material minimums, and production line efficiency. Understanding their reasoning helps you negotiate better.</p>
      
      <h2>Strategies for Lowering MOQs</h2>
      <p><strong>Offer to pay a setup fee:</strong> Factories may lower MOQs if you cover some of the initial costs.</p>
      <p><strong>Combine SKUs:</strong> Offer to order multiple product variants that use the same materials and processes. The factory may count them toward the same MOQ.</p>
      <p><strong>Negotiate a pilot run:</strong> Many factories will accept a smaller first order if you commit to larger repeat orders.</p>
      <p><strong>Work with a sourcing agent:</strong> Agents often have established relationships and can negotiate better terms on your behalf.</p>
      
      <h2>What to Watch For</h2>
      <p>Be wary of factories with suspiciously low MOQs. This can indicate a trading company rather than a manufacturer, or a factory desperate for orders.</p>
    `,
  },
  'cost-breakdown': {
    title: 'The Real Cost of Sourcing from China: A Transparent Breakdown',
    date: 'March 18, 2026',
    author: 'SSourcing Team',
    content: `
      <p>Understanding the full cost structure when sourcing from China helps you make better decisions and avoid surprises.</p>
      
      <h2>Product Cost (FOB)</h2>
      <p>This is the price the factory charges, typically quoted as FOB (Free On Board). It includes manufacturing, packaging, and delivery to the departure port.</p>
      
      <h2>Sample Costs</h2>
      <p>Factories usually charge for samples and shipping. This cost varies by product complexity.</p>
      
      <h2>Quality Inspection</h2>
      <p>Professional QC inspections cost $200-500 per visit depending on location and scope. This is a fraction of the cost of receiving defective goods.</p>
      
      <h2>Shipping & Freight</h2>
      <p>Sea freight from China to North America typically costs $1,500-4,000 per container. Air freight costs $3-8 per kg.</p>
      
      <h2>Customs Duties & Taxes</h2>
      <p>Import duties vary by product category and country. Work with a customs broker to understand the full cost landed at your warehouse.</p>
      
      <h2>Sourcing Agent Fees</h2>
      <p>Professional sourcing agents typically charge 5-10% of the product cost or a flat project fee. The savings from better pricing, quality assurance, and risk reduction typically far outweigh the fee.</p>
      
      <h2>Total Cost Example</h2>
      <p>For a typical $10,000 product order: product cost ($10,000), inspection ($300), shipping ($2,000), duties ($1,000), agent fee ($800). Total landed: approximately $14,100.</p>
    `,
  },
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts[slug]

  if (!post) {
    return (
      <section className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <Link to="/blog" className="text-brand-600 hover:text-brand-700 font-medium">
            &larr; Back to Blog
          </Link>
        </div>
      </section>
    )
  }

  return (
    <>
      <section className="py-16 md:py-24 bg-white">
        <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/blog" className="inline-flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-8">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {post.date}</span>
            <span className="flex items-center gap-1"><User className="w-4 h-4" /> {post.author}</span>
          </div>
          <div
            className="prose prose-gray max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </section>
    </>
  )
}