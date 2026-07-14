import { useState, useEffect, useCallback } from "react"
import { Link } from "react-router-dom"
import { format } from "date-fns"
import { Users, ArrowLeft, Mail, Phone, MessageSquare, Search, Inbox, RefreshCw } from "lucide-react"
import { DataClient } from "@strikingly/sdk"
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from "@/config"
import { Button } from "@/components/ui/Button"
import { Card } from "@/components/ui/Card"

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getFields = (entity) => entity?.data ?? {}

export default function Contacts() {
  const [contacts, setContacts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState(null)

  const fetchContacts = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const { data: response, error: fetchError } = await client
        .from("Contact Form Responses")
        .select("*")
        .order("created_at", { ascending: false })
        .range(0, 99)

      if (fetchError) throw fetchError
      const rows = getRows(response)
      console.log("Loaded contacts:", rows.length)
      setContacts(rows)
    } catch (err) {
      console.error("Failed to load contacts:", err)
      setError(err.message || "Failed to load contacts")
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchContacts()
  }, [fetchContacts])

  const filtered = contacts.filter((c) => {
    const fields = getFields(c)
    const q = search.toLowerCase()
    return (
      (fields.name || "").toLowerCase().includes(q) ||
      (fields.email || "").toLowerCase().includes(q) ||
      (fields.phone || "").includes(q) ||
      (fields.message || "").toLowerCase().includes(q)
    )
  })

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
          <Button variant="outline" size="sm" onClick={fetchContacts} disabled={loading}>
            <RefreshCw className={`w-4 h-4 mr-1.5 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {loading ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <RefreshCw className="w-8 h-8 text-indigo-400 animate-spin mb-4" />
            <p className="text-slate-500">Loading contacts...</p>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <p className="text-red-500 mb-4">{error}</p>
            <Button onClick={fetchContacts}>Try Again</Button>
          </div>
        ) : contacts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center mb-4">
              <Inbox className="w-8 h-8 text-slate-400" />
            </div>
            <h2 className="text-xl font-semibold text-slate-700 mb-2">No contacts yet</h2>
            <p className="text-slate-400 mb-6">Submit the contact form on the landing page to see contacts here.</p>
            <Link to="/"><Button>Go to Landing Page</Button></Link>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Contact list */}
            <div className="flex-1 min-w-0">
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
                  {filtered.map((contact) => {
                    const fields = getFields(contact)
                    return (
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
                                {(fields.name || "?").charAt(0).toUpperCase()}
                              </span>
                            </div>
                            <div className="min-w-0">
                              <p className="font-semibold text-slate-900 text-sm truncate">{fields.name}</p>
                              <p className="text-xs text-slate-500 truncate">{fields.email}</p>
                            </div>
                          </div>
                          <span className="text-xs text-slate-400 flex-shrink-0 hidden sm:block">
                            {contact.created_at ? format(new Date(contact.created_at), "MMM d, yyyy") : ""}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-2 line-clamp-2 pl-13">
                          {fields.message}
                        </p>
                      </Card>
                    )
                  })}
                </div>
              )}
            </div>

            {/* Detail panel */}
            <div className="lg:w-96 flex-shrink-0">
              {selected ? (() => {
                const fields = getFields(selected)
                return (
                  <Card className="p-6 sticky top-24">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center">
                        <span className="text-indigo-700 font-bold text-xl">
                          {(fields.name || "?").charAt(0).toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-slate-900">{fields.name}</h2>
                        <p className="text-xs text-slate-400">
                          {selected.created_at ? format(new Date(selected.created_at), "MMMM d, yyyy 'at' h:mm a") : ""}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Mail className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-slate-500 mb-0.5">Email</p>
                          <a href={`mailto:${fields.email}`} className="text-sm text-indigo-600 hover:underline break-all">
                            {fields.email}
                          </a>
                        </div>
                      </div>

                      {fields.phone && (
                        <div className="flex items-start gap-3">
                          <Phone className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="text-xs font-medium text-slate-500 mb-0.5">Phone</p>
                            <a href={`tel:${fields.phone}`} className="text-sm text-slate-700 hover:underline">
                              {fields.phone}
                            </a>
                          </div>
                        </div>
                      )}

                      <div className="flex items-start gap-3">
                        <MessageSquare className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="text-xs font-medium text-slate-500 mb-0.5">Message</p>
                          <p className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{fields.message}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-slate-100">
                      <a href={`mailto:${fields.email}`} className="block">
                        <Button size="sm" className="w-full">
                          <Mail className="w-4 h-4 mr-1.5" /> Reply via Email
                        </Button>
                      </a>
                    </div>
                  </Card>
                )
              })() : (
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
