import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { getContacts } from "@/components/landing/ContactForm"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, Mail, Building2, MessageSquare, Clock, Trash2, Search } from "lucide-react"
import { format, parseISO, formatDistanceToNow } from "date-fns"

const STORAGE_KEY = "spark_contacts"

export default function Contacts() {
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    setContacts(getContacts())
  }, [])

  const handleDelete = (id) => {
    const updated = contacts.filter((c) => c.id !== id)
    setContacts(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    if (selected?.id === id) setSelected(null)
  }

  const filtered = contacts.filter((c) => {
    const q = search.toLowerCase()
    return (
      c.name.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      (c.company || "").toLowerCase().includes(q) ||
      c.message.toLowerCase().includes(q)
    )
  })

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to site
              </Button>
            </Link>
            <div className="h-5 w-px bg-slate-200" />
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-600" />
              <h1 className="font-semibold text-slate-900">Contact Submissions</h1>
            </div>
          </div>
          <Badge variant="secondary" className="text-slate-700">
            {contacts.length} {contacts.length === 1 ? "contact" : "contacts"}
          </Badge>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {contacts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="w-8 h-8 text-slate-400" />
            </div>
            <h2 className="text-xl font-semibold text-slate-900 mb-2">No contacts yet</h2>
            <p className="text-slate-500 mb-6 max-w-sm">
              When someone fills out the contact form on your landing page, their submission will appear here.
            </p>
            <Link to="/#contact">
              <Button variant="outline">Go to contact form</Button>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* List */}
            <div className="lg:col-span-2 space-y-3">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search contacts…"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full pl-9 pr-4 h-10 rounded-lg border border-slate-300 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>

              {filtered.length === 0 ? (
                <p className="text-center text-slate-500 text-sm py-8">No results for "{search}"</p>
              ) : (
                filtered.map((contact) => (
                  <button
                    key={contact.id}
                    onClick={() => setSelected(contact)}
                    className={`w-full text-left p-4 rounded-xl border transition-all duration-150 ${
                      selected?.id === contact.id
                        ? "border-indigo-300 bg-indigo-50 shadow-sm"
                        : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <span className="font-medium text-slate-900 text-sm truncate">{contact.name}</span>
                      <span className="text-xs text-slate-400 flex-shrink-0">
                        {formatDistanceToNow(parseISO(contact.submittedAt), { addSuffix: true })}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 truncate mb-1">{contact.email}</p>
                    {contact.company && (
                      <p className="text-xs text-slate-400 truncate">{contact.company}</p>
                    )}
                    <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">{contact.message}</p>
                  </button>
                ))
              )}
            </div>

            {/* Detail */}
            <div className="lg:col-span-3">
              {selected ? (
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 sticky top-24">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h2 className="text-2xl font-bold text-slate-900">{selected.name}</h2>
                      {selected.company && (
                        <p className="text-slate-500 text-sm mt-0.5">{selected.company}</p>
                      )}
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(selected.id)}
                      className="text-slate-400 hover:text-red-600 hover:bg-red-50"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <Mail className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Email</p>
                        <a href={`mailto:${selected.email}`} className="text-sm text-indigo-600 hover:underline">
                          {selected.email}
                        </a>
                      </div>
                    </div>

                    {selected.company && (
                      <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                        <Building2 className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                        <div>
                          <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Company</p>
                          <p className="text-sm text-slate-900">{selected.company}</p>
                        </div>
                      </div>
                    )}

                    <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg">
                      <Clock className="w-4 h-4 text-indigo-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Submitted</p>
                        <p className="text-sm text-slate-900">
                          {format(parseISO(selected.submittedAt), "PPPp")}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="text-xs text-slate-500 font-medium uppercase tracking-wide mb-3">Message</p>
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-slate-800 text-sm leading-relaxed whitespace-pre-wrap">{selected.message}</p>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <a href={`mailto:${selected.email}`}>
                      <Button className="w-full gap-2">
                        <Mail className="w-4 h-4" />
                        Reply via email
                      </Button>
                    </a>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center h-64 bg-white rounded-2xl border border-slate-200 border-dashed text-center p-8">
                  <MessageSquare className="w-8 h-8 text-slate-300 mb-3" />
                  <p className="text-slate-500 text-sm">Select a contact to view details</p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
