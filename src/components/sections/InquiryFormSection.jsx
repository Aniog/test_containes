import { useState } from "react"
import { DataClient } from "@strikingly/sdk"
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config.jsx"
import SectionHeader from "@/components/ui/SectionHeader"
import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/Input"
import { Textarea } from "@/components/ui/Textarea"
import { Label } from "@/components/ui/Label"
import { Select, SelectItem } from "@/components/ui/Select"
import { CheckCircle, Loader2 } from "lucide-react"

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const categories = [
  "Machinery & Industrial Parts",
  "Electronics & Components",
  "Packaging & Print",
  "Textiles & Apparel",
  "Home & Hardware",
  "Cosmetics & Personal Care",
  "Other",
]

const initialValues = {
  name: "",
  email: "",
  company: "",
  phone: "",
  productCategory: "",
  productDescription: "",
  quantity: "",
  targetMarket: "",
  message: "",
}

export default function InquiryFormSection({ showHeader = true }) {
  const [values, setValues] = useState(initialValues)
  const [status, setStatus] = useState("idle")
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = () => {
    if (!values.name.trim()) return "Name is required"
    if (!values.email.trim() || !/^\S+@\S+\.\S+$/.test(values.email))
      return "Please enter a valid email"
    if (!values.productCategory) return "Please select a product category"
    if (!values.productDescription.trim()) return "Product description is required"
    return null
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    const validationError = validate()
    if (validationError) {
      setError(validationError)
      return
    }
    setStatus("submitting")

    try {
      const { data: response, error: createError } = await client
        .from("SourcingInquiry")
        .insert({
          data: {
            name: values.name,
            email: values.email,
            company: values.company,
            phone: values.phone,
            product_category: values.productCategory,
            product_description: values.productDescription,
            quantity: values.quantity,
            target_market: values.targetMarket,
            message: values.message,
            status: "new",
          },
        })
        .select()
        .single()

      if (createError || response?.success === false) {
        const message = response?.errors?.join(", ") || createError?.message || "Submission failed"
        setError(message)
        setStatus("error")
        return
      }

      setStatus("success")
      setValues(initialValues)
    } catch (err) {
      setError(err.message || "Submission failed")
      setStatus("error")
    }
  }

  return (
    <section id="inquiry" className="section bg-white">
      <div className="container-main max-w-3xl">
        {showHeader && (
          <SectionHeader
            badge="Get Started"
            title="Request a free sourcing quote"
            description="Tell us what you are looking for and we will get back to you within one business day."
          />
        )}

        <form onSubmit={handleSubmit} className="card space-y-6 p-6 md:p-10">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Full name *</Label>
              <Input
                id="name"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="John Smith"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Work email *</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={values.email}
                onChange={handleChange}
                placeholder="john@company.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                name="company"
                value={values.company}
                onChange={handleChange}
                placeholder="Your company name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone / WhatsApp</Label>
              <Input
                id="phone"
                name="phone"
                value={values.phone}
                onChange={handleChange}
                placeholder="+1 555 123 4567"
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="productCategory">Product category *</Label>
              <Select
                id="productCategory"
                name="productCategory"
                value={values.productCategory}
                onChange={handleChange}
              >
                <SelectItem value="">Select a category</SelectItem>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat}>
                    {cat}
                  </SelectItem>
                ))}
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="quantity">Estimated quantity</Label>
              <Input
                id="quantity"
                name="quantity"
                value={values.quantity}
                onChange={handleChange}
                placeholder="e.g. 2,000 units"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="productDescription">Product description *</Label>
            <Textarea
              id="productDescription"
              name="productDescription"
              value={values.productDescription}
              onChange={handleChange}
              placeholder="Describe the product, materials, size, color, packaging requirements, etc."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="targetMarket">Target market / destination country</Label>
            <Input
              id="targetMarket"
              name="targetMarket"
              value={values.targetMarket}
              onChange={handleChange}
              placeholder="e.g. United States, EU, Australia"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional requirements</Label>
            <Textarea
              id="message"
              name="message"
              value={values.message}
              onChange={handleChange}
              placeholder="Certifications needed, budget range, preferred Incoterm, timeline, etc."
            />
          </div>

          {error && <p className="text-sm font-medium text-red-600">{error}</p>}

          {status === "success" ? (
            <div className="flex items-center gap-3 rounded-lg bg-green-50 p-4 text-green-700">
              <CheckCircle className="h-5 w-5" />
              <p className="text-sm font-medium">
                Thank you. We have received your inquiry and will contact you soon.
              </p>
            </div>
          ) : (
            <Button type="submit" className="w-full md:w-auto" disabled={status === "submitting"}>
              {status === "submitting" && <Loader2 className="h-4 w-4 animate-spin" />}
              Submit Inquiry
            </Button>
          )}
        </form>
      </div>
    </section>
  )
}
