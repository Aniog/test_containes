import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, Search, Trash2, ArrowLeft, Mail, Phone, MessageSquare, Calendar } from "lucide-react"
import { format } from "date-fns"

const STORAGE_KEY = "saved_contacts"

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
    setSelected(null)
    localStorage.removeItem(STORAGE_KEY)
    console.log("Cleared all contacts")
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-1.5">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back</span>
              </Button>
            </Link>
            <div className="h-5 w-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-blue-600" />
              <h1 className="font-bold text-gray-900">Contacts</h1>
              <Badge variant="secondary">{contacts.length}</Badge>
            </div>
          </div>
          {contacts.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              className="text-red-600 hover:text-red-700 hover:bg-red-50"
              onClick={() => setDeleteConfirm("all")}
            >
              Clear all
            </Button>
          )}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-8">
        {contacts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No contacts yet</h2>
            <p className="text-gray-500 mb-6 max-w-sm">
              When someone fills out the contact form on your landing page, they'll appear here.
            </p>
            <Link to="/#contact">
              <Button>Go to contact form</Button>
            </Link>
          </div>
        ) : (
          <div className="grid md:grid-cols-5 gap-6">
            {/* List */}
            <div className="md:col-span-2 space-y-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search contacts..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-9"
                />
              </div>

              {filtered.length === 0 ? (
                <p className="text-sm text-gray-500 text-center py-8">No contacts match your search.</p>
              ) : (
                <div className="space-y-2">
                  {filtered.map((contact) => (
                    <button
                      key={contact.id}
                      onClick={() => setSelected(contact)}
                      className={`w-full text-left rounded-xl border p-4 transition-all ${
                        selected?.id === contact.id
                          ? "border-blue-300 bg-blue-50 shadow-sm"
                          : "border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div className="min-w-0">
                          <p className="font-semibold text-gray-900 text-sm truncate">{contact.name}</p>
                          <p className="text-xs text-gray-500 truncate mt-0.5">{contact.email}</p>
                        </div>
                        <span className="text-xs text-gray-400 flex-shrink-0 mt-0.5">
                          {format(new Date(contact.submittedAt), "MMM d")}
                        </span>
                      </div>
                      {contact.message && (
                        <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                          {contact.message}
                        </p>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Detail */}
            <div className="md:col-span-3">
              {selected ? (
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm p-6 md:p-8">
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-blue-700 font-bold text-lg">
                          {selected.name.charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h2 className="text-xl font-bold text-gray-900">{selected.name}</h2>
                        <p className="text-sm text-gray-500">
                          Submitted {format(new Date(selected.submittedAt), "PPP 'at' p")}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-600 hover:bg-red-50"
                      onClick={() => setDeleteConfirm(selected.id)}
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Email</p>
                        <a
                          href={`mailto:${selected.email}`}
                          className="text-sm text-blue-600 hover:underline"
                        >
                          {selected.email}
                        </a>
                      </div>
                    </div>

                    {selected.phone && (
                      <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                        <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-gray-500 font-medium">Phone</p>
                          <a
                            href={`tel:${selected.phone}`}
                            className="text-sm text-gray-900 hover:text-blue-600"
                          >
                            {selected.phone}
                          </a>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                      <MessageSquare className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-xs text-gray-500 font-medium mb-1">Message</p>
                        <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
                          {selected.message}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <Calendar className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-gray-500 font-medium">Submitted</p>
                        <p className="text-sm text-gray-700">
                          {format(new Date(selected.submittedAt), "PPPP 'at' p")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <a href={`mailto:${selected.email}`}>
                      <Button className="w-full gap-2">
                        <Mail className="w-4 h-4" />
                        Reply via email
                      </Button>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 bg-white rounded-2xl border border-gray-200 text-center p-8">
                  <Users className="w-10 h-10 text-gray-300 mb-3" />
                  <p className="text-gray-500 text-sm">Select a contact to view details</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Delete confirmation modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full">
            <h3 className="font-bold text-gray-900 text-lg mb-2">
              {deleteConfirm === "all" ? "Clear all contacts?" : "Delete contact?"}
            </h3>
            <p className="text-gray-600 text-sm mb-6">
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
                className="flex-1 bg-red-600 hover:bg-red-700 text-white"
                onClick={() =>
                  deleteConfirm === "all"
                    ? handleClearAll()
                    : handleDelete(deleteConfirm)
                }
              >
                {deleteConfirm === "all" ? "Clear all" : "Delete"}
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contacts
