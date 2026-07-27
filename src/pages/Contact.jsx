import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from 'sonner';

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Inquiry submitted successfully. We will get back to you within 24 hours.');
    e.target.reset();
  };

  return (
    <div className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold font-['Montserrat'] tracking-tight text-slate-900 sm:text-5xl">Get a Free Sourcing Quote</h1>
        <p className="mt-4 text-xl text-slate-600 max-w-3xl mx-auto">Fill out the form below with your product details, and our sourcing experts will review your request and get back to you within 24 hours.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl shadow-xl border border-slate-100 p-8">
            <h2 className="text-2xl font-bold font-['Montserrat'] text-slate-900 mb-6">Tell us about your project</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@company.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input id="company" placeholder="Optional" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="productLink">Reference Link (if any)</Label>
                <Input id="productLink" placeholder="Amazon, Alibaba, or website link for reference" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="quantity">Estimated Order Quantity</Label>
                <select id="quantity" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                  <option value="">Select quantity</option>
                  <option value="under100">Under 100 pcs</option>
                  <option value="100to500">100 - 500 pcs</option>
                  <option value="500to1000">500 - 1,000 pcs</option>
                  <option value="1000plus">1,000+ pcs</option>
                </select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Product Details & Requirements</Label>
                <Textarea 
                  id="message" 
                  placeholder="Please describe your product, including materials, dimensions, specific features, target price, and any certifications needed." 
                  className="min-h-[150px]"
                  required
                />
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-lg">
                Submit Inquiry
              </Button>
            </form>
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <h3 className="text-xl font-bold font-['Montserrat'] text-slate-900 mb-6">Contact Information</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-blue-600 mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Office Location</h4>
                  <p className="text-slate-600 mt-1">123 Business Center, Tianhe District, Guangzhou, Guangdong, China</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-blue-600 mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Phone</h4>
                  <p className="text-slate-600 mt-1">+86 123 4567 8900</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-blue-600 mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Email</h4>
                  <p className="text-slate-600 mt-1">info@ssourcingchina.com</p>
                  <p className="text-slate-600">quotes@ssourcingchina.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-6 w-6 text-blue-600 mr-4 shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold text-slate-900">Working Hours</h4>
                  <p className="text-slate-600 mt-1">Mon - Fri: 9:00 AM - 6:00 PM (Beijing Time)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-xl font-bold font-['Montserrat'] mb-4">Why fill this out?</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3 shrink-0 mt-0.5"><span className="text-xs font-bold">1</span></div>
                <span className="text-blue-100">Get an accurate, detailed quote</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3 shrink-0 mt-0.5"><span className="text-xs font-bold">2</span></div>
                <span className="text-blue-100">Hear from us within 24 hours</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3 shrink-0 mt-0.5"><span className="text-xs font-bold">3</span></div>
                <span className="text-blue-100">Discover if we are the right fit</span>
              </li>
              <li className="flex items-start">
                <div className="h-5 w-5 rounded-full bg-white/20 flex items-center justify-center mr-3 shrink-0 mt-0.5"><span className="text-xs font-bold">4</span></div>
                <span className="text-blue-100">Zero obligation to proceed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
