import React, { useEffect, useRef } from 'react';
import strkImgConfig from '../strk-img-config.json';
import { Link } from 'react-router-dom';

const Products = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (window.ImageHelper && containerRef.current) {
      const config = strkImgConfig;
      return window.ImageHelper.loadImages(config, containerRef.current);
    }
  }, []);

  const categories = [
    {
      title: 'Electronics & Components',
      items: ['Consumer electronics', 'LED lighting and fixtures', 'Power supplies and adapters', 'Cables and connectors', 'PCBs and electronic modules', 'Smart home devices', 'Audio equipment'],
    },
    {
      title: 'Home & Kitchen',
      items: ['Small appliances', 'Cookware and bakeware', 'Kitchen tools and gadgets', 'Home textiles and bedding', 'Furniture and decor', 'Storage and organization', 'Cleaning supplies'],
    },
    {
      title: 'Industrial & Tools',
      items: ['Hand tools and power tools', 'Safety equipment', 'Fasteners and hardware', 'Machinery components', 'Packaging equipment', 'Material handling', 'Welding supplies'],
    },
    {
      title: 'Apparel & Accessories',
      items: ['Clothing and uniforms', 'Bags and luggage', 'Footwear', 'Hats and accessories', 'Promotional products', 'Workwear and PPE', 'Sportswear'],
    },
    {
      title: 'Automotive & Transportation',
      items: ['OEM components', 'Aftermarket parts', 'Car accessories', 'Motorcycle parts', 'Electric vehicle components', 'Trailer and RV parts', 'Tires and wheels'],
    },
    {
      title: 'Packaging & Materials',
      items: ['Custom boxes and cartons', 'Labels and stickers', 'Protective packaging', 'Retail display materials', 'Shipping supplies', 'Food-grade packaging', 'Sustainable materials'],
    },
    {
      title: 'Medical & Healthcare',
      items: ['Medical devices', 'Disposable supplies', 'Wellness products', 'Personal protective equipment', 'Rehabilitation equipment', 'Diagnostic tools', 'Home healthcare'],
    },
    {
      title: 'Toys, Sports & Outdoor',
      items: ['Toys and games', 'Fitness equipment', 'Outdoor and camping gear', 'Sports accessories', 'Bicycles and parts', 'Water sports equipment', 'Seasonal decorations'],
    },
  ];

  const capabilities = [
    'Custom product development and OEM/ODM',
    'Private label and branding support',
    'Material and component sourcing',
    'Compliance and certification guidance',
    'Packaging design and optimization',
    'Consolidation and mixed container loading',
  ];

  return (
    <div ref={containerRef}>
      <div className="page-header">
        <div className="page-header-container">
          <h1 id="products-hero-title">Products We Source</h1>
          <p id="products-hero-subtitle">Experience across diverse categories with verified manufacturers</p>
        </div>
      </div>

      <section className="section">
        <div className="max-w-1280 mx-auto px-6" style={{ marginBottom: '2rem' }}>
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <img
              data-strk-img-id="products-hero"
              data-strk-img="[products-hero-subtitle] [products-hero-title] manufacturing products"
              data-strk-img-ratio="16x9"
              data-strk-img-width="900"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
              alt="Product categories"
              style={{ width: '100%', borderRadius: '8px' }}
            />
          </div>
        </div>
        <div className="max-w-1280 mx-auto px-6">
          <div style={{ maxWidth: '720px', margin: '0 auto 2.5rem', textAlign: 'center' }}>
            <p style={{ color: 'var(--color-text-light)' }}>
              We work with manufacturers across most product categories. Below are the areas where we have 
              the deepest experience and established supplier relationships.
            </p>
          </div>

          <div className="services-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            {categories.map((cat, idx) => (
              <div key={idx} className="card" style={{ padding: '1.5rem' }}>
                <h3 id={`product-cat-${idx}`} style={{ marginBottom: '0.75rem', fontSize: '1.125rem' }}>{cat.title}</h3>
                <img
                  data-strk-img-id={`product-cat-${idx}`}
                  data-strk-img={`[product-cat-${idx}] manufacturing products`}
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="400"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 9'/%3E"
                  alt={cat.title}
                  style={{ width: '100%', borderRadius: '6px', marginBottom: '0.75rem' }}
                />
                <ul style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', paddingLeft: '1.25rem', margin: 0 }}>
                  {cat.items.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.25rem' }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--color-bg-alt)' }}>
        <div className="max-w-1280 mx-auto px-6">
          <h2 className="section-title">Our Capabilities</h2>
          <p className="section-subtitle">Beyond basic sourcing, we support the full product lifecycle</p>
          
          <div className="services-grid">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="card" style={{ textAlign: 'center', padding: '1.5rem' }}>
                <p style={{ margin: 0, fontSize: '0.9375rem' }}>{cap}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="max-w-1280 mx-auto px-6 text-center">
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Don't See Your Product?</h2>
          <p style={{ color: 'var(--color-text-light)', marginBottom: '1.5rem', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
            We source many additional categories. Tell us what you need and we will let you know if we can assist.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">
            Inquire About Your Product
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;