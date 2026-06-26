import React from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Button, Input, Textarea } from './ui/Base';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ContactForm = () => {
  const [values, setValues] = React.useState({ name: '', email: '', company: '', machine: '', message: '' });
  const [status, setStatus] = React.useState('idle');
  const [error, setError] = React.useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setStatus('submitting');

    try {
      // 1. Link inquiry
      const { error: inquiryError } = await client.from('ContactInquiries').insert({
        data: {
          name: values.name,
          email: values.email,
          company: values.company,
          machine_interest: values.machine,
          message: values.message,
          status: 'new'
        }
      });

      if (inquiryError) throw inquiryError;

      setStatus('success');
      setValues({ name: '', email: '', company: '', machine: '', message: '' });
    } catch (err) {
      console.error(err);
      setError(err.message || 'Submission failed. Please try again.');
      setStatus('error');
    }
  };

  return (
    <section className="py-24 bg-white" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-sm overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          {/* Info Side */}
          <div className="lg:w-1/3 bg-brand-primary p-12 text-white">
            <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
            <p className="text-slate-400 mb-12">
              Our experts are ready to assist you with technical specifications and custom solutions for your metal folding needs.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Mail className="w-6 h-6 text-brand-accent mt-1" />
                <div>
                  <h4 className="font-bold">Email</h4>
                  <p className="text-slate-400">sales@artitectmachinery.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-brand-accent mt-1" />
                <div>
                  <h4 className="font-bold">Phone</h4>
                  <p className="text-slate-400">+1 (800) ARTITECT</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-brand-accent mt-1" />
                <div>
                  <h4 className="font-bold">Address</h4>
                  <p className="text-slate-400">123 Industrial Blvd, Precision Park, Tech Valley</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:w-2/3 p-12 bg-white">
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20 animate-in zoom-in duration-500">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <Send className="w-10 h-10" />
                </div>
                <h3 className="text-3xl font-bold text-brand-primary mb-4">Request Received</h3>
                <p className="text-slate-500 max-w-sm">
                  Thank you for your interest. A technical advisor will contact you within 24 hours.
                </p>
                <Button variant="outline" className="mt-8" onClick={() => setStatus('idle')}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-primary uppercase tracking-wider">Full Name</label>
                    <Input name="name" value={values.name} onChange={onChange} required placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-primary uppercase tracking-wider">Email Address</label>
                    <Input name="email" type="email" value={values.email} onChange={onChange} required placeholder="john@company.com" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-primary uppercase tracking-wider">Company</label>
                    <Input name="company" value={values.company} onChange={onChange} placeholder="Engineering Solutions Inc." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-primary uppercase tracking-wider">Machine Interest</label>
                    <Input name="machine" value={values.machine} onChange={onChange} placeholder="e.g. Artitect DF-3200" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-primary uppercase tracking-wider">Message / Requirements</label>
                  <Textarea name="message" value={values.message} onChange={onChange} required placeholder="Tell us more about your folding requirements..." />
                </div>

                {error && <p className="text-red-500 text-sm font-medium">{error}</p>}
                
                <Button type="submit" variant="accent" className="w-full md:w-auto px-12 py-4" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Processing...' : 'Send Inquiry'}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
