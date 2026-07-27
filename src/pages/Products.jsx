import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Cpu, Shirt, Wrench, Home,
  Package, Car, Sofa, Heart, Box, Zap
} from 'lucide-react';

const Products = () => {
  const categories = [
    {
      name: 'Electronics',
      icon: Cpu,
      description: 'Consumer electronics, smart devices, circuit boards, and electronic components.',
      products: [
        'Smartphones & Tablets',
        'Smart Home Devices',
        'Wearable Technology',
        'Audio & Video Equipment',
        'Computer Accessories',
        'Electronic Components',
      ],
      factories: '450+',
    },
    {
      name: 'Textiles & Apparel',
      icon: Shirt,
      description: 'Garments, fabrics, and textile products for fashion and industrial use.',
      products: [
        'Casual & Formal Wear',
        'Sports & Activewear',
        'Denim & Jeans',
        'Knitwear & Sweaters',
        'Technical Textiles',
        'Home Textiles',
      ],
      factories: '380+',
    },
    {
      name: 'Machinery & Parts',
      icon: Wrench,
      description: 'Industrial machinery, equipment parts, and manufacturing tools.',
      products: [
        'Industrial Machinery',
        'CNC Machines',
        'Agricultural Equipment',
        'Construction Machinery',
        'Machine Parts & Components',
        'Tools & Hardware',
      ],
      factories: '290+',
    },
    {
      name: 'Consumer Goods',
      icon: Home,
      description: 'Daily use products for home, kitchen, and personal care.',
      products: [
        'Kitchenware & Cookware',
        'Home Decor',
        'Garden Equipment',
        'Pet Supplies',
        'Toys & Games',
        'Stationery',
      ],
      factories: '520+',
    },
    {
      name: 'Packaging',
      icon: Package,
      description: 'All types of packaging solutions for various industries.',
      products: [
        'Paper & Cardboard Packaging',
        'Plastic Packaging',
        'Metal Containers',
        'Glass Bottles & Jars',
        'Flexible Packaging',
        'Eco-friendly Packaging',
      ],
      factories: '180+',
    },
    {
      name: 'Automotive Parts',
      icon: Car,
      description: 'Vehicle parts, components, and accessories.',
      products: [
        'Engine Components',
        'Brake Systems',
        'Electrical Parts',
        'Body Parts',
        'Interior Components',
        'Tires & Wheels',
      ],
      factories: '210+',
    },
    {
      name: 'Furniture',
      icon: Sofa,
      description: 'Residential and commercial furniture solutions.',
      products: [
        'Office Furniture',
        'Home Furniture',
        'Outdoor Furniture',
        'Hotel Furniture',
        'Furniture Components',
        'Upholstery',
      ],
      factories: '160+',
    },
    {
      name: 'Health & Beauty',
      icon: Heart,
      description: 'Beauty products, personal care items, and health supplements.',
      products: [
        'Skincare Products',
        'Hair Care Products',
        'Cosmetics',
        'Personal Care Items',
        'Health Supplements',
        'Medical Devices',
      ],
      factories: '240+',
    },
  ];

  const capabilities = [
    'OEM & ODM Manufacturing',
    'Custom Design & Development',
    'Private Label Production',
    'Small Batch Manufacturing',
    'Mass Production',
    'Prototype Development',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '120px 0 80px',
        background: 'linear-gradient(135deg, #1E3A5F 0%, #2D5A87 100%)',
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span style={{ 
              display: 'inline-block',
              padding: '6px 16px',
              backgroundColor: 'rgba(230, 126, 34, 0.2)',
              color: '#FFB347',
              borderRadius: '20px',
              fontSize: '14px',
              fontWeight: '600',
              marginBottom: '20px'
            }}>
              Product Categories
            </span>
            <h1 style={{ 
              fontSize: '48px', 
              fontWeight: '800', 
              color: 'white', 
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)'
            }}>
              Products We Source
            </h1>
            <p style={{ 
              fontSize: '20px', 
              color: 'rgba(255,255,255,0.85)', 
              lineHeight: '1.7',
              marginBottom: '32px'
            }}>
              Extensive network of verified manufacturers across diverse industries, ready to meet your sourcing needs.
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <div style={{ 
                backgroundColor: 'rgba(255,255,255,0.15)', 
                padding: '12px 24px', 
                borderRadius: '8px',
                color: 'white'
              }}>
                <span style={{ fontSize: '24px', fontWeight: '700' }}>2,000+</span>
                <span style={{ marginLeft: '8px', opacity: 0.9 }}>Verified Factories</span>
              </div>
              <div style={{ 
                backgroundColor: 'rgba(255,255,255,0.15)', 
                padding: '12px 24px', 
                borderRadius: '8px',
                color: 'white'
              }}>
                <span style={{ fontSize: '24px', fontWeight: '700' }}>8</span>
                <span style={{ marginLeft: '8px', opacity: 0.9 }}>Major Categories</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '32px' }}>
            {categories.map((category, index) => (
              <div key={index} className="card" style={{ padding: '40px' }}>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '72px',
                    height: '72px',
                    backgroundColor: 'rgba(30, 58, 95, 0.1)',
                    borderRadius: '16px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <category.icon size={36} color="var(--color-primary)" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      marginBottom: '12px'
                    }}>
                      <h3 style={{ fontSize: '24px', color: 'var(--color-text-primary)' }}>
                        {category.name}
                      </h3>
                      <span style={{
                        backgroundColor: 'rgba(39, 174, 96, 0.1)',
                        color: '#27AE60',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        fontSize: '14px',
                        fontWeight: '600'
                      }}>
                        {category.factories} factories
                      </span>
                    </div>
                    <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
                      {category.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {category.products.slice(0, 4).map((product, idx) => (
                        <span 
                          key={idx}
                          style={{
                            backgroundColor: 'var(--color-bg-light)',
                            color: 'var(--color-text-secondary)',
                            padding: '6px 12px',
                            borderRadius: '6px',
                            fontSize: '13px'
                          }}
                        >
                          {product}
                        </span>
                      ))}
                      {category.products.length > 4 && (
                        <span style={{
                          backgroundColor: 'rgba(230, 126, 34, 0.1)',
                          color: '#E67E22',
                          padding: '6px 12px',
                          borderRadius: '6px',
                          fontSize: '13px',
                          fontWeight: '500'
                        }}>
                          +{category.products.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="section section-alt">
        <div className="container">
          <div className="text-center mb-12">
            <h2 style={{ color: 'var(--color-text-primary)', marginBottom: '16px' }}>
              Manufacturing Capabilities
            </h2>
            <p style={{ 
              color: 'var(--color-text-secondary)', 
              maxWidth: '600px', 
              margin: '0 auto',
              fontSize: '18px'
            }}>
              Our verified factories offer a wide range of manufacturing capabilities to meet your specific requirements.
            </p>
          </div>

          <div className="grid-3" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {capabilities.map((capability, index) => (
              <div 
                key={index}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '20px',
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                }}
              >
                <CheckCircle size={20} color="#27AE60" />
                <span style={{ fontWeight: '500', color: 'var(--color-text-primary)' }}>
                  {capability}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: '64px', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '32px', marginBottom: '24px', color: 'var(--color-text-primary)' }}>
                Not Sure What You Need?
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '24px' }}>
                Our team has extensive experience across multiple industries. Whether you have detailed specifications or just a concept, we can help you find the right manufacturers.
              </p>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.7', marginBottom: '32px' }}>
                Contact us with your requirements, and we'll provide personalized recommendations based on your industry, volume, and quality needs.
              </p>
              <Link to="/contact" className="btn btn-primary">
                Discuss Your Requirements
                <ArrowRight size={18} />
              </Link>
            </div>
            <div className="card" style={{ padding: '40px' }}>
              <h3 style={{ marginBottom: '24px', color: 'var(--color-text-primary)' }}>
                Why Factories Choose Us
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Consistent order volumes',
                  'Professional communication',
                  'Fair payment terms',
                  'Long-term partnerships',
                  'Quality-focused approach',
                ].map((item, index) => (
                  <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <CheckCircle size={20} color="#27AE60" />
                    <span style={{ color: 'var(--color-text-secondary)' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white', marginBottom: '16px' }}>
            Ready to Find Your Supplier?
          </h2>
          <p style={{ 
            color: 'rgba(255,255,255,0.85)', 
            fontSize: '18px',
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}>
            Tell us what you need, and we'll connect you with verified manufacturers.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ 
            padding: '18px 36px', 
            fontSize: '18px'
          }}>
            Get a Free Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;