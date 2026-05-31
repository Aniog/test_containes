import { useState, useEffect, useCallback } from 'react'
import { client, getRows, getEntity, getSchemaData, getErrorMessage } from '@/api/db'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Modal } from '@/components/ui/Modal'
import { Input, Select, Textarea } from '@/components/ui/FormFields'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { StatCard } from '@/components/ui/StatCard'
import { Pencil, Trash2, Plus, Shield } from 'lucide-react'

const RELATION_TYPES = ['alliance', 'non_aggression', 'trade_agreement', 'vassal', 'tributary', 'rivalry', 'war', 'neutral']
const STATUSES = ['active', 'pending', 'broken', 'expired']

const relationIcon = {
  alliance: '🤝', non_aggression: '🕊️', trade_agreement: '💼',
  vassal: '🏳️', tributary: '💰', rivalry: '⚡', war: '⚔️', neutral: '⚖️',
}
const relationColor = {
  alliance: 'green', non_aggression: 'blue', trade_agreement: 'gold',
  vassal: 'muted', tributary: 'amber', rivalry: 'amber', war: 'red', neutral: 'muted',
}
const statusColor = {
  active: 'green', pending: 'amber', broken: 'red', expired: 'muted',
}

const defaultForm = {
  kingdom_id: '', partner_kingdom_name: '', relation_type: 'alliance',
  status: 'active', trust_level: 50, established_year: 1,
  terms: '', mutual_defense: false, trade_bonus: 0, notes: '',
}

export default function DiplomacyPage({ selectedKingdom }) {
  const [alliances, setAlliances] = useState([])
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [editTarget, setEditTarget] = useState(null)
  const [form, setForm] = useState(defaultForm)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('all')

  const fetchAlliances = useCallback(async () => {
    setLoading(true)
    const { data: res, error: err } = await client
      .from('Diplomatic Alliances')
      .select('*')
      .order('created_at', { ascending: false })
      .range(0, 99)
    if (!err) setAlliances(getRows(res))
    setLoading(false)
  }, [])

  useEffect(() => { fetchAlliances() }, [fetchAlliances])

  const openCreate = () => {
    setEditTarget(null)
    setForm({ ...defaultForm, kingdom_id: selectedKingdom?.id || '' })
    setError(null)
    setModalOpen(true)
  }

  const openEdit = (a) => {
    setEditTarget(a)
    const ad = getSchemaData(a)
    setForm({ ...defaultForm, ...ad, kingdom_id: ad.kingdom_id || selectedKingdom?.id || '' })
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
        partner_kingdom_name: form.partner_kingdom_name,
        relation_type: form.relation_type,
        status: form.status,
        trust_level: Number(form.trust_level),
        established_year: Number(form.established_year),
        terms: form.terms,
        mutual_defense: form.mutual_defense === true || form.mutual_defense === 'true',
        trade_bonus: Number(form.trade_bonus),
        notes: form.notes,
      },
    }

    let res, err
    if (editTarget) {
      ;({ data: res, error: err } = await client.from('Diplomatic Alliances').update(payload).eq('id', editTarget.id).select().single())
    } else {
      ;({ data: res, error: err } = await client.from('Diplomatic Alliances').insert(payload).select().single())
    }

    if (err || res?.success === false) {
      setError(getErrorMessage(res, err))
      setSaving(false)
      return
    }

    const saved = getEntity(res)
    if (editTarget) {
      setAlliances(prev => prev.map(a => a.id === saved.id ? saved : a))
    } else {
      setAlliances(prev => [saved, ...prev])
    }
    setModalOpen(false)
    setSaving(false)
  }

  const handleDelete = async (a) => {
    if (!confirm('Delete this diplomatic relation?')) return
    const { data: res, error: err } = await client.from('Diplomatic Alliances').delete().eq('id', a.id).select().maybeSingle()
    if (!err && res?.success !== false) setAlliances(prev => prev.filter(x => x.id !== a.id))
  }

  const f = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const myAlliances = selectedKingdom
    ? alliances.filter(a => getSchemaData(a).kingdom_id === selectedKingdom.id)
    : alliances

  const filtered = filter === 'all' ? myAlliances : myAlliances.filter(a => getSchemaData(a).relation_type === filter)

  const activeCount = myAlliances.filter(a => getSchemaData(a).status === 'active').length
  const allianceCount = myAlliances.filter(a => getSchemaData(a).relation_type === 'alliance').length
  const warCount = myAlliances.filter(a => getSchemaData(a).relation_type === 'war').length
  const avgTrust = myAlliances.length > 0
    ? Math.round(myAlliances.reduce((s, a) => s + (getSchemaData(a).trust_level || 0), 0) / myAlliances.length)
    : 0

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#e8e4d9]">Diplomacy</h1>
          <p className="text-[#9a95a8] text-sm mt-1">
            {selectedKingdom ? `Foreign relations of ${getSchemaData(selectedKingdom).name}` : 'Manage diplomatic relations'}
          </p>
        </div>
        <Button onClick={openCreate} disabled={!selectedKingdom}>
          <Plus className="w-4 h-4" /> New Relation
        </Button>
      </div>

      {!selectedKingdom && (
        <Card>
          <CardContent className="py-10 text-center">
            <p className="text-3xl mb-2">🤝</p>
            <p className="text-[#9a95a8]">Select a kingdom to manage its diplomatic relations</p>
          </CardContent>
        </Card>
      )}

      {selectedKingdom && (
        <>
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard icon="🤝" label="Active Relations" value={activeCount} color="green" />
            <StatCard icon="⚔️" label="At War" value={warCount} color="red" />
            <StatCard icon="🛡️" label="Alliances" value={allianceCount} color="gold" />
            <StatCard icon="💙" label="Avg Trust" value={`${avgTrust}%`} color="blue" />
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2">
            {['all', ...RELATION_TYPES].map(type => (
              <button
                key={type}
                onClick={() => setFilter(type)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filter === type
                    ? 'bg-[#c9a84c] text-[#0d0f1a]'
                    : 'bg-[#1a1e35] text-[#9a95a8] border border-[#2a2f52] hover:text-[#e8e4d9]'
                }`}
              >
                {type === 'all' ? '🌍 All' : `${relationIcon[type]} ${type.replace('_', ' ')}`}
              </button>
            ))}
          </div>

          {/* Relations list */}
          {loading ? (
            <div className="text-center py-12 text-[#9a95a8]">Loading relations...</div>
          ) : filtered.length === 0 ? (
            <Card>
              <CardContent className="py-12 text-center">
                <p className="text-4xl mb-3">🕊️</p>
                <p className="text-[#e8e4d9] font-semibold">No diplomatic relations</p>
                <p className="text-[#9a95a8] text-sm mt-1 mb-4">Forge alliances and shape the political landscape</p>
                <Button onClick={openCreate}><Plus className="w-4 h-4" /> New Relation</Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filtered.map(a => {
                const ad = getSchemaData(a)
                return (
                  <Card key={a.id} className="hover:border-[#2a2f52]/80 transition-all">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#0d0f1a] rounded-lg flex items-center justify-center text-xl border border-[#2a2f52]">
                            {relationIcon[ad.relation_type] || '🤝'}
                          </div>
                          <div>
                            <p className="text-[#e8e4d9] font-semibold">{ad.partner_kingdom_name}</p>
                            <p className="text-xs text-[#9a95a8] capitalize">{ad.relation_type?.replace('_', ' ')}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={statusColor[ad.status] || 'muted'} className="capitalize">
                            {ad.status}
                          </Badge>
                        </div>
                      </div>

                      <ProgressBar label="Trust Level" value={ad.trust_level || 0} max={100} color="blue" />

                      <div className="flex flex-wrap gap-2 mt-3">
                        {ad.mutual_defense && (
                          <Badge variant="green">🛡️ Mutual Defense</Badge>
                        )}
                        {ad.trade_bonus > 0 && (
                          <Badge variant="gold">💰 +{ad.trade_bonus}% Trade</Badge>
                        )}
                        {ad.established_year > 0 && (
                          <Badge variant="muted">📅 Year {ad.established_year}</Badge>
                        )}
                      </div>

                      {ad.terms && (
                        <p className="text-xs text-[#5c5870] mt-3 italic border-l-2 border-[#2a2f52] pl-3">
                          {ad.terms}
                        </p>
                      )}

                      <div className="flex gap-2 mt-4">
                        <Button size="sm" variant="secondary" className="flex-1" onClick={() => openEdit(a)}>
                          <Pencil className="w-3 h-3" /> Edit
                        </Button>
                        <Button size="sm" variant="danger" onClick={() => handleDelete(a)}>
                          <Trash2 className="w-3 h-3" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>
          )}
        </>
      )}

      {/* Modal */}
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editTarget ? 'Edit Relation' : 'Forge New Relation'} size="lg">
        <form onSubmit={handleSave} className="space-y-4">
          <Input
            label="Partner Kingdom Name"
            value={form.partner_kingdom_name}
            onChange={f('partner_kingdom_name')}
            required
            placeholder="e.g. The Iron Dominion"
          />
          <div className="grid grid-cols-2 gap-4">
            <Select label="Relation Type" value={form.relation_type} onChange={f('relation_type')}>
              {RELATION_TYPES.map(r => (
                <option key={r} value={r} className="bg-[#0d0f1a] capitalize">
                  {relationIcon[r]} {r.replace('_', ' ')}
                </option>
              ))}
            </Select>
            <Select label="Status" value={form.status} onChange={f('status')}>
              {STATUSES.map(s => <option key={s} value={s} className="bg-[#0d0f1a] capitalize">{s}</option>)}
            </Select>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Input label="Trust Level (0-100)" type="number" min="0" max="100" value={form.trust_level} onChange={f('trust_level')} />
            <Input label="Trade Bonus %" type="number" min="0" max="100" value={form.trade_bonus} onChange={f('trade_bonus')} />
            <Input label="Established Year" type="number" min="0" value={form.established_year} onChange={f('established_year')} />
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="mutual_defense"
              checked={form.mutual_defense === true || form.mutual_defense === 'true'}
              onChange={e => setForm(prev => ({ ...prev, mutual_defense: e.target.checked }))}
              className="w-4 h-4 accent-[#c9a84c]"
            />
            <label htmlFor="mutual_defense" className="text-sm text-[#e8e4d9]">
              🛡️ Mutual Defense Pact
            </label>
          </div>
          <Textarea label="Terms & Conditions" value={form.terms} onChange={f('terms')} rows={3} placeholder="Describe the terms of this agreement..." />
          <Textarea label="Diplomatic Notes" value={form.notes} onChange={f('notes')} rows={2} placeholder="Historical notes and context..." />

          {error && <p className="text-[#c94c4c] text-sm">{error}</p>}
          <div className="flex gap-3 pt-2">
            <Button type="submit" disabled={saving} className="flex-1">
              {saving ? 'Saving...' : editTarget ? 'Save Changes' : 'Forge Relation'}
            </Button>
            <Button type="button" variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
