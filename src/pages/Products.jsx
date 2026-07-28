import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Factory, Shield } from 'lucide-react';

const categories = [
  {
    name: 'Electronics',
    description: 'Consumer electronics, smart devices, PC accessories, audio/video equipment',
    suppliers: '120+',
    icon: '⚡'
  },
  {
    name: 'Textiles & Apparel',
    description: 'Clothing, fabrics, accessories, fashion items, workwear',
    suppliers: '85+',
    icon: '👕'
  },
  {
    name: 'Machinery',
    description: 'Industrial equipment, parts, tools, mechanical components',
    suppliers: '65+',
    icon: '⚙️'
  },
  {
    name: 'Home & Garden',
    description: 'Furniture, decor, kitchenware, outdoor equipment',
    suppliers: '90+',
    icon: '🏡'
  },
  {
    name: 'Packaging',
    description: 'Boxes, bags, labels, custom packaging solutions',
    suppliers: '55+',
    icon: '📦'
  },
  {
    name: 'Automotive Parts',
    description: 'Car accessories, spare parts, motorcycle components',
    suppliers: '70+',
    icon: '🚗'
  },
  {
    name: 'Health & Beauty',
    description: 'Cosmetics, personal care, wellness products, supplements',
    suppliers: '45+',
    icon: '💄'
  },
  {
    name: 'Sports & Outdoors',
    description: 'Fitness equipment, outdoor gear, sporting goods',
    suppliers: '60+',
    icon: '⚽'
  },
  {
    name: 'Toys & Games',
    description: 'Educational toys, games, puzzles, and children products',
    suppliers: '40+',
    icon: '🎮'
  },
  {
    name: 'Jewelry & Watches',
    description: 'Fashion jewelry, watches, accessories',
    suppliers: '35+',
    icon: '💍'
  },
  {
    name: 'Food & Beverage',
    description: 'Food processing equipment, packaging, ingredients',
    suppliers: '30+',
    icon: '🍳'
  },
  {
    name: 'Office Supplies',
    description: 'Stationery, office equipment, promotional items',
    suppliers: '50+',
    icon: '📎'
  }
];

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
        padding: '100px 0 80px',
        color: 'white'
      }}>
        <div className="container">
          <div style={{ maxWidth: '700px' }}>
            <h1 style={{ color: 'white', marginBottom: '20px', fontSize: '44px' }}>
              Products We Source
            </h1>
            <p style={{ fontSize: '18px', opacity: 0.9, lineHeight: '1.7' }}>
              We have verified supplier networks across a wide range of product categories. 
              Find the right manufacturer for your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section">
        <div className="container">
          <div className="grid grid-3">
            {categories.map((category, index) => (
              <div key={index} className="card" style={{ padding: '32px' }}>
                <div style={{ fontSize: '40px', marginBottom: '16px' }}>{category.icon}</div>
                <h3 style={{ marginBottom: '12px', fontSize: '20px' }}>{category.name}</h3>
                <p style={{ color: '#64748B', fontSize: '14px', marginBottom: '16px', lineHeight: '1.6' }}>
                  {category.description}
                </p>
                <div className="flex items-center gap-2">
                  <Factory size={16} style={{ color: '#1E3A5F' }} />
                  <span style={{ color: '#1E3A5F', fontWeight: '600', fontSize: '14px' }}>
                    {category.suppliers} Verified Suppliers
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Info */}
      <section className="section section-bg">
        <div className="container">
          <div className="grid grid-2" style={{ gap: '64px', alignItems: 'center' }}>
            <div>
              <h2 style={{ marginBottom: '24px' }}>Sourcing Made Simple</h2>
              <p style={{ color: '#475569', marginBottom: '24px', lineHeight: '1.7' }}>
                Our extensive network of verified suppliers means we can find the right manufacturer 
                for virtually any product. Every supplier in our network has been personally vetted.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div className="flex items-center gap-3">
                  <CheckCircle size={22} style={{ color: '#10B981' }} />
                  <span style={{ color: '#475569' }}>On-site factory verification</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={22} style={{ color: '#10B981' }} />
                  <span style={{ color: '#475569' }}>Business license and certification checks</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={22} style={{ color: '#10B981' }} />
                  <span style={{ color: '#475569' }}>Production capacity assessment</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle size={22} style={{ color: '#10B981' }} />
                  <span style={{ color: '#475569' }}>Quality management system evaluation</span>
                </div>
              </div>
            </div>
            
            <div className="card" style={{ padding: '32px', background: '#F8FAFC' }}>
              <h3 style={{ marginBottom: '20px' }}>Not Sure What You Need?</h3>
              <p style={{ color: '#64748B', marginBottom: '24px', lineHeight: '1.6' }}>
                If you don't see your product category listed, don't worry. We have connections 
                across many industries and can likely help. Contact us to discuss your specific needs.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Discuss Your Project
                <ArrowRight size={18} style={{ marginLeft: '8px' }} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container">
          <div style={{ 
            background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
            borderRadius: '16px',
            padding: '60px',
            textAlign: 'center',
            color: 'white'
          }}>
            <h2 style={{ color: 'white', marginBottom: '16px' }}>Can't Find What You're Looking For?</h2>
            <p style={{ opacity: 0.9, marginBottom: '32px', maxWidth: '500px', margin: '0 auto 32px' }}>
              We have extensive industry connections. Tell us what you need and we'll find the right supplier.
            </p>
            <Link to="/contact" className="btn btn-white" style={{ padding: '16px 40px', fontSize: '16px' }}>
              Get a Free Quote
              <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
