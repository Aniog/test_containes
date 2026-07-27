import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const InquiryForm = ({ compact = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    productCategory: '',
    quantity: '',
    timeline: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!formData.name.trim()) return 'Name is required';
    if (!formData.company.trim()) return 'Company is required';
    if (!formData.email.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Please enter a valid email';
    if (!formData.productCategory) return 'Please select a product category';
    if (!formData.message.trim()) return 'Please describe your sourcing needs';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const error = validate();
    if (error) {
      toast.error(error);
      return;
    }

    setIsSubmitting(true);

    // Simulate API submission
    await new Promise((resolve) => setTimeout(resolve, 800));

    toast.success('Thank you. We will contact you within 24 hours with a sourcing quote.');
    
    setFormData({
      name: '',
      company: '',
      email: '',
      phone: '',
      country: '',
      productCategory: '',
      quantity: '',
      timeline: '',
      message: '',
    });
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="name" className="mb-1.5 block">Full Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="John Smith"
            required
          />
        </div>
        <div>
          <Label htmlFor="company" className="mb-1.5 block">Company *</Label>
          <Input
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company Ltd"
            required
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="email" className="mb-1.5 block">Business Email *</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="you@company.com"
            required
          />
        </div>
        <div>
          <Label htmlFor="phone" className="mb-1.5 block">Phone Number</Label>
          <Input
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 555 123 4567"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="country" className="mb-1.5 block">Country / Region</Label>
          <Input
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            placeholder="United States"
          />
        </div>
        <div>
          <Label htmlFor="productCategory" className="mb-1.5 block">Product Category *</Label>
          <Select
            id="productCategory"
            name="productCategory"
            value={formData.productCategory}
            onChange={handleChange}
            required
          >
            <option value="">Select a category</option>
            <option value="Electronics & Components">Electronics & Components</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
            <option value="Apparel & Textiles">Apparel & Textiles</option>
            <option value="Industrial Equipment">Industrial Equipment</option>
            <option value="Consumer Goods">Consumer Goods</option>
            <option value="Automotive Parts">Automotive Parts</option>
            <option value="Packaging & Materials">Packaging & Materials</option>
            <option value="Other">Other</option>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <Label htmlFor="quantity" className="mb-1.5 block">Estimated Order Quantity</Label>
          <Input
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="e.g., 5,000 units"
          />
        </div>
        <div>
          <Label htmlFor="timeline" className="mb-1.5 block">Target Timeline</Label>
          <Select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
          >
            <option value="">Select timeline</option>
            <option value="Within 1 month">Within 1 month</option>
            <option value="1-3 months">1-3 months</option>
            <option value="3-6 months">3-6 months</option>
            <option value="6+ months">6+ months</option>
            <option value="Flexible">Flexible</option>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="message" className="mb-1.5 block">Describe Your Sourcing Needs *</Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Please describe the products you are looking to source, target specifications, and any other relevant details..."
          required
        />
      </div>

      <Button
        type="submit"
        variant="accent"
        size="lg"
        className="w-full md:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Submitting...' : 'Get a Free Sourcing Quote'}
      </Button>

      <p className="text-xs text-[#64748b]">We typically respond within 24 business hours.</p>
    </form>
  );
};

export default InquiryForm;
