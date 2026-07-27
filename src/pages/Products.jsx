import { useState, useEffect, useRef } from 'react'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '../strk-img-config.json'

const Products = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      ImageHelper.loadImages(strkImgConfig, containerRef.current)
    })
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const categories = [
    {
      title: 'Electronics',
      icon: '📱',
      description: 'Consumer and industrial electronic products including smart devices, accessories, and components.',
      products: ['Smart Home Devices', 'Consumer Electronics', 'LED Lighting', 'Electronic Components', 'Mobile Accessories', 'Audio Equipment']
    },
    {
      title: 'Furniture',
      icon: '🪑',
      description: 'Residential and commercial furniture including seating, tables, storage, and outdoor furniture.',
      products: ['Office Furniture', 'Home Furniture', 'Outdoor Furniture', 'Hotel Furniture', 'Kids Furniture', 'Custom Furniture']
    },
    {
      title: 'Textiles & Apparel',
      icon: '👕',
      description: 'Garments, fabrics, and textile products for fashion, home, and industrial use.',
      products: ['Casual Wear', 'Sportswear', 'Formal Attire', 'Home Textiles', 'Industrial Fabrics', 'Technical Textiles']
    },
    {
      title: 'Machinery & Equipment',
      icon: '⚙️',
      description: 'Industrial machinery, equipment, and parts for various manufacturing sectors.',
      products: ['Industrial Machinery', 'Agricultural Equipment', 'Construction Tools', 'Packaging Machinery', 'Food Processing Equipment', 'CNC Machines']
    },
    {
      title: 'Packaging',
      icon: '📦',
      description: 'Custom packaging solutions for retail, food, industrial, and promotional use.',
      products: ['Paper Packaging', 'Plastic Packaging', 'Gift Boxes', 'Food Packaging', 'Industrial Packaging', 'Custom Labels']
    },
    {
      title: 'Consumer Goods',
      icon: '🛍️',
      description: 'Wide range of everyday consumer products for retail and distribution.',
      products: ['Kitchenware', 'Home Decor', 'Pet Supplies', 'Sports Equipment', 'Toys & Games', 'Beauty Products']
    },
    {
      title: 'Automotive',
      icon: '🚗',
      description: 'Automotive parts, accessories, and components for aftermarket and OEM.',
      products: ['Auto Parts', 'Car Accessories', 'Motorcycle Parts', 'Electronics', 'Interior Accessories', 'Tools & Equipment']
    },
    {
      title: 'Health & Safety',
      icon: '🏥',
      description: 'Medical supplies, safety equipment, and health-related products.',
      products: ['Personal Protective Equipment', 'Medical Supplies', 'Safety Gear', 'First Aid Products', 'Fitness Equipment', 'Wellness Products']
    },
    {
      title: 'Toys & Games',
      icon: '🎮',
      description: 'Toys, games, and recreational products for children and adults.',
      products: ['Educational Toys', 'Electronic Toys', 'Board Games', 'Outdoor Toys', 'Puzzles', 'Craft Kits']
    }
  ]

  const capabilities = [
    'Factory direct sourcing',
    'Custom manufacturing',
    'Private label production',
    'Prototype development',
    'Bulk order handling',
    'Sample production',
    'Quality assurance',
    'Certification support'
  ]

  return (
    <div ref={containerRef}>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Products We Source</h1>
          <p>
            We have expertise across a wide range of product categories, sourcing from verified Chinese manufacturers.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Product Categories</span>
            <h2 className="section-title">What We Source</h2>
            <p className="section-desc">
              Our team has extensive experience sourcing products across multiple categories from verified Chinese factories.
            </p>
          </div>

          <div className="grid-3">
            {categories.map((category, index) => (
              <div key={index} className="product-detail-card">
                <div className="product-detail-icon">
                  <span style={{ fontSize: '32px' }}>{category.icon}</span>
                </div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: '1px solid var(--color-border)' }}>
                  <p style={{ fontSize: '13px', fontWeight: '600', color: 'var(--color-primary)', marginBottom: '8px' }}>Includes:</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {category.products.slice(0, 4).map((product, i) => (
                      <span key={i} style={{ 
                        background: 'var(--color-bg-light)', 
                        padding: '4px 10px', 
                        borderRadius: '4px',
                        fontSize: '12px',
                        color: 'var(--color-text-secondary)'
                      }}>
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section" style={{ background: 'var(--color-bg-light)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Capabilities</span>
            <h2 className="section-title">Sourcing Capabilities</h2>
            <p className="section-desc">
              Whatever your product needs, we have the expertise and network to find the right manufacturer.
            </p>
          </div>
          <div className="grid-4">
            {capabilities.map((capability, index) => (
              <div key={index} className="card" style={{ textAlign: 'center', padding: '24px' }}>
                <span style={{ fontSize: '24px', marginRight: '8px' }}>✓</span>
                <span style={{ fontSize: '15px', color: 'var(--color-text-primary)' }}>{capability}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-label">How It Works</span>
            <h2 className="section-title">Product Sourcing Process</h2>
            <p className="section-desc">
              Tell us what you need, and we'll find the perfect supplier for your product.
            </p>
          </div>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { step: '1', title: 'Submit Requirements', desc: 'Provide product specifications, quantity, target price, and any special requirements.' },
              { step: '2', title: 'Supplier Matching', desc: 'We identify 3-5 qualified suppliers from our verified network that match your needs.' },
              { step: '3', title: 'Sample & Quote', desc: 'Receive samples and detailed quotes for comparison and decision making.' },
              { step: '4', title: 'Production & QC', desc: 'We manage production and conduct quality inspections to ensure standards are met.' },
              { step: '5', title: 'Shipping & Delivery', desc: 'Coordinate shipping and ensure safe delivery to your location.' }
            ].map((item, index) => (
              <div key={index} style={{ 
                display: 'flex', 
                gap: '24px', 
                padding: '24px 0',
                borderBottom: index < 4 ? '1px solid var(--color-border)' : 'none'
              }}>
                <div style={{ 
                  minWidth: '48px', 
                  height: '48px', 
                  background: 'var(--color-primary)', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: '700',
                  flexShrink: 0
                }}>
                  {item.step}
                </div>
                <div>
                  <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>{item.title}</h3>
                  <p style={{ fontSize: '15px', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--color-primary)', color: 'white', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ color: 'white', marginBottom: '16px' }}>Don't See Your Product?</h2>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Contact us anyway. We have extensive networks and can often source products outside our listed categories.
          </p>
          <a href="/contact" className="btn btn-primary" style={{ background: 'var(--color-accent)' }}>
            Tell Us What You Need
          </a>
        </div>
      </section>
    </div>
  )
}

export default Products