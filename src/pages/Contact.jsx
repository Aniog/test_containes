import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Clock, CheckCircle2 } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    country: '',
    product: '',
    quantity: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your inquiry. Our team will contact you within 24 hours.');
    setFormData({ name: '', email: '', company: '', country: '', product: '', quantity: '', message: '' });
  };

  return (
    <div className="bg-white">
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge className="mb-4" variant="secondary">Contact</Badge>
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">Get a Free Sourcing Quote</h1>
            <p className="mt-4 text-lg text-slate-600">
              Tell us what you need. We will review your request and reply with a practical next step within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Inquiry form</CardTitle>
                <CardDescription>All fields are optional, but more detail helps us respond faster.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-900">Name</label>
                      <Input
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-900">Email</label>
                      <Input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-900">Company</label>
                      <Input
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Company name"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-900">Country</label>
                      <Input
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        placeholder="Your country"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-900">Product or category</label>
                      <Input
                        value={formData.product}
                        onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                        placeholder="e.g. kitchen appliances"
                      />
                    </div>
                    <div>
                      <label className="mb-1 block text-sm font-medium text-slate-900">Target quantity</label>
                      <Input
                        value={formData.quantity}
                        onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                        placeholder="e.g. 5,000 units"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-slate-900">Project details</label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share specs, quality requirements, timeline, and any special needs."
                      rows={6}
                    />
                  </div>
                  <Button type="submit" className="w-full">Send Inquiry</Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact details</CardTitle>
                  <CardDescription>Use these channels if you prefer direct contact.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4" />
                    <div>
                      <div className="font-medium text-slate-900">Email</div>
                      <a href="mailto:info@ssourcingchina.com" className="text-slate-600 hover:text-slate-900">info@ssourcingchina.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4" />
                    <div>
                      <div className="font-medium text-slate-900">Phone</div>
                      <a href="tel:+8610XXXXXXXX" className="text-slate-600 hover:text-slate-900">+86 10 XXXX XXXX</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4" />
                    <div>
                      <div className="font-medium text-slate-900">Office</div>
                      <p className="text-slate-600">China-based team supporting global buyers</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4" />
                    <div>
                      <div className="font-medium text-slate-900">Response time</div>
                      <p className="text-slate-600">Within 24 hours on business days</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What happens next</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 text-sm text-slate-700">
                    <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /> We review your request and confirm receipt.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /> We outline a practical approach and cost estimate.</li>
                    <li className="flex items-start gap-2"><CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-600" /> We share next steps and timing with no obligation.</li>
                  </ul>
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
