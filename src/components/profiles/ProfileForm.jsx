import { useState } from 'react'
import { cn } from '../../lib/utils.js'

const STATUS_OPTIONS = [
  { value: 'active', label: '活跃', color: 'text-emerald-600' },
  { value: 'inactive', label: '停用', color: 'text-slate-400' },
  { value: 'pending', label: '待审核', color: 'text-amber-500' },
]

const EMPTY_FORM = {
  name: '',
  email: '',
  phone: '',
  job_title: '',
  company: '',
  location: '',
  demands: '',
  bio: '',
  website: '',
  status: 'active',
}

function Field({ label, required, error, children }) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-slate-700">
        {label}
        {required && <span className="text-red-500 ml-0.5">*</span>}
      </label>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        'w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400',
        'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition',
        className
      )}
      {...props}
    />
  )
}

function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        'w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 placeholder:text-slate-400 resize-none',
        'focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition',
        className
      )}
      {...props}
    />
  )
}

export default function ProfileForm({ initialData, onSubmit, onCancel, loading }) {
  const [form, setForm] = useState(initialData ? { ...EMPTY_FORM, ...initialData } : EMPTY_FORM)
  const [errors, setErrors] = useState({})

  const set = (key, value) => {
    setForm((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((e) => ({ ...e, [key]: '' }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = '姓名不能为空'
    if (!form.email.trim()) errs.email = '邮箱不能为空'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = '请输入有效的邮箱地址'
    if (form.website && !/^https?:\/\/.+/.test(form.website)) errs.website = '网址需以 http:// 或 https:// 开头'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    const payload = {}
    Object.entries(form).forEach(([k, v]) => {
      if (v !== '') payload[k] = v
    })
    onSubmit(payload)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="姓名" required error={errors.name}>
          <Input
            value={form.name}
            onChange={(e) => set('name', e.target.value)}
            placeholder="请输入姓名"
          />
        </Field>

        <Field label="邮箱" required error={errors.email}>
          <Input
            type="email"
            value={form.email}
            onChange={(e) => set('email', e.target.value)}
            placeholder="example@email.com"
          />
        </Field>

        <Field label="手机号码" error={errors.phone}>
          <Input
            value={form.phone}
            onChange={(e) => set('phone', e.target.value)}
            placeholder="+86 138 0000 0000"
          />
        </Field>

        <Field label="职位" error={errors.job_title}>
          <Input
            value={form.job_title}
            onChange={(e) => set('job_title', e.target.value)}
            placeholder="例：产品经理"
          />
        </Field>

        <Field label="公司 / 组织" error={errors.company}>
          <Input
            value={form.company}
            onChange={(e) => set('company', e.target.value)}
            placeholder="公司名称"
          />
        </Field>

        <Field label="所在地" error={errors.location}>
          <Input
            value={form.location}
            onChange={(e) => set('location', e.target.value)}
            placeholder="例：上海"
          />
        </Field>

        <Field label="个人网站" error={errors.website}>
          <Input
            value={form.website}
            onChange={(e) => set('website', e.target.value)}
            placeholder="https://yourwebsite.com"
          />
        </Field>

        <Field label="状态" error={errors.status}>
          <select
            value={form.status}
            onChange={(e) => set('status', e.target.value)}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          >
            {STATUS_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="需求 / 备注" error={errors.demands}>
        <Textarea
          rows={3}
          value={form.demands}
          onChange={(e) => set('demands', e.target.value)}
          placeholder="请描述您的需求或备注信息..."
        />
      </Field>

      <Field label="个人简介" error={errors.bio}>
        <Textarea
          rows={3}
          value={form.bio}
          onChange={(e) => set('bio', e.target.value)}
          placeholder="简短介绍自己..."
        />
      </Field>

      <div className="flex gap-3 justify-end pt-2">
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-5 py-2 rounded-lg border border-slate-200 bg-white text-slate-700 text-sm font-medium hover:bg-slate-50 transition"
          >
            取消
          </button>
        )}
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2 rounded-lg bg-indigo-500 hover:bg-indigo-600 text-white text-sm font-medium transition disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? '保存中...' : (initialData ? '保存修改' : '提交信息')}
        </button>
      </div>
    </form>
  )
}
