import { useState, useEffect, useCallback } from 'react';
import { fetchTours, createTour, updateTour, deleteTour } from '../api/tours.js';
import { Plus, Pencil, Trash2, X, Check, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

const EMPTY_FORM = {
  title: '',
  description: '',
  duration_type: 'half-day',
  price_usd: '',
  max_group_size: '',
  difficulty: 'easy',
  highlights: '',
  included: '',
  is_active: true,
};

const DURATION_LABELS = { 'half-day': 'Half-Day', 'one-day': 'One-Day', 'two-day': 'Two-Day' };
const DURATION_COLORS = {
  'half-day': 'bg-jungle/10 text-jungle',
  'one-day': 'bg-ocean/10 text-ocean',
  'two-day': 'bg-coral/10 text-coral',
};

const toFormValues = (entity) => {
  const d = entity.data;
  return {
    title: d.title ?? '',
    description: d.description ?? '',
    duration_type: d.duration_type ?? 'half-day',
    price_usd: d.price_usd ?? '',
    max_group_size: d.max_group_size ?? '',
    difficulty: d.difficulty ?? 'easy',
    highlights: (d.highlights ?? []).join('\n'),
    included: (d.included ?? []).join('\n'),
    is_active: d.is_active !== false,
  };
};

const toPayload = (values) => ({
  title: values.title.trim(),
  description: values.description.trim(),
  duration_type: values.duration_type,
  price_usd: values.price_usd !== '' ? Number(values.price_usd) : undefined,
  max_group_size: values.max_group_size !== '' ? Number(values.max_group_size) : undefined,
  difficulty: values.difficulty,
  highlights: values.highlights.split('\n').map((s) => s.trim()).filter(Boolean),
  included: values.included.split('\n').map((s) => s.trim()).filter(Boolean),
  is_active: values.is_active,
});

const inputClass = 'w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-stone focus:outline-none focus:ring-2 focus:ring-ocean/30 focus:border-ocean bg-white';
const labelClass = 'block text-xs font-semibold text-stone/60 uppercase tracking-wider mb-1';

const TourForm = ({ initial, onSave, onCancel, saving }) => {
  const [values, setValues] = useState(initial ?? EMPTY_FORM);

  const set = (field) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setValues((v) => ({ ...v, [field]: val }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.title.trim()) return;
    onSave(toPayload(values));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <label className={labelClass}>Tour Title *</label>
          <input className={inputClass} value={values.title} onChange={set('title')} required placeholder="e.g. Pink Beach Snorkeling" />
        </div>

        <div>
          <label className={labelClass}>Duration Type *</label>
          <select className={inputClass} value={values.duration_type} onChange={set('duration_type')}>
            <option value="half-day">Half-Day</option>
            <option value="one-day">One-Day</option>
            <option value="two-day">Two-Day</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Difficulty</label>
          <select className={inputClass} value={values.difficulty} onChange={set('difficulty')}>
            <option value="easy">Easy</option>
            <option value="moderate">Moderate</option>
            <option value="challenging">Challenging</option>
          </select>
        </div>

        <div>
          <label className={labelClass}>Price (USD / person)</label>
          <input className={inputClass} type="number" min="0" step="0.01" value={values.price_usd} onChange={set('price_usd')} placeholder="e.g. 120" />
        </div>

        <div>
          <label className={labelClass}>Max Group Size</label>
          <input className={inputClass} type="number" min="1" max="100" value={values.max_group_size} onChange={set('max_group_size')} placeholder="e.g. 12" />
        </div>

        <div className="sm:col-span-2">
          <label className={labelClass}>Description</label>
          <textarea className={inputClass} rows={3} value={values.description} onChange={set('description')} placeholder="Describe the tour experience..." />
        </div>

        <div>
          <label className={labelClass}>Highlights (one per line)</label>
          <textarea className={inputClass} rows={4} value={values.highlights} onChange={set('highlights')} placeholder={"Komodo dragon trekking\nPink Beach swim\nScenic boat ride"} />
        </div>

        <div>
          <label className={labelClass}>Included (one per line)</label>
          <textarea className={inputClass} rows={4} value={values.included} onChange={set('included')} placeholder={"Boat transfer\nLunch & water\nPark entry fee"} />
        </div>

        <div className="sm:col-span-2 flex items-center gap-2">
          <input id="is_active" type="checkbox" checked={values.is_active} onChange={set('is_active')} className="w-4 h-4 accent-ocean" />
          <label htmlFor="is_active" className="text-sm text-stone/70 cursor-pointer">Active (visible on tours page)</label>
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <button type="submit" disabled={saving} className="flex items-center gap-2 bg-ocean hover:bg-ocean/90 text-white text-sm font-semibold rounded-lg px-5 py-2.5 transition-colors border-none cursor-pointer disabled:opacity-50">
          <Check className="w-4 h-4" />
          {saving ? 'Saving…' : 'Save Tour'}
        </button>
        <button type="button" onClick={onCancel} className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 text-stone text-sm font-medium rounded-lg px-5 py-2.5 transition-colors border-none cursor-pointer">
          <X className="w-4 h-4" />
          Cancel
        </button>
      </div>
    </form>
  );
};

const TourRow = ({ tour, onEdit, onDelete }) => {
  const [expanded, setExpanded] = useState(false);
  const d = tour.data;

  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden">
      <div className="flex items-center gap-4 px-5 py-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${DURATION_COLORS[d.duration_type]}`}>
              {DURATION_LABELS[d.duration_type]}
            </span>
            {!d.is_active && (
              <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-gray-100 text-stone/50">Inactive</span>
            )}
          </div>
          <p className="font-semibold text-stone truncate">{d.title}</p>
          <p className="text-xs text-stone/50 mt-0.5">
            {d.price_usd != null ? `$${d.price_usd} / person` : 'No price set'}
            {d.max_group_size ? ` · Max ${d.max_group_size}` : ''}
            {d.difficulty ? ` · ${d.difficulty}` : ''}
          </p>
        </div>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="p-2 rounded-lg text-stone/40 hover:text-stone hover:bg-gray-100 transition-colors border-none cursor-pointer"
            aria-label="Toggle details"
          >
            {expanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
          </button>
          <button
            onClick={() => onEdit(tour)}
            className="p-2 rounded-lg text-ocean hover:bg-ocean/10 transition-colors border-none cursor-pointer"
            aria-label="Edit"
          >
            <Pencil className="w-4 h-4" />
          </button>
          <button
            onClick={() => onDelete(tour)}
            className="p-2 rounded-lg text-coral hover:bg-coral/10 transition-colors border-none cursor-pointer"
            aria-label="Delete"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {expanded && (
        <div className="border-t border-gray-100 px-5 py-4 bg-gray-50 text-sm text-stone/70 space-y-3">
          {d.description && <p>{d.description}</p>}
          {d.highlights?.length > 0 && (
            <div>
              <p className="font-semibold text-stone/50 text-xs uppercase tracking-wider mb-1">Highlights</p>
              <ul className="list-disc list-inside space-y-0.5">
                {d.highlights.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </div>
          )}
          {d.included?.length > 0 && (
            <div>
              <p className="font-semibold text-stone/50 text-xs uppercase tracking-wider mb-1">Included</p>
              <ul className="list-disc list-inside space-y-0.5">
                {d.included.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

const AdminTours = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingTour, setEditingTour] = useState(null);
  const [saving, setSaving] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const [deleting, setDeleting] = useState(false);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const rows = await fetchTours();
      setTours(rows);
    } catch (err) {
      setError('Failed to load tours.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { refresh(); }, [refresh]);

  const handleSave = async (payload) => {
    setSaving(true);
    setError(null);
    try {
      if (editingTour) {
        await updateTour(editingTour.id, payload);
      } else {
        await createTour(payload);
      }
      setShowForm(false);
      setEditingTour(null);
      await refresh();
    } catch (err) {
      setError(err.message || 'Save failed.');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!deleteTarget) return;
    setDeleting(true);
    try {
      await deleteTour(deleteTarget.id);
      setDeleteTarget(null);
      await refresh();
    } catch (err) {
      setError(err.message || 'Delete failed.');
    } finally {
      setDeleting(false);
    }
  };

  const openEdit = (tour) => {
    setEditingTour(tour);
    setShowForm(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const closeForm = () => {
    setShowForm(false);
    setEditingTour(null);
  };

  const grouped = {
    'half-day': tours.filter((t) => t.data?.duration_type === 'half-day'),
    'one-day': tours.filter((t) => t.data?.duration_type === 'one-day'),
    'two-day': tours.filter((t) => t.data?.duration_type === 'two-day'),
  };

  return (
    <div className="min-h-screen bg-mist">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 pt-20 pb-6 px-4 md:px-8">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
          <div>
            <h1 className="font-serif font-bold text-2xl text-stone">Manage Tours</h1>
            <p className="text-stone/50 text-sm mt-0.5">{tours.length} tour{tours.length !== 1 ? 's' : ''} total</p>
          </div>
          {!showForm && (
            <button
              onClick={() => { setEditingTour(null); setShowForm(true); }}
              className="flex items-center gap-2 bg-ocean hover:bg-ocean/90 text-white text-sm font-semibold rounded-lg px-4 py-2.5 transition-colors border-none cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              Add Tour
            </button>
          )}
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 md:px-8 py-8 space-y-8">
        {/* Error */}
        {error && (
          <div className="flex items-center gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            {error}
          </div>
        )}

        {/* Add / Edit Form */}
        {showForm && (
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
            <h2 className="font-semibold text-stone text-lg mb-5">
              {editingTour ? 'Edit Tour' : 'Add New Tour'}
            </h2>
            <TourForm
              initial={editingTour ? toFormValues(editingTour) : EMPTY_FORM}
              onSave={handleSave}
              onCancel={closeForm}
              saving={saving}
            />
          </div>
        )}

        {/* Delete Confirm */}
        {deleteTarget && (
          <div className="bg-white border border-red-200 rounded-2xl p-6 shadow-sm">
            <h2 className="font-semibold text-stone text-base mb-2">Delete Tour?</h2>
            <p className="text-stone/60 text-sm mb-5">
              Are you sure you want to delete <strong>{deleteTarget.data?.title}</strong>? This cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={handleDelete}
                disabled={deleting}
                className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold rounded-lg px-5 py-2.5 transition-colors border-none cursor-pointer disabled:opacity-50"
              >
                {deleting ? 'Deleting…' : 'Yes, Delete'}
              </button>
              <button
                onClick={() => setDeleteTarget(null)}
                className="bg-gray-100 hover:bg-gray-200 text-stone text-sm font-medium rounded-lg px-5 py-2.5 transition-colors border-none cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Tour List */}
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-2 border-ocean/20 border-t-ocean rounded-full animate-spin" />
          </div>
        ) : (
          Object.entries(grouped).map(([type, items]) => (
            <div key={type}>
              <h2 className="font-semibold text-stone/60 text-xs uppercase tracking-widest mb-3">
                {DURATION_LABELS[type]} ({items.length})
              </h2>
              {items.length === 0 ? (
                <p className="text-stone/40 text-sm py-4 text-center border border-dashed border-gray-200 rounded-xl">
                  No {DURATION_LABELS[type].toLowerCase()} tours yet.
                </p>
              ) : (
                <div className="space-y-3">
                  {items.map((tour) => (
                    <TourRow
                      key={tour.id}
                      tour={tour}
                      onEdit={openEdit}
                      onDelete={setDeleteTarget}
                    />
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AdminTours;
