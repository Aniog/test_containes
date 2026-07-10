import { useState, useEffect, useCallback } from 'react'
import { Building2, Plus, Search, Pencil, Trash2, Globe, Mail, Phone, Users, RefreshCw } from 'lucide-react'
import Button from '../components/ui/Button.jsx'
import Badge from '../components/ui/Badge.jsx'
import { toast } from '../components/ui/Toast.jsx'
import { fetchCompanies, deleteCompany } from '../api/companies.js'
import CompanyFormModal from '../components/companies/CompanyFormModal.jsx'

const STATUS_COLOR = { active: 'green', inactive: 'gray', archived: 'amber' }
const STATUS_LABEL = { active: '活跃', inactive: '停用', archived: '已归档' }

export default function CompaniesPage() {
  const [companies, setCompanies] = useState([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [modalOpen, setModalOpen] = useState(false)
  const [editTarget, setEditTarget] = useState(null)
  const [deleteTarget, setDeleteTarget] = useState(null)
  const [deleting, setDeleting] = useState(false)

  const load = useCallback(async () => {
    setLoading(true)
    try {
      const result = await fetchCompanies({ search })
      setCompanies(result.list)
      setTotal(result.total)
    } catch (err) {
      toast(err.message || '加载失败', 'error')
    } finally {
      setLoading(false)
    }
  }, [search])

  useEffect(() => { load() }, [load])

  const handleSaved = (saved, isEdit) => {
    if (isEdit) {
      setCompanies((prev) => prev.map((c) => (c.id === saved.id ? saved : c)))
    } else {
      load()
    }
  }

  const handleDelete = async () => {
    if (!deleteTarget) return
    setDeleting(true)
    try {
      await deleteCompany(deleteTarget.id)
      setCompanies((prev) => prev.filter((c) => c.id !== deleteTarget.id))
      toast('企业已删除', 'success')
      setDeleteTarget(null)
    } catch (err) {
      toast(err.message || '删除失败', 'error')
    } finally {
      setDeleting(false)
    }
  }

  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <Building2 size={24} className="text-indigo-600" />
            企业管理
          </h1>
          <p className="text-sm text-gray-500 mt-1">共 {total} 家企业</p>
        </div>
        <div className="flex items-center gap-3">
          <button onClick={load} className="p-2 rounded-lg hover:bg-gray-100 text-gray-500 transition-colors" title="刷新">
            <RefreshCw size={16} className={loading ? 'animate-spin' : ''} />
          </button>
          <Button onClick={() => { setEditTarget(null); setModalOpen(true) }}>
            <Plus size={16} /> 新建企业
          </Button>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="搜索企业名称…"
          className="w-full max-w-sm pl-9 pr-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      {/* List */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl p-5 animate-pulse">
              <div className="h-5 bg-gray-200 rounded w-2/3 mb-3" />
              <div className="h-4 bg-gray-100 rounded w-1/2 mb-2" />
              <div className="h-4 bg-gray-100 rounded w-3/4" />
            </div>
          ))}
        </div>
      ) : companies.length === 0 ? (
        <div className="text-center py-20">
          <Building2 size={48} className="mx-auto text-gray-300 mb-4" />
          <p className="text-gray-500 text-lg font-medium">暂无企业数据</p>
          <p className="text-gray-400 text-sm mt-1">点击「新建企业」添加第一家企业</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {companies.map((company) => {
            const d = company.data || {}
            return (
              <div key={company.id} className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition-shadow group">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
                      <Building2 size={20} className="text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm leading-tight">{d.name}</h3>
                      {d.industry && <p className="text-xs text-gray-500 mt-0.5">{d.industry}</p>}
                    </div>
                  </div>
                  <Badge color={STATUS_COLOR[d.status] || 'gray'}>{STATUS_LABEL[d.status] || d.status}</Badge>
                </div>

                <div className="space-y-1.5 mb-4">
                  {d.size && (
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Users size={13} className="text-gray-400" />
                      <span>{d.size} 人</span>
                    </div>
                  )}
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
                  {d.website && (
                    <div className="flex items-center gap-2 text-xs text-gray-500">
                      <Globe size={13} className="text-gray-400" />
                      <a href={d.website} target="_blank" rel="noreferrer" className="text-indigo-600 hover:underline truncate">{d.website}</a>
                    </div>
                  )}
                </div>

                {d.description && (
                  <p className="text-xs text-gray-500 line-clamp-2 mb-4">{d.description}</p>
                )}

                <div className="flex gap-2 pt-3 border-t border-gray-100">
                  <button
                    onClick={() => { setEditTarget(company); setModalOpen(true) }}
                    className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-indigo-600 transition-colors px-2 py-1 rounded hover:bg-indigo-50"
                  >
                    <Pencil size={13} /> 编辑
                  </button>
                  <button
                    onClick={() => setDeleteTarget(company)}
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
      <CompanyFormModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        company={editTarget}
        onSaved={handleSaved}
      />

      {/* Delete Confirm */}
      {deleteTarget && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setDeleteTarget(null)} />
          <div className="relative bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">确认删除</h3>
            <p className="text-sm text-gray-600 mb-6">
              确定要删除企业「<span className="font-medium text-gray-900">{deleteTarget.data?.name}</span>」吗？此操作不可撤销。
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
