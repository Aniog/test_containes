import { useState, useEffect, useCallback } from 'react'
import { Users, Plus, Search, RefreshCw } from 'lucide-react'
import ProfileCard from '../components/profiles/ProfileCard.jsx'
import ProfileForm from '../components/profiles/ProfileForm.jsx'
import Modal from '../components/ui/Modal.jsx'
import ConfirmDialog from '../components/ui/ConfirmDialog.jsx'
import Toast from '../components/ui/Toast.jsx'
import { fetchProfiles, createProfile, updateProfile, deleteProfile } from '../api/userProfiles.js'

const STATUS_FILTERS = [
  { value: 'all', label: '全部' },
  { value: 'active', label: '活跃' },
  { value: 'pending', label: '待审核' },
  { value: 'inactive', label: '停用' },
]

export default function ProfilesPage() {
  const [profiles, setProfiles] = useState([])
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

  const loadProfiles = useCallback(async () => {
    setLoading(true)
    try {
      const { rows, total: t } = await fetchProfiles({ limit: 50 })
      setProfiles(rows)
      setTotal(t)
      console.log('[Profiles] Loaded', rows.length, 'profiles')
    } catch (err) {
      console.error('[Profiles] Load error:', err)
      showToast('加载数据失败：' + err.message, 'error')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadProfiles()
  }, [loadProfiles])

  const handleCreate = async (data) => {
    setSubmitting(true)
    try {
      const created = await createProfile(data)
      console.log('[Profiles] Created:', created)
      setProfiles((prev) => [created, ...prev])
      setTotal((t) => t + 1)
      setShowAddModal(false)
      showToast('用户信息已成功保存！')
      await loadProfiles()
    } catch (err) {
      console.error('[Profiles] Create error:', err)
      showToast('保存失败：' + err.message, 'error')
    } finally {
      setSubmitting(false)
    }
  }

  const handleUpdate = async (data) => {
    if (!editTarget) return
    setSubmitting(true)
    try {
      const updated = await updateProfile(editTarget.id, data)
      console.log('[Profiles] Updated:', updated)
      setProfiles((prev) => prev.map((p) => (p.id === updated.id ? updated : p)))
      setEditTarget(null)
      showToast('用户信息已更新！')
      await loadProfiles()
    } catch (err) {
      console.error('[Profiles] Update error:', err)
      showToast('更新失败：' + err.message, 'error')
    } finally {
      setSubmitting(false)
    }
  }

  const handleDelete = async () => {
    if (!deleteTarget) return
    setDeleting(true)
    try {
      await deleteProfile(deleteTarget.id)
      console.log('[Profiles] Deleted:', deleteTarget.id)
      setProfiles((prev) => prev.filter((p) => p.id !== deleteTarget.id))
      setTotal((t) => t - 1)
      setDeleteTarget(null)
      showToast('用户信息已删除')
      await loadProfiles()
    } catch (err) {
      console.error('[Profiles] Delete error:', err)
      showToast('删除失败：' + err.message, 'error')
    } finally {
      setDeleting(false)
    }
  }

  const filtered = profiles.filter((p) => {
    const fields = p.data || {}
    const q = search.toLowerCase()
    const matchSearch = !q || [fields.name, fields.email, fields.company, fields.job_title]
      .some((v) => v && v.toLowerCase().includes(q))
    const matchStatus = statusFilter === 'all' || fields.status === statusFilter
    return matchSearch && matchStatus
  })

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-indigo-500 flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900 leading-tight">用户信息管理</h1>
              <p className="text-xs text-slate-400 hidden sm:block">收集并管理用户个人信息</p>
            </div>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">添加用户</span>
            <span className="sm:hidden">添加</span>
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: '总用户数', value: total, color: 'text-indigo-600' },
            { label: '活跃用户', value: profiles.filter(p => (p.data?.status || 'active') === 'active').length, color: 'text-emerald-600' },
            { label: '待审核', value: profiles.filter(p => p.data?.status === 'pending').length, color: 'text-amber-600' },
            { label: '停用用户', value: profiles.filter(p => p.data?.status === 'inactive').length, color: 'text-slate-500' },
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
              placeholder="搜索姓名、邮箱、公司..."
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
              onClick={loadProfiles}
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
              <Users className="w-8 h-8 text-slate-300" />
            </div>
            <div className="text-center">
              <p className="text-base font-medium text-slate-700">
                {search || statusFilter !== 'all' ? '没有找到匹配的用户' : '暂无用户信息'}
              </p>
              <p className="text-sm text-slate-400 mt-1">
                {search || statusFilter !== 'all' ? '请尝试调整搜索条件' : '点击右上角"添加用户"开始收集信息'}
              </p>
            </div>
            {!search && statusFilter === 'all' && (
              <button
                onClick={() => setShowAddModal(true)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition"
              >
                <Plus className="w-4 h-4" />
                添加第一个用户
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
              {filtered.map((profile) => (
                <ProfileCard
                  key={profile.id}
                  profile={profile}
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
        <Modal title="添加用户信息" onClose={() => setShowAddModal(false)}>
          <ProfileForm
            onSubmit={handleCreate}
            onCancel={() => setShowAddModal(false)}
            loading={submitting}
          />
        </Modal>
      )}

      {/* Edit Modal */}
      {editTarget && (
        <Modal title="编辑用户信息" onClose={() => setEditTarget(null)}>
          <ProfileForm
            initialData={editTarget.data || {}}
            onSubmit={handleUpdate}
            onCancel={() => setEditTarget(null)}
            loading={submitting}
          />
        </Modal>
      )}

      {/* Delete Confirm */}
      {deleteTarget && (
        <ConfirmDialog
          message={`确定要删除用户「${deleteTarget.data?.name || ''}」的信息吗？此操作不可撤销。`}
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
