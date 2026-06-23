import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, Sofa, Shirt, Settings, Package, Gamepad2, Utensils, 
  HeartPulse, ArrowRight, CheckCircle
} from 'lucide-react';

const Products = () => {
  const categories = [
    {
      icon: Cpu,
      name: 'Electronics',
      description: 'Consumer electronics, smart devices, circuit boards, and electronic components.',
      examples: ['Smartphones', 'Tablets', 'Wearable Devices', 'Power Banks', 'LED Lights', 'Audio Equipment'],
      suppliers: '2,500+'
    },
    {
      icon: Sofa,
      name: 'Furniture',
      description: 'Modern and traditional furniture for home, office, and commercial use.',
      examples: ['Sofas', 'Chairs', 'Tables', 'Cabinets', 'Outdoor Furniture', 'Kids Furniture'],
      suppliers: '1,800+'
    },
    {
      icon: Shirt,
      name: 'Textiles & Apparel',
      description: 'Fabrics, garments, and accessories for all age groups and markets.',
      examples: ['T-Shirts', 'Jackets', 'Dresses', 'Sportswear', 'Denim', 'Home Textiles'],
      suppliers: '3,200+'
    },
    {
      icon: Settings,
      name: 'Machinery',
      description: 'Industrial machinery, parts, and equipment for various sectors.',
      examples: ['CNC Machines', 'Packaging Machinery', 'Agricultural Equipment', 'Construction Tools', 'Motors'],
      suppliers: '900+'
    },
    {
      icon: Package,
      name: 'Packaging',
      description: 'All types of packaging solutions for products and shipping.',
      examples: ['Cardboard Boxes', 'Plastic Containers', 'Paper Bags', 'Gift Boxes', 'Labels'],
      suppliers: '1,200+'
    },
    {
      icon: Gamepad2,
      name: 'Toys & Games',
      description: 'Educational, electronic, and traditional toys for children and adults.',
      examples: ['Action Figures', 'Board Games', 'Electronic Toys', 'Puzzles', 'Plush Toys'],
      suppliers: '800+'
    },
    {
      icon: Utensils,
      name: 'Food Equipment',
      description: 'Commercial and household kitchen equipment and appliances.',
      examples: ['Kitchen Appliances', 'Cookware', 'Cutlery', 'Food Processors', 'Restaurant Equipment'],
      suppliers: '600+'
    },
    {
      icon: HeartPulse,
      name: 'Medical Supplies',
      description: 'Medical devices, equipment, and consumables for healthcare.',
      examples: ['Diagnostic Equipment', 'Surgical Instruments', 'Protective Gear', 'Rehabilitation Equipment'],
      suppliers: '450+'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
        padding: '100px 0'
      }}>
        <div className="container">
          <div className="text-center" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ 
              fontSize: 'clamp(32px, 5vw, 48px)', 
              fontWeight: '700', 
              color: 'white',
              marginBottom: '20px'
            }}>
              Products We Source
            </h1>
            <p style={{ 
              fontSize: '20px', 
              color: 'rgba(255,255,255,0.9)', 
              lineHeight: '1.7'
            }}>
              We have an extensive network of verified manufacturers across multiple industries. Find the right supplier for your product needs.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="grid-2" style={{ gap: '32px' }}>
            {categories.map((category, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-start gap-4">
                  <div style={{ 
                    width: '64px', 
                    height: '64px', 
                    backgroundColor: 'var(--primary)', 
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <category.icon size={32} style={{ color: 'white' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 style={{ fontSize: '22px', fontWeight: '700', color: 'var(--text-primary)' }}>
                        {category.name}
                      </h3>
                      <span style={{ 
                        fontSize: '14px', 
                        fontWeight: '600', 
                        color: 'var(--primary)',
                        backgroundColor: 'rgba(26, 54, 93, 0.1)',
                        padding: '4px 12px',
                        borderRadius: '4px'
                      }}>
                        {category.suppliers} suppliers
                      </span>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '16px' }}>
                      {category.description}
                    </p>
                    <div>
                      <p style={{ fontSize: '14px', fontWeight: '600', color: 'var(--text-muted)', marginBottom: '8px' }}>
                        Common products:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {category.examples.map((example, idx) => (
                          <span key={idx} style={{ 
                            fontSize: '13px', 
                            color: 'var(--text-secondary)',
                            backgroundColor: 'var(--background)',
                            padding: '4px 10px',
                            borderRadius: '4px'
                          }}>
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Categories Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">Don't See Your Product?</h2>
            <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
              We have suppliers for many more categories. Contact us with your specific requirements.
            </p>
          </div>
          
          <div className="card p-8" style={{ 
            background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
            textAlign: 'center'
          }}>
            <h3 style={{ 
              fontSize: '24px', 
              fontWeight: '700', 
              color: 'white',
              marginBottom: '16px'
            }}>
              Tell Us What You Need
            </h3>
            <p style={{ 
              fontSize: '16px', 
              color: 'rgba(255,255,255,0.9)', 
              marginBottom: '24px',
              maxWidth: '500px',
              margin: '0 auto 24px',
              lineHeight: '1.7'
            }}>
              Even if your product category isn't listed, we likely have verified suppliers who can meet your needs.
            </p>
            <Link to="/contact" className="btn btn-cta">
              Get a Custom Quote
              <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="section-title">How We Source Any Product</h2>
            <p className="section-subtitle" style={{ margin: '16px auto 0' }}>
              Our process works the same way regardless of your product category
            </p>
          </div>
          
          <div className="grid-4">
            {[
              { step: 1, title: 'Submit Request', desc: 'Share your product requirements' },
              { step: 2, title: 'We Find Suppliers', desc: 'Match with verified manufacturers' },
              { step: 3, title: 'Quality Check', desc: 'Factory verification & inspection' },
              { step: 4, title: 'Smooth Delivery', desc: 'Shipping & customs handled' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div style={{ 
                  width: '48px', 
                  height: '48px', 
                  backgroundColor: 'var(--primary)', 
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px'
                }}>
                  <span style={{ color: 'white', fontWeight: '700' }}>{item.step}</span>
                </div>
                <h4 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '8px' }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
