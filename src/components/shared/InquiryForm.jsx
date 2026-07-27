import { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { submitInquiry } from "@/api/inquiries";

const InquiryForm = ({ compact = false, title = "Get a Free Sourcing Quote" }) => {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    product: "",
    quantity: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const validate = (values) => {
    if (!values.name.trim()) return "Full name is required.";
    if (!values.email.trim()) return "Business email is required.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return "Please enter a valid email address.";
    if (!values.product.trim()) return "Product category is required.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const validationError = validate(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus("submitting");

    try {
      await submitInquiry(formData);
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        company: "",
        product: "",
        quantity: "",
        message: "",
      });
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-8 md:p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-teal-50 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-teal-600" />
        </div>
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank You</h3>
        <p className="text-slate-600">
          We have received your inquiry. A sourcing specialist will review your request and contact you within 1 business day.
        </p>
      </div>
    );
  }

  const isSubmitting = status === "submitting";

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 p-6 md:p-8">
      {!compact && <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>}
      {!compact && (
        <p className="text-slate-600 mb-6">
          Tell us what you are looking for. We will get back to you with next steps.
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4" aria-busy={isSubmitting}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Business Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
              placeholder="john@company.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-1">Company</label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
              placeholder="Your company name"
            />
          </div>
          <div>
            <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-1">Product Category</label>
            <input
              type="text"
              id="product"
              name="product"
              required
              value={formData.product}
              onChange={handleChange}
              className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
              placeholder="e.g. Industrial tools"
            />
          </div>
        </div>

        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-slate-700 mb-1">Estimated Quantity</label>
          <input
            type="text"
            id="quantity"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all"
            placeholder="e.g. 500 units"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Project Details</label>
          <textarea
            id="message"
            name="message"
            rows={compact ? 3 : 4}
            value={formData.message}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 outline-none transition-all resize-none"
            placeholder="Describe your product requirements, target price, and timeline."
          />
        </div>

        {error && (
          <div className="rounded-lg bg-red-50 border border-red-100 p-4 flex items-start gap-3" role="alert">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <p className="text-sm text-red-700">{error}</p>
          </div>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 bg-teal-600 text-white hover:bg-teal-700 disabled:bg-teal-400 disabled:cursor-not-allowed px-6 py-3.5 rounded-lg font-medium transition-colors"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              Submit Inquiry
            </>
          )}
        </button>

        <p className="text-xs text-slate-500 text-center">
          By submitting, you agree to our privacy policy. We respect your information.
        </p>
      </form>
    </div>
  );
};

export default InquiryForm;
