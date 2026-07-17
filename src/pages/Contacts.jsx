import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Trash2, Mail, Phone, Building2, Inbox } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  fetchContacts,
  updateContactStatus,
  deleteContact,
  getSchemaData,
} from '@/api/contacts'

const STATUS_STYLES = {
  new: 'bg-indigo-100 text-indigo-700',
  read: 'bg-slate-100 text-slate-600',
  archived: 'bg-amber-100 text-amber-700',
}

function formatDate(value) {
  if (!value) return ''
  try {
    const d = new Date(value)
    if (Number.isNaN(d.getTime())) return value
    return d.toLocaleString()
  } catch {
    return value
  }
}

export default function Contacts() {
  const [items, setItems] = React.useState([])
  const [status, setStatus] = React.useState('loading')
  const [error, setError] = React.useState(null)

  const refresh = React.useCallback(async () => {
    setStatus('loading')
    setError(null)
    try {
      const rows = await fetchContacts()
      setItems(rows)
      setStatus('ready')
    } catch (err) {
      setError(err.message || 'Failed to load contacts')
      setStatus('error')
    }
  }, [])

  React.useEffect(() => {
    refresh()
  }, [refresh])

  const handleStatusChange = async (item, nextStatus) => {
    try {
      const updated = await updateContactStatus(item, nextStatus)
      setItems((current) =>
        current.map((entry) => (entry.id === updated.id ? updated : entry))
      )
    } catch (err) {
      setError(err.message || 'Failed to update contact')
    }
  }

  const handleDelete = async (itemId) => {
    try {
      await deleteContact(itemId)
      setItems((current) => current.filter((entry) => entry.id !== itemId))
    } catch (err) {
      setError(err.message || 'Failed to delete contact')
    }
  }

  const newCount = items.filter((i) => getSchemaData(i).status === 'new').length

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 backdrop-blur bg-white/80 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900">
            <ArrowLeft className="w-4 h-4" /> Back to site
          </Link>
          <span className="font-bold text-lg tracking-tight">Contacts</span>
          <Button variant="outline" size="sm" onClick={refresh}>
            Refresh
          </Button>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Saved contacts</h1>
            <p className="text-sm text-slate-600 mt-1">
              {items.length} total · {newCount} new
            </p>
          </div>
        </div>

        {error && (
          <div className="mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            {error}
          </div>
        )}

        {status === 'loading' && (
          <div className="text-center py-20 text-slate-500">Loading contacts…</div>
        )}

        {status === 'ready' && items.length === 0 && (
          <div className="text-center py-20">
            <div className="mx-auto w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center">
              <Inbox className="w-7 h-7 text-slate-400" />
            </div>
            <p className="mt-4 text-slate-600">No contacts yet.</p>
            <Link to="/" className="mt-3 inline-block">
              <Button variant="outline" size="sm">Submit the contact form</Button>
            </Link>
          </div>
        )}

        {status === 'ready' && items.length > 0 && (
          <div className="grid gap-4">
            {items.map((item) => {
              const f = getSchemaData(item)
              return (
                <article
                  key={item.id}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h2 className="font-semibold text-lg truncate">{f.name || 'Unnamed'}</h2>
                        <span
                          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
                            STATUS_STYLES[f.status] || STATUS_STYLES.new
                          }`}
                        >
                          {f.status || 'new'}
                        </span>
                      </div>
                      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 text-sm text-slate-600">
                        <span className="inline-flex items-center gap-1.5">
                          <Mail className="w-4 h-4" /> {f.email || '—'}
                        </span>
                        {f.phone && (
                          <span className="inline-flex items-center gap-1.5">
                            <Phone className="w-4 h-4" /> {f.phone}
                          </span>
                        )}
                        {f.company && (
                          <span className="inline-flex items-center gap-1.5">
                            <Building2 className="w-4 h-4" /> {f.company}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <select
                        value={f.status || 'new'}
                        onChange={(e) => handleStatusChange(item, e.target.value)}
                        className="h-9 rounded-lg border border-slate-300 bg-white px-2 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400"
                      >
                        <option value="new">new</option>
                        <option value="read">read</option>
                        <option value="archived">archived</option>
                      </select>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(item.id)}
                        aria-label="Delete contact"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </Button>
                    </div>
                  </div>
                  {f.message && (
                    <p className="mt-3 text-sm text-slate-700 whitespace-pre-wrap border-t border-slate-100 pt-3">
                      {f.message}
                    </p>
                  )}
                  <p className="mt-3 text-xs text-slate-400">
                    {formatDate(item.created_at)}
                  </p>
                </article>
              )
            })}
          </div>
        )}
      </main>
    </div>
  )
}
