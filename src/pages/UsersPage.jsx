import { useState, useEffect, useCallback } from 'react'
import { Users, Plus, Search, Pencil, Trash2, Mail, Phone, Building2, MapPin, RefreshCw, Briefcase } from 'lucide-react'
import Button from '../components/ui/Button.jsx'
import Badge from '../components/ui/Badge.jsx'
import { toast } from '../components/ui/Toast.jsx'
import { fetchProfiles, deleteProfile } from '../api/profiles.js'
import { fetchCompanies } from '../api/companies.js'
import UserProfileFormModal from '../components/users/UserProfileFormModal.jsx'

const STATUS_COLOR = { active: 'green', inactive: 'gray' }
const STATUS_LABEL = { active: '活跃', inactive: '停用' }

function Avatar({ name }) {
  const initials = (name || '?').split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase()
  const colors = ['bg-indigo-100 text-indigo-700', 'bg-purple-100 text-purple-700', 'bg-pink-100 text-pink-700', 'bg-blue-100 text-blue-700', 'bg-teal-100 text-teal-700']
  const color = colors[(name || '').charCodeAt(0) % colors.length]
  return (
    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${color}`}>
      {initials}
    </div>
  )
}

export default function UsersPage() {
  const [profiles, setProfiles] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [filterCompany, setFilterCompany] = useState('')
  const [companies, setCompanies] = useState([])
  const [companyMap, setCompanyMap] = useState({})
  const [modalOpen, setModalOpen] = useState(false)
  const [editTarget, setEditTarget] = useState(null)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    fetchCompanies({ limit: 100 }).then((r) => {
      setCompanies(r.list)
      const map = {}
      r.list.forEach((c) => { map[c.id] = c.data?.name || `企业 #${c.id}` })
      setCompanyMap(map)
    }).catch(() => {})
  }, [])

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const result = await fetchProfiles({ search, companyId: filterCompany })
      setProfiles(result.list)
      setTotal(result.total)
    } catch (err) {
      toast(err.message || '加载失败', 'error')
    } finally {
      setLoading(false)
    }
  }, [search, filterCompany])

  useEffect(() => { load() }, [load])

  const handleSaved = (saved, isEdit) => {
    if (isEdit) {
      setProfiles((prev) => prev.map((p) => (p.id === saved.id ? saved : p)))
    } else {
      load()
    }
  }

  const handleDelete = async () => {
    if (!deleteTarget) return
    setDeleting(true)
    try {
      await deleteProfile(deleteTarget.id)
      setProfiles((prev) => prev.filter((p) => p.id !== deleteTarget.id))
      toast('用户已删除', 'success')
      setDeleteTarget(null)
    } catch (err) {
      toast(err.message || '删除失败', 'error')
    } finally {
      setDeleting(false)
    }
  }

  const companyFilterOptions = [{ value: '', label: '全部企业' }, ...companies.map((c) => ({ value: String(c.id), label: c.data?.name || `企业 #${c.id}` }))]

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Users size={24} className="text-indigo-600" />
            用户管理
          </h1>
          <p className="text-sm text-gray-500 mt-1">共 {total} 位用户</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={load} className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors" title="刷新">
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          </button>
          <Button onClick={() => { setEditTarget(null); setModalOpen(true) }}>
            <Plus size={16} /> 新建用户
          </Button>
        </div>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1 max-w-sm">
          <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="搜索用户姓名…"
            className="w-full pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
        <select
          value={filterCompany}
          onChange={(e) => setFilterCompany(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        >
          {companyFilterOptions.map((o) => <option key={o.value} value={o.value}>{o.label}</option>)}
        </select>
      </div>

      {/* List */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 animate-pulse">
              <div className="flex gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gray-200" />
                <div className="flex-1">
                  <div className="h-4 bg-gray-200 rounded w-1/2 mb-2" />
                  <div className="h-3 bg-gray-100 rounded w-2/3" />
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : profiles.length === 0 ? (
        <div className="text-center py-20">
          <Users size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg font-medium">暂无用户数据</p>
          <p className="text-gray-400 text-sm mt-1">点击「新建用户」添加第一位用户</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {profiles.map((profile) => {
            const d = profile.data || {}
            const companyName = d.company_id ? companyMap[d.company_id] : null
            return (
              <div key={profile.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <Avatar name={d.name} />
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm">{d.name}</h3>
                      {d.job_title && <p className="text-xs text-gray-500 mt-0.5">{d.job_title}</p>}
                    </div>
                  </div>
                  <Badge color={STATUS_COLOR[d.status] || 'gray'}>{STATUS_LABEL[d.status] || d.status}</Badge>
                </div>

                <div className="space-y-1.5 mb-3">
                  {d.email && (
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Mail size={13} className="text-gray-400" />
                      <span className="truncate">{d.email}</span>
                    </div>
                  )}
                  {d.phone && (
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Phone size={13} className="text-gray-400" />
                      <span>{d.phone}</span>
                    </div>
                  )}
                  {d.location && (
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <MapPin size={13} className="text-gray-400" />
                      <span>{d.location}</span>
                    </div>
                  )}
                  {companyName && (
                    <div className="flex items-center gap-2 text-xs text-indigo-600">
                      <Building2 size={13} className="text-indigo-400" />
                      <span className="font-medium">{companyName}</span>
                    </div>
                  )}
                  {d.department && (
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Briefcase size={13} className="text-gray-400" />
                      <span>{d.department}</span>
                    </div>
                  )}
                </div>

                {d.demands && (
                  <div className="bg-amber-50 border border-amber-100 rounded-lg px-3 py-2 mb-3">
                    <p className="text-xs text-amber-700 font-medium mb-0.5">需求</p>
                    <p className="text-xs text-amber-800 line-clamp-2">{d.demands}</p>
                  </div>
                )}

                <div className="flex gap-2 pt-3 border-t border-gray-100">
                  <button
                    onClick={() => { setEditTarget(profile); setModalOpen(true) }}
                    className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-indigo-600 transition-colors px-2 py-1 rounded hover:bg-indigo-50"
                  >
                    <Pencil size={13} /> 编辑
                  </button>
                  <button
                    onClick={() => setDeleteTarget(profile)}
                    className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-red-600 transition-colors px-2 py-1 rounded hover:bg-red-50"
                  >
                    <Trash2 size={13} /> 删除
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      )}

      {/* Create/Edit Modal */}
      <UserProfileFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        profile={editTarget}
        onSaved={handleSaved}
      />

      {/* Delete Confirm */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setDeleteTarget(null)} />
          <div className="relative bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">确认删除</h3>
            <p className="text-sm text-gray-600 mb-6">
              确定要删除用户「<span className="font-medium text-gray-900">{deleteTarget.data?.name}</span>」吗？此操作不可撤销。
            </p>
            <div className="flex justify-end gap-3">
              <Button variant="secondary" onClick={() => setDeleteTarget(null)} disabled={deleting}>取消</Button>
              <Button variant="danger" onClick={handleDelete} disabled={deleting}>{deleting ? '删除中…' : '确认删除'}</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
