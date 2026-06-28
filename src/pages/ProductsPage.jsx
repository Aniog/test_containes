import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { productCategories } from '@/data/site-data'

const locations = [
  'Shenzhen — Electronics, consumer goods, prototyping',
  'Guangzhou — Trade, textiles, lighting, furniture',
  'Yiwu — Small commodities, accessories, toys',
  'Shanghai — Industrial, automotive, medical devices',
  'Ningbo — Machinery, hardware, home appliances',
  'Qingdao — Food processing, chemicals, textiles',
  'Xiamen — Apparel, footwear, sports equipment',
  'Dongguan — Electronics manufacturing, mold making',
]

export default function ProductsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary/95 to-primary/80 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Products We Source</h1>
            <p className="text-lg text-white/80 leading-relaxed">
              Our supplier network spans China&apos;s major manufacturing hubs, covering thousands 
              of product categories across dozens of industries.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {productCategories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white rounded-xl border border-border overflow-hidden hover:shadow-md transition-shadow"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop)`,
                    backgroundColor: '#f1f5f9',
                  }}
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-text-primary mb-2">{cat.title}</h3>
                  <p className="text-sm text-secondary-text leading-relaxed">{cat.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Hubs */}
      <section className="py-16 md:py-24 bg-muted-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
              China&apos;s Key Manufacturing Hubs
            </h2>
            <p className="text-secondary-text text-lg max-w-2xl mx-auto">
              We have boots on the ground in every major industrial region in China.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {locations.map((loc) => (
              <div key={loc} className="bg-white rounded-lg border border-border p-4 text-sm text-text-primary">
                <div className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  <span>{loc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-text-primary mb-4">Can We Source Your Product?</h2>
          <p className="text-secondary-text text-lg mb-8 max-w-2xl mx-auto">
            If you don&apos;t see your product category, contact us anyway. Our network covers 
            thousands more categories than listed here.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-primary-light hover:bg-primary text-white font-semibold rounded-lg px-8 py-3.5 transition-colors"
          >
            Inquire About Your Product <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}