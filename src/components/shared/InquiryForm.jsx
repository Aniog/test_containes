import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Label } from "@/components/ui/Label";
import { Select } from "@/components/ui/Select";
import { createInquiry } from "@/api/inquiries";

const categories = [
  "Electronics & Components",
  "Machinery & Industrial Parts",
  "Home & Garden",
  "Textiles & Apparel",
  "Packaging & Printing",
  "Consumer Goods",
  "Automotive Parts",
  "Beauty & Personal Care",
  "Other",
];

export default function InquiryForm({ inline = false }) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product_category: "",
    product_description: "",
    quantity: "",
    target_price: "",
    country: "",
    message: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = (v) => {
    if (!v.name.trim()) return "Name is required";
    if (!v.email.trim()) return "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "Please provide a valid email";
    if (!v.product_description.trim()) return "Product description is required";
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    const err = validate(values);
    if (err) {
      setError(err);
      return;
    }
    setStatus("submitting");
    try {
      await createInquiry({
        data: {
          id: uuidv4(),
          ...values,
          status: "new",
        },
      });
      setStatus("success");
      setValues({
        name: "",
        email: "",
        company: "",
        phone: "",
        product_category: "",
        product_description: "",
        quantity: "",
        target_price: "",
        country: "",
        message: "",
      });
    } catch (err) {
      setError(err.message || "Failed to submit inquiry. Please try again.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-xl border border-green-200 bg-green-50 p-8 text-center">
        <CheckCircle className="mx-auto h-12 w-12 text-green-600" />
        <h3 className="mt-4 text-xl font-semibold text-green-900">Inquiry Received</h3>
        <p className="mt-2 text-green-800">
          Thank you for contacting SSourcing China. Our team will review your request and respond
          within 24 business hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className={cn("grid gap-5", inline ? "sm:grid-cols-2" : "sm:grid-cols-2")}>
        <div className="space-y-2">
          <Label htmlFor="name">Full name *</Label>
          <Input id="name" name="name" value={values.name} onChange={onChange} placeholder="John Smith" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Business email *</Label>
          <Input id="email" name="email" type="email" value={values.email} onChange={onChange} placeholder="john@company.com" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="company">Company</Label>
          <Input id="company" name="company" value={values.company} onChange={onChange} placeholder="Your company name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone / WhatsApp</Label>
          <Input id="phone" name="phone" value={values.phone} onChange={onChange} placeholder="+1 555 123 4567" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="product_category">Product category</Label>
          <Select id="product_category" name="product_category" value={values.product_category} onChange={onChange}>
            <option value="">Select a category</option>
            {categories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="country">Your country</Label>
          <Input id="country" name="country" value={values.country} onChange={onChange} placeholder="United States" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="quantity">Estimated quantity</Label>
          <Input id="quantity" name="quantity" value={values.quantity} onChange={onChange} placeholder="e.g. 1,000 units" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="target_price">Target price (USD)</Label>
          <Input id="target_price" name="target_price" value={values.target_price} onChange={onChange} placeholder="e.g. $5.00 / unit" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="product_description">Product description *</Label>
        <Textarea
          id="product_description"
          name="product_description"
          value={values.product_description}
          onChange={onChange}
          rows={4}
          placeholder="Describe the product, specifications, materials, certifications needed, etc."
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Additional message</Label>
        <Textarea
          id="message"
          name="message"
          value={values.message}
          onChange={onChange}
          rows={3}
          placeholder="Timeline, shipping terms, special requirements, questions..."
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <Button type="submit" variant="primary" size="lg" disabled={status === "submitting"} className="w-full sm:w-auto">
        {status === "submitting" ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          "Get a Free Sourcing Quote"
        )}
      </Button>
    </form>
  );
}

function cn(...inputs) {
  return inputs.filter(Boolean).join(" ");
}
