import { useState, useEffect } from "react"
import { Search, Plus, Pencil, Trash2, ChevronUp, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Card } from "@/components/ui/card"
import StatusBadge from "@/components/crm/StatusBadge"
import LeadDrawer from "@/components/crm/LeadDrawer"
import StatsBar from "@/components/crm/StatsBar"
import { leadsApi, LEAD_STATUSES } from "@/api/leads"

const formatDate = (iso) => {
  const d = new Date(iso)
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

export default function Dashboard() {
  const [leads, setLeads] = useState(leadsApi.getAll())
  const [search, setSearch] = useState("")
  const [statusFilter, setStatusFilter] = useState("")
  const [sortField, setSortField] = useState("createdAt")
  const [sortDir, setSortDir] = useState("desc")
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [editingLead, setEditingLead] = useState(null)
  const [deleteConfirm, setDeleteConfirm] = useState(null)

  useEffect(() => {
    return leadsApi.subscribe(setLeads)
  }, [])

  const handleSort = (field) => {
    if (sortField === field) setSortDir((d) => (d === "asc" ? "desc" : "asc"))
    else { setSortField(field); setSortDir("asc") }
  }

  const filtered = leads
    .filter((l) => {
      const q = search.toLowerCase()
      const matchSearch =
        !q ||
        l.name.toLowerCase().includes(q) ||
        l.email.toLowerCase().includes(q) ||
        l.company.toLowerCase().includes(q)
      const matchStatus = !statusFilter || l.status === statusFilter
      return matchSearch && matchStatus
    })
    .sort((a, b) => {
      let av = a[sortField] || ""
      let bv = b[sortField] || ""
      if (sortField === "createdAt") { av = new Date(av); bv = new Date(bv) }
      else { av = av.toLowerCase(); bv = bv.toLowerCase() }
      if (av < bv) return sortDir === "asc" ? -1 : 1
      if (av > bv) return sortDir === "asc" ? 1 : -1
      return 0
    })

  const SortIcon = ({ field }) => {
    if (sortField !== field) return <ChevronUp className="w-3 h-3 text-slate-300" />
    return sortDir === "asc"
      ? <ChevronUp className="w-3 h-3 text-indigo-500" />
      : <ChevronDown className="w-3 h-3 text-indigo-500" />
  }

  const openAdd = () => { setEditingLead(null); setDrawerOpen(true) }
  const openEdit = (lead) => { setEditingLead(lead); setDrawerOpen(true) }
  const closeDrawer = () => { setDrawerOpen(false); setEditingLead(null) }

  const handleDelete = (id) => {
    leadsApi.delete(id)
    setDeleteConfirm(null)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 space-y-6">
        {/* Page header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Leads</h1>
            <p className="text-sm text-slate-500 mt-0.5">Manage and track your sales pipeline</p>
          </div>
          <Button
            className="bg-indigo-600 hover:bg-indigo-700 text-white self-start sm:self-auto"
            onClick={openAdd}
          >
            <Plus className="w-4 h-4 mr-2" />
            Add Lead
          </Button>
        </div>

        {/* Stats */}
        <StatsBar leads={leads} />

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search by name, email, or company..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="sm:w-44"
          >
            <option value="">All statuses</option>
            {LEAD_STATUSES.map((s) => <option key={s} value={s}>{s}</option>)}
          </Select>
        </div>

        {/* Table */}
        <Card className="overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  {[
                    { label: "Name", field: "name" },
                    { label: "Company", field: "company" },
                    { label: "Email", field: "email" },
                    { label: "Source", field: "source" },
                    { label: "Status", field: "status" },
                    { label: "Date Added", field: "createdAt" },
                  ].map(({ label, field }) => (
                    <th
                      key={field}
                      className="text-left px-4 py-3 font-medium text-slate-600 cursor-pointer select-none whitespace-nowrap"
                      onClick={() => handleSort(field)}
                    >
                      <span className="inline-flex items-center gap-1">
                        {label}
                        <SortIcon field={field} />
                      </span>
                    </th>
                  ))}
                  <th className="px-4 py-3 text-right font-medium text-slate-600">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-16 text-slate-400">
                      {search || statusFilter ? "No leads match your filters." : "No leads yet. Add your first lead!"}
                    </td>
                  </tr>
                ) : (
                  filtered.map((lead) => (
                    <tr key={lead.id} className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                      <td className="px-4 py-3">
                        <div className="font-medium text-slate-900">{lead.name}</div>
                        {lead.phone && <div className="text-xs text-slate-400 mt-0.5">{lead.phone}</div>}
                      </td>
                      <td className="px-4 py-3 text-slate-700">{lead.company}</td>
                      <td className="px-4 py-3 text-slate-600">{lead.email}</td>
                      <td className="px-4 py-3 text-slate-600">{lead.source || "—"}</td>
                      <td className="px-4 py-3">
                        <StatusBadge status={lead.status} />
                      </td>
                      <td className="px-4 py-3 text-slate-500 whitespace-nowrap">
                        {formatDate(lead.createdAt)}
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center justify-end gap-1">
                          <button
                            onClick={() => openEdit(lead)}
                            className="p-1.5 rounded hover:bg-indigo-50 text-slate-400 hover:text-indigo-600 transition-colors"
                            title="Edit lead"
                          >
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setDeleteConfirm(lead.id)}
                            className="p-1.5 rounded hover:bg-red-50 text-slate-400 hover:text-red-500 transition-colors"
                            title="Delete lead"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
          {filtered.length > 0 && (
            <div className="px-4 py-3 border-t border-slate-100 text-xs text-slate-400">
              Showing {filtered.length} of {leads.length} leads
            </div>
          )}
        </Card>
      </div>

      {/* Lead drawer */}
      {drawerOpen && (
        <LeadDrawer lead={editingLead} onClose={closeDrawer} />
      )}

      {/* Delete confirmation */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4">
          <Card className="w-full max-w-sm p-6 space-y-4">
            <h3 className="font-semibold text-slate-900">Delete lead?</h3>
            <p className="text-sm text-slate-500">
              This action cannot be undone. The lead will be permanently removed.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={() => setDeleteConfirm(null)}>
                Cancel
              </Button>
              <Button
                className="flex-1 bg-red-500 hover:bg-red-600 text-white"
                onClick={() => handleDelete(deleteConfirm)}
              >
                Delete
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
