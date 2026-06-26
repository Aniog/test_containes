import * as React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/toaster"
import { createInquiry } from "@/api/inquiries"

export default function InquiryForm({ className = "" }) {
  const { toast } = useToast()
  const [status, setStatus] = React.useState("idle")
  const [values, setValues] = React.useState({
    name: "",
    email: "",
    company: "",
    product: "",
    quantity: "",
    message: "",
  })

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
  }

  const validate = (v) => {
    if (!v.name.trim()) return "Name is required"
    if (!v.email.trim()) return "Email is required"
    if (!/^\S+@\S+\.\S+$/.test(v.email)) return "Please enter a valid email"
    if (!v.product.trim()) return "Product category or name is required"
    return null
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    const err = validate(values)
    if (err) {
      toast(err, "error")
      return
    }
    setStatus("submitting")
    try {
      await createInquiry(values)
      toast("Thank you. We have received your inquiry and will reply within 24 hours.", "success")
      setValues({ name: "", email: "", company: "", product: "", quantity: "", message: "" })
      setStatus("success")
    } catch (error) {
      toast(error?.message || "Submission failed. Please try again.", "error")
      setStatus("error")
    }
  }

  return (
    <form onSubmit={onSubmit} className={`space-y-5 ${className}`}>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="inq-name">Full name</Label>
          <Input id="inq-name" name="name" value={values.name} onChange={onChange} placeholder="John Smith" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="inq-email">Business email</Label>
          <Input id="inq-email" name="email" type="email" value={values.email} onChange={onChange} placeholder="john@company.com" required />
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="inq-company">Company name</Label>
          <Input id="inq-company" name="company" value={values.company} onChange={onChange} placeholder="Your company" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="inq-product">Product to source</Label>
          <Input id="inq-product" name="product" value={values.product} onChange={onChange} placeholder="e.g. wireless earbuds" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="inq-quantity">Estimated quantity or order value</Label>
        <Input id="inq-quantity" name="quantity" value={values.quantity} onChange={onChange} placeholder="e.g. 5,000 units / $20,000" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="inq-message">Project details</Label>
        <Textarea id="inq-message" name="message" value={values.message} onChange={onChange} placeholder="Tell us about the product specs, target price, packaging, and delivery requirements." />
      </div>
      <Button type="submit" className="w-full md:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending..." : "Get a Free Sourcing Quote"}
      </Button>
    </form>
  )
}
