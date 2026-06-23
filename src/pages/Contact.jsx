import React, { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin, CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function Contact() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    company: '',
    product_category: '',
    order_volume: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      // Insert Inquiry directly
      const { data, error } = await client.from('SourcingInquiry').insert({
        data: {
          name: values.name,
          email: values.email,
          company: values.company,
          product_category: values.product_category,
          order_volume: values.order_volume,
          message: values.message
        }
      });

      if (error || (data && data.success === false)) {
        throw new Error(error?.message || (data && data.errors?.join(', ')) || 'Failed to submit inquiry');
      }

      toast.success('Inquiry submitted successfully! We will contact you soon.');
      setValues({
        name: '',
        email: '',
        company: '',
        product_category: '',
        order_volume: '',
        message: ''
      });
      setStatus('success');
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Something went wrong. Please try again.');
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <div className="container mx-auto py-20 px-4 text-center max-w-2xl">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="h-20 w-20 text-green-500" />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-slate-900">Thank You for Your Inquiry!</h1>
        <p className="text-lg text-slate-600 mb-8 font-medium">
          We have received your sourcing request. Our specialist will review your requirements and get back to you within 24 hours.
        </p>
        <Button onClick={() => setStatus('idle')} size="lg">Send Another Inquiry</Button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen">
      <section className="bg-slate-900 py-16 text-white text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Our Team</h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Ready to start sourcing from China? Fill out the form below and we'll provide a free assessment of your sourcing needs.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
            <Card className="border-none shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Headquarters</CardTitle>
                <CardDescription>Our main office in China</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="h-5 w-5 text-primary mt-1 shrink-0" />
                  <span className="text-slate-600 font-medium font-medium">Room 502, Building A, Hi-Tech Park, Nanshan, Shenzhen, Guangdong, China</span>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-slate-600 font-medium text-slate-600 font-medium">+86 755 8888 8888</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary shrink-0" />
                  <span className="text-slate-600 font-medium font-medium text-slate-600 font-medium">contact@ssourcing-china.com</span>
                </div>
              </CardContent>
            </Card>
            <Card className="border-none shadow-lg bg-primary text-white">
              <CardHeader>
                <CardTitle className="text-xl">Business Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between border-b border-white/20 pb-2 font-medium">
                    <span>Monday - Friday</span>
                    <span>09:00 - 18:00 (CST)</span>
                  </div>
                  <div className="flex justify-between border-b border-white/20 pb-2 font-medium">
                    <span>Saturday</span>
                    <span>10:00 - 16:00 (CST)</span>
                  </div>
                  <div className="flex justify-between font-medium">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
                <p className="mt-6 text-xs text-blue-100 italic">
                  * Note: China Standard Time (CST) is UTC+8. We usually respond to urgent emails within 4 hours during business days.
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="lg:col-span-2">
            <Card className="border-none shadow-xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold">Get a Free Sourcing Quote</CardTitle>
                <CardDescription className="text-base font-medium">
                  Provide your product details and we will help you find the best suppliers.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-slate-700">Full Name *</label>
                      <Input id="name" name="name" placeholder="John Doe" required value={values.name} onChange={handleChange} className="bg-slate-50" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-slate-700">Work Email *</label>
                      <Input id="email" name="email" type="email" placeholder="john@company.com" required value={values.email} onChange={handleChange} className="bg-slate-50" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-bold text-slate-700">Company Name</label>
                      <Input id="company" name="company" placeholder="Example Corp" value={values.company} onChange={handleChange} className="bg-slate-50" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="product_category" className="text-sm font-bold text-slate-700">Product Category</label>
                      <Input id="product_category" name="product_category" placeholder="e.g. Yoga Mats, Smart Watches" value={values.product_category} onChange={handleChange} className="bg-slate-50" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="order_volume" className="text-sm font-bold text-slate-700">Estimated Order Volume / Quantity</label>
                    <Input id="order_volume" name="order_volume" placeholder="e.g. 500 units, $10,000 USD" value={values.order_volume} onChange={handleChange} className="bg-slate-50" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700">How can we help? (Details about your sourcing needs) *</label>
                    <Textarea id="message" name="message" rows={6} placeholder="Please describe the product, specifications, and any specific requirements you have..." required value={values.message} onChange={handleChange} className="bg-slate-50" />
                  </div>
                  <Button type="submit" size="lg" className="w-full bg-amber-500 hover:bg-amber-600 text-slate-900 font-bold" disabled={status === 'submitting'}>
                    {status === 'submitting' ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Submitting Inquiry...
                      </>
                    ) : (
                      'Submit Sourcing Request'
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
