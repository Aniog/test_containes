import { useState } from 'react';
import { CheckCircle, AlertCircle, ChevronDown } from 'lucide-react';

const events = [
  '2026 北京春季服从训练锦标赛',
  '2026 上海敏捷障碍公开赛',
  '2026 广州护卫犬工作赛',
  '2026 成都幼犬培育锦标赛',
  '2026 杭州国际邀请赛',
  '2027 武汉冬季团队协作赛',
];

const categories = ['服从训练', '敏捷障碍', '护卫工作犬', '幼犬培育', '团队协作'];

const breeds = [
  '德国牧羊犬', '边境牧羊犬', '马林诺斯', '金毛寻回犬',
  '拉布拉多', '杰克罗素梗', '罗威纳', '杜宾犬', '其他',
];

const initialForm = {
  handlerName: '',
  phone: '',
  email: '',
  city: '',
  dogName: '',
  dogBreed: '',
  dogAge: '',
  selectedEvent: '',
  category: '',
  experience: '',
  agreement: false,
};

export default function Register() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.handlerName.trim()) e.handlerName = '请填写驯犬师姓名';
    if (!form.phone.trim()) e.phone = '请填写联系电话';
    if (!form.email.trim()) e.email = '请填写电子邮箱';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = '请填写有效的邮箱地址';
    if (!form.dogName.trim()) e.dogName = '请填写犬只名称';
    if (!form.dogBreed) e.dogBreed = '请选择犬种';
    if (!form.dogAge.trim()) e.dogAge = '请填写犬只年龄';
    if (!form.selectedEvent) e.selectedEvent = '请选择参赛赛事';
    if (!form.category) e.category = '请选择参赛项目';
    if (!form.agreement) e.agreement = '请阅读并同意参赛规则';
    return e;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus('submitting');
    // Simulate async submission
    await new Promise((r) => setTimeout(r, 1200));
    setStatus('success');
  };

  const Field = ({ label, name, type = 'text', placeholder, children, required }) => (
    <div>
      <label className="block text-sm font-semibold text-navy mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {children || (
        <input
          type={type}
          name={name}
          value={form[name]}
          onChange={handleChange}
          placeholder={placeholder}
          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy bg-white text-gray-800 ${
            errors[name] ? 'border-red-400 focus:ring-red-300' : 'border-gray-200'
          }`}
        />
      )}
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" /> {errors[name]}
        </p>
      )}
    </div>
  );

  const Select = ({ label, name, options, placeholder, required }) => (
    <div>
      <label className="block text-sm font-semibold text-navy mb-1.5">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className="relative">
        <select
          name={name}
          value={form[name]}
          onChange={handleChange}
          className={`w-full px-4 py-2.5 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy bg-white text-gray-800 appearance-none ${
            errors[name] ? 'border-red-400' : 'border-gray-200'
          } ${!form[name] ? 'text-gray-400' : 'text-gray-800'}`}
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o}>{o}</option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
      </div>
      {errors[name] && (
        <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
          <AlertCircle className="w-3 h-3" /> {errors[name]}
        </p>
      )}
    </div>
  );

  return (
    <div className="bg-cream min-h-screen">
      {/* Header */}
      <div className="bg-navy py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-gold font-semibold text-sm uppercase tracking-widest">报名参赛</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-2 mb-3">
            赛事报名
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            填写以下信息完成报名，我们将在3个工作日内通过邮件确认您的参赛资格。
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {status === 'success' ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-12 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-navy mb-3">报名成功！</h2>
            <p className="text-gray-600 mb-2">
              感谢 <strong>{form.handlerName}</strong> 报名参加 <strong>{form.selectedEvent}</strong>。
            </p>
            <p className="text-gray-500 text-sm mb-8">
              确认邮件已发送至 {form.email}，请注意查收。如有疑问请联系 contact@dogchampion.cn
            </p>
            <button
              onClick={() => { setForm(initialForm); setStatus('idle'); }}
              className="bg-navy text-white font-semibold px-8 py-3 rounded-xl hover:bg-gold hover:text-navy transition-colors"
            >
              继续报名其他赛事
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 space-y-8">
            {/* Handler Info */}
            <div>
              <h2 className="text-lg font-bold text-navy mb-5 pb-2 border-b border-gray-100">
                驯犬师信息
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="驯犬师姓名" name="handlerName" placeholder="请输入真实姓名" required />
                <Field label="联系电话" name="phone" type="tel" placeholder="请输入手机号码" required />
                <Field label="电子邮箱" name="email" type="email" placeholder="用于接收确认邮件" required />
                <Field label="所在城市" name="city" placeholder="例如：北京" />
              </div>
              <div className="mt-5">
                <Field label="参赛经验" name="experience" placeholder="简述您的驯犬参赛经历（选填）">
                  <textarea
                    name="experience"
                    value={form.experience}
                    onChange={handleChange}
                    placeholder="简述您的驯犬参赛经历（选填）"
                    rows={3}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-navy bg-white text-gray-800 resize-none"
                  />
                </Field>
              </div>
            </div>

            {/* Dog Info */}
            <div>
              <h2 className="text-lg font-bold text-navy mb-5 pb-2 border-b border-gray-100">
                犬只信息
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <Field label="犬只名称" name="dogName" placeholder="请输入犬只名称" required />
                <Field label="犬只年龄" name="dogAge" placeholder="例如：3岁" required />
                <div className="sm:col-span-2">
                  <Select label="犬种" name="dogBreed" options={breeds} placeholder="请选择犬种" required />
                </div>
              </div>
            </div>

            {/* Event Selection */}
            <div>
              <h2 className="text-lg font-bold text-navy mb-5 pb-2 border-b border-gray-100">
                参赛信息
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="sm:col-span-2">
                  <Select label="选择赛事" name="selectedEvent" options={events} placeholder="请选择参赛赛事" required />
                </div>
                <div className="sm:col-span-2">
                  <Select label="参赛项目" name="category" options={categories} placeholder="请选择参赛项目" required />
                </div>
              </div>
            </div>

            {/* Agreement */}
            <div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="agreement"
                  checked={form.agreement}
                  onChange={handleChange}
                  className="mt-0.5 w-4 h-4 accent-navy"
                />
                <span className="text-sm text-gray-600">
                  我已阅读并同意
                  <span className="text-navy font-semibold underline cursor-pointer mx-1">参赛规则与条款</span>
                  ，确认所填信息真实有效，并承诺遵守赛事相关规定。
                </span>
              </label>
              {errors.agreement && (
                <p className="text-red-500 text-xs mt-1 flex items-center gap-1 ml-7">
                  <AlertCircle className="w-3 h-3" /> {errors.agreement}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full bg-navy text-white font-bold py-4 rounded-xl hover:bg-gold hover:text-navy transition-all text-base disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? '提交中...' : '提交报名'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
