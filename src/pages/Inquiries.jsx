import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {
  Mail,
  Phone,
  MapPin,
  Package,
  DollarSign,
  Tag,
  Clock,
  ArrowLeft,
  RefreshCw,
  Loader2,
  AlertCircle,
  Eye,
} from 'lucide-react'
import { fetchInquiries, updateInquiryStatus } from '../api/inquiries'
import { toast } from 'sonner'

const statusLabels = {
  new: 'New',
  in_review: 'In Review',
  quoted: 'Quoted',
  closed: 'Closed',
}

const statusColors = {
  new: 'bg-emerald-100 text-emerald-700',
  in_review: 'bg-amber-100 text-amber-700',
  quoted: 'bg-blue-100 text-blue-700',
  closed: 'bg-slate-100 text-slate-600',
}

export default function Inquiries() {
  const [inquiries, setInquiries] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selected, setSelected] = useState(null)

  const load = async () => {
    setLoading(true)
    setError(null)
    try {
      const rows = await fetchInquiries()
      setInquiries(rows)
    } catch (err) {
      setError(err.message || 'Failed to load inquiries')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  const handleStatusChange = async (id, newStatus) => {
    try {
      const updated = await updateInquiryStatus(id, newStatus)
      setInquiries((prev) =>
        prev.map((item) => (item.id === id ? updated : item))
      )
      if (selected?.id === id) {
        setSelected(updated)
      }
      toast.success(`Status updated to ${statusLabels[newStatus]}`)
    } catch (err) {
      toast.error(err.message || 'Failed to update status')
    }
  }

  const getData = (item) => item?.data ?? {}

  return (
    <div className="min-h-screen bg-surface">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-text-primary">Sourcing Inquiries</h1>
            <p className="text-sm text-text-secondary mt-1">
              Manage and respond to buyer sourcing requests
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={load}
              disabled={loading}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-white text-sm font-medium text-text-secondary hover:bg-surface transition-colors disabled:opacity-50"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </button>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Site
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading && inquiries.length === 0 && (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
            <span className="ml-3 text-text-secondary">Loading inquiries...</span>
          </div>
        )}

        {error && (
          <div className="flex items-center justify-center py-20 text-red-600">
            <AlertCircle className="w-6 h-6 mr-2" />
            {error}
          </div>
        )}

        {!loading && inquiries.length === 0 && (
          <div className="text-center py-20">
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">No inquiries yet</h3>
            <p className="text-text-secondary max-w-md mx-auto">
              When buyers submit sourcing requests through the contact form, they will appear here.
            </p>
          </div>
        )}

        {inquiries.length > 0 && (
          <div className="grid lg:grid-cols-3 gap-6">
            {/* List */}
            <div className="lg:col-span-1 space-y-3">
              {inquiries.map((item) => {
                const d = getData(item)
                return (
                  <button
                    key={item.id}
                    onClick={() => setSelected(item)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      selected?.id === item.id
                        ? 'border-primary bg-white shadow-sm ring-1 ring-primary/10'
                        : 'border-border bg-white hover:border-primary/30 hover:shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-semibold text-text-primary text-sm truncate">
                        {d.name}
                      </h4>
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full shrink-0 ${
                          statusColors[d.status] || statusColors.new
                        }`}
                      >
                        {statusLabels[d.status] || 'New'}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary truncate mt-1">{d.email}</p>
                    <div className="flex items-center gap-3 mt-2 text-xs text-text-muted">
                      <span className="flex items-center gap-1">
                        <Package className="w-3 h-3" />
                        {d.product_category}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {d.country}
                      </span>
                    </div>
                    <p className="text-xs text-text-muted mt-2">
                      <Clock className="w-3 h-3 inline mr-1" />
                      {new Date(d.created_at || item.created_at).toLocaleString()}
                    </p>
                  </button>
                )
              })}
            </div>

            {/* Detail */}
            <div className="lg:col-span-2">
              {selected ? (
                <div className="bg-white rounded-xl border border-border p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-text-primary">
                        {getData(selected).name}
                      </h2>
                      <p className="text-sm text-text-secondary mt-1">
                        {getData(selected).company || 'No company provided'}
                      </p>
                    </div>
                    <select
                      value={getData(selected).status || 'new'}
                      onChange={(e) => handleStatusChange(selected.id, e.target.value)}
                      className="text-sm font-medium px-3 py-1.5 rounded-lg border border-border bg-surface focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      {Object.entries(statusLabels).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-text-muted uppercase tracking-wider font-medium">Email</div>
                        <a
                          href={`mailto:${getData(selected).email}`}
                          className="text-sm text-text-secondary hover:text-primary transition-colors"
                        >
                          {getData(selected).email}
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-text-muted uppercase tracking-wider font-medium">Phone</div>
                        <p className="text-sm text-text-secondary">
                          {getData(selected).phone || 'Not provided'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-text-muted uppercase tracking-wider font-medium">Country</div>
                        <p className="text-sm text-text-secondary">{getData(selected).country}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <DollarSign className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-xs text-text-muted uppercase tracking-wider font-medium">Order Volume</div>
                        <p className="text-sm text-text-secondary">
                          {getData(selected).order_volume || 'Not specified'}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6 space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
                        <Package className="w-4 h-4 text-primary" />
                        Product Category
                      </h4>
                      <p className="text-sm text-text-secondary">{getData(selected).product_category}</p>
                    </div>

                    {getData(selected).services_needed?.length > 0 && (
                      <div>
                        <h4 className="text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
                          <Tag className="w-4 h-4 text-primary" />
                          Services Needed
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {getData(selected).services_needed.map((s) => (
                            <span
                              key={s}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {getData(selected).product_description && (
                      <div>
                        <h4 className="text-sm font-semibold text-text-primary mb-2">Product Description</h4>
                        <p className="text-sm text-text-secondary whitespace-pre-line">
                          {getData(selected).product_description}
                        </p>
                      </div>
                    )}

                    {getData(selected).message && (
                      <div>
                        <h4 className="text-sm font-semibold text-text-primary mb-2">Additional Message</h4>
                        <p className="text-sm text-text-secondary whitespace-pre-line">
                          {getData(selected).message}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-border p-12 text-center">
                  <Eye className="w-12 h-12 text-text-muted mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Select an inquiry</h3>
                  <p className="text-sm text-text-secondary">
                    Click on an inquiry from the list to view its full details and manage its status.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
