import { Link } from 'react-router-dom';
import { 
  Search, Factory, ClipboardCheck, Truck, 
  FileText, CreditCard, Package, TrendingUp,
  CheckCircle, ArrowRight
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Search,
      title: 'Supplier Verification',
      description: 'We conduct thorough verification of factories to ensure they are legitimate, have the required production capacity, and meet quality standards.',
      features: [
        'In-person factory visits',
        'Business license verification',
        'Production capacity assessment',
        'Quality management system review',
        'Certification verification (ISO, CE, FCC, etc.)',
        'Financial stability check'
      ]
    },
    {
      icon: Factory,
      title: 'Factory Sourcing',
      description: 'We find the right manufacturers based on your product specifications, quality requirements, budget, and production timeline.',
      features: [
        'Custom supplier matching',
        'Price negotiation',
        'MOQ flexibility',
        'Sample coordination',
        'Contract manufacturing',
        'OEM/ODM services'
      ]
    },
    {
      icon: ClipboardCheck,
      title: 'Quality Inspection',
      description: 'Our quality control services ensure your products meet specifications before shipment, reducing the risk of defects and returns.',
      features: [
        'Pre-shipment inspection (PSI)',
        'During production inspection (DPI)',
        'Initial production inspection (IPI)',
        'Container loading supervision',
        'Defect classification & reporting',
        'AQL-based sampling'
      ]
    },
    {
      icon: Truck,
      title: 'Shipping & Logistics',
      description: 'We coordinate end-to-end logistics from factory to your warehouse, handling documentation and customs clearance.',
      features: [
        'Freight forwarding',
        'Customs clearance',
        'Documentation handling',
        'Multi-modal shipping (air, sea, land)',
        'Incoterms guidance',
        'Cargo insurance'
      ]
    },
    {
      icon: FileText,
      title: 'Product Development',
      description: 'We assist with product development, from design to production, ensuring manufacturability and cost efficiency.',
      features: [
        'Design for manufacturing',
        'Prototype development',
        'Material sourcing',
        'Cost optimization',
        'Technical specifications',
        'Patent considerations'
      ]
    },
    {
      icon: CreditCard,
      title: 'Payment Protection',
      description: 'We provide secure payment solutions that protect both buyers and sellers during transactions.',
      features: [
        'Escrow services',
        'Payment milestone structure',
        'Currency exchange',
        'Trade finance options',
        'Dispute resolution',
        'Refund protection'
      ]
    }
  ];

  const processSteps = [
    { title: 'Submit Requirements', description: 'Share your product specs, quantity, and budget' },
    { title: 'Get Matched', description: 'We identify 3-5 suitable factories' },
    { title: 'Verify Factory', description: 'We conduct on-site verification' },
    { title: 'Negotiate Terms', description: 'Price, quality, and timeline agreed' },
    { title: 'Production & QC', description: 'Regular inspections during manufacturing' },
    { title: 'Ship & Deliver', description: 'Products delivered to your location' }
  ];

  return (
    <main>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>
            Comprehensive China sourcing solutions designed to minimize risk, 
            ensure quality, and optimize costs for your business.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section" style={{ background: '#f8f9fa' }}>
        <div className="container">
          {services.map((service, index) => (
            <div key={index} style={{
              background: 'white',
              borderRadius: '16px',
              padding: '48px',
              marginBottom: '32px',
              border: '1px solid #e5e7eb'
            }}>
              <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'linear-gradient(135deg, #1e3a5f 0%, #2d4a6f 100%)',
                  borderRadius: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  flexShrink: 0
                }}>
                  <service.icon size={36} />
                </div>
                <div style={{ flex: 1 }}>
                  <h2 style={{ fontSize: '1.75rem', color: '#1e3a5f', marginBottom: '12px' }}>
                    {service.title}
                  </h2>
                  <p style={{ fontSize: '1.1rem', color: '#666', marginBottom: '24px', lineHeight: 1.7 }}>
                    {service.description}
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px' }}>
                    {service.features.map((feature, fIndex) => (
                      <div key={fIndex} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <CheckCircle size={18} color="#059669" />
                        <span style={{ color: '#444', fontSize: '0.95rem' }}>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Process Overview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <p className="section-subtitle">
            A systematic approach to ensure successful sourcing at every step
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(6, 1fr)', 
            gap: '24px',
            marginTop: '48px'
          }}>
            {processSteps.map((step, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'linear-gradient(135deg, #c9a227 0%, #b8921f 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '1.25rem',
                  margin: '0 auto 16px'
                }}>
                  {index + 1}
                </div>
                <h3 style={{ fontSize: '1rem', color: '#1e3a5f', marginBottom: '8px' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.875rem', color: '#666' }}>
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="section" style={{ background: '#1e3a5f', color: 'white' }}>
        <div className="container">
          <h2 className="section-title" style={{ color: 'white' }}>
            Why Our Services Matter
          </h2>
          <p className="section-subtitle" style={{ color: 'rgba(255,255,255,0.8)' }}>
            The value we bring to your China sourcing operations
          </p>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)', 
            gap: '32px',
            marginTop: '48px'
          }}>
            {[
              { icon: TrendingUp, title: 'Cost Reduction', desc: 'Average 20-30% savings on procurement costs through direct factory relationships and efficient processes' },
              { icon: Package, title: 'Risk Mitigation', desc: 'Reduce fraud risk by 95% with our thorough verification and quality control processes' },
              { icon: CheckCircle, title: 'Quality Assurance', desc: '99%+ defect-free shipment rate through systematic quality inspections at critical stages' }
            ].map((item, index) => (
              <div key={index} style={{
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '16px',
                padding: '32px',
                textAlign: 'center',
                border: '1px solid rgba(255,255,255,0.2)'
              }}>
                <item.icon size={48} style={{ color: '#c9a227', marginBottom: '16px' }} />
                <h3 style={{ fontSize: '1.25rem', marginBottom: '12px', color: 'white' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">Ready to Get Started?</h2>
          <p className="section-subtitle">
            Contact us today to discuss your sourcing needs
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ marginTop: '24px' }}>
            Request a Quote <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Services;