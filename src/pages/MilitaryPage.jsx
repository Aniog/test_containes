import { useState, useEffect, useCallback } from 'react'
import { client, getRows, getEntity, getSchemaData, getErrorMessage } from '@/api/db'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Modal } from '@/components/ui/Modal'
import { Input, Select } from '@/components/ui/FormFields'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { StatCard } from '@/components/ui/StatCard'
import { Pencil, Trash2, Plus, Sword } from 'lucide-react'

const TRAINING = ['conscript', 'levied', 'trained', 'professional', 'elite']
const DOCTRINES = ['defensive', 'offensive', 'balanced', 'guerrilla', 'naval']

const trainingColor = {
  conscript: 'red', levied: 'amber', trained: 'blue', professional: 'purple', elite: 'gold',
}
const doctrineIcon = {
  defensive: '🛡️', offensive: '⚔️', balanced: '⚖️', guerrilla: '🌲', naval: '⚓',
}

const defaultForm = {
  kingdom_id: '', total_troops: 1000, infantry: 600, cavalry: 200,
  archers: 150, siege_weapons: 10, navy_ships: 5,
  military_strength: 100, morale: 75, training_level: 'trained',
  military_doctrine: 'balanced', general_name: '', wars_won: 0, wars_lost: 0, upkeep_cost: 200,
}

export default function MilitaryPage({ selectedKingdom }) {
  const [militaries, setMilitaries] = useState([])
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [editTarget, setEditTarget] = useState(null)
  const [form, setForm] = useState(defaultForm)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  const fetchMilitaries = useCallback(async () => {
    setLoading(true)
    const { data: res, error: err } = await client
      .from('Military Forces')
      .select('*')
      .order('created_at', { ascending: false })
      .range(0, 49)
    if (!err) setMilitaries(getRows(res))
    setLoading(false)
  }, [])

  useEffect(() => { fetchMilitaries() }, [fetchMilitaries])

  const openCreate = () => {
    setEditTarget(null)
    setForm({ ...defaultForm, kingdom_id: selectedKingdom?.id || '' })
    setError(null)
    setModalOpen(true)
  }

  const openEdit = (m) => {
    setEditTarget(m)
    const md = getSchemaData(m)
    setForm({ ...defaultForm, ...md, kingdom_id: md.kingdom_id || selectedKingdom?.id || '' })
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
        total_troops: Number(form.total_troops),
        infantry: Number(form.infantry),
        cavalry: Number(form.cavalry),
        archers: Number(form.archers),
        siege_weapons: Number(form.siege_weapons),
        navy_ships: Number(form.navy_ships),
        military_strength: Number(form.military_strength),
        morale: Number(form.morale),
        training_level: form.training_level,
        military_doctrine: form.military_doctrine,
        general_name: form.general_name,
        wars_won: Number(form.wars_won),
        wars_lost: Number(form.wars_lost),
        upkeep_cost: Number(form.upkeep_cost),
      },
    }

    let res, err
    if (editTarget) {
      ;({ data: res, error: err } = await client.from('Military Forces').update(payload).eq('id', editTarget.id).select().single())
    } else {
      ;({ data: res, error: err } = await client.from('Military Forces').insert(payload).select().single())
    }

    if (err || res?.success === false) {
      setError(getErrorMessage(res, err))
      setSaving(false)
      return
    }

    const saved = getEntity(res)
    if (editTarget) {
      setMilitaries(prev => prev.map(m => m.id === saved.id ? saved : m))
    } else {
      setMilitaries(prev => [saved, ...prev])
    }
    setModalOpen(false)
    setSaving(false)
  }

  const handleDelete = async (m) => {
    if (!confirm('Delete this military record?')) return
    const { data: res, error: err } = await client.from('Military Forces').delete().eq('id', m.id).select().maybeSingle()
    if (!err && res?.success !== false) setMilitaries(prev => prev.filter(x => x.id !== m.id))
  }

  const f = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const activeMilitary = selectedKingdom
    ? militaries.find(m => getSchemaData(m).kingdom_id === selectedKingdom.id)
    : null

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#f0ecff]">Military</h1>
          <p className="text-[#9890b8] text-sm mt-1">
            {selectedKingdom ? `Armed forces of ${getSchemaData(selectedKingdom).name}` : 'Manage military forces'}
          </p>
        </div>
        <Button onClick={openCreate} disabled={!selectedKingdom}>
          <Plus className="w-4 h-4" /> Raise Army
        </Button>
      </div>

      {!selectedKingdom && (
        <Card>
          <CardContent className="py-10 text-center">
            <p className="text-3xl mb-2">⚔️</p>
            <p className="text-[#9890b8]">Select a kingdom to manage its military forces</p>
          </CardContent>
        </Card>
      )}

      {activeMilitary && (() => {
        const md = getSchemaData(activeMilitary)
        const winRate = md.wars_won + md.wars_lost > 0
          ? Math.round((md.wars_won / (md.wars_won + md.wars_lost)) * 100)
          : 0
        return (
          <div className="space-y-4">
            <h2 className="text-xs text-[#f0b830] uppercase tracking-widest font-semibold">Armed Forces Overview</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard icon="⚔️" label="Total Troops" value={(md.total_troops || 0).toLocaleString()} color="red" />
              <StatCard icon="💪" label="Military Strength" value={md.military_strength || 0} color="amber" />
              <StatCard icon="❤️" label="Morale" value={`${md.morale || 0}%`} color="green" />
              <StatCard icon="🏆" label="Win Rate" value={`${winRate}%`} sub={`${md.wars_won || 0}W / ${md.wars_lost || 0}L`} color="gold" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Troop composition */}
              <Card>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-xs text-[#f0b830] uppercase tracking-widest font-semibold">Troop Composition</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" onClick={() => openEdit(activeMilitary)}>
                        <Pencil className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="danger" onClick={() => handleDelete(activeMilitary)}>
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: '🗡️ Infantry', value: md.infantry || 0, total: md.total_troops || 1 },
                      { label: '🐴 Cavalry', value: md.cavalry || 0, total: md.total_troops || 1 },
                      { label: '🏹 Archers', value: md.archers || 0, total: md.total_troops || 1 },
                    ].map(t => (
                      <div key={t.label}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-[#f0ecff]">{t.label}</span>
                          <span className="text-[#9890b8]">{t.value.toLocaleString()}</span>
                        </div>
                        <div className="h-2 bg-[#09080e] rounded-full overflow-hidden border border-[#2e2650]">
                          <div
                            className="h-full bg-[#f0b830] rounded-full"
                            style={{ width: `${Math.min(100, (t.value / t.total) * 100)}%` }}
                          />
                        </div>
                      </div>
                    ))}
                    <div className="grid grid-cols-2 gap-3 mt-3">
                      <div className="bg-[#09080e] rounded-lg p-3 text-center">
                        <p className="text-[#f0b830] font-bold">{md.siege_weapons || 0}</p>
                        <p className="text-xs text-[#9890b8]">🏰 Siege Weapons</p>
                      </div>
                      <div className="bg-[#09080e] rounded-lg p-3 text-center">
                        <p className="text-[#f0b830] font-bold">{md.navy_ships || 0}</p>
                        <p className="text-xs text-[#9890b8]">⚓ Naval Ships</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Command & doctrine */}
              <Card>
                <CardContent className="p-5 space-y-4">
                  <p className="text-xs text-[#f0b830] uppercase tracking-widest font-semibold">Command & Doctrine</p>
                  {md.general_name && (
                    <div className="bg-[#09080e] rounded-lg p-3 flex items-center gap-3">
                      <span className="text-2xl">🎖️</span>
                      <div>
                        <p className="text-xs text-[#9890b8]">Commanding General</p>
                        <p className="text-[#f0ecff] font-semibold">{md.general_name}</p>
                      </div>
                    </div>
                  )}
                  <div className="bg-[#09080e] rounded-lg p-3 flex items-center gap-3">
                    <span className="text-2xl">{doctrineIcon[md.military_doctrine] || '⚔️'}</span>
                    <div>
                      <p className="text-xs text-[#9890b8]">Military Doctrine</p>
                      <p className="text-[#f0ecff] font-semibold capitalize">{md.military_doctrine}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant={trainingColor[md.training_level] || 'muted'} className="capitalize">
                      {md.training_level}
                    </Badge>
                    <span className="text-xs text-[#9890b8]">Training Level</span>
                  </div>
                  <ProgressBar label="Morale" value={md.morale || 0} max={100} color="green" />
                  <ProgressBar label="Military Strength" value={md.military_strength || 0} max={1000} color="amber" />
                  <div className="bg-[#09080e] rounded-lg p-3">
                    <p className="text-xs text-[#9890b8]">Monthly Upkeep</p>
                    <p className="text-[#f04040] font-bold">-{(md.upkeep_cost || 0).toLocaleString()} 🪙</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      })()}

      {/* All militaries */}
      {militaries.length > 0 && (
        <div>
          <h2 className="text-xs text-[#f0b830] uppercase tracking-widest font-semibold mb-4">All Military Forces</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {militaries.map(m => {
              const md = getSchemaData(m)
              return (
                <Card key={m.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{doctrineIcon[md.military_doctrine] || '⚔️'}</span>
                        <div>
                          <p className="text-[#f0ecff] font-semibold">
                            {md.general_name || 'Unknown General'} · Kingdom #{md.kingdom_id}
                          </p>
                          <p className="text-xs text-[#9890b8] capitalize">
                            {md.training_level} · {(md.total_troops || 0).toLocaleString()} troops
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="secondary" onClick={() => openEdit(m)}>
                          <Pencil className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="danger" onClick={() => handleDelete(m)}>
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
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editTarget ? 'Edit Military' : 'Raise Army'} size="lg">
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input label="General Name" value={form.general_name} onChange={f('general_name')} placeholder="e.g. Lord Commander Varis" />
            <Input label="Total Troops" type="number" min="0" value={form.total_troops} onChange={f('total_troops')} />
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Input label="Infantry" type="number" min="0" value={form.infantry} onChange={f('infantry')} />
            <Input label="Cavalry" type="number" min="0" value={form.cavalry} onChange={f('cavalry')} />
            <Input label="Archers" type="number" min="0" value={form.archers} onChange={f('archers')} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input label="Siege Weapons" type="number" min="0" value={form.siege_weapons} onChange={f('siege_weapons')} />
            <Input label="Naval Ships" type="number" min="0" value={form.navy_ships} onChange={f('navy_ships')} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Select label="Training Level" value={form.training_level} onChange={f('training_level')}>
              {TRAINING.map(t => <option key={t} value={t} className="bg-[#09080e] capitalize">{t}</option>)}
            </Select>
            <Select label="Military Doctrine" value={form.military_doctrine} onChange={f('military_doctrine')}>
              {DOCTRINES.map(d => <option key={d} value={d} className="bg-[#09080e] capitalize">{doctrineIcon[d]} {d}</option>)}
            </Select>
          </div>
          <div className="grid grid-cols-3 gap-4">
            <Input label="Military Strength" type="number" min="0" max="1000" value={form.military_strength} onChange={f('military_strength')} />
            <Input label="Morale (0-100)" type="number" min="0" max="100" value={form.morale} onChange={f('morale')} />
            <Input label="Upkeep Cost/mo" type="number" min="0" value={form.upkeep_cost} onChange={f('upkeep_cost')} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input label="Wars Won" type="number" min="0" value={form.wars_won} onChange={f('wars_won')} />
            <Input label="Wars Lost" type="number" min="0" value={form.wars_lost} onChange={f('wars_lost')} />
          </div>

          {error && <p className="text-[#f04040] text-sm">{error}</p>}
          <div className="flex gap-3 pt-2">
            <Button type="submit" disabled={saving} className="flex-1">
              {saving ? 'Saving...' : editTarget ? 'Save Changes' : 'Raise Army'}
            </Button>
            <Button type="button" variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
