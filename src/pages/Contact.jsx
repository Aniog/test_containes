import { useState } from "react";
import PageLayout from "../components/layout/PageLayout.jsx";
import Navbar from "../components/layout/Navbar.jsx";
import Footer from "../components/layout/Footer.jsx";
import { DataClient } from "@strikingly/sdk";
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "../config.jsx";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Loader2,
  CheckCircle,
} from "lucide-react";

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@ssourcingchina.com",
    href: "mailto:contact@ssourcingchina.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+86 21 1234 5678",
    href: "tel:+862112345678",
  },
  {
    icon: MapPin,
    label: "Office",
    value: "Shanghai, China",
    href: "#",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat, 9:00 - 18:00 CST",
    href: "#",
  },
];

export default function Contact() {
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
    <PageLayout title="Contact Us">
      <Navbar />
      <main className="flex-1">
        <section className="py-16 lg:py-24 bg-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-primary mb-4">
                Contact Us
              </h1>
              <p className="text-text-secondary text-base sm:text-lg">
                Ready to start sourcing? Fill out the form below or reach out
                directly. We typically respond within 1-2 business days.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
              <div className="lg:col-span-2 space-y-6">
                <div className="p-6 rounded-xl bg-white border border-border-light">
                  <h2 className="text-lg font-semibold text-text-primary mb-5">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-start gap-3 group"
                      >
                        <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <div className="text-xs text-text-muted mb-0.5">
                            {item.label}
                          </div>
                          <div className="text-sm font-medium text-text-primary group-hover:text-primary transition-colors">
                            {item.value}
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="p-6 rounded-xl bg-primary text-white">
                  <h3 className="text-base font-semibold mb-2">
                    Free Initial Consultation
                  </h3>
                  <p className="text-sm text-white/80 leading-relaxed">
                    Not sure where to start? Send us a brief description of what
                    you need. We will review it and suggest the best next steps at
                    no cost.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-3">
                {status === "success" ? (
                  <div className="p-8 rounded-xl bg-white border border-green-200 text-center">
                    <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-text-primary mb-2">
                      Inquiry Submitted
                    </h3>
                    <p className="text-sm text-text-secondary">
                      Thank you for reaching out. Our team will review your
                      request and get back to you within 1-2 business days.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="p-6 sm:p-8 rounded-xl bg-white border border-border-light shadow-sm"
                  >
                    <h2 className="text-lg font-semibold text-text-primary mb-6">
                      Send Us an Inquiry
                    </h2>

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
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </PageLayout>
  );
}
