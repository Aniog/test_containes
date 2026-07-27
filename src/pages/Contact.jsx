import React, { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Label } from '@/components/ui/label.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Mail, Phone, MapPin } from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const Contact = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product_category: '',
    estimated_budget: '',
    details: ''
  });
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = (v) => {
    if (!v.name.trim()) return 'Name is required';
    if (!v.email.trim()) return 'Email is required';
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return 'Provide a valid email';
    if (!v.details.trim()) return 'Please provide details about your sourcing request';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    
    const err = validate(values);
    if (err) { setError(err); return; }

    setStatus('submitting');

    try {
      // Insert Form Response
      const { error: responseError } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company,
            phone: values.phone,
            product_category: values.product_category,
            estimated_budget: values.estimated_budget,
            details: values.details,
          }
        });

      if (responseError) throw responseError;

      setStatus('success');
      setValues({
        name: '', email: '', company: '', phone: '',
        product_category: '', estimated_budget: '', details: ''
      });

    } catch (err) {
      console.error(err);
      setError(err.message || 'Submission failed. Please try again.');
      setStatus('error');
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-slate-50 py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-slate-900">
            Get a Free Sourcing Quote
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
            Ready to find the right manufacturer? Talk to our experts today. We'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Contact Info Sidebar */}
            <div className="lg:w-1/3">
              <h2 className="text-2xl font-bold mb-6 text-slate-900">Our Office</h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                While we are based in China to be close to the factories, our team is international and we serve clients globally.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 text-primary mr-4 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Guangzhou Headquarters</h3>
                    <p className="text-slate-600">Suite 1205, Business Tower<br/>Tianhe District, Guangzhou<br/>China 510000</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-6 h-6 text-primary mr-4 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                    <p className="text-slate-600">info@ssourcingchina.com<br/>support@ssourcingchina.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="w-6 h-6 text-primary mr-4 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                    <p className="text-slate-600">+86 123 4567 8900<br/><span className="text-sm">(Mon-Fri, 9am - 6pm Beijing Time)</span></p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:w-2/3">
              <Card className="border-slate-200 shadow-sm pt-6 px-2 sm:px-6">
                <CardContent>
                  <form onSubmit={onSubmit} className="space-y-6">
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" value={values.name} onChange={onChange} required placeholder="John Doe" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Work Email *</Label>
                        <Input id="email" name="email" type="email" value={values.email} onChange={onChange} required placeholder="john@company.com" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input id="company" name="company" value={values.company} onChange={onChange} placeholder="Acme Corp" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" name="phone" value={values.phone} onChange={onChange} placeholder="+1 (555) 123-4567" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="product_category">Product Category</Label>
                        <Input id="product_category" name="product_category" value={values.product_category} onChange={onChange} placeholder="e.g. Electronics, Apparel" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="estimated_budget">Estimated Quantity / Budget</Label>
                        <Input id="estimated_budget" name="estimated_budget" value={values.estimated_budget} onChange={onChange} placeholder="e.g. 5,000 units or $20k" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="details">Project Details *</Label>
                      <Textarea 
                        id="details" 
                        name="details" 
                        rows={6} 
                        value={values.details} 
                        onChange={onChange} 
                        required 
                        placeholder="Please describe what you are looking to source. Include materials, certifications needed, target price, etc." 
                      />
                    </div>

                    {status === 'error' && (
                      <div className="bg-red-50 text-red-600 p-4 rounded-md text-sm border border-red-200">
                        {error}
                      </div>
                    )}
                    
                    {status === 'success' && (
                      <div className="bg-green-50 text-green-700 p-4 rounded-md text-sm border border-green-200 flex items-start">
                         <div className="font-medium">
                          Thank you for your inquiry! We have received your request and one of our sourcing agents will contact you within 24 hours.
                        </div>
                      </div>
                    )}

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full h-12 text-base"
                      disabled={status === 'submitting' || status === 'success'}
                    >
                      {status === 'submitting' ? 'Submitting Inquiry...' : status === 'success' ? 'Inquiry Sent' : 'Submit Sourcing Inquiry'}
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

export default Contact;