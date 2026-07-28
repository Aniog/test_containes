import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react'

const posts = {
  'how-to-verify-chinese-supplier': {
    title: 'How to Verify a Chinese Supplier Before Placing an Order',
    date: 'July 15, 2026',
    author: 'SSourcing Team',
    category: 'Supplier Verification',
    content: `
      <p>Verifying a Chinese supplier before placing an order is one of the most important steps in the sourcing process. Without proper verification, you risk working with unreliable suppliers that may deliver poor quality products, miss deadlines, or worse — disappear with your payment.</p>
      
      <h2>1. Check Business Licenses</h2>
      <p>Every legitimate Chinese supplier should have a valid business license. You can request a copy and verify it through China's National Enterprise Credit Information Publicity System. Key details to check include the registered name, legal representative, business scope, and registration date.</p>
      
      <h2>2. Conduct a Factory Audit</h2>
      <p>Nothing replaces an in-person visit. A professional factory audit assesses production capacity, equipment condition, quality management systems, workforce size, and working conditions. If you cannot visit in person, hire a local sourcing agent to conduct the audit on your behalf.</p>
      
      <h2>3. Verify Export Experience</h2>
      <p>Ask for export documentation, including past bills of lading, customs declarations, and certificates of origin. Suppliers with consistent export history are more likely to understand international quality standards and documentation requirements.</p>
      
      <h2>4. Request Client References</h2>
      <p>Legitimate suppliers should be able to provide references from past or current clients, especially international buyers. Contact these references to ask about their experience with the supplier's product quality, communication, and reliability.</p>
      
      <h2>5. Order Samples First</h2>
      <p>Always order samples before committing to bulk production. Evaluate the sample quality against your specifications. Pay attention to materials, workmanship, packaging, and any deviations from your requirements.</p>
      
      <p>Taking these verification steps seriously can save you from costly mistakes and help you build a reliable supply chain from China.</p>
    `,
  },
  'guide-to-quality-inspection-standards': {
    title: 'A Guide to Quality Inspection Standards for China Sourcing',
    date: 'July 8, 2026',
    author: 'SSourcing Team',
    category: 'Quality Control',
    content: `
      <p>Quality control is the backbone of successful sourcing from China. Implementing proper inspection procedures ensures that the products you receive meet your specifications and quality standards.</p>
      
      <h2>Understanding AQL Standards</h2>
      <p>AQL (Acceptable Quality Limit) is the most widely used sampling standard in quality inspections. It defines the maximum number of defective units allowed in a sample batch. The most common AQL level for general consumer products is AQL 2.5, which means no more than 2.5% defective units are acceptable.</p>
      
      <h2>Types of Inspections</h2>
      <p>There are three main types of product inspections: Pre-Production Inspection (PPI) checks raw materials and components before production begins; During Production Inspection (DPI) monitors quality while manufacturing is in progress; and Pre-Shipment Inspection (PSI) is the final quality check before goods are shipped.</p>
      
      <h2>Key Inspection Criteria</h2>
      <p>Standard inspections cover critical, major, and minor defects. Critical defects are safety-related or render the product unusable. Major defects affect functionality or appearance significantly. Minor defects are small deviations from specifications that do not affect usability.</p>
      
      <h2>Working with Third-Party Inspectors</h2>
      <p>Professional third-party inspection companies provide unbiased quality assessments. They follow standardized procedures, use calibrated measuring tools, and provide detailed reports with photos. This objectivity is crucial for maintaining quality standards.</p>
      
      <p>Implementing a structured QC process with clear standards and professional inspections is essential for consistent product quality from Chinese manufacturers.</p>
    `,
  },
  'top-10-mistakes-sourcing-from-china': {
    title: 'Top 10 Mistakes Buyers Make When Sourcing from China',
    date: 'June 28, 2026',
    author: 'SSourcing Team',
    category: 'Sourcing Tips',
    content: `
      <p>After years of helping international buyers source from China, we have seen the same mistakes repeated. Here are the top 10 pitfalls to avoid.</p>
      
      <h2>1. Not Verifying the Supplier</h2>
      <p>Many buyers skip supplier verification and rely solely on Alibaba profiles or price quotes. Always verify business licenses, visit factories, and check references.</p>
      
      <h2>2. Choosing the Cheapest Option</h2>
      <p>The lowest price often comes with hidden costs: poor quality, delayed delivery, or unreliable communication. Balance cost with quality and reliability.</p>
      
      <h2>3. Unclear Specifications</h2>
      <p>Vague product specifications lead to incorrect manufacturing. Provide detailed drawings, materials specs, measurements, and quality requirements in writing.</p>
      
      <h2>4. No Written Contract</h2>
      <p>Verbal agreements are not enough. Have a detailed contract covering specifications, pricing, payment terms, delivery timeline, and quality standards.</p>
      
      <h2>5. Skipping the Sample Process</h2>
      <p>Approving samples before bulk production is essential. Never skip this step, no matter how tight your timeline.</p>
      
      <h2>6. Ignoring Quality Control</h2>
      <p>Without proper QC inspections, you risk receiving substandard products. Implement inspections at multiple stages of production.</p>
      
      <h2>7. Poor Communication</h2>
      <p>Language barriers and time zone differences can cause misunderstandings. Use clear, simple English and confirm all details in writing.</p>
      
      <h2>8. Not Understanding Incoterms</h2>
      <p>Incoterms define who pays for what and when risk transfers. Misunderstanding them can lead to unexpected costs and delays.</p>
      
      <h2>9. Ignoring Intellectual Property</h2>
      <p>Protect your designs and patents with NDAs and registered IP protection in China before sharing sensitive information with suppliers.</p>
      
      <h2>10. No Backup Plan</h2>
      <p>Relying on a single supplier is risky. Always have backup suppliers identified and qualified in case your primary supplier falls through.</p>
      
      <p>Avoiding these mistakes will save you time, money, and frustration when sourcing from China.</p>
    `,
  },
  'understanding-incoterms-china-imports': {
    title: 'Understanding Incoterms for China Imports',
    date: 'June 20, 2026',
    author: 'SSourcing Team',
    category: 'Logistics',
    content: `
      <p>Incoterms (International Commercial Terms) are standardized trade terms that define the responsibilities of sellers and buyers in international transactions. Understanding them is critical when importing from China.</p>
      
      <h2>Most Common Incoterms for China Imports</h2>
      
      <h3>FOB (Free On Board)</h3>
      <p>Under FOB terms, the seller delivers the goods to the port of loading and loads them onto the vessel. The buyer assumes responsibility and costs from that point. FOB is the most commonly used incoterm for China exports.</p>
      
      <h3>EXW (Ex Works)</h3>
      <p>Under EXW, the buyer is responsible for all transportation, customs clearance, and costs from the seller's premises. This gives the buyer maximum control but also maximum responsibility.</p>
      
      <h3>CIF (Cost, Insurance, and Freight)</h3>
      <p>Under CIF, the seller pays for transportation and insurance to the destination port. The buyer assumes risk once the goods are loaded on the vessel. CIF is common for first-time buyers but may include higher freight costs.</p>
      
      <h2>Choosing the Right Incoterm</h2>
      <p>Your choice of incoterm depends on your experience level, risk tolerance, and logistics capabilities. FOB is generally recommended for experienced importers who want competitive shipping rates. EXW offers maximum control but requires a freight forwarder. CIF is simpler for beginners but may include higher costs.</p>
      
      <p>Always clarify incoterms in your contract and ensure both parties understand their responsibilities. Misunderstandings about incoterms are a leading cause of disputes in international trade.</p>
    `,
  },
  'factory-audit-checklist': {
    title: 'Factory Audit Checklist: What to Look For',
    date: 'June 12, 2026',
    author: 'SSourcing Team',
    category: 'Factory Audits',
    content: `
      <p>A comprehensive factory audit is essential for evaluating potential suppliers in China. Here is a checklist of what to look for during an audit.</p>
      
      <h2>1. Legal Compliance</h2>
      <p>Verify the business license, tax registration, and export license. Check that the registered address matches the actual factory location.</p>
      
      <h2>2. Production Capacity</h2>
      <p>Assess the factory's production lines, equipment age and condition, and daily/monthly output capacity. Compare against your required volume.</p>
      
      <h2>3. Quality Management</h2>
      <p>Check for ISO certifications, quality control procedures, testing equipment, and documentation systems. Observe how QC checks are conducted on the production floor.</p>
      
      <h2>4. Workforce</h2>
      <p>Evaluate the number of workers, their skill levels, training programs, and working conditions. A stable, skilled workforce is essential for consistent quality.</p>
      
      <h2>5. Facility Conditions</h2>
      <p>Observe cleanliness, organization, safety measures, lighting, and ventilation. Well-maintained facilities typically indicate better management.</p>
      
      <h2>6. Supply Chain Management</h2>
      <p>Ask about raw material sourcing, inventory management, and relationships with sub-suppliers. A well-managed supply chain reduces production risks.</p>
      
      <h2>7. Past Performance</h2>
      <p>Review past production records, defect rates, on-time delivery statistics, and customer feedback. Request references from international clients.</p>
      
      <p>A thorough factory audit provides the information you need to make an informed decision about partnering with a Chinese manufacturer.</p>
    `,
  },
  'how-to-negotiate-with-chinese-suppliers': {
    title: 'How to Negotiate with Chinese Suppliers',
    date: 'June 5, 2026',
    author: 'SSourcing Team',
    category: 'Sourcing Tips',
    content: `
      <p>Negotiating with Chinese suppliers requires a different approach than dealing with Western businesses. Understanding cultural norms and business practices can help you achieve better outcomes.</p>
      
      <h2>Build Relationships First</h2>
      <p>In Chinese business culture, relationships (guanxi) matter. Take time to build rapport before diving into negotiations. Simple gestures like respectful communication and showing interest in their business go a long way.</p>
      
      <h2>Understand the Pricing Structure</h2>
      <p>Chinese suppliers often quote higher initial prices, expecting negotiation. Understand the cost breakdown — raw materials, labor, overhead, and profit margin — to negotiate realistically.</p>
      
      <h2>Negotiate Beyond Price</h2>
      <p>Price is important, but other terms can be equally valuable. Negotiate payment terms, MOQ, delivery schedules, quality guarantees, and after-sales support.</p>
      
      <h2>Use Volume as Leverage</h2>
      <p>Suppliers are more willing to offer better terms for larger orders or long-term commitments. If you cannot commit to large volumes, consider consolidating orders with other buyers.</p>
      
      <h2>Be Clear and Specific</h2>
      <p>Ambiguity leads to misunderstandings. Put all specifications, quality standards, and delivery terms in writing. Use precise measurements, materials specifications, and quality criteria.</p>
      
      <h2>Maintain Professionalism</h2>
      <p>Be firm but respectful. Avoid aggressive tactics or ultimatums. Maintain a professional demeanor even when negotiations are challenging.</p>
      
      <p>Successful negotiation with Chinese suppliers is about building mutual trust and finding solutions that work for both parties. A fair deal leads to a long-term partnership.</p>
    `,
  },
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = posts[slug]

  if (!post) {
    return (
      <div className="section-container py-20 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-8">The article you are looking for does not exist.</p>
        <Link to="/blog" className="btn-primary inline-flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <div>
      <section className="section-padding">
        <div className="section-container max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-1.5 text-sm text-gray-600 hover:text-primary mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <article>
            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Tag className="w-4 h-4" />
                {post.category}
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                {post.author}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">{post.title}</h1>
            <div
              className="prose prose-gray max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Need Help Sourcing from China?</h2>
          <p className="text-gray-600 mb-6 max-w-xl mx-auto">
            Our team of sourcing professionals is ready to assist you with supplier verification, 
            quality control, and logistics.
          </p>
          <Link to="/contact" className="btn-primary">
            Get a Free Sourcing Quote
          </Link>
        </div>
      </section>
    </div>
  )
}