import { ArrowRight, TrendingUp, Users, Award, Globe, Clock, Star, Quote } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    client: 'European Home Goods Retailer',
    industry: 'Home & Living',
    location: 'Germany',
    challenge: 'This mid-sized retailer needed to source 50,000+ home decor items annually from China. Their previous supplier had quality consistency issues, and they lacked in-house sourcing expertise.',
    approach: 'We conducted supplier verification on 8 potential factories, performed on-site inspections, and implemented a rigorous quality control process. We also negotiated volume-based pricing.',
    results: [
      '20% cost reduction compared to previous supplier',
      '99.5% quality pass rate in first year',
      'Established reliable 6-month production cycle',
      'Reduced lead time by 3 weeks',
    ],
    testimonial: 'SSourcing China transformed our supply chain. Their attention to detail and proactive communication gave us confidence in our China operations for the first time.',
    author: 'Michael Schmidt',
    role: 'Procurement Director',
    image: 'european-retail',
  },
  {
    id: 2,
    client: 'US Technology Startup',
    industry: 'Electronics',
    location: 'United States',
    challenge: 'A hardware startup needed to manufacture a new smart home device. They had technical specifications but no experience with Chinese manufacturing or quality control.',
    approach: 'We identified ISO-certified factories with experience in consumer electronics, arranged for sample development, and established a comprehensive QC protocol including during-production inspections.',
    results: [
      'Successfully launched product on schedule',
      'Achieved FCC and CE certifications',
      '0.3% defect rate in first production run',
      'Established long-term manufacturing partnership',
    ],
    testimonial: 'As a startup, we couldn\'t afford to make mistakes with our first product. SSourcing China guided us through every step and made our vision a reality.',
    author: 'Sarah Chen',
    role: 'CEO',
    image: 'us-startup',
  },
  {
    id: 3,
    client: 'Australian Fashion Distributor',
    industry: 'Textiles & Apparel',
    location: 'Australia',
    challenge: 'A fashion distributor needed to source sustainable fabrics and finished garments from China. They had specific environmental and ethical requirements for their brand.',
    approach: 'We verified factories for GOTS and OEKO-TEX certifications, conducted ethical sourcing audits, and arranged for sustainable materials sourcing. Regular inspections ensured compliance.',
    results: [
      'Found 3 certified sustainable suppliers',
      '100% compliance with ethical standards',
      'Successfully launched eco-friendly product line',
      '30% growth in sustainable product sales',
    ],
    testimonial: 'Finding truly sustainable suppliers in China seemed impossible until we worked with SSourcing China. They understood our values and found partners who shared them.',
    author: 'Emma Williams',
    role: 'Founder',
    image: 'australian-fashion',
  },
  {
    id: 4,
    client: 'Canadian Industrial Equipment Company',
    industry: 'Machinery',
    location: 'Canada',
    challenge: 'An industrial equipment manufacturer needed specialized machinery parts with tight tolerances. Local suppliers were too expensive, but they were concerned about Chinese quality.',
    approach: 'We identified precision engineering factories, arranged technical capability assessments, and implemented detailed inspection protocols using advanced measurement equipment.',
    results: [
      '40% cost savings vs. Canadian suppliers',
      'Precision tolerances met consistently',
      'Established dual-source strategy for risk mitigation',
      'Annual cost savings of $500,000+',
    ],
    testimonial: 'The quality we receive from our Chinese suppliers matched - and often exceeded - what we got locally. SSourcing China made the whole process seamless.',
    author: 'David Thompson',
    role: 'Operations Manager',
    image: 'canadian-industrial',
  },
];

const stats = [
  { value: '150+', label: 'Clients Worldwide', icon: Users },
  { value: '$50M+', label: 'Annual Sourcing Volume', icon: TrendingUp },
  { value: '98%', label: 'Client Retention Rate', icon: Award },
  { value: '50+', label: 'Countries Served', icon: Globe },
];

const testimonials = [
  {
    quote: 'Working with SSourcing China gave us the confidence to expand our China operations. Their professionalism and attention to detail are unmatched.',
    author: 'James Miller',
    role: 'CEO, HomeStyle Europe',
    rating: 5,
  },
  {
    quote: 'They don\'t just find suppliers - they become partners in your success. Highly recommend for any serious sourcing needs.',
    author: 'Lisa Park',
    role: 'Director, TechFlow Inc',
    rating: 5,
  },
  {
    quote: 'The quality control process they implemented saved us from potential disasters. Worth every penny.',
    author: 'Robert Chen',
    role: 'Founder, GreenGoods',
    rating: 5,
  },
];

const CaseStudies = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Case Studies</h1>
            <p className="text-xl text-white/80">
              Real success stories from businesses we've helped source from China. See how our expertise has transformed their supply chains.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid-3">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-10 h-10 text-[var(--accent)] mx-auto mb-3" />
                <div className="text-4xl font-bold text-[var(--primary)] mb-2">{stat.value}</div>
                <div className="text-[var(--text-secondary)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="section bg-[var(--bg-light)]">
        <div className="container">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={study.id} className="card">
                <div className="grid-2 gap-8">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <span className="badge">{study.industry}</span>
                      <span className="text-sm text-[var(--text-secondary)] flex items-center gap-1">
                        <Globe className="w-4 h-4" />
                        {study.location}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-[var(--primary)]">{study.client}</h3>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-[var(--primary)] mb-2">Challenge:</h4>
                      <p className="text-[var(--text-secondary)]">{study.challenge}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-[var(--primary)] mb-2">Our Approach:</h4>
                      <p className="text-[var(--text-secondary)]">{study.approach}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-[var(--primary)] mb-3">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <TrendingUp className="w-5 h-5 text-[var(--success)] flex-shrink-0 mt-0.5" />
                            <span className="text-[var(--text-primary)]">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-2xl p-8 text-white flex flex-col justify-between">
                    <div>
                      <Quote className="w-12 h-12 text-white/30 mb-4" />
                      <p className="text-lg italic mb-6">"{study.testimonial}"</p>
                    </div>
                    <div>
                      <div className="font-semibold">{study.author}</div>
                      <div className="text-white/70 text-sm">{study.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="section-title">What Our Clients Say</h2>
            <p className="section-subtitle mx-auto">
              Feedback from businesses we've partnered with
            </p>
          </div>
          
          <div className="grid-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-[var(--text-secondary)] mb-6">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold text-[var(--primary)]">{testimonial.author}</div>
                  <div className="text-sm text-[var(--text-secondary)]">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--primary)] text-white">
        <div className="container text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Let us help you find the right suppliers and transform your China sourcing experience.
          </p>
          <a href="/contact" className="btn btn-white text-lg px-8 py-4">
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;