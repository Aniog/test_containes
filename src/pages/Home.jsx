import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  ShieldCheck, 
  ClipboardCheck, 
  Ship, 
  CheckCircle, 
  ArrowRight, 
  Factory, 
  PackageCheck, 
  Globe,
  Users,
  Award,
  Clock,
  ChevronRight,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Toaster } from '@/components/ui/sonner';
import { toast } from 'sonner';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { createInquiry } from '@/api/inquiries';

const Home = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const processRef = useRef(null);
  const productsRef = useRef(null);
  const problemsRef = useRef(null);
  const trustRef = useRef(null);
  const casesRef = useRef(null);
  const faqRef = useRef(null);
  const inquiryRef = useRef(null);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, heroRef.current);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, servicesRef.current);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, processRef.current);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, productsRef.current);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, problemsRef.current);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, trustRef.current);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, casesRef.current);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, faqRef.current);
  }, []);

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, inquiryRef.current);
  }, []);

  const [inquiryStatus, setInquiryStatus] = useState('idle');
  const [inquiryError, setInquiryError] = useState(null);

  const handleInquirySubmit = async (e) => {
    e.preventDefault();
    setInquiryError(null);
    setInquiryStatus('submitting');

    const form = e.target;
    const data = new FormData(form);
    const message = (data.get('message') || '').toString().trim();
    const product = (data.get('product') || '').toString().trim();

    if (!message) {
      setInquiryError('Please describe your requirements.');
      setInquiryStatus('error');
      return;
    }

    try {
      await createInquiry({
        name: (data.get('name') || '').toString().trim(),
        email: (data.get('email') || '').toString().trim(),
        company: (data.get('company') || '').toString().trim(),
        phone: '',
        productCategory: product,
        message,
      });

      setInquiryStatus('success');
      toast.success('Thank you! Your inquiry has been submitted. We will contact you within 24 hours.');
      form.reset();
    } catch (err) {
      console.error(err);
      setInquiryError(err.message || 'Submission failed');
      setInquiryStatus('error');
    }
  };

  const services = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: 'Supplier Sourcing',
      description: 'Find verified manufacturers and suppliers matching your product requirements, budget, and quality standards.'
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-blue-600" />,
      title: 'Factory Verification',
      description: 'On-site factory audits to verify business licenses, production capacity, quality systems, and compliance.'
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-blue-600" />,
      title: 'Quality Inspection',
      description: 'Pre-production, during-production, and pre-shipment inspections to ensure products meet your specifications.'
    },
    {
      icon: <Ship className="w-8 h-8 text-blue-600" />,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics management including freight forwarding, customs clearance, and door-to-door delivery.'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Share Your Requirements',
      description: 'Tell us about your product, quantity, budget, and quality requirements. We review your needs and create a sourcing plan.'
    },
    {
      step: '02',
      title: 'Supplier Matching',
      description: 'We search our verified supplier network and present you with 3-5 qualified manufacturers that match your criteria.'
    },
    {
      step: '03',
      title: 'Verification & Negotiation',
      description: 'We verify factory credentials, conduct audits if needed, and negotiate pricing, terms, and quality standards on your behalf.'
    },
    {
      step: '04',
      title: 'Production Monitoring',
      description: 'We monitor production progress, conduct inspections, and provide you with regular updates and photos.'
    },
    {
      step: '05',
      title: 'Shipping & Delivery',
      description: 'We coordinate logistics, handle documentation, and ensure safe delivery to your warehouse or distribution center.'
    }
  ];

  const products = [
    'Electronics & Components',
    'Textiles & Apparel',
    'Home & Garden',
    'Toys & Gifts',
    'Auto Parts',
    'Industrial Equipment',
    'Packaging Materials',
    'Health & Beauty',
    'Sports & Outdoors',
    'Jewelry & Accessories'
  ];

  const problems = [
    {
      icon: <Factory className="w-6 h-6" />,
      title: 'Unreliable Suppliers',
      description: 'We verify every supplier through factory audits, business license checks, and reference verification.'
    },
    {
      icon: <PackageCheck className="w-6 h-6" />,
      title: 'Quality Issues',
      description: 'Our QC team conducts multiple inspections to catch defects before they reach your customers.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Communication Gaps',
      description: 'We bridge language and cultural barriers with dedicated sourcing agents who speak your language.'
    },
    {
      icon: <Ship className="w-6 h-6" />,
      title: 'Shipping Delays',
      description: 'We manage logistics end-to-end and proactively resolve issues to keep your shipments on schedule.'
    }
  ];

  const trustPoints = [
    {
      icon: <Users className="w-8 h-8" />,
      stat: '500+',
      label: 'Verified Suppliers'
    },
    {
      icon: <Award className="w-8 h-8" />,
      stat: '10+',
      label: 'Years Experience'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      stat: '30+',
      label: 'Countries Served'
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      stat: '98%',
      label: 'Client Satisfaction'
    }
  ];

  const caseStudies = [
    {
      title: 'Electronics Manufacturer for US Retailer',
      category: 'Electronics',
      result: 'Reduced costs by 22% while improving quality'
    },
    {
      title: 'Textile Supplier for European Brand',
      category: 'Textiles',
      result: 'Found 3 qualified suppliers in 2 weeks'
    },
    {
      title: 'Industrial Parts for Canadian Distributor',
      category: 'Industrial',
      result: 'Passed 100% pre-shipment inspection'
    }
  ];

  const faqs = [
    {
      question: 'What is a sourcing agent?',
      answer: 'A sourcing agent is a professional who helps overseas buyers find and work with reliable suppliers in China. We handle supplier search, verification, negotiation, quality control, and shipping coordination so you can focus on your business.'
    },
    {
      question: 'How much does your service cost?',
      answer: 'Our pricing depends on the scope of work. We typically charge a percentage of the order value or a fixed project fee. Contact us for a customized quote based on your specific needs.'
    },
    {
      question: 'Do you work with small orders?',
      answer: 'Yes, we work with businesses of all sizes. Whether you need 100 units or 100,000, we can help you find the right supplier and manage the process.'
    },
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct factory audits, verify business licenses, check references, and assess production capacity. For critical suppliers, we also perform on-site visits and quality system evaluations.'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'We have experience across multiple industries including electronics, textiles, home goods, industrial equipment, and more. Our team includes specialists with deep knowledge in key product categories.'
    }
  ];

  return (
    <div>
      <Toaster />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div 
            data-strk-bg-id="hero-bg-8f2a9c"
            data-strk-bg="[hero-subtitle] [hero-title]"
            data-strk-bg-ratio="16x9"
            data-strk-bg-width="1600"
            className="w-full h-full"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <h1 id="hero-title" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              China Sourcing Agent for Global Buyers
            </h1>
            <p id="hero-subtitle" className="text-xl md:text-2xl text-slate-300 mb-8">
              Find reliable suppliers, verify factories, inspect quality, and coordinate shipping from China with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
                  Get a Free Sourcing Quote
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900 px-8 py-3 text-lg">
                  See How It Works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              End-to-End Sourcing Services
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From finding suppliers to delivering products, we handle every step of your China sourcing journey.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="mb-4">{service.icon}</div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How Our Sourcing Process Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A proven 5-step process that has helped hundreds of businesses source products from China successfully.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-6xl font-bold text-blue-100 mb-4">{step.step}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200 -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button variant="outline" size="lg">
                Learn More About Our Process
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section ref={productsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We source a wide range of products across multiple industries. Here are some of the categories we specialize in.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="bg-slate-50 rounded-lg p-4 text-center hover:bg-blue-50 hover:text-blue-700 transition-colors cursor-pointer"
              >
                <p className="font-medium">{product}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/products">
              <Button variant="outline" size="lg">
                View All Product Categories
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section ref={problemsRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Problems We Solve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Common challenges overseas buyers face when sourcing from China, and how we help you overcome them.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {problems.map((problem, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                    {problem.icon}
                  </div>
                  <CardTitle className="text-xl">{problem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{problem.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section ref={trustRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Why Buyers Trust SSourcing China
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We have built a reputation for reliability, transparency, and results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                  {point.icon}
                </div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{point.stat}</div>
                <div className="text-slate-600">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section ref={casesRef} className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Case Studies
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Real results for real businesses. See how we have helped companies like yours succeed in China sourcing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="text-sm font-medium text-blue-600 mb-2">{caseStudy.category}</div>
                  <CardTitle className="text-xl">{caseStudy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{caseStudy.result}</p>
                  <Link to="/case-studies" className="text-blue-600 hover:text-blue-700 font-medium inline-flex items-center">
                    Read Case Study <ChevronRight className="ml-1 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/case-studies">
              <Button variant="outline" size="lg">
                View All Case Studies
                <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section ref={faqRef} className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600">
              Get answers to common questions about our China sourcing services.
            </p>
          </div>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold text-slate-900">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section ref={inquiryRef} className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Get a Free Sourcing Quote
            </h2>
            <p className="text-lg text-slate-300">
              Tell us about your product needs and we will get back to you within 24 hours with a customized sourcing plan.
            </p>
          </div>

          <Card className="bg-white text-slate-900">
            <CardContent className="p-8">
              <form onSubmit={handleInquirySubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="John Smith"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="john@company.com"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      Company Name
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your Company Ltd."
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-2">
                      Product Category *
                    </label>
                    <Input
                      id="product"
                      name="product"
                      required
                      placeholder="e.g., Electronics, Textiles"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Tell Us About Your Requirements *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Please describe your product, target quantity, budget range, quality requirements, and any other relevant details..."
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  disabled={inquiryStatus === 'submitting'}
                >
                  {inquiryStatus === 'submitting' ? 'Submitting...' : (
                    <>
                      <MessageSquare className="mr-2 w-5 h-5" />
                      Submit Inquiry
                    </>
                  )}
                </Button>
                {inquiryStatus === 'error' && inquiryError && (
                  <p className="text-red-600 text-sm mt-2">{inquiryError}</p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
