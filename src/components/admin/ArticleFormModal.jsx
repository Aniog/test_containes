import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import DiffApproval from './DiffApproval'
import { createArticle, updateArticle } from '@/api/articles'

// All editable fields and their human labels
const FIELD_LABELS = {
  title: 'Title',
  slug: 'Slug',
  category: 'Category',
  platform: 'Platform',
  author: 'Author',
  summary: 'Summary',
  content: 'Content',
  cover_image_url: 'Cover Image URL',
  tags: 'Tags',
  published: 'Published',
  published_at: 'Published At',
}

const CATEGORIES = ['news', 'blog', 'review', 'guide', 'announcement']
const PLATFORMS = ['all', 'steam', 'epic', 'nintendo', 'playstation', 'xbox']

// Normalize raw entity data into a flat form state
function toFormState(data = {}) {
  return {
    title: data.title ?? '',
    slug: data.slug ?? '',
    category: data.category ?? '',
    platform: data.platform ?? '',
    author: data.author ?? '',
    summary: data.summary ?? '',
    content: data.content ?? '',
    cover_image_url: data.cover_image_url ?? '',
    tags: Array.isArray(data.tags) ? data.tags.join(', ') : (data.tags ?? ''),
    published: data.published ?? false,
    published_at: data.published_at ? data.published_at.slice(0, 16) : '',
  }
}

// Convert form state back to API payload
function toPayload(form) {
  const payload = {}
  if (form.title) payload.title = form.title
  if (form.slug) payload.slug = form.slug
  if (form.category) payload.category = form.category
  if (form.platform) payload.platform = form.platform
  if (form.author) payload.author = form.author
  if (form.summary) payload.summary = form.summary
  if (form.content) payload.content = form.content
  if (form.cover_image_url) payload.cover_image_url = form.cover_image_url
  payload.tags = form.tags ? form.tags.split(',').map(t => t.trim()).filter(Boolean) : []
  payload.published = form.published
  if (form.published_at) payload.published_at = new Date(form.published_at).toISOString()
  return payload
}

// Validate required fields
function validate(form) {
  const errors = {}
  if (!form.title.trim()) errors.title = 'Title is required'
  if (!form.category) errors.category = 'Category is required'
  if (!form.content.trim()) errors.content = 'Content is required'
  return errors
}

// STEP 1: The edit form
function ArticleForm({ form, errors, onChange, onSubmit, isNew }) {
  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-4">
      {/* Title */}
      <div>
        <label className="block text-xs font-medium text-gray-400 mb-1">
          Title <span className="text-red-400">*</span>
        </label>
        <Input
          name="title"
          value={form.title}
          onChange={onChange}
          placeholder="Article title"
          className={errors.title ? 'border-red-500' : ''}
        />
        {errors.title && <p className="text-red-400 text-xs mt-1">{errors.title}</p>}
      </div>

      {/* Slug */}
      <div>
        <label className="block text-xs font-medium text-gray-400 mb-1">Slug</label>
        <Input
          name="slug"
          value={form.slug}
          onChange={onChange}
          placeholder="url-friendly-slug"
        />
      </div>

      {/* Category + Platform row */}
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-xs font-medium text-gray-400 mb-1">
            Category <span className="text-red-400">*</span>
          </label>
          <select
            name="category"
            value={form.category}
            onChange={onChange}
            className={`w-full h-10 rounded-md border bg-gray-700 px-3 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 ${
              errors.category ? 'border-red-500' : 'border-gray-600'
            }`}
          >
            <option value="">Select…</option>
            {CATEGORIES.map(c => <option key={c} value={c} className="capitalize">{c}</option>)}
          </select>
          {errors.category && <p className="text-red-400 text-xs mt-1">{errors.category}</p>}
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-400 mb-1">Platform</label>
          <select
            name="platform"
            value={form.platform}
            onChange={onChange}
            className="w-full h-10 rounded-md border border-gray-600 bg-gray-700 px-3 text-sm text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Select…</option>
            {PLATFORMS.map(p => <option key={p} value={p} className="capitalize">{p}</option>)}
          </select>
        </div>
      </div>

      {/* Author */}
      <div>
        <label className="block text-xs font-medium text-gray-400 mb-1">Author</label>
        <Input
          name="author"
          value={form.author}
          onChange={onChange}
          placeholder="Author name"
        />
      </div>

      {/* Summary */}
      <div>
        <label className="block text-xs font-medium text-gray-400 mb-1">Summary</label>
        <textarea
          name="summary"
          value={form.summary}
          onChange={onChange}
          rows={2}
          placeholder="Short excerpt shown in listings…"
          className="w-full rounded-md border border-gray-600 bg-gray-700 px-3 py-2 text-sm text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
        />
      </div>

      {/* Content */}
      <div>
        <label className="block text-xs font-medium text-gray-400 mb-1">
          Content <span className="text-red-400">*</span>
        </label>
        <textarea
          name="content"
          value={form.content}
          onChange={onChange}
          rows={5}
          placeholder="Full article content…"
          className={`w-full rounded-md border bg-gray-700 px-3 py-2 text-sm text-gray-100 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none ${
            errors.content ? 'border-red-500' : 'border-gray-600'
          }`}
        />
        {errors.content && <p className="text-red-400 text-xs mt-1">{errors.content}</p>}
      </div>

      {/* Cover Image URL */}
      <div>
        <label className="block text-xs font-medium text-gray-400 mb-1">Cover Image URL</label>
        <Input
          name="cover_image_url"
          value={form.cover_image_url}
          onChange={onChange}
          placeholder="https://…"
        />
      </div>

      {/* Tags */}
      <div>
        <label className="block text-xs font-medium text-gray-400 mb-1">
          Tags <span className="text-gray-500 font-normal">(comma-separated)</span>
        </label>
        <Input
          name="tags"
          value={form.tags}
          onChange={onChange}
          placeholder="gaming, review, rpg"
        />
      </div>

      {/* Published + Published At row */}
      <div className="grid grid-cols-2 gap-3 items-end">
        <div className="flex items-center gap-2 h-10">
          <input
            type="checkbox"
            id="published"
            name="published"
            checked={form.published}
            onChange={onChange}
            className="w-4 h-4 rounded border-gray-600 bg-gray-700 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="published" className="text-sm text-gray-300 cursor-pointer">Published</label>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-400 mb-1">Published At</label>
          <Input
            type="datetime-local"
            name="published_at"
            value={form.published_at}
            onChange={onChange}
          />
        </div>
      </div>

      <div className="flex justify-end pt-2">
        <Button type="submit" className="gap-2">
          Review Changes →
        </Button>
      </div>
    </form>
  )
}

// MAIN MODAL
export default function ArticleFormModal({ article, onClose, onSaved }) {
  const isNew = !article
  const originalData = article?.data ?? {}

  const [step, setStep] = useState('form') // 'form' | 'approve'
  const [form, setForm] = useState(() => toFormState(originalData))
  const [formErrors, setFormErrors] = useState({})
  const [saving, setSaving] = useState(false)
  const [saveError, setSaveError] = useState(null)

  // Reset when article changes
  useEffect(() => {
    setForm(toFormState(article?.data ?? {}))
    setStep('form')
    setFormErrors({})
    setSaveError(null)
  }, [article])

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setForm(f => ({ ...f, [name]: type === 'checkbox' ? checked : value }))
    if (formErrors[name]) setFormErrors(fe => ({ ...fe, [name]: undefined }))
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    const errors = validate(form)
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }
    setStep('approve')
  }

  const handleConfirm = async () => {
    setSaving(true)
    setSaveError(null)
    try {
      const payload = toPayload(form)
      let saved
      if (isNew) {
        saved = createArticle(payload)
      } else {
        saved = updateArticle(article.id, payload)
      }
      await saved
      onSaved()
    } catch (err) {
      setSaveError(err.message || 'Save failed')
    } finally {
      setSaving(false)
    }
  }

  // Build original/updated objects for the diff (using display-friendly form values)
  const originalForm = isNew ? {} : toFormState(originalData)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      <div className="relative bg-gray-900 border border-gray-700 rounded-xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">

        {/* Modal header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-700 flex-shrink-0">
          <div className="flex items-center gap-3">
            <h2 className="text-white font-bold text-lg">
              {isNew ? 'New Article' : 'Edit Article'}
            </h2>
            {/* Step indicator */}
            <div className="flex items-center gap-1.5 text-xs">
              <span className={`px-2 py-0.5 rounded-full font-medium ${
                step === 'form' ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-400'
              }`}>
                1 Edit
              </span>
              <span className="text-gray-600">›</span>
              <span className={`px-2 py-0.5 rounded-full font-medium ${
                step === 'approve' ? 'bg-indigo-600 text-white' : 'bg-gray-700 text-gray-400'
              }`}>
                2 Approve
              </span>
            </div>
          </div>
          <button onClick={onClose} className="text-gray-500 hover:text-white transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal body */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {step === 'form' ? (
            <ArticleForm
              form={form}
              errors={formErrors}
              onChange={handleChange}
              onSubmit={handleFormSubmit}
              isNew={isNew}
            />
          ) : (
            <DiffApproval
              isNew={isNew}
              original={originalForm}
              updated={form}
              fieldLabels={FIELD_LABELS}
              onConfirm={handleConfirm}
              onBack={() => { setStep('form'); setSaveError(null) }}
              loading={saving}
              error={saveError}
            />
          )}
        </div>
      </div>
    </div>
  )
}
