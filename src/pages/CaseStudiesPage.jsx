import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Clock, Shield, CheckCircle, Star } from 'lucide-react';

const CaseStudiesPage = () => {
  const caseStudies = [
    {
      id: 1,
      company: 'TechStart Inc.',
      industry: 'Electronics',
      location: 'United States',
      year: '2024',
      challenge: 'TechStart Inc., a startup in the smart home industry, needed to source 50,000 smart thermostat units from China. They had limited experience with international sourcing and were concerned about quality control and supplier reliability.',
      approach: [
        'Conducted thorough supplier verification of 8 potential factories',
        'Organized virtual factory tours and detailed capability assessments',
        'Negotiated favorable payment terms and quality guarantees',
        'Implemented pre-production and pre-shipment inspections',
        'Coordinated consolidated shipping to reduce logistics costs',
      ],
      results: [
        { label: 'Cost Savings', value: '35%', description: 'compared to US suppliers' },
        { label: 'Quality Pass Rate', value: '99.2%', description: 'first inspection' },
        { label: 'On-Time Delivery', value: '100%', description: 'within agreed timeline' },
        { label: 'Production Time', value: '8 weeks', description: 'from order to delivery' },
      ],
      testimonial: {
        quote: 'SSourcing China transformed our supply chain. Their verification process saved us from a potential scam, and their QC team ensures every shipment meets our standards. We\'ve now scaled to 200,000 units annually with complete confidence.',
        author: 'Michael Chen',
        position: 'CEO',
        company: 'TechStart Inc.',
      },
      image: 'electronics manufacturing factory',
    },
    {
      id: 2,
      company: 'Fashion Forward',
      industry: 'Apparel',
      location: 'United Kingdom',
      year: '2024',
      challenge: 'Fashion Forward, a sustainable fashion brand, needed to find certified organic cotton suppliers for their new eco-friendly clothing line. They required suppliers with GOTS certification and were particular about ethical manufacturing practices.',
      approach: [
        'Identified suppliers with organic cotton certifications',
        'Conducted virtual and in-person factory audits',
        'Verified supply chain traceability for organic materials',
        'Negotiated fair pricing while maintaining ethical standards',
        'Established ongoing quality monitoring protocols',
      ],
      results: [
        { label: 'Certification Success', value: '100%', description: 'all products GOTS certified' },
        { label: 'Cost Reduction', value: '22%', description: 'compared to European suppliers' },
        { label: 'Supplier Reliability', value: '98%', description: 'on-time delivery rate' },
        { label: 'Order Fulfillment', value: '50K+', description: 'units in first year' },
      ],
      testimonial: {
        quote: 'Finding ethical suppliers seemed impossible until we worked with SSourcing China. They understood our sustainability requirements and found factories that exceeded our expectations. Their ongoing support has been invaluable.',
        author: 'Sarah Williams',
        position: 'Procurement Director',
        company: 'Fashion Forward',
      },
      image: 'textile factory manufacturing',
    },
    {
      id: 3,
      company: 'BuildRight Co.',
      industry: 'Construction',
      location: 'Australia',
      year: '2023',
      challenge: 'BuildRight Co., a construction materials distributor, needed to source building materials at competitive prices while maintaining consistent quality. Previous suppliers had quality inconsistencies that caused project delays.',
      approach: [
        'Evaluated multiple suppliers across different product categories',
        'Implemented rigorous quality inspection protocols',
        'Established buffer stock in Chinese warehouse for fast replenishment',
        'Created detailed product specifications and quality standards',
        'Negotiated long-term contracts with price guarantees',
      ],
      results: [
        { label: 'Cost Savings', value: '28%', description: 'on material costs' },
        { label: 'Quality Issues', value: '-85%', description: 'reduction in defects' },
        { label: 'Lead Time', value: '50%', description: 'faster than previous supplier' },
        { label: 'Client Satisfaction', value: '4.9/5', description: 'average rating' },
      ],
      testimonial: {
        quote: 'The quality inspection service is worth every penny. They caught issues before shipment that would have cost us significantly in project delays. We now source 70% of our materials through SSourcing China.',
        author: 'David Park',
        position: 'Operations Manager',
        company: 'BuildRight Co.',
      },
      image: 'construction materials warehouse',
    },
    {
      id: 4,
      company: 'GreenHome Products',
      industry: 'Home & Garden',
      location: 'Canada',
      year: '2024',
      challenge: 'GreenHome Products wanted to launch a new line of eco-friendly home organization products. They needed suppliers who could handle small initial orders with the flexibility to scale, plus expertise in sustainable materials.',
      approach: [
        'Sourced suppliers specializing in bamboo and recycled materials',
        'Negotiated low MOQs for initial production runs',
        'Provided product design and packaging recommendations',
        'Coordinated sample development and iterations',
        'Arranged consolidation shipping for multiple products',
      ],
      results: [
        { label: 'Initial Order', value: '5K', description: 'units (scalable)' },
        { label: 'Time to Market', value: '3 months', description: 'from concept to delivery' },
        { label: 'Product Range', value: '12', description: 'SKUs launched' },
        { label: 'Growth', value: '300%', description: 'in first year' },
      ],
      testimonial: {
        quote: 'As a small business, we were worried about minimum order requirements. SSourcing China found suppliers who were flexible with us and helped us start small. We\'ve since grown to a 6-figure business with them.',
        author: 'Jennifer Martinez',
        position: 'Founder',
        company: 'GreenHome Products',
      },
      image: 'home products manufacturing',
    },
    {
      id: 5,
      company: 'MedTech Solutions',
      industry: 'Medical Devices',
      location: 'Germany',
      year: '2023',
      challenge: 'MedTech Solutions needed to source medical-grade plastic components and electronic modules for their diagnostic equipment. Quality and regulatory compliance were critical, with strict certification requirements.',
      approach: [
        'Identified suppliers with ISO 13485 medical device certification',
        'Conducted detailed quality management system audits',
        'Implemented strict incoming material inspection protocols',
        'Coordinated regulatory documentation and compliance verification',
        'Established validated supplier qualification process',
      ],
      results: [
        { label: 'Compliance', value: '100%', description: 'all products meet CE/FDA' },
        { label: 'Defect Rate', value: '0.1%', description: 'below industry average' },
        { label: 'Audit Score', value: '94%', description: 'average supplier rating' },
        { label: 'Cost Savings', value: '40%', description: 'vs European suppliers' },
      ],
      testimonial: {
        quote: 'Medical device sourcing requires extreme attention to quality and compliance. SSourcing China\'s understanding of regulatory requirements and their rigorous verification process gave us complete peace of mind.',
        author: 'Dr. Hans Mueller',
        position: 'Quality Director',
        company: 'MedTech Solutions',
      },
      image: 'medical device manufacturing',
    },
    {
      id: 6,
      company: 'SportZone',
      industry: 'Sports Equipment',
      location: 'France',
      year: '2024',
      challenge: 'SportZone, a sports equipment retailer, needed to source a new line of fitness accessories. They wanted competitive pricing, consistent quality, and the ability to introduce new products quickly based on market trends.',
      approach: [
        'Identified suppliers with fast-turn manufacturing capabilities',
        'Created modular product designs for easy customization',
        'Implemented rapid sample development process',
        'Established flexible production schedules for quick reorders',
        'Coordinated air freight for time-sensitive launches',
      ],
      results: [
        { label: 'Time to Market', value: '6 weeks', description: 'average per product' },
        { label: 'Product Success', value: '85%', description: 'hit sales targets' },
        { label: 'Reorder Speed', value: '2 weeks', description: 'average restock time' },
        { label: 'Cost Margin', value: '45%', description: 'average profit margin' },
      ],
      testimonial: {
        quote: 'The speed at which we can bring new products to market has been game-changing. SSourcing China\'s flexibility and responsiveness help us stay ahead of trends and beat competitors to market.',
        author: 'Pierre Dubois',
        position: 'Sourcing Manager',
        company: 'SportZone',
      },
      image: 'sports equipment manufacturing',
    },
  ];

  const stats = [
    { value: '500+', label: 'Clients Served', icon: Users },
    { value: '35%', label: 'Average Cost Savings', icon: TrendingUp },
    { value: '99.5%', label: 'Quality Pass Rate', icon: Shield },
    { value: '98%', label: 'On-Time Delivery', icon: Clock },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-200">
              Real success stories from businesses we've helped source products from China. See how we've solved complex sourcing challenges for companies worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-white border-b border-[var(--color-border)]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-2">{stat.value}</div>
                <div className="text-sm text-[var(--color-text-muted)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-[var(--color-background)]">
        <div className="container">
          <div className="space-y-16">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="card overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Image */}
                  <div className="lg:col-span-1">
                    <div 
                      className="aspect-[4/3] lg:aspect-auto lg:h-full bg-gray-200"
                      data-strk-bg-id={`case-study-${study.id}`}
                      data-strk-bg={`${study.image} quality inspection`}
                      data-strk-bg-ratio="4x3"
                      data-strk-bg-width="600"
                    ></div>
                  </div>
                  
                  {/* Content */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] text-sm font-medium rounded-full">
                        {study.industry}
                      </span>
                      <span className="text-sm text-[var(--color-text-muted)]">{study.location}</span>
                      <span className="text-sm text-[var(--color-text-muted)]">{study.year}</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-4">{study.company}</h3>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2 text-[var(--color-primary)]">Challenge</h4>
                      <p className="text-[var(--color-text-secondary)]">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2 text-[var(--color-primary)]">Our Approach</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {study.approach.map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-[var(--color-text-secondary)]">
                            <CheckCircle className="w-4 h-4 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3 text-[var(--color-primary)]">Results</h4>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {study.results.map((result, i) => (
                          <div key={i} className="bg-[var(--color-success)]/10 p-4 rounded-lg text-center">
                            <div className="text-2xl font-bold text-[var(--color-success)]">{result.value}</div>
                            <div className="text-xs text-[var(--color-text-muted)]">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Testimonial */}
                    <div className="bg-[var(--color-background)] p-6 rounded-lg">
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[var(--color-accent)] text-[var(--color-accent)]" />
                        ))}
                      </div>
                      <p className="text-[var(--color-text-secondary)] italic mb-4">"{study.testimonial.quote}"</p>
                      <div className="font-medium">{study.testimonial.author}</div>
                      <div className="text-sm text-[var(--color-text-muted)]">{study.testimonial.position}, {study.testimonial.company}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-light)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let us help you find the right suppliers and achieve similar results for your business.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-secondary)] text-white px-10 py-4 rounded font-semibold text-lg hover:bg-[#9b2c2c] transition-colors"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesPage;