import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';
import { toast } from 'sonner';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success("Inquiry sent successfully! Our experts will contact you soon.");
    }, 1500);
  };

  if (isSuccess) {
    return (
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-primary/10 text-center animate-in fade-in zoom-in duration-500">
        <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h3 className="text-2xl font-bold mb-4">Request Received!</h3>
        <p className="text-slate-600 text-lg mb-8">
          Thank you for your interest in SSourcing China. A sourcing expert has been assigned to your inquiry and will reach out within 24 hours.
        </p>
        <button 
          onClick={() => setIsSuccess(false)}
          className="text-primary font-bold hover:underline"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-primary/5">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Full Name</label>
            <input 
              required
              type="text" 
              placeholder="John Doe" 
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Work Email</label>
            <input 
              required
              type="email" 
              placeholder="john@company.com" 
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Product Category</label>
            <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all appearance-none bg-white">
              <option>Select Category</option>
              <option>Consumer Electronics</option>
              <option>Home & Kitchen</option>
              <option>Fashion & Accessories</option>
              <option>Industrial Goods</option>
              <option>Other</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Order Quantity</label>
            <input 
              type="text" 
              placeholder="e.g. 500 units" 
              className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-bold text-slate-700 uppercase tracking-wide">Requirements & Details</label>
          <textarea 
            required
            rows={4}
            placeholder="Describe your product specifications, target price, and any specific factory requirements..." 
            className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
          ></textarea>
        </div>

        <button 
          disabled={isSubmitting}
          type="submit" 
          className="w-full bg-secondary hover:bg-secondary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-secondary/20 transition-all flex items-center justify-center gap-2 group disabled:opacity-70"
        >
          {isSubmitting ? (
            "Processing..."
          ) : (
            <>
              Get Free Sourcing Quote 
              <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
            </>
          )}
        </button>
        <p className="text-center text-xs text-slate-400">
          Typically responds within 2 business hours (GMT+8).
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
