import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ImageHelper } from '@strikingly/sdk'
import strkImgConfig from '@/strk-img-config.json'
import {
  ArrowRight,
  CheckCircle,
  Shield,
  Search,
  Factory,
  Ship,
  Package,
  MessageSquare,
  Truck,
  AlertTriangle,
  ShieldAlert,
  MessageCircle,
  DollarSign,
  Clock,
  MapPin,
  Users,
  Award,
  FileCheck,
  Handshake,
  Globe,
  Star,
  ChevronDown,
  ChevronUp,
  Send,
  Phone,
  Mail,
} from 'lucide-react'
import Layout from '@/components/layout/Layout'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
  stats,
  services,
  processSteps,
  productCategories,
  problemsSolved,
  caseStudies,
  testimonials,
  faqItems,
  trustPoints,
  siteConfig,
} from '@/data/siteData'

const iconMap = {
  Shield,
  CheckCircle,
  Search,
  Factory,
  Ship,
  Package,
  MessageSquare,
  Truck,
  AlertTriangle,
  ShieldAlert,
  MessageCircle,
  DollarSign,
  Clock,
  MapPin,
  Users,
  Award,
  FileCheck,
  Handshake,
  Globe,
}

// Hero Section
const HeroSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="relative bg-gradient-to-br from-[#0F2B5B] via-[#1E3A6E] to-[#1E5BB8] text-white overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 opacity-20"
        data-strk-bg-id="hero-bg-home"
        data-strk-bg="[hero-title] [hero-subtitle] china factory warehouse"
        data-strk-bg-ratio="16x9"
        data-strk-bg-width="1600"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0F2B5B]/90 to-[#1E5BB8]/80" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-6 bg-white/10 text-white border-white/20 hover:bg-white/20">
            Trusted by 500+ Global Buyers
          </Badge>
          <h1 id="hero-title" className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
            China Sourcing Agent for Global Buyers
          </h1>
          <p id="hero-subtitle" className="text-lg md:text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Find reliable Chinese suppliers, verify factories, control quality, and coordinate shipping — all with one trusted partner. Save time, reduce risk, and lower costs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#0F2B5B] font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Get a Free Sourcing Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/how-it-works"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-colors text-lg"
            >
              How It Works
            </Link>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>No Hidden Fees</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Factory Direct Prices</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Stats Section
const StatsSection = () => (
  <section className="bg-[#F7F8FA] border-y border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[#0F2B5B] mb-2">{stat.number}</div>
            <div className="text-[#4A5568] text-sm md:text-base">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
)

// Services Section
const ServicesSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-50 text-[#1E5BB8]">Our Services</Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F2B5B] mb-4">
            Comprehensive Sourcing Solutions
          </h2>
          <p className="text-[#4A5568] text-lg max-w-3xl mx-auto">
            We handle every aspect of your China sourcing journey, from finding the right suppliers to delivering products to your door.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.slice(0, 6).map((service) => {
            const Icon = iconMap[service.icon]
            return (
              <Card key={service.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <CardContent className="p-6 md:p-8">
                  <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#1E5BB8] transition-colors">
                    {Icon && <Icon className="w-7 h-7 text-[#1E5BB8] group-hover:text-white transition-colors" />}
                  </div>
                  <h3 className="text-xl font-semibold text-[#0F2B5B] mb-3">{service.title}</h3>
                  <p className="text-[#4A5568] mb-4 leading-relaxed">{service.shortDesc}</p>
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1 text-[#1E5BB8] font-medium text-sm hover:gap-2 transition-all"
                  >
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Service image */}
        <div className="mt-16 relative rounded-2xl overflow-hidden">
          <img
            data-strk-img-id="services-quality-control"
            data-strk-img="[services-heading] quality control inspection factory workers"
            data-strk-img-ratio="16x9"
            data-strk-img-width="1200"
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
            alt="Quality control inspection at Chinese factory"
            className="w-full h-64 md:h-80 lg:h-96 object-cover"
            id="services-heading"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F2B5B]/80 to-transparent flex items-end">
            <div className="p-8 text-white">
              <h3 className="text-2xl font-bold mb-2">Professional Quality Control</h3>
              <p className="text-blue-100">Our QC team inspects every order before shipment</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Process Section
const ProcessSection = () => (
  <section className="py-20 md:py-24 bg-[#F7F8FA]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-blue-50 text-[#1E5BB8]">How It Works</Badge>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F2B5B] mb-4">
          Simple 5-Step Sourcing Process
        </h2>
        <p className="text-[#4A5568] text-lg max-w-3xl mx-auto">
          From initial inquiry to final delivery, we make sourcing from China straightforward and transparent.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
        {processSteps.map((step, index) => {
          const Icon = iconMap[step.icon]
          return (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 text-center h-full border border-gray-100 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-[#1E5BB8] rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                  {step.number}
                </div>
                {Icon && <Icon className="w-8 h-8 text-[#1E5BB8] mx-auto mb-3" />}
                <h3 className="text-lg font-semibold text-[#0F2B5B] mb-2">{step.title}</h3>
                <p className="text-[#4A5568] text-sm leading-relaxed">{step.description}</p>
              </div>
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-2 transform -translate-y-1/2">
                  <ArrowRight className="w-4 h-4 text-[#1E5BB8]" />
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/how-it-works"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E5BB8] text-white font-semibold rounded-lg hover:bg-[#0F2B5B] transition-colors shadow-md"
        >
          Learn More About Our Process
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  </section>
)

// Products Section
const ProductsSection = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current)
  }, [])

  return (
    <section ref={containerRef} className="py-20 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-50 text-[#1E5BB8]">Product Categories</Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F2B5B] mb-4">
            Products We Source
          </h2>
          <p className="text-[#4A5568] text-lg max-w-3xl mx-auto">
            We source a wide range of products across multiple industries. Whatever you need, we can find the right supplier.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {productCategories.slice(0, 8).map((category) => (
            <Card key={category.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <img
                  data-strk-img-id={`product-${category.id}`}
                  data-strk-img={`[${category.id}-desc] ${category.title} china manufacturing`}
                  data-strk-img-ratio="4x3"
                  data-strk-img-width="600"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt={category.title}
                  className="w-full h-40 object-cover rounded-lg mb-4"
                  id={`${category.id}-desc`}
                />
                <h3 className="text-lg font-semibold text-[#0F2B5B] mb-2">{category.title}</h3>
                <p className="text-[#4A5568] text-sm mb-3">{category.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {category.examples.map((example, i) => (
                    <span key={i} className="text-xs bg-blue-50 text-[#1E5BB8] px-2 py-1 rounded">
                      {example}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-[#1E5BB8] text-[#1E5BB8] font-semibold rounded-lg hover:bg-[#1E5BB8] hover:text-white transition-colors"
          >
            View All Product Categories
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}

// Problems Solved Section
const ProblemsSection = () => (
  <section className="py-20 md:py-24 bg-[#F7F8FA]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-blue-50 text-[#1E5BB8]">Why Choose Us</Badge>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F2B5B] mb-4">
          Problems We Solve
        </h2>
        <p className="text-[#4A5568] text-lg max-w-3xl mx-auto">
          International sourcing comes with challenges. We have the solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {problemsSolved.map((item, index) => {
          const Icon = iconMap[item.icon]
          return (
            <div key={index} className="bg-white rounded-xl p-6 md:p-8 border border-gray-100 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-red-50 rounded-lg flex items-center justify-center flex-shrink-0">
                  {Icon && <Icon className="w-6 h-6 text-red-500" />}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[#0F2B5B] mb-2">{item.problem}</h3>
                  <p className="text-[#4A5568] text-sm leading-relaxed">{item.solution}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </section>
)

// Trust Points Section
const TrustSection = () => (
  <section className="py-20 md:py-24 bg-[#0F2B5B] text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-white/10 text-white border-white/20">Why Trust Us</Badge>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
          Your Reliable Partner in China
        </h2>
        <p className="text-blue-200 text-lg max-w-3xl mx-auto">
          With over 15 years of experience and a team based in Shenzhen, we have the expertise and local knowledge to make your sourcing successful.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {trustPoints.map((point, index) => {
          const Icon = iconMap[point.icon]
          return (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors">
              <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                {Icon && <Icon className="w-7 h-7 text-blue-300" />}
              </div>
              <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
              <p className="text-blue-200 leading-relaxed">{point.description}</p>
            </div>
          )
        })}
      </div>
    </div>
  </section>
)

// Case Studies Section
const CaseStudiesSection = () => (
  <section className="py-20 md:py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-blue-50 text-[#1E5BB8]">Success Stories</Badge>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F2B5B] mb-4">
          Case Studies
        </h2>
        <p className="text-[#4A5568] text-lg max-w-3xl mx-auto">
          See how we've helped businesses like yours succeed with China sourcing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {caseStudies.map((study) => (
          <Card key={study.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6 md:p-8">
              <Badge className="mb-4 bg-blue-50 text-[#1E5BB8]">{study.industry}</Badge>
              <h3 className="text-xl font-semibold text-[#0F2B5B] mb-3">{study.client}</h3>
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-sm font-semibold text-[#4A5568] uppercase tracking-wider mb-1">Challenge</h4>
                  <p className="text-[#4A5568] text-sm">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#4A5568] uppercase tracking-wider mb-1">Solution</h4>
                  <p className="text-[#4A5568] text-sm">{study.solution}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#4A5568] uppercase tracking-wider mb-1">Result</h4>
                  <p className="text-[#4A5568] text-sm">{study.result}</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                {Object.entries(study.stats).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-lg font-bold text-[#1E5BB8]">{value}</div>
                    <div className="text-xs text-[#4A5568] capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/case-studies"
          className="inline-flex items-center gap-2 px-8 py-4 bg-[#1E5BB8] text-white font-semibold rounded-lg hover:bg-[#0F2B5B] transition-colors shadow-md"
        >
          View All Case Studies
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    </div>
  </section>
)

// Testimonials Section
const TestimonialsSection = () => (
  <section className="py-20 md:py-24 bg-[#F7F8FA]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-blue-50 text-[#1E5BB8]">Client Testimonials</Badge>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F2B5B] mb-4">
          What Our Clients Say
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-white">
            <CardContent className="p-6 md:p-8">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-[#4A5568] mb-6 leading-relaxed italic">"{testimonial.text}"</p>
              <div>
                <div className="font-semibold text-[#0F2B5B]">{testimonial.name}</div>
                <div className="text-sm text-[#4A5568]">{testimonial.company}</div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
)

// FAQ Section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-blue-50 text-[#1E5BB8]">FAQ</Badge>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F2B5B] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-[#4A5568] text-lg">
            Common questions about sourcing from China with our help.
          </p>
        </div>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-[#0F2B5B] pr-4">{item.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-[#1E5BB8] flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#4A5568] flex-shrink-0" />
                )}
              </button>
              {openIndex === index && (
                <div className="px-5 md:px-6 pb-5 md:pb-6">
                  <p className="text-[#4A5568] leading-relaxed">{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// Inquiry Form Section
const InquirySection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  })
  const [status, setStatus] = useState('idle')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('submitting')
    // Simulate form submission
    setTimeout(() => {
      setStatus('success')
      setFormData({ name: '', email: '', company: '', phone: '', product: '', quantity: '', message: '' })
    }, 1500)
  }

  return (
    <section className="py-20 md:py-24 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left content */}
          <div>
            <Badge className="mb-4 bg-blue-50 text-[#1E5BB8]">Get Started</Badge>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0F2B5B] mb-4">
              Get a Free Sourcing Quote
            </h2>
            <p className="text-[#4A5568] text-lg mb-8 leading-relaxed">
              Tell us about your sourcing needs and we'll provide a detailed quote within 24 hours. No obligation, no hidden fees.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#1E5BB8]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F2B5B] mb-1">Fast Response</h4>
                  <p className="text-[#4A5568] text-sm">We respond to all inquiries within 24 business hours.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-[#1E5BB8]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F2B5B] mb-1">No Obligation</h4>
                  <p className="text-[#4A5568] text-sm">Get a quote with no commitment required.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <DollarSign className="w-6 h-6 text-[#1E5BB8]" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F2B5B] mb-1">Transparent Pricing</h4>
                  <p className="text-[#4A5568] text-sm">Detailed cost breakdown with no hidden charges.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-white rounded-xl border border-gray-100">
              <h4 className="font-semibold text-[#0F2B5B] mb-3">Prefer to talk directly?</h4>
              <div className="space-y-2">
                <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 text-[#1E5BB8] hover:underline">
                  <Phone className="w-4 h-4" />
                  {siteConfig.phone}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2 text-[#1E5BB8] hover:underline">
                  <Mail className="w-4 h-4" />
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </div>

          {/* Right form */}
          <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
            {status === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-[#0F2B5B] mb-2">Thank You!</h3>
                <p className="text-[#4A5568] mb-6">We've received your inquiry and will respond within 24 hours.</p>
                <Button onClick={() => setStatus('idle')} className="bg-[#1E5BB8] hover:bg-[#0F2B5B]">
                  Submit Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="text-xl font-semibold text-[#0F2B5B] mb-2">Sourcing Inquiry Form</h3>
                <p className="text-sm text-[#4A5568] mb-6">Fields marked with * are required</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@company.com"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company Name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="product">Product Needed *</Label>
                    <Input
                      id="product"
                      name="product"
                      value={formData.product}
                      onChange={handleChange}
                      required
                      placeholder="e.g., Bluetooth speakers"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="quantity">Estimated Quantity</Label>
                    <Input
                      id="quantity"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleChange}
                      placeholder="e.g., 1000 units"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Additional Details</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Please describe your requirements, target price, specifications, timeline, etc."
                    rows={4}
                    className="mt-1"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-[#1E5BB8] hover:bg-[#0F2B5B] py-3 text-lg font-semibold"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></span>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Get Your Free Quote
                    </span>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

// Main Home Page Component
const Home = () => {
  return (
    <Layout
      title="China Sourcing Agent for Global Buyers"
      description="SSourcing China - Your trusted China sourcing agent. We help global buyers find reliable suppliers, verify factories, control quality, and coordinate shipping from China."
    >
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <ProcessSection />
      <ProductsSection />
      <ProblemsSection />
      <TrustSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <FAQSection />
      <InquirySection />
    </Layout>
  )
}

export default Home
