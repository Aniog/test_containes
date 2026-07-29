import React, { useState, useEffect, useRef } from 'react';
import { ImageHelper } from '@strikingly/sdk';
import strkImgConfig from '@/strk-img-config.json';
import { client, getErrorMessage } from '@/api/db';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const containerRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    product_category: '',
    estimated_annual_volume: '',
    message: ''
  });

  useEffect(() => {
    return ImageHelper.loadImages(strkImgConfig, containerRef.current);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const { data: response, error } = await client
        .from('SourcingInquiry')
        .insert({
          data: {
            ...formData,
            status: 'new'
          }
        })
        .select()
        .single();

      if (error || response?.success === false) {
        throw new Error(getErrorMessage(response, error));
      }

      toast.success('Inquiry submitted successfully! We will contact you shortly.');
      setFormData({
        name: '',
        email: '',
        company: '',
        product_category: '',
        estimated_annual_volume: '',
        message: ''
      });
    } catch (err) {
      console.error(err);
      toast.error(err.message || 'Failed to submit inquiry. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div ref={containerRef} className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h1 id="contact-title" className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Get a Free Sourcing Quote</h1>
            <p id="contact-subtitle" className="mt-4 text-lg text-slate-600">
              Tell us about your sourcing needs and our experts will get back to you with a free consultation and initial supplier matches within 24 hours.
            </p>

            <div className="mt-12 space-y-6">
              <div className="flex gap-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Email Us</h3>
                  <p className="mt-1 text-slate-600">info@ssourcing-china.com</p>
                </div>
              </div>
              <div className="flex gap-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <Phone className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Call Us</h3>
                  <p className="mt-1 text-slate-600">+86 123 4567 890</p>
                </div>
              </div>
              <div className="flex gap-x-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-white">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-slate-900">Our Office</h3>
                  <p className="mt-1 text-slate-600">Futian District, Shenzhen, China 518000</p>
                </div>
              </div>
            </div>

            <div className="mt-12 overflow-hidden rounded-2xl shadow-lg">
               <img
                src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E"
                alt="Our professional team"
                className="w-full h-auto"
                data-strk-img-id="contact-team-img"
                data-strk-img="[contact-subtitle] [contact-title] office team"
                data-strk-img-ratio="3x2"
                data-strk-img-width="800"
              />
            </div>
          </div>

          {/* Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Inquiry Form</CardTitle>
              <CardDescription>Fill out the details below to start your sourcing journey.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Full Name *</label>
                    <Input 
                      name="name" 
                      placeholder="John Doe" 
                      required 
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Business Email *</label>
                    <Input 
                      name="email" 
                      type="email" 
                      placeholder="john@company.com" 
                      required 
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2 lg:col-span-2">
                    <label className="text-sm font-medium">Company Name</label>
                    <Input 
                      name="company" 
                      placeholder="Acme Corp" 
                      value={formData.company}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Product Category *</label>
                    <select
                      name="product_category"
                      required
                      value={formData.product_category}
                      onChange={handleChange}
                      className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    >
                      <option value="">Select Category</option>
                      <option value="Electronics">Electronics</option>
                      <option value="Furniture">Furniture</option>
                      <option value="Textiles">Textiles</option>
                      <option value="Machinery">Machinery</option>
                      <option value="Industrial Supplies">Industrial Supplies</option>
                      <option value="Consumer Goods">Consumer Goods</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Est. Annual Volume</label>
                    <Input 
                      name="estimated_annual_volume" 
                      placeholder="e.g. 5,000 units" 
                      value={formData.estimated_annual_volume}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Tell us more about your needs *</label>
                  <Textarea 
                    name="message" 
                    placeholder="Describe the product, requirements, certification needs, etc. (min 10 characters)" 
                    className="min-h-[120px]" 
                    required 
                    minLength={10}
                    value={formData.message}
                    onChange={handleChange}
                  />
                </div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={loading}>
                  {loading ? 'Submitting...' : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Inquiry
                    </>
                  )}
                </Button>
                <p className="text-xs text-center text-slate-500 mt-4">
                  We respect your privacy. Your information is safe with us.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
