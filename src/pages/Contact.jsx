import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function Contact() {
  return (
    <div className="flex flex-col w-full py-16 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <h1 className="text-4xl font-bold text-slate-900 mb-6 text-center">Get a Free Sourcing Quote</h1>
        <p className="text-xl text-slate-600 mb-12 text-center">Fill out the form below and one of our sourcing experts will get back to you within 24 hours.</p>
        
        <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
           <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-slate-700">First Name</label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium text-slate-700">Last Name</label>
                  <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-700">Work Email</label>
                <Input id="email" type="email" placeholder="john@company.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="product" className="text-sm font-medium text-slate-700">What product are you looking to source?</label>
                <Input id="product" placeholder="e.g. Wireless earbuds, stainless steel water bottles..." />
              </div>
              
              <div className="space-y-2">
                 <label htmlFor="details" className="text-sm font-medium text-slate-700">Project Details</label>
                 <Textarea 
                   id="details" 
                   placeholder="Please provide details like target quantity, specifications, target price, or any challenges you are facing..."
                   rows={5}
                 />
              </div>

              <Button type="submit" className="w-full bg-sky-600 hover:bg-sky-700 text-white py-6 text-lg">
                Submit Inquiry
              </Button>
           </form>
        </div>
      </div>
    </div>
  );
}