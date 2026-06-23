import React, { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import { Button } from '@/components/ui/button.jsx';
import { Input } from '@/components/ui/input.jsx';
import { Textarea } from '@/components/ui/textarea.jsx';
import { Label } from '@/components/ui/label.jsx';
import { toast } from 'sonner';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export const InquiryForm = ({ buttonText = "Submit Inquiry", simplified = false }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    product_interest: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const payload = {
        name: formData.name,
        email: formData.email,
        message: formData.message,
      };

      // Only add optional fields if they have values structure matches schema
      if (formData.company) payload.company = formData.company;
      if (formData.phone) payload.phone = formData.phone;
      if (formData.product_interest) payload.product_interest = formData.product_interest;

      const { data, error } = await client
        .from('Inquiries')
        .insert({ data: payload })
        .select()
        .single();
        
      if (error || data?.success === false) {
        throw new Error(error?.message || "Failed to submit inquiry");
      }

      toast.success("Inquiry submitted successfully! Our team will contact you shortly.");
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        product_interest: '',
        message: ''
      });
    } catch (error) {
      console.error(error);
      toast.error("Failed to submit inquiry. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name *</Label>
          <Input 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            placeholder="John Doe"
            required 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address *</Label>
          <Input 
            id="email" 
            name="email" 
            type="email" 
            value={formData.email} 
            onChange={handleChange} 
            placeholder="john@company.com"
            required 
          />
        </div>
      </div>
      
      {!simplified && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input 
              id="company" 
              name="company" 
              value={formData.company} 
              onChange={handleChange} 
              placeholder="Your Company Ltd."
            />
          </div>
          <div className="space-y-2">
             <Label htmlFor="phone">Phone Number</Label>
             <Input 
              id="phone" 
              name="phone" 
              type="tel" 
              value={formData.phone} 
              onChange={handleChange} 
              placeholder="+1 (555) 000-0000"
            />
          </div>
        </div>
      )}

      {!simplified && (
         <div className="space-y-2">
            <Label htmlFor="product_interest">Product Category Interest</Label>
            <Input 
              id="product_interest" 
              name="product_interest" 
              value={formData.product_interest} 
              onChange={handleChange} 
              placeholder="e.g., Electronics, Apparel, Home Goods"
            />
          </div>
      )}

      <div className="space-y-2">
        <Label htmlFor="message">Your Inquiry Details *</Label>
        <Textarea 
          id="message" 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          placeholder="Tell us about the products you want to source, target price, quantities, etc."
          rows={4}
          required 
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : buttonText}
      </Button>
    </form>
  );
};
