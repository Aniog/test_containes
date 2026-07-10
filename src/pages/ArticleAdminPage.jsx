import { useState, useEffect, useCallback } from 'react';
import {
  Plus, Pencil, Trash2, Eye, EyeOff, Star, StarOff,
  Loader2, X, Save, ChevronLeft, Search, Filter, Database, Gamepad2,
  Table2, LayoutList, Hash, Type, ToggleLeft, List, Calendar, Clock,
  CheckCircle2, AlertCircle,
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

// ── Schema definition (mirrors Article.schema.json) ──────────────────────────
const SCHEMA_FIELDS = [
  {
    name: 'title',
    type: 'string',
    format: null,
    constraints: 'minLength: 1 · maxLength: 200',
    description: 'Article headline',
    required: true,
    default: null,
  },
  {
    name: 'category',
    type: 'string',
    format: 'enum',
    constraints: 'News · Reviews · Guides · Deals · Features',
    description: 'Article category',
    required: true,
    default: null,
  },
  {
    name: 'excerpt',
    type: 'string',
    format: null,
    constraints: 'minLength: 1 · maxLength: 500',
    description: 'Short summary shown in cards (1–2 sentences)',
    required: true,
    default: null,
  },
  {
    name: 'body',
    type: 'string',
    format: null,
    constraints: 'minLength: 1',
    description: 'Full article body text',
    required: true,
    default: null,
  },
  {
    name: 'author',
    type: 'string',
    format: null,
    constraints: 'minLength: 1 · maxLength: 100',
    description: 'Author display name',
    required: true,
    default: null,
  },
  {
    name: 'date',
    type: 'string',
    format: 'date',
    constraints: 'ISO 8601 date',
    description: 'Publication date',
    required: true,
    default: null,
  },
  {
    name: 'read_time',
    type: 'string',
    format: null,
    constraints: 'maxLength: 20',
    description: "Estimated read time, e.g. '5 min'",
    required: false,
    default: null,
  },
  {
    name: 'tags',
    type: 'array',
    format: 'string[]',
    constraints: 'items: string',
    description: 'List of topic tags',
    required: false,
    default: null,
  },
  {
    name: 'featured',
    type: 'boolean',
    format: null,
    constraints: null,
    description: 'Whether this article appears in the hero/featured slot',
    required: false,
    default: 'false',
  },
  {
    name: 'published',
    type: 'boolean',
    format: null,
    constraints: null,
    description: 'Whether the article is visible on the public site',
    required: false,
    default: 'true',
  },
];

const TYPE_STYLES = {
  string:  { cls: 'bg-blue-500/15 text-blue-400 border-blue-500/25',   icon: Type },
  boolean: { cls: 'bg-purple-500/15 text-purple-400 border-purple-500/25', icon: ToggleLeft },
  array:   { cls: 'bg-amber-500/15 text-amber-400 border-amber-500/25',  icon: List },
};

const FORMAT_STYLES = {
  date:    { cls: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/25',    icon: Calendar },
  enum:    { cls: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/25', icon: Hash },
  'string[]': { cls: 'bg-amber-500/15 text-amber-400 border-amber-500/25', icon: List },
};

// ── Schema Table Component ────────────────────────────────────────────────────
function SchemaTable() {
  return (
    <div>
      {/* Table info header */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-lg px-4 py-2.5">
          <Database className="w-4 h-4 text-purple-400" />
          <span className="text-white text-sm font-semibold">Articles</span>
        </div>
        <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-lg px-4 py-2.5">
          <Hash className="w-3.5 h-3.5 text-gray-500" />
          <span className="text-gray-400 text-sm">{SCHEMA_FIELDS.length} fields</span>
        </div>
        <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-lg px-4 py-2.5">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
          <span className="text-gray-400 text-sm">
            {SCHEMA_FIELDS.filter((f) => f.required).length} required
          </span>
        </div>
        <div className="flex items-center gap-2 bg-gray-900 border border-gray-800 rounded-lg px-4 py-2.5">
          <AlertCircle className="w-3.5 h-3.5 text-gray-500" />
          <span className="text-gray-400 text-sm">
            {SCHEMA_FIELDS.filter((f) => !f.required).length} optional
          </span>
        </div>
      </div>

      {/* Schema table */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        {/* Header row */}
        <div className="hidden md:grid grid-cols-[180px_110px_110px_1fr_90px_90px] gap-4 px-5 py-3 border-b border-gray-800 bg-gray-900/80">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Field</span>
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Type</span>
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Format</span>
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Constraints / Values</span>
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Required</span>
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Default</span>
        </div>

        {/* Field rows */}
        <div className="divide-y divide-gray-800/70">
          {SCHEMA_FIELDS.map((field) => {
            const typeStyle = TYPE_STYLES[field.type] ?? { cls: 'bg-gray-700 text-gray-300 border-gray-600', icon: Type };
            const TypeIcon = typeStyle.icon;
            const fmtStyle = field.format ? (FORMAT_STYLES[field.format] ?? { cls: 'bg-gray-700 text-gray-300 border-gray-600', icon: Hash }) : null;
            const FmtIcon = fmtStyle?.icon;

            return (
              <div
                key={field.name}
                className="grid grid-cols-1 md:grid-cols-[180px_110px_110px_1fr_90px_90px] gap-2 md:gap-4 px-5 py-4 hover:bg-gray-800/40 transition-colors items-start md:items-center"
              >
                {/* Field name */}
                <div className="flex items-center gap-2 min-w-0">
                  <code className="text-cyan-300 text-sm font-mono font-semibold">{field.name}</code>
                </div>

                {/* Type */}
                <div>
                  <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-md border ${typeStyle.cls}`}>
                    <TypeIcon className="w-3 h-3" />
                    {field.type}
                  </span>
                </div>

                {/* Format */}
                <div>
                  {fmtStyle ? (
                    <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2 py-0.5 rounded-md border ${fmtStyle.cls}`}>
                      <FmtIcon className="w-3 h-3" />
                      {field.format}
                    </span>
                  ) : (
                    <span className="text-gray-700 text-xs">—</span>
                  )}
                </div>

                {/* Constraints */}
                <div className="min-w-0">
                  {field.constraints ? (
                    <span className="text-gray-400 text-xs leading-relaxed break-words">{field.constraints}</span>
                  ) : (
                    <span className="text-gray-700 text-xs">—</span>
                  )}
                  {field.description && (
                    <p className="text-gray-600 text-xs mt-0.5 italic">{field.description}</p>
                  )}
                </div>

                {/* Required */}
                <div>
                  {field.required ? (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md">
                      <CheckCircle2 className="w-3 h-3" /> Yes
                    </span>
                  ) : (
                    <span className="text-xs text-gray-600">Optional</span>
                  )}
                </div>

                {/* Default */}
                <div>
                  {field.default !== null ? (
                    <code className="text-amber-400 text-xs font-mono bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md">
                      {field.default}
                    </code>
                  ) : (
                    <span className="text-gray-700 text-xs">—</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* System fields note */}
      <div className="mt-4 flex items-start gap-2 text-xs text-gray-600 px-1">
        <Hash className="w-3.5 h-3.5 mt-0.5 shrink-0" />
        <span>System fields <code className="text-gray-500 font-mono">id</code>, <code className="text-gray-500 font-mono">form_id</code>, <code className="text-gray-500 font-mono">created_at</code>, and <code className="text-gray-500 font-mono">updated_at</code> are managed automatically by the database.</span>
      </div>
    </div>
  );
}

const EMPTY_FORM = {
  title: '',
  category: 'News',
  excerpt: '',
  body: '',
  author: '',
  date: new Date().toISOString().slice(0, 10),
  read_time: '',
  featured: false,
  published: true,
  tags: '',
};

// ── Article Form Modal ────────────────────────────────────────────────────────
// Supports full edit AND "all-empty" mode (no required HTML validation).
function ArticleFormModal({ initial, onSave, onClose, saving }) {
  const [form, setForm] = useState(() =>
    initial
      ? {
          ...EMPTY_FORM,
          ...initial.data,
          tags: Array.isArray(initial.data?.tags) ? initial.data.tags.join(', ') : (initial.data?.tags ?? ''),
        }
      : EMPTY_FORM
  );

  const set = (key, val) => setForm((f) => ({ ...f, [key]: val }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...form,
      tags: typeof form.tags === 'string'
        ? form.tags.split(',').map((t) => t.trim()).filter(Boolean)
        : (form.tags ?? []),
    };
    onSave(payload);
  };

  // "Clear all" sets every text field to '' and booleans to false
  const handleClearAll = () => {
    setForm({
      title: '', category: '', excerpt: '', body: '',
      author: '', date: '', read_time: '', featured: false,
      published: false, tags: '',
    });
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
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handleClearAll}
              className="text-xs text-red-400 hover:text-red-300 border border-red-800/50 hover:border-red-600 px-3 py-1.5 rounded-lg transition-colors"
            >
              Clear All Fields
            </button>
            <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Note about empty fields */}
        <div className="px-6 pt-4 pb-0">
          <p className="text-xs text-gray-600 italic">
            All fields are optional for testing — you may leave any field empty.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {/* Title */}
          <div>
            <label className={labelCls}>Title</label>
            <input
              className={inputCls}
              value={form.title}
              onChange={(e) => set('title', e.target.value)}
              placeholder="Article headline (leave empty to test)"
            />
          </div>

          {/* Category + Date row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Category</label>
              <select
                className={inputCls}
                value={form.category}
                onChange={(e) => set('category', e.target.value)}
              >
                <option value="">— empty —</option>
                {CATEGORY_OPTIONS.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className={labelCls}>Date</label>
              <input
                type="date"
                className={inputCls}
                value={form.date}
                onChange={(e) => set('date', e.target.value)}
              />
            </div>
          </div>

          {/* Author + Read time row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelCls}>Author</label>
              <input
                className={inputCls}
                value={form.author}
                onChange={(e) => set('author', e.target.value)}
                placeholder="Author name"
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
            <label className={labelCls}>Excerpt (shown in cards)</label>
            <textarea
              className={inputCls}
              rows={2}
              value={form.excerpt}
              onChange={(e) => set('excerpt', e.target.value)}
              placeholder="Short summary (1–2 sentences)"
            />
          </div>

          {/* Body */}
          <div>
            <label className={labelCls}>Body (supports **bold**)</label>
            <textarea
              className={inputCls}
              rows={8}
              value={form.body}
              onChange={(e) => set('body', e.target.value)}
              placeholder="Full article content…"
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
                checked={!!form.published}
                onChange={(e) => set('published', e.target.checked)}
                className="w-4 h-4 accent-purple-500"
              />
              <span className="text-sm text-gray-300">Published</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={!!form.featured}
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

// ── Batch Edit Modal ──────────────────────────────────────────────────────────
// Edits one chosen field across all selected rows at once.
function BatchEditModal({ count, onSave, onClose, saving }) {
  const [field, setField] = useState('category');
  const [value, setValue] = useState('');

  const BATCH_FIELDS = [
    { key: 'category',  label: 'Category',  type: 'select' },
    { key: 'author',    label: 'Author',     type: 'text'   },
    { key: 'read_time', label: 'Read Time',  type: 'text'   },
    { key: 'published', label: 'Published',  type: 'bool'   },
    { key: 'featured',  label: 'Featured',   type: 'bool'   },
    { key: 'date',      label: 'Date',       type: 'date'   },
  ];

  const currentField = BATCH_FIELDS.find((f) => f.key === field);

  const handleFieldChange = (k) => {
    setField(k);
    setValue('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsed =
      currentField.type === 'bool' ? value === 'true' : value;
    onSave(field, parsed);
  };

  const inputCls =
    'w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-md shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700">
          <div>
            <h2 className="text-white font-bold text-base">Batch Edit</h2>
            <p className="text-gray-500 text-xs mt-0.5">
              Apply one field change to {count} selected {count === 1 ? 'entry' : 'entries'}
            </p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">Field to update</label>
            <select
              className={inputCls}
              value={field}
              onChange={(e) => handleFieldChange(e.target.value)}
            >
              {BATCH_FIELDS.map((f) => (
                <option key={f.key} value={f.key}>{f.label}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">New value</label>
            {currentField.type === 'select' && (
              <select className={inputCls} value={value} onChange={(e) => setValue(e.target.value)}>
                <option value="">— empty —</option>
                {CATEGORY_OPTIONS.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            )}
            {currentField.type === 'bool' && (
              <select className={inputCls} value={value} onChange={(e) => setValue(e.target.value)}>
                <option value="">— keep as-is —</option>
                <option value="true">true</option>
                <option value="false">false</option>
              </select>
            )}
            {currentField.type === 'text' && (
              <input
                className={inputCls}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder={`New ${currentField.label.toLowerCase()} (leave empty to clear)`}
              />
            )}
            {currentField.type === 'date' && (
              <input
                type="date"
                className={inputCls}
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
            )}
          </div>

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
              disabled={saving || value === ''}
              className="flex items-center gap-2 px-5 py-2 bg-purple-600 hover:bg-purple-500 disabled:opacity-60 text-white text-sm font-semibold rounded-lg transition-colors"
            >
              {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
              Apply to {count} {count === 1 ? 'entry' : 'entries'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ── Batch Delete Confirm Modal ────────────────────────────────────────────────
function BatchDeleteModal({ count, onConfirm, onClose, deleting }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm px-4">
      <div className="bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-sm p-6 shadow-2xl">
        <h3 className="text-white font-bold text-lg mb-2">Delete {count} {count === 1 ? 'entry' : 'entries'}?</h3>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          This will permanently delete <span className="text-white font-medium">{count} selected {count === 1 ? 'article' : 'articles'}</span>. This action cannot be undone.
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
            Delete {count} {count === 1 ? 'entry' : 'entries'}
          </button>
        </div>
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
          This will permanently delete <span className="text-white font-medium">"{article.data?.title || '(untitled)'}"</span>. This action cannot be undone.
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
  const [activeTab, setActiveTab] = useState('records');

  // selection
  const [selected, setSelected] = useState(new Set());

  const [formTarget, setFormTarget] = useState(null);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [batchEditOpen, setBatchEditOpen] = useState(false);
  const [batchDeleteOpen, setBatchDeleteOpen] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (msg, type = 'success') => {
    setToast({ msg, type });
    setTimeout(() => setToast(null), 3500);
  };

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const data = await fetchAllArticlesAdmin();
      setRows(data);
      setSelected(new Set());
    } catch (err) {
      showToast('Failed to load articles: ' + err.message, 'error');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { load(); }, [load]);

  // ── single save ────────────────────────────────────────────────────────────
  const handleSave = async (fields) => {
    setSaving(true);
    try {
      if (formTarget === 'new') {
        const created = await createArticle(fields);
        setRows((prev) => [created, ...prev]);
        showToast('Article created');
      } else {
        const updated = await updateArticle(formTarget.id, formTarget.data, fields);
        setRows((prev) => prev.map((r) => (r.id === updated.id ? updated : r)));
        showToast('Article updated');
      }
      setFormTarget(null);
    } catch (err) {
      showToast('Save failed: ' + err.message, 'error');
    } finally {
      setSaving(false);
    }
  };

  // ── single toggle helpers ──────────────────────────────────────────────────
  const handleTogglePublish = async (row) => {
    try {
      const updated = await updateArticle(row.id, row.data, { published: !row.data?.published });
      setRows((prev) => prev.map((r) => (r.id === updated.id ? updated : r)));
    } catch (err) { showToast('Update failed: ' + err.message, 'error'); }
  };

  const handleToggleFeatured = async (row) => {
    try {
      const updated = await updateArticle(row.id, row.data, { featured: !row.data?.featured });
      setRows((prev) => prev.map((r) => (r.id === updated.id ? updated : r)));
    } catch (err) { showToast('Update failed: ' + err.message, 'error'); }
  };

  // ── single delete ──────────────────────────────────────────────────────────
  const handleDelete = async () => {
    setDeleting(true);
    try {
      await deleteArticle(deleteTarget.id);
      setRows((prev) => prev.filter((r) => r.id !== deleteTarget.id));
      setSelected((prev) => { const s = new Set(prev); s.delete(deleteTarget.id); return s; });
      showToast('Article deleted');
      setDeleteTarget(null);
    } catch (err) {
      showToast('Delete failed: ' + err.message, 'error');
    } finally {
      setDeleting(false);
    }
  };

  // ── batch edit ─────────────────────────────────────────────────────────────
  const handleBatchEdit = async (field, value) => {
    setSaving(true);
    const targets = rows.filter((r) => selected.has(r.id));
    try {
      const updated = await Promise.all(
        targets.map((r) => updateArticle(r.id, r.data, { [field]: value }))
      );
      const map = Object.fromEntries(updated.map((u) => [u.id, u]));
      setRows((prev) => prev.map((r) => map[r.id] ?? r));
      showToast(`Updated "${field}" on ${updated.length} ${updated.length === 1 ? 'entry' : 'entries'}`);
      setBatchEditOpen(false);
      setSelected(new Set());
    } catch (err) {
      showToast('Batch edit failed: ' + err.message, 'error');
    } finally {
      setSaving(false);
    }
  };

  // ── batch delete ───────────────────────────────────────────────────────────
  const handleBatchDelete = async () => {
    setDeleting(true);
    const ids = [...selected];
    try {
      await Promise.all(ids.map((id) => deleteArticle(id)));
      setRows((prev) => prev.filter((r) => !ids.includes(r.id)));
      showToast(`Deleted ${ids.length} ${ids.length === 1 ? 'entry' : 'entries'}`);
      setBatchDeleteOpen(false);
      setSelected(new Set());
    } catch (err) {
      showToast('Batch delete failed: ' + err.message, 'error');
    } finally {
      setDeleting(false);
    }
  };

  // ── selection helpers ──────────────────────────────────────────────────────
  const toggleRow = (id) =>
    setSelected((prev) => {
      const s = new Set(prev);
      s.has(id) ? s.delete(id) : s.add(id);
      return s;
    });

  const filtered = rows.filter((r) => {
    const d = r.data ?? {};
    const matchCat = filterCat === 'All' || d.category === filterCat;
    const matchSearch =
      !search ||
      (d.title ?? '').toLowerCase().includes(search.toLowerCase()) ||
      (d.author ?? '').toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const allFilteredSelected =
    filtered.length > 0 && filtered.every((r) => selected.has(r.id));

  const toggleSelectAll = () => {
    if (allFilteredSelected) {
      setSelected((prev) => {
        const s = new Set(prev);
        filtered.forEach((r) => s.delete(r.id));
        return s;
      });
    } else {
      setSelected((prev) => {
        const s = new Set(prev);
        filtered.forEach((r) => s.add(r.id));
        return s;
      });
    }
  };

  const selCount = selected.size;

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Top bar */}
      <div className="bg-gray-950 border-b border-purple-900/40 px-4 md:px-8 py-0 sticky top-0 z-40 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between h-16 gap-4">
          {/* Left: logo + breadcrumb */}
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-2 no-underline shrink-0">
              <div className="w-7 h-7 bg-purple-600 rounded-md flex items-center justify-center">
                <Gamepad2 className="w-4 h-4 text-white" />
              </div>
              <span className="text-white font-bold text-sm tracking-tight hidden sm:block">
                0701 <span className="text-purple-400">Game</span>
              </span>
            </a>
            <span className="text-gray-700 hidden sm:block">/</span>
            <div className="flex items-center gap-2">
              <Database className="w-4 h-4 text-purple-400" />
              <h1 className="text-white font-semibold text-sm">Data</h1>
              <span className="text-gray-600 hidden sm:block">/</span>
              <span className="text-gray-400 text-sm hidden sm:block">Articles</span>
            </div>
            <span className="text-xs text-purple-400 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full font-medium">
              {rows.length} records
            </span>
          </div>

          {/* Right: actions */}
          <div className="flex items-center gap-3">
            <a
              href="/"
              className="hidden sm:flex items-center gap-1.5 text-gray-400 hover:text-white text-sm transition-colors no-underline"
            >
              <ChevronLeft className="w-4 h-4" /> Back to site
            </a>
            <button
              onClick={() => setFormTarget('new')}
              className="flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              <Plus className="w-4 h-4" />
              <span className="hidden sm:inline">New Article</span>
              <span className="sm:hidden">New</span>
            </button>
          </div>
        </div>

        {/* Tab bar */}
        <div className="max-w-7xl mx-auto flex items-center gap-1 border-t border-gray-800/60">
          <button
            onClick={() => setActiveTab('records')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'records'
                ? 'border-purple-500 text-white'
                : 'border-transparent text-gray-500 hover:text-gray-300'
            }`}
          >
            <LayoutList className="w-4 h-4" />
            Records
            <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
              activeTab === 'records' ? 'bg-purple-500/20 text-purple-300' : 'bg-gray-800 text-gray-500'
            }`}>
              {rows.length}
            </span>
          </button>
          <button
            onClick={() => setActiveTab('schema')}
            className={`flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'schema'
                ? 'border-purple-500 text-white'
                : 'border-transparent text-gray-500 hover:text-gray-300'
            }`}
          >
            <Table2 className="w-4 h-4" />
            Schema
            <span className={`text-xs px-1.5 py-0.5 rounded-full font-semibold ${
              activeTab === 'schema' ? 'bg-purple-500/20 text-purple-300' : 'bg-gray-800 text-gray-500'
            }`}>
              {SCHEMA_FIELDS.length}
            </span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {activeTab === 'schema' ? (
          <SchemaTable />
        ) : (
          <>
            {/* Filters + selection action bar */}
            <div className="flex flex-col sm:flex-row gap-3 mb-4">
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

            {/* Batch action bar — visible when rows are selected */}
            {selCount > 0 && (
              <div className="flex items-center gap-3 mb-4 px-4 py-2.5 bg-purple-500/10 border border-purple-500/25 rounded-xl">
                <span className="text-purple-300 text-sm font-semibold">
                  {selCount} {selCount === 1 ? 'entry' : 'entries'} selected
                </span>
                <div className="flex-1" />
                <button
                  onClick={() => setBatchEditOpen(true)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-purple-300 hover:text-white bg-purple-600/30 hover:bg-purple-600 border border-purple-500/40 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <Pencil className="w-3.5 h-3.5" /> Batch Edit
                </button>
                <button
                  onClick={() => setBatchDeleteOpen(true)}
                  className="flex items-center gap-1.5 text-xs font-semibold text-red-400 hover:text-white bg-red-900/30 hover:bg-red-700 border border-red-800/50 px-3 py-1.5 rounded-lg transition-colors"
                >
                  <Trash2 className="w-3.5 h-3.5" /> Delete {selCount}
                </button>
                <button
                  onClick={() => setSelected(new Set())}
                  className="text-gray-500 hover:text-gray-300 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            )}

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
                <div className="hidden md:grid grid-cols-[36px_1fr_120px_120px_80px_80px_120px] gap-4 px-5 py-3 border-b border-gray-800 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={allFilteredSelected}
                      onChange={toggleSelectAll}
                      className="w-4 h-4 accent-purple-500 cursor-pointer"
                      title="Select all visible"
                    />
                  </div>
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
                    const isSelected = selected.has(row.id);
                    return (
                      <div
                        key={row.id}
                        className={`grid grid-cols-1 md:grid-cols-[36px_1fr_120px_120px_80px_80px_120px] gap-3 md:gap-4 px-5 py-4 transition-colors items-center ${
                          isSelected ? 'bg-purple-500/8 hover:bg-purple-500/12' : 'hover:bg-gray-800/50'
                        }`}
                      >
                        {/* Checkbox */}
                        <div className="hidden md:flex items-center">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleRow(row.id)}
                            className="w-4 h-4 accent-purple-500 cursor-pointer"
                          />
                        </div>

                        {/* Title + date */}
                        <div className="min-w-0 flex items-start gap-2">
                          {/* Mobile checkbox */}
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() => toggleRow(row.id)}
                            className="md:hidden w-4 h-4 accent-purple-500 cursor-pointer mt-0.5 shrink-0"
                          />
                          <div className="min-w-0">
                            <p className="text-white text-sm font-medium leading-snug truncate">
                              {d.title || <span className="text-gray-600 italic">untitled</span>}
                            </p>
                            <p className="text-gray-500 text-xs mt-0.5">
                              {d.date
                                ? formatDistanceToNow(new Date(d.date), { addSuffix: true })
                                : <span className="text-gray-700">no date</span>}
                              {d.read_time && ` · ${d.read_time}`}
                            </p>
                          </div>
                        </div>

                        {/* Category */}
                        <div>
                          {d.category ? (
                            <span className={`text-xs font-semibold px-2 py-0.5 rounded-md border ${CATEGORY_COLORS[d.category] ?? 'bg-gray-700 text-gray-300 border-gray-600'}`}>
                              {d.category}
                            </span>
                          ) : (
                            <span className="text-gray-700 text-xs italic">empty</span>
                          )}
                        </div>

                        {/* Author */}
                        <div className="text-gray-400 text-sm truncate">
                          {d.author || <span className="text-gray-700 italic text-xs">empty</span>}
                        </div>

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
          </>
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

      {/* Single delete confirm */}
      {deleteTarget && (
        <DeleteConfirmModal
          article={deleteTarget}
          onConfirm={handleDelete}
          onClose={() => setDeleteTarget(null)}
          deleting={deleting}
        />
      )}

      {/* Batch edit modal */}
      {batchEditOpen && (
        <BatchEditModal
          count={selCount}
          onSave={handleBatchEdit}
          onClose={() => setBatchEditOpen(false)}
          saving={saving}
        />
      )}

      {/* Batch delete confirm */}
      {batchDeleteOpen && (
        <BatchDeleteModal
          count={selCount}
          onConfirm={handleBatchDelete}
          onClose={() => setBatchDeleteOpen(false)}
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
