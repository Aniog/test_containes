import { useState, useEffect, useCallback } from 'react'
import { client, getRows, getEntity, getSchemaData, getErrorMessage } from '@/api/db'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Modal } from '@/components/ui/Modal'
import { Input, Select, Textarea } from '@/components/ui/FormFields'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { StatCard } from '@/components/ui/StatCard'
import { Landmark, Plus, Pencil, Trash2, ScrollText, X } from 'lucide-react'

const GOV_TYPES = ['monarchy', 'republic', 'oligarchy', 'theocracy', 'empire', 'federation', 'dictatorship']
const SUCCESSION = ['primogeniture', 'elective', 'seniority', 'appointment', 'conquest']

const govTypeIcon = {
  monarchy: '👑', republic: '🏛️', oligarchy: '💎', theocracy: '⛪',
  empire: '🦅', federation: '🤝', dictatorship: '⚔️',
}

const defaultForm = {
  kingdom_id: '', type: 'monarchy', ruler_name: '', ruler_title: 'King',
  stability: 70, corruption: 20, council_members: 5,
  succession_law: 'primogeniture', tax_rate: 15, approval_rating: 60, laws: [],
}

export default function GovernmentPage({ selectedKingdom }) {
  const [govs, setGovs] = useState([])
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [editTarget, setEditTarget] = useState(null)
  const [form, setForm] = useState(defaultForm)
  const [newLaw, setNewLaw] = useState('')
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  const fetchGovs = useCallback(async () => {
    setLoading(true)
    const { data: res, error: err } = await client
      .from('Governments')
      .select('*')
      .order('created_at', { ascending: false })
      .range(0, 49)
    if (!err) setGovs(getRows(res))
    setLoading(false)
  }, [])

  useEffect(() => { fetchGovs() }, [fetchGovs])

  const openCreate = () => {
    setEditTarget(null)
    setForm({ ...defaultForm, kingdom_id: selectedKingdom?.id || '' })
    setError(null)
    setModalOpen(true)
  }

  const openEdit = (g) => {
    setEditTarget(g)
    const gd = getSchemaData(g)
    setForm({ ...defaultForm, ...gd, kingdom_id: gd.kingdom_id || selectedKingdom?.id || '' })
    setError(null)
    setModalOpen(true)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError(null)

    const payload = {
      data: {
        kingdom_id: Number(form.kingdom_id),
        type: form.type,
        ruler_name: form.ruler_name,
        ruler_title: form.ruler_title,
        stability: Number(form.stability),
        corruption: Number(form.corruption),
        council_members: Number(form.council_members),
        succession_law: form.succession_law,
        tax_rate: Number(form.tax_rate),
        approval_rating: Number(form.approval_rating),
        laws: form.laws,
      },
    }

    let res, err
    if (editTarget) {
      ;({ data: res, error: err } = await client.from('Governments').update(payload).eq('id', editTarget.id).select().single())
    } else {
      ;({ data: res, error: err } = await client.from('Governments').insert(payload).select().single())
    }

    if (err || res?.success === false) {
      setError(getErrorMessage(res, err))
      setSaving(false)
      return
    }

    const saved = getEntity(res)
    if (editTarget) {
      setGovs(prev => prev.map(g => g.id === saved.id ? saved : g))
    } else {
      setGovs(prev => [saved, ...prev])
    }
    setModalOpen(false)
    setSaving(false)
  }

  const handleDelete = async (g) => {
    if (!confirm('Delete this government record?')) return
    const { data: res, error: err } = await client.from('Governments').delete().eq('id', g.id).select().maybeSingle()
    if (!err && res?.success !== false) setGovs(prev => prev.filter(x => x.id !== g.id))
  }

  const addLaw = () => {
    if (!newLaw.trim()) return
    setForm(prev => ({ ...prev, laws: [...(prev.laws || []), newLaw.trim()] }))
    setNewLaw('')
  }

  const removeLaw = (i) => setForm(prev => ({ ...prev, laws: prev.laws.filter((_, idx) => idx !== i) }))

  const f = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const activeGov = selectedKingdom
    ? govs.find(g => getSchemaData(g).kingdom_id === selectedKingdom.id)
    : null

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#e8e4d9]">Government</h1>
          <p className="text-[#9a95a8] text-sm mt-1">
            {selectedKingdom ? `Managing government of ${getSchemaData(selectedKingdom).name}` : 'Manage kingdom governments'}
          </p>
        </div>
        <Button onClick={openCreate} disabled={!selectedKingdom}>
          <Plus className="w-4 h-4" /> Establish Government
        </Button>
      </div>

      {!selectedKingdom && (
        <Card>
          <CardContent className="py-10 text-center">
            <p className="text-3xl mb-2">🏛️</p>
            <p className="text-[#9a95a8]">Select a kingdom from the Dashboard to manage its government</p>
          </CardContent>
        </Card>
      )}

      {/* Active government for selected kingdom */}
      {activeGov && (() => {
        const gd = getSchemaData(activeGov)
        return (
          <div className="space-y-4">
            <h2 className="text-xs text-[#c9a84c] uppercase tracking-widest font-semibold">Active Government</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard icon="⚖️" label="Stability" value={`${gd.stability || 0}%`} color="green" />
              <StatCard icon="💰" label="Tax Rate" value={`${gd.tax_rate || 0}%`} color="gold" />
              <StatCard icon="😊" label="Approval" value={`${gd.approval_rating || 0}%`} color="purple" />
              <StatCard icon="🕵️" label="Corruption" value={`${gd.corruption || 0}%`} color="red" />
            </div>

            <Card>
              <CardContent className="p-5">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{govTypeIcon[gd.type] || '🏛️'}</span>
                    <div>
                      <p className="text-[#e8e4d9] font-bold text-lg">{gd.ruler_title} {gd.ruler_name}</p>
                      <p className="text-[#9a95a8] text-sm capitalize">{gd.type} · {gd.succession_law?.replace('_', ' ')} succession</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary" onClick={() => openEdit(activeGov)}>
                      <Pencil className="w-3 h-3" />
                    </Button>
                    <Button size="sm" variant="danger" onClick={() => handleDelete(activeGov)}>
                      <Trash2 className="w-3 h-3" />
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <ProgressBar label="Stability" value={gd.stability || 0} max={100} color="green" />
                  <ProgressBar label="Approval Rating" value={gd.approval_rating || 0} max={100} color="purple" />
                  <ProgressBar label="Corruption" value={gd.corruption || 0} max={100} color="red" />
                  <ProgressBar label="Tax Rate" value={gd.tax_rate || 0} max={100} color="gold" />
                </div>

                <div className="flex gap-4 text-sm">
                  <div className="bg-[#0d0f1a] rounded-lg p-3 flex-1 text-center">
                    <p className="text-[#c9a84c] font-bold">{gd.council_members || 0}</p>
                    <p className="text-[#9a95a8] text-xs">Council Members</p>
                  </div>
                </div>

                {gd.laws && gd.laws.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs text-[#9a95a8] uppercase tracking-widest mb-2">Enacted Laws</p>
                    <div className="space-y-1">
                      {gd.laws.map((law, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-[#e8e4d9] bg-[#0d0f1a] rounded-lg px-3 py-2">
                          <ScrollText className="w-3 h-3 text-[#c9a84c] flex-shrink-0" />
                          {law}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )
      })()}

      {/* All governments */}
      {govs.length > 0 && (
        <div>
          <h2 className="text-xs text-[#c9a84c] uppercase tracking-widest font-semibold mb-4">All Governments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {govs.map(g => {
              const gd = getSchemaData(g)
              return (
                <Card key={g.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{govTypeIcon[gd.type] || '🏛️'}</span>
                        <div>
                          <p className="text-[#e8e4d9] font-semibold">{gd.ruler_title} {gd.ruler_name}</p>
                          <p className="text-xs text-[#9a95a8] capitalize">{gd.type} · Kingdom #{gd.kingdom_id}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="secondary" onClick={() => openEdit(g)}>
                          <Pencil className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="danger" onClick={() => handleDelete(g)}>
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      )}

      {/* Modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editTarget ? 'Edit Government' : 'Establish Government'} size="lg">
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input label="Ruler Name" value={form.ruler_name} onChange={f('ruler_name')} required placeholder="e.g. Aldric the Bold" />
            <Input label="Ruler Title" value={form.ruler_title} onChange={f('ruler_title')} required placeholder="e.g. King, Emperor" />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Select label="Government Type" value={form.type} onChange={f('type')}>
              {GOV_TYPES.map(t => <option key={t} value={t} className="bg-[#0d0f1a] capitalize">{govTypeIcon[t]} {t.charAt(0).toUpperCase() + t.slice(1)}</option>)}
            </Select>
            <Select label="Succession Law" value={form.succession_law} onChange={f('succession_law')}>
              {SUCCESSION.map(s => <option key={s} value={s} className="bg-[#0d0f1a] capitalize">{s.replace('_', ' ')}</option>)}
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input label="Stability (0-100)" type="number" min="0" max="100" value={form.stability} onChange={f('stability')} />
            <Input label="Corruption (0-100)" type="number" min="0" max="100" value={form.corruption} onChange={f('corruption')} />
          </div>

          <div className="grid grid-cols-3 gap-4">
            <Input label="Tax Rate %" type="number" min="0" max="100" value={form.tax_rate} onChange={f('tax_rate')} />
            <Input label="Approval %" type="number" min="0" max="100" value={form.approval_rating} onChange={f('approval_rating')} />
            <Input label="Council Members" type="number" min="0" max="50" value={form.council_members} onChange={f('council_members')} />
          </div>

          {/* Laws */}
          <div>
            <p className="text-xs text-[#9a95a8] uppercase tracking-widest font-medium mb-2">Laws & Edicts</p>
            <div className="flex gap-2 mb-2">
              <input
                value={newLaw}
                onChange={e => setNewLaw(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addLaw())}
                placeholder="Enter a law or edict..."
                className="flex-1 bg-[#0d0f1a] border border-[#2a2f52] rounded-lg px-3 py-2 text-sm text-[#e8e4d9] placeholder-[#5c5870] focus:outline-none focus:border-[#c9a84c]"
              />
              <Button type="button" size="sm" variant="secondary" onClick={addLaw}>Add</Button>
            </div>
            {form.laws?.map((law, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-[#e8e4d9] bg-[#0d0f1a] rounded-lg px-3 py-2 mb-1">
                <ScrollText className="w-3 h-3 text-[#c9a84c] flex-shrink-0" />
                <span className="flex-1">{law}</span>
                <button type="button" onClick={() => removeLaw(i)} className="text-[#5c5870] hover:text-[#c94c4c]">
                  <X className="w-3 h-3" />
                </button>
              </div>
            ))}
          </div>

          {error && <p className="text-[#c94c4c] text-sm">{error}</p>}

          <div className="flex gap-3 pt-2">
            <Button type="submit" disabled={saving} className="flex-1">
              {saving ? 'Saving...' : editTarget ? 'Save Changes' : 'Establish Government'}
            </Button>
            <Button type="button" variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
