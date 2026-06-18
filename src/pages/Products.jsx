import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Package, Laptop, Sofa, Shirt, Settings, Box, Gift, Car,
  CheckCircle, ArrowRight, Clock, Truck
} from 'lucide-react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Products We Source</h1>
          <p>Extensive experience across multiple product categories</p>
        </div>

        <style>{`
          .page-header {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
            color: white;
            padding: 140px 0 80px;
            text-align: center;
          }

          .page-header h1 {
            font-size: 48px;
            font-weight: 800;
            margin-bottom: 16px;
          }

          .page-header p {
            font-size: 20px;
            color: rgba(255, 255, 255, 0.9);
            max-width: 600px;
            margin: 0 auto;
          }

          @media (max-width: 768px) {
            .page-header {
              padding: 120px 0 60px;
            }
            .page-header h1 {
              font-size: 32px;
            }
          }
        `}</style>
      </section>

      {/* Product Categories */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Product Categories</h2>
          <p className="section-subtitle">Browse our sourcing expertise by industry</p>
          
          <div className="categories-grid">
            {categories.map((category, index) => (
              <div key={index} className="category-card card">
                <div className="category-icon">{category.icon}</div>
                <h3>{category.name}</h3>
                <p>{category.description}</p>
                <ul className="category-items">
                  {category.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .categories-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }

          .category-card {
            padding: 32px;
          }

          .category-icon {
            width: 64px;
            height: 64px;
            background: var(--primary);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            margin-bottom: 20px;
          }

          .category-card h3 {
            font-size: 22px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 12px;
          }

          .category-card > p {
            font-size: 15px;
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 20px;
          }

          .category-items {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .category-items li {
            padding: 8px 0;
            font-size: 14px;
            color: var(--text-primary);
            border-bottom: 1px solid var(--border);
          }

          .category-items li:last-child {
            border-bottom: none;
          }

          @media (max-width: 1024px) {
            .categories-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 640px) {
            .categories-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>

      {/* Sourcing Capabilities */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Sourcing Capabilities</h2>
          <p className="section-subtitle">What we can handle for your product sourcing</p>
          
          <div className="capabilities-grid">
            {capabilities.map((cap, index) => (
              <div key={index} className="capability-card card">
                <CheckCircle className="cap-icon" size={24} />
                <h3>{cap}</h3>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .capabilities-grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
          }

          .capability-card {
            padding: 24px;
            text-align: center;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 12px;
          }

          .cap-icon {
            color: var(--accent);
          }

          .capability-card h3 {
            font-size: 15px;
            font-weight: 600;
            color: var(--text-primary);
          }

          @media (max-width: 1024px) {
            .capabilities-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (max-width: 640px) {
            .capabilities-grid {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>

      {/* MOQ Info */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Minimum Order Quantities</h2>
          <p className="section-subtitle">Typical MOQ ranges by product category</p>
          
          <div className="moq-table-wrapper">
            <table className="moq-table">
              <thead>
                <tr>
                  <th>Product Category</th>
                  <th>Typical MOQ</th>
                  <th>Lead Time</th>
                </tr>
              </thead>
              <tbody>
                {moqData.map((row, index) => (
                  <tr key={index}>
                    <td>{row.category}</td>
                    <td>{row.moq}</td>
                    <td>{row.leadTime}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="moq-note">
            * MOQs can often be negotiated depending on order value and long-term partnership potential. 
            Contact us to discuss your specific requirements.
          </p>
        </div>

        <style>{`
          .moq-table-wrapper {
            overflow-x: auto;
            margin-bottom: 24px;
          }

          .moq-table {
            width: 100%;
            border-collapse: collapse;
            background: white;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
          }

          .moq-table th,
          .moq-table td {
            padding: 16px 24px;
            text-align: left;
          }

          .moq-table th {
            background: var(--primary);
            color: white;
            font-weight: 600;
            font-size: 14px;
          }

          .moq-table td {
            font-size: 15px;
            color: var(--text-primary);
            border-bottom: 1px solid var(--border);
          }

          .moq-table tr:last-child td {
            border-bottom: none;
          }

          .moq-table tr:hover td {
            background: var(--bg-secondary);
          }

          .moq-note {
            text-align: center;
            font-size: 14px;
            color: var(--text-muted);
            font-style: italic;
          }

          @media (max-width: 768px) {
            .moq-table th,
            .moq-table td {
              padding: 12px 16px;
              font-size: 14px;
            }
          }
        `}</style>
      </section>

      {/* Process */}
      <section className="section" style={{ background: 'var(--bg-secondary)' }}>
        <div className="container">
          <h2 className="section-title">Sourcing Process by Product</h2>
          <p className="section-subtitle">How we approach different product types</p>
          
          <div className="process-cards">
            {processCards.map((card, index) => (
              <div key={index} className="process-card card">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <ul>
                  {card.points.map((point, i) => (
                    <li key={i}><CheckCircle size={16} /> {point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          .process-cards {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }

          .process-card {
            padding: 28px;
          }

          .process-card h3 {
            font-size: 20px;
            font-weight: 600;
            color: var(--text-primary);
            margin-bottom: 12px;
          }

          .process-card > p {
            font-size: 15px;
            color: var(--text-secondary);
            line-height: 1.6;
            margin-bottom: 16px;
          }

          .process-card ul {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .process-card ul li {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 6px 0;
            font-size: 14px;
            color: var(--text-primary);
          }

          .process-card ul li svg {
            color: var(--accent);
          }

          @media (max-width: 768px) {
            .process-cards {
              grid-template-columns: 1fr;
            }
          }
        `}</style>
      </section>

      {/* CTA */}
      <section className="section cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Don't See Your Product?</h2>
            <p>We source a wide range of products beyond these categories. Contact us to discuss your specific needs.</p>
            <Link to="/contact" className="btn btn-primary btn-lg">Discuss Your Requirements</Link>
          </div>
        </div>

        <style>{`
          .cta-section {
            background: linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%);
            color: white;
          }

          .cta-content {
            text-align: center;
            max-width: 600px;
            margin: 0 auto;
          }

          .cta-content h2 {
            font-size: 36px;
            font-weight: 700;
            margin-bottom: 16px;
          }

          .cta-content p {
            font-size: 18px;
            color: rgba(255, 255, 255, 0.9);
            margin-bottom: 32px;
          }

          .cta-section .btn-primary {
            background: white;
            color: var(--primary);
          }
        `}</style>
      </section>
    </div>
  )
}

const categories = [
  {
    name: 'Electronics',
    icon: <Laptop size={32} />,
    description: 'Consumer electronics and tech products from verified manufacturers.',
    items: ['Smartphones & Tablets', 'Laptops & Computers', 'Audio Equipment', 'Smart Home Devices', 'Wearable Technology', 'Accessories']
  },
  {
    name: 'Home & Kitchen',
    icon: <Sofa size={32} />,
    description: 'Appliances and home goods for everyday living.',
    items: ['Small Appliances', 'Kitchenware', 'Home Decor', 'Bedding & Linens', 'Furniture', 'Lighting']
  },
  {
    name: 'Textiles & Apparel',
    icon: <Shirt size={32} />,
    description: 'Garments and fabric products from certified factories.',
    items: ['Casual Wear', 'Sportswear', 'Formal Attire', 'Children\'s Clothing', 'Fabrics & Materials', 'Accessories']
  },
  {
    name: 'Industrial',
    icon: <Settings size={32} />,
    description: 'Machinery and industrial equipment sourcing.',
    items: ['Manufacturing Equipment', 'Industrial Tools', 'Safety Equipment', 'Machinery Parts', 'Electrical Components', 'Automation']
  },
  {
    name: 'Packaging',
    icon: <Box size={32} />,
    description: 'All types of packaging solutions.',
    items: ['Paper Packaging', 'Plastic Packaging', 'Corrugated Boxes', 'Labels & Stickers', 'Bags & Pouches', 'Custom Packaging']
  },
  {
    name: 'Toys & Gifts',
    icon: <Gift size={32} />,
    description: 'Fun products and promotional items.',
    items: ['Educational Toys', 'Plush Toys', 'Board Games', 'Promotional Gifts', 'Seasonal Items', 'Craft Supplies']
  },
  {
    name: 'Automotive',
    icon: <Car size={32} />,
    description: 'Vehicle parts and automotive accessories.',
    items: ['Auto Parts', 'Electronics', 'Interior Accessories', 'Exterior Accessories', 'Tools & Equipment', 'Replacement Parts']
  },
  {
    name: 'General Merchandise',
    icon: <Package size={32} />,
    description: 'Wide variety of consumer products.',
    items: ['Office Supplies', 'Sports Equipment', 'Health & Beauty', 'Garden Products', 'Pet Supplies', 'Outdoor Gear']
  }
]

const capabilities = [
  'Product Development',
  'Prototype Sampling',
  'Private Label Manufacturing',
  'Custom Packaging Design',
  'Quality Assurance Testing',
  'Certification Coordination',
  'Supply Chain Optimization',
  'Multi-Supplier Sourcing'
]

const moqData = [
  { category: 'Electronics', moq: '500-1,000 units', leadTime: '4-8 weeks' },
  { category: 'Home & Kitchen', moq: '200-500 units', leadTime: '4-6 weeks' },
  { category: 'Textiles & Apparel', moq: '300-1,000 units', leadTime: '3-6 weeks' },
  { category: 'Industrial Equipment', moq: '50-200 units', leadTime: '6-12 weeks' },
  { category: 'Packaging', moq: '1,000-5,000 units', leadTime: '2-4 weeks' },
  { category: 'Toys & Gifts', moq: '500-1,000 units', leadTime: '4-6 weeks' },
  { category: 'Automotive Parts', moq: '200-500 units', leadTime: '4-8 weeks' },
  { category: 'General Merchandise', moq: '200-500 units', leadTime: '3-6 weeks' }
]

const processCards = [
  {
    title: 'Electronics Sourcing',
    description: 'Specialized approach for electronic products requiring strict quality control.',
    points: [
      'Functional testing coordination',
      'Certification verification (CE, FCC, RoHS)',
      'Component quality assessment',
      'Safety standard compliance'
    ]
  },
  {
    title: 'Textile & Apparel',
    description: 'Detailed quality control for garment and fabric sourcing.',
    points: [
      'Fabric quality inspection',
      'Color matching accuracy',
      'Size and measurement verification',
      ' stitching and finishing checks'
    ]
  },
  {
    title: 'Industrial Products',
    description: 'Technical sourcing for machinery and equipment.',
    points: [
      'Technical specification review',
      'Performance testing',
      'Compliance documentation',
      'Spare parts availability'
    ]
  },
  {
    title: 'Custom Products',
    description: 'Full support for custom-designed products.',
    points: [
      'Prototype development',
      'Material selection guidance',
      'Mold and tooling coordination',
      'Production sample approval'
    ]
  }
]

export default Products