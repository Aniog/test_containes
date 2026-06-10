import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, TrendingUp, Clock, Users, MapPin, Star } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import Button from '@/components/ui/Button'

const caseStudies = [
  {
    id: 'us-retail-home-goods',
    title: 'US Retail Chain Sources Home Goods at 35% Lower Cost',
    client: 'Major US Home Goods Retailer',
    industry: 'Home & Garden',
    location: 'United States',
    duration: '6 months',
    thumbnail: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop',
    challenge: 'The client needed to source furniture and home decor from multiple Chinese manufacturers while maintaining strict quality standards and competitive pricing.',
    solution: 'We identified and vetted 8 qualified suppliers across different product categories. Our team coordinated production schedules, conducted regular inspections, and managed consolidation shipping.',
    results: [
      { label: 'Cost Reduction', value: '35%' },
      { label: 'Suppliers Matched', value: '8' },
      { label: 'Quality Pass Rate', value: '98%' },
      { label: 'Lead Time', value: '8 weeks' },
    ],
    testimonial: {
      text: 'SSourcing China transformed our supply chain. We now have reliable partners who consistently deliver quality products on time.',
      author: 'Supply Chain Director',
    },
  },
  {
    id: 'european-tech-electronics',
    title: 'Berlin Startup Achieves Zero Defect Rate for Electronics',
    client: 'TechFlow GmbH',
    industry: 'Electronics',
    location: 'Germany',
    duration: '4 months',
    thumbnail: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&h=400&fit=crop',
    challenge: 'A Berlin-based consumer electronics startup needed manufacturing partners who could meet strict EU quality standards while staying within a tight startup budget.',
    solution: 'We matched them with ISO-certified factories experienced in European markets. Multi-stage QC inspections and detailed documentation ensured compliance with CE and RoHS standards.',
    results: [
      { label: 'Defect Rate', value: '0%' },
      { label: 'Time to Market', value: '4 months' },
      { label: 'Certifications', value: 'CE, RoHS' },
      { label: 'Suppliers Found', value: '3' },
    ],
    testimonial: {
      text: 'The quality control process was exceptional. Every product arrived exactly as specified, which helped us build trust with our customers from day one.',
      author: 'CEO, TechFlow GmbH',
    },
  },
  {
    id: 'australian-apparel-distributor',
    title: 'Australian Fashion Distributor Scales to 12 Monthly Shipments',
    client: 'Meridian Fashion Australia',
    industry: 'Textiles & Apparel',
    location: 'Australia',
    duration: '8 months',
    thumbnail: 'https://images.unsplash.com/photo-1558171813-4c088753af8f?w=600&h=400&fit=crop',
    challenge: 'Meridian needed to scale their apparel imports from seasonal orders to consistent monthly shipments while reducing per-unit costs and improving speed to market.',
    solution: 'We established relationships with three factories capable of meeting their volume and timeline requirements. Our production tracking and expedited shipping options enabled 6-week turnarounds.',
    results: [
      { label: 'Monthly Shipments', value: '12' },
      { label: 'Turnaround Time', value: '6 weeks' },
      { label: 'Cost Savings', value: '22%' },
      { label: 'On-Time Rate', value: '100%' },
    ],
    testimonial: {
      text: 'We went from importing twice a year to monthly shipments. The reliability and consistency have been game-changers for our business.',
      author: 'Operations Manager',
    },
  },
  {
    id: 'canadian-furniture-importer',
    title: 'Canadian Furniture Importer Expands Product Line by 40%',
    client: 'Nordic Home Canada',
    industry: 'Furniture',
    location: 'Canada',
    duration: '10 months',
    thumbnail: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=400&fit=crop',
    challenge: 'Nordic Home wanted to expand their modern furniture line but struggled to find Chinese suppliers who could match their Scandinavian design aesthetic.',
    solution: 'We identified factories with ODM capabilities who could adapt existing designs to their specifications. Our team managed the entire product development process from concept to delivery.',
    results: [
      { label: 'New Products', value: '40+' },
      { label: 'Design Accuracy', value: '95%' },
      { label: 'Product Line Growth', value: '40%' },
      { label: 'Development Time', value: '3 months' },
    ],
    testimonial: {
      text: 'They found factories we never would have discovered on our own. The product development support was invaluable.',
      author: 'Product Development Lead',
    },
  },
  {
    id: 'uk-toys-retailer',
    title: 'UK Toy Retailer Navigates Complex Compliance Requirements',
    client: 'Playtime UK Ltd',
    industry: 'Toys & Games',
    location: 'United Kingdom',
    duration: '5 months',
    thumbnail: 'https://images.unsplash.com/photo-1560859251-d562ffa4a32f?w=600&h=400&fit=crop',
    challenge: 'Playtime UK needed to source toys that complied with stringent UK and EU safety standards, including EN71 testing and BS EN ISO standards.',
    solution: 'We partnered with factories already experienced with European compliance requirements. Pre-shipment testing and documentation verification ensured all products met regulatory standards.',
    results: [
      { label: 'Products Sourced', value: '25+' },
      { label: 'Compliance Rate', value: '100%' },
      { label: 'Testing Savings', value: '30%' },
      { label: 'Time to Store', value: '10 weeks' },
    ],
    testimonial: {
      text: 'Compliance can be a nightmare. SSourcing China made it seamless and we never had a single issue at customs.',
      author: 'Sourcing Manager',
    },
  },
]

const CaseStudies = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-600 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success Stories
          </h1>
          <p className="text-xl text-slate-200 max-w-3xl mx-auto">
            Real results for global buyers who trusted our China sourcing expertise. 
            See how we've helped businesses reduce costs, improve quality, and scale operations.
          </p>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} hover className="overflow-hidden p-0">
                <img
                  src={study.thumbnail}
                  alt={study.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="text-xs font-semibold text-secondary bg-secondary-50 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-xs font-semibold text-slate-600 bg-slate-100 px-3 py-1 rounded-full flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {study.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-2">{study.title}</h3>
                  <p className="text-sm text-slate-500 mb-4">{study.client}</p>
                  
                  <div className="grid grid-cols-4 gap-4 mb-4 pt-4 border-t border-slate-200">
                    {study.results.map((result) => (
                      <div key={result.label} className="text-center">
                        <div className="text-xl font-bold text-secondary">{result.value}</div>
                        <div className="text-xs text-slate-500">{result.label}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4 mb-4">
                    <p className="text-sm text-slate-600 italic">"{study.testimonial.text}"</p>
                    <p className="text-xs text-slate-500 mt-2">— {study.testimonial.author}</p>
                  </div>

                  <details className="group">
                    <summary className="cursor-pointer text-sm font-semibold text-secondary hover:text-secondary-600 list-none flex items-center">
                      View Details
                      <ArrowRight className="w-4 h-4 ml-1 group-open:rotate-90 transition-transform" />
                    </summary>
                    <div className="mt-4 space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">Challenge</h4>
                        <p className="text-sm text-slate-600">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-primary mb-2">Solution</h4>
                        <p className="text-sm text-slate-600">{study.solution}</p>
                      </div>
                    </div>
                  </details>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">Ready to Write Your Success Story?</h2>
          <p className="text-lg text-slate-600 mb-8">
            Join hundreds of global buyers who trust us for their China sourcing needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="secondary" size="lg">
                Get Your Free Consultation
              </Button>
            </Link>
            <Link to="/services">
              <Button variant="outline" size="lg">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default CaseStudies