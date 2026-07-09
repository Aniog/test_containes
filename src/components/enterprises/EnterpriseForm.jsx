import { useState, useEffect } from 'react'

const BUSINESS_TYPE_LABELS = {
  startup: '初创公司',
  sme: '中小企业',
  enterprise: '大型企业',
  government: '政府机构',
  ngo: '非营利组织',
  other: '其他',
}

const COMPANY_SIZE_OPTIONS = ['1-10', '11-50', '51-200', '201-500', '501-1000', '1000+']

const EMPTY = {
  company_name: '',
  industry: '',
  business_type: '',
  company_size: '',
  founded_year: '',
  website: '',
  address: '',
  city: '',
  country: '',
  contact_person: '',
  contact_email: '',
  contact_phone: '',
  description: '',
  demands: '',
  status: 'pending',
}

export default function EnterpriseForm({ initial, onSubmit, onCancel, loading }) {
  const [values, setValues] = useState(EMPTY)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    if (initial) {
      setValues({ ...EMPTY, ...initial, founded_year: initial.founded_year ?? '' })
    } else {
      setValues(EMPTY)
    }
    setErrors({})
  }, [initial])

  const set = (field) => (e) => setValues((v) => ({ ...v, [field]: e.target.value }))

  const validate = () => {
    const errs = {}
    if (!values.company_name.trim()) errs.company_name = '企业名称为必填项'
    if (values.contact_email && !/^\S+@\S+\.\S+$/.test(values.contact_email)) {
      errs.contact_email = '请输入有效的邮箱地址'
    }
    if (values.website && !/^https?:\/\/.+/.test(values.website)) {
      errs.website = '网址需以 http:// 或 https:// 开头'
    }
    if (values.founded_year && (Number(values.founded_year) < 1800 || Number(values.founded_year) > 2100)) {
      errs.founded_year = '请输入有效年份'
    }
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) { setErrors(errs); return }
    const payload = { ...values }
    if (payload.founded_year) payload.founded_year = parseInt(payload.founded_year, 10)
    else delete payload.founded_year
    Object.keys(payload).forEach((k) => { if (payload[k] === '') delete payload[k] })
    onSubmit(payload)
  }

  const inputClass = (key) =>
    `border rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition ${errors[key] ? 'border-red-400 bg-red-50' : 'border-slate-200 bg-white'}`

  const Field = ({ label, name, required: req, ...rest }) => (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium text-slate-700">
        {label}{req && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input className={inputClass(name)} value={values[name]} onChange={set(name)} {...rest} />
      {errors[name] && <p className="text-xs text-red-500">{errors[name]}</p>}
    </div>
  )

  const sectionTitle = (text) => (
    <p className="text-xs font-semibold text-indigo-600 uppercase tracking-wider mb-3">{text}</p>
  )

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {/* 基本信息 */}
      <div>
        {sectionTitle('基本信息')}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="企业 / 组织名称" name="company_name" placeholder="请输入企业名称" required />
          <Field label="所属行业" name="industry" placeholder="例：互联网、金融、制造业" />

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-700">企业类型</label>
            <select className={inputClass('business_type')} value={values.business_type} onChange={set('business_type')}>
              <option value="">请选择</option>
              {Object.entries(BUSINESS_TYPE_LABELS).map(([v, l]) => (
                <option key={v} value={v}>{l}</option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-700">员工规模</label>
            <select className={inputClass('company_size')} value={values.company_size} onChange={set('company_size')}>
              <option value="">请选择</option>
              {COMPANY_SIZE_OPTIONS.map((s) => (
                <option key={s} value={s}>{s} 人</option>
              ))}
            </select>
          </div>

          <Field label="成立年份" name="founded_year" type="number" placeholder="例：2010" min={1800} max={2100} />
          <Field label="企业官网" name="website" placeholder="https://yourcompany.com" />
        </div>
      </div>

      {/* 地址信息 */}
      <div>
        {sectionTitle('地址信息')}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="所在城市" name="city" placeholder="例：上海" />
          <Field label="国家 / 地区" name="country" placeholder="例：中国" />
          <div className="md:col-span-2">
            <Field label="详细地址" name="address" placeholder="街道、楼层等详细地址" />
          </div>
        </div>
      </div>

      {/* 联系人信息 */}
      <div>
        {sectionTitle('联系人信息')}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Field label="联系人姓名" name="contact_person" placeholder="负责人姓名" />
          <Field label="联系人电话" name="contact_phone" placeholder="+86 138 0000 0000" />
          <div className="md:col-span-2">
            <Field label="联系人邮箱" name="contact_email" type="email" placeholder="contact@company.com" />
          </div>
        </div>
      </div>

      {/* 需求与简介 */}
      <div>
        {sectionTitle('需求与简介')}
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-700">企业需求 / 合作意向</label>
            <textarea
              className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition resize-none"
              rows={3}
              placeholder="请描述贵企业的需求或合作意向..."
              value={values.demands}
              onChange={set('demands')}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-700">企业简介</label>
            <textarea
              className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition resize-none"
              rows={3}
              placeholder="简短介绍企业背景、主营业务..."
              value={values.description}
              onChange={set('description')}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium text-slate-700">状态</label>
            <select
              className="border border-slate-200 rounded-lg px-3 py-2 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition"
              value={values.status}
              onChange={set('status')}
            >
              <option value="active">活跃</option>
              <option value="inactive">停用</option>
              <option value="pending">待审核</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-3 pt-2 border-t border-slate-100">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition"
        >
          取消
        </button>
        <button
          type="submit"
          disabled={loading}
          className="px-5 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 disabled:opacity-60 transition"
        >
          {loading ? '提交中...' : '提交信息'}
        </button>
      </div>
    </form>
  )
}
