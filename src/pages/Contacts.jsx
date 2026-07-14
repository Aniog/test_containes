import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { format } from "date-fns"
import { Users, Trash2, ArrowLeft, Mail, Phone, MessageSquare, Search, Inbox } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

const STORAGE_KEY = "saved_contacts"

function loadContacts() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
}

function deleteContact(id) {
  const contacts = loadContacts().filter((c) => c.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts))
  console.log("Contact deleted:", id)
  return contacts
}

function clearAllContacts() {
  localStorage.removeItem(STORAGE_KEY)
  console.log("All contacts cleared")
  return []
}

export default function Contacts() {
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState(null)
  const [confirmClear, setConfirmClear] = useState(false)

  useEffect(() => {
    setContacts(loadContacts())
  }, [])

  const filtered = contacts.filter((c) => {
    const q = search.toLowerCase()
    return (
      c.name.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      (c.phone || "").includes(q) ||
      c.message.toLowerCase().includes(q)
    )
  })

  function handleDelete(id) {
    const updated = deleteContact(id)
    setContacts(updated)
    if (selected?.id === id) setSelected(null)
  }

  function handleClearAll() {
    if (!confirmClear) {
      setConfirmClear(true)
      return
    }
    setContacts(clearAllContacts())
    setSelected(null)
    setConfirmClear(false)
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link to="/" className="text-slate-400 hover:text-slate-700 transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-600" />
              <h1 className="text-lg font-bold text-slate-900">Saved Contacts</h1>
            </div>
            <span className="bg-indigo-100 text-indigo-700 text-xs font-semibold px-2 py-0.5 rounded-full">
              {contacts.length}
            </span>
          </div>
          {contacts.length > 0 && (
            <Button
              variant={confirmClear ? "danger" : "outline"}
              size="sm"
              onClick={handleClearAll}
              onBlur={() => setConfirmClear(false)}
            >
              {confirmClear ? "Confirm Clear All" : "Clear All"}
            </Button>
          )}
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {contacts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
              <Inbox className="w-8 h-8 text-slate-400" />
            </div>
            <h2 className="text-xl font-semibold text-slate-700 mb-2">No contacts yet</h2>
            <p className="text-slate-400 mb-6">Submit the contact form on the landing page to see contacts here.</p>
            <Link to="/">
              <Button>Go to Landing Page</Button>
            </Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Contact list */}
            <div className="flex-1 min-w-0">
              {/* Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search contacts..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              {filtered.length === 0 ? (
                <p className="text-center text-slate-400 py-12 text-sm">No contacts match your search.</p>
              ) : (
                <div className="space-y-3">
                  {filtered.map((contact) => (
                    <Card
                      key={contact.id}
                      className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                        selected?.id === contact.id ? "ring-2 ring-indigo-500 shadow-md" : ""
                      }`}
                      onClick={() => setSelected(contact)}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0">
                            <span className="text-indigo-700 font-bold text-sm">
                              {contact.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                          <div className="min-w-0">
                            <p className="font-semibold text-slate-900 text-sm truncate">{contact.name}</p>
                            <p className="text-xs text-slate-500 truncate">{contact.email}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className="text-xs text-slate-400 hidden sm:block">
                            {format(new Date(contact.submittedAt), "MMM d, yyyy")}
                          </span>
                          <button
                            onClick={(e) => { e.stopPropagation(); handleDelete(contact.id) }}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors"
                            title="Delete contact"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <p className="text-xs text-slate-500 mt-2 line-clamp-2 pl-13">
                        {contact.message}
                      </p>
                    </Card>
                  ))}
                </div>
              )}
            </div>

            {/* Detail panel */}
            <div className="lg:w-96 flex-shrink-0">
              {selected ? (
                <Card className="p-6 sticky top-24">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center">
                      <span className="text-indigo-700 font-bold text-xl">
                        {selected.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <h2 className="text-lg font-bold text-slate-900">{selected.name}</h2>
                      <p className="text-xs text-slate-400">
                        {format(new Date(selected.submittedAt), "MMMM d, yyyy 'at' h:mm a")}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Mail className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-slate-500 mb-0.5">Email</p>
                        <a href={`mailto:${selected.email}`} className="text-sm text-indigo-600 hover:underline break-all">
                          {selected.email}
                        </a>
                      </div>
                    </div>

                    {selected.phone && (
                      <div className="flex items-start gap-3">
                        <Phone className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-slate-500 mb-0.5">Phone</p>
                          <a href={`tel:${selected.phone}`} className="text-sm text-slate-700 hover:underline">
                            {selected.phone}
                          </a>
                        </div>
                      </div>
                    )}

                    <div className="flex items-start gap-3">
                      <MessageSquare className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-medium text-slate-500 mb-0.5">Message</p>
                        <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{selected.message}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex gap-2">
                    <a href={`mailto:${selected.email}`} className="flex-1">
                      <Button size="sm" className="w-full">
                        <Mail className="w-4 h-4 mr-1.5" /> Reply
                      </Button>
                    </a>
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleDelete(selected.id)}
                      className="text-red-500 border-red-200 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ) : (
                <Card className="p-8 text-center sticky top-24">
                  <MessageSquare className="w-10 h-10 text-slate-300 mx-auto mb-3" />
                  <p className="text-sm text-slate-400">Select a contact to view details</p>
                </Card>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
