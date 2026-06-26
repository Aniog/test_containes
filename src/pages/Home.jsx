import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Factory, Truck, Search, Package, Settings, Users, Globe, Award, Star, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

// Services data
const services = [
  {
    icon: Shield,
    title: 'Supplier Verification',
    description: 'We conduct thorough background checks on factories, verify business licenses, and assess production capabilities to ensure legitimacy.',
    link: '/services#verification',
  },
  {
    icon: Search,
    title: 'Quality Inspection',
    description: 'Our QC team performs inline, pre-shipment, and during-production inspections to ensure your products meet specifications.',
    link: '/services#inspection',
  },
  {
    icon: Factory,
    title: 'Production Follow-up',
    description: 'We monitor production progress, address issues promptly, and ensure on-time delivery with regular factory visits.',
    link: '/services#production',
  },
  {
    icon: Truck,
    title: 'Shipping & Logistics',
    description: 'We handle freight forwarding, customs clearance, and door-to-door delivery to simplify your supply chain.',
    link: '/services#shipping',
  },
  {
    icon: Package,
    title: 'Product Sourcing',
    description: 'We find qualified suppliers matching your requirements, negotiate competitive prices, and manage the entire sourcing process.',
    link: '/services#sourcing',
  },
  {
    icon: Settings,
    title: 'Custom Solutions',
    description: 'From OEM/ODM manufacturing to product development support, we tailor our services to your specific needs.',
    link: '/services#custom',
  },
];

// Problems we solve
const problems = [
  {
    title: 'Language & Cultural Barriers',
    solution: 'Our bilingual team bridges communication gaps, ensuring clear specifications and avoiding misunderstandings.',
  },
  {
    title: 'Quality Issues',
    solution: 'Regular inspections at key production stages catch defects early and ensure consistent quality.',
  },
  {
    title: 'Scam Prevention',
    solution: 'We verify factory credentials, visit facilities in person, and protect your interests throughout the process.',
  },
  {
    title: 'Logistics Complexity',
    solution: 'We handle all shipping documentation, customs, and freight forwarding for seamless delivery.',
  },
];

// Sourcing process steps
const processSteps = [
  {
    number: '01',
    title: 'Submit Request',
    description: 'Share your product requirements, quantity, and target price.',
  },
  {
    number: '02',
    title: 'Supplier Matching',
    description: 'We identify and vet qualified factories matching your criteria.',
  },
  {
    number: '03',
    title: 'Factory Verification',
    description: 'We visit the factory, verify capabilities, and negotiate terms.',
  },
  {
    number: '04',
    title: 'Production & QC',
    description: 'We monitor production and conduct quality inspections.',
  },
  {
    number: '05',
    title: 'Shipping & Delivery',
    description: 'We coordinate logistics and ensure on-time delivery.',
  },
];

// Products we source
const products = [
  { name: 'Electronics', description: 'Consumer electronics, components, gadgets' },
  { name: 'Machinery', description: 'Industrial equipment, parts, tools' },
  { name: 'Textiles', description: 'Fabrics, garments, accessories' },
  { name: 'Furniture', description: 'Home & office furniture, fixtures' },
  { name: 'Packaging', description: 'Boxes, labels, custom packaging' },
  { name: 'Consumer Goods', description: 'Daily use products, gifts, promotional items' },
];

// Trust stats
const trustStats = [
  { value: '500+', label: 'Suppliers Verified' },
  { value: '1,000+', label: 'Inspections Completed' },
  { value: '50+', label: 'Countries Served' },
  { value: '98%', label: 'Client Satisfaction' },
];

// Case studies
const caseStudies = [
  {
    industry: 'Electronics',
    challenge: 'A US retailer needed a reliable supplier for 50,000 smart home devices with strict quality requirements.',
    solution: 'We verified 15 factories, conducted sample testing, and performed pre-shipment inspections.',
    result: 'Delivered on time with 99.2% pass rate, saving 18% on costs.',
  },
  {
    industry: 'Furniture',
    challenge: 'A European importer wanted to source modern office furniture from China for the first time.',
    solution: 'We provided factory verification, production monitoring, and consolidated shipping.',
    result: 'Successfully imported 3 containers with zero damage, 15% under budget.',
  },
  {
    industry: 'Textiles',
    challenge: 'A fashion brand needed a manufacturer for custom apparel with sustainable materials.',
    solution: 'We sourced certified factories, negotiated MOQs, and implemented QC protocols.',
    result: 'Launched product line 2 weeks ahead of schedule with excellent quality.',
  },
];

// FAQ items
const faqItems = [
  {
    title: 'How do you verify suppliers?',
    content: 'We conduct comprehensive factory audits including business license verification, production capacity assessment, quality management systems review, and on-site facility inspections. We also check references and verify the factory\'s export history.',
  },
  {
    title: 'What quality inspection services do you offer?',
    content: 'We offer inline inspections (during production), pre-shipment inspections (before loading), and during-production inspections. Our detailed reports include photos, measurements, and compliance verification against your specifications.',
  },
  {
    title: 'How do you charge for your services?',
    content: 'Our pricing is project-based, depending on the scope of services required. We offer transparent quotes after understanding your specific needs. Most services include a combination of fixed fees and percentage-based fees.',
  },
  {
    title: 'Can you help with small orders?',
    content: 'Yes, we work with businesses of all sizes. While some factories have minimum order requirements, we can help negotiate flexible terms and may suggest alternative suppliers for smaller quantities.',
  },
  {
    title: 'How long does the sourcing process take?',
    content: 'The timeline varies based on product complexity and supplier availability. Typically, initial supplier shortlisting takes 1-2 weeks, sample evaluation takes 2-4 weeks, and production takes 4-8 weeks depending on order size.',
  },
  {
    title: 'Do you provide shipping and logistics?',
    content: 'Yes, we handle complete logistics including freight forwarding, customs clearance documentation, and can arrange door-to-door delivery. We work with reliable shipping partners to ensure competitive rates.',
  },
];

// Blog posts
const blogPosts = [
  {
    title: '10 Tips for Successful China Sourcing',
    excerpt: 'Learn the key strategies for finding reliable suppliers and avoiding common pitfalls when sourcing from China.',
    category: 'Sourcing Guide',
    date: 'June 15, 2026',
  },
  {
    title: 'Understanding Quality Control Standards',
    excerpt: 'A comprehensive guide to QC inspection points and how to ensure product quality meets your specifications.',
    category: 'Quality Control',
    date: 'June 8, 2026',
  },
  {
    title: 'Navigating Chinese Business Culture',
    excerpt: 'Essential tips for building strong relationships with Chinese suppliers and negotiating effectively.',
    category: 'Business Culture',
    date: 'June 1, 2026',
  },
];

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div 
            className="w-full h-full"
            data-strk-bg-id="hero-bg-001"
            data-strk-bg="[hero-title] [hero-subtitle]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1920"
            style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1 1\'/%3E")',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </div>
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="max-w-3xl">
            <h1 
              id="hero-title"
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E3A5F] leading-tight mb-6"
            >
              China Sourcing Agent for Global Buyers
            </h1>
            <p 
              id="hero-subtitle"
              className="text-lg md:text-xl text-[#64748B] mb-8 leading-relaxed"
            >
              We help overseas businesses find reliable suppliers, verify factories, 
              inspect quality, and coordinate seamless shipping. Your trusted partner 
              for successful China sourcing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="w-full sm:w-auto text-base">
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto text-base">
                  Learn How It Works
                </Button>
              </Link>
            </div>
            
            {/* Trust badges */}
            <div className="mt-12 pt-8 border-t border-[#E2E8F0]">
              <p className="text-sm text-[#64748B] mb-4">Trusted by buyers from</p>
              <div className="flex flex-wrap gap-8">
                {trustStats.slice(0, 4).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-bold text-[#1E3A5F]">{stat.value}</div>
                    <div className="text-xs text-[#64748B]">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-white" id="services">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Our Services
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              Comprehensive sourcing solutions to help you source from China with confidence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="group hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#F8FAFC] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#1E3A5F] transition-colors">
                    <service.icon className="w-6 h-6 text-[#1E3A5F] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">
                    {service.title}
                  </h3>
                  <p className="text-[#64748B] text-sm mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-[#F7931E] font-medium text-sm hover:underline"
                  >
                    Learn more <ChevronRight className="w-4 h-4 ml-1" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Problems We Solve Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-6">
                We Solve Your Sourcing Challenges
              </h2>
              <p className="text-[#64748B] mb-8 leading-relaxed">
                Sourcing from China comes with unique challenges. We help you overcome 
                them with our expertise and local presence.
              </p>
              <div className="space-y-6">
                {problems.map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <CheckCircle className="w-6 h-6 text-[#10B981] flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-[#1E293B] mb-1">
                        {item.title}
                      </h4>
                      <p className="text-sm text-[#64748B]">
                        {item.solution}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div 
                className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-[#1E3A5F] to-[#2D5A8A] flex items-center justify-center"
                data-strk-bg-id="problems-bg-001"
                data-strk-bg="[hero-title] sourcing challenges"
                data-strk-bg-ratio="1x1"
                data-strk-bg-width="600"
              >
                <div className="text-center p-8">
                  <Shield className="w-20 h-20 text-white/80 mx-auto mb-4" />
                  <p className="text-white/90 text-lg font-medium">
                    Your Trusted Partner in China
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing Process Section */}
      <section className="py-16 lg:py-24 bg-white" id="process">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Our Sourcing Process
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              A proven 5-step process to ensure successful sourcing from China
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-[#F8FAFC] rounded-xl p-6 h-full">
                  <div className="text-4xl font-bold text-[#F7931E]/20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#64748B]">
                    {step.description}
                  </p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-[#E2E8F0]" />
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button variant="outline" size="lg">
                Learn More About Our Process
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]" id="products">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Products We Source
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              We have expertise across a wide range of product categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow cursor-pointer"
              >
                <h3 className="font-semibold text-[#1E3A5F] mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-[#64748B]">
                  {product.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link to="/products">
              <Button variant="ghost">
                View All Categories <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Points Section */}
      <section className="py-16 lg:py-24 bg-[#1E3A5F]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose SSourcing China
            </h2>
            <p className="text-[#94A3B8] max-w-2xl mx-auto">
              Our track record speaks for itself
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-[#F7931E] mb-2">
                  {stat.value}
                </div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 text-white/80">
              <Award className="w-5 h-5 text-[#F7931E]" />
              <span className="text-sm">ISO 9001 Certified</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Users className="w-5 h-5 text-[#F7931E]" />
              <span className="text-sm">Expert Team</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Globe className="w-5 h-5 text-[#F7931E]" />
              <span className="text-sm">Global Network</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Star className="w-5 h-5 text-[#F7931E]" />
              <span className="text-sm">98% Success Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-16 lg:py-24 bg-white" id="case-studies">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Success Stories
            </h2>
            <p className="text-[#64748B] max-w-2xl mx-auto">
              See how we've helped businesses succeed with China sourcing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {caseStudies.map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-xs font-medium text-[#F7931E] uppercase tracking-wide mb-3">
                    {study.industry}
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#1E293B] mb-2">Challenge</h4>
                    <p className="text-sm text-[#64748B]">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-[#1E293B] mb-2">Solution</h4>
                    <p className="text-sm text-[#64748B]">{study.solution}</p>
                  </div>
                  <div className="pt-4 border-t border-[#E2E8F0]">
                    <h4 className="text-sm font-semibold text-[#10B981] mb-1">Result</h4>
                    <p className="text-sm text-[#64748B]">{study.result}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/case-studies">
              <Button variant="outline" size="lg">
                View All Case Studies
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]" id="faq">
        <div className="max-w-[800px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-[#64748B]">
              Get answers to common questions about our sourcing services
            </p>
          </div>
          
          <Accordion items={faqItems} />
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-16 lg:py-24 bg-white" id="contact">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-6">
                Ready to Start Sourcing?
              </h2>
              <p className="text-[#64748B] mb-8 leading-relaxed">
                Get in touch with our team for a free consultation and sourcing quote. 
                We'll help you find the right suppliers and ensure quality every step of the way.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F8FAFC] rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1E293B]">Office</p>
                    <p className="text-sm text-[#64748B]">Shenzhen, Guangdong, China</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F8FAFC] rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1E293B]">Phone</p>
                    <p className="text-sm text-[#64748B]">+86 755 8123 4567</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#F8FAFC] rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#1E3A5F]" />
                  </div>
                  <div>
                    <p className="font-medium text-[#1E293B]">Email</p>
                    <p className="text-sm text-[#64748B]">info@ssourcing-china.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-[#F8FAFC] rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-[#1E3A5F] mb-6">
                Get Your Free Quote
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your company name" />
                </div>
                <div>
                  <Label htmlFor="product">Product Interest *</Label>
                  <Input id="product" placeholder="What products do you need?" required />
                </div>
                <div>
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Tell us about your requirements..." rows={4} />
                </div>
                <Button type="submit" className="w-full" size="lg">
                  Submit Inquiry
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-16 lg:py-24 bg-[#F8FAFC]">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#1E3A5F] mb-4">
              Latest Insights
            </h2>
            <p className="text-[#64748B]">
              Expert tips and industry knowledge for successful China sourcing
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="text-xs font-medium text-[#F7931E] uppercase tracking-wide mb-2">
                    {post.category}
                  </div>
                  <h3 className="text-lg font-semibold text-[#1E3A5F] mb-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-[#64748B] mb-4">
                    {post.excerpt}
                  </p>
                  <p className="text-xs text-[#94A3B8]">{post.date}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/blog">
              <Button variant="outline" size="lg">
                View All Articles
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;