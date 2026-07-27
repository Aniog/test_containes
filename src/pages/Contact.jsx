import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx";
import { toast } from "sonner";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const productCategories = [
  "Electronics",
  "Machinery & Industrial",
  "Textiles & Apparel",
  "Home & Garden",
  "Consumer Goods",
  "Automotive Parts",
  "Packaging & Printing",
  "Other",
];

const servicesOptions = [
  "Supplier Sourcing",
  "Factory Verification",
  "Quality Inspection",
  "Production Follow-up",
  "Shipping Coordination",
  "Custom Packaging",
];

const budgetRanges = [
  "Under $10,000",
  "$10,000 - $50,000",
  "$50,000 - $100,000",
  "$100,000 - $500,000",
  "Over $500,000",
];

const initialValues = {
  name: "",
  email: "",
  company: "",
  phone: "",
  product_category: "",
  product_description: "",
  estimated_quantity: "",
  target_market: "",
  services_needed: [],
  budget_range: "",
  message: "",
  source: "",
};

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setValues((v) => ({
        ...v,
        services_needed: checked
          ? [...v.services_needed, value]
          : v.services_needed.filter((s) => s !== value),
      }));
    } else {
      setValues((v) => ({ ...v, [name]: value }));
    }
  };

  const validate = () => {
    if (!values.name.trim()) return "Name is required.";
    if (!values.email.trim()) return "Email is required.";
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return "Please enter a valid email.";
    if (!values.product_description.trim() || values.product_description.length < 10)
      return "Please describe your product (at least 10 characters).";
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      toast.error(err);
      return;
    }
    setStatus("submitting");

    try {
      const { data: response, error } = await client
        .from("SourcingInquiry")
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company,
            phone: values.phone,
            product_category: values.product_category,
            product_description: values.product_description,
            estimated_quantity: values.estimated_quantity,
            target_market: values.target_market,
            services_needed: values.services_needed,
            budget_range: values.budget_range,
            message: values.message,
            source: values.source,
          },
        })
        .select()
        .single();

      if (error || response?.success === false) {
        const msg = Array.isArray(response?.errors)
          ? response.errors.join(", ")
          : error?.message || "Submission failed. Please try again.";
        toast.error(msg);
        setStatus("error");
        return;
      }

      toast.success("Inquiry submitted successfully! We will be in touch within 48 hours.");
      setValues(initialValues);
      setStatus("success");
    } catch (err) {
      toast.error(err?.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-secondary uppercase tracking-wider mb-3">
            Contact
          </p>
          <h1 className="text-white mb-4">Get a Free Sourcing Quote</h1>
          <p className="text-blue-100/80 max-w-2xl mx-auto text-lg">
            Tell us what you are looking for and we will send you a detailed
            quote within 48 hours. No upfront payment required.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">
                Contact Information
              </h2>
              <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                Our team is available Monday through Friday, 9:00 AM to 6:00 PM
                China Standard Time (GMT+8).
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Email</p>
                    <p className="text-sm text-slate-600">
                      hello@ssourcingchina.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">Phone</p>
                    <p className="text-sm text-slate-600">+86 755 8888 0000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      Address
                    </p>
                    <p className="text-sm text-slate-600">
                      18/F, Shenzhen International Trade Center, Futian District,
                      Shenzhen, China
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-900">
                      Business Hours
                    </p>
                    <p className="text-sm text-slate-600">
                      Mon – Fri, 9:00 – 18:00 CST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <div className="bg-surface rounded-lg p-6 md:p-8 lg:p-10 border border-slate-100">
                <h2 className="text-2xl font-bold text-slate-900 mb-2">
                  Sourcing Inquiry Form
                </h2>
                <p className="text-sm text-slate-500 mb-8">
                  Fields marked with * are required.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Full Name *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={values.name}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="John Smith"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Email Address *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={values.email}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Company Name
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={values.company}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={values.phone}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="+1 234 567 8900"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="product_category"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Product Category
                      </label>
                      <select
                        id="product_category"
                        name="product_category"
                        value={values.product_category}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        <option value="">Select a category</option>
                        {productCategories.map((c) => (
                          <option key={c} value={c}>
                            {c}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label
                        htmlFor="budget_range"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Estimated Budget
                      </label>
                      <select
                        id="budget_range"
                        name="budget_range"
                        value={values.budget_range}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      >
                        <option value="">Select a range</option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="product_description"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Product Description *
                    </label>
                    <textarea
                      id="product_description"
                      name="product_description"
                      rows={4}
                      value={values.product_description}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="Describe the product you want to source, including specs, materials, colors, and any requirements..."
                      required
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="estimated_quantity"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Estimated Quantity
                      </label>
                      <input
                        id="estimated_quantity"
                        name="estimated_quantity"
                        type="text"
                        value={values.estimated_quantity}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="e.g. 5,000 units"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="target_market"
                        className="block text-sm font-medium text-slate-700 mb-1.5"
                      >
                        Target Market
                      </label>
                      <input
                        id="target_market"
                        name="target_market"
                        type="text"
                        value={values.target_market}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                        placeholder="e.g. USA, Germany, Australia"
                      />
                    </div>
                  </div>

                  <div>
                    <p className="block text-sm font-medium text-slate-700 mb-2">
                      Services Needed
                    </p>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {servicesOptions.map((svc) => (
                        <label
                          key={svc}
                          className="flex items-center gap-2.5 cursor-pointer"
                        >
                          <input
                            type="checkbox"
                            name="services_needed"
                            value={svc}
                            checked={values.services_needed.includes(svc)}
                            onChange={handleChange}
                            className="w-4 h-4 text-primary border-slate-300 rounded focus:ring-primary"
                          />
                          <span className="text-sm text-slate-700">{svc}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      Additional Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={values.message}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="Any other details, deadlines, or requirements..."
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="source"
                      className="block text-sm font-medium text-slate-700 mb-1.5"
                    >
                      How did you hear about us?
                    </label>
                    <input
                      id="source"
                      name="source"
                      type="text"
                      value={values.source}
                      onChange={handleChange}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-md text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                      placeholder="Google, LinkedIn, referral, etc."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary text-white font-medium rounded-md hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === "submitting" ? (
                      "Submitting..."
                    ) : (
                      <>
                        Submit Inquiry
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
