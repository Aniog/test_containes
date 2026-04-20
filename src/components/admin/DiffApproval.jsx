import { ArrowRight, CheckCircle2, PlusCircle, MinusCircle, Edit3 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const EMPTY_LABEL = <span className="italic text-gray-500">(empty)</span>

function formatValue(val) {
  if (val === null || val === undefined || val === '') return null
  if (Array.isArray(val)) return val.length === 0 ? null : val.join(', ')
  if (typeof val === 'boolean') return val ? 'Yes' : 'No'
  return String(val)
}

function DiffRow({ label, oldVal, newVal, type }) {
  const icons = {
    edited: <Edit3 className="w-3.5 h-3.5 text-yellow-400 flex-shrink-0" />,
    added: <PlusCircle className="w-3.5 h-3.5 text-green-400 flex-shrink-0" />,
    cleared: <MinusCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0" />,
  }
  const rowBg = {
    edited: 'bg-yellow-900/10 border-yellow-800/30',
    added: 'bg-green-900/10 border-green-800/30',
    cleared: 'bg-red-900/10 border-red-800/30',
  }

  return (
    <div className={`flex items-start gap-3 px-4 py-3 rounded-lg border ${rowBg[type]}`}>
      <div className="mt-0.5">{icons[type]}</div>
      <div className="flex-1 min-w-0 grid grid-cols-[120px_1fr_20px_1fr] gap-2 items-start">
        <span className="text-gray-400 text-xs font-medium uppercase tracking-wide pt-0.5 truncate">{label}</span>
        <div className="text-sm text-gray-300 break-words">
          {oldVal !== null ? (
            <span className={type === 'cleared' ? 'line-through text-red-400' : 'line-through text-gray-500'}>
              {oldVal}
            </span>
          ) : EMPTY_LABEL}
        </div>
        <ArrowRight className="w-4 h-4 text-gray-600 mt-0.5 flex-shrink-0" />
        <div className="text-sm break-words">
          {newVal !== null ? (
            <span className={type === 'added' ? 'text-green-300 font-medium' : 'text-white font-medium'}>
              {newVal}
            </span>
          ) : EMPTY_LABEL}
        </div>
      </div>
    </div>
  )
}

/**
 * DiffApproval — shows a before/after diff of changed fields.
 *
 * Props:
 *   isNew       — true when creating a new record (shows all fields as "added")
 *   original    — object of original field values (for edit mode)
 *   updated     — object of new field values
 *   fieldLabels — { fieldKey: 'Human Label' }
 *   onConfirm   — called when user approves
 *   onBack      — called when user wants to go back to the form
 *   loading     — disables buttons while saving
 *   error       — error string to display
 */
export default function DiffApproval({
  isNew = false,
  original = {},
  updated = {},
  fieldLabels = {},
  onConfirm,
  onBack,
  loading = false,
  error = null,
}) {
  // Build diff rows
  const allKeys = Array.from(new Set([...Object.keys(original), ...Object.keys(updated)]))

  const rows = allKeys.reduce((acc, key) => {
    const oldRaw = original[key]
    const newRaw = updated[key]
    const oldFmt = formatValue(oldRaw)
    const newFmt = formatValue(newRaw)

    if (isNew) {
      // For new records, only show fields that have a value
      if (newFmt !== null) {
        acc.push({ key, label: fieldLabels[key] || key, oldVal: null, newVal: newFmt, type: 'added' })
      }
    } else {
      // Skip unchanged
      if (oldFmt === newFmt) return acc
      const type = oldFmt === null ? 'added' : newFmt === null ? 'cleared' : 'edited'
      acc.push({ key, label: fieldLabels[key] || key, oldVal: oldFmt, newVal: newFmt, type })
    }
    return acc
  }, [])

  const counts = {
    edited: rows.filter(r => r.type === 'edited').length,
    added: rows.filter(r => r.type === 'added').length,
    cleared: rows.filter(r => r.type === 'cleared').length,
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-full bg-indigo-900/50 border border-indigo-700 flex items-center justify-center flex-shrink-0">
          <CheckCircle2 className="w-5 h-5 text-indigo-400" />
        </div>
        <div>
          <h3 className="text-white font-semibold text-base">
            {isNew ? 'Review New Article' : 'Review Changes'}
          </h3>
          <p className="text-gray-400 text-xs mt-0.5">
            {isNew
              ? `${rows.length} field${rows.length !== 1 ? 's' : ''} will be saved`
              : [
                  counts.edited && `${counts.edited} edited`,
                  counts.added && `${counts.added} filled in`,
                  counts.cleared && `${counts.cleared} cleared`,
                ].filter(Boolean).join(' · ') || 'No changes detected'}
          </p>
        </div>
      </div>

      {/* Legend */}
      {!isNew && (
        <div className="flex flex-wrap gap-3 mb-4 text-xs">
          {counts.edited > 0 && (
            <span className="flex items-center gap-1 text-yellow-400">
              <Edit3 className="w-3 h-3" /> Edited
            </span>
          )}
          {counts.added > 0 && (
            <span className="flex items-center gap-1 text-green-400">
              <PlusCircle className="w-3 h-3" /> Filled in
            </span>
          )}
          {counts.cleared > 0 && (
            <span className="flex items-center gap-1 text-red-400">
              <MinusCircle className="w-3 h-3" /> Cleared
            </span>
          )}
        </div>
      )}

      {/* Diff rows */}
      <div className="flex-1 overflow-y-auto space-y-2 pr-1">
        {rows.length === 0 ? (
          <div className="text-center py-10 text-gray-500">
            <p className="text-sm">No changes to save.</p>
          </div>
        ) : (
          rows.map(row => (
            <DiffRow
              key={row.key}
              label={row.label}
              oldVal={row.oldVal}
              newVal={row.newVal}
              type={row.type}
            />
          ))
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="mt-4 px-4 py-3 bg-red-900/30 border border-red-700 rounded-lg text-red-300 text-sm">
          {error}
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-3 justify-end mt-5 pt-4 border-t border-gray-700">
        <Button variant="secondary" onClick={onBack} disabled={loading}>
          ← Back to Edit
        </Button>
        <Button
          onClick={onConfirm}
          disabled={loading || rows.length === 0}
          className="gap-2"
        >
          <CheckCircle2 className="w-4 h-4" />
          {loading ? 'Saving…' : isNew ? 'Confirm & Create' : 'Confirm & Save'}
        </Button>
      </div>
    </div>
  )
}
