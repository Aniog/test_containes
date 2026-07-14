import { useState, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Search,
  Trash2,
  Users,
  Mail,
  Phone,
  MessageSquare,
  Calendar,
  Inbox,
} from "lucide-react"
import { format } from "date-fns"

const STORAGE_KEY = "reachly_contacts"

const ContactsPage = () => {
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState(null)
  const [deleteConfirm, setDeleteConfirm] = useState(null)

  const loadContacts = useCallback(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
    console.log("Loaded contacts:", stored.length)
    setContacts(stored)
  }, [])

  useEffect(() => {
    loadContacts()
  }, [loadContacts])

  const filtered = contacts.filter((c) => {
    const q = search.toLowerCase()
    return (
      c.name.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      (c.phone && c.phone.toLowerCase().includes(q)) ||
      c.message.toLowerCase().includes(q)
    )
  })

  const handleDelete = (id) => {
    const updated = contacts.filter((c) => c.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    setContacts(updated)
    if (selected?.id === id) setSelected(null)
    setDeleteConfirm(null)
    console.log("Deleted contact:", id)
  }

  const handleClearAll = () => {
    localStorage.removeItem(STORAGE_KEY)
    setContacts([])
    setSelected(null)
    setDeleteConfirm(null)
    console.log("All contacts cleared")
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                <ArrowLeft className="h-4 w-4" />
                <span className="hidden sm:inline">Back</span>
              </Button>
            </Link>
            <div className="h-5 w-px bg-border" />
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-brand-600" />
              <h1 className="text-base font-semibold text-foreground">Contacts</h1>
              {contacts.length > 0 && (
                <Badge variant="secondary" className="text-xs">
                  {contacts.length}
                </Badge>
              )}
            </div>
          </div>

          {contacts.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              className="gap-2 text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/30"
              onClick={() => setDeleteConfirm("all")}
            >
              <Trash2 className="h-4 w-4" />
              <span className="hidden sm:inline">Clear All</span>
            </Button>
          )}
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {contacts.length === 0 ? (
          /* Empty state */
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 mb-4">
              <Inbox className="h-8 w-8 text-muted-foreground" />
            </div>
            <h2 className="text-xl font-semibold text-foreground mb-2">No contacts yet</h2>
            <p className="text-muted-foreground mb-6 max-w-sm">
              When someone fills out the contact form on your landing page, they'll appear here.
            </p>
            <Link to="/#contact">
              <Button className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Go to Contact Form
              </Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: list */}
            <div className="lg:col-span-1 space-y-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search contacts..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9"
                />
              </div>

              <div className="space-y-2">
                {filtered.length === 0 ? (
                  <p className="text-sm text-muted-foreground text-center py-8">
                    No contacts match your search.
                  </p>
                ) : (
                  filtered.map((contact) => (
                    <button
                      key={contact.id}
                      onClick={() => setSelected(contact)}
                      className={`w-full text-left rounded-xl border p-4 transition-all hover:shadow-sm ${
                        selected?.id === contact.id
                          ? "border-primary bg-brand-50 shadow-sm"
                          : "border-border bg-white hover:border-primary/40"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-foreground truncate">
                            {contact.name}
                          </p>
                          <p className="text-xs text-muted-foreground truncate mt-0.5">
                            {contact.email}
                          </p>
                        </div>
                        <span className="text-xs text-muted-foreground shrink-0 mt-0.5">
                          {format(new Date(contact.submittedAt), "MMM d")}
                        </span>
                      </div>
                      <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                        {contact.message}
                      </p>
                    </button>
                  ))
                )}
              </div>
            </div>

            {/* Right: detail */}
            <div className="lg:col-span-2">
              {selected ? (
                <div className="bg-white rounded-2xl border border-border shadow-sm p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h2 className="text-xl font-bold text-foreground">{selected.name}</h2>
                      <p className="text-sm text-muted-foreground mt-1">
                        Submitted {format(new Date(selected.submittedAt), "PPPp")}
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2 text-destructive hover:text-destructive hover:bg-destructive/10 border-destructive/30 shrink-0"
                      onClick={() => setDeleteConfirm(selected.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                      Delete
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                      <Mail className="h-4 w-4 text-brand-600 shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Email</p>
                        <a
                          href={`mailto:${selected.email}`}
                          className="text-sm font-medium text-brand-600 hover:underline"
                        >
                          {selected.email}
                        </a>
                      </div>
                    </div>

                    {selected.phone && (
                      <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                        <Phone className="h-4 w-4 text-brand-600 shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Phone</p>
                          <a
                            href={`tel:${selected.phone}`}
                            className="text-sm font-medium text-foreground hover:text-brand-600"
                          >
                            {selected.phone}
                          </a>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50">
                      <Calendar className="h-4 w-4 text-brand-600 shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Submitted</p>
                        <p className="text-sm font-medium text-foreground">
                          {format(new Date(selected.submittedAt), "PPPP")}
                        </p>
                      </div>
                    </div>

                    <div className="p-4 rounded-lg bg-slate-50">
                      <div className="flex items-center gap-2 mb-2">
                        <MessageSquare className="h-4 w-4 text-brand-600" />
                        <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Message</p>
                      </div>
                      <p className="text-sm text-foreground leading-relaxed whitespace-pre-wrap">
                        {selected.message}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 rounded-2xl border border-dashed border-border bg-white text-center p-8">
                  <Users className="h-8 w-8 text-muted-foreground mb-3" />
                  <p className="text-sm font-medium text-foreground">Select a contact</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    Click any contact on the left to view their details.
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Delete confirmation modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl border border-border shadow-xl p-6 max-w-sm w-full">
            <h3 className="text-base font-semibold text-foreground mb-2">
              {deleteConfirm === "all" ? "Clear all contacts?" : "Delete this contact?"}
            </h3>
            <p className="text-sm text-muted-foreground mb-6">
              {deleteConfirm === "all"
                ? "This will permanently remove all saved contacts. This action cannot be undone."
                : "This will permanently remove this contact. This action cannot be undone."}
            </p>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="flex-1"
                onClick={() => setDeleteConfirm(null)}
              >
                Cancel
              </Button>
              <Button
                variant="destructive"
                className="flex-1"
                onClick={() =>
                  deleteConfirm === "all" ? handleClearAll() : handleDelete(deleteConfirm)
                }
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

export default ContactsPage
