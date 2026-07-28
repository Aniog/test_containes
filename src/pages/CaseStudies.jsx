import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  ArrowRight, Mail, Star, Users, TrendingUp, CheckCircle, Quote
} from 'lucide-react'

const SectionHeader = ({ eyebrow, title, description, centered = true }) => (
  <div className={`mb-12 ${centered ? 'text-center max-w-3xl mx-auto' : ''}`}>
    {eyebrow && <p className="text-blue-700 font-semibold text-sm uppercase tracking-wider mb-3">{eyebrow}</p>}
    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
    {description && <p className="text-slate-600 text-lg leading-relaxed">{description}</p>}
  </div>
)

const caseStudies = [
  {
    id: 'techretail-electronics',
    industry: 'Consumer Electronics',
    client: 'TechRetail GmbH',
    location: 'Germany',
    challenge: 'TechRetail needed to source a new line of Bluetooth speakers with strict quality requirements, competitive pricing, and a tight timeline to meet the holiday selling season.',
    solution: 'We identified and verified 4 factories specializing in audio equipment. Implemented a multi-stage QC process including pre-production samples, during-production checks, and comprehensive pre-shipment inspection. Coordinated air freight to meet the tight deadline.',
    results: [
      { metric: '99.2%', label: 'Customer satisfaction rate' },
      { metric: '18%', label: 'Cost savings vs. previous supplier' },
      { metric: '12 weeks', label: 'From inquiry to delivery' },
    ],
    testimonial: {
      text: "SSourcing China transformed our sourcing process. Their verification services gave us confidence in our supplier choice, and the QC inspections caught issues we would have missed. Our product quality has improved significantly.",
      author: 'Michael Schneider',
      role: 'Procurement Director',
    },
    imageId: 'casestudy-electronics-001',
    imageQuery: 'electronics manufacturing quality control',
  },
  {
    id: 'nordic-furniture',
    industry: 'Home Furnishings',
    client: 'Nordic Living AB',
    location: 'Sweden',
    challenge: 'Nordic Living was sourcing furniture components from multiple suppliers but struggled with inconsistent quality, communication barriers, and logistics complexity.',
    solution: 'We established a unified supplier network with standardized quality requirements. Implemented regular production monitoring and coordinated consolidated shipping through our logistics partners.',
    results: [
      { metric: '23%', label: 'Reduction in sourcing costs' },
      { metric: '100%', label: 'Quality consistency achieved' },
      { metric: '35%', label: 'Faster delivery times' },
    ],
    testimonial: {
      text: "The consolidation of our supplier base and the consistent quality we now receive have been game-changers. The team handles everything professionally and keeps us informed throughout the process.",
      author: 'Anna Lindström',
      role: 'CEO',
    },
    imageId: 'casestudy-furniture-001',
    imageQuery: 'furniture manufacturing workshop production',
  },
  {
    id: 'fitlife-sports',
    industry: 'Sports Equipment',
    client: 'FitLife Sports Inc.',
    location: 'United States',
    challenge: 'FitLife needed to expand their home fitness product line with resistance bands, yoga mats, and accessories, but lacked the expertise to verify supplier claims and ensure product safety compliance.',
    solution: 'We conducted thorough factory verification including safety certification checks. Implemented lab testing coordination and worked with certified testing facilities. Established ongoing QC protocols for all products.',
    results: [
      { metric: '50+', label: 'New products launched' },
      { metric: '100%', label: 'Safety compliance achieved' },
      { metric: '30%', label: 'Faster time-to-market' },
    ],
    testimonial: {
      text: "Their understanding of safety regulations and attention to detail in supplier verification saved us from potential liability issues. The lab testing coordination was seamless and thorough.",
      author: 'David Chen',
      role: 'Product Development Manager',
    },
    imageId: 'casestudy-sports-001',
    imageQuery: 'fitness equipment gym products manufacturing',
  },
  {
    id: 'packpro-packaging',
    industry: 'Packaging Solutions',
    client: 'PackPro Ltd.',
    location: 'United Kingdom',
    challenge: 'PackPro needed sustainable packaging solutions for their cosmetics clients, requiring both eco-friendly materials and attractive presentation at competitive prices.',
    solution: 'Identified certified eco-friendly manufacturers capable of producing premium packaging. Coordinated samples from multiple suppliers, conducted comparative quality assessments, and negotiated favorable terms.',
    results: [
      { metric: '15', label: 'Sustainable suppliers added' },
      { metric: '40%', label: 'Material cost reduction' },
      { metric: '100%', label: 'Certifications verified' },
    ],
    testimonial: {
      text: "Finding suppliers who could meet both our sustainability requirements and quality standards seemed impossible until we worked with SSourcing China. They found us options we didn't know existed.",
      author: 'Sarah Mitchell',
      role: 'Head of Procurement',
    },
    imageId: 'casestudy-packaging-001',
    imageQuery: 'sustainable packaging manufacturing factory',
  },
]

const CaseStudies = () => {
  const containerRef = useRef(null)
  const [activeCase, setActiveCase] = useState(0)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  const currentCase = caseStudies[activeCase]

  return (
    <div ref={containerRef}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 to-slate-900 text-white py-24">
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute inset-0"
            data-strk-bg-id="casestudies-hero-bg"
            data-strk-bg="business success partnership collaboration"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white">Case Studies</span>
          </nav>
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Case Studies</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Real stories of businesses that transformed their China sourcing with our professional support and established supplier networks.
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="Featured Success Story"
            title={currentCase.client}
            description={`${currentCase.industry} | ${currentCase.location}`}
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Content */}
            <div>
              {/* Case Details */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                      <TrendingUp className="w-4 h-4 text-blue-700" />
                    </span>
                    The Challenge
                  </h3>
                  <p className="text-slate-600 leading-relaxed ml-10">{currentCase.challenge}</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">
                    <span className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-teal-700" />
                    </span>
                    Our Solution
                  </h3>
                  <p className="text-slate-600 leading-relaxed ml-10">{currentCase.solution}</p>
                </div>

                {/* Results */}
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Star className="w-4 h-4 text-orange-600" />
                    </span>
                    Results Achieved
                  </h3>
                  <div className="grid grid-cols-3 gap-4 ml-10">
                    {currentCase.results.map((result, index) => (
                      <div key={index} className="bg-slate-50 rounded-xl p-4 text-center">
                        <p className="text-2xl md:text-3xl font-bold text-orange-500">{result.metric}</p>
                        <p className="text-slate-600 text-sm mt-1">{result.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-10 bg-blue-50 rounded-2xl p-8 ml-10">
                <Quote className="w-10 h-10 text-blue-300 mb-4" />
                <p className="text-slate-700 italic text-lg leading-relaxed mb-6">
                  "{currentCase.testimonial.text}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center">
                    <span className="text-blue-700 font-bold">
                      {currentCase.testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">{currentCase.testimonial.author}</p>
                    <p className="text-slate-600 text-sm">{currentCase.testimonial.role}, {currentCase.client}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative">
              <div className="sticky top-32">
                <div className="absolute -top-4 -left-4 w-full h-full bg-slate-200 rounded-2xl" />
                <img
                  data-strk-img-id={currentCase.imageId}
                  data-strk-img={currentCase.imageQuery}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={`${currentCase.client} case study`}
                  className="relative rounded-2xl shadow-xl w-full"
                />
              </div>
            </div>
          </div>

          {/* Case Studies Selector */}
          <div className="mt-16">
            <h3 className="text-lg font-bold text-slate-900 mb-6">View More Case Studies</h3>
            <div className="grid md:grid-cols-4 gap-4">
              {caseStudies.map((study, index) => (
                <button
                  key={study.id}
                  onClick={() => setActiveCase(index)}
                  className={`text-left p-4 rounded-xl border-2 transition-all ${
                    activeCase === index
                      ? 'border-blue-600 bg-blue-50'
                      : 'border-slate-200 bg-white hover:border-slate-300'
                  }`}
                >
                  <span className={`inline-block text-xs font-semibold px-2 py-1 rounded mb-2 ${
                    activeCase === index ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-700'
                  }`}>
                    {study.industry}
                  </span>
                  <p className="font-semibold text-slate-900">{study.client}</p>
                  <p className="text-slate-500 text-sm">{study.location}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* More Case Studies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeader
            eyebrow="More Success Stories"
            title="Additional Case Studies"
            description="Explore more examples of how we've helped businesses succeed with China sourcing."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.slice(1, 4).map((study) => (
              <div
                key={study.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-lg transition-shadow"
              >
                <div className="h-48 bg-slate-200 relative">
                  <img
                    data-strk-img-id={`related-${study.id}`}
                    data-strk-img={study.imageQuery}
                    data-strk-img-ratio="16x9"
                    data-strk-img-width="400"
                    src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                    alt={study.client}
                    className="w-full h-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{study.client}</h3>
                  <p className="text-slate-500 text-sm mb-4">{study.location}</p>
                  <div className="flex flex-wrap gap-2">
                    {study.results.slice(0, 2).map((result, index) => (
                      <span key={index} className="bg-slate-100 text-slate-700 text-xs font-medium px-2 py-1 rounded">
                        {result.metric} {result.label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-800 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let us help you find reliable suppliers and streamline your China sourcing process.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-md font-bold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="mailto:info@ssourcing.cn"
              className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-md font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CaseStudies
