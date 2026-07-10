import { useState, useEffect } from 'react'
import Button from '../ui/Button.jsx'
import Input from '../ui/Input.jsx'
import Textarea from '../ui/Textarea.jsx'
import Select from '../ui/Select.jsx'
import Modal from '../ui/Modal.jsx'
import { createProfile, updateProfile } from '../../api/profiles.js'
import { fetchCompanies } from '../../api/companies.js'
import { toast } from '../ui/Toast.jsx'

const EMPTY = {
  name: '', email: '', phone: '', job_title: '', department: '',
  demands: '', bio: '', location: '', linkedin: '', company_id: '', status: 'active'
}

const STATUS_OPTIONS = [
  { value: 'active', label: '活跃' },
  { value: 'inactive', label: '停用' },
]

export default function UserProfileFormModal({ open, onClose, profile, onSaved }) {
  const isEdit = !!profile
  const [form, setForm] = useState(isEdit ? { ...EMPTY, ...profile.data, company_id: profile.data?.company_id ?? '' } : EMPTY)
  const [errors, setErrors] = useState({})
  const [saving, setSaving] = useState(false)
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    if (open) {
      fetchCompanies({ limit: 100 }).then((r) => setCompanies(r.list)).catch(() => {})
      if (isEdit) {
        setForm({ ...EMPTY, ...profile.data, company_id: profile.data?.company_id ?? '' })
      } else {
        setForm(EMPTY)
      }
      setErrors({})
    }
  }, [open, isEdit, profile])

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = '姓名不能为空'
    if (!form.email.trim()) errs.email = '邮箱不能为空'
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errs.email = '请输入有效的邮箱'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSaving(true)
    try {
      const payload = { ...form }
      if (payload.company_id) payload.company_id = parseInt(payload.company_id, 10)
      else delete payload.company_id
      Object.keys(payload).forEach((k) => { if (payload[k] === '') delete payload[k] })

      let saved
      if (isEdit) {
        saved = await updateProfile(profile.id, payload)
      } else {
        saved = await createProfile(payload)
      }
      toast(isEdit ? '用户信息已更新' : '用户创建成功', 'success')
      onSaved(saved, isEdit)
      onClose()
    } catch (err) {
      toast(err.message || '保存失败', 'error')
    } finally {
      setSaving(false)
    }
  }

  const companyOptions = companies.map((c) => ({ value: String(c.id), label: c.data?.name || `企业 #${c.id}` }))

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={isEdit ? '编辑用户' : '新建用户'}
      size="lg"
      footer={
        <>
          <Button variant="secondary" onClick={onClose} disabled={saving}>取消</Button>
          <Button type="submit" form="user-form" disabled={saving}>{saving ? '保存中…' : '保存'}</Button>
        </>
      }
    >
      <form id="user-form" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input label="姓名 *" value={form.name} onChange={set('name')} placeholder="请输入姓名" error={errors.name} />
        <Input label="邮箱 *" type="email" value={form.email} onChange={set('email')} placeholder="user@example.com" error={errors.email} />
        <Input label="电话" value={form.phone} onChange={set('phone')} placeholder="+86 138 0000 0000" />
        <Input label="职位" value={form.job_title} onChange={set('job_title')} placeholder="如：产品经理、工程师" />
        <Input label="部门" value={form.department} onChange={set('department')} placeholder="如：技术部、市场部" />
        <Input label="所在地" value={form.location} onChange={set('location')} placeholder="如：北京、上海" />
        <Select
          label="所属企业"
          value={form.company_id}
          onChange={set('company_id')}
          options={companyOptions}
          placeholder="请选择企业（可选）"
        />
        <Select label="状态" value={form.status} onChange={set('status')} options={STATUS_OPTIONS} />
        <div className="md:col-span-2">
          <Input label="LinkedIn" value={form.linkedin} onChange={set('linkedin')} placeholder="https://linkedin.com/in/username" />
        </div>
        <div className="md:col-span-2">
          <Textarea label="个人简介" value={form.bio} onChange={set('bio')} placeholder="简要介绍自己…" rows={2} />
        </div>
        <div className="md:col-span-2">
          <Textarea label="需求 / Demands" value={form.demands} onChange={set('demands')} placeholder="描述您的需求、期望或关注点…" rows={3} />
        </div>
      </form>
    </Modal>
  )
}
