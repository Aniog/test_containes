import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, Search, Trash2, ArrowLeft, Mail, Phone, Calendar, MessageSquare, Inbox } from "lucide-react"
import { format } from "date-fns"

const STORAGE_KEY = "launchpad_contacts"

const Contacts = () => {
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState(null)
  const [deleteConfirm, setDeleteConfirm] = useState(null)

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
    setContacts(stored)
    console.log("Loaded contacts:", stored.length)
  }, [])

  const filtered = contacts.filter((c) => {
    const q = search.toLowerCase()
    return (
      c.name.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      (c.phone && c.phone.includes(q))
    )
  })

  const handleDelete = (id) => {
    const updated = contacts.filter((c) => c.id !== id)
    setContacts(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    if (selected?.id === id) setSelected(null)
    setDeleteConfirm(null)
    console.log("Deleted contact:", id)
  }

  const handleClearAll = () => {
    setContacts([])
    localStorage.removeItem(STORAGE_KEY)
    setSelected(null)
    setDeleteConfirm(null)
    console.log("Cleared all contacts")
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page header */}
      <div className="bg-white border-b border-border px-4 py-6">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-slate-500 hover:text-slate-900 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">Contacts</h1>
                <p className="text-xs text-muted-foreground">{contacts.length} total</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input
                placeholder="Search contacts..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 w-56"
              />
            </div>
            {contacts.length > 0 && (
              <Button
                variant="outline"
                size="sm"
                className="text-destructive border-destructive/30 hover:bg-destructive/5"
                onClick={() => setDeleteConfirm("all")}
              >
                Clear All
              </Button>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {contacts.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 gap-4 text-center">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center">
              <Inbox className="w-8 h-8 text-slate-400" />
            </div>
            <h2 className="text-xl font-semibold text-slate-900">No contacts yet</h2>
            <p className="text-slate-500 max-w-sm">
              When someone fills out your contact form, they'll appear here.
            </p>
            <Button asChild>
              <Link to="/#contact">Go to Contact Form</Link>
            </Button>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-3 text-center">
            <Search className="w-10 h-10 text-slate-300" />
            <p className="text-slate-500">No contacts match "<strong>{search}</strong>"</p>
            <Button variant="ghost" size="sm" onClick={() => setSearch("")}>Clear search</Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-5 gap-6">
            {/* Contact list */}
            <div className="md:col-span-2 flex flex-col gap-2">
              <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-1">
                {filtered.length} contact{filtered.length !== 1 ? "s" : ""}
              </p>
              {filtered.map((contact) => (
                <button
                  key={contact.id}
                  onClick={() => setSelected(contact)}
                  className={`w-full text-left rounded-xl border p-4 transition-all hover:shadow-sm ${
                    selected?.id === contact.id
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-border bg-white hover:border-slate-300"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-primary font-semibold text-sm">
                          {contact.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div className="min-w-0">
                        <p className="font-medium text-slate-900 truncate">{contact.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{contact.email}</p>
                      </div>
                    </div>
                    <Badge variant="secondary" className="text-xs flex-shrink-0">
                      {format(new Date(contact.submittedAt), "MMM d")}
                    </Badge>
                  </div>
                </button>
              ))}
            </div>

            {/* Contact detail */}
            <div className="md:col-span-3">
              {selected ? (
                <div className="bg-white rounded-xl border border-border shadow-sm p-6 md:p-8 sticky top-24">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-bold text-xl">
                          {selected.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-slate-900">{selected.name}</h2>
                        <p className="text-sm text-muted-foreground">
                          Submitted {format(new Date(selected.submittedAt), "PPP 'at' p")}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-destructive hover:bg-destructive/10"
                      onClick={() => setDeleteConfirm(selected.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                      <Mail className="w-4 h-4 text-primary flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Email</p>
                        <a href={`mailto:${selected.email}`} className="text-sm font-medium text-slate-900 hover:text-primary">
                          {selected.email}
                        </a>
                      </div>
                    </div>

                    {selected.phone && (
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                        <Phone className="w-4 h-4 text-primary flex-shrink-0" />
                        <div>
                          <p className="text-xs text-muted-foreground">Phone</p>
                          <a href={`tel:${selected.phone}`} className="text-sm font-medium text-slate-900 hover:text-primary">
                            {selected.phone}
                          </a>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                      <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">Submitted</p>
                        <p className="text-sm font-medium text-slate-900">
                          {format(new Date(selected.submittedAt), "PPPP")}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-slate-50">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="w-4 h-4 text-primary" />
                        <p className="text-xs text-muted-foreground font-medium">Message</p>
                      </div>
                      <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">
                        {selected.message}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-3">
                    <Button asChild size="sm">
                      <a href={`mailto:${selected.email}`}>
                        <Mail className="w-4 h-4" />
                        Reply via Email
                      </a>
                    </Button>
                    {selected.phone && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={`tel:${selected.phone}`}>
                          <Phone className="w-4 h-4" />
                          Call
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 text-center text-muted-foreground bg-white rounded-xl border border-border border-dashed">
                  <Users className="w-8 h-8 mb-2 opacity-30" />
                  <p className="text-sm">Select a contact to view details</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Delete confirmation modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl shadow-xl border border-border p-6 max-w-sm w-full">
            <h3 className="font-bold text-slate-900 mb-2">
              {deleteConfirm === "all" ? "Clear all contacts?" : "Delete this contact?"}
            </h3>
            <p className="text-sm text-slate-600 mb-6">
              {deleteConfirm === "all"
                ? "This will permanently remove all saved contacts. This action cannot be undone."
                : "This will permanently remove this contact. This action cannot be undone."}
            </p>
            <div className="flex gap-3 justify-end">
              <Button variant="outline" size="sm" onClick={() => setDeleteConfirm(null)}>
                Cancel
              </Button>
              <Button
                size="sm"
                className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                onClick={() => deleteConfirm === "all" ? handleClearAll() : handleDelete(deleteConfirm)}
              >
                {deleteConfirm === "all" ? "Clear All" : "Delete"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contacts
