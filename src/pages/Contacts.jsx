import { useState } from "react"
import { formatDistanceToNow, parseISO } from "date-fns"
import { Trash2, Mail, User, MessageSquare, Clock, Search, Inbox } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

const STORAGE_KEY = "saved_contacts"

const useContacts = () => {
  const [contacts, setContacts] = useState(() => {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
  })

  const deleteContact = (id) => {
    const updated = contacts.filter((c) => c.id !== id)
    setContacts(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    console.log("Contact deleted:", id)
  }

  const clearAll = () => {
    setContacts([])
    localStorage.removeItem(STORAGE_KEY)
    console.log("All contacts cleared")
  }

  return { contacts, deleteContact, clearAll }
}

const ContactCard = ({ contact, onDelete }) => {
  const [expanded, setExpanded] = useState(false)

  const timeAgo = (() => {
    try {
      return formatDistanceToNow(parseISO(contact.submittedAt), { addSuffix: true })
    } catch {
      return "Unknown time"
    }
  })()

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4 min-w-0">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
            <User className="w-5 h-5 text-indigo-600" />
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-slate-900 truncate">{contact.name}</p>
            <a
              href={`mailto:${contact.email}`}
              className="text-sm text-indigo-600 hover:underline flex items-center gap-1 mt-0.5"
            >
              <Mail className="w-3.5 h-3.5" />
              {contact.email}
            </a>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span className="text-xs text-slate-400 flex items-center gap-1 hidden sm:flex">
            <Clock className="w-3.5 h-3.5" />
            {timeAgo}
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="text-red-400 hover:text-red-600 hover:bg-red-50 h-8 w-8 p-0"
            onClick={() => onDelete(contact.id)}
            aria-label="Delete contact"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {contact.subject && (
        <div className="mt-3">
          <Badge variant="secondary">{contact.subject}</Badge>
        </div>
      )}

      <div className="mt-3">
        <button
          onClick={() => setExpanded((v) => !v)}
          className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-700 transition-colors"
        >
          <MessageSquare className="w-4 h-4" />
          {expanded ? "Hide message" : "View message"}
        </button>
        {expanded && (
          <p className="mt-2 text-sm text-slate-700 bg-slate-50 rounded-lg p-3 leading-relaxed whitespace-pre-wrap">
            {contact.message}
          </p>
        )}
      </div>

      <p className="text-xs text-slate-400 mt-3 sm:hidden flex items-center gap-1">
        <Clock className="w-3 h-3" />
        {timeAgo}
      </p>
    </div>
  )
}

const Contacts = () => {
  const { contacts, deleteContact, clearAll } = useContacts()
  const [search, setSearch] = useState("")
  const [confirmClear, setConfirmClear] = useState(false)

  const filtered = contacts.filter((c) => {
    const q = search.toLowerCase()
    return (
      c.name.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      (c.subject || "").toLowerCase().includes(q) ||
      c.message.toLowerCase().includes(q)
    )
  })

  const handleClearAll = () => {
    if (confirmClear) {
      clearAll()
      setConfirmClear(false)
    } else {
      setConfirmClear(true)
    }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Contact Submissions</h1>
            <p className="text-sm text-slate-500 mt-0.5">
              {contacts.length} {contacts.length === 1 ? "submission" : "submissions"} saved
            </p>
          </div>
          {contacts.length > 0 && (
            <Button
              variant={confirmClear ? "destructive" : "outline"}
              size="sm"
              onClick={handleClearAll}
              onBlur={() => setConfirmClear(false)}
            >
              {confirmClear ? "Confirm Clear All" : "Clear All"}
            </Button>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {contacts.length > 0 && (
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              placeholder="Search by name, email, subject or message..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
        )}

        {contacts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
              <Inbox className="w-8 h-8 text-slate-400" />
            </div>
            <h2 className="text-lg font-semibold text-slate-700 mb-1">No contacts yet</h2>
            <p className="text-sm text-slate-500 max-w-xs">
              Once someone submits the contact form on the landing page, their message will appear here.
            </p>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-slate-500">No contacts match your search.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filtered.map((contact) => (
              <ContactCard key={contact.id} contact={contact} onDelete={deleteContact} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Contacts
