import { useState, useEffect, useCallback } from 'react'
import { fetchContacts } from '../api/contacts.js'
import { Users, Mail, Phone, MessageSquare, Calendar, RefreshCw, ArrowLeft, Inbox } from 'lucide-react'
import { Link } from 'react-router-dom'
import { format, parseISO } from 'date-fns'

const Contacts = () => {
  const [contacts, setContacts] = useState([])
  const [status, setStatus] = useState('loading')
  const [error, setError] = useState(null)
  const [selected, setSelected] = useState(null)

  const load = useCallback(async () => {
    setStatus('loading')
    setError(null)
    try {
      const rows = await fetchContacts()
      setContacts(rows)
      setStatus('ready')
    } catch (err) {
      console.error('Failed to load contacts:', err)
      setError(err.message || 'Failed to load contacts.')
      setStatus('error')
    }
  }, [])

  useEffect(() => { load() }, [load])

  const formatDate = (iso) => {
    try { return format(parseISO(iso), 'MMM d, yyyy · h:mm a') }
    catch { return iso }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="text-gray-400 hover:text-gray-600 transition-colors p-1.5 rounded-lg hover:bg-gray-100"
              aria-label="Back to site"
            >
              <ArrowLeft className="w-4 h-4" />
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Users className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-gray-900 font-semibold text-base">Contacts</h1>
            </div>
            {status === 'ready' && (
              <span className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2.5 py-0.5 rounded-full">
                {contacts.length}
              </span>
            )}
          </div>
          <button
            onClick={load}
            disabled={status === 'loading'}
            className="flex items-center gap-1.5 text-sm text-gray-600 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 px-3 py-1.5 rounded-lg transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${status === 'loading' ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {status === 'loading' && (
          <div className="flex items-center justify-center py-24">
            <div className="w-8 h-8 border-2 border-indigo-200 border-t-indigo-600 rounded-full animate-spin" />
          </div>
        )}

        {status === 'error' && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
            <p className="text-red-700 font-medium mb-3">{error}</p>
            <button
              onClick={load}
              className="text-sm text-red-600 hover:underline font-medium"
            >
              Try again
            </button>
          </div>
        )}

        {status === 'ready' && contacts.length === 0 && (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4">
              <Inbox className="w-8 h-8 text-gray-400" />
            </div>
            <h2 className="text-gray-900 font-semibold text-lg mb-2">No contacts yet</h2>
            <p className="text-gray-500 text-sm max-w-xs">
              When someone fills out the contact form on your landing page, they'll appear here.
            </p>
            <Link
              to="/#contact"
              className="mt-5 text-indigo-600 text-sm font-medium hover:underline"
            >
              View contact form →
            </Link>
          </div>
        )}

        {status === 'ready' && contacts.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            {/* List */}
            <div className="lg:col-span-2 space-y-2">
              {contacts.map((contact) => {
                const d = contact.data ?? {}
                const isSelected = selected?.id === contact.id
                return (
                  <button
                    key={contact.id}
                    onClick={() => setSelected(contact)}
                    className={`w-full text-left bg-white rounded-xl border p-4 transition-all duration-150 hover:shadow-sm ${
                      isSelected
                        ? 'border-indigo-400 ring-1 ring-indigo-400 shadow-sm'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-indigo-700 font-semibold text-sm">
                          {(d.name || '?')[0].toUpperCase()}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-gray-900 font-medium text-sm truncate">{d.name || '—'}</p>
                        <p className="text-gray-500 text-xs truncate mt-0.5">{d.email || '—'}</p>
                        {contact.created_at && (
                          <p className="text-gray-400 text-xs mt-1">
                            {formatDate(contact.created_at)}
                          </p>
                        )}
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Detail */}
            <div className="lg:col-span-3">
              {!selected ? (
                <div className="bg-white rounded-xl border border-gray-200 flex items-center justify-center h-64">
                  <p className="text-gray-400 text-sm">Select a contact to view details</p>
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
                  <div className="bg-indigo-600 px-6 py-5">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {(selected.data?.name || '?')[0].toUpperCase()}
                        </span>
                      </div>
                      <div>
                        <h2 className="text-white font-bold text-lg">{selected.data?.name || '—'}</h2>
                        <p className="text-indigo-200 text-sm">{selected.data?.email || '—'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Mail className="w-4 h-4 text-gray-500" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Email</p>
                          <a
                            href={`mailto:${selected.data?.email}`}
                            className="text-indigo-600 text-sm hover:underline mt-0.5 block"
                          >
                            {selected.data?.email || '—'}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Phone className="w-4 h-4 text-gray-500" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Phone</p>
                          <p className="text-gray-800 text-sm mt-0.5">{selected.data?.phone || 'Not provided'}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-4 h-4 text-gray-500" />
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Submitted</p>
                          <p className="text-gray-800 text-sm mt-0.5">
                            {selected.created_at ? formatDate(selected.created_at) : '—'}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-100 pt-5">
                      <div className="flex items-center gap-2 mb-3">
                        <MessageSquare className="w-4 h-4 text-gray-400" />
                        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Message</p>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed bg-gray-50 rounded-lg p-4 border border-gray-100">
                        {selected.data?.message || '—'}
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Contacts
