import React from 'react';
import { Link } from 'react-router-dom';
import { Package, CheckCircle } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      name: 'Electronics & Components',
      items: [
        'Consumer electronics and accessories',
        'Electronic components and modules',
        'Cables, connectors, and power supplies',
        'LED lighting and displays',
        'Audio and video equipment',
      ],
    },
    {
      name: 'Machinery & Industrial Equipment',
      items: [
        'Manufacturing and processing equipment',
        'CNC machines and tooling',
        'Material handling equipment',
        'Pumps, valves, and fluid systems',
        'Welding and fabrication equipment',
      ],
    },
    {
      name: 'Textiles, Apparel & Accessories',
      items: [
        'Apparel and fashion accessories',
        'Technical textiles and fabrics',
        'Home textiles and bedding',
        'Bags, luggage, and cases',
        'Footwear and components',
      ],
    },
    {
      name: 'Home & Garden',
      items: [
        'Kitchenware and cookware',
        'Home decor and furnishings',
        'Garden tools and outdoor products',
        'Storage and organization solutions',
        'Cleaning and household supplies',
      ],
    },
    {
      name: 'Automotive & Transportation',
      items: [
        'Aftermarket auto parts and accessories',
        'Vehicle components and assemblies',
        'Electric vehicle parts',
        'Marine and boating equipment',
        'Commercial vehicle components',
      ],
    },
    {
      name: 'Medical & Healthcare',
      items: [
        'Medical devices and instruments',
        'Healthcare consumables',
        'Personal protective equipment',
        'Rehabilitation and mobility aids',
        'Laboratory equipment and supplies',
      ],
    },
    {
      name: 'Consumer Goods',
      items: [
        'Toys and recreational products',
        'Pet products and accessories',
        'Beauty and personal care items',
        'Stationery and office supplies',
        'Gifts and promotional products',
      ],
    },
    {
      name: 'Industrial Materials',
      items: [
        'Raw materials and commodities',
        'Packaging materials and containers',
        'Building materials and hardware',
        'Chemicals and specialty materials',
        'Safety equipment and supplies',
      ],
    },
  ];

  return (
    <>
      <section className="section" style={{ paddingTop: '3rem', paddingBottom: '2rem' }}>
        <div className="container">
          <div style={{ maxWidth: '720px' }}>
            <div style={{ color: 'var(--color-accent)', fontWeight: 600, fontSize: '0.875rem', letterSpacing: '0.05em', marginBottom: '0.5rem' }}>
              PRODUCT CATEGORIES
            </div>
            <h1 style={{ marginBottom: '1rem' }}>Products We Source</h1>
            <p className="text-muted" style={{ fontSize: '1.125rem' }}>
              We work with buyers across a wide range of product categories. If your product is not listed, contact us — we source many specialized items.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-alt" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {categories.map((category, index) => (
              <div key={index} className="card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div className="card-icon" style={{ margin: 0 }}>
                    <Package size={22} />
                  </div>
                  <h3 style={{ fontSize: '1.125rem' }}>{category.name}</h3>
                </div>
                <ul style={{ fontSize: '0.875rem', color: 'var(--color-text-light)', paddingLeft: '1.25rem', margin: 0 }}>
                  {category.items.map((item, i) => (
                    <li key={i} style={{ marginBottom: '0.35rem' }}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section container">
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Our Sourcing Approach by Category</h2>
          <p className="text-muted" style={{ marginBottom: '1.5rem' }}>
            Different product categories require different verification and quality control approaches. We adapt our process to the specific risks and requirements of each category.
          </p>
          <div className="grid-2" style={{ textAlign: 'left', marginTop: '2rem' }}>
            {[
              { title: 'Technical Products', desc: 'Detailed specification review, sample evaluation, and functional testing during inspection.' },
              { title: 'Consumer Products', desc: 'Focus on appearance, packaging, labeling compliance, and safety standards.' },
              { title: 'Industrial Components', desc: 'Dimensional accuracy, material certification, and performance verification.' },
              { title: 'Apparel & Textiles', desc: 'Fabric quality, construction details, sizing consistency, and color matching.' },
            ].map((item, index) => (
              <div key={index} className="card">
                <h4 style={{ marginBottom: '0.5rem' }}>{item.title}</h4>
                <p className="text-muted" style={{ fontSize: '0.875rem', margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ marginBottom: '1rem' }}>Need to Source a Specific Product?</h2>
          <p className="text-muted" style={{ marginBottom: '1.5rem', maxWidth: '520px', marginLeft: 'auto', marginRight: 'auto' }}>
            Tell us about your requirements. We will research availability and provide qualified supplier options.
          </p>
          <Link to="/contact" className="btn btn-primary btn-lg">Start a Sourcing Inquiry</Link>
        </div>
      </section>
    </>
  );
};

export default Products;