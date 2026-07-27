import { useEffect, useState } from "react"
import SectionHeader from "@/components/shared/SectionHeader"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectItem } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin } from "lucide-react"
import { useToast } from "@/components/ui/sonner"

export default function Contact() {
  const toast = useToast()
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    product: "",
    category: "",
    volume: "",
    message: "",
  })

  useEffect(() => {
    document.title = "Contact Us | SSourcing China"
  }, [])

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    toast("Thank you. We have received your inquiry and will reply within one business day.", { type: "success" })
    setForm({
      name: "",
      email: "",
      company: "",
      product: "",
      category: "",
      volume: "",
      message: "",
    })
  }

  return (
    <div className="bg-white">
      <section className="bg-slate-900 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Get a free sourcing quote or ask us anything about your China supply chain.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <SectionHeader
                title="Get a Free Sourcing Quote"
                description="Fill out the form below and we will get back to you within one business day."
              />
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full name</label>
                    <Input id="name" name="name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email address</label>
                    <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company name</label>
                    <Input id="company" name="company" value={form.company} onChange={handleChange} />
                  </div>
                  <div>
                    <label htmlFor="product" className="block text-sm font-medium text-slate-700 mb-2">Product you want to source</label>
                    <Input id="product" name="product" value={form.product} onChange={handleChange} required />
                  </div>
                  <div>
                    <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-2">Product category</label>
                    <Select id="category" name="category" value={form.category} onChange={handleChange}>
                      <SelectItem value="">Select a category</SelectItem>
                      <SelectItem value="electronics">Electronics & Components</SelectItem>
                      <SelectItem value="home">Furniture & Home Goods</SelectItem>
                      <SelectItem value="apparel">Apparel & Textiles</SelectItem>
                      <SelectItem value="industrial">Industrial & Hardware</SelectItem>
                      <SelectItem value="packaging">Packaging & Printing</SelectItem>
                      <SelectItem value="automotive">Automotive & Parts</SelectItem>
                      <SelectItem value="promotional">Promotional Products</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="volume" className="block text-sm font-medium text-slate-700 mb-2">Estimated order volume</label>
                    <Select id="volume" name="volume" value={form.volume} onChange={handleChange}>
                      <SelectItem value="">Select volume</SelectItem>
                      <SelectItem value="prototype">Prototype / Sample only</SelectItem>
                      <SelectItem value="small">Small (under 1,000 units)</SelectItem>
                      <SelectItem value="medium">Medium (1,000 – 10,000 units)</SelectItem>
                      <SelectItem value="large">Large (10,000+ units)</SelectItem>
                    </Select>
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Project details</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about specs, target price, destination country, and any requirements."
                    required
                  />
                </div>
                <Button type="submit" size="lg">Get a Free Sourcing Quote</Button>
              </form>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <Mail className="h-5 w-5 text-brand mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Email</h4>
                    <p className="text-sm text-slate-600">hello@ssourcingchina.com</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <Phone className="h-5 w-5 text-brand mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Phone</h4>
                    <p className="text-sm text-slate-600">+86 755 1234 5678</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="flex items-start gap-4 p-6">
                  <MapPin className="h-5 w-5 text-brand mt-1" />
                  <div>
                    <h4 className="font-semibold text-slate-900">Office</h4>
                    <p className="text-sm text-slate-600">
                      18F, Block A, SEG Plaza<br />
                      Huaqiang North Road, Futian District<br />
                      Shenzhen, Guangdong, China 518031
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
