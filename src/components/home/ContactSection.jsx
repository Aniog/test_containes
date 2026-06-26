import { useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    product: "",
    message: "",
  })
  const [submitting, setSubmitting] = useState(false)

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in your name, email, and message.")
      return
    }
    setSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 900))
    setSubmitting(false)
    toast.success("Thank you. Our sales team will contact you shortly.")
    setForm({
      name: "",
      email: "",
      company: "",
      phone: "",
      product: "",
      message: "",
    })
  }

  return (
    <section
      id="contact"
      className="bg-slate-950 py-16 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          <div>
            <span className="text-cyan-400 text-sm font-semibold uppercase tracking-widest">
              Get in Touch
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-slate-50">
              Request a Quote or Demo
            </h2>
            <p className="mt-4 text-slate-400 text-lg leading-relaxed">
              Tell us about your material, thickness, and production goals. We
              will recommend the right ARTITECT folding machine for your shop.
            </p>

            <div className="mt-8 space-y-5">
              <a
                href="tel:+18001234567"
                className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-cyan-400">
                  <Phone className="h-5 w-5" />
                </div>
                <span className="font-medium">1-800-123-4567</span>
              </a>

              <a
                href="mailto:sales@artitectmachinery.com"
                className="flex items-center gap-4 text-slate-300 hover:text-cyan-400 transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-cyan-400">
                  <Mail className="h-5 w-5" />
                </div>
                <span className="font-medium">sales@artitectmachinery.com</span>
              </a>

              <div className="flex items-start gap-4 text-slate-300">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-cyan-400">
                  <MapPin className="h-5 w-5" />
                </div>
                <span className="font-medium">
                  123 Industrial Blvd, Suite 400
                  <br />
                  Manufacturing City, MC 10101
                </span>
              </div>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 md:p-8"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-slate-300"
                >
                  Full name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="John Smith"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-slate-300"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="john@company.com"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="company"
                  className="text-sm font-medium text-slate-300"
                >
                  Company
                </label>
                <Input
                  id="company"
                  name="company"
                  value={form.company}
                  onChange={onChange}
                  placeholder="Your company"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="phone"
                  className="text-sm font-medium text-slate-300"
                >
                  Phone
                </label>
                <Input
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
            </div>

            <div className="mt-4 space-y-2">
              <label
                htmlFor="product"
                className="text-sm font-medium text-slate-300"
              >
                Product of interest
              </label>
              <select
                id="product"
                name="product"
                value={form.product}
                onChange={onChange}
                className="flex h-11 w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-50 focus-visible:border-cyan-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-500"
              >
                <option value="">Select a product</option>
                <option value="double-folding-machine">
                  Double Folding Machine
                </option>
                <option value="double-folder">Double Folder</option>
                <option value="sheet-metal-folder">Sheet Metal Folder</option>
                <option value="metal-folder">Metal Folder</option>
                <option value="metal-folder-machine">Metal Folder Machine</option>
                <option value="sheet-metal-folding-machine">
                  Sheet Metal Folding Machine
                </option>
              </select>
            </div>

            <div className="mt-4 space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-slate-300"
              >
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Tell us about your project, material, and required capacity."
                required
              />
            </div>

            <Button
              type="submit"
              className="mt-6 w-full"
              disabled={submitting}
            >
              {submitting ? "Sending…" : "Send Message"}
              {!submitting && <Send className="w-4 h-4" />}
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}
