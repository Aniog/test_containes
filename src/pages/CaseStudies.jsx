import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Clock, Award, Star } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      category: 'Electronics',
      title: 'Smart Home Device Sourcing for European Retailer',
      client: 'TechHome Solutions (Germany)',
      challenge: 'The client needed to source 50,000 smart home devices from China but had concerns about supplier legitimacy and quality consistency.',
      solution: 'We conducted thorough factory verification, identified three qualified manufacturers, and performed pre-shipment inspections on all orders.',
      results: [
        '100% quality pass rate on shipments',
        '20% cost savings vs. previous supplier',
        'On-time delivery for 3 consecutive orders'
      ],
      image: 'Electronics manufacturing',
      testimonial: 'SSourcing China transformed our supply chain. Their factory verification gave us confidence, and their QC team caught issues before they became problems.'
    },
    {
      category: 'Textiles',
      title: 'Private Label Apparel for US Brand',
      client: 'UrbanWear Inc. (USA)',
      challenge: 'A US fashion brand wanted to launch a private label clothing line with organic cotton but lacked the expertise to navigate Chinese manufacturing.',
      solution: 'We sourced certified organic cotton suppliers, found a factory with GOTS certification, and managed the entire production process from fabric to finished garments.',
      results: [
        'Successfully launched 50 SKUs',
        'Achieved GOTS certification compliance',
        'Reduced lead time by 30%'
      ],
      image: 'Textile factory production',
      testimonial: 'They understood our quality requirements and found us a fantastic factory. The attention to detail was outstanding.'
    },
    {
      category: 'Industrial',
      title: 'Precision Machinery Parts for German Company',
      client: 'PrecisionTech GmbH (Germany)',
      challenge: 'A German engineering company needed a reliable supplier for precision machinery components with strict ISO  certification requirements.',
      solution: 'We identified and verified factories with ISO 9001 certification, coordinated sample development, and established quality control protocols.',
      results: [
        'Found certified supplier within 3 weeks',
        'Zero quality issues in first year',
        '40% cost reduction achieved'
      ],
      image: 'Industrial manufacturing',
      testimonial: 'Their understanding of ISO requirements and technical specifications saved us months of trial and error.'
    },
    {
      category: 'Home & Garden',
      title: 'Kitchenware Collection for UK Retailer',
      client: 'HomeEssence (UK)',
      challenge: 'A UK retailer needed to source a complete kitchenware collection from multiple factories while ensuring consistent quality and competitive pricing.',
      solution: 'We coordinated with 5 different factories, performed quality checks on each production run, and consolidated shipments for cost efficiency.',
      results: [
        'Successfully sourced 200+ SKUs',
        '35% savings through consolidation',
        'Perfect quality scores across all products'
      ],
      image: 'Kitchenware manufacturing',
      testimonial: 'Managing multiple suppliers would have been impossible without them. They made it seamless.'
    },
    {
      category: 'Packaging',
      title: 'Sustainable Packaging for French Brand',
      client: 'EcoPack France',
      challenge: 'A French cosmetics company needed eco-friendly packaging solutions from China while ensuring compliance with EU regulations.',
      solution: 'We sourced certified sustainable materials, verified factory environmental compliance, and coordinated with their design team for custom specifications.',
      results: [
        'Achieved EU compliance requirements',
        '100% recycled materials used',
        '25% cost savings vs. European suppliers'
      ],
      image: 'Packaging factory',
      testimonial: 'They navigated the regulatory requirements perfectly. Excellent communication throughout.'
    },
    {
      category: 'Toys',
      title: 'Educational Toys for Australian Distributor',
      client: 'KidsLearn Australia',
      challenge: 'An Australian company wanted to import educational toys with strict safety certifications for the Australian market.',
      solution: 'We verified factories with relevant safety certifications, arranged testing to Australian standards, and performed pre-shipment inspections.',
      results: [
        'All products passed Australian safety tests',
        'Successfully launched 30 products',
        'Zero recalls or safety issues'
      ],
      image: 'Toys manufacturing',
      testimonial: 'Their attention to safety regulations was crucial. We can now expand with confidence.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Clients Served', icon: <Users size={24} /> },
    { number: '2000+', label: 'Factories Verified', icon: <Award size={24} /> },
    { number: '98%', label: 'Client Satisfaction', icon: <Star size={24} /> },
    { number: '30+', label: 'Countries', icon: <TrendingUp size={24} /> }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        backgroundColor: '#0F172A', 
        padding: '160px 0 80px',
      }}>
        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <h1 style={{ color: '#FFFFFF', marginBottom: '24px', fontSize: '48px' }}>
              Case Studies
            </h1>
            <p style={{ color: '#94A3B8', fontSize: '20px', lineHeight: '1.6' }}>
              Real success stories from clients who trusted us with their China sourcing. 
              See how we've helped businesses worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ backgroundColor: '#1E3A5F', padding: '48px 0' }}>
        <div className="container">
          <div className="grid grid-4">
            {stats.map((stat, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ color: '#E67E22' }}>{stat.icon}</div>
                <div>
                  <div style={{ color: '#FFFFFF', fontSize: '28px', fontWeight: '700' }}>{stat.number}</div>
                  <div style={{ color: '#94A3B8', fontSize: '14px' }}>{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section">
        <div className="container">
          <div className="text-center mb-8">
            <h2 style={{ marginBottom: '16px' }}>Success Stories</h2>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '18px' }}>
              Explore how we've helped clients overcome sourcing challenges
            </p>
          </div>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {caseStudies.map((study, index) => (
              <div 
                key={index}
                style={{ 
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0',
                  borderRadius: '16px',
                  overflow: 'hidden'
                }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: '400px 1fr' }}>
                  {/* Image Side */}
                  <div style={{ 
                    backgroundColor: '#1E3A5F',
                    minHeight: '300px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <span style={{ color: '#64748B', fontSize: '14px' }}>{study.image}</span>
                    <div style={{ 
                      position: 'absolute',
                      top: '20px',
                      left: '20px',
                      backgroundColor: '#E67E22',
                      color: '#FFFFFF',
                      padding: '6px 14px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: '500'
                    }}>
                      {study.category}
                    </div>
                  </div>
                  
                  {/* Content Side */}
                  <div style={{ padding: '32px' }}>
                    <h3 style={{ marginBottom: '8px' }}>{study.title}</h3>
                    <p style={{ fontSize: '14px', color: '#64748B', marginBottom: '20px' }}>
                      <strong>Client:</strong> {study.client}
                    </p>
                    
                    <div style={{ marginBottom: '20px' }}>
                      <h4 style={{ fontSize: '14px', color: '#1E3A5F', marginBottom: '8px' }}>Challenge</h4>
                      <p style={{ fontSize: '14px', margin: 0 }}>{study.challenge}</p>
                    </div>
                    
                    <div style={{ marginBottom: '20px' }}>
                      <h4 style={{ fontSize: '14px', color: '#1E3A5F', marginBottom: '8px' }}>Solution</h4>
                      <p style={{ fontSize: '14px', margin: 0 }}>{study.solution}</p>
                    </div>
                    
                    <div style={{ marginBottom: '20px' }}>
                      <h4 style={{ fontSize: '14px', color: '#1E3A5F', marginBottom: '12px' }}>Results</h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {study.results.map((result, idx) => (
                          <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                            <span style={{ color: '#10B981', fontSize: '16px' }}>&#10003;</span>
                            <span style={{ fontSize: '14px' }}>{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div style={{ 
                      backgroundColor: '#F8FAFC',
                      padding: '16px',
                      borderRadius: '8px',
                      borderLeft: '3px solid #E67E22'
                    }}>
                      <p style={{ fontSize: '14px', fontStyle: 'italic', margin: 0, color: '#64748B' }}>
                        "{study.testimonial}"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: '#0F172A' }}>
        <div className="container text-center">
          <h2 style={{ color: '#FFFFFF', marginBottom: '16px' }}>Ready to Write Your Success Story?</h2>
          <p style={{ color: '#94A3B8', fontSize: '18px', marginBottom: '32px', maxWidth: '600px', margin: '0 auto 32px' }}>
            Let us help you find the right suppliers and make your China sourcing a success.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ padding: '16px 32px', fontSize: '18px' }}>
            Get Started <ArrowRight size={20} style={{ marginLeft: '8px' }} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;