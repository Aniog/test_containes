import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const BriefContactForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Inquiry sent successfully! We'll get back to you within 24 hours.");
    e.target.reset();
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="bg-blue-600 rounded-3xl p-8 md:p-16 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Start Sourcing from China?
              </h2>
              <p className="text-xl text-blue-100 mb-8 leading-relaxed">
                Fill out the form to get a customized sourcing proposal and quote. Our team is ready to help you find the best manufacturing partners.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3 text-white">
                  <span className="font-bold">24-hour response time</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <span className="font-bold">Direct factory communication</span>
                </div>
                <div className="flex items-center space-x-3 text-white">
                  <span className="font-bold">Comprehensive QC plan</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Name</label>
                    <Input placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-700">Email</label>
                    <Input type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Product Interest</label>
                  <Input placeholder="e.g. Smart Watch, Bamboo Furniture" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-700">Message</label>
                  <Textarea placeholder="Tell us about your sourcing needs..." rows={4} required />
                </div>
                <Button type="submit" className="w-full bg-slate-900 hover:bg-slate-800 h-12 text-lg">
                  Submit Inquiry
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BriefContactForm;
