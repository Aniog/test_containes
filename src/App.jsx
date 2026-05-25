import { useState, useEffect } from 'react'
import { Plus, Dumbbell, Loader2, AlertCircle, MessageSquare } from 'lucide-react'
import PlanCard from '@/components/fitness/PlanCard'
import PlanFormModal from '@/components/fitness/PlanFormModal'
import ContactForm from '@/components/contact/ContactForm'
import { fetchPlans, createPlan, updatePlan, deletePlan } from '@/api/fitnessPlan'

function App() {
  const [plans, setPlans] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [editingPlan, setEditingPlan] = useState(null)

  useEffect(() => {
    loadPlans()
  }, [])

  const loadPlans = async () => {
    setLoading(true)
    setError(null)
    try {
      const list = await fetchPlans()
      setPlans(list)
    } catch (err) {
      console.error('Failed to load plans:', err)
      setError('加载失败，请刷新重试。')
    } finally {
      setLoading(false)
    }
  }

  const handleOpenCreate = () => {
    setEditingPlan(null)
    setModalOpen(true)
  }

  const handleOpenEdit = (plan) => {
    setEditingPlan(plan)
    setModalOpen(true)
  }

  const handleSave = async (payload) => {
    try {
      if (editingPlan) {
        const updated = await updatePlan(editingPlan.id, payload)
        setPlans(prev => prev.map(p => p.id === editingPlan.id ? updated : p))
      } else {
        const created = await createPlan(payload)
        setPlans(prev => [created, ...prev])
      }
      setModalOpen(false)
    } catch (err) {
      console.error('Save failed:', err)
      alert('保存失败，请重试。')
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('确定要删除这个计划吗？')) return
    try {
      const result = await deletePlan(id)
      const deletedId = result?.id ?? id
      setPlans(prev => prev.filter(p => p.id !== deletedId))
    } catch (err) {
      console.error('Delete failed:', err)
      alert('删除失败，请重试。')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-5 h-5 text-blue-600" />
            <span className="font-semibold text-gray-900">健身计划</span>
          </div>
          <button
            onClick={handleOpenCreate}
            className="flex items-center gap-1.5 px-3 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            新建计划
          </button>
        </div>
      </header>

      <main className="max-w-2xl mx-auto px-4 py-6 space-y-10">
        {/* Plans Section */}
        <section>
          <h2 className="text-base font-semibold text-gray-800 mb-3">我的计划</h2>

          {loading && (
            <div className="flex justify-center py-12">
              <Loader2 className="w-6 h-6 text-blue-500 animate-spin" />
            </div>
          )}

          {!loading && error && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-100 rounded-lg px-4 py-3 text-sm">
              <AlertCircle className="w-4 h-4 shrink-0" />
              {error}
            </div>
          )}

          {!loading && !error && plans.length === 0 && (
            <div className="text-center py-12 text-gray-400">
              <Dumbbell className="w-8 h-8 mx-auto mb-2 opacity-40" />
              <p className="text-sm">还没有计划，点击「新建计划」开始吧</p>
            </div>
          )}

          {!loading && !error && plans.length > 0 && (
            <div className="space-y-3">
              {plans.map(plan => (
                <PlanCard
                  key={plan.id}
                  plan={plan}
                  onEdit={handleOpenEdit}
                  onDelete={handleDelete}
                />
              ))}
            </div>
          )}
        </section>

        {/* Contact Section */}
        <section className="border-t border-gray-200 pt-8">
          <div className="flex items-center gap-2 mb-4">
            <MessageSquare className="w-4 h-4 text-blue-600" />
            <h2 className="text-base font-semibold text-gray-800">联系我们</h2>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="text-center text-xs text-gray-400 py-6">
        © {new Date().getFullYear()} 健身计划系统
      </footer>

      {modalOpen && (
        <PlanFormModal
          plan={editingPlan}
          onClose={() => setModalOpen(false)}
          onSave={handleSave}
        />
      )}
    </div>
  )
}

export default App
