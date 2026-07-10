import { useState } from 'react'
import Button from '../ui/Button.jsx'
import Input from '../ui/Input.jsx'
import Textarea from '../ui/Textarea.jsx'
import Select from '../ui/Select.jsx'
import Modal from '../ui/Modal.jsx'
import { createCompany, updateCompany } from '../../api/companies.js'
import { toast } from '../ui/Toast.jsx'

const EMPTY = { name: '', industry: '', size: '', website: '', email: '', phone: '', address: '', description: '', founded_year: '', status: 'active' }

const SIZE_OPTIONS = [
  { value: '1-10', label: '1–10 人' },
  { value: '11-50', label: '11–50 人' },
  { value: '51-200', label: '51–200 人' },
  { value: '201-500', label: '201–500 人' },
  { value: '501-1000', label: '501–1000 人' },
  { value: '1000+', label: '1000+ 人' },
]

const STATUS_OPTIONS = [
  { value: 'active', label: '活跃' },
  { value: 'inactive', label: '停用' },
  { value: 'archived', label: '已归档' },
]

export default function CompanyFormModal({ open, onClose, company, onSaved }) {
  const isEdit = !!company
  const [form, setForm] = useState(isEdit ? { ...EMPTY, ...company.data } : EMPTY)
  const [errors, setErrors] = useState({})
  const [saving, setSaving] = useState(false)

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = '企业名称不能为空'
    if (form.email && !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = '请输入有效的邮箱'
    if (form.website && !/^https?:\/\/.+/.test(form.website)) errs.website = '请输入有效的网址（以 http:// 或 https:// 开头）'
    return errs
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSaving(true)
    try {
      const payload = { ...form }
      if (payload.founded_year) payload.founded_year = parseInt(payload.founded_year, 10)
      else delete payload.founded_year
      Object.keys(payload).forEach((k) => { if (payload[k] === '') delete payload[k] })

      let saved
      if (isEdit) {
        saved = await updateCompany(company.id, payload)
      } else {
        saved = await createCompany(payload)
      }
      toast(isEdit ? '企业信息已更新' : '企业创建成功', 'success')
      onSaved(saved, isEdit)
      onClose()
    } catch (err) {
      toast(err.message || '保存失败', 'error')
    } finally {
      setSaving(false)
    }
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      title={isEdit ? '编辑企业' : '新建企业'}
      size="lg"
      footer={
        <>
          <Button variant="secondary" onClick={onClose} disabled={saving}>取消</Button>
          <Button type="submit" form="company-form" disabled={saving}>{saving ? '保存中…' : '保存'}</Button>
        </>
      }
    >
      <form id="company-form" onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="md:col-span-2">
          <Input label="企业名称 *" value={form.name} onChange={set('name')} placeholder="请输入企业名称" error={errors.name} />
        </div>
        <Input label="行业" value={form.industry} onChange={set('industry')} placeholder="如：互联网、金融、教育" />
        <Select label="企业规模" value={form.size} onChange={set('size')} options={SIZE_OPTIONS} placeholder="请选择规模" />
        <Input label="联系邮箱" type="email" value={form.email} onChange={set('email')} placeholder="contact@company.com" error={errors.email} />
        <Input label="联系电话" value={form.phone} onChange={set('phone')} placeholder="+86 10 1234 5678" />
        <Input label="官网" value={form.website} onChange={set('website')} placeholder="https://www.company.com" error={errors.website} />
        <Input label="成立年份" type="number" value={form.founded_year} onChange={set('founded_year')} placeholder="如：2010" min="1800" max="2100" />
        <div className="md:col-span-2">
          <Input label="地址" value={form.address} onChange={set('address')} placeholder="省市区详细地址" />
        </div>
        <div className="md:col-span-2">
          <Textarea label="企业简介" value={form.description} onChange={set('description')} placeholder="简要描述企业业务、产品或服务…" rows={3} />
        </div>
        <Select label="状态" value={form.status} onChange={set('status')} options={STATUS_OPTIONS} />
      </form>
    </Modal>
  )
}
