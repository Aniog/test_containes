import { useState, useEffect, useCallback } from 'react'
import { client, getRows, getEntity } from '../api/fitnessClient'
import PlanList from './PlanList'
import PlanDetail from './PlanDetail'

export default function FitnessPlanner() {
  const [plans, setPlans] = useState([])
  const [selectedPlanId, setSelectedPlanId] = useState(null)
  const [loading, setLoading] = useState(true)

  const fetchPlans = useCallback(async () => {
    setLoading(true)
    const { data: res, error } = await client
      .from('Fitness Plans')
      .select('*')
      .order('created_at', { ascending: false })
    if (error) console.error('fetchPlans error', error)
    const rows = getRows(res)
    setPlans(rows)
    setLoading(false)
    return rows
  }, [])

  useEffect(() => { fetchPlans() }, [fetchPlans])

  const handlePlanCreated = async (planName, description) => {
    const { data: res, error } = await client
      .from('Fitness Plans')
      .insert({ data: { plan_name: planName, description, training_days: [] } })
      .select()
      .single()
    if (error) { console.error(error); return }
    const created = getEntity(res)
    if (created) {
      setPlans((prev) => [created, ...prev])
      setSelectedPlanId(created.id)
    }
  }

  const handlePlanDeleted = (planId) => {
    setPlans((prev) => prev.filter((p) => p.id !== planId))
    if (selectedPlanId === planId) setSelectedPlanId(null)
  }

  // Called by PlanDetail whenever training_days changes
  const handlePlanUpdated = (updatedPlan) => {
    setPlans((prev) => prev.map((p) => p.id === updatedPlan.id ? updatedPlan : p))
  }

  const selectedPlan = plans.find((p) => p.id === selectedPlanId) ?? null

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <h1 className="text-xl font-bold text-gray-900">健身计划</h1>
      </header>

      <div className="max-w-5xl mx-auto p-4 flex flex-col md:flex-row gap-4">
        <div className="w-full md:w-64 shrink-0">
          <PlanList
            plans={plans}
            loading={loading}
            selectedPlanId={selectedPlanId}
            onSelect={setSelectedPlanId}
            onCreated={handlePlanCreated}
            onDeleted={handlePlanDeleted}
          />
        </div>

        <div className="flex-1 min-w-0">
          {selectedPlan ? (
            <PlanDetail plan={selectedPlan} onPlanUpdated={handlePlanUpdated} />
          ) : (
            <div className="bg-white rounded-lg border border-gray-200 p-8 text-center text-gray-400 text-sm">
              {loading ? '加载中…' : '请从左侧选择或新建一个计划'}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
