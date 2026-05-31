import { useState, useEffect, useCallback } from 'react'
import { client, getRows, getEntity, getSchemaData, getErrorMessage } from '@/api/db'
import { Card, CardContent } from '@/components/ui/Card'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import { Modal } from '@/components/ui/Modal'
import { Input, Select } from '@/components/ui/FormFields'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { StatCard } from '@/components/ui/StatCard'
import { Pencil, Trash2, Plus, TrendingUp, TrendingDown } from 'lucide-react'

const RESOURCES = ['grain', 'iron', 'timber', 'stone', 'gold', 'spices', 'silk', 'horses', 'fish', 'coal']
const POLICIES = ['free_trade', 'mercantilism', 'protectionism', 'isolationism', 'expansionist']

const resourceEmoji = {
  grain: '🌾', iron: '⚙️', timber: '🪵', stone: '🪨', gold: '💰',
  spices: '🌶️', silk: '🧵', horses: '🐴', fish: '🐟', coal: '⛏️', none: '—',
}

const policyColor = {
  free_trade: 'green', mercantilism: 'gold', protectionism: 'amber',
  isolationism: 'muted', expansionist: 'purple',
}

const defaultForm = {
  kingdom_id: '', treasury: 5000, income: 500, expenses: 300,
  trade_routes: 3, primary_resource: 'grain', secondary_resource: 'none',
  economic_policy: 'free_trade', gdp: 10000, debt: 0, inflation: 5, prosperity: 60,
}

export default function EconomyPage({ selectedKingdom }) {
  const [economies, setEconomies] = useState([])
  const [loading, setLoading] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [editTarget, setEditTarget] = useState(null)
  const [form, setForm] = useState(defaultForm)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState(null)

  const fetchEconomies = useCallback(async () => {
    setLoading(true)
    const { data: res, error: err } = await client
      .from('Economies')
      .select('*')
      .order('created_at', { ascending: false })
      .range(0, 49)
    if (!err) setEconomies(getRows(res))
    setLoading(false)
  }, [])

  useEffect(() => { fetchEconomies() }, [fetchEconomies])

  const openCreate = () => {
    setEditTarget(null)
    setForm({ ...defaultForm, kingdom_id: selectedKingdom?.id || '' })
    setError(null)
    setModalOpen(true)
  }

  const openEdit = (ec) => {
    setEditTarget(ec)
    const ed = getSchemaData(ec)
    setForm({ ...defaultForm, ...ed, kingdom_id: ed.kingdom_id || selectedKingdom?.id || '' })
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
        treasury: Number(form.treasury),
        income: Number(form.income),
        expenses: Number(form.expenses),
        trade_routes: Number(form.trade_routes),
        primary_resource: form.primary_resource,
        secondary_resource: form.secondary_resource,
        economic_policy: form.economic_policy,
        gdp: Number(form.gdp),
        debt: Number(form.debt),
        inflation: Number(form.inflation),
        prosperity: Number(form.prosperity),
      },
    }

    let res, err
    if (editTarget) {
      ;({ data: res, error: err } = await client.from('Economies').update(payload).eq('id', editTarget.id).select().single())
    } else {
      ;({ data: res, error: err } = await client.from('Economies').insert(payload).select().single())
    }

    if (err || res?.success === false) {
      setError(getErrorMessage(res, err))
      setSaving(false)
      return
    }

    const saved = getEntity(res)
    if (editTarget) {
      setEconomies(prev => prev.map(ec => ec.id === saved.id ? saved : ec))
    } else {
      setEconomies(prev => [saved, ...prev])
    }
    setModalOpen(false)
    setSaving(false)
  }

  const handleDelete = async (ec) => {
    if (!confirm('Delete this economy record?')) return
    const { data: res, error: err } = await client.from('Economies').delete().eq('id', ec.id).select().maybeSingle()
    if (!err && res?.success !== false) setEconomies(prev => prev.filter(x => x.id !== ec.id))
  }

  const f = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const activeEconomy = selectedKingdom
    ? economies.find(ec => getSchemaData(ec).kingdom_id === selectedKingdom.id)
    : null

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#f0ecff]">Economy</h1>
          <p className="text-[#9890b8] text-sm mt-1">
            {selectedKingdom ? `Treasury of ${getSchemaData(selectedKingdom).name}` : 'Manage kingdom economies'}
          </p>
        </div>
        <Button onClick={openCreate} disabled={!selectedKingdom}>
          <Plus className="w-4 h-4" /> Setup Economy
        </Button>
      </div>

      {!selectedKingdom && (
        <Card>
          <CardContent className="py-10 text-center">
            <p className="text-3xl mb-2">💰</p>
            <p className="text-[#9890b8]">Select a kingdom to manage its economy</p>
          </CardContent>
        </Card>
      )}

      {activeEconomy && (() => {
        const ed = getSchemaData(activeEconomy)
        const netIncome = (ed.income || 0) - (ed.expenses || 0)
        return (
          <div className="space-y-4">
            <h2 className="text-xs text-[#f0b830] uppercase tracking-widest font-semibold">Treasury Overview</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <StatCard icon="🏦" label="Treasury" value={`${(ed.treasury || 0).toLocaleString()} 🪙`} color="gold" />
              <StatCard
                icon={netIncome >= 0 ? '📈' : '📉'}
                label="Net Income"
                value={`${netIncome >= 0 ? '+' : ''}${netIncome.toLocaleString()} 🪙/mo`}
                color={netIncome >= 0 ? 'green' : 'red'}
              />
              <StatCard icon="🛤️" label="Trade Routes" value={ed.trade_routes || 0} color="blue" />
              <StatCard icon="📊" label="Prosperity" value={`${ed.prosperity || 0}%`} color="purple" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-5 space-y-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-[#f0b830] uppercase tracking-widest font-semibold">Financial Health</p>
                    <div className="flex gap-2">
                      <Button size="sm" variant="secondary" onClick={() => openEdit(activeEconomy)}>
                        <Pencil className="w-3 h-3" />
                      </Button>
                      <Button size="sm" variant="danger" onClick={() => handleDelete(activeEconomy)}>
                        <Trash2 className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  <ProgressBar label="Prosperity Index" value={ed.prosperity || 0} max={100} color="gold" />
                  <ProgressBar label="Inflation" value={ed.inflation || 0} max={100} color="red" />
                  <div className="grid grid-cols-2 gap-3 mt-2">
                    <div className="bg-[#09080e] rounded-lg p-3">
                      <p className="text-xs text-[#9890b8]">Monthly Income</p>
                      <p className="text-[#34d399] font-bold">+{(ed.income || 0).toLocaleString()} 🪙</p>
                    </div>
                    <div className="bg-[#09080e] rounded-lg p-3">
                      <p className="text-xs text-[#9890b8]">Monthly Expenses</p>
                      <p className="text-[#f04040] font-bold">-{(ed.expenses || 0).toLocaleString()} 🪙</p>
                    </div>
                    <div className="bg-[#09080e] rounded-lg p-3">
                      <p className="text-xs text-[#9890b8]">GDP</p>
                      <p className="text-[#f0ecff] font-bold">{(ed.gdp || 0).toLocaleString()} 🪙</p>
                    </div>
                    <div className="bg-[#09080e] rounded-lg p-3">
                      <p className="text-xs text-[#9890b8]">Debt</p>
                      <p className="text-[#f09030] font-bold">{(ed.debt || 0).toLocaleString()} 🪙</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-5 space-y-4">
                  <p className="text-xs text-[#f0b830] uppercase tracking-widest font-semibold">Resources & Policy</p>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between bg-[#09080e] rounded-lg p-3">
                      <div>
                        <p className="text-xs text-[#9890b8]">Primary Resource</p>
                        <p className="text-[#f0ecff] font-semibold capitalize">
                          {resourceEmoji[ed.primary_resource]} {ed.primary_resource}
                        </p>
                      </div>
                      <Badge variant="gold">Primary</Badge>
                    </div>
                    {ed.secondary_resource && ed.secondary_resource !== 'none' && (
                      <div className="flex items-center justify-between bg-[#09080e] rounded-lg p-3">
                        <div>
                          <p className="text-xs text-[#9890b8]">Secondary Resource</p>
                          <p className="text-[#f0ecff] font-semibold capitalize">
                            {resourceEmoji[ed.secondary_resource]} {ed.secondary_resource}
                          </p>
                        </div>
                        <Badge variant="muted">Secondary</Badge>
                      </div>
                    )}
                    <div className="flex items-center justify-between bg-[#09080e] rounded-lg p-3">
                      <div>
                        <p className="text-xs text-[#9890b8]">Economic Policy</p>
                        <p className="text-[#f0ecff] font-semibold capitalize">
                          {ed.economic_policy?.replace('_', ' ')}
                        </p>
                      </div>
                      <Badge variant={policyColor[ed.economic_policy] || 'muted'}>Active</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )
      })()}

      {/* All economies list */}
      {economies.length > 0 && (
        <div>
          <h2 className="text-xs text-[#f0b830] uppercase tracking-widest font-semibold mb-4">All Economies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {economies.map(ec => {
              const ed = getSchemaData(ec)
              const net = (ed.income || 0) - (ed.expenses || 0)
              return (
                <Card key={ec.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[#f0ecff] font-semibold">
                          {resourceEmoji[ed.primary_resource]} Kingdom #{ed.kingdom_id}
                        </p>
                        <p className="text-xs text-[#9890b8] capitalize">
                          {ed.economic_policy?.replace('_', ' ')} · Treasury: {(ed.treasury || 0).toLocaleString()} 🪙
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className={`text-sm font-bold ${net >= 0 ? 'text-[#34d399]' : 'text-[#f04040]'}`}>
                          {net >= 0 ? '+' : ''}{net}/mo
                        </span>
                        <Button size="sm" variant="secondary" onClick={() => openEdit(ec)}>
                          <Pencil className="w-3 h-3" />
                        </Button>
                        <Button size="sm" variant="danger" onClick={() => handleDelete(ec)}>
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
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} title={editTarget ? 'Edit Economy' : 'Setup Economy'} size="lg">
        <form onSubmit={handleSave} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input label="Treasury (gold)" type="number" min="0" value={form.treasury} onChange={f('treasury')} />
            <Input label="Monthly Income" type="number" min="0" value={form.income} onChange={f('income')} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input label="Monthly Expenses" type="number" min="0" value={form.expenses} onChange={f('expenses')} />
            <Input label="Trade Routes" type="number" min="0" value={form.trade_routes} onChange={f('trade_routes')} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Select label="Primary Resource" value={form.primary_resource} onChange={f('primary_resource')}>
              {RESOURCES.map(r => <option key={r} value={r} className="bg-[#09080e] capitalize">{resourceEmoji[r]} {r}</option>)}
            </Select>
            <Select label="Secondary Resource" value={form.secondary_resource} onChange={f('secondary_resource')}>
              <option value="none" className="bg-[#09080e]">— None</option>
              {RESOURCES.map(r => <option key={r} value={r} className="bg-[#09080e] capitalize">{resourceEmoji[r]} {r}</option>)}
            </Select>
          </div>
          <Select label="Economic Policy" value={form.economic_policy} onChange={f('economic_policy')}>
            {POLICIES.map(p => <option key={p} value={p} className="bg-[#09080e] capitalize">{p.replace('_', ' ')}</option>)}
          </Select>
          <div className="grid grid-cols-2 gap-4">
            <Input label="GDP" type="number" min="0" value={form.gdp} onChange={f('gdp')} />
            <Input label="Debt" type="number" min="0" value={form.debt} onChange={f('debt')} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input label="Inflation %" type="number" min="0" max="100" value={form.inflation} onChange={f('inflation')} />
            <Input label="Prosperity (0-100)" type="number" min="0" max="100" value={form.prosperity} onChange={f('prosperity')} />
          </div>

          {error && <p className="text-[#f04040] text-sm">{error}</p>}
          <div className="flex gap-3 pt-2">
            <Button type="submit" disabled={saving} className="flex-1">
              {saving ? 'Saving...' : editTarget ? 'Save Changes' : 'Setup Economy'}
            </Button>
            <Button type="button" variant="secondary" onClick={() => setModalOpen(false)}>Cancel</Button>
          </div>
        </form>
      </Modal>
    </div>
  )
}
