import { useState } from 'react';
import { DataClient } from '@strikingly/sdk';
import {
  User as UserIcon, Mail, Briefcase, Building2, Sparkles,
  Bell, CheckCircle, AlertCircle, ChevronRight, Star
} from 'lucide-react';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '../config.jsx';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const ROLES = [
  { value: 'student',      label: '学生',       emoji: '🎓' },
  { value: 'researcher',   label: '科研人员',   emoji: '🔬' },
  { value: 'educator',     label: '教育工作者', emoji: '📚' },
  { value: 'professional', label: '行业专家',   emoji: '💼' },
  { value: 'enthusiast',   label: '科学爱好者', emoji: '🌟' },
  { value: 'other',        label: '其他',       emoji: '✨' },
];

const INTERESTS = [
  { value: 'bacteria',      label: '细菌',       emoji: '🦠' },
  { value: 'fungi',         label: '真菌',       emoji: '🍄' },
  { value: 'plankton',      label: '浮游生物',   emoji: '✨' },
  { value: 'viruses',       label: '病毒',       emoji: '⚡' },
  { value: 'protozoa',      label: '原生动物',   emoji: '🔬' },
  { value: 'archaea',       label: '古菌',       emoji: '🧬' },
  { value: 'climate',       label: '气候科学',   emoji: '🌍' },
  { value: 'medicine',      label: '医学研究',   emoji: '💊' },
  { value: 'biotechnology', label: '生物技术',   emoji: '⚗️' },
];

const FREQUENCIES = [
  { value: 'weekly',    label: '每周',   desc: '最新研究动态' },
  { value: 'monthly',   label: '每月',   desc: '精选内容摘要' },
  { value: 'quarterly', label: '每季度', desc: '深度专题报告' },
];

const PERKS = [
  { icon: Star,    text: '独家科研报告与深度文章' },
  { icon: Bell,    text: '最新微生物学发现第一时间推送' },
  { icon: Sparkles, text: '精选显微镜摄影与可视化内容' },
];

const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) {
    return response.errors.join(', ');
  }
  return error?.message || '提交失败，请稍后重试';
};

export default function Subscribe() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    role: '',
    institution: '',
    interests: [],
    newsletter_frequency: 'monthly',
    agree_terms: false,
  });
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const setField = (name, value) => setValues((v) => ({ ...v, [name]: value }));

  const toggleInterest = (val) => {
    setValues((v) => ({
      ...v,
      interests: v.interests.includes(val)
        ? v.interests.filter((i) => i !== val)
        : [...v.interests, val],
    }));
  };

  const validate = () => {
    if (!values.name.trim()) return '请填写您的姓名';
    if (!values.email.trim()) return '请填写您的邮箱';
    if (!/^\S+@\S+\.\S+$/.test(values.email)) return '请填写有效的邮箱地址';
    if (!values.role) return '请选择您的身份';
    if (!values.agree_terms) return '请阅读并同意隐私政策';
    return null;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    const err = validate();
    if (err) { setErrorMsg(err); return; }

    setStatus('submitting');
    try {
      const { data: response, error } = await client
        .from('NewsletterSubscriptions')
        .insert({
          data: {
            name: values.name,
            email: values.email,
            role: values.role,
            institution: values.institution || undefined,
            interests: values.interests,
            newsletter_frequency: values.newsletter_frequency,
            agree_terms: values.agree_terms,
          },
        })
        .select()
        .single();

      if (error || response?.success === false) {
        setErrorMsg(getErrorMessage(response, error));
        setStatus('error');
        return;
      }

      setStatus('success');
    } catch (err) {
      console.error('Subscribe form error:', err);
      setErrorMsg(err.message || '提交失败，请稍后重试');
      setStatus('error');
    }
  };

  return (
    <div className="min-h-screen bg-cosmos-950 text-cosmos-100">
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cosmos-900/60 to-transparent pointer-events-none" />
        <div className="absolute top-16 right-1/3 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 left-1/4 w-60 h-60 bg-cyan-500/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="inline-block text-xs font-semibold tracking-widest text-teal-400 uppercase mb-4">
            加入社区
          </span>
          <h1 className="text-4xl md:text-6xl font-bold font-display text-white mb-6 leading-tight">
            订阅微观世界<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
              探索通讯
            </span>
          </h1>
          <p className="text-lg text-cosmos-300 max-w-2xl mx-auto leading-relaxed">
            加入超过 12,000 名科学爱好者的行列，定期获取最新微生物学研究、精彩图集与深度科普内容。
          </p>
          {/* Perks */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            {PERKS.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-sm text-cosmos-300">
                <Icon className="w-4 h-4 text-teal-400 flex-shrink-0" />
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="max-w-2xl mx-auto px-6 pb-32">
        <div className="bg-cosmos-900/70 border border-cosmos-700/50 rounded-3xl p-8 md:p-12 backdrop-blur-sm">

          {status === 'success' ? (
            <div className="text-center py-12">
              <div className="w-24 h-24 bg-teal-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-12 h-12 text-teal-400" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">订阅成功！🎉</h2>
              <p className="text-cosmos-300 mb-2 max-w-sm mx-auto">
                欢迎加入 MicroCosmos 社区！
              </p>
              <p className="text-cosmos-400 text-sm max-w-sm mx-auto">
                我们已向 <span className="text-teal-400">{values.email}</span> 发送了确认邮件，请查收并完成订阅确认。
              </p>
              <div className="mt-8 p-4 bg-teal-500/10 border border-teal-500/20 rounded-xl">
                <p className="text-teal-300 text-sm">
                  📬 第一期通讯将于下{values.newsletter_frequency === 'weekly' ? '周' : values.newsletter_frequency === 'monthly' ? '月' : '季度'}发送到您的邮箱
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                  <Bell className="w-6 h-6 text-teal-400" />
                  填写订阅信息
                </h2>
                <p className="text-cosmos-400 text-sm">标有 * 的字段为必填项，其余为可选</p>
              </div>

              {errorMsg && (
                <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-6">
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                  <p className="text-red-300 text-sm">{errorMsg}</p>
                </div>
              )}

              <form onSubmit={onSubmit} className="space-y-8">
                {/* Name + Email */}
                <div className="space-y-5">
                  <h3 className="text-sm font-semibold text-cosmos-400 uppercase tracking-wider flex items-center gap-2">
                    <UserIcon className="w-4 h-4 text-teal-400" /> 基本信息
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-cosmos-300 mb-2">姓名 *</label>
                      <input
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={(e) => setField('name', e.target.value)}
                        placeholder="您的姓名"
                        className="w-full bg-cosmos-800/60 border border-cosmos-600/50 rounded-xl px-4 py-3 text-white placeholder-cosmos-500 focus:outline-none focus:border-teal-500/70 focus:ring-1 focus:ring-teal-500/30 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-cosmos-300 mb-2">
                        <Mail className="w-3.5 h-3.5 inline mr-1 text-teal-400" />邮箱地址 *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={(e) => setField('email', e.target.value)}
                        placeholder="you@example.com"
                        className="w-full bg-cosmos-800/60 border border-cosmos-600/50 rounded-xl px-4 py-3 text-white placeholder-cosmos-500 focus:outline-none focus:border-teal-500/70 focus:ring-1 focus:ring-teal-500/30 transition-all text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-cosmos-300 mb-2">
                      <Building2 className="w-3.5 h-3.5 inline mr-1 text-teal-400" />所在机构（可选）
                    </label>
                    <input
                      type="text"
                      name="institution"
                      value={values.institution}
                      onChange={(e) => setField('institution', e.target.value)}
                      placeholder="学校、研究机构或公司名称"
                      className="w-full bg-cosmos-800/60 border border-cosmos-600/50 rounded-xl px-4 py-3 text-white placeholder-cosmos-500 focus:outline-none focus:border-teal-500/70 focus:ring-1 focus:ring-teal-500/30 transition-all text-sm"
                    />
                  </div>
                </div>

                {/* Role */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-cosmos-400 uppercase tracking-wider flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-teal-400" /> 您的身份 *
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {ROLES.map(({ value, label, emoji }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setField('role', value)}
                        className={`flex flex-col items-center gap-1.5 py-4 px-3 rounded-xl border text-sm transition-all ${
                          values.role === value
                            ? 'bg-teal-500/20 border-teal-500/60 text-teal-300'
                            : 'bg-cosmos-800/40 border-cosmos-600/40 text-cosmos-300 hover:border-cosmos-500/60'
                        }`}
                      >
                        <span className="text-xl">{emoji}</span>
                        <span className="font-medium text-xs">{label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Interests */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-cosmos-400 uppercase tracking-wider flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-teal-400" /> 感兴趣的领域（可多选）
                  </h3>
                  <div className="grid grid-cols-3 gap-2">
                    {INTERESTS.map(({ value, label, emoji }) => {
                      const selected = values.interests.includes(value);
                      return (
                        <button
                          key={value}
                          type="button"
                          onClick={() => toggleInterest(value)}
                          className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border text-xs font-medium transition-all ${
                            selected
                              ? 'bg-teal-500/20 border-teal-500/50 text-teal-300'
                              : 'bg-cosmos-800/40 border-cosmos-600/40 text-cosmos-400 hover:border-cosmos-500/60 hover:text-cosmos-300'
                          }`}
                        >
                          <span>{emoji}</span>
                          <span>{label}</span>
                          {selected && <ChevronRight className="w-3 h-3 ml-auto text-teal-400" />}
                        </button>
                      );
                    })}
                  </div>
                  {values.interests.length > 0 && (
                    <p className="text-xs text-teal-400">已选择 {values.interests.length} 个领域</p>
                  )}
                </div>

                {/* Frequency */}
                <div className="space-y-3">
                  <h3 className="text-sm font-semibold text-cosmos-400 uppercase tracking-wider flex items-center gap-2">
                    <Bell className="w-4 h-4 text-teal-400" /> 推送频率
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {FREQUENCIES.map(({ value, label, desc }) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setField('newsletter_frequency', value)}
                        className={`text-center py-3 px-4 rounded-xl border text-sm transition-all ${
                          values.newsletter_frequency === value
                            ? 'bg-teal-500/20 border-teal-500/60 text-teal-300'
                            : 'bg-cosmos-800/40 border-cosmos-600/40 text-cosmos-300 hover:border-cosmos-500/60'
                        }`}
                      >
                        <span className="font-semibold block">{label}</span>
                        <span className="text-xs opacity-60">{desc}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Terms */}
                <div>
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div
                      onClick={() => setField('agree_terms', !values.agree_terms)}
                      className={`w-5 h-5 mt-0.5 flex-shrink-0 rounded border-2 flex items-center justify-center transition-all ${
                        values.agree_terms
                          ? 'bg-teal-500 border-teal-500'
                          : 'border-cosmos-600 group-hover:border-cosmos-400'
                      }`}
                    >
                      {values.agree_terms && (
                        <svg className="w-3 h-3 text-cosmos-950" fill="none" viewBox="0 0 12 12">
                          <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm text-cosmos-400 leading-relaxed">
                      我已阅读并同意{' '}
                      <span className="text-teal-400 hover:text-teal-300 cursor-pointer">隐私政策</span>
                      {' '}和{' '}
                      <span className="text-teal-400 hover:text-teal-300 cursor-pointer">服务条款</span>
                      ，并同意接收来自 MicroCosmos 的通讯邮件。*
                    </span>
                  </label>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full flex items-center justify-center gap-3 py-4 bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 disabled:opacity-60 disabled:cursor-not-allowed text-cosmos-950 font-bold rounded-xl transition-all shadow-lg shadow-teal-500/20 text-sm"
                >
                  {status === 'submitting' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-cosmos-950/30 border-t-cosmos-950 rounded-full animate-spin" />
                      订阅中...
                    </>
                  ) : (
                    <>
                      <Bell className="w-4 h-4" />
                      立即订阅
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-cosmos-500">
                  随时可以取消订阅 · 我们不会向第三方分享您的信息
                </p>
              </form>
            </>
          )}
        </div>
      </section>
    </div>
  );
}
