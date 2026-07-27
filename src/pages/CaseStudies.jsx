import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, DollarSign, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Electronics Manufacturer for US Retailer',
      client: 'US-based Electronics Retailer',
      category: 'Electronics',
      challenge: 'The client needed a reliable supplier for consumer electronics with consistent quality and competitive pricing. Previous suppliers had quality issues and delivery delays.',
      solution: 'We identified 5 qualified manufacturers, conducted factory audits, and negotiated favorable terms. We implemented a strict quality control process with pre-production, during-production, and pre-shipment inspections.',
      results: [
        { metric: 'Cost Reduction', value: '22%', icon: <DollarSign className="w-5 h-5" /> },
        { metric: 'Quality Defect Rate', value: '< 0.5%', icon: <Award className="w-5 h-5" /> },
        { metric: 'On-Time Delivery', value: '98%', icon: <Clock className="w-5 h-5" /> }
      ],
      testimonial: 'SSourcing China transformed our supply chain. We now have a reliable partner who understands our quality requirements and consistently delivers on time.',
      testimonialAuthor: 'John Smith, Procurement Director'
    },
    {
      id: 2,
      title: 'Textile Supplier for European Fashion Brand',
      client: 'European Fashion Brand',
      category: 'Textiles',
      challenge: 'The client needed to find multiple textile suppliers for different fabric types while maintaining consistent quality across all suppliers.',
      solution: 'We conducted a comprehensive supplier search, audited 12 factories, and selected 3 suppliers specializing in different fabric types. We established quality standards and provided ongoing QC support.',
      results: [
        { metric: 'Suppliers Found', value: '3 Qualified', icon: <CheckCircle className="w-5 h-5" /> },
        { metric: 'Time to Market', value: 'Reduced 30%', icon: <Clock className="w-5 h-5" /> },
        { metric: 'Quality Pass Rate', value: '99.2%', icon: <Award className="w-5 h-5" /> }
      ],
      testimonial: 'The team at SSourcing China understood our brand standards and found suppliers who could meet our exacting requirements. Their attention to detail is exceptional.',
      testimonialAuthor: 'Maria Garcia, Supply Chain Manager'
    },
    {
      id: 3,
      title: 'Industrial Parts for Canadian Distributor',
      client: 'Canadian Industrial Distributor',
      category: 'Industrial',
      challenge: 'The client needed precision industrial parts with tight tolerances. Previous suppliers could not meet the technical specifications consistently.',
      solution: 'We sourced manufacturers with advanced CNC capabilities, conducted technical capability assessments, and implemented a rigorous inspection protocol with CMM measurements.',
      results: [
        { metric: 'First Pass Yield', value: '99.5%', icon: <Award className="w-5 h-5" /> },
        { metric: 'Lead Time', value: 'Reduced 25%', icon: <Clock className="w-5 h-5" /> },
        { metric: 'Cost Savings', value: '18%', icon: <DollarSign className="w-5 h-5" /> }
      ],
      testimonial: 'SSourcing China helped us find manufacturers who truly understand precision engineering. Our quality issues have virtually disappeared.',
      testimonialAuthor: 'David Chen, Operations Manager'
    },
    {
      id: 4,
      title: 'Home Goods for Australian Retailer',
      client: 'Australian Home Goods Retailer',
      category: 'Home & Garden',
      challenge: 'The client needed to source a wide range of home goods products while maintaining consistent quality and competitive pricing across multiple product lines.',
      solution: 'We established relationships with specialized manufacturers for each product category, implemented standardized quality checks, and coordinated consolidated shipping.',
      results: [
        { metric: 'Product Range', value: '50+ SKUs', icon: <CheckCircle className="w-5 h-5" /> },
        { metric: 'Customer Returns', value: 'Reduced 40%', icon: <TrendingUp className="w-5 h-5" /> },
        { metric: 'Shipping Costs', value: 'Saved 15%', icon: <DollarSign className="w-5 h-5" /> }
      ],
      testimonial: 'Managing multiple product categories was overwhelming until we partnered with SSourcing China. They handle everything seamlessly.',
      testimonialAuthor: 'Sarah Johnson, Category Manager'
    },
    {
      id: 5,
      title: 'Packaging Solutions for UK Brand',
      client: 'UK Consumer Brand',
      category: 'Packaging',
      challenge: 'The client needed custom packaging solutions with specific sustainability requirements and tight delivery deadlines.',
      solution: 'We found eco-friendly packaging manufacturers, coordinated custom design and sampling, and managed expedited production and shipping to meet launch deadlines.',
      results: [
        { metric: 'Launch On Time', value: '100%', icon: <Clock className="w-5 h-5" /> },
        { metric: 'Eco-Materials', value: '100%', icon: <Award className="w-5 h-5" /> },
        { metric: 'Cost per Unit', value: 'Reduced 12%', icon: <DollarSign className="w-5 h-5" /> }
      ],
      testimonial: 'SSourcing China delivered our packaging on time and on budget, while meeting our strict sustainability requirements. Highly recommended.',
      testimonialAuthor: 'Emma Wilson, Brand Manager'
    },
    {
      id: 6,
      title: 'Automotive Parts for German Distributor',
      client: 'German Automotive Parts Distributor',
      category: 'Auto Parts',
      challenge: 'The client needed ISO-certified automotive parts suppliers with proven quality systems and reliable delivery performance.',
      solution: 'We identified ISO 9001 certified manufacturers, conducted comprehensive factory audits, and established a quality assurance program with regular inspections.',
      results: [
        { metric: 'Certified Suppliers', value: '4 Partners', icon: <Award className="w-5 h-5" /> },
        { metric: 'Defect Rate', value: '< 0.1%', icon: <CheckCircle className="w-5 h-5" /> },
        { metric: 'Delivery Performance', value: '99% On-Time', icon: <Clock className="w-5 h-5" /> }
      ],
      testimonial: 'The quality and reliability we get from SSourcing China suppliers is outstanding. They are an extension of our quality team.',
      testimonialAuthor: 'Michael Schmidt, Quality Director'
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Real results for real businesses. See how we have helped companies across industries succeed with their China sourcing needs.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Start Your Success Story
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Success Stories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Each case study represents a successful partnership and measurable results for our clients.
            </p>
          </div>

          <div className="space-y-12">
            {caseStudies.map((caseStudy, index) => (
              <Card key={caseStudy.id} className="border-0 shadow-lg overflow-hidden">
                <CardHeader className="bg-slate-50">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-3 py-1 rounded-full mb-2">
                        {caseStudy.category}
                      </span>
                      <CardTitle className="text-2xl">{caseStudy.title}</CardTitle>
                      <CardDescription className="text-base mt-1">{caseStudy.client}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">The Challenge</h3>
                        <p className="text-slate-600">{caseStudy.challenge}</p>
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-2">Our Solution</h3>
                        <p className="text-slate-600">{caseStudy.solution}</p>
                      </div>
                      <div className="bg-slate-50 rounded-lg p-6">
                        <p className="text-slate-700 italic mb-4">"{caseStudy.testimonial}"</p>
                        <p className="text-sm text-slate-500">— {caseStudy.testimonialAuthor}</p>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-4">Key Results</h3>
                      <div className="space-y-4">
                        {caseStudy.results.map((result, idx) => (
                          <div key={idx} className="flex items-center gap-3 bg-white border rounded-lg p-4">
                            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 flex-shrink-0">
                              {result.icon}
                            </div>
                            <div>
                              <div className="text-2xl font-bold text-slate-900">{result.value}</div>
                              <div className="text-sm text-slate-600">{result.metric}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Let us help you achieve similar results. Contact us today for a free consultation.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get Started Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
