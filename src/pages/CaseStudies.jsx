import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Quote, TrendingUp, Users, Calendar } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      company: 'European Home Goods Retailer',
      industry: 'Home & Kitchen',
      location: 'Germany',
      year: '2024',
      challenge: 'A mid-sized German retailer wanted to expand their kitchenware product line with new suppliers in China. Their previous attempts at direct sourcing resulted in quality issues and communication difficulties.',
      solution: 'We conducted a comprehensive supplier search, verifying 15 factories. We performed detailed factory audits, negotiated favorable terms, and implemented a rigorous quality control protocol including pre-shipment inspections.',
      result: '40% cost reduction compared to their previous supplier, zero quality issues in the first year of production, and a 25% improvement in time-to-market.',
      testimonial: 'SSourcing China transformed our sourcing operation. The quality of products has been consistently excellent, and their team handles all the complexity so we can focus on our business.',
      author: 'Thomas Mueller',
      role: 'Procurement Director',
    },
    {
      company: 'US Electronics Distributor',
      industry: 'Consumer Electronics',
      location: 'United States',
      year: '2023',
      challenge: 'An American electronics distributor experienced a 15% defect rate from their China supplier, resulting in significant returns and customer complaints. They needed to find a more reliable sourcing partner.',
      solution: 'We performed a thorough factory audit, identified the root causes of quality issues, and negotiated with the factory to implement improved QC processes. We also arranged third-party inspections at key production stages.',
      result: 'Defect rate reduced to 0.5%, customer complaints decreased by 90%, and they established a sustainable long-term partnership with a verified manufacturer.',
      testimonial: 'The difference in product quality has been remarkable. SSourcing China\'s inspection protocols give us complete confidence in every shipment.',
      author: 'Sarah Johnson',
      role: 'VP of Operations',
    },
    {
      company: 'Australian Fashion Brand',
      industry: 'Apparel & Textiles',
      location: 'Australia',
      year: '2024',
      challenge: 'An Australian fashion brand wanted to launch a private label clothing line but had no experience sourcing from China. They needed guidance on supplier selection, manufacturing, and quality control.',
      solution: 'We identified suitable factories specializing in their product category, arranged sample production, negotiated MOQ and pricing, and created a comprehensive quality control checklist. We also coordinated the entire production process.',
      result: 'Successful launch of 50 SKUs, 35% lower production costs than local manufacturing, and a scalable supply chain ready for growth.',
      testimonial: 'As a small brand, we never thought we could afford private label production from China. SSourcing China made it accessible and profitable for us.',
      author: 'Emma Williams',
      role: 'Founder & CEO',
    },
    {
      company: 'Canadian Industrial Equipment Company',
      industry: 'Machinery & Parts',
      location: 'Canada',
      year: '2023',
      challenge: 'A Canadian company needed specialized industrial machinery parts manufactured in China. The technical specifications were complex, and they needed a supplier with specific certifications.',
      solution: 'We conducted a targeted supplier search focusing on factories with relevant certifications (ISO 9001). We arranged technical discussions, coordinated sample production, and performed thorough quality inspections.',
      result: 'Found a certified manufacturer meeting all technical requirements, achieved 50% cost savings compared to domestic suppliers, and established a reliable ongoing supply relationship.',
      testimonial: 'Their technical expertise and attention to detail made all the difference. They understood our requirements and delivered exactly what we needed.',
      author: 'Michael Chen',
      role: 'Engineering Manager',
    },
  ];

  const stats = [
    { value: '40%', label: 'Average Cost Savings' },
    { value: '99%', label: 'Quality Pass Rate' },
    { value: '500+', label: 'Projects Completed' },
    { value: '98%', label: 'Client Retention' },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary-light)] text-white py-20">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-white mb-4">Case Studies</h1>
            <p className="text-xl text-white/90">
              Real success stories from businesses we've helped succeed with China sourcing.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-[var(--primary)] mb-2">{stat.value}</div>
                <div className="text-[var(--text-secondary)]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section bg-[var(--background)]">
        <div className="container">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm border border-[var(--border)] overflow-hidden">
                <div className="p-8">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Star className="w-5 h-5 text-[var(--accent)]" fill="currentColor" />
                        <span className="text-sm font-medium text-[var(--primary)]">{study.industry}</span>
                      </div>
                      <h2 className="text-2xl mb-1">{study.company}</h2>
                      <div className="flex items-center gap-4 text-sm text-[var(--text-secondary)]">
                        <span className="flex items-center gap-1">
                          <Users size={16} />
                          {study.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {study.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide mb-2">Challenge</h3>
                      <p className="text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide mb-2">Solution</h3>
                      <p className="text-sm">{study.solution}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-[var(--text-secondary)] uppercase tracking-wide mb-2">Result</h3>
                      <p className="text-sm font-semibold text-[var(--success)]">{study.result}</p>
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-[var(--background)] p-6 rounded-lg">
                    <Quote className="w-8 h-8 text-[var(--primary)]/30 mb-3" />
                    <p className="text-[var(--text-secondary)] mb-4 italic">"{study.testimonial}"</p>
                    <div>
                      <p className="font-semibold">{study.author}</p>
                      <p className="text-sm text-[var(--text-secondary)]">{study.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-[var(--primary)] text-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-white mb-4">Ready to Write Your Success Story?</h2>
            <p className="text-white/90 mb-8 text-lg">
              Let us help you achieve similar results. Contact us today to discuss your sourcing needs.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[var(--accent)] text-white px-8 py-4 rounded font-semibold hover:bg-[var(--accent-hover)] transition-colors"
            >
              Get a Free Sourcing Quote
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;