import React, { useState, useCallback, useEffect } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select } from '@/components/ui/select'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { PlusCircle, Pencil, Trash2, Search, RefreshCw, FileText, X } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) return response.errors.join(', ')
  return error?.message || 'Request failed'
}

const EMPTY_FORM = {
  title: '',
  slug: '',
  summary: '',
  content: '',
  author: '',
  status: 'draft',
  category: '',
  tags: '',
}

const STATUS_VARIANTS = {
  draft: 'secondary',
  published: 'success',
  archived: 'warning',
}

const STATUS_LABELS = {
  draft: 'Draft',
  published: 'Published',
  archived: 'Archived',
}

function ArticleFormDialog({ open, onOpenChange, initial, onSaved }) {
  const [form, setForm] = useState(EMPTY_FORM)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (open) {
      if (initial) {
        const d = initial.data || {}
        setForm({
          title: d.title || '',
          slug: d.slug || '',
          summary: d.summary || '',
          content: d.content || '',
          author: d.author || '',
          status: d.status || 'draft',
          category: d.category || '',
          tags: Array.isArray(d.tags) ? d.tags.join(', ') : (d.tags || ''),
        })
      } else {
        setForm(EMPTY_FORM)
      }
      setError(null)
    }
  }, [open, initial])

  const onChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const buildPayload = () => ({
    title: form.title.trim(),
    slug: form.slug.trim() || undefined,
    summary: form.summary.trim() || undefined,
    content: form.content.trim() || undefined,
    author: form.author.trim() || undefined,
    status: form.status,
    category: form.category.trim() || undefined,
    tags: form.tags ? form.tags.split(',').map((t) => t.trim()).filter(Boolean) : undefined,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!form.title.trim()) { setError('Title is required'); return }
    setSaving(true)
    setError(null)

    const payload = buildPayload()

    if (initial) {
      const { data: response, error: err } = await client
        .from('Articles')
        .update({ data: payload })
        .eq('id', initial.id)
        .select()
        .single()

      if (err || response?.success === false) {
        setError(getErrorMessage(response, err))
        setSaving(false)
        return
      }
      onSaved(getEntity(response), 'update')
    } else {
      const { data: response, error: err } = await client
        .from('Articles')
        .insert({ data: payload })
        .select()
        .single()

      if (err || response?.success === false) {
        setError(getErrorMessage(response, err))
        setSaving(false)
        return
      }
      onSaved(getEntity(response), 'create')
    }

    setSaving(false)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{initial ? 'Edit Article' : 'New Article'}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="title">Title <span className="text-red-500">*</span></Label>
            <Input id="title" name="title" value={form.title} onChange={onChange} placeholder="Article title" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="author">Author</Label>
              <Input id="author" name="author" value={form.author} onChange={onChange} placeholder="Author name" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="status">Status</Label>
              <Select id="status" name="status" value={form.status} onChange={onChange}>
                <option value="draft">Draft</option>
                <option value="published">Published</option>
                <option value="archived">Archived</option>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1">
              <Label htmlFor="category">Category</Label>
              <Input id="category" name="category" value={form.category} onChange={onChange} placeholder="e.g. Technology" />
            </div>
            <div className="space-y-1">
              <Label htmlFor="slug">Slug</Label>
              <Input id="slug" name="slug" value={form.slug} onChange={onChange} placeholder="url-friendly-slug" />
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="tags">Tags <span className="text-slate-400 text-xs">(comma separated)</span></Label>
            <Input id="tags" name="tags" value={form.tags} onChange={onChange} placeholder="react, javascript, web" />
          </div>
          <div className="space-y-1">
            <Label htmlFor="summary">Summary</Label>
            <Textarea id="summary" name="summary" value={form.summary} onChange={onChange} placeholder="Short description..." rows={2} />
          </div>
          <div className="space-y-1">
            <Label htmlFor="content">Content</Label>
            <Textarea id="content" name="content" value={form.content} onChange={onChange} placeholder="Full article content..." rows={6} />
          </div>
          {error && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">{error}</p>}
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button type="submit" disabled={saving}>{saving ? 'Saving…' : (initial ? 'Save Changes' : 'Create Article')}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}

function DeleteConfirmDialog({ open, onOpenChange, article, onDeleted }) {
  const [deleting, setDeleting] = useState(false)
  const [error, setError] = useState(null)

  const handleDelete = async () => {
    setDeleting(true)
    setError(null)
    const { data: response, error: err } = await client
      .from('Articles')
      .delete()
      .eq('id', article.id)
      .select()
      .maybeSingle()

    if (err || response?.success === false) {
      setError(getErrorMessage(response, err))
      setDeleting(false)
      return
    }
    setDeleting(false)
    onDeleted(article.id)
    onOpenChange(false)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Delete Article</DialogTitle>
        </DialogHeader>
        <p className="text-slate-600 text-sm">
          Are you sure you want to delete <span className="font-semibold text-slate-900">"{article?.data?.title}"</span>? This action cannot be undone.
        </p>
        {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
        <DialogFooter>
          <Button variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
          <Button variant="destructive" onClick={handleDelete} disabled={deleting}>
            {deleting ? 'Deleting…' : 'Delete'}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

function ArticleRow({ article, onEdit, onDelete }) {
  const d = article.data || {}
  const tags = Array.isArray(d.tags) ? d.tags : []

  return (
    <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
      <td className="px-4 py-3">
        <div className="font-medium text-slate-900 text-sm">{d.title}</div>
        {d.summary && <div className="text-xs text-slate-500 mt-0.5 line-clamp-1">{d.summary}</div>}
      </td>
      <td className="px-4 py-3 text-sm text-slate-600">{d.author || <span className="text-slate-400">—</span>}</td>
      <td className="px-4 py-3 text-sm text-slate-600">{d.category || <span className="text-slate-400">—</span>}</td>
      <td className="px-4 py-3">
        <Badge variant={STATUS_VARIANTS[d.status] || 'secondary'}>{STATUS_LABELS[d.status] || d.status}</Badge>
      </td>
      <td className="px-4 py-3">
        <div className="flex flex-wrap gap-1">
          {tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="outline" className="text-xs">{tag}</Badge>
          ))}
          {tags.length > 3 && <Badge variant="outline" className="text-xs">+{tags.length - 3}</Badge>}
        </div>
      </td>
      <td className="px-4 py-3">
        <div className="flex items-center gap-1">
          <Button size="icon" variant="ghost" onClick={() => onEdit(article)} title="Edit">
            <Pencil className="w-4 h-4 text-slate-500" />
          </Button>
          <Button size="icon" variant="ghost" onClick={() => onDelete(article)} title="Delete">
            <Trash2 className="w-4 h-4 text-red-400" />
          </Button>
        </div>
      </td>
    </tr>
  )
}

export default function ArticlesPage() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [formOpen, setFormOpen] = useState(false)
  const [editTarget, setEditTarget] = useState(null)
  const [deleteTarget, setDeleteTarget] = useState(null)

  const fetchArticles = useCallback(async () => {
    setLoading(true)
    setError(null)
    console.log('[Articles] Fetching articles...')
    let query = client.from('Articles').select('*').order('created_at', { ascending: false }).limit(100)
    const { data: response, error: err } = await query
    if (err) {
      console.error('[Articles] Fetch error:', err)
      setError(err.message || 'Failed to load articles')
      setLoading(false)
      return
    }
    const rows = getRows(response)
    console.log('[Articles] Fetched', rows.length, 'articles')
    setArticles(rows)
    setLoading(false)
  }, [])

  useEffect(() => { fetchArticles() }, [fetchArticles])

  const handleSaved = (entity, type) => {
    console.log('[Articles] Saved:', type, entity)
    if (type === 'create') {
      setArticles((prev) => [entity, ...prev])
    } else {
      setArticles((prev) => prev.map((a) => (a.id === entity.id ? entity : a)))
    }
  }

  const handleDeleted = (id) => {
    console.log('[Articles] Deleted id:', id)
    setArticles((prev) => prev.filter((a) => a.id !== id))
  }

  const openCreate = () => { setEditTarget(null); setFormOpen(true) }
  const openEdit = (article) => { setEditTarget(article); setFormOpen(true) }
  const openDelete = (article) => setDeleteTarget(article)

  const filtered = articles.filter((a) => {
    const d = a.data || {}
    const matchSearch = !search ||
      (d.title || '').toLowerCase().includes(search.toLowerCase()) ||
      (d.author || '').toLowerCase().includes(search.toLowerCase()) ||
      (d.category || '').toLowerCase().includes(search.toLowerCase())
    const matchStatus = statusFilter === 'all' || d.status === statusFilter
    return matchSearch && matchStatus
  })

  const counts = {
    all: articles.length,
    draft: articles.filter((a) => a.data?.status === 'draft').length,
    published: articles.filter((a) => a.data?.status === 'published').length,
    archived: articles.filter((a) => a.data?.status === 'archived').length,
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-slate-700" />
            <div>
              <h1 className="text-xl font-bold text-slate-900">Articles</h1>
              <p className="text-xs text-slate-500">{counts.all} total articles</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" onClick={fetchArticles} disabled={loading}>
              <RefreshCw className={`w-4 h-4 mr-1.5 ${loading ? 'animate-spin' : ''}`} />
              Refresh
            </Button>
            <Button size="sm" onClick={openCreate}>
              <PlusCircle className="w-4 h-4 mr-1.5" />
              New Article
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <Input
              className="pl-9"
              placeholder="Search by title, author, or category…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            {search && (
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600" onClick={() => setSearch('')}>
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          <div className="flex gap-1 bg-white border border-slate-200 rounded-md p-1">
            {['all', 'draft', 'published', 'archived'].map((s) => (
              <button
                key={s}
                onClick={() => setStatusFilter(s)}
                className={`px-3 py-1 rounded text-xs font-medium transition-colors capitalize ${
                  statusFilter === s
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                {s === 'all' ? 'All' : STATUS_LABELS[s]} ({counts[s]})
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden">
          {error && (
            <div className="p-4 bg-red-50 border-b border-red-200 text-red-700 text-sm">{error}</div>
          )}
          {loading ? (
            <div className="flex items-center justify-center py-16 text-slate-500">
              <RefreshCw className="w-5 h-5 animate-spin mr-2" />
              Loading articles…
            </div>
          ) : filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-slate-400">
              <FileText className="w-10 h-10 mb-3 opacity-40" />
              <p className="font-medium text-slate-500">No articles found</p>
              <p className="text-sm mt-1">
                {search || statusFilter !== 'all' ? 'Try adjusting your filters' : 'Create your first article to get started'}
              </p>
              {!search && statusFilter === 'all' && (
                <Button size="sm" className="mt-4" onClick={openCreate}>
                  <PlusCircle className="w-4 h-4 mr-1.5" />
                  New Article
                </Button>
              )}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Title</th>
                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Author</th>
                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Category</th>
                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Status</th>
                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Tags</th>
                    <th className="px-4 py-3 text-xs font-semibold text-slate-500 uppercase tracking-wide">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((article) => (
                    <ArticleRow
                      key={article.id}
                      article={article}
                      onEdit={openEdit}
                      onDelete={openDelete}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {filtered.length > 0 && (
          <p className="text-xs text-slate-400 text-right">
            Showing {filtered.length} of {articles.length} articles
          </p>
        )}
      </div>

      <ArticleFormDialog
        open={formOpen}
        onOpenChange={setFormOpen}
        initial={editTarget}
        onSaved={handleSaved}
      />

      {deleteTarget && (
        <DeleteConfirmDialog
          open={!!deleteTarget}
          onOpenChange={(v) => { if (!v) setDeleteTarget(null) }}
          article={deleteTarget}
          onDeleted={handleDeleted}
        />
      )}
    </div>
  )
}
