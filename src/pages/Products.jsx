import React from 'react'
import { CheckCircle2 } from 'lucide-react'

const Products = () => {
  const categories = [
    {
      name: 'Electronics & Tech',
      items: ['Smart Home Devices', 'Mobile Accessories', 'Audio Equipment', 'Consumer Electronics']
    },
    {
      name: 'Home & Kitchen',
      items: ['Kitchenware', 'Furniture', 'Home Decor', 'Garden Supplies']
    },
    {
      name: 'Fashion & Apparel',
      items: ['Activewear', 'Accessories', 'Textiles', 'Bags & Luggage']
    },
    {
      name: 'Industrial & Tools',
      items: ['Hardware Tools', 'Auto Parts', 'Machinery Components', 'Safety Gear']
    }
  ]

  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Products We Source</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Our expert team has deep experience across a wide range of product categories.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {categories.map((cat, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-8 hover:shadow-lg transition">
                <h3 className="text-xl font-bold text-slate-900 mb-6">{cat.name}</h3>
                <ul className="space-y-4">
                  {cat.items.map((item, j) => (
                    <li key={j} className="flex items-center text-slate-600">
                      <CheckCircle2 className="h-5 w-5 text-blue-600 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Products
EOF && cat > src/pages/CaseStudies.jsx <<EOF
import React from 'react'

const CaseStudies = () => {
  const cases = [
    {
      title: 'E-commerce Brand Expansion',
      challenge: 'Client needed to reduce production costs for their best-selling electronic accessories while maintaining premium quality.',
      outcome: 'Found a Tier-1 factory in Dongguan, reduced unit cost by 22%, and improved packaging durability for international shipping.',
      imgId: 'case-electronics'
    },
    {
      title: 'Global Retailer QC Overhaul',
      challenge: 'A home decor retailer was experiencing a 15% defect rate with their previous supplier.',
      outcome: 'Implemented a strict mid-production and final inspection protocol. Defect rate dropped to less than 1.5% within 3 months.',
      imgId: 'case-decor'
    }
  ]

  return (
    <div className="bg-white">
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 tracking-tight">Case Studies</h1>
          <p className="mt-4 text-xl text-slate-600 max-w-2xl mx-auto">
            Real stories of how we help our clients succeed in China.
          </p>
        </div>
      </section>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {cases.map((cs, i) => (
            <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="lg:w-1/2 w-full">
                <img 
                  data-strk-img-id={cs.imgId}
                  data-strk-img={`[${'case-' + i + '-title'}] business success sourcing china`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="800"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  className="rounded-3xl shadow-2xl object-cover w-full h-80"
                  alt={cs.title}
                />
              </div>
              <div className="lg:w-1/2">
                <h3 id={`case-${i}-title`} className="text-3xl font-bold text-slate-900 mb-6">{cs.title}</h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-blue-600 mb-2 uppercase text-xs tracking-widest">The Challenge</h4>
                    <p className="text-slate-600 text-lg leading-relaxed">{cs.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-bold text-green-600 mb-2 uppercase text-xs tracking-widest">The Result</h4>
                    <p className="text-slate-600 text-lg leading-relaxed">{cs.outcome}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
