import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Search,
  Shield,
  Factory,
  Truck,
  CheckCircle,
  Star,
  Globe,
  Clock,
  DollarSign,
  Users,
  ArrowRight,
  ChevronDown,
  MessageSquare,
  FileCheck,
  Package,
  HeadphonesIcon,
} from 'lucide-react';
import { submitSourcingInquiry } from '@/api/sourcing';

const Home = () => {
  const [formStatus, setFormStatus] = React.useState('idle');
  const [formError, setFormError] = React.useState(null);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    country: '',
    productCategory: '',
    estimatedVolume: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError(null);
    setFormStatus('submitting');

    try {
      await submitSourcingInquiry(formData);
      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        country: '',
        productCategory: '',
        estimatedVolume: '',
        message: '',
      });
    } catch (err) {
      setFormError(err.message);
      setFormStatus('error');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const services = [
    {
      icon: <Search className="h-6 w-6" />,
      title: 'Supplier Sourcing',
      description: 'We find and vet reliable manufacturers in China that match your product requirements and quality standards.',
    },
    {
      icon: <Factory className="h-6 w-6" />,
      title: 'Factory Verification',
      description: 'On-site factory audits to verify capabilities, certifications, and business legitimacy before you commit.',
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: 'Quality Inspection',
      description: 'Pre-shipment and during-production inspections to ensure products meet your specifications.',
    },
    {
      icon: <Package className="h-6 w-6" />,
      title: 'Production Monitoring',
      description: 'Regular progress updates and on-site monitoring to keep your production on schedule.',
    },
    {
      icon: <Truck className="h-6 w-6" />,
      title: 'Shipping Coordination',
      description: 'End-to-end logistics management from factory to your warehouse, including customs clearance.',
    },
    {
      icon: <HeadphonesIcon className="h-6 w-6" />,
      title: 'Dedicated Support',
      description: 'A single point of contact who understands your business and speaks your language.',
    },
  ];

  const problems = [
    {
      problem: 'Unreliable suppliers',
      solution: 'We verify every factory and maintain a vetted network of trusted manufacturers.',
    },
    {
      problem: 'Quality issues',
      solution: 'Professional QC inspectors catch defects before products leave the factory.',
    },
    {
      problem: 'Communication barriers',
      solution: 'Bilingual project managers bridge the gap between you and Chinese suppliers.',
    },
    {
      problem: 'Hidden costs',
      solution: 'Transparent pricing with no surprises. We negotiate on your behalf.',
    },
    {
      problem: 'Shipping delays',
      solution: 'Proactive logistics coordination to keep your supply chain on track.',
    },
  ];

  const trustPoints = [
    { icon: <Shield className="h-8 w-8" />, stat: '500+', label: 'Verified Factories' },
    { icon: <Globe className="h-8 w-8" />, stat: '50+', label: 'Countries Served' },
    { icon: <CheckCircle className="h-8 w-8" />, stat: '98%', label: 'Client Satisfaction' },
    { icon: <Clock className="h-8 w-8" />, stat: '10+', label: 'Years Experience' },
  ];

  const faqs = [
    {
      question: 'What products can you help me source?',
      answer: 'We source a wide range of products including electronics, textiles, home goods, machinery, and more. If you have a specific product in mind, contact us for a free consultation.',
    },
    {
      question: 'How do you verify suppliers?',
      answer: 'We conduct on-site factory audits, verify business licenses, check references, and assess production capabilities. We only work with suppliers that meet our strict quality and reliability standards.',
    },
    {
      question: 'What is the minimum order quantity?',
      answer: 'MOQ varies by product and supplier. We work with manufacturers that can accommodate both small and large orders. During our initial consultation, we\'ll discuss your specific volume requirements.',
    },
    {
      question: 'How long does the sourcing process take?',
      answer: 'Typically 2-4 weeks for supplier identification and verification, plus production time. We provide detailed timelines during our initial consultation based on your specific needs.',
    },
    {
      question: 'Do you handle shipping and customs?',
      answer: 'Yes, we coordinate end-to-end logistics including freight forwarding, customs clearance, and delivery to your specified location. We work with reliable shipping partners worldwide.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4 md:px-6 py-20 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                China Sourcing Agent for Global Buyers
              </h1>
              <p className="text-lg md:text-xl text-slate-600 max-w-2xl">
                We help overseas buyers find reliable suppliers, verify factories, inspect quality, follow production, and coordinate shipping. Your trusted partner for China sourcing.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get a Free Sourcing Quote
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    See How It Works
                  </Button>
                </Link>
              </div>
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">4.9/5 Client Rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-slate-600" />
                  <span className="text-sm font-medium">500+ Happy Clients</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-2xl bg-slate-100 overflow-hidden shadow-2xl">
                <img
                  data-strk-img-id="hero-factory-img-8f2a9c"
                  data-strk-img="[hero-subtitle] [hero-title]"
                  data-strk-img-ratio="16x9"
                  data-strk-img-width="1200"
                  src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                  alt="China factory and manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Points */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center text-slate-900 mb-2">
                  {point.icon}
                </div>
                <div className="text-3xl font-bold text-slate-900">{point.stat}</div>
                <div className="text-sm text-slate-600">{point.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Complete Sourcing Solutions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From finding suppliers to delivering products, we handle every step of the China sourcing process.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900 mb-4">
                    {service.icon}
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Problems We Solve */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Problems We Solve
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Common challenges international buyers face when sourcing from China, and how we help you overcome them.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {problems.map((item, index) => (
              <div key={index} className="flex gap-4 p-6 rounded-xl border border-slate-200 bg-white">
                <div className="flex-shrink-0">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-600 font-bold text-sm">{index + 1}</span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">{item.problem}</h3>
                  <p className="text-slate-600">{item.solution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Preview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              A simple, transparent process to get you the products you need from reliable Chinese suppliers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '1', title: 'Submit Inquiry', desc: 'Tell us what you need to source' },
              { step: '2', title: 'We Find Suppliers', desc: 'We identify and verify suitable factories' },
              { step: '3', title: 'QC & Production', desc: 'We inspect and monitor production' },
              { step: '4', title: 'Ship to You', desc: 'We coordinate shipping to your location' },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-slate-900 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/how-it-works">
              <Button variant="outline" size="lg">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Products We Source Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Products We Source
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We source a wide range of products across multiple industries. Here are some of the categories we specialize in.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Electronics & Components',
              'Textiles & Apparel',
              'Home & Garden',
              'Industrial Equipment',
              'Auto Parts',
              'Toys & Gifts',
              'Health & Beauty',
              'Sports & Outdoors',
            ].map((product, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-slate-200 bg-slate-50 text-center hover:shadow-md transition-shadow"
              >
                <Package className="h-8 w-8 mx-auto mb-2 text-slate-600" />
                <span className="text-sm font-medium text-slate-900">{product}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/products">
              <Button variant="outline" size="lg">
                View All Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Success Stories
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              See how we've helped businesses like yours source quality products from China.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Electronics Manufacturer',
                result: 'Reduced costs by 30% while improving quality',
                category: 'Electronics',
              },
              {
                title: 'Home Goods Retailer',
                result: 'Found 3 new suppliers in 2 weeks',
                category: 'Home & Garden',
              },
              {
                title: 'Automotive Parts Distributor',
                result: 'Saved $50K on first container order',
                category: 'Auto Parts',
              },
            ].map((study, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{study.title}</CardTitle>
                  <CardDescription>{study.category}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-700">{study.result}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/case-studies">
              <Button variant="outline" size="lg">
                Read More Case Studies
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Get answers to common questions about our China sourcing services.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="group rounded-lg border border-slate-200 bg-white">
                <summary className="flex items-center justify-between p-4 cursor-pointer font-medium text-slate-900 hover:bg-slate-50">
                  {faq.question}
                  <ChevronDown className="h-5 w-5 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-4 pb-4 text-slate-600">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Start Sourcing?
              </h2>
              <p className="text-lg text-slate-300">
                Get a free, no-obligation sourcing quote. Tell us what you need, and we'll get back to you within 24 hours with a customized solution.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                  <span>No commitment required</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-400 mt-0.5" />
                  <span>Response within 24 hours</span>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-white text-slate-900">
                <CardHeader>
                  <CardTitle>Get a Free Sourcing Quote</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you shortly.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-1">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-1">
                          Business Email *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="john@company.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-1">
                          Company Name *
                        </label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          required
                          placeholder="Your Company Ltd."
                        />
                      </div>
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium mb-1">
                          Country *
                        </label>
                        <Input
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                          placeholder="United States"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="productCategory" className="block text-sm font-medium mb-1">
                          Product Category *
                        </label>
                        <Input
                          id="productCategory"
                          name="productCategory"
                          value={formData.productCategory}
                          onChange={handleChange}
                          required
                          placeholder="Electronics, Textiles, etc."
                        />
                      </div>
                      <div>
                        <label htmlFor="estimatedVolume" className="block text-sm font-medium mb-1">
                          Estimated Volume
                        </label>
                        <Input
                          id="estimatedVolume"
                          name="estimatedVolume"
                          value={formData.estimatedVolume}
                          onChange={handleChange}
                          placeholder="e.g., 1000 units/month"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-1">
                        Tell us about your sourcing needs *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        placeholder="Describe the products you want to source, quality requirements, target price range, etc."
                      />
                    </div>
                    {formError && (
                      <p className="text-sm text-red-600">{formError}</p>
                    )}
                    {formStatus === 'success' && (
                      <p className="text-sm text-green-600">
                        Thank you! Your inquiry has been submitted. We'll get back to you within 24 hours.
                      </p>
                    )}
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={formStatus === 'submitting'}
                    >
                      {formStatus === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
