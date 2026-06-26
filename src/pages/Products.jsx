import { Link } from 'react-router-dom'
import { productCategories, Icons } from '@/lib/data'

export default function Products() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary pt-28 pb-16 lg:pt-32 lg:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent-light font-semibold text-sm uppercase tracking-wider">Products We Source</span>
          <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            We Source Across 50+ Industries
          </h1>
          <p className="mt-4 text-white/70 text-lg max-w-2xl mx-auto">
            Whatever you need manufactured, our network of verified suppliers can deliver it.
          </p>
        </div>
      </section>

      {/* Categories grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productCategories.map((cat) => {
              const IconComponent = Icons[cat.icon]
              return (
                <div key={cat.id} className="bg-surface-alt rounded-xl p-6 border border-border hover:shadow-md hover:border-accent/20 transition-all duration-300">
                  <div className="w-14 h-14 bg-primary/5 rounded-xl flex items-center justify-center mb-5">
                    <IconComponent className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary mb-3">{cat.title}</h3>
                  <p className="text-text-secondary leading-relaxed mb-4">{cat.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.id === 'electronics' && ['PCB', 'IoT', 'Cables', 'Batteries', 'Chargers'].map(t => (
                      <span key={t} className="px-2.5 py-1 bg-white border border-border rounded-full text-xs text-text-muted">{t}</span>
                    ))}
                    {cat.id === 'textiles' && ['Garments', 'Sportswear', 'Bags', 'Footwear', 'Home Textiles'].map(t => (
                      <span key={t} className="px-2.5 py-1 bg-white border border-border rounded-full text-xs text-text-muted">{t}</span>
                    ))}
                    {cat.id === 'furniture' && ['Indoor', 'Outdoor', 'Kitchenware', 'Lighting', 'Decor'].map(t => (
                      <span key={t} className="px-2.5 py-1 bg-white border border-border rounded-full text-xs text-text-muted">{t}</span>
                    ))}
                    {cat.id === 'machinery' && ['Equipment', 'Packaging', 'Automation', 'Tools', 'Parts'].map(t => (
                      <span key={t} className="px-2.5 py-1 bg-white border border-border rounded-full text-xs text-text-muted">{t}</span>
                    ))}
                    {cat.id === 'plastics' && ['Injection', 'Silicone', 'Rubber', 'Molds', 'Packaging'].map(t => (
                      <span key={t} className="px-2.5 py-1 bg-white border border-border rounded-full text-xs text-text-muted">{t}</span>
                    ))}
                    {cat.id === 'hardware' && ['CNC', 'Stamping', 'Casting', 'Fasteners', 'Fabrication'].map(t => (
                      <span key={t} className="px-2.5 py-1 bg-white border border-border rounded-full text-xs text-text-muted">{t}</span>
                    ))}
                    {cat.id === 'smart-devices' && ['Smart Home', 'Wearables', 'Bluetooth', 'Gadgets', 'Accessories'].map(t => (
                      <span key={t} className="px-2.5 py-1 bg-white border border-border rounded-full text-xs text-text-muted">{t}</span>
                    ))}
                    {cat.id === 'renewable' && ['Solar', 'LED', 'Storage', 'Inverters', 'Green Energy'].map(t => (
                      <span key={t} className="px-2.5 py-1 bg-white border border-border rounded-full text-xs text-text-muted">{t}</span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-16 text-center bg-surface-alt rounded-2xl p-8 sm:p-12 border border-border">
            <h2 className="text-2xl font-bold text-text-primary mb-4">
              Don't See Your Product Category?
            </h2>
            <p className="text-text-secondary max-w-lg mx-auto mb-6">
              If your product isn't listed, we likely still source it. Our network spans virtually every 
              manufacturing sector in China. Reach out and tell us what you need.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent hover:bg-accent-dark text-white font-semibold rounded-md transition-colors shadow-sm"
            >
              Tell Us About Your Product
              <Icons.ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}