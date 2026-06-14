import { useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import { ChevronRight, Settings, Shield, Zap } from 'lucide-react'

const products = [
  {
    id: 'double-folder',
    title: 'Double Folding Machine',
    titleId: 'product-double-folder-title',
    desc: 'High-precision double folder for industrial sheet metal fabrication. Features advanced CNC control and robust construction for continuous operation.',
    descId: 'product-double-folder-desc',
    imgId: 'product-double-folder-img',
    specs: ['Max Width: 3200mm', 'Bending Capacity: 0.8-4mm', 'CNC Control System'],
    badge: 'Best Seller',
  },
  {
    id: 'sheet-metal-folder',
    title: 'Sheet Metal Folder',
    titleId: 'product-sheet-metal-folder-title',
    desc: 'Professional-grade sheet metal folder designed for precision bending. Ideal for HVAC, automotive, and general fabrication applications.',
    descId: 'product-sheet-metal-folder-desc',
    imgId: 'product-sheet-metal-folder-img',
    specs: ['Max Width: 2500mm', 'Bending Capacity: 0.5-3mm', 'Manual/Electric Options'],
    badge: null,
  },
  {
    id: 'metal-folding-machine',
    title: 'Metal Folding Machine',
    titleId: 'product-metal-folding-machine-title',
    desc: 'Heavy-duty metal folding machine engineered for demanding production environments. Superior accuracy and repeatability guaranteed.',
    descId: 'product-metal-folding-machine-desc',
    imgId: 'product-metal-folding-machine-img',
    specs: ['Max Width: 4000mm', 'Bending Capacity: 1-6mm', 'Hydraulic System'],
    badge: 'Heavy Duty',
  },
  {
    id: 'metal-folder-machine',
    title: 'Metal Folder Machine',
    titleId: 'product-metal-folder-machine-title',
    desc: 'Versatile metal folder machine suitable for various metalworking tasks. Easy operation with consistent professional results.',
    descId: 'product-metal-folder-machine-desc',
    imgId: 'product-metal-folder-machine-img',
    specs: ['Max Width: 2000mm', 'Bending Capacity: 0.6-2.5mm', 'Compact Design'],
    badge: null,
  },
]

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section id="products" className="products" ref={containerRef}>
      <div className="section-container">
        <div className="section-header">
          <span className="section-tag">Our Products</span>
          <h2 id="products-title" className="section-title">Premium Metal Fabrication Equipment</h2>
          <p id="products-subtitle" className="section-subtitle">
            Discover our comprehensive range of sheet metal folding machines, 
            engineered for precision, durability, and exceptional performance.
          </p>
        </div>

        <div className="products-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              {product.badge && (
                <span className="product-badge">{product.badge}</span>
              )}
              <div className="product-image-container">
                <img
                  alt={product.title}
                  className="product-image"
                  data-strk-img-id={product.imgId}
                  data-strk-img={`[${product.descId}] [${product.titleId}] [products-subtitle] [products-title]`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                />
              </div>
              <div className="product-content">
                <h3 id={product.titleId} className="product-title">{product.title}</h3>
                <p id={product.descId} className="product-description">{product.desc}</p>
                <ul className="product-specs">
                  {product.specs.map((spec, index) => (
                    <li key={index} className="product-spec">
                      <Settings size={14} />
                      {spec}
                    </li>
                  ))}
                </ul>
                <button className="product-cta">
                  Learn More
                  <ChevronRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products
