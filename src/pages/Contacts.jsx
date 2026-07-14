import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/components/ui/toast"
import { format, parseISO } from "date-fns"
import { ArrowLeft, Search, Trash2, Mail, Phone, MessageSquare, Users, Calendar, X } from "lucide-react"

const STORAGE_KEY = "saved_contacts"

const ContactCard = ({ contact, onDelete }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <div className="w-11 h-11 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
              <span className="text-indigo-700 font-bold text-lg">
                {contact.name.charAt(0).toUpperCase()}
              </span>
            </div>
            <div className="min-w-0">
              <h3 className="font-semibold text-gray-900 truncate">{contact.name}</h3>
              <a
                href={`mailto:${contact.email}`}
                className="text-sm text-indigo-600 hover:underline truncate block"
              >
                {contact.email}
              </a>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Badge variant="secondary" className="hidden sm:inline-flex">
              <Calendar className="w-3 h-3 mr-1" />
              {format(parseISO(contact.submittedAt), "MMM d")}
            </Badge>
            <button
              onClick={() => onDelete(contact.id)}
              className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
              aria-label="Delete contact"
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-3 text-sm text-gray-600">
          {contact.phone && (
            <span className="flex items-center gap-1.5">
              <Phone className="w-3.5 h-3.5 text-gray-400" />
              {contact.phone}
            </span>
          )}
          {contact.subject && (
            <span className="flex items-center gap-1.5">
              <MessageSquare className="w-3.5 h-3.5 text-gray-400" />
              <span className="truncate max-w-[200px]">{contact.subject}</span>
            </span>
          )}
        </div>

        {contact.message && (
          <div className="mt-4">
            <p className={`text-sm text-gray-600 leading-relaxed ${!expanded ? "line-clamp-2" : ""}`}>
              {contact.message}
            </p>
            {contact.message.length > 120 && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="text-xs text-indigo-600 hover:underline mt-1 font-medium"
              >
                {expanded ? "Show less" : "Read more"}
              </button>
            )}
          </div>
        )}

        <div className="mt-4 pt-4 border-t border-gray-50 text-xs text-gray-400">
          Submitted {format(parseISO(contact.submittedAt), "MMMM d, yyyy 'at' h:mm a")}
        </div>
      </div>
    </div>
  )
}

const Contacts = () => {
  const toast = useToast()
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState("")
  const [deleteConfirm, setDeleteConfirm] = useState(null)

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
    setContacts(stored)
    console.log(`Loaded ${stored.length} contacts from localStorage`)
  }, [])

  const filtered = contacts.filter((c) => {
    const q = search.toLowerCase()
    return (
      c.name.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      (c.subject || "").toLowerCase().includes(q) ||
      (c.message || "").toLowerCase().includes(q)
    )
  })

  const handleDelete = (id) => {
    setDeleteConfirm(id)
  }

  const confirmDelete = () => {
    const updated = contacts.filter((c) => c.id !== deleteConfirm)
    setContacts(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    setDeleteConfirm(null)
    toast({ title: "Contact deleted", variant: "default" })
  }

  const handleClearAll = () => {
    setContacts([])
    localStorage.removeItem(STORAGE_KEY)
    toast({ title: "All contacts cleared", variant: "default" })
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-1.5 text-gray-600">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">Back to site</span>
              </Button>
            </Link>
            <div className="h-5 w-px bg-gray-200" />
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-600" />
              <h1 className="text-lg font-bold text-gray-900">Saved Contacts</h1>
              {contacts.length > 0 && (
                <Badge variant="default">{contacts.length}</Badge>
              )}
            </div>
          </div>

          {contacts.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleClearAll}
              className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
            >
              <Trash2 className="w-3.5 h-3.5 mr-1.5" />
              Clear all
            </Button>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-8">
        {contacts.length === 0 ? (
          <div className="text-center py-24">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-5">
              <Mail className="w-8 h-8 text-gray-400" />
            </div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">No contacts yet</h2>
            <p className="text-gray-500 mb-8">
              Contacts submitted through the form will appear here.
            </p>
            <Link to="/#contact">
              <Button>Go to contact form</Button>
            </Link>
          </div>
        ) : (
          <>
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search by name, email, subject..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 bg-white"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {filtered.length === 0 ? (
              <div className="text-center py-16 text-gray-500">
                <p className="font-medium">No contacts match your search.</p>
                <button onClick={() => setSearch("")} className="text-indigo-600 text-sm mt-2 hover:underline">
                  Clear search
                </button>
              </div>
            ) : (
              <>
                <p className="text-sm text-gray-500 mb-4">
                  {filtered.length === contacts.length
                    ? `${contacts.length} contact${contacts.length !== 1 ? "s" : ""}`
                    : `${filtered.length} of ${contacts.length} contacts`}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {filtered.map((contact) => (
                    <ContactCard key={contact.id} contact={contact} onDelete={handleDelete} />
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>

      {/* Delete confirmation modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Delete contact?</h3>
            <p className="text-gray-600 text-sm mb-6">
              This action cannot be undone. The contact will be permanently removed.
            </p>
            <div className="flex gap-3">
              <Button variant="outline" className="flex-1" onClick={() => setDeleteConfirm(null)}>
                Cancel
              </Button>
              <Button variant="destructive" className="flex-1" onClick={confirmDelete}>
                Delete
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Contacts
