import React, { useState, useEffect } from 'react';
import { User, Mail, Phone, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    machine: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [error, setError] = useState('');

  // Listen for prefill-machine event from Machines component
  useEffect(() => {
    const handler = (e) => {
      if (e.detail && e.detail.name) {
        setFormData(prev => ({
          ...prev,
          machine: e.detail.name
        }));
      }
    };
    window.addEventListener('prefill-machine', handler);
    return () => window.removeEventListener('prefill-machine', handler);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formData.name.trim()) return 'Please enter your name.';
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      return 'Please enter a valid email address.';
    }
    if (!formData.message.trim()) return 'Please tell us a bit about your project.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus('submitting');

    // Simulate API call (in real app this would post to backend)
    try {
      await new Promise(resolve => setTimeout(resolve, 900));

      // Success
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        machine: '',
        message: ''
      });

      // Reset success message after 6 seconds
      setTimeout(() => {
        setStatus('idle');
      }, 6000);
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.');
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Left: Info */}
          <div className="lg:col-span-2">
            <div className="uppercase tracking-[3px] text-xs text-brand-gold font-semibold mb-3">LET'S TALK</div>
            <h2 className="font-serif text-5xl md:text-6xl tracking-[-1.5px] text-brand-dark leading-none mb-6">
              Ready to find the right folder?
            </h2>
            <p className="text-lg text-brand-slate mb-10">
              Tell us about your work. We'll help you choose the right machine and get you a clear, competitive quote.
            </p>

            <div className="space-y-6 text-sm">
              <div className="flex gap-4">
                <Mail className="w-5 h-5 text-brand-gold mt-0.5" />
                <div>
                  <div className="font-medium text-brand-dark">Email</div>
                  <a href="mailto:sales@artitectmachinery.com" className="text-brand-slate hover:text-brand-dark">sales@artitectmachinery.com</a>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="w-5 h-5 text-brand-gold mt-0.5" />
                <div>
                  <div className="font-medium text-brand-dark">Phone</div>
                  <a href="tel:+15551234567" className="text-brand-slate hover:text-brand-dark">+1 (555) 123-4567</a>
                </div>
              </div>
              <div className="flex gap-4">
                <MapPin className="w-5 h-5 text-brand-gold mt-0.5" />
                <div>
                  <div className="font-medium text-brand-dark">Headquarters</div>
                  <div className="text-brand-slate">1240 Industrial Parkway<br />Cleveland, OH 44135, USA</div>
                </div>
              </div>
            </div>

            <div className="mt-10 text-xs text-brand-muted">
              We typically respond to quote requests within one business day.
            </div>
          </div>

          {/* Right: Form */}
          <div className="lg:col-span-3">
            {status === 'success' ? (
              <div className="success-banner">
                <div className="font-semibold text-lg mb-1">Thank you. Your request has been received.</div>
                <p className="text-sm">One of our specialists will contact you shortly to discuss your requirements and provide a detailed quote.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label" htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Jane Cooper"
                      required
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="email">Work Email *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="jane@yourshop.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label" htmlFor="phone">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="+1 (555) 555-5555"
                    />
                  </div>
                  <div>
                    <label className="form-label" htmlFor="company">Company / Shop</label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="form-input"
                      placeholder="Your Company Name"
                    />
                  </div>
                </div>

                <div>
                  <label className="form-label" htmlFor="machine">Machine of Interest</label>
                  <input
                    type="text"
                    id="machine"
                    name="machine"
                    value={formData.machine}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="e.g. DF-2000 Double Folder or 'Not sure yet'"
                  />
                  <div className="text-xs text-brand-muted mt-1.5">You can select a specific model from the Machines section above, or leave this blank.</div>
                </div>

                <div>
                  <label className="form-label" htmlFor="message">Tell us about your project *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="form-input resize-y min-h-[120px]"
                    placeholder="What are you folding? What thickness and length? Any special requirements?"
                    required
                  />
                </div>

                {error && (
                  <div className="text-sm text-red-600 bg-red-50 border border-red-100 rounded px-4 py-2.5">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn btn-gold w-full md:w-auto px-12 py-3 text-base disabled:opacity-70"
                >
                  {status === 'submitting' ? 'Sending your request...' : 'Request Quote'}
                </button>

                <p className="text-xs text-brand-muted pt-1">
                  By submitting, you agree to be contacted by ARTITECT MACHINERY regarding your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;