import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Mail, Phone, MessageSquare, Trash2, Users, Calendar, Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { format, parseISO } from 'date-fns'

const STORAGE_KEY = 'saved_contacts'

const ContactsPage = () => {
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState('')
  const [deleteId, setDeleteId] = useState(null)

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
    console.log('Loaded contacts from localStorage:', stored.length)
    setContacts(stored)
  }, [])

  const filtered = contacts.filter((c) => {
    const q = search.toLowerCase()
    return (
      c.name.toLowerCase().includes(q) ||
      c.email.toLowerCase().includes(q) ||
      (c.subject || '').toLowerCase().includes(q) ||
      (c.phone || '').toLowerCase().includes(q)
    )
  })

  const handleDelete = (id) => {
    const updated = contacts.filter((c) => c.id !== id)
    setContacts(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    setDeleteId(null)
    console.log('Deleted contact:', id)
  }

  const handleClearAll = () => {
    setContacts([])
    localStorage.removeItem(STORAGE_KEY)
    console.log('Cleared all contacts')
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link to="/">
              <Button variant="ghost" size="sm" className="gap-1.5">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Button>
            </Link>
            <div className="h-5 w-px bg-slate-200" />
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-indigo-600" />
              <h1 className="text-lg font-bold text-slate-900">Saved Contacts</h1>
            </div>
            <Badge variant="secondary">{contacts.length}</Badge>
          </div>

          {contacts.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={handleClearAll}
              className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300"
            >
              Clear all
            </Button>
          )}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {contacts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-slate-400" />
            </div>
            <h2 className="text-xl font-bold text-slate-900 mb-2">No contacts yet</h2>
            <p className="text-slate-500 mb-6 max-w-sm">
              When someone fills out the contact form on your landing page, they'll appear here.
            </p>
            <Link to="/#contact">
              <Button>Go to contact form</Button>
            </Link>
          </div>
        ) : (
          <>
            {/* Search */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search by name, email, subject..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9"
              />
            </div>

            {filtered.length === 0 ? (
              <p className="text-center text-slate-500 py-12">No contacts match your search.</p>
            ) : (
              <div className="space-y-4">
                {filtered.map((contact) => (
                  <Card key={contact.id} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                        <div className="flex-1 min-w-0">
                          {/* Name + subject */}
                          <div className="flex flex-wrap items-center gap-2 mb-3">
                            <h3 className="text-base font-bold text-slate-900">{contact.name}</h3>
                            {contact.subject && (
                              <Badge variant="secondary">{contact.subject}</Badge>
                            )}
                          </div>

                          {/* Contact details */}
                          <div className="flex flex-wrap gap-x-6 gap-y-1.5 mb-4">
                            <a
                              href={`mailto:${contact.email}`}
                              className="flex items-center gap-1.5 text-sm text-indigo-600 hover:text-indigo-700"
                            >
                              <Mail className="w-3.5 h-3.5 flex-shrink-0" />
                              <span className="truncate">{contact.email}</span>
                            </a>
                            {contact.phone && (
                              <a
                                href={`tel:${contact.phone}`}
                                className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-slate-900"
                              >
                                <Phone className="w-3.5 h-3.5 flex-shrink-0" />
                                {contact.phone}
                              </a>
                            )}
                            <span className="flex items-center gap-1.5 text-xs text-slate-400">
                              <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                              {format(parseISO(contact.submittedAt), 'MMM d, yyyy · h:mm a')}
                            </span>
                          </div>

                          {/* Message */}
                          <div className="flex items-start gap-2 bg-slate-50 rounded-lg p-3">
                            <MessageSquare className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" />
                            <p className="text-sm text-slate-600 leading-relaxed">{contact.message}</p>
                          </div>
                        </div>

                        {/* Delete */}
                        <div className="flex-shrink-0">
                          {deleteId === contact.id ? (
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-slate-500">Delete?</span>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleDelete(contact.id)}
                                className="text-xs px-3 py-1.5 h-auto"
                              >
                                Yes
                              </Button>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => setDeleteId(null)}
                                className="text-xs px-3 py-1.5 h-auto"
                              >
                                No
                              </Button>
                            </div>
                          ) : (
                            <button
                              onClick={() => setDeleteId(contact.id)}
                              className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                              aria-label="Delete contact"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default ContactsPage
