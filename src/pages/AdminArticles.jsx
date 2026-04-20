import { useState, useEffect, useCallback } from 'react'
import { Plus, Pencil, Trash2, RefreshCw, Eye, EyeOff, Clock } from 'lucide-react'
import { formatDistanceToNow } from 'date-fns'
import { fetchArticles, deleteArticle } from '@/api/articles'
import { PlatformBadge } from '@/components/ui/PlatformBadge'
import { Button } from '@/components/ui/button'
import ArticleFormModal from '@/components/admin/ArticleFormModal'
import ConfirmDialog from '@/components/admin/ConfirmDialog'

export default function AdminArticles() {
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Modal state
  const [editTarget, setEditTarget] = useState(undefined) // undefined = closed, null = new, object = edit
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [deleting, setDeleting] = useState(false)
  const [deleteError, setDeleteError] = useState(null)

  // Toast-style feedback
  const [toast, setToast] = useState(null)

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3500)
  }

  const loadArticles = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const { rows } = await fetchArticles({ limit: 50 })
      setArticles(rows)
    } catch (err) {
      setError(err.message || 'Failed to load articles')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => { loadArticles() }, [loadArticles])

  const handleSaved = async () => {
    const wasNew = editTarget === null
    setEditTarget(undefined)
    await loadArticles()
    showToast(wasNew ? 'Article created successfully' : 'Article updated successfully')
  }

  const handleDeleteConfirm = async () => {
    if (!deleteTarget) return
    setDeleting(true)
    setDeleteError(null)
    try {
      await deleteArticle(deleteTarget.id)
      setArticles(prev => prev.filter(a => a.id !== deleteTarget.id))
      setDeleteTarget(null)
      showToast('Article deleted')
    } catch (err) {
      setDeleteError(err.message || 'Delete failed')
    } finally {
      setDeleting(false)
    }
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Page header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-white">Articles Admin</h1>
          <p className="text-gray-400 text-sm mt-1">
            {articles.length} article{articles.length !== 1 ? 's' : ''} · All edits require approval before saving
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="secondary" size="sm" onClick={loadArticles} disabled={loading} className="gap-1.5">
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
          <Button size="sm" onClick={() => setEditTarget(null)} className="gap-1.5">
            <Plus className="w-4 h-4" />
            New Article
          </Button>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className={`fixed top-5 right-5 z-[70] px-4 py-3 rounded-lg shadow-xl text-sm font-medium transition-all ${
          toast.type === 'success' ? 'bg-green-800 border border-green-600 text-green-100' : 'bg-red-800 border border-red-600 text-red-100'
        }`}>
          {toast.msg}
        </div>
      )}

      {/* Error state */}
      {error && (
        <div className="bg-red-900/30 border border-red-700 rounded-lg px-4 py-3 text-red-300 text-sm mb-6">
          {error}
        </div>
      )}

      {/* Table */}
      {loading ? (
        <div className="space-y-3">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-gray-800 rounded-xl h-16 animate-pulse" />
          ))}
        </div>
      ) : articles.length === 0 ? (
        <div className="text-center py-20 text-gray-500">
          <p className="text-lg mb-3">No articles yet</p>
          <Button onClick={() => setEditTarget(null)} className="gap-2">
            <Plus className="w-4 h-4" /> Create First Article
          </Button>
        </div>
      ) : (
        <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-700 bg-gray-900/50">
                <th className="text-left px-4 py-3 text-gray-400 font-medium">Title</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium hidden md:table-cell">Category</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium hidden lg:table-cell">Platform</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium hidden lg:table-cell">Author</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium hidden md:table-cell">Status</th>
                <th className="text-left px-4 py-3 text-gray-400 font-medium hidden xl:table-cell">Updated</th>
                <th className="text-right px-4 py-3 text-gray-400 font-medium">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-700">
              {articles.map(article => {
                const d = article.data || {}
                return (
                  <tr key={article.id} className="hover:bg-gray-700/30 transition-colors group">
                    <td className="px-4 py-3">
                      <div className="flex items-start gap-2">
                        {d.cover_image_url && (
                          <img
                            src={d.cover_image_url}
                            alt=""
                            className="w-8 h-8 rounded object-cover flex-shrink-0 mt-0.5 hidden sm:block"
                          />
                        )}
                        <div className="min-w-0">
                          <p className="text-white font-medium truncate max-w-[200px] md:max-w-[280px]">
                            {d.title || <span className="italic text-gray-500">(no title)</span>}
                          </p>
                          {d.summary && (
                            <p className="text-gray-500 text-xs truncate max-w-[200px] md:max-w-[280px] mt-0.5">
                              {d.summary}
                            </p>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      {d.category ? (
                        <span className="bg-indigo-900/50 text-indigo-300 border border-indigo-700 text-xs px-2 py-0.5 rounded-full capitalize">
                          {d.category}
                        </span>
                      ) : (
                        <span className="italic text-gray-600 text-xs">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      {d.platform ? (
                        <PlatformBadge platform={d.platform} />
                      ) : (
                        <span className="italic text-gray-600 text-xs">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3 hidden lg:table-cell">
                      <span className="text-gray-300 text-xs">
                        {d.author || <span className="italic text-gray-600">—</span>}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden md:table-cell">
                      <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${
                        d.published
                          ? 'bg-green-900/40 text-green-300 border border-green-700'
                          : 'bg-gray-700 text-gray-400 border border-gray-600'
                      }`}>
                        {d.published ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                        {d.published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="px-4 py-3 hidden xl:table-cell">
                      {d.published_at ? (
                        <span className="text-gray-500 text-xs flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {formatDistanceToNow(new Date(d.published_at), { addSuffix: true })}
                        </span>
                      ) : (
                        <span className="italic text-gray-600 text-xs">—</span>
                      )}
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center justify-end gap-1">
                        <button
                          onClick={() => setEditTarget(article)}
                          className="p-1.5 text-gray-400 hover:text-indigo-400 hover:bg-indigo-900/30 rounded-md transition-colors"
                          title="Edit article"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => { setDeleteTarget(article); setDeleteError(null) }}
                          className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-900/30 rounded-md transition-colors"
                          title="Delete article"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit / Create modal */}
      {editTarget !== undefined && (
        <ArticleFormModal
          article={editTarget}
          onClose={() => setEditTarget(undefined)}
          onSaved={handleSaved}
        />
      )}

      {/* Delete confirmation */}
      <ConfirmDialog
        open={!!deleteTarget}
        title="Delete Article"
        description={`"${deleteTarget?.data?.title || 'This article'}" will be permanently deleted. This cannot be undone.`}
        confirmLabel="Delete"
        confirmVariant="destructive"
        onConfirm={handleDeleteConfirm}
        onCancel={() => { setDeleteTarget(null); setDeleteError(null) }}
        loading={deleting}
      />
    </div>
  )
}
