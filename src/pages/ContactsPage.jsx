import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { Users, Mail, Phone, Clock, Trash2, ArrowLeft, Search, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/Button"

const STORAGE_KEY = "saved_contacts"

function formatDate(iso) {
  const date = new Date(iso)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  })
}

function ContactCard({ contact, onDelete }) {
  const [confirmDelete, setConfirmDelete] = useState(false)

  const handleDelete = () => {
    if (confirmDelete) {
      onDelete(contact.id)
    } else {
      setConfirmDelete(true)
      setTimeout(() => setConfirmDelete(false), 3000)
    }
  }

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 flex flex-col gap-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
            <span className="text-indigo-600 font-bold text-sm">
              {contact.name.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h3 className="font-semibold text-slate-900 text-base">{contact.name}</h3>
            <div className="flex items-center gap-1.5 text-slate-500 text-sm mt-0.5">
              <Clock className="w-3.5 h-3.5" />
              <span>{formatDate(contact.submittedAt)}</span>
            </div>
          </div>
        </div>
        <button
          onClick={handleDelete}
          title={confirmDelete ? "Click again to confirm" : "Delete contact"}
          className={`p-2 rounded-lg transition-colors flex-shrink-0 border-none cursor-pointer ${
            confirmDelete
              ? "bg-red-100 text-red-600 hover:bg-red-200"
              : "bg-slate-100 text-slate-400 hover:bg-red-50 hover:text-red-500"
          }`}
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <a
          href={`mailto:${contact.email}`}
          className="flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 no-underline"
        >
          <Mail className="w-4 h-4 flex-shrink-0" />
          <span className="truncate">{contact.email}</span>
        </a>
        {contact.phone && (
          <a
            href={`tel:${contact.phone}`}
            className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 no-underline"
          >
            <Phone className="w-4 h-4 flex-shrink-0" />
            <span>{contact.phone}</span>
          </a>
        )}
      </div>

      {contact.message && (
        <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
          <p className="text-sm text-slate-700 leading-relaxed line-clamp-4">{contact.message}</p>
        </div>
      )}
    </div>
  )
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
    console.log("Loaded contacts from storage:", stored.length)
    setContacts(stored)
  }, [])

  const handleDelete = (id) => {
    const updated = contacts.filter((c) => c.id !== id)
    setContacts(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    console.log("Deleted contact:", id)
  }

  const filtered = contacts.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.message.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-slate-900 font-bold text-xl no-underline">
            <MessageSquare className="w-6 h-6 text-indigo-600" />
            <span>Connectly</span>
          </Link>
          <Link to="/" className="no-underline">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10">
        {/* Page title */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-indigo-600" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900">Saved Contacts</h1>
          </div>
          <p className="text-slate-600 ml-13">
            {contacts.length === 0
              ? "No contacts yet. Submit the contact form to get started."
              : `${contacts.length} contact${contacts.length !== 1 ? "s" : ""} saved`}
          </p>
        </div>

        {/* Search */}
        {contacts.length > 0 && (
          <div className="relative mb-6">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by name, email, or message..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-slate-300 bg-white text-slate-900 text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        )}

        {/* Contacts grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {filtered.map((contact) => (
              <ContactCard key={contact.id} contact={contact} onDelete={handleDelete} />
            ))}
          </div>
        ) : contacts.length > 0 ? (
          <div className="text-center py-16 text-slate-500">
            <Search className="w-10 h-10 mx-auto mb-3 text-slate-300" />
            <p className="font-medium text-slate-700">No contacts match your search</p>
            <p className="text-sm mt-1">Try a different name or email</p>
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-indigo-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">No contacts yet</h3>
            <p className="text-slate-600 mb-6 max-w-sm mx-auto">
              Once someone fills out your contact form, their details will appear here.
            </p>
            <Link to="/#contact" className="no-underline">
              <Button onClick={() => {}}>Go to Contact Form</Button>
            </Link>
          </div>
        )}
      </main>
    </div>
  )
}
