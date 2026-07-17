import { useState, useEffect, useCallback } from 'react';
import { DataClient } from '@strikingly/sdk';
import { STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY } from '@/config.jsx';
import {
  Users, Search, Plus, Pencil, Trash2, X, Globe, Facebook,
  Twitter, Instagram, Youtube, MapPin, Phone, Mail, ChevronLeft, ChevronRight,
  AlertCircle, CheckCircle2, Crown
} from 'lucide-react';

const client = new DataClient(STRK_PROJECT_URL, STRK_PROJECT_ANON_KEY);

const getRows = (response) => response?.data?.list ?? [];
const getTotal = (response) => response?.data?.total ?? 0;
const getEntity = (response) => response?.data ?? null;
const getErrorMessage = (response, error) => {
  if (Array.isArray(response?.errors) && response.errors.length > 0) return response.errors.join(', ');
  return error?.message || '操作失败';
};

const PAGE_SIZE = 10;

const emptyForm = {
  email: '', phone: '', membership_tier: '', first_name: '', last_name: '',
  country_region_name: '', country_region_code: '', location: '',
  website: '', facebook: '', twitter: '', instagram: '', youtube: '', comment: '',
};

export default function Visitors() {
  const [visitors, setVisitors] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState('');
  const [toast, setToast] = useState(null);

  // Modal state
  const [modalMode, setModalMode] = useState(null); // 'create' | 'edit' | 'view' | 'delete'
  const [selectedVisitor, setSelectedVisitor] = useState(null);
  const [formData, setFormData] = useState(emptyForm);
  const [submitting, setSubmitting] = useState(false);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const fetchVisitors = useCallback(async () => {
    setLoading(true);
    try {
      let query = client.from('Visitors').select('*').order('id', { ascending: false }).range(page * PAGE_SIZE, (page + 1) * PAGE_SIZE - 1);
      if (search) query = query.ilike('email', `%${search}%`);
      const { data: response, error } = await query;
      if (error) throw error;
      setVisitors(getRows(response));
      setTotal(getTotal(response));
    } catch (err) {
      console.error('Fetch visitors error:', err);
      showToast('加载访客数据失败', 'error');
    } finally {
      setLoading(false);
    }
  }, [page, search]);

  useEffect(() => { fetchVisitors(); }, [fetchVisitors]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearch(searchInput);
    setPage(0);
  };

  const openCreate = () => { setFormData(emptyForm); setModalMode('create'); };
  const openEdit = (v) => { setSelectedVisitor(v); setFormData({ ...emptyForm, ...v.data }); setModalMode('edit'); };
  const openView = (v) => { setSelectedVisitor(v); setModalMode('view'); };
  const openDelete = (v) => { setSelectedVisitor(v); setModalMode('delete'); };
  const closeModal = () => { setModalMode(null); setSelectedVisitor(null); setFormData(emptyForm); };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!formData.email.trim()) { showToast('邮箱为必填项', 'error'); return; }
    setSubmitting(true);
    const payload = Object.fromEntries(Object.entries(formData).filter(([, v]) => v !== ''));
    const { data: response, error } = await client.from('Visitors').insert({ data: payload }).select().single();
    setSubmitting(false);
    if (error || response?.success === false) { showToast(getErrorMessage(response, error), 'error'); return; }
    showToast('访客已成功添加');
    closeModal();
    await fetchVisitors();
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!formData.email.trim()) { showToast('邮箱为必填项', 'error'); return; }
    setSubmitting(true);
    const payload = Object.fromEntries(Object.entries(formData).filter(([, v]) => v !== ''));
    const { data: response, error } = await client.from('Visitors').update({ data: payload }).eq('id', selectedVisitor.id).select().single();
    setSubmitting(false);
    if (error || response?.success === false) { showToast(getErrorMessage(response, error), 'error'); return; }
    const updated = getEntity(response);
    setVisitors(prev => prev.map(v => v.id === updated.id ? updated : v));
    showToast('访客信息已更新');
    closeModal();
  };

  const handleDelete = async () => {
    setSubmitting(true);
    const { data: response, error } = await client.from('Visitors').delete().eq('id', selectedVisitor.id).select().maybeSingle();
    setSubmitting(false);
    if (error || response?.success === false) { showToast(getErrorMessage(response, error), 'error'); return; }
    setVisitors(prev => prev.filter(v => v.id !== selectedVisitor.id));
    setTotal(prev => prev - 1);
    showToast('访客已删除');
    closeModal();
  };

  const totalPages = Math.ceil(total / PAGE_SIZE);

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Toast */}
        {toast && (
          <div className={`fixed top-20 right-4 z-50 flex items-center gap-3 px-4 py-3 rounded-xl shadow-xl border text-sm font-medium transition-all ${
            toast.type === 'error'
              ? 'bg-red-950 border-red-800 text-red-200'
              : 'bg-green-950 border-green-800 text-green-200'
          }`}>
            {toast.type === 'error' ? <AlertCircle className="w-4 h-4 text-red-400" /> : <CheckCircle2 className="w-4 h-4 text-green-400" />}
            {toast.message}
          </div>
        )}

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-500/30 rounded-full px-3 py-1 text-orange-400 text-xs font-medium mb-3">
              <Users className="w-3 h-3" /> 访客管理系统
            </div>
            <h1 className="text-3xl md:text-4xl font-black text-white">访客管理</h1>
            <p className="text-gray-400 mt-1">共 <span className="text-orange-400 font-semibold">{total}</span> 位访客</p>
          </div>
          <button
            onClick={openCreate}
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg px-5 py-2.5 transition-colors shrink-0"
          >
            <Plus className="w-4 h-4" /> 添加访客
          </button>
        </div>

        {/* Search */}
        <form onSubmit={handleSearch} className="flex gap-3 mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="搜索邮箱..."
              value={searchInput}
              onChange={e => setSearchInput(e.target.value)}
              className="w-full bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 rounded-lg pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
            />
          </div>
          <button type="submit" className="bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-200 rounded-lg px-4 py-2.5 text-sm font-medium transition-colors">
            搜索
          </button>
          {search && (
            <button type="button" onClick={() => { setSearch(''); setSearchInput(''); setPage(0); }} className="text-gray-400 hover:text-white text-sm px-3 transition-colors">
              清除
            </button>
          )}
        </form>

        {/* Table */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-800/80 border-b border-gray-700">
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">访客</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider hidden md:table-cell">联系方式</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider hidden lg:table-cell">地区</th>
                  <th className="text-left px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider hidden lg:table-cell">会员等级</th>
                  <th className="text-right px-5 py-3.5 text-xs font-semibold text-gray-400 uppercase tracking-wider">操作</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  Array.from({ length: 5 }).map((_, i) => (
                    <tr key={i} className="border-b border-gray-800">
                      {[1,2,3,4,5].map(j => (
                        <td key={j} className="px-5 py-4">
                          <div className="h-4 bg-gray-800 rounded animate-pulse" />
                        </td>
                      ))}
                    </tr>
                  ))
                ) : visitors.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="text-center py-16 text-gray-500">
                      <Users className="w-10 h-10 mx-auto mb-3 opacity-30" />
                      <p className="text-sm">暂无访客数据</p>
                    </td>
                  </tr>
                ) : (
                  visitors.map(visitor => {
                    const d = visitor.data;
                    const name = [d.first_name, d.last_name].filter(Boolean).join(' ') || '—';
                    return (
                      <tr key={visitor.id} className="border-b border-gray-800 hover:bg-gray-800/40 transition-colors">
                        <td className="px-5 py-4">
                          <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-sm shrink-0">
                              {(d.first_name?.[0] || d.email?.[0] || '?').toUpperCase()}
                            </div>
                            <div>
                              <div className="text-white font-medium text-sm">{name}</div>
                              <div className="text-gray-400 text-xs">{d.email}</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-5 py-4 hidden md:table-cell">
                          <div className="text-gray-300 text-sm">{d.phone || '—'}</div>
                        </td>
                        <td className="px-5 py-4 hidden lg:table-cell">
                          <div className="text-gray-300 text-sm flex items-center gap-1">
                            {d.country_region_name ? (
                              <><MapPin className="w-3 h-3 text-gray-500" />{d.country_region_name}</>
                            ) : '—'}
                          </div>
                        </td>
                        <td className="px-5 py-4 hidden lg:table-cell">
                          {d.membership_tier ? (
                            <span className="inline-flex items-center gap-1 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full px-2.5 py-0.5 text-xs font-medium">
                              <Crown className="w-3 h-3" />{d.membership_tier}
                            </span>
                          ) : (
                            <span className="text-gray-600 text-sm">—</span>
                          )}
                        </td>
                        <td className="px-5 py-4">
                          <div className="flex items-center justify-end gap-1">
                            <button onClick={() => openView(visitor)} className="p-1.5 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors" title="查看详情">
                              <Search className="w-3.5 h-3.5" />
                            </button>
                            <button onClick={() => openEdit(visitor)} className="p-1.5 text-gray-400 hover:text-orange-400 hover:bg-orange-500/10 rounded-lg transition-colors" title="编辑">
                              <Pencil className="w-3.5 h-3.5" />
                            </button>
                            <button onClick={() => openDelete(visitor)} className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-red-500/10 rounded-lg transition-colors" title="删除">
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-5 py-4 border-t border-gray-800">
              <span className="text-gray-400 text-sm">
                第 {page * PAGE_SIZE + 1}–{Math.min((page + 1) * PAGE_SIZE, total)} 条，共 {total} 条
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setPage(p => Math.max(0, p - 1))}
                  disabled={page === 0}
                  className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <span className="text-gray-300 text-sm font-medium px-2">{page + 1} / {totalPages}</span>
                <button
                  onClick={() => setPage(p => Math.min(totalPages - 1, p + 1))}
                  disabled={page >= totalPages - 1}
                  className="p-2 rounded-lg bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Create / Edit Modal */}
      {(modalMode === 'create' || modalMode === 'edit') && (
        <Modal title={modalMode === 'create' ? '添加访客' : '编辑访客'} onClose={closeModal}>
          <form onSubmit={modalMode === 'create' ? handleCreate : handleUpdate} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="名字" value={formData.first_name} onChange={v => setFormData(f => ({ ...f, first_name: v }))} placeholder="名字" />
              <FormField label="姓氏" value={formData.last_name} onChange={v => setFormData(f => ({ ...f, last_name: v }))} placeholder="姓氏" />
            </div>
            <FormField label="邮箱 *" value={formData.email} onChange={v => setFormData(f => ({ ...f, email: v }))} placeholder="example@email.com" type="email" required />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="电话" value={formData.phone} onChange={v => setFormData(f => ({ ...f, phone: v }))} placeholder="+1 234 567 8900" />
              <FormField label="会员等级" value={formData.membership_tier} onChange={v => setFormData(f => ({ ...f, membership_tier: v }))} placeholder="如: VIP, Premium" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="国家/地区" value={formData.country_region_name} onChange={v => setFormData(f => ({ ...f, country_region_name: v }))} placeholder="中国" />
              <FormField label="地区代码" value={formData.country_region_code} onChange={v => setFormData(f => ({ ...f, country_region_code: v }))} placeholder="CN" />
            </div>
            <FormField label="城市/位置" value={formData.location} onChange={v => setFormData(f => ({ ...f, location: v }))} placeholder="上海" />
            <FormField label="网站" value={formData.website} onChange={v => setFormData(f => ({ ...f, website: v }))} placeholder="https://example.com" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="Facebook" value={formData.facebook} onChange={v => setFormData(f => ({ ...f, facebook: v }))} placeholder="Facebook URL" />
              <FormField label="Twitter" value={formData.twitter} onChange={v => setFormData(f => ({ ...f, twitter: v }))} placeholder="Twitter URL" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField label="Instagram" value={formData.instagram} onChange={v => setFormData(f => ({ ...f, instagram: v }))} placeholder="Instagram URL" />
              <FormField label="YouTube" value={formData.youtube} onChange={v => setFormData(f => ({ ...f, youtube: v }))} placeholder="YouTube URL" />
            </div>
            <div>
              <label className="block text-gray-400 text-xs font-medium mb-1.5">备注</label>
              <textarea
                value={formData.comment}
                onChange={e => setFormData(f => ({ ...f, comment: e.target.value }))}
                placeholder="添加备注..."
                rows={3}
                className="w-full bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 resize-none"
              />
            </div>
            <div className="flex gap-3 pt-2">
              <button type="button" onClick={closeModal} className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium rounded-lg py-2.5 transition-colors">
                取消
              </button>
              <button type="submit" disabled={submitting} className="flex-1 bg-orange-500 hover:bg-orange-600 disabled:opacity-60 text-white font-semibold rounded-lg py-2.5 transition-colors">
                {submitting ? '保存中...' : (modalMode === 'create' ? '添加访客' : '保存更改')}
              </button>
            </div>
          </form>
        </Modal>
      )}

      {/* View Modal */}
      {modalMode === 'view' && selectedVisitor && (
        <Modal title="访客详情" onClose={closeModal}>
          <VisitorDetail visitor={selectedVisitor} onEdit={() => { openEdit(selectedVisitor); }} />
        </Modal>
      )}

      {/* Delete Confirm */}
      {modalMode === 'delete' && selectedVisitor && (
        <Modal title="确认删除" onClose={closeModal}>
          <div className="text-center py-4">
            <div className="w-14 h-14 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Trash2 className="w-6 h-6 text-red-400" />
            </div>
            <p className="text-gray-200 font-medium mb-2">确定要删除此访客吗？</p>
            <p className="text-gray-400 text-sm mb-6">{selectedVisitor.data.email}</p>
            <div className="flex gap-3">
              <button onClick={closeModal} className="flex-1 bg-gray-800 hover:bg-gray-700 text-gray-200 font-medium rounded-lg py-2.5 transition-colors">
                取消
              </button>
              <button onClick={handleDelete} disabled={submitting} className="flex-1 bg-red-600 hover:bg-red-700 disabled:opacity-60 text-white font-semibold rounded-lg py-2.5 transition-colors">
                {submitting ? '删除中...' : '确认删除'}
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

function Modal({ title, onClose, children }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-gray-900 border border-gray-700 rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-800 sticky top-0 bg-gray-900 z-10">
          <h3 className="text-white font-bold text-lg">{title}</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-gray-800 transition-colors">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

function FormField({ label, value, onChange, placeholder, type = 'text', required }) {
  return (
    <div>
      <label className="block text-gray-400 text-xs font-medium mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        className="w-full bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
      />
    </div>
  );
}

function VisitorDetail({ visitor, onEdit }) {
  const d = visitor.data;
  const name = [d.first_name, d.last_name].filter(Boolean).join(' ') || '未知';

  const socialLinks = [
    { icon: Globe, label: '网站', value: d.website },
    { icon: Facebook, label: 'Facebook', value: d.facebook },
    { icon: Twitter, label: 'Twitter', value: d.twitter },
    { icon: Instagram, label: 'Instagram', value: d.instagram },
    { icon: Youtube, label: 'YouTube', value: d.youtube },
  ].filter(s => s.value);

  return (
    <div className="space-y-5">
      {/* Avatar & Name */}
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 rounded-full bg-orange-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-black text-xl">
          {(d.first_name?.[0] || d.email?.[0] || '?').toUpperCase()}
        </div>
        <div>
          <div className="text-white font-bold text-lg">{name}</div>
          {d.membership_tier && (
            <span className="inline-flex items-center gap-1 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full px-2.5 py-0.5 text-xs font-medium mt-1">
              <Crown className="w-3 h-3" />{d.membership_tier}
            </span>
          )}
        </div>
      </div>

      {/* Info Grid */}
      <div className="grid grid-cols-1 gap-3">
        <DetailRow icon={Mail} label="邮箱" value={d.email} />
        {d.phone && <DetailRow icon={Phone} label="电话" value={d.phone} />}
        {(d.country_region_name || d.location) && (
          <DetailRow icon={MapPin} label="位置" value={[d.location, d.country_region_name].filter(Boolean).join(', ')} />
        )}
      </div>

      {/* Social Links */}
      {socialLinks.length > 0 && (
        <div>
          <div className="text-gray-400 text-xs font-medium mb-2">社交媒体</div>
          <div className="flex flex-wrap gap-2">
            {socialLinks.map(({ icon: Icon, label, value }) => (
              <a key={label} href={value} target="_blank" rel="noreferrer"
                className="inline-flex items-center gap-1.5 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-300 hover:text-white rounded-lg px-3 py-1.5 text-xs transition-colors">
                <Icon className="w-3.5 h-3.5" />{label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Comment */}
      {d.comment && (
        <div>
          <div className="text-gray-400 text-xs font-medium mb-2">备注</div>
          <p className="text-gray-300 text-sm bg-gray-800 rounded-lg p-3 leading-relaxed">{d.comment}</p>
        </div>
      )}

      {d.received_time && (
        <div className="text-gray-500 text-xs">注册时间: {new Date(d.received_time).toLocaleString('zh-CN')}</div>
      )}

      <button onClick={onEdit} className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg py-2.5 transition-colors flex items-center justify-center gap-2">
        <Pencil className="w-4 h-4" /> 编辑信息
      </button>
    </div>
  );
}

function DetailRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-start gap-3 bg-gray-800/50 rounded-lg px-3 py-2.5">
      <Icon className="w-4 h-4 text-gray-500 mt-0.5 shrink-0" />
      <div>
        <div className="text-gray-500 text-xs">{label}</div>
        <div className="text-gray-200 text-sm font-medium">{value}</div>
      </div>
    </div>
  );
}
