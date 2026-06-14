import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { ArrowRight, Mail, Phone, Globe, MapPin, Clock, CheckCircle2 } from 'lucide-react';
import { createInquiry } from '@/api/inquiries';
import { useToast } from '@/components/ui/toast';

const Contact = () => {
  const { toastSuccess } = useToast();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product_category: '',
    message: '',
  });
  const [status, setStatus] = React.useState('idle');
  const [error, setError] = React.useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setStatus('submitting');

    try {
      await createInquiry(formData);
      setStatus('success');
      setFormData({ name: '', email: '', company: '', country: '', product_category: '', message: '' });
      toastSuccess('Inquiry submitted successfully! We will get back to you within 24 hours.');
    } catch (err) {
      setError(err.message || 'Submission failed. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-lg text-slate-300 mb-8">
              Tell us about your sourcing needs. We will review your requirements and get back to you within 24 hours with a practical plan and quote.
            </p>
          </div>
        </div>
      </section>

      {/* Contact section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Get in Touch</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                Whether you have a specific product in mind or just want to explore sourcing options, we are here to help. Reach out and we will start the conversation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Email</div>
                    <a href="mailto:info@ssourcingchina.com" className="text-sm text-blue-600 hover:text-blue-700">info@ssourcingchina.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Phone / WeChat</div>
                    <a href="tel:+8610XXXXXXXX" className="text-sm text-blue-600 hover:text-blue-700">+86 10 XXXX XXXX</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Office Locations</div>
                    <p className="text-sm text-slate-600">Guangzhou & Shenzhen, China</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Response Time</div>
                    <p className="text-sm text-slate-600">Within 24 hours on business days</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry form */}
            <div className="lg:col-span-2">
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-1">Get a Free Sourcing Quote</h3>
                <p className="text-sm text-slate-500 mb-6">Fill out the form below and we will get back to you with a tailored proposal.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1.5">Full name *</label>
                      <Input id="name" name="name" value={formData.name} onChange={handleChange} required placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">Email *</label>
                      <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="you@company.com" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1.5">Company</label>
                      <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Company name" />
                    </div>
                    <div>
                      <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-1.5">Country</label>
                      <Input id="country" name="country" value={formData.country} onChange={handleChange} placeholder="Your country" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="product_category" className="block text-sm font-medium text-slate-700 mb-1.5">Product category</label>
                    <Input id="product_category" name="product_category" value={formData.product_category} onChange={handleChange} placeholder="e.g. electronics, home goods, textiles" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1.5">Tell us about your sourcing needs *</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Please include: product description, target price range, order volume, quality requirements, and timeline..."
                    />
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 text-sm rounded-md px-4 py-3">
                      {error}
                    </div>
                  )}

                  {status === 'success' && (
                    <div className="bg-green-50 border border-green-200 text-green-800 text-sm rounded-md px-4 py-3 flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                      <div>
                        <strong>Thank you!</strong> We received your inquiry and will get back to you within 24 hours.
                      </div>
                    </div>
                  )}

                  <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === 'submitting'}>
                    {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Buyers Choose SSourcing China</h2>
            <p className="text-lg text-slate-600">
              We focus on practical results, not promises. Here is what sets us apart.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'On-the-ground presence', description: 'Our team is based in China and visits factories regularly. We are not a remote broker — we are your local partner.' },
              { title: 'Transparent process', description: 'You receive detailed reports, photos, and updates at every stage. No black boxes, no surprises.' },
              { title: 'No hidden fees', description: 'Our pricing is clear and upfront. You pay for the services you need, with no unexpected charges.' },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-slate-200 p-6">
                <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
