import { useParams } from 'react-router-dom'
import SEO from '@/components/layout/SEO'

const posts = {
  'verify-chinese-factory': {
    title: 'How to Verify a Chinese Factory Before Placing an Order',
    category: 'Factory Verification',
    date: '2026-07-15',
    content: [
      'Placing an order with a factory you have never visited can feel risky. A structured verification process helps you separate reliable manufacturers from trading companies or underqualified workshops.',
      'Start by confirming the factory\'s business license and registration details. Check whether the company name, registered address, and business scope match what the supplier claims. You can verify many records through government databases or third-party services.',
      'Next, assess production capability. Ask about machinery, employee count, daily output, and main product lines. A factory that claims to make everything often makes nothing well.',
      'Request certifications relevant to your product, such as ISO 9001, BSCI, or product-specific certificates. Then confirm the certificate number with the issuing body if possible.',
      'Whenever feasible, conduct an on-site audit or hire a local representative to visit. Photos and videos are useful, but a physical visit reveals details that documents cannot.',
      'Finally, check references from other buyers and review sample quality carefully. A low-quality sample is usually a warning sign for mass production.',
      'Factory verification takes time, but it is far cheaper than dealing with defective goods, delays, or disputes later.',
    ],
  },
  'pre-shipment-inspection': {
    title: 'Pre-Shipment Inspection: What to Check and Why It Matters',
    category: 'Quality Control',
    date: '2026-07-08',
    content: [
      'A pre-shipment inspection (PSI) is one of the most effective ways to protect your order before it leaves the factory. It is typically performed when at least 80% of the goods are packed and ready to ship.',
      'During a PSI, inspectors check product quantity, workmanship, dimensions, colors, functionality, labeling, packaging, and shipping marks. They follow an inspection checklist based on your purchase order and quality standards.',
      'Inspectors use sampling standards such as ANSI/ASQ Z1.4 or ISO 2859 to determine how many units to check. The result is usually reported as pass, fail, or pending, with photos and detailed notes.',
      'If the inspection fails, you can ask the factory to rework or replace the affected units before shipment. Once goods are shipped, your leverage drops significantly.',
      'For many buyers, a pre-shipment inspection pays for itself by preventing a single bad shipment from reaching customers.',
    ],
  },
  'incoterms-shipping-china': {
    title: 'Understanding Incoterms When Shipping from China',
    category: 'Shipping',
    date: '2026-06-28',
    content: [
      'Incoterms define who pays for transport, insurance, and customs procedures, and where responsibility transfers from seller to buyer. Choosing the right term affects both cost and risk.',
      'FOB (Free On Board) means the supplier delivers goods to the port and loads them onto the vessel. From that point, you control freight and insurance. This is a common choice for experienced importers.',
      'CIF (Cost, Insurance, and Freight) includes ocean freight and insurance to your destination port. However, the supplier chooses the forwarder, which can lead to higher local charges.',
      'DDP (Delivered Duty Paid) places maximum responsibility on the supplier, including customs clearance and delivery to your door. It is convenient but usually more expensive.',
      'EXW (Ex Works) means you are responsible for everything from the factory door. It offers control but requires strong logistics coordination.',
      'There is no single best Incoterm. The right choice depends on your experience, product value, shipment size, and risk tolerance.',
    ],
  },
  'payment-terms-china-suppliers': {
    title: 'How to Negotiate Payment Terms with Chinese Suppliers',
    category: 'Sourcing Tips',
    date: '2026-06-20',
    content: [
      'Payment terms are one of the most negotiated points in a China sourcing deal. A balanced structure protects both you and the supplier while keeping the project moving.',
      'A common structure is 30% deposit before production and 70% against copy of bill of lading or before shipment. This gives the supplier working capital while giving you leverage for quality and delivery.',
      'For first-time orders, consider using a secure payment method such as a bank transfer to a verified company account, or an escrow service for smaller amounts. Avoid paying personal accounts or using unsecured methods.',
      'As trust builds, you may negotiate better terms such as longer payment windows or lower deposits. But always document the terms clearly in your purchase contract.',
      'Be cautious of suppliers demanding 100% upfront payment, especially on first orders. This increases your risk significantly.',
    ],
  },
  'supplier-quote-red-flags': {
    title: '5 Signs a Supplier Quote Is Too Good to Be True',
    category: 'Supplier Sourcing',
    date: '2026-06-12',
    content: [
      'A quote that is far below the market average is not always a bargain. It can signal hidden risks that appear later as quality problems, delays, or extra fees.',
      'First, watch for missing cost components. A quote may exclude tooling, packaging, shipping, or duties, making the final price much higher than expected.',
      'Second, compare material specifications. A lower price may come from cheaper, lower-grade materials that do not match your requirements.',
      'Third, check the quoted lead time. An unusually fast delivery can mean the supplier is overloaded, subcontracting, or skipping quality steps.',
      'Fourth, look at communication quality. Slow, vague, or unprofessional responses often reflect how the supplier will handle problems later.',
      'Finally, verify the supplier can actually produce the product. Some traders quote low to win orders, then source from the cheapest factory available.',
      'A thorough quote comparison protects your budget and your product quality.',
    ],
  },
  'customs-documents-importing': {
    title: 'Customs Documents You Need When Importing from China',
    category: 'Shipping',
    date: '2026-06-05',
    content: [
      'Proper documentation is essential for smooth customs clearance. Missing or incorrect paperwork can cause delays, storage fees, or confiscation.',
      'The commercial invoice shows the value of the goods and is used to assess duties and taxes. It should match the payment records and shipping documents.',
      'The packing list describes the contents, weights, and dimensions of each carton or container. It helps customs inspectors verify the shipment.',
      'The bill of lading or airway bill is the contract between shipper and carrier. For sea freight, the original bill of lading may be required to release goods.',
      'Depending on your product, you may need certificates of origin, quality certificates, or compliance documents such as CE, FCC, or FDA registration.',
      'Make sure all documents are consistent across product descriptions, quantities, and values. Discrepancies are a common cause of customs holds.',
    ],
  },
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const post = posts[slug]

  if (!post) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold mb-2">Article not found</h1>
        <p className="text-slate-600">The blog post you are looking for does not exist.</p>
      </div>
    )
  }

  return (
    <>
      <SEO
        title={`${post.title} | SSourcing China Blog`}
        description={post.content[0]}
      />
      <article className="py-20 lg:py-28 bg-page">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <span className="text-brand-700 font-semibold text-sm uppercase tracking-wide">{post.category}</span>
            <h1 className="text-3xl lg:text-4xl font-bold mt-2 mb-4">{post.title}</h1>
            <p className="text-slate-500 text-sm">{post.date}</p>
          </div>
          <div className="card p-8 lg:p-10 space-y-6">
            {post.content.map((paragraph, index) => (
              <p key={index} className="text-slate-700 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </article>
    </>
  )
}
