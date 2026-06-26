import { useState } from "react";
import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "../../config.jsx";
import { Send, Loader2, CheckCircle } from "lucide-react";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

export default function InquiryFormSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    country: "",
    product_category: "",
    description: "",
    estimated_volume: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setStatus("submitting");

    if (!form.name.trim() || !form.email.trim()) {
      setError("Name and email are required.");
      setStatus("idle");
      return;
    }

    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      setStatus("idle");
      return;
    }

    try {
      const { data: response, error: createError } = await client
        .from("SourcingInquiry")
        .insert({
          data: {
            name: form.name.trim(),
            email: form.email.trim(),
            company: form.company.trim(),
            country: form.country.trim(),
            product_category: form.product_category.trim(),
            description: form.description.trim(),
            estimated_volume: form.estimated_volume.trim(),
            status: "new",
          },
        })
        .select()
        .single();

      if (createError || response?.success === false) {
        const msg = Array.isArray(response?.errors)
          ? response.errors.join(", ")
          : createError?.message || "Submission failed. Please try again.";
        setError(msg);
        setStatus("error");
        return;
      }

      setStatus("success");
      setForm({
        name: "",
        email: "",
        company: "",
        country: "",
        product_category: "",
        description: "",
        estimated_volume: "",
      });
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      setStatus("error");
    }
  };

  return (
    <section id="inquiry" className="py-16 lg:py-24 bg-surface">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-text-primary mb-4">
            Get a Free Sourcing Quote
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Tell us what you need. We will review your requirements and respond
            within 1-2 business days.
          </p>
        </div>

        {status === "success" ? (
          <div className="p-8 rounded-xl bg-white border border-green-200 text-center">
            <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-text-primary mb-2">
              Inquiry Submitted
            </h3>
            <p className="text-sm text-text-secondary">
              Thank you for reaching out. Our team will review your request and
              get back to you shortly.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-8 rounded-xl bg-white border border-border-light shadow-sm"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-primary mb-1.5"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border-light text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-primary mb-1.5"
                >
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border-light text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="company"
                  className="block text-sm font-medium text-text-primary mb-1.5"
                >
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border-light text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-text-primary mb-1.5"
                >
                  Country
                </label>
                <input
                  id="country"
                  name="country"
                  type="text"
                  value={form.country}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border-light text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="United States"
                />
              </div>
              <div>
                <label
                  htmlFor="product_category"
                  className="block text-sm font-medium text-text-primary mb-1.5"
                >
                  Product Category
                </label>
                <input
                  id="product_category"
                  name="product_category"
                  type="text"
                  value={form.product_category}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border-light text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="e.g. Electronics"
                />
              </div>
              <div>
                <label
                  htmlFor="estimated_volume"
                  className="block text-sm font-medium text-text-primary mb-1.5"
                >
                  Estimated Volume
                </label>
                <input
                  id="estimated_volume"
                  name="estimated_volume"
                  type="text"
                  value={form.estimated_volume}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-border-light text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                  placeholder="e.g. 5,000 units / month"
                />
              </div>
            </div>
            <div className="mb-5">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-text-primary mb-1.5"
              >
                Sourcing Requirements
              </label>
              <textarea
                id="description"
                name="description"
                rows={4}
                value={form.description}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 rounded-lg border border-border-light text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-y"
                placeholder="Describe the product, specifications, target price, and any other requirements..."
              />
            </div>

            {error && (
              <p className="text-sm text-red-600 mb-4">{error}</p>
            )}

            <button
              type="submit"
              disabled={status === "submitting"}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-secondary text-white text-sm font-semibold hover:bg-secondary-dark transition-colors disabled:opacity-60"
            >
              {status === "submitting" ? (
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
          </form>
        )}
      </div>
    </section>
  );
}
