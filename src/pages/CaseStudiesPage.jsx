import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Award, Clock, Globe } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      client: 'European Retail Chain',
      industry: 'Retail',
      location: 'Germany',
      challenge: 'Needed to source 50,000 home textile products from China with strict quality requirements and tight 3-month timeline.',
      solution: 'We verified 15 suppliers, conducted comprehensive factory audits, performed pre-shipment inspections at three stages, and coordinated full container shipping with customs clearance.',
      result: 'Delivered on time with 99.2% quality pass rate. Saved 18% compared to their previous supplier through effective negotiation.',
      category: 'Textiles',
      metrics: [
        { value: '50,000', label: 'Units Ordered' },
        { value: '99.2%', label: 'Quality Pass Rate' },
        { value: '18%', label: 'Cost Savings' },
      ],
    },
    {
      client: 'US Tech Startup',
      industry: 'Technology',
      location: 'United States',
      challenge: 'First-time sourcing from China for electronic components. Major concerns about quality consistency and IP protection.',
      solution: 'Implemented comprehensive supplier verification, on-site factory audits, in-line inspections at 30% and 70% production stages, and secure packaging with IP safeguards.',
      result: 'Successfully launched product with zero quality issues. Established long-term supplier relationship with 40% lower costs than US alternatives.',
      category: 'Electronics',
      metrics: [
        { value: '0', label: 'Quality Issues' },
        { value: '40%', label: 'Cost Reduction' },
        { value: '3', label: 'Year Partnership' },
      ],
    },
    {
      client: 'Australian Distributor',
      industry: 'Distribution',
      location: 'Australia',
      challenge: 'Sourcing furniture products with custom specifications. Needed quality assurance and reliable shipping to multiple warehouse locations.',
      solution: 'Matched with verified manufacturer, conducted production monitoring with weekly updates, performed pre-shipment inspection, and arranged FCL shipping with customs clearance to three destinations.',
      result: 'Received container with 98.5% acceptance rate. Established quarterly reorder system with 15% volume growth year-over-year.',
      category: 'Furniture',
      metrics: [
        { value: '98.5%', label: 'Acceptance Rate' },
        { value: '15%', label: 'YoY Growth' },
        { value: '4', label: 'Quarterly Orders' },
      ],
    },
    {
      client: 'UK Fashion Brand',
      industry: 'Fashion',
      location: 'United Kingdom',
      challenge: 'Sourcing sustainable fashion accessories with specific material requirements and ethical manufacturing standards.',
      solution: 'Identified suppliers with relevant certifications, conducted ethical factory audits, implemented traceability system, and coordinated sustainable packaging solutions.',
      result: 'Launched successful sustainable product line. Achieved B-Corp certification for supply chain transparency.',
      category: 'Fashion',
      metrics: [
        { value: '100%', label: 'Traceable' },
        { value: 'B-Corp', label: 'Certified' },
        { value: '12', label: 'SKU Line' },
      ],
    },
    {
      client: 'Canadian Medical Supplier',
      industry: 'Healthcare',
      location: 'Canada',
      challenge: 'Sourcing medical-grade equipment with strict regulatory compliance and documentation requirements.',
      solution: 'Verified suppliers with medical device certifications, coordinated lab testing, implemented full documentation trail, and arranged temperature-controlled shipping.',
      result: 'All products passed Health Canada certification. Zero regulatory issues in 2 years of supply.',
      category: 'Healthcare',
      metrics: [
        { value: '100%', label: 'Certified' },
        { value: '0', label: 'Regulatory Issues' },
        { value: '24mo', label: 'Supply Run' },
      ],
    },
    {
      client: 'Japanese Trading Company',
      industry: 'Trading',
      location: 'Japan',
      challenge: 'Sourcing machinery parts with high precision requirements and detailed technical specifications.',
      solution: 'Matched with specialized manufacturers, conducted pre-production sample approval, implemented in-process quality control, and arranged air freight for urgent orders.',
      result: 'Achieved 100% specification compliance. Reduced lead time by 35% compared to previous sourcing.',
      category: 'Machinery',
      metrics: [
        { value: '100%', label: 'Spec Compliance' },
        { value: '35%', label: 'Faster Delivery' },
        { value: '500+', label: 'Parts Sourced' },
      ],
    },
  ];

  const industries = ['All', 'Retail', 'Technology', 'Distribution', 'Fashion', 'Healthcare', 'Trading'];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, #1a365d 0%, #2c5282 100%)',
        padding: '160px 0 80px',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h1 style={{ color: 'white', fontSize: '3rem', marginBottom: '16px' }}>
            Case Studies
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
            Real results from our sourcing partnerships. See how we've helped businesses worldwide.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section" style={{ backgroundColor: 'var(--background)' }}>
        <div className="container">
          <div className="grid grid-2" style={{ gap: '40px' }}>
            {caseStudies.map((study, index) => (
              <div key={index} className="card" style={{ textAlign: 'left' }}>
                <div style={{ 
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '20px',
                }}>
                  <div>
                    <div style={{ 
                      display: 'inline-block',
                      padding: '4px 12px',
                      backgroundColor: 'var(--primary)',
                      color: 'white',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: '600',
                      marginBottom: '12px',
                      textTransform: 'uppercase',
                    }}>
                      {study.category}
                    </div>
                    <h3 style={{ marginBottom: '8px', fontSize: '1.5rem' }}>{study.client}</h3>
                    <div style={{ display: 'flex', gap: '16px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Globe size={14} /> {study.location}
                      </span>
                      <span>{study.industry}</span>
                    </div>
                  </div>
                </div>
                
                <div style={{ marginBottom: '24px' }}>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '12px' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Challenge:</strong> {study.challenge}
                  </p>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '12px' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Solution:</strong> {study.solution}
                  </p>
                  <p style={{ color: 'var(--success)', fontSize: '0.95rem', fontWeight: '500' }}>
                    <strong style={{ color: 'var(--text-primary)' }}>Result:</strong> {study.result}
                  </p>
                </div>

                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(3, 1fr)', 
                  gap: '16px',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--border)',
                }}>
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} style={{ textAlign: 'center' }}>
                      <div style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '4px' }}>
                        {metric.value}
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section" style={{ backgroundColor: 'white' }}>
        <div className="container">
          <div className="section-title">
            <h2>Our Track Record</h2>
            <p>Numbers that speak for themselves.</p>
          </div>
          <div className="grid grid-4" style={{ gap: '32px' }}>
            {[
              { value: '12+', label: 'Years Experience', icon: Clock },
              { value: '2,500+', label: 'Suppliers Verified', icon: Users },
              { value: '15,000+', label: 'Orders Completed', icon: TrendingUp },
              { value: '98%', label: 'Client Satisfaction', icon: Award },
            ].map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <stat.icon size={40} style={{ color: 'var(--primary)', marginBottom: '16px' }} />
                <div style={{ fontSize: '2.5rem', fontWeight: '700', color: 'var(--primary)', marginBottom: '8px' }}>
                  {stat.value}
                </div>
                <div style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 100%)',
        padding: '80px 0',
      }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ color: 'white', marginBottom: '16px' }}>Ready to Be Our Next Success Story?</h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '1.1rem', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Let's discuss how we can help you achieve similar results.
          </p>
          <Link to="/contact" className="btn btn-accent" style={{ padding: '16px 40px', fontSize: '1.1rem' }}>
            Get Started
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;