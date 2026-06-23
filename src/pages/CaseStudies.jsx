import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { 
  ArrowRight, 
  TrendingUp, 
  Users, 
  Clock, 
  Shield,
  Star,
  CheckCircle,
  Globe,
  Package,
  Factory,
  Truck,
  Target
} from 'lucide-react'
import './CaseStudies.css'

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      category: 'Electronics',
      title: 'Smart Home Device Sourcing for European Retailer',
      client: 'TechGear Solutions',
      location: 'United Kingdom',
      challenge: 'A UK-based electronics retailer needed to expand their smart home product line with competitive pricing while maintaining strict quality standards. They had previously struggled with unreliable suppliers and inconsistent product quality.',
      approach: 'We conducted a comprehensive supplier search, focusing on manufacturers with experience in smart home electronics and relevant certifications. After verifying 12 potential suppliers, we shortlisted 4 that met their quality and pricing criteria. We performed detailed factory audits, negotiated favorable pricing, and established a quality control protocol.',
      result: 'We identified a verified manufacturer in Shenzhen that offered 18% lower pricing than their previous supplier. Through our QC process, we maintained a 98% first-pass quality rate. The successful partnership has grown from an initial $180,000 order to over $1.2M in annual volume.',
      metrics: [
        { label: 'Cost Savings', value: '18%' },
        { label: 'Quality Pass Rate', value: '98%' },
        { label: 'Order Growth', value: '6x' },
      ],
      image: 'electronics',
    },
    {
      id: 2,
      category: 'Textiles',
      title: 'Private Label Garments for US Fashion Brand',
      client: 'StyleHouse Apparel',
      location: 'United States',
      challenge: 'A US fashion brand wanted to launch a private label clothing line with consistent quality and ethical manufacturing. They needed a partner who could handle small MOQs initially while scaling with their business.',
      approach: 'We sourced factories specializing in sustainable textiles with GOTS and OEKO-TEX certifications. We established a comprehensive quality system including material inspection, during-production checks, and pre-shipment verification. Regular factory visits ensured compliance with ethical labor standards.',
      result: 'We found a certified factory in Zhejiang province that could accommodate their starting MOQ of 500 pieces per style. The factory maintained a 99% quality pass rate. The brand has since expanded to 15 product lines with monthly orders of 10,000+ units.',
      metrics: [
        { label: 'Quality Pass Rate', value: '99%' },
        { label: 'MOQ Flexibility', value: '500 pcs' },
        { label: 'Product Lines', value: '15' },
      ],
      image: 'textiles',
    },
    {
      id: 3,
      category: 'Machinery',
      title: 'Industrial Equipment Sourcing for Manufacturing Company',
      client: 'IndustrialTech Mexico',
      location: 'Mexico',
      challenge: 'A Mexican manufacturing company needed specialized industrial equipment from China. The technical specifications were complex, and they required comprehensive after-sales support and spare parts availability.',
      approach: 'We identified manufacturers with proven experience in industrial machinery and technical exports. We coordinated detailed technical discussions, arranged for custom modifications, and negotiated comprehensive warranty terms. We also established a spare parts inventory system.',
      result: 'We delivered $450,000 worth of custom-configured machinery with full documentation in Spanish. The equipment exceeded performance expectations, and our ongoing spare parts service has prevented any production downtime. The client has since placed three additional orders.',
      metrics: [
        { label: 'Order Value', value: '$450K' },
        { label: 'On-Time Delivery', value: '100%' },
        { label: 'Client Reorders', value: '3' },
      ],
      image: 'machinery',
    },
    {
      id: 4,
      category: 'Packaging',
      title: 'Sustainable Packaging for Australian Health Brand',
      client: 'NaturalLife Supplements',
      location: 'Australia',
      challenge: 'An Australian health supplement company needed eco-friendly packaging solutions that would protect their products during international shipping while aligning with their sustainability values.',
      approach: 'We researched and sourced manufacturers specializing in sustainable packaging materials, including recycled cardboard, soy-based inks, and compostable plastics. We coordinated sample development to ensure packaging met both aesthetic and functional requirements.',
      result: 'We found a manufacturer producing 100% recycled packaging with water-based inks. The packaging passed all shipping durability tests and achieved the desired compostability certifications. The client reported a 40% reduction in packaging costs compared to their previous supplier.',
      metrics: [
        { label: 'Cost Reduction', value: '40%' },
        { label: 'Recycled Content', value: '100%' },
        { label: 'Certifications', value: '4' },
      ],
      image: 'packaging',
    },
    {
      id: 5,
      category: 'Automotive',
      title: 'Auto Parts Sourcing for German Distributor',
      client: 'AutoParts Germany',
      location: 'Germany',
      challenge: 'A German automotive parts distributor needed reliable suppliers for brake components meeting strict EU quality and safety standards. Previous suppliers had quality consistency issues.',
      approach: 'We focused on manufacturers with IATF 16949 certification and experience supplying to major automotive brands. We implemented a rigorous quality control program including incoming material inspection, in-process monitoring, and final testing with detailed documentation.',
      result: 'We established partnerships with two certified manufacturers. Our QC protocols identified and resolved quality issues before shipment, reducing customer returns by 95%. The client has grown from a single product line to 8 different brake component categories.',
      metrics: [
        { label: 'Return Reduction', value: '95%' },
        { label: 'Product Categories', value: '8' },
        { label: 'Certification', value: 'IATF 16949' },
      ],
      image: 'automotive',
    },
    {
      id: 6,
      category: 'Home Goods',
      title: 'Kitchenware Collection for US Retail Chain',
      client: 'HomeEssentials Inc.',
      location: 'United States',
      challenge: 'A US retail chain needed a complete kitchenware collection developed from scratch, including product design, material selection, and packaging design. They wanted to launch within 6 months.',
      approach: 'We coordinated with design teams and manufacturers to develop products from concept to production. We managed the entire development process including prototyping, material testing, certification (FDA, LFGB), and packaging design. Our team coordinated multiple factories for different product categories.',
      result: 'We successfully launched 45 SKUs within the 5-month timeline. The initial order of $320,000 sold out within 3 months, leading to a $1.5M annual supply agreement. The products received positive customer reviews for quality and design.',
      metrics: [
        { label: 'SKUs Launched', value: '45' },
        { label: 'Timeline', value: '5 months' },
        { label: 'Annual Revenue', value: '$1.5M' },
      ],
      image: 'home',
    },
  ]

  const stats = [
    { icon: Package, value: '500+', label: 'Projects Completed' },
    { icon: Globe, value: '30+', label: 'Countries Served' },
    { icon: Factory, value: '2,000+', label: 'Verified Suppliers' },
    { icon: TrendingUp, value: '98%', label: 'Client Satisfaction' },
  ]

  const processSteps = [
    { number: '1', title: 'Understanding Your Needs', description: 'We discuss your product requirements, quality standards, and business objectives.' },
    { number: '2', title: 'Supplier Identification', description: 'We research and evaluate potential manufacturers matching your criteria.' },
    { number: '3', title: 'Factory Verification', description: 'We visit factories, verify credentials, and assess capabilities.' },
    { number: '4', title: 'Quality Implementation', description: 'We establish QC protocols and monitor production quality.' },
    { number: '5', title: 'Shipping & Delivery', description: 'We coordinate logistics and ensure smooth delivery.' },
  ]

  return (
    <>
      <Helmet>
        <title>Case Studies | Success Stories | SSourcing China</title>
        <meta name="description" content="Explore our success stories and learn how we've helped global businesses source quality products from China." />
      </Helmet>

      <section className="cases-hero">
        <div className="cases-hero-content">
          <h1>Case Studies</h1>
          <p>
            Real results from our sourcing partnerships. See how we've helped businesses 
            around the world find reliable suppliers and grow their operations.
          </p>
        </div>
      </section>

      <section className="stats-section">
        <div className="section-container">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <stat.icon size={32} className="stat-icon" />
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cases-list-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Success Stories</span>
            <h2 className="section-title">Our Recent Projects</h2>
            <p className="section-subtitle">
              Each case represents a unique sourcing challenge and our solution.
            </p>
          </div>

          <div className="cases-list">
            {caseStudies.map((study, index) => (
              <div key={index} className="case-study-card">
                <div className="case-study-header">
                  <span className="case-category">{study.category}</span>
                  <h3>{study.title}</h3>
                  <div className="case-client">
                    <Users size={16} />
                    <span>{study.client} • {study.location}</span>
                  </div>
                </div>

                <div className="case-study-content">
                  <div className="case-section">
                    <h4>The Challenge</h4>
                    <p>{study.challenge}</p>
                  </div>
                  <div className="case-section">
                    <h4>Our Approach</h4>
                    <p>{study.approach}</p>
                  </div>
                  <div className="case-section">
                    <h4>The Result</h4>
                    <p>{study.result}</p>
                  </div>
                </div>

                <div className="case-metrics">
                  {study.metrics.map((metric, idx) => (
                    <div key={idx} className="metric-item">
                      <div className="metric-value">{metric.value}</div>
                      <div className="metric-label">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="section-container">
          <div className="section-header">
            <span className="section-tag">Our Process</span>
            <h2 className="section-title">How We Deliver Results</h2>
          </div>

          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="cta-container">
          <h2>Ready to Start Your Project?</h2>
          <p>
            Let us help you find the right suppliers and achieve similar results. 
            Get a customized sourcing solution for your business.
          </p>
          <Link to="/contact" className="cta-btn">
            Get a Free Quote
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </>
  )
}

export default CaseStudies