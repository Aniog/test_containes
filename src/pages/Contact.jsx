import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle,
  ArrowRight,
  Globe,
  MessageSquare,
  Send,
  Building2,
  Users,
  HeadphonesIcon,
} from 'lucide-react';
import { submitSourcingInquiry } from '@/api/sourcing';

const Contact = () => {
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

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      detail: 'info@ssourcingchina.com',
      subDetail: 'We respond within 24 hours',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      detail: '+86 755 1234 5678',
      subDetail: 'Mon-Fri, 9am-6pm CST',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Visit Us',
      detail: 'Shenzhen, China',
      subDetail: 'By appointment only',
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: 'Business Hours',
      detail: 'Mon - Fri: 9:00 - 18:00',
      subDetail: 'Saturday: 9:00 - 12:00',
    },
  ];

  const services = [
    'Supplier Sourcing',
    'Factory Verification',
    'Quality Inspection',
    'Production Monitoring',
    'Shipping Coordination',
    'Product Sourcing',
    'Other (please specify in message)',
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-50 to-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-slate-600 mb-8">
              Ready to start sourcing from China? Get in touch for a free consultation. Tell us about your project, and we'll get back to you within 24 hours with a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:info@ssourcingchina.com">
                <Button size="lg">
                  <Mail className="mr-2 h-4 w-4" />
                  Email Us Directly
                </Button>
              </a>
              <a href="tel:+8675512345678">
                <Button variant="outline" size="lg">
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 mx-auto mb-3">
                    {info.icon}
                  </div>
                  <CardTitle className="text-lg">{info.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-medium text-slate-900">{info.detail}</p>
                  <p className="text-sm text-slate-500">{info.subDetail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content - Form + Info */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Inquiry Form */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Get a Free Sourcing Quote</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you within 24 hours with a customized sourcing solution.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-1">
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
                        <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-1">
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
                        <label htmlFor="company" className="block text-sm font-medium text-slate-900 mb-1">
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
                        <label htmlFor="country" className="block text-sm font-medium text-slate-900 mb-1">
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
                        <label htmlFor="productCategory" className="block text-sm font-medium text-slate-900 mb-1">
                          Product Category *
                        </label>
                        <select
                          id="productCategory"
                          name="productCategory"
                          value={formData.productCategory}
                          onChange={handleChange}
                          required
                          className="flex h-9 w-full rounded-md border border-slate-200 bg-white px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-slate-950"
                        >
                          <option value="">Select a category</option>
                          {services.map((service, index) => (
                            <option key={index} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="estimatedVolume" className="block text-sm font-medium text-slate-900 mb-1">
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
                      <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-1">
                        Tell us about your sourcing needs *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder="Describe the products you want to source, quality requirements, target price range, timeline, and any other relevant details..."
                      />
                    </div>

                    {formError && (
                      <div className="p-4 rounded-md bg-red-50 border border-red-200">
                        <p className="text-sm text-red-600">{formError}</p>
                      </div>
                    )}

                    {formStatus === 'success' && (
                      <div className="p-4 rounded-md bg-green-50 border border-green-200">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                          <div>
                            <p className="text-sm font-medium text-green-800">
                              Thank you for your inquiry!
                            </p>
                            <p className="text-sm text-green-700 mt-1">
                              We've received your message and will get back to you within 24 hours with a customized sourcing solution.
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full"
                      disabled={formStatus === 'submitting'}
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Submit Inquiry
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-slate-500 text-center">
                      By submitting this form, you agree to our privacy policy. We'll never share your information with third parties.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Why Contact Us */}
              <Card>
                <CardHeader>
                  <CardTitle>Why Contact Us?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900">Free Consultation</p>
                      <p className="text-sm text-slate-600">No cost, no obligation. Just expert advice.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900">Quick Response</p>
                      <p className="text-sm text-slate-600">We respond within 24 hours, often sooner.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900">Customized Solution</p>
                      <p className="text-sm text-slate-600">Tailored to your specific needs and budget.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-slate-900">No Commitment</p>
                      <p className="text-sm text-slate-600">Explore your options without any pressure.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card>
                <CardHeader>
                  <CardTitle>What to Expect</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 font-bold text-sm flex-shrink-0">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Initial Response</p>
                        <p className="text-sm text-slate-600">Within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 font-bold text-sm flex-shrink-0">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Consultation Call</p>
                        <p className="text-sm text-slate-600">Discuss your needs in detail</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 font-bold text-sm flex-shrink-0">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Customized Proposal</p>
                        <p className="text-sm text-slate-600">Tailored sourcing plan</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-900 font-bold text-sm flex-shrink-0">
                        4
                      </div>
                      <div>
                        <p className="font-medium text-slate-900">Get Started</p>
                        <p className="text-sm text-slate-600">Begin your sourcing journey</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Link to="/services" className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                    Our Services
                  </Link>
                  <Link to="/how-it-works" className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                    How It Works
                  </Link>
                  <Link to="/case-studies" className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                    Case Studies
                  </Link>
                  <Link to="/products" className="flex items-center gap-2 text-slate-700 hover:text-slate-900 transition-colors">
                    <ArrowRight className="h-4 w-4" />
                    Products We Source
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Location
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Based in Shenzhen, the heart of China's manufacturing industry, with easy access to major production hubs.
            </p>
          </div>
          <div className="aspect-video rounded-xl overflow-hidden bg-slate-100">
            <img
              data-strk-img-id="contact-map-img"
              data-strk-img="[contact-map-title] [contact-map-desc]"
              data-strk-img-ratio="16x9"
              data-strk-img-width="1200"
              src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
              alt="Shenzhen, China location"
              className="w-full h-full object-cover"
            />
            <h3 id="contact-map-title" className="sr-only">Shenzhen, China</h3>
            <p id="contact-map-desc" className="sr-only">Our office location in Shenzhen, China</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Sourcing?
          </h2>
          <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
            Don't wait. Contact us today and take the first step towards sourcing quality products from China with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:info@ssourcingchina.com">
              <Button size="lg" variant="secondary">
                <Mail className="mr-2 h-4 w-4" />
                Email Us
              </Button>
            </a>
            <a href="tel:+8675512345678">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
