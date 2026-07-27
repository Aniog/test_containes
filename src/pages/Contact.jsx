import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import PageHero from '@/components/shared/PageHero';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product: '',
    quantity: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    // Simulate submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', product: '', quantity: '', message: '' });
    }, 1500);
  };

  return (
    <div>
      <PageHero
        title="Get a Free Sourcing Quote"
        subtitle="Tell us what you need and our team will respond with a sourcing plan within 24 hours."
        showCTA={false}
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-neutral-900 mb-6">Submit Your Sourcing Inquiry</h2>

              {status === 'success' ? (
                <div className="bg-success/5 border border-success/20 rounded-xl p-8 text-center">
                  <CheckCircle2 className="w-12 h-12 text-success mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">Inquiry Received</h3>
                  <p className="text-neutral-600">
                    Thank you for your inquiry. Our sourcing team will review your requirements and respond within 24 hours with a preliminary sourcing plan.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-800 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-800 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-800 mb-1.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-800 mb-1.5">
                        Phone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="product" className="block text-sm font-medium text-neutral-800 mb-1.5">
                        Product Description *
                      </label>
                      <input
                        type="text"
                        id="product"
                        name="product"
                        required
                        value={formData.product}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="What product are you looking for?"
                      />
                    </div>
                    <div>
                      <label htmlFor="quantity" className="block text-sm font-medium text-neutral-800 mb-1.5">
                        Estimated Quantity
                      </label>
                      <input
                        type="text"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="e.g., 1,000 units"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-800 mb-1.5">
                      Additional Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-200 rounded-lg text-neutral-800 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                      placeholder="Tell us more about your requirements: specifications, target price, certifications needed, timeline, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="inline-flex items-center gap-2 bg-secondary hover:bg-secondary-dark text-white font-semibold px-8 py-3.5 rounded-lg transition-colors disabled:opacity-60 border-none cursor-pointer text-base"
                  >
                    {status === 'submitting' ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Submit Inquiry
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-4">Contact Information</h3>
                <ul className="space-y-4 list-none p-0 m-0">
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-800">Email</p>
                      <p className="text-sm text-neutral-600">info@ssourcingchina.com</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-800">Phone / WhatsApp</p>
                      <p className="text-sm text-neutral-600">+86 138 0000 0000</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-800">Office</p>
                      <p className="text-sm text-neutral-600">Guangzhou, Guangdong, China</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-neutral-800">Response Time</p>
                      <p className="text-sm text-neutral-600">Within 24 hours (Mon–Sat)</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-neutral-50 rounded-xl border border-neutral-200 p-6">
                <h4 className="font-semibold text-neutral-900 mb-3">What Happens Next?</h4>
                <ol className="space-y-3 list-none p-0 m-0">
                  <li className="flex items-start gap-3 text-sm text-neutral-600">
                    <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">1</span>
                    We review your requirements and assess feasibility.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-neutral-600">
                    <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">2</span>
                    You receive a sourcing plan with timeline and cost estimate.
                  </li>
                  <li className="flex items-start gap-3 text-sm text-neutral-600">
                    <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">3</span>
                    Once approved, we begin supplier research immediately.
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
