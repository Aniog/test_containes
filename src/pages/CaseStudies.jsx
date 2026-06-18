import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  ArrowRight, 
  CheckCircle, 
  TrendingUp, 
  Clock, 
  Shield,
  Star,
  Quote
} from 'lucide-react'

const caseStudies = [
  {
    id: 1,
    company: 'TechStart Inc.',
    industry: 'Electronics',
    location: 'USA',
    challenge: 'TechStart Inc., a Silicon Valley startup, needed to find a reliable manufacturer for 50,000 smart home devices. They had previously been scammed by a supplier and were hesitant to source from China.',
    solution: 'We conducted a thorough supplier verification process, identifying three qualified manufacturers. After sample evaluation, they selected a factory in Shenzhen with ISO 9001 certification.',
    results: [
      'Saved 30% on manufacturing costs',
      'Zero quality issues across all production runs',
      'Completed on-time delivery within 90 days',
      'Established a long-term partnership with verified supplier',
    ],
    testimonial: 'SSourcing China transformed our supply chain. Their verification process gave us confidence, and their quality inspections ensured we received exactly what we ordered.',
    person: 'Michael Chen',
    role: 'CEO, TechStart Inc.',
    category: 'Electronics',
    year: '2024',
  },
  {
    id: 2,
    company: 'Fashion Forward',
    industry: 'Apparel',
    location: 'UK',
    challenge: 'Fashion Forward, a sustainable fashion brand, needed to source organic cotton fabrics and manufactured garments from China. They required suppliers with specific environmental certifications.',
    solution: 'We identified and verified factories with GOTS and OEKO-TEX certifications. We coordinated sample development using their sustainable fabric specifications.',
    results: [
      'Connected with GOTS-certified factory',
      '20% faster lead times than previous supplier',
      'Achieved retail price points 25% below competitors',
      'Successfully launched sustainable line on schedule',
    ],
    testimonial: 'Finding a truly sustainable supplier seemed impossible until we worked with SSourcing China. They understood our requirements and found perfect matches.',
    person: 'Sarah Williams',
    role: 'Founder, Fashion Forward',
    category: 'Textiles',
    year: '2024',
  },
  {
    id: 3,
    company: 'BuildRight Co.',
    industry: 'Construction',
    location: 'Australia',
    challenge: 'BuildRight Co. needed a manufacturer for custom hardware components. Previous attempts to source directly had resulted in quality issues and communication problems.',
    solution: 'We found a manufacturer with ISO 9001 certification specializing in precision hardware. We conducted pre-production inspections and ongoing quality checks.',
    results: [
      '40% cost reduction from previous supplier',
      'Zero defective shipments over 12 months',
      'Improved product specifications through collaborative design',
      'Reduced lead time from 90 to 45 days',
    ],
    testimonial: 'The difference between sourcing directly and using SSourcing China is night and day. Their quality control saved us from potential disasters.',
    person: 'David Thompson',
    role: 'Procurement Director, BuildRight Co.',
    category: 'Machinery',
    year: '2023',
  },
  {
    id: 4,
    company: 'GreenHome Products',
    industry: 'Home & Garden',
    location: 'Germany',
    challenge: 'GreenHome Products wanted to expand their eco-friendly home product line with Chinese manufacturers. They needed help navigating certifications for the European market.',
    solution: 'We sourced suppliers with CE and LFGB certifications, coordinated sample testing, and handled all compliance documentation.',
    results: [
      'Successfully launched 15 new products',
      'All products passed EU compliance testing',
      '35% reduction in sourcing costs',
      'Established reliable supply chain for growth',
    ],
    testimonial: 'Their expertise in European compliance requirements was invaluable. We launched with confidence knowing our products met all regulations.',
    person: 'Hans Mueller',
    role: 'CEO, GreenHome Products',
    category: 'Home & Garden',
    year: '2024',
  },
  {
    id: 5,
    company: 'AutoParts Direct',
    industry: 'Automotive',
    location: 'Canada',
    challenge: 'AutoParts Direct needed to source replacement parts for the North American market. They required IATF 16949 certified suppliers with proven quality records.',
    solution: 'We verified multiple automotive suppliers, focusing on those with existing North American client relationships. We implemented a rigorous QC process.',
    results: [
      'Found 3 certified suppliers meeting all criteria',
      'Reduced defect rate from 5% to 0.5%',
      'Achieved IATF 16949 compliance for all products',
      'Expanded product line by 40 items',
    ],
    testimonial: 'The automotive industry has strict requirements. SSourcing China understood these and delivered suppliers who could meet our exacting standards.',
    person: 'James Wilson',
    role: 'VP Operations, AutoParts Direct',
    category: 'Automotive',
    year: '2023',
  },
  {
    id: 6,
    company: 'PlayTime Toys',
    industry: 'Toys & Gifts',
    location: 'USA',
    challenge: 'PlayTime Toys needed to bring a new line of educational toys to market. They needed help with product development, safety certifications, and manufacturing.',
    solution: 'We coordinated with a factory experienced in EN71 and ASTM certified toy manufacturing. We assisted with design improvements and packaging development.',
    results: [
      'Successfully developed 8 new products',
      'All products passed safety testing first time',
      'Manufacturing costs 40% below initial estimates',
      'Launched on schedule for holiday season',
    ],
    testimonial: 'They made the complex process of bringing a new toy to market surprisingly simple. We could not have done it without them.',
    person: 'Lisa Martinez',
    role: 'Product Director, PlayTime Toys',
    category: 'Toys',
    year: '2024',
  },
]

const stats = [
  { number: '500+', label: 'Clients Served' },
  { number: '10+', label: 'Years Experience' },
  { number: '2000+', label: 'Factories Verified' },
  { number: '98%', label: 'Client Satisfaction' },
]

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedStudy, setSelectedStudy] = useState(null)

  const categories = ['all', 'Electronics', 'Textiles', 'Machinery', 'Home & Garden', 'Automotive', 'Toys']

  const filteredStudies = activeCategory === 'all' 
    ? caseStudies 
    : caseStudies.filter(s => s.category === activeCategory)

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Success Stories
            </h1>
            <p className="text-xl text-gray-300">
              Real results from clients who trusted us with their China sourcing
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-blue-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category === 'all' ? 'All Industries' : category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStudies.map((study) => (
              <div 
                key={study.id} 
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="h-32 bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center">
                  <span className="text-white/30 text-5xl font-bold">{study.category[0]}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm text-blue-600 font-medium">{study.industry}</span>
                    <span className="text-sm text-gray-500">{study.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{study.company}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{study.challenge}</p>
                  <button
                    onClick={() => setSelectedStudy(study)}
                    className="text-blue-900 font-medium text-sm flex items-center hover:text-blue-700"
                  >
                    Read Full Story <ArrowRight className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      {selectedStudy && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex items-center justify-between mb-6">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                  {selectedStudy.category}
                </span>
                <button
                  onClick={() => setSelectedStudy(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  &times;
                </button>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedStudy.company}</h2>
              <p className="text-gray-600 mb-6">{selectedStudy.location} | {selectedStudy.industry}</p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">The Challenge</h3>
                  <p className="text-gray-600">{selectedStudy.challenge}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Our Solution</h3>
                  <p className="text-gray-600">{selectedStudy.solution}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Results</h3>
                  <ul className="space-y-2">
                    {selectedStudy.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6">
                  <Quote className="w-8 h-8 text-blue-900 mb-3" />
                  <p className="text-gray-700 italic mb-4">"{selectedStudy.testimonial}"</p>
                  <div>
                    <div className="font-semibold text-gray-900">{selectedStudy.person}</div>
                    <div className="text-sm text-gray-600">{selectedStudy.role}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-blue-200 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their China sourcing experience.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies