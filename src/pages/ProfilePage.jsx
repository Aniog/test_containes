import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { User, Mail, Phone, Briefcase, Building2, MapPin, FileText, LogOut, Save, ChevronDown } from 'lucide-react'
import { useAuth } from '../context/AuthContext.jsx'
import { fetchCompanies } from '../api/companies.js'
import { toast } from '../components/ui/Toast.jsx'

function Field({ label, icon: Icon, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="flex items-center gap-1.5 text-sm font-medium text-gray-700">
        {Icon && <Icon size={14} className="text-gray-400" />}
        {label}
      </label>
      {children}
    </div>
  )
}

const inputCls = 'w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition'

export default function ProfilePage() {
  const { user, signOut, refreshUser, updateUserMeta } = useAuth()
  const navigate = useNavigate()

  const [companies, setCompanies] = useState([])
  const [form, setForm] = useState({
    name: '',
    phone: '',
    job_title: '',
    department: '',
    demands: '',
    bio: '',
    location: '',
    company_id: '',
  })
  const [saving, setSaving] = useState(false)
  const [loadingCompanies, setLoadingCompanies] = useState(true)

  // Redirect if not logged in
  useEffect(() => {
    if (user === null) navigate('/auth')
  }, [user, navigate])

  // Load companies list
  useEffect(() => {
    fetchCompanies({ limit: 100 })
      .then(({ list }) => setCompanies(list))
      .catch(() => {})
      .finally(() => setLoadingCompanies(false))
  }, [])

  // Populate form from user metadata
  useEffect(() => {
    if (!user) return
    const meta = user.user_metadata || {}
    setForm({
      name: user.name || meta.name || '',
      phone: user.phone || meta.phone || '',
      job_title: meta.job_title || '',
      department: meta.department || '',
      demands: meta.demands || '',
      bio: meta.bio || '',
      location: meta.location || '',
      company_id: meta.company_id || '',
    })
  }, [user])

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const handleSave = async (e) => {
    e.preventDefault()
    if (!form.name.trim()) { toast('姓名不能为空', 'error'); return }
    setSaving(true)
    try {
      await updateUserMeta({
        name: form.name,
        phone: form.phone,
        job_title: form.job_title,
        department: form.department,
        demands: form.demands,
        bio: form.bio,
        location: form.location,
        company_id: form.company_id,
      })
      toast('个人信息已保存', 'success')
    } catch (err) {
      console.error(err)
      toast(err.message || '保存失败，请重试', 'error')
    } finally {
      setSaving(false)
    }
  }

  const handleSignOut = async () => {
    await signOut()
    toast('已退出登录', 'info')
    navigate('/auth')
  }

  const selectedCompany = companies.find(c => String(c.id) === String(form.company_id))

  if (user === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-8 h-8 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">个人中心</h1>
            <p className="text-sm text-gray-500 mt-0.5">管理您的账号信息与企业归属</p>
          </div>
          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 text-sm text-gray-500 hover:text-red-600 border border-gray-200 hover:border-red-200 rounded-lg px-3 py-2 transition"
          >
            <LogOut size={15} />
            退出登录
          </button>
        </div>

        {/* Avatar + email banner */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-6 flex items-center gap-5">
          <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center flex-shrink-0">
            <User size={30} className="text-indigo-600" />
          </div>
          <div className="min-w-0">
            <p className="font-semibold text-gray-900 text-lg truncate">{form.name || '未设置姓名'}</p>
            <p className="text-sm text-gray-500 flex items-center gap-1.5 mt-0.5">
              <Mail size={13} />
              {user.email}
            </p>
            {selectedCompany && (
              <p className="text-sm text-indigo-600 flex items-center gap-1.5 mt-1">
                <Building2 size={13} />
                {selectedCompany.data?.name || selectedCompany.name}
              </p>
            )}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSave} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col gap-5">
          <h2 className="font-semibold text-gray-800 text-base border-b border-gray-100 pb-3">基本信息</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Field label="姓名 *" icon={User}>
              <input className={inputCls} value={form.name} onChange={set('name')} placeholder="请输入姓名" required />
            </Field>
            <Field label="手机号" icon={Phone}>
              <input className={inputCls} value={form.phone} onChange={set('phone')} placeholder="+86 138 0000 0000" />
            </Field>
            <Field label="职位" icon={Briefcase}>
              <input className={inputCls} value={form.job_title} onChange={set('job_title')} placeholder="如：产品经理" />
            </Field>
            <Field label="部门" icon={Briefcase}>
              <input className={inputCls} value={form.department} onChange={set('department')} placeholder="如：产品部" />
            </Field>
            <Field label="所在地" icon={MapPin}>
              <input className={inputCls} value={form.location} onChange={set('location')} placeholder="如：上海市" />
            </Field>
          </div>

          {/* Company binding */}
          <div className="border-t border-gray-100 pt-5">
            <h2 className="font-semibold text-gray-800 text-base mb-4">归属企业</h2>
            <Field label="选择企业" icon={Building2}>
              <div className="relative">
                <select
                  value={form.company_id}
                  onChange={set('company_id')}
                  disabled={loadingCompanies}
                  className={`${inputCls} appearance-none pr-9 cursor-pointer`}
                >
                  <option value="">— 暂不归属企业 —</option>
                  {companies.map(c => (
                    <option key={c.id} value={c.id}>
                      {c.data?.name || c.name}
                      {c.data?.industry ? ` · ${c.data.industry}` : ''}
                    </option>
                  ))}
                </select>
                <ChevronDown size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
              </div>
              {selectedCompany && (
                <div className="mt-2 flex items-center gap-2 text-xs text-indigo-700 bg-indigo-50 border border-indigo-100 rounded-lg px-3 py-2">
                  <Building2 size={13} />
                  <span className="font-medium">{selectedCompany.data?.name}</span>
                  {selectedCompany.data?.industry && <span className="text-indigo-400">· {selectedCompany.data.industry}</span>}
                  {selectedCompany.data?.size && <span className="text-indigo-400">· {selectedCompany.data.size}</span>}
                </div>
              )}
            </Field>
          </div>

          {/* Extended fields */}
          <div className="border-t border-gray-100 pt-5 flex flex-col gap-4">
            <h2 className="font-semibold text-gray-800 text-base">其他信息</h2>
            <Field label="需求 / Demands" icon={FileText}>
              <textarea
                className={`${inputCls} resize-none`}
                rows={3}
                value={form.demands}
                onChange={set('demands')}
                placeholder="描述您的业务需求或合作意向…"
              />
            </Field>
            <Field label="个人简介" icon={FileText}>
              <textarea
                className={`${inputCls} resize-none`}
                rows={3}
                value={form.bio}
                onChange={set('bio')}
                placeholder="简要介绍自己…"
              />
            </Field>
          </div>

          <button
            type="submit"
            disabled={saving}
            className="mt-2 w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-3 rounded-xl transition text-sm"
          >
            <Save size={16} />
            {saving ? '保存中…' : '保存信息'}
          </button>
        </form>
      </div>
    </div>
  )
}
