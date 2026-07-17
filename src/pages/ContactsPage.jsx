import { useState, useEffect, useCallback } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail, Phone, MessageSquare, Search, RefreshCw, Users, ChevronLeft, ChevronRight, X } from 'lucide-react'
import { format, parseISO } from 'date-fns'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)
const PAGE_SIZE = 10

const getRows = (res) => res?.data?.list ?? []
const getTotal = (res) => res?.data?.total ?? 0

export default function ContactsPage() {
  const [contacts, setContacts] = useState([])
  const [total, setTotal] = useState(0)
  const [page, setPage] = useState(0)
  const [search, setSearch] = useState('')
  const [debouncedSearch, setDebouncedSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [selected, setSelected] = useState(null)

  // Debounce search input
  useEffect(() => {
    const t = setTimeout(() => setDebouncedSearch(search), 350)
    return () => clearTimeout(t)
  }, [search])

  // Reset to page 0 when search changes
  useEffect(() => {
    setPage(0)
  }, [debouncedSearch])

  const fetchContacts = useCallback(async () => {
    setLoading(true)
    try {
      let query = client
        .from('Contact Form Submissions')
        .select('*')
        .order('created_at', { ascending: false })
        .range(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE - 1)

      if (debouncedSearch.trim()) {
        query = query.ilike('name', `%${debouncedSearch.trim()}%`)
      }

      const { data: response, error } = await query
      if (error) throw error
      setContacts(getRows(response))
      setTotal(getTotal(response))
    } catch (err) {
      console.error('Failed to fetch contacts:', err)
    } finally {
      setLoading(false)
    }
  }, [page, debouncedSearch])

  useEffect(() => {
    fetchContacts()
  }, [fetchContacts])

  const totalPages = Math.ceil(total / PAGE_SIZE)

  const formatDate = (dateStr) => {
    try { return format(parseISO(dateStr), 'MMM d, yyyy') } catch { return '—' }
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-5">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-slate-900">Contacts</h1>
              <p className="text-sm text-slate-500">{total} submission{total !== 1 ? 's' : ''} total</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <Input
                placeholder="Search by name…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-9 w-56"
              />
              {search && (
                <button
                  onClick={() => setSearch('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
            <Button variant="outline" size="icon" onClick={fetchContacts} title="Refresh">
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-8">
        {loading && contacts.length === 0 ? (
          <div className="flex items-center justify-center py-24 text-slate-400">
            <RefreshCw className="w-6 h-6 animate-spin mr-3" />
            <span>Loading contacts…</span>
          </div>
        ) : contacts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <MessageSquare className="w-12 h-12 text-slate-300 mb-4" />
            <h3 className="text-lg font-semibold text-slate-700 mb-1">No contacts yet</h3>
            <p className="text-slate-400 text-sm">
              {debouncedSearch ? 'No results match your search.' : 'Submissions from your contact form will appear here.'}
            </p>
          </div>
        ) : (
          <>
            {/* Table */}
            <div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-slate-100 bg-slate-50">
                      <th className="text-left px-5 py-3.5 font-semibold text-slate-600">Name</th>
                      <th className="text-left px-5 py-3.5 font-semibold text-slate-600">Email</th>
                      <th className="text-left px-5 py-3.5 font-semibold text-slate-600 hidden md:table-cell">Subject</th>
                      <th className="text-left px-5 py-3.5 font-semibold text-slate-600 hidden lg:table-cell">Date</th>
                      <th className="px-5 py-3.5"></th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {contacts.map((contact) => {
                      const d = contact.data ?? {}
                      return (
                        <tr
                          key={contact.id}
                          className="hover:bg-slate-50 transition-colors cursor-pointer"
                          onClick={() => setSelected(contact)}
                        >
                          <td className="px-5 py-4">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs flex-shrink-0">
                                {(d.name || '?')[0].toUpperCase()}
                              </div>
                              <span className="font-medium text-slate-900">{d.name || '—'}</span>
                            </div>
                          </td>
                          <td className="px-5 py-4 text-slate-600">{d.email || '—'}</td>
                          <td className="px-5 py-4 hidden md:table-cell">
                            {d.subject ? (
                              <Badge variant="secondary" className="text-slate-700">{d.subject}</Badge>
                            ) : (
                              <span className="text-slate-400">—</span>
                            )}
                          </td>
                          <td className="px-5 py-4 text-slate-500 hidden lg:table-cell">
                            {contact.created_at ? formatDate(contact.created_at) : '—'}
                          </td>
                          <td className="px-5 py-4 text-right">
                            <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700">
                              View
                            </Button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-between mt-5">
                <p className="text-sm text-slate-500">
                  Page {page + 1} of {totalPages}
                </p>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={() => setPage((p) => p - 1)} disabled={page === 0}>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={() => setPage((p) => p + 1)} disabled={page >= totalPages - 1}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      {/* Detail drawer / modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/40 px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl">
                {((selected.data?.name) || '?')[0].toUpperCase()}
              </div>
              <div>
                <h2 className="text-xl font-bold text-slate-900">{selected.data?.name || '—'}</h2>
                <p className="text-slate-500 text-sm">
                  {selected.created_at ? formatDate(selected.created_at) : ''}
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-slate-700">
                <Mail className="w-4 h-4 text-blue-500 flex-shrink-0" />
                <a href={`mailto:${selected.data?.email}`} className="hover:underline text-blue-600">
                  {selected.data?.email || '—'}
                </a>
              </div>
              {selected.data?.phone && (
                <div className="flex items-center gap-3 text-slate-700">
                  <Phone className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>{selected.data.phone}</span>
                </div>
              )}
              {selected.data?.subject && (
                <div className="flex items-start gap-3">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wide mt-0.5 w-16 flex-shrink-0">Subject</span>
                  <Badge variant="secondary" className="text-slate-700">{selected.data.subject}</Badge>
                </div>
              )}
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wide mb-2">Message</p>
                <p className="text-slate-800 leading-relaxed whitespace-pre-wrap">{selected.data?.message || '—'}</p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <Button variant="outline" onClick={() => setSelected(null)}>Close</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
