import { useState } from "react";
import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";
import { Button } from "@/components/ui/Button";
import { CheckCircle, Loader2 } from "lucide-react";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const productCategories = [
  "Electronics & Components",
  "Machinery & Industrial Parts",
  "Apparel & Textiles",
  "Home & Garden",
  "Packaging & Printing",
  "Consumer Goods",
  "Other"
];

const serviceOptions = [
  "Supplier Sourcing",
  "Factory Verification",
  "Quality Inspection",
  "Production Follow-Up",
  "Shipping Coordination"
];

const contactMethods = ["Email", "Phone", "WhatsApp"];

const initialValues = {
  name: "",
  email: "",
  company: "",
  phone: "",
  country: "",
  product_category: "",
  product_description: "",
  estimated_quantity: "",
  services_needed: [],
  preferred_contact: "Email"
};

function validate(values) {
  if (!values.name.trim()) return "Name is required";
  if (!values.email.trim()) return "Email is required";
  if (!/^\S+@\S+\.\S+$/.test(values.email)) return "Please enter a valid email";
  if (!values.product_category) return "Please select a product category";
  if (values.product_description.trim().length < 10) return "Please describe your product in at least 10 characters";
  return null;
}

export function InquiryForm() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setValues((prev) => ({
        ...prev,
        services_needed: checked
          ? [...prev.services_needed, value]
          : prev.services_needed.filter((s) => s !== value)
      }));
    } else {
      setValues((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const validationError = validate(values);
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus("submitting");

    try {
      const { data: response, error: submitError } = await client
        .from("SourcingInquiry")
        .insert({
          data: {
            ...values,
            submitted_at: new Date().toISOString()
          }
        })
        .select()
        .single();

      if (submitError || response?.success === false) {
        const message = Array.isArray(response?.errors)
          ? response.errors.join(", ")
          : submitError?.message || "Submission failed. Please try again.";
        throw new Error(message);
      }

      setStatus("success");
      setValues(initialValues);
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-teal-50 rounded-xl p-8 border border-teal-200 text-center">
        <CheckCircle className="w-12 h-12 text-teal-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Thank you!</h3>
        <p className="text-slate-600">
          We have received your inquiry and will respond within 24 hours with a free sourcing assessment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
            Full name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-800 focus:ring-2 focus:ring-blue-800 focus:ring-offset-1 outline-none"
            placeholder="John Smith"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-800 focus:ring-2 focus:ring-blue-800 focus:ring-offset-1 outline-none"
            placeholder="john@company.com"
            required
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={values.company}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-800 focus:ring-2 focus:ring-blue-800 focus:ring-offset-1 outline-none"
            placeholder="Your company name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
            Phone / WhatsApp
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-800 focus:ring-2 focus:ring-blue-800 focus:ring-offset-1 outline-none"
            placeholder="+1 234 567 8900"
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="country" className="block text-sm font-medium text-slate-700 mb-2">
            Country
          </label>
          <input
            type="text"
            id="country"
            name="country"
            value={values.country}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-800 focus:ring-2 focus:ring-blue-800 focus:ring-offset-1 outline-none"
            placeholder="United States"
          />
        </div>
        <div>
          <label htmlFor="product_category" className="block text-sm font-medium text-slate-700 mb-2">
            Product category <span className="text-red-500">*</span>
          </label>
          <select
            id="product_category"
            name="product_category"
            value={values.product_category}
            onChange={handleChange}
            className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-800 focus:ring-2 focus:ring-blue-800 focus:ring-offset-1 outline-none bg-white"
            required
          >
            <option value="">Select a category</option>
            {productCategories.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="product_description" className="block text-sm font-medium text-slate-700 mb-2">
          Product description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="product_description"
          name="product_description"
          value={values.product_description}
          onChange={handleChange}
          rows={5}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-800 focus:ring-2 focus:ring-blue-800 focus:ring-offset-1 outline-none"
          placeholder="Describe the product, specifications, materials, target price, and any requirements..."
          required
        />
      </div>

      <div>
        <label htmlFor="estimated_quantity" className="block text-sm font-medium text-slate-700 mb-2">
          Estimated quantity
        </label>
        <input
          type="text"
          id="estimated_quantity"
          name="estimated_quantity"
          value={values.estimated_quantity}
          onChange={handleChange}
          className="w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-900 focus:border-blue-800 focus:ring-2 focus:ring-blue-800 focus:ring-offset-1 outline-none"
          placeholder="e.g. 1,000 units for first order"
        />
      </div>

      <div>
        <span className="block text-sm font-medium text-slate-700 mb-3">
          Services needed
        </span>
        <div className="grid sm:grid-cols-2 gap-3">
          {serviceOptions.map((service) => (
            <label key={service} className="flex items-center gap-3 p-3 rounded-lg border border-slate-200 hover:bg-slate-50 cursor-pointer">
              <input
                type="checkbox"
                name="services_needed"
                value={service}
                checked={values.services_needed.includes(service)}
                onChange={handleChange}
                className="w-5 h-5 text-blue-800 border-slate-300 rounded focus:ring-blue-800"
              />
              <span className="text-slate-700">{service}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <span className="block text-sm font-medium text-slate-700 mb-3">
          Preferred contact method
        </span>
        <div className="flex flex-wrap gap-4">
          {contactMethods.map((method) => (
            <label key={method} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="preferred_contact"
                value={method}
                checked={values.preferred_contact === method}
                onChange={handleChange}
                className="w-5 h-5 text-blue-800 border-slate-300 focus:ring-blue-800"
              />
              <span className="text-slate-700">{method}</span>
            </label>
          ))}
        </div>
      </div>

      {error && (
        <div className="p-4 rounded-lg bg-red-50 text-red-700 text-sm" role="alert">
          {error}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        className="w-full md:w-auto"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="mr-2 w-5 h-5 animate-spin" />
            Submitting...
          </>
        ) : (
          "Get a Free Sourcing Quote"
        )}
      </Button>
    </form>
  );
}
