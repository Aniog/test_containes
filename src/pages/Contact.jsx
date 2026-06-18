import { useState } from "react";
import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";
import { CheckCircle, Mail, MapPin, Clock, Globe } from "lucide-react";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const serviceOptions = [
  "Supplier Sourcing",
  "Factory Verification",
  "Quality Inspection",
  "Production Follow-up",
  "Shipping Coordination",
  "Trade Compliance",
];

const categoryOptions = [
  "Electronics & Components",
  "Furniture & Home Décor",
  "Apparel & Textiles",
  "Hardware & Industrial",
  "Packaging & Printing",
  "Toys & Baby Products",
  "Health & Beauty",
  "Automotive & Accessories",
  "Sports & Outdoor",
  "Other",
];

const initialValues = {
  full_name: "",
  email: "",
  company: "",
  country: "",
  product_category: "",
  product_description: "",
  estimated_quantity: "",
  target_price: "",
  services_needed: [],
  message: "",
  how_did_you_hear: "",
};

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const handleServiceToggle = (svc) => {
    setValues((v) => ({
      ...v,
      services_needed: v.services_needed.includes(svc)
        ? v.services_needed.filter((s) => s !== svc)
        : [...v.services_needed, svc],
    }));
  };

  const validate = () => {
    if (!values.full_name.trim()) return "Full name is required.";
    if (!values.email.trim()) return "Email address is required.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return "Please enter a valid email address.";
    if (!values.product_description.trim()) return "Product description is required.";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus("submitting");
    console.log("Submitting sourcing inquiry:", values);

    const { data: response, error: submitError } = await client
      .from("Sourcing Inquiries")
      .insert({ data: values })
      .select()
      .single();

    if (submitError || response?.success === false) {
      const msg =
        Array.isArray(response?.errors) && response.errors.length > 0
          ? response.errors.join(", ")
          : submitError?.message || "Submission failed. Please try again.";
      console.error("Submission error:", msg);
      setError(msg);
      setStatus("error");
      return;
    }

    console.log("Inquiry submitted successfully:", response?.data);
    setStatus("success");
    setValues(initialValues);
  };

  return (
    <div>
      {/* Header */}
      <section className="bg-[#0D2545] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-[#E8621A] text-sm font-semibold uppercase tracking-widest">Get in Touch</span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Get a Free Sourcing Quote</h1>
            <p className="text-slate-300 text-lg leading-relaxed">
              Tell us what you need and we'll respond within 24 hours with a tailored sourcing plan and transparent pricing.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-[#F4F6FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-slate-200 p-6 mb-6">
                <h2 className="text-lg font-bold text-[#0D2545] mb-4">Contact Information</h2>
                <div className="flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Office Location</p>
                      <p className="text-sm text-gray-500">Guangzhou, China</p>
                      <p className="text-sm text-gray-500">Operations across all major manufacturing hubs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Email</p>
                      <a href="mailto:info@ssourcingchina.com" className="text-sm text-[#1A4B8C] hover:text-[#E8621A] transition-colors">
                        info@ssourcingchina.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Response Time</p>
                      <p className="text-sm text-gray-500">Within 24 hours on business days</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Globe className="w-5 h-5 text-[#E8621A] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-semibold text-gray-700">Languages</p>
                      <p className="text-sm text-gray-500">English · Français · Español · Deutsch</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#1A4B8C] rounded-xl p-6">
                <h3 className="font-bold text-white mb-3">What Happens Next?</h3>
                <ol className="flex flex-col gap-3">
                  {[
                    "We review your inquiry within 24 hours",
                    "We send you a tailored sourcing proposal",
                    "We schedule a call to discuss your requirements",
                    "We begin supplier research and factory outreach",
                  ].map((step, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-slate-200">
                      <span className="w-5 h-5 rounded-full bg-[#E8621A] text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              {status === "success" ? (
                <div className="bg-white rounded-xl border border-slate-200 p-10 text-center">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h2 className="text-2xl font-bold text-[#0D2545] mb-2">Inquiry Received!</h2>
                  <p className="text-gray-600 mb-6">
                    Thank you for reaching out. Our team will review your inquiry and respond within 24 hours with a tailored sourcing proposal.
                  </p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="bg-[#1A4B8C] hover:bg-[#0D2545] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-200 p-6 md:p-8">
                  <h2 className="text-xl font-bold text-[#0D2545] mb-6">Sourcing Inquiry Form</h2>

                  {/* Contact Details */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Full Name <span className="text-[#E8621A]">*</span>
                      </label>
                      <input
                        type="text"
                        name="full_name"
                        value={values.full_name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1A4B8C]/30 focus:border-[#1A4B8C]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">
                        Business Email <span className="text-[#E8621A]">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1A4B8C]/30 focus:border-[#1A4B8C]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Company Name</label>
                      <input
                        type="text"
                        name="company"
                        value={values.company}
                        onChange={handleChange}
                        placeholder="Your company"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1A4B8C]/30 focus:border-[#1A4B8C]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Country</label>
                      <input
                        type="text"
                        name="country"
                        value={values.country}
                        onChange={handleChange}
                        placeholder="Your country"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1A4B8C]/30 focus:border-[#1A4B8C]"
                      />
                    </div>
                  </div>

                  {/* Product Details */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Product Category</label>
                    <select
                      name="product_category"
                      value={values.product_category}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1A4B8C]/30 focus:border-[#1A4B8C] bg-white"
                    >
                      <option value="">Select a category</option>
                      {categoryOptions.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">
                      Product Description <span className="text-[#E8621A]">*</span>
                    </label>
                    <textarea
                      name="product_description"
                      value={values.product_description}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Describe the product you want to source — include specifications, materials, dimensions, certifications needed, or any reference products."
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1A4B8C]/30 focus:border-[#1A4B8C] resize-none"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Estimated Quantity</label>
                      <input
                        type="text"
                        name="estimated_quantity"
                        value={values.estimated_quantity}
                        onChange={handleChange}
                        placeholder="e.g. 500 units, 1000 pcs/month"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1A4B8C]/30 focus:border-[#1A4B8C]"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1">Target Price</label>
                      <input
                        type="text"
                        name="target_price"
                        value={values.target_price}
                        onChange={handleChange}
                        placeholder="e.g. USD 5–8 per unit"
                        className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1A4B8C]/30 focus:border-[#1A4B8C]"
                      />
                    </div>
                  </div>

                  {/* Services */}
                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Services Needed</label>
                    <div className="flex flex-wrap gap-2">
                      {serviceOptions.map((svc) => (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => handleServiceToggle(svc)}
                          className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                            values.services_needed.includes(svc)
                              ? "bg-[#1A4B8C] text-white border-[#1A4B8C]"
                              : "bg-white text-gray-600 border-slate-300 hover:border-[#1A4B8C] hover:text-[#1A4B8C]"
                          }`}
                        >
                          {svc}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">Additional Message</label>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="Any other details, questions, or context that would help us understand your needs."
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1A4B8C]/30 focus:border-[#1A4B8C] resize-none"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-gray-700 mb-1">How Did You Find Us?</label>
                    <input
                      type="text"
                      name="how_did_you_hear"
                      value={values.how_did_you_hear}
                      onChange={handleChange}
                      placeholder="e.g. Google search, referral, LinkedIn"
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#1A4B8C]/30 focus:border-[#1A4B8C]"
                    />
                  </div>

                  {error && (
                    <div className="mb-4 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
                      {error}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="w-full bg-[#E8621A] hover:bg-[#C9541A] disabled:opacity-60 text-white font-bold py-3.5 rounded-lg text-base transition-colors"
                  >
                    {status === "submitting" ? "Submitting…" : "Submit Sourcing Inquiry"}
                  </button>

                  <p className="text-xs text-gray-400 text-center mt-3">
                    We respond within 24 hours. Your information is kept confidential.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
