import { useState, useEffect, useCallback } from 'react'
import { client, getRows, getEntity, getSchemaData, getErrorMessage } from '@/api/db'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Modal } from '@/components/ui/Modal'
import { Input, Select, Textarea } from '@/components/ui/FormFields'
import { Crown, Plus, Pencil, Trash2, Map } from 'lucide-react'

const TERRAINS = ['plains', 'mountains', 'forest', 'desert', 'coastal', 'tundra', 'swamp']
const STATUSES = ['rising', 'stable', 'declining', 'at_war', 'prosperous']
const EMBLEMS = ['⚔️', '🛡️', '👑', '🦅', '🐉', '🌙', '⭐', '🔥', '🌊', '🌲', '🏔️', '🦁']

const statusVariant = {
  rising: 'green', stable: 'blue', declining: 'amber', at_war: 'red', prosperous: 'gold',
}
const terrainEmoji = {
  plains: '🌾', mountains: '⛰️', forest: '🌲', desert: '🏜️', coastal: '🌊', tundra: '❄️', swamp: '🌿',
}

const defaultForm = {
  name: '', motto: '', description: '', banner_color: '#c9a84c',
  emblem: '⚔️', terrain: 'plains', population: 10000, territory: 100,
  prestige: 50, age: 1, status: 'rising',
}

export default function KingdomsPage({ selectedKingdom, onSelectKingdom }) {
  const [kingdoms, setKingdoms] = useState([])
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [editTarget, setEditTarget] = useState(null)
  const [form, setForm] = useState(defaultForm)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  const fetchKingdoms = useCallback(async () => {
    setLoading(true)
    const { data: res, error: err } = await client
      .from('Kingdoms')
      .select('*')
      .order('created_at', { ascending: false })
      .range(0, 49)
    if (!err) setKingdoms(getRows(res))
    setLoading(false)
  }, [])

  useEffect(() => { fetchKingdoms() }, [fetchKingdoms])

  const openCreate = () => {
    setEditTarget(null)
    setForm(defaultForm)
    setError(null)
    setModalOpen(true)
  }

  const openEdit = (k) => {
    setEditTarget(k)
    setForm({ ...defaultForm, ...getSchemaData(k) })
    setError(null)
    setModalOpen(true)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError(null)

    const payload = {
      data: {
        name: form.name,
        motto: form.motto,
        description: form.description,
        banner_color: form.banner_color,
        emblem: form.emblem,
        terrain: form.terrain,
        population: Number(form.population),
        territory: Number(form.territory),
        prestige: Number(form.prestige),
        age: Number(form.age),
        status: form.status,
      },
    }

    let res, err
    if (editTarget) {
      ;({ data: res, error: err } = await client
        .from('Kingdoms')
        .update(payload)
        .eq('id', editTarget.id)
        .select()
        .single())
    } else {
      ;({ data: res, error: err } = await client
        .from('Kingdoms')
        .insert(payload)
        .select()
        .single())
    }

    if (err || res?.success === false) {
      setError(getErrorMessage(res, err))
      setSaving(false)
      return
    }

    const saved = getEntity(res)
    if (editTarget) {
      setKingdoms(prev => prev.map(k => k.id === saved.id ? saved : k))
      if (selectedKingdom?.id === saved.id) onSelectKingdom(saved)
    } else {
      setKingdoms(prev => [saved, ...prev])
      onSelectKingdom(saved)
    }
    setModalOpen(false)
    setSaving(false)
  }

  const handleDelete = async (k) => {
    if (!confirm(`Delete "${getSchemaData(k).name}"? This cannot be undone.`)) return
    const { data: res, error: err } = await client
      .from('Kingdoms')
      .delete()
      .eq('id', k.id)
      .select()
      .maybeSingle()
    if (!err && res?.success !== false) {
      setKingdoms(prev => prev.filter(x => x.id !== k.id))
      if (selectedKingdom?.id === k.id) onSelectKingdom(null)
    }
  }

  const f = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#e8e4d9]">Kingdoms</h1>
          <p className="text-[#9a95a8] text-sm mt-1">Create and manage your fantasy realms</p>
        </div>
        <Button onClick={openCreate}>
          <Plus className="w-4 h-4" /> New Kingdom
        </Button>
      </div>

      {loading ? (
        <div className="text-center py-16 text-[#9a95a8]">Loading kingdoms...</div>
      ) : kingdoms.length === 0 ? (
        <Card>
          <CardContent className="py-16 text-center">
            <p className="text-5xl mb-4">🏰</p>
            <p className="text-[#e8e4d9] font-semibold text-lg">No kingdoms yet</p>
            <p className="text-[#9a95a8] text-sm mt-2 mb-6">Forge your first realm and begin your legend</p>
            <Button onClick={openCreate}><Plus className="w-4 h-4" /> Create Kingdom</Button>
          </CardContent>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {kingdoms.map(k => {
            const kd = getSchemaData(k)
            const isActive = selectedKingdom?.id === k.id
            return (
              <Card
                key={k.id}
                className={`transition-all ${isActive ? 'border-[#c9a84c] shadow-lg shadow-[#c9a84c]/10' : 'hover:border-[#2a2f52]/80'}`}
              >
                <CardContent className="p-5">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border border-[#2a2f52]"
                        style={{ backgroundColor: (kd.banner_color || '#c9a84c') + '22' }}
                      >
                        {kd.emblem || terrainEmoji[kd.terrain] || '🏰'}
                      </div>
                      <div>
                        <p className="text-[#e8e4d9] font-bold">{kd.name}</p>
                        <p className="text-xs text-[#9a95a8] capitalize">{kd.terrain} realm</p>
                      </div>
                    </div>
                    <Badge variant={statusVariant[kd.status] || 'muted'} className="capitalize">
                      {kd.status?.replace('_', ' ')}
                    </Badge>
                  </div>

                  {kd.motto && (
                    <p className="text-xs text-[#5c5870] italic mb-4 border-l-2 border-[#2a2f52] pl-3">
                      "{kd.motto}"
                    </p>
                  )}

                  {/* Stats grid */}
                  <div className="grid grid-cols-4 gap-2 mb-4">
                    {[
                      { label: 'Pop', value: (kd.population || 0).toLocaleString() },
                      { label: 'Territory', value: kd.territory || 0 },
                      { label: 'Prestige', value: kd.prestige || 0 },
                      { label: 'Age', value: `${kd.age || 0}y` },
                    ].map(s => (
                      <div key={s.label} className="text-center bg-[#0d0f1a] rounded-lg p-2">
                        <p className="text-[#c9a84c] font-bold text-xs">{s.value}</p>
                        <p className="text-[#5c5870] text-xs">{s.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant={isActive ? 'primary' : 'secondary'}
                      className="flex-1"
                      onClick={() => onSelectKingdom(isActive ? null : k)}
                    >
                      <Crown className="w-3 h-3" />
                      {isActive ? 'Active' : 'Select'}
                    </Button>
                    <Button size="sm" variant="secondary" onClick={() => openEdit(k)}>
                      <Pencil className="w-3 h-3" />
                    </Button>
                    <Button size="sm" variant="danger" onClick={() => handleDelete(k)}>
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      )}

      {/* Create/Edit Modal */}
      <Modal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        title={editTarget ? 'Edit Kingdom' : 'Forge New Kingdom'}
        size="lg"
      >
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input label="Kingdom Name" value={form.name} onChange={f('name')} required placeholder="e.g. Ironhold" />
            <Input label="Motto" value={form.motto} onChange={f('motto')} placeholder="e.g. Strength in Unity" />
          </div>

          <Textarea label="Description / Lore" value={form.description} onChange={f('description')} rows={3} placeholder="Describe your kingdom's history and lore..." />

          <div className="grid grid-cols-2 gap-4">
            <Select label="Terrain" value={form.terrain} onChange={f('terrain')}>
              {TERRAINS.map(t => <option key={t} value={t} className="bg-[#0d0f1a] capitalize">{terrainEmoji[t]} {t.charAt(0).toUpperCase() + t.slice(1)}</option>)}
            </Select>
            <Select label="Status" value={form.status} onChange={f('status')}>
              {STATUSES.map(s => <option key={s} value={s} className="bg-[#0d0f1a] capitalize">{s.replace('_', ' ')}</option>)}
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input label="Population" type="number" min="0" value={form.population} onChange={f('population')} />
            <Input label="Territory (leagues)" type="number" min="0" value={form.territory} onChange={f('territory')} />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input label="Prestige (0-1000)" type="number" min="0" max="1000" value={form.prestige} onChange={f('prestige')} />
            <Input label="Kingdom Age (years)" type="number" min="0" value={form.age} onChange={f('age')} />
          </div>

          {/* Emblem picker */}
          <div>
            <p className="text-xs text-[#9a95a8] uppercase tracking-widest font-medium mb-2">Emblem</p>
            <div className="flex flex-wrap gap-2">
              {EMBLEMS.map(e => (
                <button
                  key={e}
                  type="button"
                  onClick={() => setForm(prev => ({ ...prev, emblem: e }))}
                  className={`w-10 h-10 rounded-lg text-xl flex items-center justify-center border transition-all ${
                    form.emblem === e
                      ? 'border-[#c9a84c] bg-[#c9a84c]/20'
                      : 'border-[#2a2f52] bg-[#0d0f1a] hover:border-[#c9a84c]/50'
                  }`}
                >
                  {e}
                </button>
              ))}
            </div>
          </div>

          {/* Banner color */}
          <div className="flex items-center gap-3">
            <div>
              <p className="text-xs text-[#9a95a8] uppercase tracking-widest font-medium mb-1">Banner Color</p>
              <input
                type="color"
                value={form.banner_color}
                onChange={f('banner_color')}
                className="w-12 h-10 rounded-lg border border-[#2a2f52] bg-[#0d0f1a] cursor-pointer"
              />
            </div>
            <div
              className="flex-1 h-10 rounded-lg border border-[#2a2f52] flex items-center justify-center text-sm font-medium"
              style={{ backgroundColor: form.banner_color + '33', borderColor: form.banner_color + '66', color: form.banner_color }}
            >
              {form.emblem} {form.name || 'Kingdom Preview'}
            </div>
          </div>

          {error && <p className="text-[#c94c4c] text-sm">{error}</p>}

          <div className="flex gap-3 pt-2">
            <Button type="submit" disabled={saving} className="flex-1">
              {saving ? 'Saving...' : editTarget ? 'Save Changes' : 'Forge Kingdom'}
            </Button>
            <Button type="button" variant="secondary" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
