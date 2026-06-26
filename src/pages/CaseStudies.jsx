import { Link } from 'react-router-dom';
import { Factory, ArrowRight, TrendingUp, Clock, Shield, Globe } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      tag: 'Electronics',
      title: 'US Retailer Sourcing Smart Home Devices',
      challenge: 'A US-based retailer needed to source smart home products (smart plugs, sensors, hubs) for their retail chain. They had previously been working with a distributor but wanted to reduce costs by sourcing directly.',
      solution: 'We identified and verified 5 factories in Shenzhen and Dongguan specializing in smart home electronics. Conducted thorough factory audits, negotiated pricing, and established quality control protocols.',
      results: {
        savings: '23%',
        timeline: '4 months',
        factories: '5 verified',
        quality: '99.2% pass rate'
      },
      description: 'Sourced and verified 5 factories for smart home products. Reduced procurement costs by 23% while improving quality consistency.'
    },
    {
      tag: 'Textiles',
      title: 'European Brand Fashion Manufacturing',
      challenge: 'A European fashion brand wanted to establish a sustainable supply chain for their new eco-friendly clothing line. They needed factories with organic certification and ethical labor practices.',
      solution: 'We mapped the sustainable textile industry in China, identifying factories with GOTS and OEKO-TEX certifications. Arranged virtual and in-person factory visits.',
      results: {
        savings: '35%',
        timeline: '6 months',
        factories: '3 verified',
        quality: '100% compliant'
      },
      description: 'Established reliable supply chain for sustainable fashion line. Working with 3 certified factories producing 50,000 units annually.'
    },
    {
      tag: 'Machinery',
      title: 'Industrial Equipment Components',
      challenge: 'A US industrial equipment manufacturer needed precision-machined components. The previous supplier had quality issues causing production delays and customer complaints.',
      solution: 'We sourced specialized CNC machining factories with ISO 9001 certification. Implemented strict quality control with during-production and pre-shipment inspections.',
      results: {
        savings: '18%',
        timeline: '3 months',
        factories: '2 verified',
        quality: '99.5% pass rate'
      },
      description: 'Found specialized manufacturers for precision components. Quality pass rate improved to 99.5%, eliminating production delays.'
    },
    {
      tag: 'Consumer Goods',
      title: 'Australian Startup Kitchenware Line',
      challenge: 'An Australian startup wanted to launch a premium kitchenware brand with unique designs. They needed help with product development, tooling, and manufacturing.',
      solution: 'We assisted with design-for-manufacturing, sourced suitable factories for different product categories (ceramics, stainless steel, bamboo), and managed the entire production process.',
      results: {
        savings: '40%',
        timeline: '8 months',
        factories: '4 verified',
        quality: '98.8% pass rate'
      },
      description: 'Launched complete kitchenware line with 50+ SKUs. From design to delivery, with 40% cost savings vs. local manufacturing.'
    },
    {
      tag: 'Automotive',
      title: 'Auto Parts Replacement Market',
      challenge: 'A Canadian auto parts distributor needed reliable suppliers for replacement parts. Quality and timing were critical as they supplied repair shops.',
      solution: 'We built a network of factories specializing in automotive components. Implemented rigorous quality control with detailed inspection protocols.',
      results: {
        savings: '28%',
        timeline: '5 months',
        factories: '6 verified',
        quality: '99.1% pass rate'
      },
      description: 'Established supply chain for 200+ auto part SKUs. Reduced costs by 28% while meeting strict quality requirements.'
    },
    {
      tag: 'Medical',
      title: 'Medical Device Components',
      challenge: 'A German medical device company needed precision components for diagnostic equipment. Regulatory compliance was essential.',
      solution: 'We identified factories with ISO 13485 certification and experience in medical device manufacturing. Conducted extensive quality audits.',
      results: {
        savings: '22%',
        timeline: '7 months',
        factories: '2 verified',
        quality: '100% compliant'
      },
      description: 'Sourced certified manufacturers for medical-grade components. All products meet EU MDR requirements.'
    }
  ];

  const stats = [
    { value: '500+', label: 'Verified Suppliers', icon: Factory },
    { value: '30+', label: 'Countries Served', icon: Globe },
    { value: '25%', label: 'Avg. Cost Savings', icon: TrendingUp },
    { value: '99%', label: 'Quality Pass Rate', icon: Shield }
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Case Studies</h1>
          <p>
            Real results from our clients around the world. See how we've helped 
            businesses transform their China sourcing operations.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section" style={{ background: '#1e3a5f', color: 'white' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(4, 1fr)', 
            gap: '32px'
          }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <stat.icon size={40} style={{ color: '#c9a227', marginBottom: '16px' }} />
                <div style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '8px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section">
        <div className="container">
          {caseStudies.map((study, index) => (
            <div key={index} style={{
              background: 'white',
              border: '1px solid #e5e7eb',
              borderRadius: '16px',
              marginBottom: '32px',
              overflow: 'hidden'
            }}>
              <div style={{
                height: '200px',
                background: 'linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <Factory size={64} />
              </div>
              <div style={{ padding: '40px' }}>
                <span style={{
                  display: 'inline-block',
                  padding: '6px 16px',
                  background: 'rgba(30, 58, 95, 0.1)',
                  color: '#1e3a5f',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  borderRadius: '4px',
                  marginBottom: '16px'
                }}>
                  {study.tag}
                </span>
                <h2 style={{ fontSize: '1.75rem', color: '#1e3a5f', marginBottom: '16px' }}>
                  {study.title}
                </h2>
                <p style={{ fontSize: '1rem', color: '#666', marginBottom: '16px', lineHeight: 1.7 }}>
                  <strong style={{ color: '#333' }}>Challenge:</strong> {study.challenge}
                </p>
                <p style={{ fontSize: '1rem', color: '#666', marginBottom: '24px', lineHeight: 1.7 }}>
                  <strong style={{ color: '#333' }}>Solution:</strong> {study.solution}
                </p>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(4, 1fr)', 
                  gap: '24px',
                  padding: '24px',
                  background: '#f8f9fa',
                  borderRadius: '12px'
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#c9a227' }}>
                      {study.results.savings}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#666' }}>Cost Savings</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#c9a227' }}>
                      {study.results.timeline}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#666' }}>Timeline</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#c9a227' }}>
                      {study.results.factories}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#666' }}>Factories</div>
                  </div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.75rem', fontWeight: 'bold', color: '#c9a227' }}>
                      {study.results.quality}
                    </div>
                    <div style={{ fontSize: '0.85rem', color: '#666' }}>Quality</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Ready to Achieve Similar Results?</h2>
          <p className="section-subtitle">
            Let's discuss how we can help optimize your China sourcing
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: '24px' }}>
            Get a Free Consultation <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default CaseStudies;