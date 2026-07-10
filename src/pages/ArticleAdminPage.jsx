import { useState, useEffect, useCallback } from 'react';
import {
  Plus, Pencil, Trash2, Eye, EyeOff, Star, StarOff,
  Loader2, X, Save, ChevronLeft, Search, Filter,
} from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import {
  fetchAllArticlesAdmin, createArticle, updateArticle, deleteArticle,
} from '@/api/articles';

const CATEGORY_OPTIONS = ['News', 'Reviews', 'Guides', 'Deals', 'Features'];

const CATEGORY_COLORS = {
  News:     'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  Reviews:  'bg-purple-500/20 text-purple-400 border-purple-500/30',
  Guides:   'bg-amber-500/20 text-amber-400 border-amber-500/30',
  Deals:    'bg-red-500/20 text-red-400 border-red-500/30',
  Features: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
};

const EMPTY_FORM = {
  title: '',
  category: 'News',
  excerpt: '',
  body: '',
  author: '',
  date: new Date().toISOString().slice(0, 10),
  read_time: '5 min',
  featured: false,
  published: true,
  tags: '',
};

// ── Article Form Modal ────────────────────────────────────────────────────────
function ArticleFormModal({ initial, onSave, onClose, saving }) {
  const [form, setForm] = useState(() =>
    initial
      ? {
          ...EMPTY_FORM,
          ...initial.data,
          tags: Array.isArray(initial.data?.tags) ? initial.data.tags.join(', ') : '',
        }
      : EMPTY_FORM
  );

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      tags: form.tags
        .split(',')
        .map((t) => t.trim())
        .filter(Boolean),
    };
    onSave(payload);
  };

  const inputCls =
    'w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors';
  const labelCls = 'block text-xs font-semibold text-gray-400 mb-1';

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/80 backdrop-blur-sm overflow-y-auto py-8 px-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-2xl shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
          <h2 className="text-white font-bold text-lg">
            {initial ? 'Edit Article' : 'New Article'}
          </h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Title */}
          <div>
            <label className={labelCls}>Title *</label>
            <input
              className={inputCls}
              value={form.title}
              onChange={(e) => set('title', e.target.value)}
              placeholder="Article headline"
              required
            />
          </div>

          {/* Category + Date row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Category *</label>
              <select
                className={inputCls}
                value={form.category}
                onChange={(e) => set('category', e.target.value)}
              >
                {CATEGORY_OPTIONS.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelCls}>Date *</label>
              <input
                type="date"
                className={inputCls}
                value={form.date}
                onChange={(e) => set('date', e.target.value)}
                required
              />
            </div>
          </div>

          {/* Author + Read time row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Author *</label>
              <input
                className={inputCls}
                value={form.author}
                onChange={(e) => set('author', e.target.value)}
                placeholder="Author name"
                required
              />
            </div>
            <div>
              <label className={labelCls}>Read Time</label>
              <input
                className={inputCls}
                value={form.read_time}
                onChange={(e) => set('read_time', e.target.value)}
                placeholder="e.g. 5 min"
              />
            </div>
          </div>

          {/* Excerpt */}
          <div>
            <label className={labelCls}>Excerpt * (shown in cards)</label>
            <textarea
              className={inputCls}
              rows={2}
              value={form.excerpt}
              onChange={(e) => set('excerpt', e.target.value)}
              placeholder="Short summary (1–2 sentences)"
              required
            />
          </div>

          {/* Body */}
          <div>
            <label className={labelCls}>Body * (supports **bold**)</label>
            <textarea
              className={inputCls}
              rows={8}
              value={form.body}
              onChange={(e) => set('body', e.target.value)}
              placeholder="Full article content…"
              required
            />
          </div>

          {/* Tags */}
          <div>
            <label className={labelCls}>Tags (comma-separated)</label>
            <input
              className={inputCls}
              value={form.tags}
              onChange={(e) => set('tags', e.target.value)}
              placeholder="Steam, PC Gaming, Deals"
            />
          </div>

          {/* Toggles */}
          <div className="flex gap-6">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={form.published}
                onChange={(e) => set('published', e.target.checked)}
                className="w-4 h-4 accent-purple-500"
              />
              <span className="text-sm text-gray-300">Published</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={form.featured}
                onChange={(e) => set('featured', e.target.checked)}
                className="w-4 h-4 accent-amber-400"
              />
              <span className="text-sm text-gray-300">Featured (hero slot)</span>
            </label>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-700 rounded-lg transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex items-center gap-2 px-5 py-2 bg-purple-600 hover:bg-purple-500 disabled:opacity-60 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              {initial ? 'Save Changes' : 'Create Article'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ── Delete Confirm Modal ──────────────────────────────────────────────────────
function DeleteConfirmModal({ article, onConfirm, onClose, deleting }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-sm p-6 shadow-2xl">
        <h3 className="text-white font-bold text-lg mb-2">Delete Article?</h3>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          This will permanently delete <span className="text-white font-medium">"{article.data?.title}"</span>. This action cannot be undone.
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-gray-400 hover:text-white border border-gray-700 rounded-lg transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={deleting}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-500 disabled:opacity-60 text-white text-sm font-semibold rounded-lg transition-colors"
          >
            {deleting ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

// ── Main Admin Page ───────────────────────────────────────────────────────────
export default function ArticleAdminPage() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [filterCat, setFilterCat] = useState('All');

  const [formTarget, setFormTarget] = useState(null); // null = closed, 'new' = new, row = edit
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3000);
  };

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchAllArticlesAdmin();
      setRows(data);
    } catch (err) {
      showToast('Failed to load articles: ' + err.message, 'error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  const handleSave = async (fields) => {
    setSaving(true);
    try {
      if (formTarget === 'new') {
        const created = await createArticle(fields);
        setRows((prev) => [created, ...prev]);
        showToast('Article created successfully');
      } else {
        const updated = await updateArticle(formTarget.id, formTarget.data, fields);
        setRows((prev) => prev.map((r) => (r.id === updated.id ? updated : r)));
        showToast('Article updated successfully');
      }
      setFormTarget(null);
    } catch (err) {
      showToast('Save failed: ' + err.message, 'error');
    } finally {
      setSaving(false);
    }
  };

  const handleTogglePublish = async (row) => {
    try {
      const updated = await updateArticle(row.id, row.data, {
        published: !row.data?.published,
      });
      setRows((prev) => prev.map((r) => (r.id === updated.id ? updated : r)));
    } catch (err) {
      showToast('Update failed: ' + err.message, 'error');
    }
  };

  const handleToggleFeatured = async (row) => {
    try {
      const updated = await updateArticle(row.id, row.data, {
        featured: !row.data?.featured,
      });
      setRows((prev) => prev.map((r) => (r.id === updated.id ? updated : r)));
    } catch (err) {
      showToast('Update failed: ' + err.message, 'error');
    }
  };

  const handleDelete = async () => {
    setDeleting(true);
    try {
      await deleteArticle(deleteTarget.id);
      setRows((prev) => prev.filter((r) => r.id !== deleteTarget.id));
      showToast('Article deleted');
      setDeleteTarget(null);
    } catch (err) {
      showToast('Delete failed: ' + err.message, 'error');
    } finally {
      setDeleting(false);
    }
  };

  const filtered = rows.filter((r) => {
    const d = r.data ?? {};
    const matchCat = filterCat === 'All' || d.category === filterCat;
    const matchSearch =
      !search ||
      d.title?.toLowerCase().includes(search.toLowerCase()) ||
      d.author?.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Top bar */}
      <div className="bg-gray-900 border-b border-gray-800 px-4 md:px-8 py-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors no-underline"
          >
            <ChevronLeft className="w-4 h-4" /> Back to site
          </a>
          <span className="text-gray-700">|</span>
          <h1 className="text-white font-bold text-lg">Article Manager</h1>
          <span className="text-xs text-gray-500 bg-gray-800 px-2 py-0.5 rounded-full">
            {rows.length} total
          </span>
        </div>
        <button
          onClick={() => setFormTarget('new')}
          className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
        >
          <Plus className="w-4 h-4" /> New Article
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              className="w-full bg-gray-900 border border-gray-700 rounded-lg pl-9 pr-3 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
              placeholder="Search by title or author…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-gray-500 shrink-0" />
            <select
              className="bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-100 focus:outline-none focus:border-purple-500 transition-colors"
              value={filterCat}
              onChange={(e) => setFilterCat(e.target.value)}
            >
              <option value="All">All Categories</option>
              {CATEGORY_OPTIONS.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Table */}
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-500">
            {rows.length === 0 ? 'No articles yet. Create your first one!' : 'No articles match your filters.'}
          </div>
        ) : (
          <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
            {/* Table header */}
            <div className="hidden md:grid grid-cols-[1fr_120px_120px_80px_80px_120px] gap-4 px-5 py-3 border-b border-gray-800 text-xs font-semibold text-gray-500 uppercase tracking-wider">
              <span>Article</span>
              <span>Category</span>
              <span>Author</span>
              <span>Status</span>
              <span>Featured</span>
              <span className="text-right">Actions</span>
            </div>

            {/* Rows */}
            <div className="divide-y divide-gray-800">
              {filtered.map((row) => {
                const d = row.data ?? {};
                const isPublished = d.published !== false;
                const isFeatured = !!d.featured;
                return (
                  <div
                    key={row.id}
                    className="grid grid-cols-1 md:grid-cols-[1fr_120px_120px_80px_80px_120px] gap-3 md:gap-4 px-5 py-4 hover:bg-gray-800/50 transition-colors items-center"
                  >
                    {/* Title + date */}
                    <div className="min-w-0">
                      <p className="text-white text-sm font-medium leading-snug truncate">{d.title}</p>
                      <p className="text-gray-500 text-xs mt-0.5">
                        {d.date
                          ? formatDistanceToNow(new Date(d.date), { addSuffix: true })
                          : '—'}
                        {d.read_time && ` · ${d.read_time}`}
                      </p>
                    </div>

                    {/* Category */}
                    <div>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-md border ${CATEGORY_COLORS[d.category] ?? 'bg-gray-700 text-gray-300 border-gray-600'}`}>
                        {d.category}
                      </span>
                    </div>

                    {/* Author */}
                    <div className="text-gray-400 text-sm truncate">{d.author}</div>

                    {/* Published toggle */}
                    <div>
                      <button
                        onClick={() => handleTogglePublish(row)}
                        title={isPublished ? 'Published — click to unpublish' : 'Unpublished — click to publish'}
                        className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md border transition-colors ${
                          isPublished
                            ? 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/30'
                            : 'bg-gray-700 text-gray-400 border-gray-600 hover:bg-gray-600'
                        }`}
                      >
                        {isPublished ? <Eye className="w-3 h-3" /> : <EyeOff className="w-3 h-3" />}
                        {isPublished ? 'Live' : 'Draft'}
                      </button>
                    </div>

                    {/* Featured toggle */}
                    <div>
                      <button
                        onClick={() => handleToggleFeatured(row)}
                        title={isFeatured ? 'Featured — click to unfeature' : 'Not featured — click to feature'}
                        className={`flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-md border transition-colors ${
                          isFeatured
                            ? 'bg-amber-500/20 text-amber-400 border-amber-500/30 hover:bg-amber-500/30'
                            : 'bg-gray-700 text-gray-400 border-gray-600 hover:bg-gray-600'
                        }`}
                      >
                        {isFeatured ? <Star className="w-3 h-3" /> : <StarOff className="w-3 h-3" />}
                        {isFeatured ? 'Hero' : 'Normal'}
                      </button>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => setFormTarget(row)}
                        className="flex items-center gap-1 text-xs text-gray-400 hover:text-white bg-gray-800 hover:bg-gray-700 border border-gray-700 px-2.5 py-1.5 rounded-lg transition-colors"
                      >
                        <Pencil className="w-3 h-3" /> Edit
                      </button>
                      <button
                        onClick={() => setDeleteTarget(row)}
                        className="flex items-center gap-1 text-xs text-red-400 hover:text-white bg-red-900/30 hover:bg-red-700 border border-red-800/50 px-2.5 py-1.5 rounded-lg transition-colors"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Form modal */}
      {formTarget !== null && (
        <ArticleFormModal
          initial={formTarget === 'new' ? null : formTarget}
          onSave={handleSave}
          onClose={() => setFormTarget(null)}
          saving={saving}
        />
      )}

      {/* Delete confirm */}
      {deleteTarget && (
        <DeleteConfirmModal
          article={deleteTarget}
          onConfirm={handleDelete}
          onClose={() => setDeleteTarget(null)}
          deleting={deleting}
        />
      )}

      {/* Toast */}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-50 px-4 py-3 rounded-xl text-sm font-medium shadow-xl border transition-all ${
            toast.type === 'error'
              ? 'bg-red-900 border-red-700 text-red-100'
              : 'bg-emerald-900 border-emerald-700 text-emerald-100'
          }`}
        >
          {toast.msg}
        </div>
      )}
    </div>
  );
}
