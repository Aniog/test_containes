import React from 'react'

const Home = () => {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif' }}>
      {/* Hero Section */}
      <section style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', color: 'white', padding: '80px 20px', position: 'relative' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontSize: 'clamp(32px, 5vw, 56px)', fontWeight: 'bold', lineHeight: '1.2', marginBottom: '20px' }}>
                Precision Sheet Metal
                <span style={{ color: '#f59e0b', display: 'block' }}>Folding Solutions</span>
              </h1>
              <p style={{ fontSize: '18px', color: '#cbd5e1', marginBottom: '32px', maxWidth: '500px', lineHeight: '1.6' }}>
                ARTITECT MACHINERY delivers world-class double folding machines and sheet metal folders. 
                Engineered for precision, built for durability, trusted by industry leaders.
              </p>
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <button style={{ background: '#d97706', color: 'white', padding: '16px 32px', borderRadius: '8px', fontWeight: '600', border: 'none', cursor: 'pointer', fontSize: '16px' }}>
                  Explore Products
                </button>
                <button style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: '16px 32px', borderRadius: '8px', fontWeight: '600', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', fontSize: '16px', backdropFilter: 'blur(4px)' }}>
                  Request Quote
                </button>
              </div>
            </div>
            <div style={{ background: 'rgba(245, 158, 11, 0.1)', padding: '32px', borderRadius: '16px', border: '1px solid rgba(245, 158, 11, 0.2)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                {['Double Folding Machine', 'Double Folder', 'Sheet Metal Folder', 'Metal Folding Machine'].map((product, i) => (
                  <div key={i} style={{ background: 'rgba(255,255,255,0.1)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div style={{ width: '32px', height: '32px', background: '#f59e0b', borderRadius: '8px', marginBottom: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ color: 'white', fontSize: '16px' }}>⚙</span>
                    </div>
                    <div style={{ fontWeight: '600', fontSize: '14px' }}>{product}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ background: 'white', padding: '64px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '32px', textAlign: 'center' }}>
            {[
              { number: '25+', label: 'Years Experience' },
              { number: '500+', label: 'Clients Worldwide' },
              { number: '1000+', label: 'Machines Delivered' },
              { number: '50+', label: 'Countries Served' }
            ].map((stat, i) => (
              <div key={i}>
                <div style={{ fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 'bold', color: '#d97706', marginBottom: '8px' }}>{stat.number}</div>
                <div style={{ color: '#64748b', fontWeight: '500' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section style={{ background: '#f8fafc', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 'bold', color: '#1e293b', marginBottom: '16px' }}>
              Our Product Range
            </h2>
            <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              Comprehensive selection of sheet metal folding machines designed for precision, efficiency, and reliability.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
            {[
              {
                title: 'Double Folding Machine',
                description: 'Precision-engineered double folding machine for accurate and efficient sheet metal bending operations.',
                features: ['High Precision', 'Heavy Duty', 'Easy Operation']
              },
              {
                title: 'Double Folder',
                description: 'Robust double folder system designed for industrial-grade sheet metal folding applications.',
                features: ['Industrial Grade', 'Versatile', 'Reliable']
              },
              {
                title: 'Sheet Metal Folder',
                description: 'Advanced sheet metal folder with superior control and repeatability for professional results.',
                features: ['Superior Control', 'Repeatable Results', 'Professional Grade']
              },
              {
                title: 'Metal Folding Machine',
                description: 'Heavy-duty metal folding machine built for demanding industrial environments.',
                features: ['Heavy Duty', 'Industrial Use', 'Long Lasting']
              }
            ].map((product, i) => (
              <div key={i} style={{ background: 'white', borderRadius: '12px', padding: '24px', border: '1px solid #e2e8f0', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}>
                <div style={{ width: '48px', height: '48px', background: '#fef3c7', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                  <span style={{ color: '#d97706', fontSize: '20px' }}>⚙</span>
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#1e293b', marginBottom: '8px' }}>{product.title}</h3>
                <p style={{ color: '#64748b', fontSize: '14px', marginBottom: '16px', lineHeight: '1.5' }}>{product.description}</p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0' }}>
                  {product.features.map((feature, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', color: '#475569', marginBottom: '8px' }}>
                      <span style={{ color: '#d97706' }}>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button style={{ color: '#d97706', fontWeight: '600', fontSize: '14px', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                  Learn More →
                </button>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button style={{ background: '#1e293b', color: 'white', padding: '16px 32px', borderRadius: '8px', fontWeight: '600', border: 'none', cursor: 'pointer', fontSize: '16px' }}>
              View All Products
            </button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{ background: 'white', padding: '80px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 'bold', color: '#1e293b', marginBottom: '16px' }}>
              Why Choose ARTITECT MACHINERY?
            </h2>
            <p style={{ fontSize: '18px', color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
              We combine decades of engineering expertise with cutting-edge technology to deliver exceptional folding solutions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {[
              {
                title: 'Superior Quality',
                description: 'Every machine is built with premium materials and undergoes rigorous quality testing to ensure peak performance.'
              },
              {
                title: 'Precision Engineering',
                description: 'Advanced CNC manufacturing ensures micron-level accuracy in every fold, every time.'
              },
              {
                title: 'Global Support',
                description: 'Comprehensive after-sales service and technical support from our team of experts worldwide.'
              }
            ].map((item, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '32px' }}>
                <div style={{ width: '64px', height: '64px', background: '#fef3c7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <span style={{ color: '#d97706', fontSize: '24px' }}>★</span>
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#1e293b', marginBottom: '12px' }}>{item.title}</h3>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)', padding: '80px 20px' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(24px, 3vw, 36px)', fontWeight: 'bold', color: 'white', marginBottom: '20px' }}>
            Ready to Upgrade Your Folding Operations?
          </h2>
          <p style={{ fontSize: '18px', color: '#cbd5e1', marginBottom: '32px', lineHeight: '1.6' }}>
            Contact our team today for a personalized consultation and discover how ARTITECT MACHINERY can transform your production line.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{ background: '#d97706', color: 'white', padding: '16px 32px', borderRadius: '8px', fontWeight: '600', border: 'none', cursor: 'pointer', fontSize: '16px' }}>
              Get Free Quote
            </button>
            <button style={{ background: 'rgba(255,255,255,0.1)', color: 'white', padding: '16px 32px', borderRadius: '8px', fontWeight: '600', border: '1px solid rgba(255,255,255,0.2)', cursor: 'pointer', fontSize: '16px', backdropFilter: 'blur(4px)' }}>
              Call Us Now
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home