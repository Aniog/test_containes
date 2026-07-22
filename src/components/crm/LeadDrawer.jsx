import { useState } from "react"
import { X, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { leadsApi, LEAD_STATUSES, LEAD_SOURCES } from "@/api/leads"

export default function LeadDrawer({ lead, onClose }) {
  const isNew = !lead
  const [form, setForm] = useState(
    lead || { name: "", email: "", phone: "", company: "", source: "", status: "New", notes: "" }
  )
  const [errors, setErrors] = useState({})
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState(null)

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = "Required"
    if (!form.email.trim()) errs.email = "Required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email"
    if (!form.company.trim()) errs.company = "Required"
    return errs
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const handleSave = async () => {
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    setSaving(true)
    setSaveError(null)
    try {
      if (isNew) {
        await leadsApi.add(form)
      } else {
        await leadsApi.update(lead.id, form)
      }
      onClose()
    } catch (err) {
      console.error('Save failed:', err)
      setSaveError(err.message || 'Failed to save lead')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div className="flex-1 bg-black/30" onClick={onClose} />
      {/* Panel */}
      <div className="w-full max-w-md bg-white shadow-xl flex flex-col h-full overflow-y-auto">
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200">
          <h2 className="text-lg font-semibold text-slate-900">
            {isNew ? "Add New Lead" : "Edit Lead"}
          </h2>
          <button onClick={onClose} className="text-slate-400 hover:text-slate-600 p-1 rounded">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 px-6 py-5 space-y-4">
          {saveError && (
            <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg px-3 py-2 text-sm">
              {saveError}
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="d-name">Full name *</Label>
              <Input id="d-name" name="name" value={form.name} onChange={handleChange}
                placeholder="Jane Smith" className={errors.name ? "border-red-400" : ""} />
              {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="d-company">Company *</Label>
              <Input id="d-company" name="company" value={form.company} onChange={handleChange}
                placeholder="Acme Corp" className={errors.company ? "border-red-400" : ""} />
              {errors.company && <p className="text-xs text-red-500">{errors.company}</p>}
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="d-email">Email *</Label>
            <Input id="d-email" name="email" type="email" value={form.email} onChange={handleChange}
              placeholder="jane@company.com" className={errors.email ? "border-red-400" : ""} />
            {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="d-phone">Phone</Label>
            <Input id="d-phone" name="phone" type="tel" value={form.phone} onChange={handleChange}
              placeholder="+1 (555) 000-0000" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="d-source">Source</Label>
              <Select id="d-source" name="source" value={form.source} onChange={handleChange}>
                <option value="">Select source</option>
                {LEAD_SOURCES.map((s) => <option key={s} value={s}>{s}</option>)}
              </Select>
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="d-status">Status</Label>
              <Select id="d-status" name="status" value={form.status} onChange={handleChange}>
                {LEAD_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
              </Select>
            </div>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="d-notes">Notes</Label>
            <Textarea id="d-notes" name="notes" value={form.notes} onChange={handleChange}
              placeholder="Add any relevant notes..." rows={4} />
          </div>
        </div>

        <div className="px-6 py-4 border-t border-slate-200 flex gap-3">
          <Button variant="outline" className="flex-1" onClick={onClose} disabled={saving}>Cancel</Button>
          <Button
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white"
            onClick={handleSave}
            disabled={saving}
          >
            <Save className="w-4 h-4 mr-2" />
            {saving ? "Saving..." : "Save Lead"}
          </Button>
        </div>
      </div>
    </div>
  )
}
