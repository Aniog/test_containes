import React from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, CheckCircle, TrendingUp, Users, Clock, 
  Package, Factory, DollarSign
} from 'lucide-react'
import Button from '@/components/ui/Button'

const caseStudies = [
  {
    id: 'european-home-decor',
    client: 'European Home Decor Retailer',
    industry: 'Home Decor',
    location: 'Germany',
    duration: '6 months',
    value: '$450,000',
    challenge: 'A German home decor retailer needed to source 20,000 ceramic vases from verified factories with strict quality requirements and tight delivery timelines for their spring collection.',
    solution: 'We identified three verified factories, coordinated sample requests, and selected the best supplier based on quality, capacity, and pricing. Our team conducted bi-weekly production inspections and coordinated sea freight to Hamburg.',
    results: [
      '99.2% quality pass rate on final inspection',
      '35% cost savings compared to previous supplier',
      'On-time delivery for spring collection launch',
      'Established ongoing partnership with factory',
    ],
    image: 'Ceramic vases production',
  },
  {
    id: 'us-electronics',
    client: 'US Electronics Brand',
    industry: 'Consumer Electronics',
    location: 'California, USA',
    duration: '4 months',
    value: '$280,000',
    challenge: 'An American electronics startup required custom PCBs and connectors with tight tolerances and specific certification requirements (UL, CE) for their new smart home device.',
    solution: 'We conducted thorough supplier verification, identified a certified factory with relevant experience, coordinated engineering samples, and arranged for pre-shipment inspection by an independent lab.',
    results: [
      'All products passed UL and CE certification',
      'Zero quality issues in first 10,000 unit shipment',
      '30% reduction in component costs',
      'Factory now produces 50,000 units/month',
    ],
    image: 'Electronics PCB manufacturing',
  },
  {
    id: 'australian-fitness',
    client: 'Australian Fitness Company',
    industry: 'Sports Equipment',
    location: 'Sydney, Australia',
    duration: '8 months',
    value: '$620,000',
    challenge: 'An Australian fitness equipment company needed to source gym equipment with specific safety standards for the Australian market (AS/NZS standards) and required a supplier capable of handling their growing order volumes.',
    solution: 'We verified multiple factories for Australian compliance, selected a manufacturer with existing AS/NZS certification experience, coordinated compliance testing, and managed the entire production and shipping process.',
    results: [
      'Full AS/NZS compliance achieved',
      'Successful delivery of 40ft container on schedule',
      '40% lower costs than previous supplier',
      'Partnership now in third year with growing volumes',
    ],
    image: 'Gym equipment manufacturing',
  },
  {
    id: 'uk-fashion',
    client: 'UK Fashion Brand',
    industry: 'Textiles & Apparel',
    location: 'London, UK',
    duration: '5 months',
    value: '$180,000',
    challenge: 'A British fashion brand wanted to move production from Southeast Asia to China for better pricing but needed suppliers who could match their quality standards and ethical manufacturing requirements.',
    solution: 'We identified ethical factories with relevant certifications, coordinated samples for fit and quality approval, negotiated favorable terms, and implemented a monitoring system for ongoing compliance.',
    results: [
      'Successfully transitioned production to China',
      '25% cost reduction while maintaining quality',
      'All factories passed ethical audit',
      'Now sourcing 5 product lines from 3 factories',
    ],
    image: 'Textile manufacturing facility',
  },
  {
    id: 'canadian-outdoor',
    client: 'Canadian Outdoor Gear Retailer',
    industry: 'Outdoor Recreation',
    location: 'Vancouver, Canada',
    duration: '7 months',
    value: '$350,000',
    challenge: 'A Canadian outdoor retailer needed to source camping equipment including tents, sleeping bags, and backpacks with specific temperature ratings and durability requirements for the Canadian climate.',
    solution: 'We verified factories with experience in cold-weather equipment, coordinated testing for temperature ratings, arranged for material inspection, and supervised production to ensure specifications were met.',
    results: [
      'All products met -40°C temperature rating',
      'Zero returns due to quality issues in first year',
      'Successful launch of winter product line',
      'Expanded to additional product categories',
    ],
    image: 'Outdoor equipment production',
  },
  {
    id: 'french-cosmetics',
    client: 'French Cosmetics Brand',
    industry: 'Beauty & Personal Care',
    location: 'Paris, France',
    duration: '9 months',
    value: '$520,000',
    challenge: 'A French cosmetics company needed to source skincare products and packaging with EU compliance (GMP, ISO 22716) and required suppliers capable of producing small batches for their premium product line.',
    solution: 'We identified GMP-certified factories, coordinated compliance audits, arranged for formulation review, and established quality control procedures meeting EU cosmetic regulations.',
    results: [
      'All products achieved EU cosmetic compliance',
      'Premium packaging received excellent customer feedback',
      'Successful entry into European market',
      'Partnership expanded to include new product development',
    ],
    image: 'Cosmetic manufacturing facility',
  },
]

const industries = [
  { name: 'Home Decor', count: 45 },
  { name: 'Electronics', count: 38 },
  { name: 'Sports Equipment', count: 32 },
  { name: 'Textiles', count: 28 },
  { name: 'Industrial Parts', count: 24 },
  { name: 'Packaging', count: 18 },
]

const CaseStudies = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Case Studies
          </h1>
          <p className="text-xl text-primary-100 max-w-2xl mx-auto">
            Real success stories from clients who trusted us with their China sourcing needs
          </p>
        </div>
      </section>

      {/* Industry Stats */}
      <section className="py-12 bg-surface border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-8">
            {industries.map((industry) => (
              <div key={industry.name} className="text-center">
                <div className="text-2xl font-bold text-primary">{industry.count}+</div>
                <div className="text-sm text-gray-600">{industry.name} Projects</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies List */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div 
                key={study.id}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-medium text-primary bg-primary-50 px-3 py-1 rounded-full">
                      {study.industry}
                    </span>
                    <span className="text-xs text-gray-500">{study.location}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{study.client}</h2>
                  
                  <div className="flex flex-wrap gap-4 mb-6 text-sm">
                    <div className="flex items-center gap-2 text-gray-600">
                      <Clock className="h-4 w-4" />
                      Duration: {study.duration}
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <DollarSign className="h-4 w-4" />
                      Value: {study.value}
                    </div>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Challenge</h3>
                      <p className="text-gray-600 text-sm">{study.challenge}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Our Solution</h3>
                      <p className="text-gray-600 text-sm">{study.solution}</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result) => (
                        <li key={result} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-success mt-0.5" />
                          {result}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className={`bg-surface rounded-2xl aspect-video flex items-center justify-center ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  <div className="text-center p-8">
                    <Package className="h-16 w-16 text-primary-300 mx-auto mb-4" />
                    <p className="text-primary-500 font-medium">{study.image}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-primary">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Let us help you overcome your China sourcing challenges. Submit your requirements today.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-primary-50">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
