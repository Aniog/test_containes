import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, TrendingUp, Users, Award, Globe,
  CheckCircle, ArrowUpRight
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      company: 'TechStart Inc.',
      industry: 'Electronics',
      location: 'United States',
      challenge: 'TechStart needed to source smart home devices from China but had no prior sourcing experience. They were concerned about supplier reliability and quality consistency.',
      solution: 'We conducted thorough supplier verification, identified three qualified manufacturers, and facilitated a competitive bidding process. We also implemented a rigorous quality control protocol.',
      results: [
        '40% cost reduction compared to previous supplier',
        '99.2% quality pass rate over 12 months',
        'On-time delivery rate of 97%',
        'Established long-term partnership with 2 factories',
      ],
      testimonial: 'SSourcing China transformed our supply chain. We went from worried about quality to having reliable, cost-effective production.',
      person: 'John Miller',
      role: 'CEO, TechStart Inc.',
      metric: '40%',
      metricLabel: 'Cost Reduction',
    },
    {
      company: 'Fashion Forward',
      industry: 'Apparel',
      location: 'United Kingdom',
      challenge: 'A sustainable fashion brand needed to establish an ethical supply chain for their new organic cotton clothing line. They required factories with proper certifications.',
      solution: 'We identified and verified factories with GOTS and OEKO-TEX certifications. We also conducted social compliance audits to ensure ethical manufacturing practices.',
      results: [
        'Successfully launched 3 new product lines',
        '100% compliance with ethical sourcing standards',
        'Reduced sourcing time by 6 weeks',
        'Achieved retail margin improvement of 25%',
      ],
      testimonial: 'Their verification process gave us confidence in our supply chain. We now have complete transparency about where and how our products are made.',
      person: 'Sarah Chen',
      role: 'Founder, Fashion Forward',
      metric: '3',
      metricLabel: 'New Product Lines',
    },
    {
      company: 'AutoParts Global',
      industry: 'Automotive',
      location: 'Germany',
      challenge: 'An automotive parts distributor needed high-quality brake components with strict tolerance specifications. Previous suppliers had quality consistency issues.',
      solution: 'We implemented a multi-stage quality inspection process and worked with factories to improve their quality management systems. Regular audits ensured ongoing compliance.',
      results: [
        '99.5% quality pass rate achieved',
        'Defect rate reduced from 3% to 0.5%',
        'Zero quality-related customer complaints',
        'Expanded product range by 40%',
      ],
      testimonial: "The quality improvements were dramatic. SSourcing China's approach to quality control is thorough and professional.",
      person: 'Hans Mueller',
      role: 'Procurement Director, AutoParts Global',
      metric: '99.5%',
      metricLabel: 'Quality Rate',
    },
    {
      company: 'HomeEssentials Co.',
      industry: 'Consumer Goods',
      location: 'Canada',
      challenge: 'A home goods retailer wanted to expand their product catalog with kitchenware and home decor items from China but lacked local representation.',
      solution: 'We provided end-to-end sourcing services including supplier identification, quality inspection, and logistics coordination. Regular factory visits ensured quality consistency.',
      results: [
        'Successfully sourced 150+ SKUs',
        'Average cost savings of 35%',
        'Reduced inventory turnover by 45 days',
        'Achieved 98% on-time delivery',
      ],
      testimonial: 'They handled everything - from finding factories to shipping. We simply received the products at our warehouse.',
      person: 'Michael Brown',
      role: 'VP of Sourcing, HomeEssentials Co.',
      metric: '150+',
      metricLabel: 'SKUs Sourced',
    },
    {
      company: 'MediTech Solutions',
      industry: 'Health & Beauty',
      location: 'Australia',
      challenge: 'A medical device company needed to source precision components with strict regulatory compliance. Quality and documentation were critical.',
      solution: 'We identified ISO 13485 certified manufacturers and implemented comprehensive quality documentation. We also coordinated with their regulatory team for compliance.',
      results: [
        'All products met regulatory standards',
        'Achieved TGA registration approval',
        'Zero recalls or compliance issues',
        'Production efficiency improved by 30%',
      ],
      testimonial: 'Their understanding of regulatory requirements saved us months of delays. Highly professional service.',
      person: 'Dr. Lisa Wang',
      role: 'CEO, MediTech Solutions',
      metric: '100%',
      metricLabel: 'Compliance Rate',
    },
    {
      company: 'PackRight Industries',
      industry: 'Packaging',
      location: 'Netherlands',
      challenge: 'A packaging company needed sustainable packaging solutions from China. They required factories capable of producing eco-friendly materials at scale.',
      solution: 'We sourced factories specializing in sustainable packaging and facilitated technology transfer for new eco-friendly materials. We also coordinated sample development.',
      results: [
        'Launched 5 new sustainable product lines',
        'Carbon footprint reduced by 40%',
        'Achieved competitive pricing structure',
        'Established reliable supply chain',
      ],
      testimonial: 'They found us factories we never would have found on our own. The quality and service have been exceptional.',
      person: 'Peter de Vries',
      role: 'Managing Director, PackRight Industries',
      metric: '5',
      metricLabel: 'New Product Lines',
    },
  ];

  const stats = [
    { value: '500+', label: 'Clients Served', icon: Users },
    { value: '98%', label: 'Client Satisfaction', icon: Award },
    { value: '97%', label: 'On-Time Delivery', icon: TrendingUp },
    { value: '15+', label: 'Years Experience', icon: Globe },
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
              Success Stories
            </span>
            <h1 style={{ 
              fontSize: '48px', 
              fontWeight: '800', 
              color: 'white', 
              marginBottom: '20px',
              fontFamily: 'var(--font-heading)'
            }}>
              Case Studies
            </h1>
            <p style={{ 
              fontSize: '20px', 
              color: 'rgba(255,255,255,0.85)', 
              lineHeight: '1.7',
              marginBottom: '32px'
            }}>
              Real results from our partnership with global buyers across various industries.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ 
        padding: '48px 0', 
        backgroundColor: 'white',
        borderBottom: '1px solid var(--color-border)'
      }}>
        <div className="container">
          <div className="grid-4" style={{ gap: '32px' }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ textAlign: 'center' }}>
                <stat.icon size={28} color="#E67E22" style={{ marginBottom: '12px' }} />
                <div style={{ fontSize: '36px', fontWeight: '700', color: 'var(--color-primary)' }}>
                  {stat.value}
                </div>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="section">
        <div className="container">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className="card"
              style={{ 
                padding: '0',
                marginBottom: '48px',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
                {/* Left Side - Content */}
                <div style={{ padding: '48px' }}>
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '12px',
                    marginBottom: '16px'
                  }}>
                    <span style={{
                      backgroundColor: 'rgba(30, 58, 95, 0.1)',
                      color: 'var(--color-primary)',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '12px',
                      fontWeight: '600',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      {study.industry}
                    </span>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '14px' }}>
                      {study.location}
                    </span>
                  </div>
                  
                  <h2 style={{ fontSize: '28px', marginBottom: '20px', color: 'var(--color-text-primary)' }}>
                    {study.company}
                  </h2>

                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ 
                      fontSize: '14px', 
                      color: 'var(--color-text-secondary)', 
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Challenge
                    </h4>
                    <p style={{ color: 'var(--color-text-primary)', lineHeight: '1.7' }}>
                      {study.challenge}
                    </p>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <h4 style={{ 
                      fontSize: '14px', 
                      color: 'var(--color-text-secondary)', 
                      marginBottom: '8px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Solution
                    </h4>
                    <p style={{ color: 'var(--color-text-primary)', lineHeight: '1.7' }}>
                      {study.solution}
                    </p>
                  </div>

                  <div>
                    <h4 style={{ 
                      fontSize: '14px', 
                      color: 'var(--color-text-secondary)', 
                      marginBottom: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Results
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {study.results.map((result, idx) => (
                        <li key={idx} style={{ 
                          display: 'flex', 
                          alignItems: 'flex-start', 
                          gap: '12px',
                          marginBottom: '10px',
                          color: 'var(--color-text-primary)'
                        }}>
                          <CheckCircle size={18} color="#27AE60" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span style={{ lineHeight: '1.5' }}>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Right Side - Metrics */}
                <div style={{ 
                  backgroundColor: 'var(--color-primary)',
                  padding: '48px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
                }}>
                  <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <div style={{ 
                      fontSize: '72px', 
                      fontWeight: '800', 
                      color: '#FFB347',
                      lineHeight: 1
                    }}>
                      {study.metric}
                    </div>
                    <div style={{ 
                      color: 'rgba(255,255,255,0.8)', 
                      fontSize: '16px',
                      marginTop: '8px'
                    }}>
                      {study.metricLabel}
                    </div>
                  </div>

                  <div style={{ 
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '12px',
                    padding: '24px',
                    marginBottom: '24px'
                  }}>
                    <p style={{ 
                      color: 'rgba(255,255,255,0.9)', 
                      fontStyle: 'italic',
                      lineHeight: '1.7',
                      fontSize: '15px'
                    }}>
                      "{study.testimonial}"
                    </p>
                  </div>

                  <div>
                    <div style={{ color: 'white', fontWeight: '600' }}>
                      {study.person}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>
                      {study.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ backgroundColor: 'var(--color-primary)' }}>
        <div className="container text-center">
          <h2 style={{ color: 'white', marginBottom: '16px' }}>
            Ready to Achieve Similar Results?
          </h2>
          <p style={{ 
            color: 'rgba(255,255,255,0.85)', 
            fontSize: '18px',
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}>
            Let's discuss how we can help optimize your China sourcing.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ 
            padding: '18px 36px', 
            fontSize: '18px'
          }}>
            Get a Free Consultation
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;