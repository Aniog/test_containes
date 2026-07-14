import { useState } from "react"
import { Link } from "react-router-dom"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Trash2, Mail, Phone, MessageSquare, ArrowLeft, Users, Calendar } from "lucide-react"
const formatDate = (iso) =>
  new Date(iso).toLocaleString(undefined, {
    year: "numeric", month: "long", day: "numeric",
    hour: "numeric", minute: "2-digit",
  })

const STORAGE_KEY = "saved_contacts"

const Contacts = () => {
  const [contacts, setContacts] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]")
    } catch {
      return []
    }
  })
  const [deleteId, setDeleteId] = useState(null)

  const handleDelete = (id) => {
    const updated = contacts.filter((c) => c.id !== id)
    setContacts(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    setDeleteId(null)
    console.log("Contact deleted, id:", id)
  }

  const handleClearAll = () => {
    setContacts([])
    localStorage.removeItem(STORAGE_KEY)
    console.log("All contacts cleared")
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="space-y-1">
            <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-700 font-medium mb-2">
              <ArrowLeft className="w-4 h-4" /> Back to site
            </Link>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Users className="w-6 h-6 text-indigo-600" />
              Saved Contacts
            </h1>
            <p className="text-gray-500 text-sm">
              {contacts.length === 0
                ? "No contacts yet"
                : `${contacts.length} contact${contacts.length !== 1 ? "s" : ""} submitted`}
            </p>
          </div>

          {contacts.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleClearAll}
              className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 self-start sm:self-auto"
            >
              <Trash2 className="w-4 h-4 mr-1.5" />
              Clear all
            </Button>
          )}
        </div>

        {contacts.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-16 text-center space-y-4">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto">
              <Users className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">No contacts yet</h3>
            <p className="text-gray-500 text-sm max-w-xs mx-auto">
              When someone fills out the contact form on your landing page, they'll appear here.
            </p>
            <Link to="/#contact">
              <Button variant="outline" className="mt-2">Go to contact form</Button>
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {contacts.map((contact) => (
              <div
                key={contact.id}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-base font-semibold text-gray-900">{contact.name}</h3>
                      <Badge variant="secondary">New</Badge>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5">
                      <div className="flex items-center gap-1.5 text-sm text-gray-600">
                        <Mail className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <a href={`mailto:${contact.email}`} className="hover:text-indigo-600 transition-colors">
                          {contact.email}
                        </a>
                      </div>
                      {contact.phone && (
                        <div className="flex items-center gap-1.5 text-sm text-gray-600">
                          <Phone className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <a href={`tel:${contact.phone}`} className="hover:text-indigo-600 transition-colors">
                            {contact.phone}
                          </a>
                        </div>
                      )}
                    </div>

                    {contact.message && (
                      <div className="flex gap-2 bg-gray-50 rounded-xl p-3">
                        <MessageSquare className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700 leading-relaxed">{contact.message}</p>
                      </div>
                    )}

                    <div className="flex items-center gap-1.5 text-xs text-gray-400">
                      <Calendar className="w-3.5 h-3.5" />
                      {formatDate(contact.submittedAt)}
                    </div>
                  </div>

                  <div className="flex sm:flex-col gap-2 sm:items-end">
                    {deleteId === contact.id ? (
                      <div className="flex gap-2">
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(contact.id)}
                          className="text-xs"
                        >
                          Confirm
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setDeleteId(null)}
                          className="text-xs"
                        >
                          Cancel
                        </Button>
                      </div>
                    ) : (
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setDeleteId(contact.id)}
                        className="text-gray-400 hover:text-red-500 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

export default Contacts
