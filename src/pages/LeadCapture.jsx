import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { CheckCircle, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { leadsApi, LEAD_SOURCES } from "@/api/leads"

const BENEFITS = [
  "Free 14-day trial, no credit card required",
  "Onboarding support included",
  "Cancel anytime, no lock-in",
]

export default function LeadCapture() {
  const navigate = useNavigate()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    source: "",
    notes: "",
  })
  const [errors, setErrors] = useState({})

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = "Name is required"
    if (!form.email.trim()) errs.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Enter a valid email"
    if (!form.company.trim()) errs.company = "Company is required"
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setLoading(true)
    setTimeout(() => {
      leadsApi.add(form)
      setLoading(false)
      setSubmitted(true)
    }, 600)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-slate-100 flex items-center justify-center px-4">
        <Card className="w-full max-w-md text-center p-8">
          <div className="flex justify-center mb-4">
            <CheckCircle className="w-16 h-16 text-green-500" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">You're on the list!</h2>
          <p className="text-slate-500 mb-6">
            Thanks for your interest. Our team will reach out within 1 business day.
          </p>
          <Button
            variant="outline"
            className="w-full"
            onClick={() => {
              setSubmitted(false)
              setForm({ name: "", email: "", phone: "", company: "", source: "", notes: "" })
            }}
          >
            Submit another lead
          </Button>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 rounded-full px-4 py-1.5 text-sm font-medium mb-4">
            <Zap className="w-4 h-4" />
            Get started today
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Grow your business<br />
            <span className="text-indigo-600">with the right tools</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-xl mx-auto">
            Tell us about yourself and we'll get you set up with a personalized demo.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Benefits sidebar */}
          <div className="md:col-span-2 space-y-6">
            <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 mb-4">Why teams choose us</h3>
              <ul className="space-y-3">
                {BENEFITS.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-indigo-600 rounded-xl p-6 text-white">
              <p className="text-sm font-medium opacity-80 mb-1">Trusted by</p>
              <p className="text-3xl font-bold">2,400+</p>
              <p className="text-sm opacity-80 mt-1">sales teams worldwide</p>
            </div>
          </div>

          {/* Form */}
          <Card className="md:col-span-3">
            <CardHeader>
              <CardTitle>Request a demo</CardTitle>
              <CardDescription>Fill in your details and we'll be in touch shortly.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name">Full name *</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={handleChange}
                      className={errors.name ? "border-red-400" : ""}
                    />
                    {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="email">Work email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="jane@company.com"
                      value={form.email}
                      onChange={handleChange}
                      className={errors.email ? "border-red-400" : ""}
                    />
                    {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="company">Company *</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Acme Corp"
                      value={form.company}
                      onChange={handleChange}
                      className={errors.company ? "border-red-400" : ""}
                    />
                    {errors.company && <p className="text-xs text-red-500">{errors.company}</p>}
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="phone">Phone number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="source">How did you hear about us?</Label>
                  <Select
                    id="source"
                    name="source"
                    value={form.source}
                    onChange={handleChange}
                  >
                    <option value="">Select a source</option>
                    {LEAD_SOURCES.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="notes">Anything else you'd like us to know?</Label>
                  <Textarea
                    id="notes"
                    name="notes"
                    placeholder="Tell us about your team size, goals, or any specific needs..."
                    value={form.notes}
                    onChange={handleChange}
                    rows={3}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-10"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Request my demo →"}
                </Button>

                <p className="text-xs text-center text-slate-400">
                  By submitting, you agree to our Terms of Service and Privacy Policy.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
