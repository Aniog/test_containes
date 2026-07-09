import { useState, useEffect, useCallback } from 'react'
import { Building2, Plus, Search, RefreshCw } from 'lucide-react'
import EnterpriseCard from '../components/enterprises/EnterpriseCard.jsx'
import EnterpriseForm from '../components/enterprises/EnterpriseForm.jsx'
import Modal from '../components/ui/Modal.jsx'
import ConfirmDialog from '../components/ui/ConfirmDialog.jsx'
import Toast from '../components/ui/Toast.jsx'
import { fetchEnterprises, createEnterprise, updateEnterprise, deleteEnterprise } from '../api/enterpriseInfos.js'

const STATUS_FILTERS = [
  { value: 'all', label: '全部' },
  { value: 'active', label: '活跃' },
  { value: 'pending', label: '待审核' },
  { value: 'inactive', label: '停用' },
]

export default function EnterprisesPage({ triggerAdd = 0 }) {
  const [enterprises, setEnterprises] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [deleting, setDeleting] = useState(false)

  const [search, setSearch] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')

  const [showAddModal, setShowAddModal] = useState(false)
  const [editTarget, setEditTarget] = useState(null)
  const [deleteTarget, setDeleteTarget] = useState(null)

  const [toast, setToast] = useState(null)

  const showToast = (message, type = 'success') => setToast({ message, type })

  const loadEnterprises = useCallback(async () => {
    setLoading(true)
    try {
      const { rows, total: t } = await fetchEnterprises({ limit: 50 })
      setEnterprises(rows)
      setTotal(t)
      console.log('[Enterprises] Loaded', rows.length, 'records')
    } catch (err) {
      console.error('[Enterprises] Load error:', err)
      showToast('加载数据失败：' + err.message, 'error')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadEnterprises()
  }, [loadEnterprises])

  // Open add modal when parent header button is clicked
  useEffect(() => {
    if (triggerAdd > 0) setShowAddModal(true)
  }, [triggerAdd])

  const handleCreate = async (data) => {
    setSubmitting(true)
    try {
      const created = await createEnterprise(data)
      console.log('[Enterprises] Created:', created)
      setEnterprises((prev) => [created, ...prev])
      setTotal((t) => t + 1)
      setShowAddModal(false)
      showToast('企业信息已成功保存！')
      await loadEnterprises()
    } catch (err) {
      console.error('[Enterprises] Create error:', err)
      showToast('保存失败：' + err.message, 'error')
    } finally {
      setSubmitting(false)
    }
  }

  const handleUpdate = async (data) => {
    if (!editTarget) return
    setSubmitting(true)
    try {
      const updated = await updateEnterprise(editTarget.id, data)
      console.log('[Enterprises] Updated:', updated)
      setEnterprises((prev) => prev.map((e) => (e.id === updated.id ? updated : e)))
      setEditTarget(null)
      showToast('企业信息已更新！')
      await loadEnterprises()
    } catch (err) {
      console.error('[Enterprises] Update error:', err)
      showToast('更新失败：' + err.message, 'error')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async () => {
    if (!deleteTarget) return
    setDeleting(true)
    try {
      await deleteEnterprise(deleteTarget.id)
      console.log('[Enterprises] Deleted:', deleteTarget.id)
      setEnterprises((prev) => prev.filter((e) => e.id !== deleteTarget.id))
      setTotal((t) => t - 1)
      setDeleteTarget(null)
      showToast('企业信息已删除')
      await loadEnterprises()
    } catch (err) {
      console.error('[Enterprises] Delete error:', err)
      showToast('删除失败：' + err.message, 'error')
    } finally {
      setDeleting(false)
    }
  }

  const filtered = enterprises.filter((e) => {
    const d = e.data || {}
    const q = search.toLowerCase()
    const matchSearch = !q || [d.company_name, d.contact_email, d.industry, d.city, d.contact_person]
      .some((v) => v && v.toLowerCase().includes(q))
    const matchStatus = statusFilter === 'all' || d.status === statusFilter
    return matchSearch && matchStatus
  })

  return (
    <div className="flex-1">
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: '总企业数', value: total, color: 'text-indigo-600' },
            { label: '活跃企业', value: enterprises.filter(e => e.data?.status === 'active').length, color: 'text-emerald-600' },
            { label: '待审核', value: enterprises.filter(e => (e.data?.status ?? 'pending') === 'pending').length, color: 'text-amber-600' },
            { label: '停用企业', value: enterprises.filter(e => e.data?.status === 'inactive').length, color: 'text-slate-500' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-2xl border border-slate-200 p-4 shadow-sm">
              <p className="text-xs text-slate-500 mb-1">{stat.label}</p>
              <p className={`text-2xl font-bold ${stat.color}`}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="搜索企业名称、行业、城市..."
              className="w-full pl-9 pr-4 py-2 rounded-lg border border-slate-200 bg-white text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {STATUS_FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setStatusFilter(f.value)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition ${
                  statusFilter === f.value
                    ? 'bg-indigo-500 text-white'
                    : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
              >
                {f.label}
              </button>
            ))}
            <button
              onClick={loadEnterprises}
              className="px-3 py-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 transition"
              title="刷新"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex items-center justify-center py-24">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin" />
              <p className="text-sm text-slate-500">加载中...</p>
            </div>
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-4">
            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center">
              <Building2 className="w-8 h-8 text-slate-300" />
            </div>
            <div className="text-center">
              <p className="text-base font-medium text-slate-700">
                {search || statusFilter !== 'all' ? '没有找到匹配的企业' : '暂无企业信息'}
              </p>
              <p className="text-sm text-slate-400 mt-1">
                {search || statusFilter !== 'all' ? '请尝试调整搜索条件' : '点击右上角"添加企业"开始收集信息'}
              </p>
            </div>
            {!search && statusFilter === 'all' && (
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition"
              >
                <Plus className="w-4 h-4" />
                添加第一个企业
              </button>
            )}
          </div>
        ) : (
          <>
            <p className="text-sm text-slate-500 mb-4">
              共 <span className="font-medium text-slate-700">{filtered.length}</span> 条记录
              {(search || statusFilter !== 'all') && total !== filtered.length && `（共 ${total} 条）`}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((enterprise) => (
                <EnterpriseCard
                  key={enterprise.id}
                  enterprise={enterprise}
                  onEdit={setEditTarget}
                  onDelete={setDeleteTarget}
                />
              ))}
            </div>
          </>
        )}
      </main>

      {/* Add Modal */}
      {showAddModal && (
        <Modal title="添加企业信息" onClose={() => setShowAddModal(false)}>
          <EnterpriseForm
            onSubmit={handleCreate}
            onCancel={() => setShowAddModal(false)}
            loading={submitting}
          />
        </Modal>
      )}

      {/* Edit Modal */}
      {editTarget && (
        <Modal title="编辑企业信息" onClose={() => setEditTarget(null)}>
          <EnterpriseForm
            initial={editTarget.data || {}}
            onSubmit={handleUpdate}
            onCancel={() => setEditTarget(null)}
            loading={submitting}
          />
        </Modal>
      )}

      {/* Delete Confirm */}
      {deleteTarget && (
        <ConfirmDialog
          message={`确定要删除企业「${deleteTarget.data?.company_name || ''}」的信息吗？此操作不可撤销。`}
          onConfirm={handleDelete}
          onCancel={() => setDeleteTarget(null)}
          loading={deleting}
        />
      )}

      {/* Toast */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() => setToast(null)}
        />
      )}
    </div>
  )
}
