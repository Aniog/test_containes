import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const formFields = [
  { name: 'name', label: 'Full Name', type: 'text', required: true, placeholder: 'John Smith' },
  { name: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'john@company.com' },
  { name: 'company', label: 'Company Name', type: 'text', required: false, placeholder: 'Your Company Ltd.' },
  { name: 'country', label: 'Country', type: 'text', required: true, placeholder: 'United States' },
  { name: 'product', label: 'Product Description', type: 'text', required: true, placeholder: 'Describe the product you want to source' },
  { name: 'quantity', label: 'Estimated Quantity', type: 'text', required: false, placeholder: 'e.g., 1000 units' },
  { name: 'budget', label: 'Target Budget (USD)', type: 'text', required: false, placeholder: 'e.g., $10,000 - $50,000' },
  { name: 'timeline', label: 'Expected Timeline', type: 'text', required: false, placeholder: 'e.g., 2-3 months' },
];

export default function InquiryForm() {
  const [formData, setFormData] = useState({});
  const [status, setStatus] = useState('idle');
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    formFields
      .filter((f) => f.required)
      .forEach((field) => {
        if (!formData[field.name]?.trim()) {
          newErrors[field.name] = `${field.label} is required`;
        }
      });
    if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStatus('submitting');
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setStatus('success');
    setFormData({});
  };

  if (status === 'success') {
    return (
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 lg:p-12">
            <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Thank You!
            </h2>
            <p className="text-gray-600 mb-6">
              We have received your sourcing inquiry. Our team will review your requirements and get back to you within 24 hours with a free quote.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-medium rounded-lg transition-colors"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get a Free Sourcing Quote
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Tell us about your sourcing needs and we will get back to you within 24 hours with a detailed quote and recommendations.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-50 border border-gray-200 rounded-xl p-6 lg:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formFields.map((field) => (
              <div key={field.name}>
                <label htmlFor={field.name} className="block text-sm font-medium text-gray-700 mb-2">
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                <input
                  id={field.name}
                  name={field.name}
                  type={field.type}
                  value={formData[field.name] || ''}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${
                    errors[field.name] ? 'border-red-500 bg-red-50' : 'border-gray-300 bg-white'
                  }`}
                />
                {errors[field.name] && (
                  <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors[field.name]}
                  </p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6">
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
              Additional Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message || ''}
              onChange={handleChange}
              placeholder="Any specific requirements, quality standards, or questions..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors bg-white"
            />
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300 text-white font-semibold rounded-lg transition-colors text-lg"
            >
              {status === 'submitting' ? (
                <>
                  <span className="animate-spin mr-2">⏳</span>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 w-5 h-5" />
                  Submit Inquiry
                </>
              )}
            </button>
          </div>

          <p className="mt-4 text-sm text-gray-500">
            We respect your privacy. Your information will only be used to process your sourcing inquiry.
          </p>
        </form>
      </div>
    </section>
  );
}
