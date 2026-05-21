import React, { useState, useEffect, useCallback } from 'react'
import { DataClient } from '@strikingly/sdk'
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../../config.jsx'
import { Trash2, Plus, FolderOpen, Loader2, AlertCircle } from 'lucide-react'

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY)

const getRows = (response) => response?.data?.list ?? []
const getEntity = (response) => response?.data ?? null
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ')
  }
  return error?.message || '操作失败'
}

const STATUS_LABELS = {
  active: { label: '进行中', color: 'bg-green-100 text-green-700' },
  completed: { label: '已完成', color: 'bg-blue-100 text-blue-700' },
  archived: { label: '已归档', color: 'bg-gray-100 text-gray-600' },
}

export default function ProjectManager() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [deletingId, setDeletingId] = useState(null)
  const [confirmDeleteId, setConfirmDeleteId] = useState(null)
  const [creating, setCreating] = useState(false)
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ name: '', description: '', status: 'active' })
  const [formError, setFormError] = useState(null)
  const [successMsg, setSuccessMsg] = useState(null)

  const showSuccess = (msg) => {
    setSuccessMsg(msg)
    setTimeout(() => setSuccessMsg(null), 3000)
  }

  const fetchProjects = useCallback(async () => {
    setLoading(true)
    setError(null)
    try {
      const { data: response, error: fetchError } = await client
        .from('Projects')
        .select('*')
        .order('created_at', { ascending: false })

      if (fetchError) throw fetchError
      setProjects(getRows(response))
    } catch (err) {
      console.error('Fetch projects error:', err)
      setError(err.message || '加载项目失败')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchProjects()
  }, [fetchProjects])

  const handleCreate = async (e) => {
    e.preventDefault()
    setFormError(null)
    if (!form.name.trim()) {
      setFormError('项目名称不能为空')
      return
    }
    setCreating(true)
    try {
      const { data: response, error: createError } = await client
        .from('Projects')
        .insert({
          data: {
            name: form.name.trim(),
            description: form.description.trim(),
            status: form.status,
            created_at: new Date().toISOString(),
          },
        })
        .select()
        .single()

      if (createError || response?.success === false) {
        setFormError(getErrorMessage(response, createError))
        return
      }

      const created = getEntity(response)
      setProjects((prev) => [created, ...prev])
      setForm({ name: '', description: '', status: 'active' })
      setShowForm(false)
      showSuccess('项目创建成功！')
    } catch (err) {
      console.error('Create project error:', err)
      setFormError(err.message || '创建失败')
    } finally {
      setCreating(false)
    }
  }

  const handleDelete = async (project) => {
    setDeletingId(project.id)
    setConfirmDeleteId(null)
    try {
      const { data: response, error: deleteError } = await client
        .from('Projects')
        .delete()
        .eq('id', project.id)
        .select()
        .maybeSingle()

      if (deleteError || response?.success === false) {
        setError(getErrorMessage(response, deleteError))
        return
      }

      setProjects((prev) => prev.filter((p) => p.id !== project.id))
      showSuccess('项目已删除')
    } catch (err) {
      console.error('Delete project error:', err)
      setError(err.message || '删除失败')
    } finally {
      setDeletingId(null)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">项目管理</h1>
            <p className="text-sm text-gray-500 mt-1">测试项目的创建与删除功能</p>
          </div>
          <button
            onClick={() => { setShowForm(!showForm); setFormError(null) }}
            className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            新建项目
          </button>
        </div>

        {/* Success Toast */}
        {successMsg && (
          <div className="mb-4 flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-lg">
            <span className="w-2 h-2 rounded-full bg-green-500 inline-block" />
            {successMsg}
          </div>
        )}

        {/* Global Error */}
        {error && (
          <div className="mb-4 flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            {error}
            <button onClick={() => setError(null)} className="ml-auto text-red-400 hover:text-red-600">✕</button>
          </div>
        )}

        {/* Create Form */}
        {showForm && (
          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6 shadow-sm">
            <h2 className="text-base font-semibold text-gray-800 mb-4">新建项目</h2>
            <form onSubmit={handleCreate} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  项目名称 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  placeholder="输入项目名称"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">描述</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm((f) => ({ ...f, description: e.target.value }))}
                  placeholder="项目描述（可选）"
                  rows={2}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">状态</label>
                <select
                  value={form.status}
                  onChange={(e) => setForm((f) => ({ ...f, status: e.target.value }))}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  <option value="active">进行中</option>
                  <option value="completed">已完成</option>
                  <option value="archived">已归档</option>
                </select>
              </div>
              {formError && (
                <p className="text-sm text-red-600 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" /> {formError}
                </p>
              )}
              <div className="flex gap-2 pt-1">
                <button
                  type="submit"
                  disabled={creating}
                  className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:opacity-60 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
                >
                  {creating ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
                  {creating ? '创建中...' : '创建'}
                </button>
                <button
                  type="button"
                  onClick={() => { setShowForm(false); setFormError(null) }}
                  className="text-sm text-gray-600 hover:text-gray-800 px-4 py-2 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                >
                  取消
                </button>
              </div>
            </form>
          </div>
        )}

        {/* Project List */}
        {loading ? (
          <div className="flex items-center justify-center py-20 text-gray-400">
            <Loader2 className="w-6 h-6 animate-spin mr-2" />
            <span className="text-sm">加载中...</span>
          </div>
        ) : projects.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-gray-400">
            <FolderOpen className="w-12 h-12 mb-3 opacity-40" />
            <p className="text-sm">暂无项目，点击「新建项目」开始</p>
          </div>
        ) : (
          <div className="space-y-3">
            <p className="text-xs text-gray-400 mb-2">共 {projects.length} 个项目</p>
            {projects.map((project) => {
              const fields = project?.data ?? {}
              const statusInfo = STATUS_LABELS[fields.status] || STATUS_LABELS.active
              const isDeleting = deletingId === project.id
              const isConfirming = confirmDeleteId === project.id

              return (
                <div
                  key={project.id}
                  className="bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm flex items-start justify-between gap-4"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-sm font-semibold text-gray-900 truncate">{fields.name}</h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusInfo.color}`}>
                        {statusInfo.label}
                      </span>
                    </div>
                    {fields.description && (
                      <p className="text-xs text-gray-500 truncate">{fields.description}</p>
                    )}
                    <p className="text-xs text-gray-400 mt-1">ID: {project.id}</p>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    {isConfirming ? (
                      <>
                        <span className="text-xs text-red-600 font-medium">确认删除？</span>
                        <button
                          onClick={() => handleDelete(project)}
                          disabled={isDeleting}
                          className="text-xs bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg transition-colors disabled:opacity-60"
                        >
                          {isDeleting ? '删除中...' : '确认'}
                        </button>
                        <button
                          onClick={() => setConfirmDeleteId(null)}
                          className="text-xs text-gray-500 hover:text-gray-700 px-3 py-1.5 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
                        >
                          取消
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setConfirmDeleteId(project.id)}
                        disabled={isDeleting}
                        className="flex items-center gap-1.5 text-xs text-red-500 hover:text-red-700 hover:bg-red-50 px-3 py-1.5 rounded-lg border border-red-200 transition-colors disabled:opacity-60"
                      >
                        {isDeleting ? (
                          <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        ) : (
                          <Trash2 className="w-3.5 h-3.5" />
                        )}
                        删除
                      </button>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}
